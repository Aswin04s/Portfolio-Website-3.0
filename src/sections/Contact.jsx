import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/ContactForm';
import Card from '../components/common/Card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a question or want to work together? I'd love to hear from you!"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the form or via email.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card hover={false}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <FaEnvelope className="text-2xl text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card hover={false}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                      <FaPhone className="text-2xl text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card hover={false}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                      <FaMapMarkerAlt className="text-2xl text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Follow Me On
                </h4>
                <div className="flex gap-4">
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all transform hover:scale-110"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="pt-6">
                <Card hover={false} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <span className="font-semibold">⚡ Quick Response:</span> I typically respond within 24-48 hours on business days.
                  </p>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send Me a Message
                </h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;