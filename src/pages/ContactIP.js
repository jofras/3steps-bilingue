// Contact.js

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs.sendForm(
      'your_service_id',     // 'service_xxx'
      'your_template_id',    // 'template_abc'
      form.current,
      'your_public_key'      // 'J1D2F3G4H5I6J7K8L' or sth
    ).then(
      (result) => {
        console.log('SUCCESS:', result.text);
        setLoading(false);
        setSuccess(true);
        form.current.reset();
      },
      (error) => {
        console.error('ERROR:', error.text);
        setLoading(false);
        alert('There was an error sending your message. Please try again later.');
      }
    );
  };

  return (
    <div className="max-w-lg mx-auto py-16 px-4">
      <h1 className="font-heading text-4xl text-primary mb-6 text-center">Contact Us</h1>

      <form ref={form} onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">
        <div className="flex gap-4">
          <div className="w-1/2">
            <label htmlFor="first_name" className="block text-sm font-medium mb-1">First Name</label>
            <input type="text" id="first_name" name="first_name" required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="First name" />
          </div>
          <div className="w-1/2">
            <label htmlFor="last_name" className="block text-sm font-medium mb-1">Last Name</label>
            <input type="text" id="last_name" name="last_name" required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Last name" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input type="email" id="email" name="email" required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="you@email.com" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
          <input type="tel" id="phone" name="phone"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="+41 76 123 45 67" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
          <textarea id="message" name="message" rows="4" required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="How can we help?" />
        </div>

        <button type="submit"
          className="w-full bg-accent text-white font-bold py-2 rounded hover:bg-green-600 transition-colors"
          disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {success && (
          <p className="text-center text-green-600 text-sm mt-2">Your message has been sent successfully.</p>
        )}
      </form>

      <div className="mt-8 text-center text-textdark space-y-1">
        <div>Email: <a href="mailto:info@3stepsathletics.ch" className="text-primary hover:underline">info@3stepsathletics.com</a></div>
        <div>Phone: <a href="tel:0041763211776" className="text-primary hover:underline">+41 76 321 17 76</a></div>
        <div>Address: <span className="text-textdark">Im Hüttengraben 6, 8700 Küsnacht, Switzerland</span></div>
      </div>
    </div>
  );
}
