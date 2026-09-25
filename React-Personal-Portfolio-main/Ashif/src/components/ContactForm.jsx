import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, Copy, Check, RotateCcw } from "lucide-react";

const TEAM_EMAIL = "cipherx.webteam@gmail.com";

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(TEAM_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${TEAM_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New CipherX Portfolio Inquiry from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();
      if (response.ok && (data.success === 'true' || data.success === true || data.message)) {
        setStatus('success');
      } else {
        throw new Error(data.message || 'Submission could not be completed at this moment.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage(
        err.message || 'Unable to submit directly. You can send your message directly via your email client.'
      );
    }
  };

  const handleReset = () => {
    setForm({ name: '', email: '', message: '' });
    setStatus('idle');
    setErrorMessage('');
  };

  const mailtoFallback = `mailto:${TEAM_EMAIL}?subject=${encodeURIComponent(
    `Inquiry from ${form.name || 'CipherX Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
  )}`;

  return (
    <div id="contact" className="relative flex w-full items-center justify-center overflow-hidden bg-background pt-16 pb-48 sm:pb-56 md:pt-24 md:pb-64">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
      <div className="relative z-10 container px-4 mx-auto">
        {/* Centered Form */}
        <div className="max-w-md mx-auto px-5 py-6 sm:px-8 sm:py-8 bg-gray-50/95 dark:bg-zinc-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/80 dark:border-zinc-800 transition-all">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 mb-3">
              <Mail className="w-3.5 h-3.5" />
              Direct Communication
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 font-pixel">
              Get In Touch
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Have a project in mind? Reach out to our collective at{' '}
              <a
                href={`mailto:${TEAM_EMAIL}`}
                className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-700 transition"
              >
                {TEAM_EMAIL}
              </a>
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-6 px-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl animate-in fade-in zoom-in-95 duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Message Delivered!
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Thank you, <strong className="text-emerald-700 dark:text-emerald-300">{form.name}</strong>! Your message has been routed to our team inbox.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                We'll review your inquiry and get back to <strong>{form.email}</strong> shortly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition shadow cursor-pointer active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Spam prevention honeypot */}
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              {status === 'error' && (
                <div className="p-3.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs sm:text-sm space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" />
                    <p>{errorMessage}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={mailtoFallback}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-amber-600 text-white font-medium text-xs hover:bg-amber-700 transition"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Send via Email App
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="px-3 py-1.5 rounded-md border border-amber-300 dark:border-amber-700 text-xs font-medium hover:bg-amber-100 dark:hover:bg-amber-900/40 transition"
                    >
                      Retry Form
                    </button>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium mb-1" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full px-4 py-2.5 bg-gray-100 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="e.g. Alex Morgan"
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              <div>
                <label className="block text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium mb-1" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="w-full px-4 py-2.5 bg-gray-100 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="e.g. alex@example.com"
                  name="email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              <div>
                <label className="block text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium mb-1" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-2.5 bg-gray-100 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
                  rows="4"
                  placeholder="Describe your project, timeline, or requirements..."
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                ></textarea>
              </div>

              <button
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg active:scale-[0.99] transition duration-200 shadow-md hover:shadow-blue-500/20 cursor-pointer text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending to CipherX...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message to CipherX
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Direct Email Badge with Copy Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-200 dark:border-zinc-800">
            <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Direct Email:</span>
            <a
              href={`mailto:${TEAM_EMAIL}`}
              className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              {TEAM_EMAIL}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              title="Copy email to clipboard"
              className="ml-1 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
              aria-label="Copy email"
            >
              {copied ? (
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                  <Check className="w-3.5 h-3.5" /> Copied!
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}