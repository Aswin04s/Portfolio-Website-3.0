const Card = ({ children, className = '', hover = true }) => {
  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 
        ${hover ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-2' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;