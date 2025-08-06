'use client';
import { useState } from 'react';
export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', phone: '', make: '', model: '', year: '2024', size: 'sedan', packageId: '2', date: '' });
  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));
  return (<div className="container" style={{padding:'2rem 1.5rem',maxWidth:600,margin:'0 auto'}}>
    <h1 style={{marginBottom:'2rem'}}>Book Your Wrap</h1>
    {step === 1 && (<div className="card form-step"><h3>Vehicle Details</h3>
      <div className="form-group"><label>Make</label><input value={form.make} onChange={e=>update('make',e.target.value)} placeholder="e.g. Tesla" /></div>
      <div className="form-group"><label>Model</label><input value={form.model} onChange={e=>update('model',e.target.value)} placeholder="e.g. Model 3" /></div>
      <div className="form-group"><label>Year</label><input type="number" value={form.year} onChange={e=>update('year',e.target.value)} /></div>
      <div className="form-group"><label>Size</label><select value={form.size} onChange={e=>update('size',e.target.value)}><option value="sedan">Sedan</option><option value="suv">SUV</option><option value="truck">Truck</option></select></div>
      <div className="form-actions"><button className="btn btn-primary" onClick={()=>setStep(2)}>Next</button></div>
    </div>)}
    {step === 2 && (<div className="card form-step"><h3>Select Package</h3>
      <div className="form-group"><select value={form.packageId} onChange={e=>update('packageId',e.target.value)}><option value="1">Silver</option><option value="2">Gold</option><option value="3">Platinum</option></select></div>
      <div className="form-actions"><button className="btn btn-outline" onClick={()=>setStep(1)}>Back</button><button className="btn btn-primary" onClick={()=>setStep(3)}>Next</button></div>
    </div>)}
    {step === 3 && (<div className="card form-step"><h3>Your Details</h3>
      <div className="form-group"><label>Name</label><input value={form.name} onChange={e=>update('name',e.target.value)} /></div>
      <div className="form-group"><label>Email</label><input type="email" value={form.email} onChange={e=>update('email',e.target.value)} /></div>
      <div className="form-group"><label>Preferred Date</label><input type="date" value={form.date} onChange={e=>update('date',e.target.value)} /></div>
      <div className="form-actions"><button className="btn btn-outline" onClick={()=>setStep(2)}>Back</button><button className="btn btn-primary" onClick={()=>setStep(4)}>Review</button></div>
    </div>)}
    {step === 4 && (<div className="card form-step"><h3>Review & Confirm</h3>
      <p><strong>Vehicle:</strong> {form.year} {form.make} {form.model} ({form.size})</p>
      <p><strong>Package:</strong> {['Silver','Gold','Platinum'][Number(form.packageId)-1]}</p>
      <p><strong>Date:</strong> {form.date}</p><p><strong>Name:</strong> {form.name}</p><p><strong>Email:</strong> {form.email}</p>
      <div className="form-actions"><button className="btn btn-outline" onClick={()=>setStep(3)}>Back</button><button className="btn btn-primary">Confirm & Pay</button></div>
    </div>)}
  </div>);
}
