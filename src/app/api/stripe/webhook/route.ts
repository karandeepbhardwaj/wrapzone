import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
export async function POST(request: Request) {
  const body = await request.text();
  const sig = (await headers()).get('stripe-signature');
  if (!sig) return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  // In production: verify stripe signature and process webhook
  return NextResponse.json({ received: true });
}
