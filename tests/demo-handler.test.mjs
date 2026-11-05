import test from "node:test";
import assert from "node:assert/strict";
import { createDemoHandler, validateEnquiry } from "../lib/demo-handler.mjs";
const valid = {
  name: "Demo Tester",
  gymName: "Example Studio",
  email: "tester@example.com",
  phone: "+91 9000000000",
  country: "India",
  branches: "1",
  message: "Test only",
  consent: true,
  website: "",
};
const req = (body = valid, origin = "https://www.gymbinary.com") =>
  new Request("https://www.gymbinary.com/api/demo", {
    method: "POST",
    headers: { "Content-Type": "application/json", origin },
    body: JSON.stringify(body),
  });
const env = {
  RESEND_API_KEY: "test-key-not-a-real-credential",
  DEMO_FROM_EMAIL: "Test <test@example.com>",
};
test("invalid inputs and missing consent are rejected", () => {
  for (const v of [
    null,
    [],
    { ...valid, email: "wrong" },
    { ...valid, phone: "x" },
    { ...valid, consent: false },
    { ...valid, name: { x: 1 } },
    { ...valid, message: "x".repeat(1501) },
    { ...valid, branches: "unlimited" },
    { ...valid, website: "spam.example" },
    { ...valid, intent: "signup" },
    { ...valid, intent: { type: "trial" } },
  ])
    assert.ok(validateEnquiry(v).error);
});
test("foreign-origin submissions do not invoke email delivery", async () => {
  let calls = 0;
  const post = createDemoHandler({
    env,
    deliver: async () => {
      calls++;
    },
  });
  assert.equal((await post(req(valid, "https://other.example"))).status, 403);
  assert.equal(calls, 0);
});
test("unconfigured email never returns false success", async () => {
  const r = await createDemoHandler({ env: {} })(req());
  assert.equal(r.status, 503);
  assert.notEqual((await r.json()).ok, true);
});
test("provider rejection and error envelopes cannot produce success", async () => {
  for (const mock of [
    new Response('{"message":"rejected"}', { status: 403 }),
    new Response('{"error":"denied"}', { status: 200 }),
  ]) {
    const post = createDemoHandler({ env, deliver: async () => mock });
    assert.equal((await post(req())).status, 502);
  }
});
test("a valid request is formatted correctly; transport is mocked", async () => {
  let delivered;
  const post = createDemoHandler({
    env,
    deliver: async (url, options) => {
      delivered = { url, options };
      return Response.json({ id: "test-message" });
    },
  });
  const r = await post(req());
  assert.deepEqual(await r.json(), { ok: true });
  const data = JSON.parse(delivered.options.body);
  assert.deepEqual(data.to, ["contact@gymbinary.com"]);
  assert.equal(data.reply_to, valid.email);
  assert.ok(data.text.includes("Contact consent: confirmed"));
});
test("body-size and malformed-JSON limits are enforced", async () => {
  const post = createDemoHandler({ env: {} });
  const huge = await post(req({ ...valid, message: "x".repeat(17000) }));
  assert.equal(huge.status, 413);
  const r = await post(
    new Request("https://www.gymbinary.com/api/demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{",
    }),
  );
  assert.equal(r.status, 400);
});
test("rate limits expire and do not send additional mail", async () => {
  let clock = 0,
    calls = 0;
  const post = createDemoHandler({
    env: { ...env, DEMO_TRUST_PROXY: "true" },
    now: () => clock,
    deliver: async () => {
      calls++;
      return Response.json({ id: "mock" });
    },
  });
  for (let i = 0; i < 5; i++) assert.equal((await post(req())).status, 200);
  assert.equal((await post(req())).status, 429);
  assert.equal(calls, 5);
  clock = 600001;
  assert.equal((await post(req())).status, 200);
});

test("trial requests reach the inbox with a distinct subject and enquiry type", async () => {
  let payload;
  const post = createDemoHandler({
    env,
    deliver: async (_url, options) => {
      payload = JSON.parse(options.body);
      return Response.json({ id: "mock-trial" });
    },
  });
  const result = await post(req({ ...valid, intent: "trial" }));
  assert.equal(result.status, 200);
  assert.equal(payload.subject, "GymBinary free-trial request");
  assert.ok(payload.text.includes("Enquiry type: trial"));
  assert.ok(payload.text.includes("Example Studio"));
});
test("existing enquiry payloads without intent remain demo requests", () => {
  assert.equal(validateEnquiry(valid).value.intent, "demo");
});
