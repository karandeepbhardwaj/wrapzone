import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'WrapZone - Premium Vehicle Wrapping', description: 'Premium vehicle wrapping booking platform with Silver, Gold, and Platinum packages.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
