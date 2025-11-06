const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  download,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95";

  const variants = {
    // Blue gradient - Primary (Works well with white & dark backgrounds)
    primary: "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg dark:from-blue-600 dark:to-blue-500 dark:hover:from-blue-500 dark:hover:to-blue-400",

    // Purple to Blue gradient - Secondary (Trendy alternative)
    secondary: "bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:from-indigo-600 hover:to-blue-600 shadow-md hover:shadow-lg dark:from-indigo-600 dark:to-blue-500 dark:hover:from-indigo-500 dark:hover:to-blue-400",

    // Green gradient - Success (Bright and positive)
    success: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-md hover:shadow-lg dark:from-emerald-600 dark:to-teal-500 dark:hover:from-emerald-500 dark:hover:to-teal-400",

    // Outline style (Neutral, works everywhere)
    outline: "border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:shadow-md transition-all",
  };

  const sizes = {
    sm: "px-4 py-2 rounded-lg text-sm",
    md: "px-6 py-3 rounded-xl",
    lg: "px-8 py-4 rounded-xl text-lg",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

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