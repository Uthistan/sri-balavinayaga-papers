"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// The three beats of the supply line, in the order a consignment travels them.
const CHAPTERS = [
  {
    step: "01 — Sourcing",
    title: "It starts at the mill.",
    body: "We qualify a mill on consistency, finish and reel quality before a single tonne ships to a customer.",
  },
  {
    step: "02 — Freight",
    title: "Then it clears the port.",
    body: "Ocean freight and customs handled at Chennai and Tuticorin — whichever routes your consignment fastest.",
  },
  {
    step: "03 — Stock",
    title: "And it waits in Sivakasi.",
    body: "On the ground and available now, so an urgent requirement isn't eight weeks out at sea.",
  },
];

export function SupplyLine() {
  const root = useRef<HTMLDivElement>(null);

  /*
   * Pinning is CSS `sticky`; GSAP only scrubs the cross-fade. Keeping the pin
   * in CSS means the layout is still correct if the script never runs.
   *
   * Desktop only, and only when motion is welcome. Below `lg` the chapters
   * render as a plain stacked list — 200vh of extra scroll between a buyer and
   * the content is a poor trade on a phone.
   *
   * The pinned panel deliberately holds very little: a pinned panel must fit
   * inside 100vh at every viewport height, or its content gets clipped.
   */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const chapters = gsap.utils.toArray<HTMLElement>(".chapter");

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.5,
            },
          });

          chapters.forEach((chapter, i) => {
            const at = i / chapters.length;
            tl.fromTo(
              chapter,
              { autoAlpha: 0, y: 40 },
              { autoAlpha: 1, y: 0, duration: 0.12 },
              at,
            );
            if (i < chapters.length - 1) {
              tl.to(
                chapter,
                { autoAlpha: 0, y: -40, duration: 0.12 },
                at + 0.21,
              );
            }
          });
        },
      );
    },
    { scope: root },
  );

  return (
    <div ref={root} className="relative bg-navy text-white lg:h-[280vh]">
      <section className="sticky top-0 isolate overflow-hidden lg:flex lg:h-svh lg:items-center">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_50%,#2a1e4a_0%,transparent_70%)]"
        />

        <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 lg:relative lg:py-0">
          <h2 className="text-xs tracking-[0.2em] text-copper uppercase">
            The supply line
          </h2>

          {/*
           * On desktop the chapters stack in one place and cross-fade. Below
           * `lg` they simply flow as a list — no absolute positioning, so
           * nothing can overlap or clip.
           */}
          <div className="mt-10 space-y-14 lg:mt-0 lg:h-64 lg:space-y-0">
            {CHAPTERS.map((chapter) => (
              <div
                key={chapter.step}
                className="chapter lg:absolute lg:inset-x-0 lg:top-14 lg:opacity-0"
              >
                <p className="text-sm font-semibold text-white/50">
                  {chapter.step}
                </p>
                <p className="mt-4 max-w-3xl text-section font-bold text-balance">
                  {chapter.title}
                </p>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                  {chapter.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
