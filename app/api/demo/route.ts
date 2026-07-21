import { Resend } from "resend";

let resend: Resend | null = null;

if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
}

interface DemoRequestBody {
  intent: "demo" | "trial";
  plan: string;
  name: string;
  gymName: string;
  email: string;
  phone: string;
  country: string;
  preferredTime: string;
  message: string;
}

export async function POST(req: Request) {
  let body: Partial<DemoRequestBody>;

  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const {
    intent,
    plan,
    name,
    gymName,
    email,
    phone,
    country,
    preferredTime,
    message,
  } = body;

if (!resend) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }



  if (!name || !email || !phone) {
    return Response.json(
      { error: "Name, email, and phone are required." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY || !process.env.DEMO_NOTIFY_EMAIL) {
    console.error(
      "Demo form: RESEND_API_KEY or DEMO_NOTIFY_EMAIL is not set. See .env.example."
    );
    return Response.json(
      { error: "Email is not configured on the server yet." },
      { status: 500 }
    );
  }

  const isTrial = intent === "trial";
  const label = isTrial ? "Free Trial Request" : "Demo Request";

  try {
    await resend.emails.send({
      from: process.env.DEMO_FROM_EMAIL || "Gym Binary <onboarding@resend.dev>",
      to: process.env.DEMO_NOTIFY_EMAIL,
      reply_to: email,
      subject: `New ${label.toLowerCase()} — ${gymName || name}`,
      text: [
        `Type: ${label}`,
        plan ? `Plan Interested In: ${plan}` : null,
        `Name: ${name}`,
        `Gym Name: ${gymName || "—"}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Country: ${country || "—"}`,
        isTrial
          ? `Number of Branches: ${preferredTime || "—"}`
          : `Preferred Time: ${preferredTime || "—"}`,
        "",
        "Message:",
        message || "—",
        "",
        isTrial
          ? "Next step: create this tenant via the SuperAdmin panel and email them their login."
          : "Next step: reach out to schedule the walkthrough.",
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Demo form: failed to send email", err);
    return Response.json(
      { error: "Something went wrong sending your request. Please try again." },
      { status: 500 }
    );
  }
}
