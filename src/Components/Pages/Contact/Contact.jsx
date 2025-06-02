import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaCommentDots, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent.');
  };

  return (
    <section className="bg-gray-50 py-20 px-5 lg:px-0">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-8">
          Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              <FaUser className="inline-block mr-2 text-green-500" />
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              <FaEnvelope className="inline-block mr-2 text-green-500" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              <FaCommentDots className="inline-block mr-2 text-green-500" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            ></textarea>
          </div>

          {/* Subscribe */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="text-green-600 focus:ring-green-500"
            />
            <label htmlFor="subscribe" className="text-gray-700">
              Subscribe to our newsletter
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 rounded-lg shadow-md transition"
            >
              <FaPaperPlane /> Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;