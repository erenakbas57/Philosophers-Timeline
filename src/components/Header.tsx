
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10 py-4 ${
        isScrolled ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-primary">
          <BookOpen className="h-6 w-6" />
          <span className="font-serif text-xl font-medium">Filozof</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Ana Sayfa
          </Link>
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Filozoflar
          </Link>
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Hakkında
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md shadow-md p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Filozoflar
            </Link>
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Hakkında
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
