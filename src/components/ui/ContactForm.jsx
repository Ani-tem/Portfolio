import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfqHikULi9VWu8cw8qJISXwriBj90BWi3uZL_9Eq2PMaCIQ-A/formResponse';
  

  const FORM_FIELDS = {
    name: 'entry.346603530',     
    email: 'entry.1796117449',   
    message: 'entry.854049037'   
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Additional validation check
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Create FormData object for Google Forms
      const formDataToSend = new FormData();
      formDataToSend.append(FORM_FIELDS.name, formData.name);
      formDataToSend.append(FORM_FIELDS.email, formData.email);
      formDataToSend.append(FORM_FIELDS.message, formData.message);

      // Submit to Google Forms
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // Required for Google Forms
      });

      // Success message
      alert('Message sent successfully! I\'ll get back to you soon.');
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 border-2 border-green-400 p-6">
      <h3 className="text-green-400 font-mono font-bold mb-4">SEND_MESSAGE</h3>
      
      <div className="space-y-4">
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          disabled={isSubmitting}
          className="w-full bg-black border border-green-400 p-3 text-green-400 font-mono focus:border-cyan-400 focus:outline-none placeholder-green-400/50 disabled:opacity-50"
        />
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          disabled={isSubmitting}
          className="w-full bg-black border border-green-400 p-3 text-green-400 font-mono focus:border-cyan-400 focus:outline-none placeholder-green-400/50 disabled:opacity-50"
        />
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          required
          disabled={isSubmitting}
          className="w-full bg-black border border-green-400 p-3 text-green-400 font-mono focus:border-cyan-400 focus:outline-none resize-none placeholder-green-400/50 disabled:opacity-50"
        />
        <button 
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-green-400 text-black py-3 font-mono font-bold hover:bg-cyan-400 transition-colors transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT_MESSAGE'}
        </button>
      </div>
    </div>
  );
};
