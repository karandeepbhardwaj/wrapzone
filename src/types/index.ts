export type PackageTier = 'silver' | 'gold' | 'platinum';
export type VehicleSize = 'sedan' | 'suv' | 'truck';
export type BookingStatus = 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';

export interface Package {
  id: number;
  name: string;
  tier: PackageTier;
  description: string;
  features: string[];
  priceSedan: number;
  priceSuv: number;
  priceTruck: number;
  turnaround: string;
  warranty: string;
}

export interface Booking {
  id: number;
  customerName: string;
  email: string;
  phone: string | null;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: number;
  vehicleSize: VehicleSize;
  packageId: number;
  appointmentDate: string;
  status: BookingStatus;
  totalPrice: number;
  stripePaymentId: string | null;
  notes: string | null;
  createdAt: string;
}
