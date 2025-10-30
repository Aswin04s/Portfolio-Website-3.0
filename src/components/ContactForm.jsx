import { useState, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // 'success', 'error', or ''
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      // ✅ Call your serverless function
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        if (form.current) {
          form.current.reset();
        }

        // Auto-clear success message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        console.error('Server error:', data.message);
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
    >
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
        >
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          minLength="2"
          maxLength="100"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
          placeholder="John Doe"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
        >
          Your Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength="100"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
          placeholder="john@example.com"
        />
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
        >
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          minLength="3"
          maxLength="100"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
          placeholder="Project Collaboration"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
          minLength="10"
          maxLength="5000"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all resize-none"
          placeholder="Tell me about your project or inquiry..."
        ></textarea>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {formData.message.length}/5000 characters
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 font-semibold text-lg"
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin">⏳</span>
            Sending...
          </>
        ) : (
          <>
            <FaPaperPlane />
            Send Message
          </>
        )}
      </button>

      {/* Success Message */}
      {status === 'success' && (
        <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-200 rounded-lg text-center animate-fade-in">
          <p className="font-semibold text-lg">✅ Message sent successfully!</p>
          <p className="text-sm mt-2">Thank you for reaching out. I'll get back to you as soon as possible.</p>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 rounded-lg text-center animate-fade-in">
          <p className="font-semibold text-lg">❌ Failed to send message.</p>
          <p className="text-sm mt-2">Please try again or reach out via email directly.</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
