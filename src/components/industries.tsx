import { Box, Layers3, Newspaper, Package, Printer, Tag } from "lucide-react";

const INDUSTRIES = [
  {
    icon: Printer,
    title: "Printing industry",
    body: "Coated and uncoated grades supplied to specification, run after run.",
  },
  {
    icon: Package,
    title: "Packaging industry",
    body: "Kraft and board stock for converting operations of every scale.",
  },
  {
    icon: Newspaper,
    title: "Commercial printers",
    body: "Catalogues, inserts, brochures and publication work at volume.",
  },
  {
    icon: Layers3,
    title: "Offset printers",
    body: "Sheets that behave predictably on the press — flat, consistent, clean.",
  },
  {
    icon: Box,
    title: "Carton manufacturers",
    body: "SBS, FBB and high-bulk boards for folding cartons and rigid packaging.",
  },
  {
    icon: Tag,
    title: "Label manufacturers",
    body: "Chromo and wet-strength grades for wet-glue and cold-chain labelling.",
  },
];

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 sm:scroll-mt-28 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="rise max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-copper-700 uppercase">
            Industries served
          </p>
          <h2 className="mt-6 text-section font-bold text-balance">
            Supplying the businesses Sivakasi is built on.
          </h2>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(({ icon: Icon, title, body }) => (
            <li key={title} className="rise border-t border-line pt-7">
              <Icon className="size-5 text-copper-700" aria-hidden />
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-navy-600">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
