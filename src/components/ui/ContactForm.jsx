import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here - could integrate with email service
    console.log('Form submitted:', formData);
    
    // For now, just show an alert
    alert('Message sent! I\'ll get back to you soon.');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-900 border-2 border-green-400 p-6">
      <h3 className="text-green-400 font-mono font-bold mb-4">SEND_MESSAGE</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full bg-black border border-green-400 p-3 text-green-400 font-mono focus:border-cyan-400 focus:outline-none placeholder-green-400/50"
        />
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full bg-black border border-green-400 p-3 text-green-400 font-mono focus:border-cyan-400 focus:outline-none placeholder-green-400/50"
        />
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          required
          className="w-full bg-black border border-green-400 p-3 text-green-400 font-mono focus:border-cyan-400 focus:outline-none resize-none placeholder-green-400/50"
        />
        <button 
          type="submit"
          className="w-full bg-green-400 text-black py-3 font-mono font-bold hover:bg-cyan-400 transition-colors transform hover:scale-105"
        >
          TRANSMIT_MESSAGE
        </button>
      </form>
    </div>
  );
};