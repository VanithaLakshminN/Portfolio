import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  // Email validation Regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Check if the email format is valid
    if (!emailRegex.test(formData.email)) {
      setStatus('Please enter a valid email address (e.g., name@example.com).');
      return; // Stop the function here so it doesn't call the API
    }

    setStatus('Sending...');
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } catch (error) {
      // Check if the backend sent a specific error message
      if (error.response && error.response.data.error) {
        setStatus(error.response.data.error);
      } else {
        setStatus('Failed to send message.');
      }
    }
  };

  return (
    <section id="contact" className="py-20 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4"><span className="text-accent">05.</span> Get In Touch</h2>
      <p className="text-slate-400 mb-8">Get in Touch with me</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
        <input 
          type="text" 
          placeholder="Name" 
          required 
          value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
          className="p-3 bg-slate-800 border border-slate-700 rounded text-white focus:outline-none focus:border-accent" 
        />
        <input 
          type="email" 
          placeholder="Email" 
          required 
          value={formData.email} 
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
          className="p-3 bg-slate-800 border border-slate-700 rounded text-white focus:outline-none focus:border-accent" 
        />
        <textarea 
          rows="5" 
          placeholder="Message" 
          required 
          value={formData.message} 
          onChange={(e) => setFormData({...formData, message: e.target.value})} 
          className="p-3 bg-slate-800 border border-slate-700 rounded text-white focus:outline-none focus:border-accent resize-none"
        ></textarea>
        <button type="submit" className="py-3 bg-accent text-darkBg font-bold rounded hover:bg-accent/90 transition">
          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
        </button>
        {status && (
          <p className={`text-center mt-2 ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;