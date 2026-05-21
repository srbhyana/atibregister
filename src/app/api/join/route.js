import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const DEFAULT_FROM = 'Atib Early Access <onboarding@resend.dev>';
const DEFAULT_TO = 'srbhyana7@gmail.com';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[char]));
}

function getRecipients() {
  return (process.env.LEAD_NOTIFY_TO || DEFAULT_TO)
    .split(',')
    .map((recipient) => recipient.trim())
    .filter(Boolean);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('Missing RESEND_API_KEY');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const safeEmail = escapeHtml(email);

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || DEFAULT_FROM,
      to: getRecipients(),
      replyTo: email,
      subject: 'New Waitlist Sign-up for Atib!',
      html: `<p><strong>${safeEmail}</strong> has just requested early access to Atib.</p>`,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
