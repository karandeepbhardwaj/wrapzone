import { z } from 'zod';
export const bookingSchema = z.object({ customerName: z.string().min(2), email: z.string().email(), phone: z.string().optional(), vehicleMake: z.string().min(1), vehicleModel: z.string().min(1), vehicleYear: z.number().min(1990).max(2027), vehicleSize: z.enum(['sedan', 'suv', 'truck']), packageId: z.number().positive(), appointmentDate: z.string().min(1) });
export const contactSchema = z.object({ name: z.string().min(2), email: z.string().email(), message: z.string().min(10) });
