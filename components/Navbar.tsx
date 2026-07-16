import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CalendarCheck, Menu, X, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Logo } from './Logo';
import { ESPECIALIDADES } from '../data/especialidades';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSpecOpen, setIsMobileSpecOpen] = useState(false);
  const { pathname } = useLocation();
  const whatsappUrl = `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.`;

  if (pathname === '/drmisterbrando') {
    const docWhatsappUrl = `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta de Ortopedia com o Dr. Mistebrando em Jussara.")}`;
    return (
      <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/drmisterbrando" className="flex-shrink-0 flex items-center" aria-label="Centro Médico da Bahia - Voltar ao início">
                <Logo className="h-12 w-auto" />
              </Link>
            </div>
            <div className="flex items-center">
              <a
                href={docWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-all hover:shadow-lg shadow-green-500/10 hover:-translate-y-0.5"
              >
                <CalendarCheck className="w-4.5 h-4.5" />
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }

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
            <Link
              to="/"
              className={`relative flex items-center h-full text-sm font-semibold transition-colors duration-200 hover:text-primary-600 ${
                pathname === '/' ? 'text-primary-600' : 'text-slate-600'
              }`}
            >
              Início
              {pathname === '/' && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0a376c] rounded-full" />
              )}
            </Link>

            {/* Specialties Dropdown */}
            <div className="relative group flex items-center h-full cursor-pointer">
              <button
                className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 hover:text-primary-600 focus:outline-none ${
                  pathname.startsWith('/especialidades') ? 'text-primary-600' : 'text-slate-600'
                }`}
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span>Especialidades</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              {/* Dropdown menu panel */}
              <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[480px] bg-white border border-slate-100 rounded-2xl shadow-xl p-5 hidden group-hover:grid grid-cols-2 gap-x-6 gap-y-3 z-50">
                {ESPECIALIDADES.map((esp) => {
                  const Icon = esp.icon;
                  return (
                    <Link
                      key={esp.slug}
                      to={`/especialidades/${esp.slug}`}
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#0055A4] transition-all text-sm font-medium"
                    >
                      <Icon className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <span>{esp.nome}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              to="/corpo-clinico"
              className={`relative flex items-center h-full text-sm font-semibold transition-colors duration-200 hover:text-primary-600 ${
                pathname === '/corpo-clinico' ? 'text-primary-600' : 'text-slate-600'
              }`}
            >
              Corpo Clínico
              {pathname === '/corpo-clinico' && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0a376c] rounded-full" />
              )}
            </Link>

            <Link
              to="/exames"
              className={`relative flex items-center h-full text-sm font-semibold transition-colors duration-200 hover:text-primary-600 ${
                pathname === '/exames' ? 'text-primary-600' : 'text-slate-600'
              }`}
            >
              Exames
              {pathname === '/exames' && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0a376c] rounded-full" />
              )}
            </Link>

            <Link
              to="/contato"
              className={`relative flex items-center h-full text-sm font-semibold transition-colors duration-200 hover:text-primary-600 ${
                pathname === '/contato' ? 'text-primary-600' : 'text-slate-600'
              }`}
            >
              Contato
              {pathname === '/contato' && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0a376c] rounded-full" />
              )}
            </Link>
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
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 text-base font-semibold border-l-4 pl-3 ${
              pathname === '/'
                ? 'border-[#0a376c] text-primary-600 bg-primary-50/30'
                : 'border-transparent text-slate-600 hover:bg-slate-50'
            }`}
          >
            Início
          </Link>

          {/* Mobile specialties sub-menu */}
          <div>
            <button
              onClick={() => setIsMobileSpecOpen(!isMobileSpecOpen)}
              className={`w-full flex justify-between items-center py-2 text-base font-semibold border-l-4 pl-3 focus:outline-none ${
                pathname.startsWith('/especialidades')
                  ? 'border-[#0a376c] text-primary-600 bg-primary-50/30'
                  : 'border-transparent text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>Especialidades</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isMobileSpecOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileSpecOpen && (
              <div className="pl-6 pr-2 pt-2 pb-2 grid grid-cols-1 gap-2 bg-slate-50/50 rounded-xl mt-1">
                {ESPECIALIDADES.map((esp) => (
                  <Link
                    key={esp.slug}
                    to={`/especialidades/${esp.slug}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileSpecOpen(false);
                    }}
                    className={`block py-1.5 text-sm font-medium ${
                      pathname === `/especialidades/${esp.slug}`
                        ? 'text-[#0055A4] font-bold'
                        : 'text-slate-600'
                    }`}
                  >
                    {esp.nome}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/corpo-clinico"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 text-base font-semibold border-l-4 pl-3 ${
              pathname === '/corpo-clinico'
                ? 'border-[#0a376c] text-primary-600 bg-primary-50/30'
                : 'border-transparent text-slate-600 hover:bg-slate-50'
            }`}
          >
            Corpo Clínico
          </Link>

          <Link
            to="/exames"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 text-base font-semibold border-l-4 pl-3 ${
              pathname === '/exames'
                ? 'border-[#0a376c] text-primary-600 bg-primary-50/30'
                : 'border-transparent text-slate-600 hover:bg-slate-50'
            }`}
          >
            Exames
          </Link>

          <Link
            to="/contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 text-base font-semibold border-l-4 pl-3 ${
              pathname === '/contato'
                ? 'border-[#0a376c] text-primary-600 bg-primary-50/30'
                : 'border-transparent text-slate-600 hover:bg-slate-50'
            }`}
          >
            Contato
          </Link>

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