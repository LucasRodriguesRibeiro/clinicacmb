import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CalendarCheck } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300 border-b border-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={() => setIsOpen(false)}>
              <Logo className="h-12 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${isActive(link.path)
                  ? 'text-primary-600 font-semibold border-b-2 border-primary-600'
                  : 'text-slate-600 hover:text-primary-600'
                  } transition-colors duration-200 text-sm font-medium py-2`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/agendamento"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-medium text-sm flex items-center transition-colors shadow-md"
            >
              <CalendarCheck className="w-4 h-4 mr-2" />
              Agendar
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg h-screen">
          <div className="px-4 pt-4 pb-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${isActive(link.path)
                  ? 'bg-primary-50 text-primary-600 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600'
                  } block px-3 py-4 rounded-lg text-base font-medium border-l-4 ${isActive(link.path) ? 'border-primary-600' : 'border-transparent'}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-slate-100">
              <Link
                to="/agendamento"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary-600 text-white px-3 py-4 rounded-lg text-base font-bold shadow-md"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};