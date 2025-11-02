import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${isScrolled
          ? "bg-white/40 dark:bg-gray-900/50 backdrop-blur-lg shadow-xl border-b border-white/30 dark:border-gray-700/50"
          : "bg-white/20 dark:bg-gray-800/30 backdrop-blur-md"
        }
  `}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:scale-105 transition-transform">
          &lt;ASWIN S /&gt;
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.link}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Theme Toggle - Desktop */}
          <li>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-xl" />
              ) : (
                <FaMoon className="text-gray-700 text-xl" />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          {/* Theme Toggle - Mobile */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 text-lg" />
            ) : (
              <FaMoon className="text-gray-700 text-lg" />
            )}
          </button>

          <button 
            onClick={toggleMenu}
            className="text-2xl text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/60 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl animate-slide-up border-b border-white/20 dark:border-gray-600/30">
          <ul className="flex flex-col space-y-4 p-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={handleLinkClick}
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-lg px-3 py-2 rounded-lg transition bg-white/10 dark:bg-gray-900/10 hover:bg-white/30 dark:hover:bg-gray-900/30 backdrop-blur-xs"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;