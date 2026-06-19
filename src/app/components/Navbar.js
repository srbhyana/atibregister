import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="site-nav">
      <div className="nav-left">
        <Link href="/" className="nav-brand">
          <img src="/05-paper-on-blue.png" alt="Atib Mark" style={{ width: '24px', opacity: 0.9 }} />
          <span className="nav-brand-text">atib</span>
        </Link>
        
        <div className="nav-links">
          <Link href="/why" className="nav-link">[ Why ]</Link>
          <Link href="/what" className="nav-link">[ What ]</Link>
          <Link href="/how" className="nav-link">[ How ]</Link>
        </div>
      </div>

      <div className="nav-right">
        <Link href="#join" className="nav-cta">
          [ Get Early Access ]
        </Link>
      </div>
    </nav>
  );
}
