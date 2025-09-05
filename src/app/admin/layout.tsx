import Link from 'next/link';
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (<div className="admin-layout"><aside className="admin-sidebar"><h2 style={{marginBottom:'1.5rem',fontSize:'1.2rem'}}>WrapZone Admin</h2><Link href="/admin">Dashboard</Link><Link href="/admin/bookings">Bookings</Link><Link href="/">Back to Site</Link></aside><main className="admin-main">{children}</main></div>);
}
