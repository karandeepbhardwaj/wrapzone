import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendBookingConfirmation(to: string, name: string, date: string, pkg: string, total: number) {
  return resend.emails.send({ from: 'WrapZone <noreply@wrapzone.dev>', to: [to], subject: 'Booking Confirmed - WrapZone', html: `<h1>Booking Confirmed</h1><p>Hi ${name},</p><p>Your ${pkg} wrap appointment on ${date} has been confirmed. Total: $${total}.</p><p>Thank you for choosing WrapZone!</p>` });
}
