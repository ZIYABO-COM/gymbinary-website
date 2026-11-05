// Accept common preview host flags while keeping ordinary `npm run dev` usable.
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const incoming = process.argv.slice(2);
const args = [];
for (let i = 0; i < incoming.length; i++) {
  const arg = incoming[i];
  if (arg === "--strictPort") continue;
  if (arg === "--host") {
    args.push("--hostname", incoming[++i] || "0.0.0.0");
    continue;
  }
  args.push(arg);
}
if (!args.includes("--hostname")) args.push("--hostname", "0.0.0.0");
let nextCli;
try {
  nextCli = require.resolve("next/dist/bin/next");
} catch {
  console.error(
    "Project dependencies are missing. Run npm ci in the project folder, then run npm run dev.",
  );
  process.exit(1);
}
const child = spawn(process.execPath, [nextCli, "dev", "--webpack", ...args], {
  stdio: "inherit",
  env: process.env,
});
for (const signal of ["SIGTERM", "SIGINT"])
  process.on(signal, () => child.kill(signal));
child.on("exit", (code) => process.exit(code ?? 1));
