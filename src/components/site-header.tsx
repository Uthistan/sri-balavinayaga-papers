"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO, NAV_LINKS } from "@/lib/site";

/**
 * Fixed header: transparent over the hero, navy once the user scrolls past it.
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
    /*
     * The bar is opaque navy at all times, not transparent over the hero.
     *
     * The logo file is a JPEG with a flat #0C0628 background baked in. Over the
     * hero's gradient — which ranges from #0F0A2D to #291D47 behind the header —
     * that flat rectangle is plainly visible. A solid bar gives it a flat
     * surface to sit on, where the 1-value difference is imperceptible.
     *
     * Supply a transparent PNG or SVG logo and this can go back to being
     * transparent over the hero.
     */
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-navy text-white transition-colors duration-300 ${
        solid ? "border-b border-white/10" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-5 sm:h-28 sm:px-8">
        <Link
          href="/"
          className="block shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src={LOGO.src}
            alt={LOGO.alt}
            width={LOGO.width}
            height={LOGO.height}
            quality={90}
            priority
            className="h-16 w-auto sm:h-20"
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
          className="border-t border-white/10 bg-navy px-5 pt-2 pb-6 md:hidden"
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
