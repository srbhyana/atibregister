'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div id="join" style={{ marginTop: '80px', marginBottom: '80px' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '32px' }} className="text-center">
        Stay pure. Listen verbatim.
      </h2>

      <form onSubmit={handleSubmit} className="form-group">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com" 
          required 
          className="input-field"
          disabled={status === 'loading' || status === 'success'}
        />
        <button type="submit" className="submit-btn" disabled={status === 'loading' || status === 'success'}>
          {status === 'loading' ? 'Joining...' : 'Get Early Access'}
        </button>
      </form>

      {status === 'success' && (
        <p className="success-message">
          <span className="cobalt-pulse"></span>
          Signal received. You are on the list.
        </p>
      )}

      {status === 'error' && (
        <p className="success-message" style={{ color: 'var(--crimson)' }}>
          Connection failed. Try again.
        </p>
      )}
    </div>
  );
}
