'use server';
import { contactSchema } from '@/lib/validators';
export async function submitContact(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const result = contactSchema.safeParse(data);
  if (!result.success) return { error: 'Invalid data' };
  return { success: true };
}
