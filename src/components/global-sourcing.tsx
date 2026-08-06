import { ClipboardCheck, FileCheck2, Layers, Repeat2 } from "lucide-react";

const CRITERIA = [
  {
    icon: ClipboardCheck,
    title: "Mill qualification",
    body: "We qualify a mill on consistency, finish and reel quality before a single tonne ships to a customer.",
  },
  {
    icon: Layers,
    title: "Grade matching",
    body: "Coating, grammage, brightness, bulk and runnability — matched to the press and the end use, not to whatever is available.",
  },
  {
    icon: Repeat2,
    title: "Batch consistency",
    body: "A repeat order should run like the first one. Same mill, same specification, same behaviour on the machine.",
  },
  {
    icon: FileCheck2,
    title: "Documentation",
    body: "Mill certificates and test reports travel with the consignment, so your quality team has what it needs on arrival.",
  },
];

export function GlobalSourcing() {
  return (
    <section
      id="sourcing"
      className="relative isolate scroll-mt-24 sm:scroll-mt-28 overflow-hidden bg-navy text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(100%_70%_at_85%_10%,#2a1e4a_0%,transparent_60%),radial-gradient(50%_40%_at_12%_85%,rgba(198,132,74,0.14)_0%,transparent_70%)]"
      />
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="rise max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-copper uppercase">
            Global sourcing
          </p>
          <h2 className="mt-6 text-section font-bold text-balance">
            We select mills, not just paper.
          </h2>
          <p className="mt-7 text-xl leading-relaxed text-white/70">
            Anyone can quote a grade. The difference shows up on the third
            order, when the reel has to behave exactly like the first one did.
            That consistency comes from who you buy from — so that is where we
            put the work.
          </p>
          <p className="mt-5 text-xl leading-relaxed text-white/70">
            We buy from established mills across{" "}
            <span className="text-copper">the USA</span> and{" "}
            <span className="text-copper">Europe</span> — choosing the source by
            what the job demands, not by what happens to be cheapest that month.
          </p>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {CRITERIA.map(({ icon: Icon, title, body }) => (
            <li key={title} className="rise border-t border-white/15 pt-7">
              <Icon className="size-5 text-copper" aria-hidden />
              <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-white/60">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
