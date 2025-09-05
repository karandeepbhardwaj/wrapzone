export default function AdminBookings() {
  return (<div><h1 style={{marginBottom:'1.5rem'}}>Manage Bookings</h1>
    <div className="card"><table className="data-table"><thead><tr><th>ID</th><th>Customer</th><th>Package</th><th>Date</th><th>Status</th><th>Total</th></tr></thead>
    <tbody><tr><td colSpan={6} style={{textAlign:'center',color:'var(--text-muted)',padding:'2rem'}}>Connect your database to see bookings.</td></tr></tbody></table></div>
  </div>);
}
