const Button = ({ children, variant = 'primary', onClick, href, download, className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
    secondary: "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600",
    outline: "border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        download={download}
        className={styles}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={styles}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;