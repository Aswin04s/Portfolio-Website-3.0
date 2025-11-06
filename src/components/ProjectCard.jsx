import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Card from './common/Card';

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
      {/* Project Image with Light Rounded Border */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 m-4 rounded-lg border border-gray-300 dark:border-gray-600">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            💻
          </div>
        )}
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {project.category}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Key Features:
            </p>
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▪</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links - GRADIENT BUTTONS */}
        <div className="flex gap-3 pt-4">
          {project.githubRepo && (
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2.5 rounded-xl hover:from-gray-700 hover:to-gray-800 dark:from-gray-600 dark:to-gray-700 dark:hover:from-gray-500 dark:hover:to-gray-600 hover:scale-105 hover:shadow-md active:scale-95 transition-all duration-300 font-semibold text-sm flex items-center justify-center gap-2"
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
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2.5 rounded-xl hover:from-blue-700 hover:to-blue-600 dark:from-blue-600 dark:to-blue-500 dark:hover:from-blue-500 dark:hover:to-blue-400 hover:scale-105 hover:shadow-md active:scale-95 transition-all duration-300 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;