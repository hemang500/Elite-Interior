import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {

  const location = useLocation(); // Get current URL

  const handleNavigation = (id: string) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif mb-4">INTERIOR STUDIO</h2>
            <p className="text-gray-400 mb-6">
              Creating beautiful, functional spaces that inspire and delight. Our passion for design
              drives everything we do.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
            <li><Link to="/" onClick={() => handleNavigation("portfolio")} className="text-gray-400 hover:text-white">Portfolio</Link></li>
              <li><Link to="/" onClick={() => handleNavigation("services")} className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/" onClick={() => handleNavigation("about")} className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/" onClick={() => handleNavigation("blog")} className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/" onClick={() => handleNavigation("contact")} className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Banjara Hills, road number 1</li>
              <li>HYD, INDIA, 50034</li>
              <li>hello@interiorstudio.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Interior Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;