export default function AdminDashboard() {
  return (<div><h1 style={{marginBottom:'1.5rem'}}>Dashboard</h1>
    <div className="stats-grid">
      <div className="card stat-card"><div className="stat-value">24</div><div className="stat-label">Total Bookings</div></div>
      <div className="card stat-card"><div className="stat-value">$42,800</div><div className="stat-label">Revenue</div></div>
      <div className="card stat-card"><div className="stat-value">5</div><div className="stat-label">Pending</div></div>
      <div className="card stat-card"><div className="stat-value">19</div><div className="stat-label">Completed</div></div>
    </div>
    <div className="card"><h3 style={{marginBottom:'1rem'}}>Recent Bookings</h3><p style={{color:'var(--text-muted)'}}>Connect your database to see live booking data.</p></div>
  </div>);
}
