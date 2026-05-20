import LeadForm from '../components/LeadForm';

export const metadata = {
  title: 'Atib · How',
};

export default function How() {
  return (
    <main className="fluid-flow container">
      <h1 className="hero-headline text-center">
        If your reps hear it first, PMM should govern it second.
      </h1>

      <div style={{ maxWidth: '600px', margin: '40px auto' }}>
        <p className="section-text">
          Today, calls are lost in summaries. In the near future, signals are structured but still siloed. The winning future is when market language becomes a governed asset that updates positioning faster.
        </p>

        <p className="section-text">
          Most teams still rely on manual cross-functional rituals. The feedback loop from call to positioning is slow and noisy.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', margin: '64px 0' }}>
          
          <div style={{ borderBottom: '1px solid rgba(241, 242, 238, 0.1)', paddingBottom: '32px' }}>
            <h3 style={{ fontFamily: 'var(--font-evidence)', fontSize: '1rem', color: 'var(--blue)', textTransform: 'uppercase', marginBottom: '8px' }}>
              01 · Capture The Signal
            </h3>
            <p className="section-text" style={{ fontSize: '1rem', margin: 0 }}>
              Connect directly to the streams where market language happens. Alternative data is mainstream: job postings, web traffic, app telemetry, and live call transcripts now sit inside competitive workflows.
            </p>
          </div>

          <div style={{ borderBottom: '1px solid rgba(241, 242, 238, 0.1)', paddingBottom: '32px' }}>
            <h3 style={{ fontFamily: 'var(--font-evidence)', fontSize: '1rem', color: 'var(--blue)', textTransform: 'uppercase', marginBottom: '8px' }}>
              02 · Centralize The Truth
            </h3>
            <p className="section-text" style={{ fontSize: '1rem', margin: 0 }}>
              Centralized CI is rising again. Over 52% of programs are centralized, up from 38% three years ago. We pull isolated fragments into a single governed pipeline.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: 'var(--font-evidence)', fontSize: '1rem', color: 'var(--blue)', textTransform: 'uppercase', marginBottom: '8px' }}>
              03 · Govern The Drift
            </h3>
            <p className="section-text" style={{ fontSize: '1rem', margin: 0 }}>
              Identify drift between what marketing claims and what the field hears. Quote the prospect, don't quote the strategy deck. The system trusts mouths, not slides.
            </p>
          </div>

        </div>
      </div>

      <LeadForm />
    </main>
  );
}
