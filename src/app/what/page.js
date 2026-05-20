import LeadForm from '../components/LeadForm';

export const metadata = {
  title: 'Atib · What',
};

export default function What() {
  return (
    <main className="fluid-flow container">
      <h1 className="hero-headline text-center">
        Your team is already sitting on the signal.
      </h1>

      <div style={{ maxWidth: '600px', margin: '40px auto' }}>
        <p className="section-text">
          Most conversation tools optimize for summaries, sales coaching, or CRM sync. They don't optimize for PMM-owned truth maintenance.
        </p>

        <p className="section-text">
          Most CI tools track competitors, but fewer tie competitor mentions directly to positioning drift, contested claims, and canonical messaging changes.
        </p>

        <div style={{ margin: '64px 0', border: '1px solid rgba(241, 242, 238, 0.1)', padding: '40px' }}>
          <h3 className="section-title" style={{ fontFamily: 'var(--font-evidence)', fontSize: '1.2rem', color: 'var(--green)', textTransform: 'uppercase' }}>
            We are not selling note-taking.
          </h3>
          <p className="section-text" style={{ fontSize: '1.2rem', marginTop: '16px' }}>
            We are selling the future state where Product Marketing owns the truth layer between market voice and company positioning.
          </p>
        </div>

        <p className="section-text">
          Atib is the intelligence layer. It ensures that when your reps hear a shift in the market first, your PMM system remembers it, governs it, and weaponizes it second.
        </p>
      </div>

      <LeadForm />
    </main>
  );
}
