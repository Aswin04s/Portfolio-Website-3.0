import { personalInfo } from '../data/personalInfo';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better"
        />

        <div className="max-w-6xl mx-auto">
          {/* Main About Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Photo */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-9xl">
                    👨‍💻
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-50 animate-pulse delay-75"></div>
              </div>
            </div>

            {/* About Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {personalInfo.title}
              </h3>

              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                {personalInfo.aboutMe.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="text-center" hover={false}>
                  <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </Card>
                <Card className="text-center" hover={false}>
                  <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </Card>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <FaGraduationCap className="text-3xl text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    Education
                  </h4>
                  <p className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    {personalInfo.education.degree}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-1">
                    {personalInfo.education.institution}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {personalInfo.education.duration} | GPA: {personalInfo.education.gpa}
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {personalInfo.education.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Certifications */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <FaCertificate className="text-3xl text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Certifications
                  </h4>
                  <div className="space-y-4">
                    {personalInfo.certifications.map((cert, index) => (
                      <div key={index}>
                        <p className="font-semibold text-purple-600 dark:text-purple-400">
                          {cert.name}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {cert.issuer}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {cert.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;