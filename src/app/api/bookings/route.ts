import { NextResponse } from 'next/server';
export async function GET() { return NextResponse.json({ bookings: [] }); }
export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ success: true, booking: { id: 1, ...body } }, { status: 201 });
}
