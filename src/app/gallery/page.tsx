export default function GalleryPage() {
  const items = Array.from({length: 9}, (_, i) => i + 1);
  return (<div className="container" style={{padding:'2rem 1.5rem'}}><h1 className="section-title">Our Work</h1>
    <div className="gallery-grid">{items.map(i => <div key={i} className="gallery-item">Wrap Project {i}</div>)}</div>
  </div>);
}
