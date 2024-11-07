"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const EmailSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setStatus(''); // Clear status on new input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Try again later.');
    }
  };

  return (
    <div className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          DailyAmount CTE: This CTE aggregates amount by visited_on date, ensuring each date has a single row.
          MovingAverage CTE: Computes the 7-day moving sum and average on the aggregated daily values, ensuring no duplicate date issues.
          Filtering for Full 7-Day Window: The WHERE clause in the outer query limits the results to only dates where a full 7-day window is available.
        </p>
        <div className="social flex flex-row gap-2">
          <Link href="/" aria-label="GitHub">
            <FaGithub className="text-white" />
          </Link>
          <Link href="/" aria-label="LinkedIn">
            <FaLinkedin className="text-white" />
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="mb-6">
            <label className="text-white block mb-2 text-sm font-medium" htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              className="bg-[#18191E] border outline-none border-[#33353F] placeholder-[#9CA2A9] text-gray-500 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="text-white block mb-2 text-sm font-medium" htmlFor="email">Your E-mail</label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border outline-none border-[#33353F] placeholder-[#9CA2A9] text-gray-500 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="text-white block mb-2 text-sm font-medium" htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border outline-none border-[#33353F] placeholder-[#9CA2A9] text-gray-500 text-sm rounded-lg block w-full p-2.5"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-white block mb-2 text-sm font-medium" htmlFor="message">Message</label>
            <textarea
              id="message"
              required
              className="bg-[#18191E] border outline-none border-[#33353F] placeholder-[#9CA2A9] text-gray-500 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your message here"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium p-2.5 rounded-lg w-full">Send Message</button>
          <p className="text-white mt-2">{status}</p>
        </form>
      </div>
    </div>
  );
};

export default EmailSection;
