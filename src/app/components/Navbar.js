import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '32px 40px',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100
    }}>
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'var(--paper)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/05-paper-on-blue.png" alt="Atib Mark" style={{ width: '24px', opacity: 0.9 }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.2rem' }}>atib</span>
        </Link>
        
        <div style={{ display: 'flex', gap: '24px', fontFamily: 'var(--font-evidence)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          <Link href="/why" style={{ color: 'var(--paper)', textDecoration: 'none', opacity: 0.8 }}>[ Why ]</Link>
          <Link href="/what" style={{ color: 'var(--paper)', textDecoration: 'none', opacity: 0.8 }}>[ What ]</Link>
          <Link href="/how" style={{ color: 'var(--paper)', textDecoration: 'none', opacity: 0.8 }}>[ How ]</Link>
        </div>
      </div>

      <div>
        <Link href="#join" style={{ 
          fontFamily: 'var(--font-evidence)', 
          fontSize: '0.8rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em',
          color: 'var(--blue)',
          textDecoration: 'none',
          border: '1px solid var(--blue)',
          padding: '8px 16px',
          transition: 'all 0.2s'
        }}>
          [ Get Early Access ]
        </Link>
      </div>
    </nav>
  );
}
