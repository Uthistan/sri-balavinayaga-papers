import Image from "next/image";
import Link from "next/link";
import { ADDRESS, LOGO, NAV_LINKS, PHONE, SITE } from "@/lib/site";

const RANGE = [
  "C1S / C2S Papers",
  "LWC Papers",
  "Wood Free Papers",
  "SBS & FBB Board",
  "Virgin & Bleached Kraft",
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Image
            src={LOGO.src}
            alt={LOGO.alt}
            width={LOGO.width}
            height={LOGO.height}
            quality={90}
            className="h-20 w-auto"
          />
          <p className="mt-6 max-w-sm text-base leading-relaxed text-white/60">
            Importer and wholesale distributor of premium printing and packaging
            paper, supplying India&rsquo;s printing and packaging industries
            from Sivakasi.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs tracking-[0.16em] text-copper uppercase">
            Company
          </h2>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-xs tracking-[0.16em] text-copper uppercase">
            Range
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {RANGE.map((grade) => (
              <li key={grade}>{grade}</li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-4">
          <h2 className="text-xs tracking-[0.16em] text-copper uppercase">
            Contact
          </h2>
          <div className="mt-4 grid gap-6 text-base leading-relaxed text-white/70 sm:grid-cols-2">
            <address className="not-italic">
              <span className="block">{ADDRESS.street}</span>
              <span className="block">{ADDRESS.locality}</span>
              <span className="block">
                {ADDRESS.city} &ndash; {ADDRESS.postalCode}
              </span>
              <span className="block">
                {ADDRESS.region}, {ADDRESS.country}
              </span>
            </address>
            <div className="space-y-2">
              <p>
                <a
                  href={PHONE.mobile.href}
                  className="transition-colors hover:text-white"
                >
                  {PHONE.mobile.label}
                </a>
              </p>
              <p>
                <a
                  href={PHONE.landline.href}
                  className="transition-colors hover:text-white"
                >
                  {PHONE.landline.label}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-white/50 sm:px-8">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
