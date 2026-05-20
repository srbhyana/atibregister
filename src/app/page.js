import LeadForm from './components/LeadForm';

export default function Home() {
  // Generate 60 bars for the waveform
  const waveBars = Array.from({ length: 60 });

  return (
    <main className="fluid-flow container" style={{ position: 'relative', padding: '160px 20px 80px' }}>
      
      {/* Animated Waveform Hero Background */}
      <div className="waveform-container">
        {waveBars.map((_, i) => (
          <div key={i} className="wave-bar" style={{ height: `${Math.random() * 100 + 50}px` }}></div>
        ))}
      </div>

      <h1 className="hero-headline text-center">
        Your positioning kept pure.
      </h1>

      <p className="lede-text text-center">
        We help PMMs hear the market before positioning drifts. The future is governed signal, not manually reading transcripts.
      </p>

      {/* FOMO Silhouette Cloud */}
      <div className="fomo-cloud">
        <div className="silhouette-node" style={{ left: '10%', top: '20%', animationDelay: '0s' }}>
          <div className="avatar-circle"></div>
          <span className="node-quote">"They said it's too expensive."</span>
        </div>
        <div className="silhouette-node" style={{ left: '40%', top: '60%', animationDelay: '1.2s' }}>
          <div className="avatar-circle active"></div>
          <span className="node-quote highlight">[ PRICE OBJECTION DETECTED ]</span>
        </div>
        <div className="silhouette-node" style={{ right: '15%', top: '30%', animationDelay: '2.4s' }}>
          <div className="avatar-circle"></div>
          <span className="node-quote">"We're looking at Competitor X."</span>
        </div>
      </div>
      
      <p className="section-text text-center" style={{ maxWidth: '600px', margin: '0 auto 80px' }}>
        <strong className="text-crimson">Your competitors are governing the drift. You are reading transcripts.</strong><br/>
        The market for sales intelligence is heading to $9.15B. The winning teams turn market language into a live operating system. Everyone else relies on stale, quarterly strategy decks.
      </p>

      {/* Transcript to Data Visualizer (30 Years Future Tech) */}
      <div className="data-snap-container">
        <div className="messy-transcript">
          umm yeah so the prospect was saying that they really like our reporting feature but they are worried about the implementation time because their last vendor took like 6 months to onboard... and also they mentioned competitor X has a new AI module...
        </div>
        <div className="structured-data">
          <span style={{ color: 'var(--paper)', opacity: 0.5 }}>{'{'}</span><br/>
          &nbsp;&nbsp;"signal_type": <span className="text-blue">"COMPETITIVE_MENTION"</span>,<br/>
          &nbsp;&nbsp;"entity": <span className="text-blue">"Competitor X"</span>,<br/>
          &nbsp;&nbsp;"friction_point": <span className="text-crimson">"Implementation Time (&gt; 6 months)"</span>,<br/>
          &nbsp;&nbsp;"action": <span className="text-green">"UPDATE_BATTLECARD"</span><br/>
          <span style={{ color: 'var(--paper)', opacity: 0.5 }}>{'}'}</span>
        </div>
      </div>

      <div style={{ margin: '80px 0', padding: '40px', borderTop: '1px solid rgba(241, 242, 238, 0.1)', borderBottom: '1px solid rgba(241, 242, 238, 0.1)', position: 'relative', zIndex: 10 }}>
        <p className="verbatim text-center">
          I don't want self-serve, I want my team to use it without asking me first.
        </p>
        <p className="text-center evidence-label">
          VERBATIM · ACC-417 · 14:22:08
        </p>
      </div>

      {/* Borrowed Foresight Numbers */}
      <div className="graph-container">
        <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-evidence)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)' }}>
          The Market Shift
        </h3>
        
        <div className="graph-row">
          <div className="graph-label">
            <span>Sales Intelligence Market 2031</span>
            <span>$9.15B</span>
          </div>
          <div className="graph-bar-bg">
            <div className="graph-bar-fill" style={{ width: '100%' }}></div>
          </div>
          <p className="graph-desc">Most are buying note-taking, not signal governance.</p>
        </div>

        <div className="graph-row" style={{ marginTop: '16px' }}>
          <div className="graph-label">
            <span>CI Output Growth Since 2020</span>
            <span>3.4x</span>
          </div>
          <div className="graph-bar-bg">
            <div className="graph-bar-fill" style={{ width: '85%' }}></div>
          </div>
          <p className="graph-desc">Teams are scaling output faster than headcount.</p>
        </div>

        <div className="graph-row" style={{ marginTop: '16px' }}>
          <div className="graph-label">
            <span>AI Governance Gap</span>
            <span>41%</span>
          </div>
          <div className="graph-bar-bg">
            <div className="graph-bar-fill" style={{ width: '41%', backgroundColor: 'var(--crimson)' }}></div>
          </div>
          <p className="graph-desc">Only 41% of programs have documented policies for AI hallucinations.</p>
        </div>
      </div>

      <LeadForm />

      <footer style={{ marginTop: '120px', position: 'relative', zIndex: 10 }}>
        <p className="evidence-label text-center" style={{ opacity: 0.5 }}>
          © ATIB · ALL RIGHTS RESERVED
        </p>
      </footer>
    </main>
  );
}
