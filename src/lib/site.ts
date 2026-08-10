/**
 * Single source of truth for site-wide constants.
 * Used by the root layout metadata, structured data, sitemap and robots so
 * they can't drift apart.
 */
export const SITE = {
  name: "Sri Balavinayaga Papers",
  tagline:
    "Imported paper & board for India's printing and packaging industries",
  description:
    "Sri Balavinayaga Papers imports premium printing and packaging paper from established mills in the USA and Europe, and distributes it across India from Sivakasi, Tamil Nadu — with port operations at Chennai and Tuticorin.",
  // Set NEXT_PUBLIC_SITE_URL in production so canonical/OG URLs resolve correctly.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sribalavinayagapapers.com",
} as const;

export const ADDRESS = {
  street: "6/695/T2, Balaji Nagar",
  locality: "Sithurajapuram",
  city: "Sivakasi",
  postalCode: "626124",
  region: "Tamil Nadu",
  country: "India",
  countryCode: "IN",
} as const;

/** `href` values are E.164 for tel: links; `label` is how we display them. */
export const PHONE = {
  landline: { label: "04562 224596", href: "tel:+914562224596" },
  mobile: { label: "+91 63834 36277", href: "tel:+916383436277" },
  mobile1: { label: "+91 9487954596", href: "tel:+919487954596" },
} as const;

/**
 * The logo lockup — `public/logo-lockup.png`, 1180×390.
 *
 * This is `logo.png` cropped to its alpha bounding box. The supplied file is a
 * 1254×1254 canvas with the lockup in a band across the middle, so ~69% of its
 * height is empty padding — every `h-*` utility sizes the canvas, which left
 * the artwork rendering at roughly a third of the requested height. Cropping
 * makes the box and the artwork the same thing, so `h-24` means a 24-high logo.
 * Re-crop with the same alpha-bounding-box trim if the source is ever replaced.
 *
 * The background is genuinely transparent and the wordmark is white, so it
 * needs a dark surface — every placement (header, footer, preloader) is navy.
 *
 * `width`/`height` are the file's real pixel dimensions; they reserve layout
 * space so nothing shifts while it loads. Displayed size is CSS-controlled.
 */
export const LOGO = {
  src: "/logo-lockup.png",
  width: 1180,
  height: 390,
  alt: "Sri Balavinayaga Papers",
} as const;

/** Order mirrors the order sections appear on the page. */
export const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#sourcing", label: "Sourcing" },
  { href: "/#industries", label: "Industries" },
  { href: "/#products", label: "Products" },
  { href: "/#logistics", label: "Logistics" },
] as const;
