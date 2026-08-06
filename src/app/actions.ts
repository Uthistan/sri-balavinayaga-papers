"use server";

import { contactSchema } from "@/lib/contact-schema";

export type EnquiryResult = { ok: boolean; message?: string };

export async function submitEnquiry(input: unknown): Promise<EnquiryResult> {
  // Never trust the client — re-validate with the same schema the form uses.
  const parsed = contactSchema.safeParse(input);

  if (!parsed.success) {
    return { ok: false, message: "Please check the form and try again." };
  }

  // TODO: deliver the enquiry before launch — transactional email (Resend / SES),
  // a CRM webhook, or a database write. Until one is wired up, enquiries are
  // only written to the server log and will NOT reach the sales team.
  console.info("[enquiry]", parsed.data);

  return { ok: true };
}
