"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO, NAV_LINKS } from "@/lib/site";

/**
 * Fixed header: fully transparent over the hero, liquid glass once scrolled.
 *
 * It stays dark in both states because the logo artwork sits on a dark
 * background — a white bar would show a navy block behind the mark. Keeping one
 * colour scheme also means the contents never need to flip colour.
 *
 * Client-side for two genuinely interactive concerns: the scrolled state and
 * the mobile disclosure panel.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      {/*
       * The glass pane is a separate layer rather than a background on the
       * <header> so the whole effect — blur, tint, edge highlight — can be
       * cross-faded with one `opacity` transition. Negative z-index keeps it
       * behind the bar contents while staying inside the header's stacking
       * context, which is what lets the logo blend against it (below).
       *
       * It is `inset-0`, so when the mobile panel is open the header grows and
       * the glass grows with it — the panel needs no surface of its own.
       */}
      <div
        aria-hidden
        className={`glass-nav absolute inset-0 -z-10 transition-opacity duration-500 ${
          solid ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-[height] duration-500 sm:px-8 ${
          solid ? "h-24 sm:h-28" : "h-28 sm:h-32"
        }`}
      >
        <Link
          href="/"
          className="block shrink-0"
          onClick={() => setOpen(false)}
        >
          {/* Shrinks with the bar, so the two heights stay in proportion. */}
          <Image
            src={LOGO.src}
            alt={LOGO.alt}
            width={LOGO.width}
            height={LOGO.height}
            quality={90}
            priority
            className={`w-auto transition-[height] duration-500 ${
              solid ? "h-14 sm:h-16" : "h-18 sm:h-20"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full bg-copper px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-copper/90"
          >
            Request a quote
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 p-2 md:hidden"
        >
          {open ? (
            <X className="size-6" aria-hidden />
          ) : (
            <Menu className="size-6" aria-hidden />
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 px-5 pt-2 pb-6 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-4 text-lg"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-full bg-copper px-5 py-3.5 text-center text-sm font-medium text-navy"
          >
            Request a quote
          </Link>
        </nav>
      )}
    </header>
  );
}
