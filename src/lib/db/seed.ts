import { db } from './index';
import { packages } from './schema';

const seedData = [
  { name: 'Silver', tier: 'silver' as const, description: 'Standard vinyl wrap with professional installation', features: JSON.stringify(['Standard vinyl wrap', '10+ color options', '3-year durability warranty', 'Basic surface preparation', '5-day turnaround']), priceSedan: 799, priceSuv: 999, priceTruck: 1299, turnaround: '5 days', warranty: '3 years' },
  { name: 'Gold', tier: 'gold' as const, description: 'Premium cast vinyl with enhanced preparation and ceramic coating', features: JSON.stringify(['Premium cast vinyl', '50+ colors including metallics', '5-year durability warranty', 'Full surface preparation + paint correction', '3-day turnaround', 'Free ceramic coating on wrap']), priceSedan: 1499, priceSuv: 1899, priceTruck: 2299, turnaround: '3 days', warranty: '5 years' },
  { name: 'Platinum', tier: 'platinum' as const, description: 'Ultra-premium wrap with complete protection package', features: JSON.stringify(['Ultra-premium 3M/Avery vinyl', 'Unlimited colors + custom designs', '7-year warranty', 'Complete paint correction + protection', 'Priority 2-day turnaround', 'Ceramic coating + PPF on high-impact areas', 'Free annual inspection']), priceSedan: 2499, priceSuv: 3199, priceTruck: 3799, turnaround: '2 days', warranty: '7 years' },
];

async function seed() { for (const pkg of seedData) { await db.insert(packages).values(pkg); } console.log('Seeded packages'); }
seed();
