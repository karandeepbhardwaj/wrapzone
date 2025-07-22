import Link from 'next/link';
export function Header() {
  return (<header><div className="container"><Link href="/" className="logo">WrapZone</Link><nav><Link href="/packages">Packages</Link><Link href="/gallery">Gallery</Link><Link href="/about">About</Link><Link href="/booking">Book Now</Link></nav></div></header>);
}
