import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'benpaulspooner@gmail.com',
      subject: 'New Contact Form Submission',
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br>${message}</p>`
    });

    return new Response('OK', { status: 200 });
  } catch (err) {
    return new Response('Error', { status: 500 });
  }
}
