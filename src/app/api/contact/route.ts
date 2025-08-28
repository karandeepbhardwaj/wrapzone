import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validators';
export async function POST(request: Request) {
  const body = await request.json();
  const result = contactSchema.safeParse(body);
  if (!result.success) return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
  return NextResponse.json({ success: true, message: 'Message received' });
}
