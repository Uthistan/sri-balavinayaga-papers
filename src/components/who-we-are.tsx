const ROLES = [
  {
    title: "We import",
    body: "Premium printing and packaging grades brought in from established global mills, cleared through Chennai and Tuticorin.",
  },
  {
    title: "We hold stock",
    body: "Depth of inventory in Sivakasi, so a repeat order doesn't wait on a shipping schedule.",
  },
  {
    title: "We advise",
    body: "Grade, grammage, brightness, finish. We help you specify the right stock for the job before you commit to a run.",
  },
];

export function WhoWeAre() {
  return (
    <section id="about" className="scroll-mt-24 sm:scroll-mt-28 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="rise lg:col-span-6">
            <p className="text-xs tracking-[0.2em] text-copper-700 uppercase">
              Who we are
            </p>
            <h2 className="mt-6 text-section font-bold text-balance">
              We don&rsquo;t run a mill. We run a supply line.
            </h2>
          </div>

          <div className="rise lg:col-span-6 lg:pt-16">
            <p className="text-xl leading-relaxed text-navy-600">
              Sri Balavinayaga Papers is an importer and wholesale distributor
              of premium paper and board. Our work is judgement and reliability:
              choosing the mills worth buying from, carrying the stock our
              customers actually run, and making sure the grade you specified
              arrives on the date you were promised.
            </p>
            <p className="mt-5 text-xl leading-relaxed text-navy-600">
              We operate from Sivakasi — India&rsquo;s largest printing and
              packaging hub — which puts us within reach of the presses and
              converting lines we supply.
            </p>
          </div>
        </div>

        <dl className="mt-20 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-3">
          {ROLES.map((role) => (
            <div key={role.title} className="rise bg-white p-8">
              <dt className="text-2xl font-semibold">{role.title}</dt>
              <dd className="mt-3 text-base leading-relaxed text-navy-600">
                {role.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
