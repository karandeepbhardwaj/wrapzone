'use client';
import { useState } from 'react';
import Link from 'next/link';
export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (<div className="mobile-nav"><button onClick={() => setOpen(!open)}>Menu</button>{open && <nav><Link href="/packages">Packages</Link><Link href="/gallery">Gallery</Link><Link href="/booking">Book Now</Link></nav>}</div>);
}
