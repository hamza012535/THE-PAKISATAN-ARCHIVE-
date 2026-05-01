'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-news-gray mb-6">
        <Link href="/" className="hover:text-news-accent">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-news-dark">Contact</span>
      </nav>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <main className="lg:col-span-3">
          <div className="border-b-2 border-news-dark pb-4 mb-8">
            <h1 className="text-4xl font-serif font-bold text-news-dark">
              Contact Us
            </h1>
            <p className="text-news-gray italic mt-2">
              We welcome contributions, corrections, and feedback
            </p>
          </div>

          {submitted ? (
            <div className="bg-white border border-news-border p-8 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-serif font-bold text-news-dark mb-2">
                Message Received!
              </h2>
              <p className="text-news-gray mb-6">
                Thank you for reaching out to Pakistan Archive. We will get back to you as soon as possible.
              </p>
              <Link href="/" className="inline-block bg-news-accent text-white px-6 py-2 hover:bg-red-700 transition">
                Return to Home
              </Link>
            </div>
          ) : (
            <div className="bg-white border border-news-border p-8">
              <p className="text-news-gray mb-6 text-sm leading-relaxed">
                Have a correction, a new article to suggest, or want to contribute to Pakistan Archive? 
                Fill out the form below and our editorial team will respond within 48 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-news-dark mb-1">
                      Full Name <span className="text-news-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-news-border px-3 py-2 text-sm focus:outline-none focus:border-news-accent transition"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-news-dark mb-1">
                      Email Address <span className="text-news-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-news-border px-3 py-2 text-sm focus:outline-none focus:border-news-accent transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-news-dark mb-1">
                    Subject <span className="text-news-accent">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-news-border px-3 py-2 text-sm focus:outline-none focus:border-news-accent transition bg-white"
                  >
                    <option value="">Select a subject...</option>
                    <option value="correction">Article Correction</option>
                    <option value="new-article">Suggest New Article</option>
                    <option value="contribute">Contribute Content</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Issue</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-news-dark mb-1">
                    Message <span className="text-news-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-news-border px-3 py-2 text-sm focus:outline-none focus:border-news-accent transition resize-none"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="bg-news-accent text-white px-8 py-3 hover:bg-red-700 transition font-semibold"
                >
                  Send Message →
                </button>
              </form>
            </div>
          )}
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-white border border-news-border p-4 sticky top-4">
            <h3 className="font-serif font-bold border-b border-news-border pb-2 mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm text-news-gray">
              <li>
                <div className="font-semibold text-news-dark mb-1">📧 Email</div>
                <div>info@pakistanarchive.com</div>
              </li>
              <li>
                <div className="font-semibold text-news-dark mb-1">⏱ Response Time</div>
                <div>Within 48 hours</div>
              </li>
              <li>
                <div className="font-semibold text-news-dark mb-1">🌐 Language</div>
                <div>English (Urdu support coming soon)</div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-news-border p-4 mt-6">
            <h3 className="font-serif font-bold mb-3 text-news-dark">Contribute</h3>
            <p className="text-sm text-news-gray mb-3">
              Pakistan Archive grows with community contributions. Historians, students, and researchers 
              are encouraged to share knowledge.
            </p>
            <Link href="/about" className="text-news-accent text-sm hover:underline">
              Learn more →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
