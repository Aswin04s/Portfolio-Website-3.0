import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const iconMap = { ...FaIcons, ...SiIcons };

const SkillCard = ({ skill }) => {
  const Icon = iconMap[skill.icon];

  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      {Icon && (
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
          <Icon 
            className="text-6xl" 
            style={{ color: skill.color }}
          />
        </div>
      )}

      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2 text-center">
        {skill.name}
      </h4>

      <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        {skill.level}
      </span>

      {skill.description && (
        <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
          {skill.description}
        </p>
      )}
    </div>
  );
};

export default SkillCard;