/**
 * TEMP placeholder: CSS-only dashboard mockup.
 * Once real app screenshots are ready, replace the contents of this file with:
 *
 *   <div className="w-[280px] mx-auto rounded-[36px] border-8 border-[#262626] p-4 shadow-med">
 *     <Image src="/assets/dashboard-screenshot.png" alt="Gym Binary dashboard" width={252} height={520} className="rounded-2xl" />
 *   </div>
 *
 * and drop the actual PNG/JPG into /public/assets/.
 */
export default function PhoneMockup() {
  return (
    <div className="w-[280px] mx-auto bg-ink-soft border-8 border-[#262626] rounded-[36px] shadow-med px-3.5 py-4 relative">
      <div className="w-[70px] h-[18px] bg-[#262626] rounded-full mx-auto mb-3.5" />

      <div className="bg-charcoal border border-charcoal-border rounded-2xl p-3.5 mb-2.5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[11px] text-gray-300">Active Members</span>
          <span className="text-[10px] font-semibold text-accent bg-accent/15 px-2 py-0.5 rounded-full">
            Owner
          </span>
        </div>
        <div className="font-display font-bold text-xl text-white">1,248</div>
      </div>

      <div className="bg-charcoal border border-charcoal-border rounded-2xl p-3.5 mb-2.5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[11px] text-gray-300">Expiring in 10 days</span>
          <span className="font-display font-bold text-xl text-accent">32</span>
        </div>
        <div className="h-1.5 bg-[#2b2b2b] rounded overflow-hidden">
          <div className="h-full bg-accent rounded" style={{ width: "62%" }} />
        </div>
      </div>

      <div className="bg-charcoal border border-charcoal-border rounded-2xl p-3.5">
        {[
          ["Today's Leads", "9"],
          ["Follow-ups Due", "4"],
          ["Today's Expenses", "\u20B92,150"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between text-xs text-gray-300 py-1.5 border-b border-charcoal-border last:border-none"
          >
            <span>{label}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
