import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import Button from '../components/common/Button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Greeting */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-3 animate-slide-up">
            👋 Hi there, I'm
          </p>

          {/* Name with gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-slide-up">
            {personalInfo.name}
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 animate-slide-up">
            {personalInfo.tagline}
          </p>

          {/* Bio */}
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button 
              href="#contact"
              variant="primary"
              className="text-lg"
            >
              Get In Touch
            </Button>
            <Button 
              href={personalInfo.resumeUrl}
              download
              variant="secondary"
              className="text-lg flex items-center justify-center gap-2"
            >
              <FaDownload />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center text-4xl animate-slide-up">
            <a 
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <a href="#about" className="inline-block">
              <div className="w-8 h-12 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                <div className="w-2 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;