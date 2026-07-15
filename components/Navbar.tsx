import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CalendarCheck, Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const whatsappUrl = `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.`;

  const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Corpo Clínico', href: '/corpo-clinico' },
    { label: 'Exames', href: '/exames' },
    { label: 'Contato', href: '/contato' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" aria-label="Centro Médico da Bahia - Voltar ao início">
              <Logo className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 h-full">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative flex items-center h-full text-sm font-semibold transition-colors duration-200 hover:text-primary-600 ${
                  pathname === item.href
                    ? 'text-primary-600'
                    : 'text-slate-600'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0a376c] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right side CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a376c] hover:bg-[#002241] text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all hover:shadow-lg shadow-[#0a376c]/10 hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-4.5 h-4.5" />
              <span>Agendar Consulta</span>
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-primary-600 focus:outline-none p-2"
              aria-label="Alternar menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3 transition-all duration-300">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
              className={`block py-2 text-base font-semibold border-l-4 pl-3 ${
                pathname === item.href
                  ? 'border-[#0a376c] text-primary-600 bg-primary-50/30'
                  : 'border-transparent text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a376c] hover:bg-[#002241] text-white w-full py-3 rounded-full font-bold text-center flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Agendar Consulta</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};