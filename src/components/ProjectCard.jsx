import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Card from './common/Card';

const ProjectCard = ({ project }) => {
  return (
    <Card className="h-full flex flex-col">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 h-48 flex items-center justify-center">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-6xl text-gray-400">
            💻
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              {project.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        {project.githubRepo && (
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm"
          >
            <FaGithub />
            Code
          </a>
        )}
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;