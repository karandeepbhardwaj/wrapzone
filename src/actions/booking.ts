'use server';
import { bookingSchema } from '@/lib/validators';
export async function createBooking(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const result = bookingSchema.safeParse({ ...data, vehicleYear: Number(data.vehicleYear), packageId: Number(data.packageId) });
  if (!result.success) return { error: 'Invalid booking data' };
  return { success: true, message: 'Booking created' };
}
