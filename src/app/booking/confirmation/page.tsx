import Link from 'next/link';
export default function ConfirmationPage() {
  return (<div className="container" style={{textAlign:'center',padding:'4rem 1.5rem'}}><h1>Booking Confirmed!</h1><p style={{margin:'1rem 0',color:'var(--text-muted)'}}>Thank you for choosing WrapZone. A confirmation email has been sent.</p><Link href="/" className="btn btn-primary">Back to Home</Link></div>);
}
