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
 * The logo lockup — `public/sribalavinayagapapers.jpg`, 564×210.
 *
 * The artwork has an opaque dark background (#0C0728) baked in, so it is only
 * ever placed on navy: the header is transparent over the hero then turns navy
 * on scroll, and the footer is navy. On a white surface it would show a dark
 * block. The site's --color-navy (#0B0728) is deliberately set to that same
 * value, so the logo's edges disappear into the background.
 *
 * `width`/`height` are the file's real pixel dimensions; they reserve layout
 * space so nothing shifts while it loads. Displayed size is CSS-controlled.
 */
export const LOGO = {
  src: "/sribalavinayagapapers.jpg",
  width: 564,
  height: 210,
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
