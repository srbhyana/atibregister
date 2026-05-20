import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the provided API key
const resend = new Resend("re_NG194LnM_4AiMmBpoW4c8SjbZWPDm854s");

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Send an email to yourself alerting you of the new lead
    const { data, error } = await resend.emails.send({
      from: 'Atib Early Access <onboarding@resend.dev>', // Update this to your verified domain later if you want
      to: ['srbhyana@gmail.com'], // The email goes straight to you
      subject: 'New Waitlist Sign-up for Atib!',
      html: `<p><strong>${email}</strong> has just requested early access to Atib.</p>`
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
