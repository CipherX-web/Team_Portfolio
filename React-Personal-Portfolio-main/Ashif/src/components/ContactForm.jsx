import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact" className="relative flex w-full items-center justify-center overflow-hidden bg-background pt-16 pb-32 md:pt-24 md:pb-48">
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
        <div className="max-w-md mx-auto px-4 py-6 sm:px-8 sm:py-8 bg-gray-50 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center font-pixel">Get In Touch</h2>
          <p className="text-xs sm:text-sm text-gray-600 text-center mb-5 sm:mb-6">
            Have a project in mind? Email our team at{' '}
            <a href="mailto:hello@cipherx.dev" className="text-blue-600 font-semibold underline">
              hello@cipherx.dev
            </a>
          </p>

          {submitted ? (
            <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-lg text-center">
              <p className="font-semibold">Thank you for reaching out!</p>
              <p className="text-sm mt-1">Our engineering team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-800 text-xs sm:text-sm font-medium mb-1" htmlFor="name">Your Name</label>
                <input
                  className="w-full px-4 py-2.5 bg-gray-200 rounded-lg text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 text-xs sm:text-sm font-medium mb-1" htmlFor="email">Your Email</label>
                <input
                  className="w-full px-4 py-2.5 bg-gray-200 rounded-lg text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 text-xs sm:text-sm font-medium mb-1" htmlFor="message">Your Message</label>
                <textarea
                  className="w-full px-4 py-2.5 bg-gray-200 rounded-lg text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  rows="4"
                  placeholder="Describe your project, timeline, or requirements..."
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 active:scale-95 transition duration-300 shadow-md hover:shadow-lg cursor-pointer text-sm sm:text-base"
                type="submit"
              >
                Send Message to CipherX
              </button>
            </form>
          )}
        </div>

        {/* Direct Email Badge */}
        <div className="flex justify-center mt-8">
          <a
            href="mailto:hello@cipherx.dev"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white text-gray-800 shadow-md border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
          >
            <span>Direct Email: <strong>hello@cipherx.dev</strong></span>
          </a>
        </div>
      </div>
    </div>
  );
}