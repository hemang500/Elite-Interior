import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {

  //scroll to section
  const handleNavigation = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/"
            className="text-2xl font-serif text-gray-900"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >INTERIOR STUDIO</Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
            <Link to="/" onClick={() => handleNavigation("portfolio")} className="text-gray-700 hover:text-gray-900">
                Portfolio
              </Link>
              <Link to="/" onClick={() => handleNavigation("services")} className="text-gray-700 hover:text-gray-900">
                Services
              </Link>
              <Link to="/" onClick={() => handleNavigation("about")} className="text-gray-700 hover:text-gray-900">
                About
              </Link>
              <Link to="/" onClick={() => handleNavigation("blog")} className="text-gray-700 hover:text-gray-900">
                Blog
              </Link>
              <Link to="/" onClick={() => handleNavigation("contact")} className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800">
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" onClick={() => handleNavigation("portfolio")} className="block px-3 py-2 text-gray-700 hover:text-gray-900">
              Portfolio
            </Link>
            <Link to="/" onClick={() => handleNavigation("services")} className="block px-3 py-2 text-gray-700 hover:text-gray-900">
              Services
            </Link>
            <Link to="/" onClick={() => handleNavigation("about")} className="block px-3 py-2 text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link to="/" onClick={() => handleNavigation("blog")} className="block px-3 py-2 text-gray-700 hover:text-gray-900">
              Blog
            </Link>
            <Link to="/" onClick={() => handleNavigation("contact")} className="block px-3 py-2 text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;