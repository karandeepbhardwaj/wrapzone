import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header><div className="container"><Link href="/" className="logo">WrapZone</Link><nav><Link href="/packages">Packages</Link><Link href="/gallery">Gallery</Link><Link href="/about">About</Link><Link href="/booking">Book Now</Link></nav></div></header>
      <section className="hero"><div><h1>Transform Your Vehicle</h1><p>Premium vehicle wrapping with expert installation. Choose from Silver, Gold, or Platinum packages tailored to your style.</p><Link href="/booking" className="btn btn-primary">Book Your Appointment</Link></div></section>
      <section className="section"><div className="container"><h2 className="section-title">Why WrapZone</h2><div className="features-grid">
        <div className="card feature-card"><h3>Premium Materials</h3><p>We use only top-tier 3M and Avery vinyl for lasting quality and vibrant color.</p></div>
        <div className="card feature-card"><h3>Expert Installation</h3><p>Our certified installers have 10+ years of experience with precision wrapping.</p></div>
        <div className="card feature-card"><h3>Warranty Protection</h3><p>Up to 7-year warranty on materials and workmanship for peace of mind.</p></div>
        <div className="card feature-card"><h3>Quick Turnaround</h3><p>Get your vehicle back in as little as 2 days with our priority service.</p></div>
      </div></div></section>
      <section className="section"><div className="container"><h2 className="section-title">Our Packages</h2><div className="packages-grid">
        <div className="card package-card"><h3>Silver</h3><p className="price">$799<span> / sedan</span></p><ul><li>Standard vinyl wrap</li><li>10+ color options</li><li>3-year warranty</li><li>5-day turnaround</li></ul><Link href="/booking" className="btn btn-outline">Select</Link></div>
        <div className="card package-card featured"><span className="badge">Popular</span><h3>Gold</h3><p className="price">$1,499<span> / sedan</span></p><ul><li>Premium cast vinyl</li><li>50+ colors + metallics</li><li>5-year warranty</li><li>3-day turnaround</li><li>Free ceramic coating</li></ul><Link href="/booking" className="btn btn-primary">Select</Link></div>
        <div className="card package-card"><h3>Platinum</h3><p className="price">$2,499<span> / sedan</span></p><ul><li>Ultra-premium 3M/Avery</li><li>Unlimited colors + custom</li><li>7-year warranty</li><li>2-day priority</li><li>Ceramic + PPF</li><li>Free annual inspection</li></ul><Link href="/booking" className="btn btn-outline">Select</Link></div>
      </div></div></section>
      <section className="section"><div className="container"><div className="cta-section"><h2>Ready to Transform Your Ride?</h2><p>Book your appointment today and drive away in style.</p><Link href="/booking" className="btn">Book Now</Link></div></div></section>
      <footer><div className="container"><p>WrapZone &mdash; Premium Vehicle Wrapping</p></div></footer>
    </>
  );
}
