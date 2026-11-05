const MAX_BYTES = 16384;
const allowedBranchCounts = new Set(["", "1", "2-5", "6+", "discuss"]);
const response = (body, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
export function validateEnquiry(body) {
  if (!body || typeof body !== "object" || Array.isArray(body))
    return { error: "Please provide your enquiry details." };
  const fields = {
    intent: 8,
    name: 80,
    gymName: 120,
    email: 254,
    phone: 32,
    country: 80,
    branches: 10,
    message: 1500,
    website: 200,
  };
  const clean = {};
  for (const [key, max] of Object.entries(fields)) {
    const v = body[key] ?? (key === "intent" ? "demo" : "");
    if (typeof v !== "string" || v.length > max)
      return { error: "Please check your form details and message length." };
    clean[key] = v.trim();
  }
  if (!["demo", "trial"].includes(clean.intent))
    return { error: "Please choose a demo or free-trial enquiry." };
  if (clean.website) return { error: "We could not accept this request." };
  if (!clean.name || !clean.gymName || !clean.email || !clean.phone)
    return { error: "Name, gym name, email and phone are required." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email))
    return { error: "Please enter a valid email address." };
  const digits = clean.phone.replace(/\D/g, "");
  if (
    !/^[+\d\s().-]+$/.test(clean.phone) ||
    digits.length < 7 ||
    digits.length > 15
  )
    return { error: "Please enter a valid phone number with country code." };
  if (
    /[\r\n]/.test(clean.name + clean.gymName + clean.email + clean.phone) ||
    !allowedBranchCounts.has(clean.branches)
  )
    return { error: "Please check your contact details and branch selection." };
  if (body.consent !== true)
    return { error: "Please agree to being contacted about your enquiry." };
  return { value: clean };
}
export function createDemoHandler({
  env = process.env,
  deliver = (...args) => fetch(...args),
  now = () => Date.now(),
} = {}) {
  const buckets = new Map();
  return async function POST(req) {
    const origin = req.headers.get("origin");
    const host = req.headers.get("host") || new URL(req.url).host;
    const allowed = new Set([
      `https://${host}`,
      `http://${host}`,
      "https://www.gymbinary.com",
      "https://gymbinary.com",
    ]);
    if (origin && !allowed.has(origin))
      return response(
        { error: "Please send your enquiry through the GymBinary website." },
        403,
      );
    if (
      !req.headers
        .get("content-type")
        ?.toLowerCase()
        .startsWith("application/json")
    )
      return response({ error: "Unsupported request format." }, 415);
    if (Number(req.headers.get("content-length")) > MAX_BYTES)
      return response({ error: "Your request is too long." }, 413);
    let body;
    try {
      const reader = req.body?.getReader();
      if (!reader) return response({ error: "Your request is empty." }, 400);
      const chunks = [];
      let total = 0;
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        total += value.byteLength;
        if (total > MAX_BYTES) {
          await reader.cancel();
          return response({ error: "Your request is too long." }, 413);
        }
        chunks.push(value);
      }
      const buffer = new Uint8Array(total);
      let offset = 0;
      for (const c of chunks) {
        buffer.set(c, offset);
        offset += c.length;
      }
      body = JSON.parse(new TextDecoder().decode(buffer));
    } catch {
      return response(
        { error: "We could not read your enquiry. Please try again." },
        400,
      );
    }
    const parsed = validateEnquiry(body);
    if (parsed.error) return response({ error: parsed.error }, 400);
    if (!env.RESEND_API_KEY || !env.DEMO_FROM_EMAIL)
      return response(
        {
          error:
            "Online requests are temporarily unavailable. Please contact us by email or phone.",
        },
        503,
      );
    const stamp = now();
    for (const [key, b] of buckets) if (b.until <= stamp) buckets.delete(key);
    // Only trust the proxy header when the deployment operator explicitly enables it.
    const proxy = env.DEMO_TRUST_PROXY === "true";
    const key = proxy
      ? req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
      : "shared";
    const limit = proxy ? 5 : 30;
    const bucket = buckets.get(key) || { count: 0, until: stamp + 600000 };
    if (bucket.count >= limit || (!buckets.has(key) && buckets.size >= 2000))
      return response(
        {
          error:
            "Too many requests. Please wait a little or email contact@gymbinary.com.",
        },
        429,
      );
    bucket.count++;
    buckets.set(key, bucket);
    const v = parsed.value;
    const isTrial = v.intent === "trial";
    const text = [
      isTrial
        ? "New GymBinary free-trial request"
        : "New GymBinary demo enquiry",
      `Enquiry type: ${v.intent}`,
      `Name: ${v.name}`,
      `Gym: ${v.gymName}`,
      `Email: ${v.email}`,
      `Phone: ${v.phone}`,
      `Country: ${v.country || "Not provided"}`,
      `Branches: ${v.branches || "Not provided"}`,
      "Contact consent: confirmed for this enquiry",
      "",
      "Message:",
      v.message || "Not provided",
    ].join("\n");
    try {
      const sent = await deliver("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: env.DEMO_FROM_EMAIL,
          to: [env.DEMO_NOTIFY_EMAIL || "contact@gymbinary.com"],
          reply_to: v.email,
          subject: isTrial
            ? "GymBinary free-trial request"
            : "GymBinary product walkthrough enquiry",
          text,
        }),
        signal: AbortSignal.timeout(12000),
      });
      const result = await sent.json();
      if (!sent.ok || typeof result.id !== "string" || !result.id)
        throw new Error("delivery rejected");
      return response({ ok: true });
    } catch {
      return response(
        {
          error:
            "We could not send your request. Please try again or contact us directly.",
        },
        502,
      );
    }
  };
}
