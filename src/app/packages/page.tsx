import Link from 'next/link';
export default function PackagesPage() {
  const packages = [
    { tier: 'Silver', sedan: 799, suv: 999, truck: 1299, features: ['Standard vinyl wrap', '10+ color options', '3-year warranty', 'Basic surface preparation', '5-day turnaround'], turnaround: '5 days', warranty: '3 years' },
    { tier: 'Gold', sedan: 1499, suv: 1899, truck: 2299, features: ['Premium cast vinyl', '50+ colors including metallics', '5-year warranty', 'Full prep + paint correction', '3-day turnaround', 'Free ceramic coating'], turnaround: '3 days', warranty: '5 years' },
    { tier: 'Platinum', sedan: 2499, suv: 3199, truck: 3799, features: ['Ultra-premium 3M/Avery vinyl', 'Unlimited colors + custom designs', '7-year warranty', 'Complete paint correction', 'Priority 2-day turnaround', 'Ceramic coating + PPF', 'Free annual inspection'], turnaround: '2 days', warranty: '7 years' },
  ];
  return (<div className="container" style={{padding:'2rem 1.5rem'}}><h1 className="section-title">Package Comparison</h1>
    <table className="comparison-table"><thead><tr><th>Feature</th><th>Silver</th><th>Gold</th><th>Platinum</th></tr></thead><tbody>
      <tr><td>Sedan Price</td>{packages.map(p=><td key={p.tier}>${p.sedan}</td>)}</tr>
      <tr><td>SUV Price</td>{packages.map(p=><td key={p.tier}>${p.suv}</td>)}</tr>
      <tr><td>Truck Price</td>{packages.map(p=><td key={p.tier}>${p.truck}</td>)}</tr>
      <tr><td>Turnaround</td>{packages.map(p=><td key={p.tier}>{p.turnaround}</td>)}</tr>
      <tr><td>Warranty</td>{packages.map(p=><td key={p.tier}>{p.warranty}</td>)}</tr>
    </tbody></table>
    <div style={{textAlign:'center',marginTop:'2rem'}}><Link href="/booking" className="btn btn-primary">Book Your Appointment</Link></div>
  </div>);
}
