/*
 * Every entry here must say something no earlier section already said.
 * Removed for duplication: "port-side clearing" (Logistics, stage 02),
 * "people who know presses" (Who We Are, "We advise") and "built for the
 * long term" (asserted nothing checkable).
 *
 * ⚠️ VERIFY BEFORE LAUNCH — "part load" and "samples" are standard stockist
 * practice but are not stated in the company brief. Confirm both are offered.
 */
const REASONS = [
  {
    title: "One supplier, both ranges",
    body: "Printing and packaging grades from a single relationship — fewer vendors to chase, one accountable point of contact.",
  },
  {
    title: "Ready stock, not lead times",
    body: "Held in Sivakasi and available now. An urgent requirement isn't gated by an eight-week sailing schedule.",
  },
  {
    title: "Order the quantity you need",
    body: "Full container or part load from stock. You don't have to import a container yourself to get a competitive price.",
  },
  {
    title: "Samples before you commit",
    body: "Run a sample on your own machine and confirm the stock behaves before you place a bulk order.",
  },
  {
    title: "Specification integrity",
    body: "What was quoted is what is delivered. No substitutions arriving unannounced on the loading dock.",
  },
  {
    title: "Export handled end to end",
    body: "Consignments to Sri Lanka shipped with the export documentation completed on your behalf.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="rise max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-copper-700 uppercase">
            Why choose us
          </p>
          <h2 className="mt-6 text-section font-bold text-balance">
            Reliability is the product.
          </h2>
          <p className="mt-7 text-xl leading-relaxed text-navy-600">
            Paper is a commodity right up until it fails on the machine. What
            our customers buy from us is the confidence that it won&rsquo;t.
          </p>
        </div>

        <dl className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div key={reason.title} className="rise border-t border-line pt-7">
              <dt className="text-lg font-medium">{reason.title}</dt>
              <dd className="mt-2 text-base leading-relaxed text-navy-600">
                {reason.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
