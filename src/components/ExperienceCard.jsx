import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import Card from './common/Card';

const ExperienceCard = ({ experience }) => {
  return (
    <Card className="relative">
      {/* Company Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <FaBriefcase className="text-2xl text-blue-600 dark:text-blue-400" />
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {experience.role}
          </h3>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
            {experience.company}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>{experience.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCalendar className="text-blue-600" />
              <span>{experience.duration}</span>
            </div>
          </div>
        </div>

        <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
          {experience.type}
        </span>
      </div>

      {/* Description */}
      {experience.description && (
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {experience.description}
        </p>
      )}

      {/* Responsibilities */}
      {experience.responsibilities && experience.responsibilities.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
            Key Responsibilities:
          </h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((resp, index) => (
              <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 mr-2 mt-1">▹</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      {experience.techStack && experience.techStack.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech, index) => (
              <span 
                key={index}
                className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Achievements */}
      {experience.achievements && experience.achievements.length > 0 && (
        <div>
          <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
            Achievements:
          </h4>
          <ul className="space-y-1">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start text-gray-700 dark:text-gray-300 text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

export default ExperienceCard;