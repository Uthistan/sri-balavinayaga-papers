import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PHONE } from "@/lib/site";

/*
 * Server component, no JS. The hero grows to fit its content (`min-h-svh`,
 * never a fixed height) — locking it to exactly 100vh clips the headline on
 * laptop-height viewports, since this content needs roughly 880px.
 *
 * The scroll storytelling lives in <SupplyLine /> immediately below, which
 * holds far less content and can safely be pinned.
 */

// Each fact is a company capability, not geography trivia. "Ready stock" leads
// deliberately: it is what separates a stockist from a broker, and it is the
// first thing a buyer with an urgent requirement needs to know.
const FACTS = [
  { value: "Ready stock", label: "Held in Sivakasi, not on the water" },
  { value: "USA & Europe", label: "Mill sourcing regions" },
  { value: "Chennai & Tuticorin", label: "Port operations" },
  { value: "India & Sri Lanka", label: "Delivery coverage" },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-navy text-white">
      {/*
       * Backdrop is layered CSS gradients rather than an image: zero bytes, no
       * network request, and it leaves the <h1> as the LCP element.
       *
       * When real photography arrives (a port, a reel stack, a press floor),
       * drop a <next/image fill priority sizes="100vw" /> in here — the layout
       * is already sized for it and the gradients stay as the loading colour.
       */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(110%_75%_at_78%_0%,#2a1e4a_0%,transparent_58%),radial-gradient(80%_55%_at_8%_100%,#1b1436_0%,transparent_62%),radial-gradient(55%_38%_at_86%_12%,rgba(198,132,74,0.18)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-linear-to-t from-navy to-transparent"
      />

      <div className="mx-auto w-full max-w-6xl px-5 pt-36 pb-14 sm:px-8 sm:pt-40 sm:pb-20">
        <p
          className="reveal text-xs tracking-[0.2em] text-copper uppercase"
          style={{ animationDelay: "calc(var(--enter-delay) + 80ms)" }}
        >
          Paper importer &amp; wholesale distributor · Sivakasi, Tamil Nadu
        </p>

        <h1
          className="reveal mt-6 max-w-4xl text-hero font-bold text-balance"
          style={{ animationDelay: "var(--enter-delay)" }}
        >
          Imported paper and board, delivered across India.
        </h1>

        <p
          className="reveal mt-7 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl"
          style={{ animationDelay: "calc(var(--enter-delay) + 160ms)" }}
        >
          We import premium printing and packaging grades from established mills
          across the USA and Europe, hold them as ready stock in Sivakasi, and
          deliver to printers and converters throughout India and Sri Lanka.
        </p>

        <div
          className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "calc(var(--enter-delay) + 240ms)" }}
        >
          {/* The quote request is the conversion action, so it carries the
              primary weight; browsing grades is the lower-commitment fallback. */}
          <Link
            href="/#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-copper/90"
          >
            Request a quote
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
          <Link
            href="/#products"
            className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-sm font-medium transition-colors hover:border-white/60"
          >
            View our grades
          </Link>
        </div>

        {/* Many B2B buyers here would rather call than fill in a form. */}
        <p
          className="reveal mt-5 text-base text-white/60"
          style={{ animationDelay: "calc(var(--enter-delay) + 280ms)" }}
        >
          Or speak to us directly —{" "}
          <a
            href={PHONE.mobile.href}
            className="font-medium text-white transition-colors hover:text-copper"
          >
            {PHONE.mobile.label}
          </a>
        </p>

        <dl
          className="reveal mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 sm:mt-16 sm:grid-cols-4"
          style={{ animationDelay: "calc(var(--enter-delay) + 320ms)" }}
        >
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <dt className="text-2xl font-semibold sm:text-3xl">
                {fact.value}
              </dt>
              <dd className="mt-2 text-base text-white/60">{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
