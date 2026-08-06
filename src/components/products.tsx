/*
 * Grade descriptions below are standard industry characterisations. Have the
 * commercial team confirm them against the specifications actually stocked.
 */
const RANGES = [
  {
    group: "Printing",
    blurb:
      "Coated and uncoated grades for commercial, publication and label work.",
    grades: [
      {
        name: "C1S / C2S Papers",
        body: "One- and two-side coated stock for high-fidelity offset, cartons and label printing.",
      },
      {
        name: "LWC Papers",
        body: "Lightweight coated grades for catalogues, inserts and high-volume commercial print.",
      },
      {
        name: "Wet Strength Chromo",
        body: "Moisture-resistant coated label stock for beverage, cold-chain and wet-glue applications.",
      },
      {
        name: "Wood Free Papers",
        body: "Uncoated wood-free sheets for text, publishing, stationery and general commercial print.",
      },
    ],
  },
  {
    group: "Packaging",
    blurb:
      "Kraft and board grades for converting, cartons and food-contact packaging.",
    grades: [
      {
        name: "Bleached Kraft (MG / MF)",
        body: "Machine-glazed and machine-finished bleached kraft for pouches, wraps and liners.",
      },
      {
        name: "Virgin Kraft",
        body: "High-strength virgin fibre kraft for demanding converting and sack applications.",
      },
      {
        name: "Cyber XL Board",
        body: "High-bulk board engineered to hold stiffness at lower grammage.",
      },
      {
        name: "SBS Board",
        body: "Solid bleached sulphate for premium folding cartons and food-contact packaging.",
      },
      {
        name: "FBB Board",
        body: "Folding box board combining printability with reliable fold and crease performance.",
      },
    ],
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="scroll-mt-24 sm:scroll-mt-28 border-b border-line bg-mist"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="rise max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-copper-700 uppercase">
            Products
          </p>
          <h2 className="mt-6 text-section font-bold text-balance">
            Two ranges. Everything a press or a converting line runs on.
          </h2>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
          {RANGES.map((range) => (
            <div key={range.group} className="rise">
              <h3 className="text-3xl font-semibold">{range.group}</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-navy-600">
                {range.blurb}
              </p>

              <dl className="mt-9 space-y-px overflow-hidden rounded-2xl bg-line">
                {range.grades.map((grade) => (
                  <div key={grade.name} className="bg-white p-6 sm:p-7">
                    <dt className="font-medium">{grade.name}</dt>
                    <dd className="mt-2 text-base leading-relaxed text-navy-600">
                      {grade.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className="rise mt-12 text-base text-navy-600">
          Need a grammage or finish not listed here?{" "}
          <a
            href="#contact"
            className="font-medium text-navy underline underline-offset-4 transition-colors hover:text-copper-700"
          >
            Tell us the specification
          </a>{" "}
          and we&rsquo;ll source it.
        </p>
      </div>
    </section>
  );
}
