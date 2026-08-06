"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Check, Loader2, MapPin, Phone } from "lucide-react";
import { submitEnquiry } from "@/app/actions";
import type { ContactInput } from "@/lib/contact-schema";
import { ADDRESS, PHONE } from "@/lib/site";

/*
 * Validation rules are written with React Hook Form's built-ins rather than
 * zodResolver, and `ContactInput` is imported as a *type only* so Zod is
 * erased at build time.
 *
 * Why: Zod + the resolver added 77 KB gzipped to the first-load bundle — 30%
 * of the page's JS — for a form at the very bottom of the page. Zod still
 * guards the server action, which is the boundary that actually matters, and
 * `contact-schema.ts` remains the single source of truth for the shape.
 *
 * Please don't reintroduce zodResolver here without re-measuring the bundle.
 */
const FIELD =
  // text-base (16px) is deliberate: anything smaller makes iOS Safari zoom the
  // viewport when the field is focused.
  "mt-2 w-full rounded-lg border border-navy-300 bg-white px-4 py-3 text-base placeholder:text-navy-500 outline-none transition-colors focus:border-navy";

const ERROR = "mt-2 text-sm text-red-700";

export function Contact() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>();

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    const result = await submitEnquiry(values);
    if (result.ok) setSent(true);
    else setServerError(result.message ?? "Something went wrong.");
  });

  return (
    <section id="contact" className="scroll-mt-24 sm:scroll-mt-28 bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.2em] text-copper-700 uppercase">
              Contact
            </p>
            <h2 className="mt-6 text-section font-bold text-balance">
              Tell us what you need to run.
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-navy-600">
              Send us the grade, grammage and quantity — or describe the job and
              we&rsquo;ll recommend the stock. We reply to every enquiry.
            </p>

            <dl className="mt-10 space-y-6 text-base">
              <div>
                <dt className="text-xs tracking-[0.16em] text-navy-500 uppercase">
                  Call us
                </dt>
                <dd className="mt-3 space-y-1">
                  <a
                    href={PHONE.mobile.href}
                    className="flex items-center gap-2.5 font-medium transition-colors hover:text-copper-700"
                  >
                    <Phone className="size-4 text-copper-700" aria-hidden />
                    {PHONE.mobile.label}
                  </a>
                  <a
                    href={PHONE.landline.href}
                    className="flex items-center gap-2.5 pl-6.5 text-navy-600 transition-colors hover:text-copper-700"
                  >
                    {PHONE.landline.label}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs tracking-[0.16em] text-navy-500 uppercase">
                  Visit us
                </dt>
                <dd className="mt-3 flex gap-2.5">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-copper-700"
                    aria-hidden
                  />
                  <address className="leading-relaxed text-navy-600 not-italic">
                    {ADDRESS.street}, {ADDRESS.locality}
                    <br />
                    {ADDRESS.city} &ndash; {ADDRESS.postalCode}
                    <br />
                    {ADDRESS.region}, {ADDRESS.country}
                  </address>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            {sent ? (
              <div
                role="status"
                className="flex items-start gap-4 rounded-2xl border border-line bg-white p-8"
              >
                <Check
                  className="mt-0.5 size-5 shrink-0 text-success"
                  aria-hidden
                />
                <div>
                  <p className="font-medium">Thank you — your enquiry is in.</p>
                  <p className="mt-2 text-base leading-relaxed text-navy-600">
                    A member of our team will get back to you shortly with
                    availability and pricing.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="grid gap-6 sm:grid-cols-2"
              >
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    autoComplete="name"
                    className={FIELD}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name", {
                      required: "Please enter your name.",
                      validate: (v) =>
                        v.trim().length >= 2 || "Please enter your name.",
                    })}
                  />
                  {errors.name && (
                    <p id="name-error" className={ERROR}>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <input
                    id="company"
                    autoComplete="organization"
                    className={FIELD}
                    aria-invalid={!!errors.company}
                    aria-describedby={
                      errors.company ? "company-error" : undefined
                    }
                    {...register("company", {
                      required: "Please enter your company name.",
                      validate: (v) =>
                        v.trim().length >= 2 ||
                        "Please enter your company name.",
                    })}
                  />
                  {errors.company && (
                    <p id="company-error" className={ERROR}>
                      {errors.company.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={FIELD}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email", {
                      required: "Please enter a valid email address.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address.",
                      },
                    })}
                  />
                  {errors.email && (
                    <p id="email-error" className={ERROR}>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone{" "}
                    <span className="font-normal text-navy-500">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className={FIELD}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    {...register("phone", {
                      maxLength: {
                        value: 20,
                        message: "That phone number looks too long.",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p id="phone-error" className={ERROR}>
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="requirement" className="text-sm font-medium">
                    Your requirement
                  </label>
                  <textarea
                    id="requirement"
                    rows={5}
                    placeholder="e.g. 250 GSM FBB board, 700×1000mm, 20 tonnes"
                    className={`${FIELD} resize-y`}
                    aria-invalid={!!errors.requirement}
                    aria-describedby={
                      errors.requirement ? "requirement-error" : undefined
                    }
                    {...register("requirement", {
                      required:
                        "Tell us the grade, grammage and quantity you need.",
                      validate: (v) =>
                        v.trim().length >= 10 ||
                        "Tell us the grade, grammage and quantity you need.",
                      maxLength: {
                        value: 2000,
                        message: "Please keep this under 2000 characters.",
                      },
                    })}
                  />
                  {errors.requirement && (
                    <p id="requirement-error" className={ERROR}>
                      {errors.requirement.message}
                    </p>
                  )}
                </div>

                {serverError && (
                  <p role="alert" className={`${ERROR} sm:col-span-2`}>
                    {serverError}
                  </p>
                )}

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-navy-800 disabled:opacity-60"
                  >
                    {isSubmitting && (
                      <Loader2 className="size-4 animate-spin" aria-hidden />
                    )}
                    {isSubmitting ? "Sending…" : "Send enquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
