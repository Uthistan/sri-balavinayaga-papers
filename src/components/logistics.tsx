import { Anchor, Factory, Truck, Warehouse } from "lucide-react";

const STAGES = [
  {
    icon: Factory,
    step: "01",
    title: "Mills in the USA & Europe",
    body: "Orders placed with qualified mills against an agreed specification and shipping window.",
  },
  {
    icon: Anchor,
    step: "02",
    title: "Chennai & Tuticorin",
    body: "Ocean freight and customs clearance handled at both ports, whichever routes the consignment fastest.",
  },
  {
    icon: Warehouse,
    step: "03",
    title: "Sivakasi warehouse",
    body: "Stock received, checked against mill certificates and held ready for release.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Delivered",
    body: "Distribution across India, plus export consignments to customers in Sri Lanka.",
  },
];

export function Logistics() {
  return (
    <section
      id="logistics"
      className="scroll-mt-24 sm:scroll-mt-28 border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="rise max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-copper-700 uppercase">
            Logistics &amp; distribution
          </p>
          <h2 className="mt-6 text-section font-bold text-balance">
            From the mill to your floor.
          </h2>
          <p className="mt-7 text-xl leading-relaxed text-navy-600">
            Four stages, each one a place where a shipment can stall. We hold
            responsibility across all of them.
          </p>
        </div>

        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map(({ icon: Icon, step, title, body }) => (
            <li key={step} className="rise relative border-t border-navy pt-7">
              <div className="flex items-center gap-3">
                <Icon className="size-5 text-copper-700" aria-hidden />
                <span className="text-sm font-semibold text-navy-500">
                  {step}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-navy-600">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
