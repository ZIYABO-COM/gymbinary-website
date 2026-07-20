import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "Does Gym Binary support multiple branches?",
    a: "Yes — Gym Binary is built around gym groups with multiple branches from day one. Each branch keeps its own staff and members while the owner sees a rolled-up view across all locations.",
  },
  {
    q: "How does WhatsApp reminders work?",
    a: "Gym Binary generates a direct WhatsApp link for each member whose plan is expiring, so your front desk can send a reminder in one tap — no third-party API cost or approval process involved.",
  },
  {
    q: "Is online payment collection included?",
    a: "Gym Binary currently supports recording payments made by cash, UPI, or card, and automatically keeps every member's balance accurate. Direct online payment collection is on our roadmap.",
  },
  {
    q: "What roles does the software support?",
    a: "Owner, Admin, Trainer, Front Desk, and Member — each with a dashboard scoped to what they need. Admins manage staff and members without seeing financials; only Owners see full revenue data.",
  },
  {
    q: "Can I try Gym Binary before paying?",
    a: "Yes, every plan starts with a free trial so you can set up your branches and test the workflow with your own team before committing.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions gym owners ask us first."
          center
        />
        <div className="max-w-[760px] mx-auto">
          {faqs.map((item, i) => (
            <details
              key={item.q}
              className="faq-item bg-white border border-gray-200 rounded-md p-5 mb-3"
              open={i === 0}
            >
              <summary className="cursor-pointer font-semibold text-base list-none flex justify-between items-center">
                {item.q}
              </summary>
              <p className="mt-3.5 text-[14.5px] text-ui-muted leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
