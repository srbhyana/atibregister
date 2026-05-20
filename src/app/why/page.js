import LeadForm from '../components/LeadForm';

export const metadata = {
  title: 'Atib · Why',
};

export default function Why() {
  return (
    <main className="fluid-flow container">
      <h1 className="hero-headline text-center">
        The market is telling you what it means before your deck does.
      </h1>

      <div style={{ maxWidth: '600px', margin: '40px auto' }}>
        <p className="section-text">
          Real-time CI is replacing quarterly decks. The competitive intelligence software market is expected to exceed <strong>$3.8B</strong> globally.
        </p>

        <p className="section-text">
          But there are three critical gaps in how companies are building their intelligence pipelines today:
        </p>

        <div style={{ marginTop: '40px', borderLeft: '2px solid var(--blue)', paddingLeft: '24px' }}>
          <h3 className="section-title" style={{ fontSize: '1.2rem', fontFamily: 'var(--font-evidence)', textTransform: 'uppercase' }}>The Translation Gap</h3>
          <p className="section-text" style={{ fontSize: '1rem' }}>
            Companies have call data, but no governed system that converts prospect language into positioning decisions.
          </p>

          <h3 className="section-title" style={{ fontSize: '1.2rem', fontFamily: 'var(--font-evidence)', textTransform: 'uppercase', marginTop: '24px' }}>The Speed Gap</h3>
          <p className="section-text" style={{ fontSize: '1rem' }}>
            Leading CI programs push signals in minutes, while many PMMs still work from quarterly decks. The distance between call and truth is too vast.
          </p>

          <h3 className="section-title" style={{ fontSize: '1.2rem', fontFamily: 'var(--font-evidence)', textTransform: 'uppercase', marginTop: '24px' }}>The Trust Gap</h3>
          <p className="section-text" style={{ fontSize: '1rem' }}>
            Buyers increasingly demand provenance and confidence scoring. "AI summaries" are no longer enough.
          </p>
        </div>

        <p className="section-text" style={{ marginTop: '40px' }}>
          The winners will be the companies that reduce the time between market language and message change. Atib is built for those winners.
        </p>
      </div>

      <LeadForm />
    </main>
  );
}
