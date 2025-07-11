import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const packages = sqliteTable('packages', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  tier: text('tier', { enum: ['silver', 'gold', 'platinum'] }).notNull(),
  description: text('description').notNull(),
  features: text('features').notNull(),
  priceSedan: real('price_sedan').notNull(),
  priceSuv: real('price_suv').notNull(),
  priceTruck: real('price_truck').notNull(),
  turnaround: text('turnaround').notNull(),
  warranty: text('warranty').notNull(),
});

export const bookings = sqliteTable('bookings', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  customerName: text('customer_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  vehicleMake: text('vehicle_make').notNull(),
  vehicleModel: text('vehicle_model').notNull(),
  vehicleYear: integer('vehicle_year').notNull(),
  vehicleSize: text('vehicle_size', { enum: ['sedan', 'suv', 'truck'] }).notNull(),
  packageId: integer('package_id').references(() => packages.id).notNull(),
  appointmentDate: text('appointment_date').notNull(),
  status: text('status', { enum: ['pending', 'confirmed', 'in_progress', 'completed', 'cancelled'] }).notNull().default('pending'),
  totalPrice: real('total_price').notNull(),
  stripePaymentId: text('stripe_payment_id'),
  notes: text('notes'),
  createdAt: text('created_at').notNull(),
});

export const contacts = sqliteTable('contacts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  createdAt: text('created_at').notNull(),
});
