'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget as HTMLFormElement;

    const data = {
    name: (form.elements.namedItem('name') as HTMLInputElement).value,
    email: (form.elements.namedItem('email') as HTMLInputElement).value,
    message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) setStatus('success');
      else throw new Error();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-10 mt-8">
      <input
        name="name"
        required
        placeholder="Your name"
        className="w-full border-2 border-black px-4 py-3 text-base text-gray-900"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Your email"
        className="w-full border-2 border-black px-4 py-3 text-base text-gray-900"
      />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Tell me about your idea..."
        className="w-full border-2 border-black px-4 py-3 text-base text-gray-900"
      />
      <button
        type="submit"
        className="bg-black text-white px-6 py-3 text-base font-medium border-4 border-black hover:bg-white hover:cursor-pointer hover:text-black transition"
      >
        {status === 'loading' ? 'Sending...' : 'Start your build →'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm mt-2">Message sent!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm mt-2">Something went wrong. Try again?</p>
      )}
    </form>
  );
}
