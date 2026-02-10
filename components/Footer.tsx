import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand & Description */}
          <div>
            <div className="mb-6">
              <Logo theme="dark" className="h-10" />
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Referência em atendimento médico na Bahia. Agilidade, confiança e profissionais qualificados para cuidar da sua saúde e da sua família.
            </p>
            <div className="text-xs text-slate-500">
              <p>CNPJ: 09.157.211/0002-98</p>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Navegação</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0" />
                <span>{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} CMB - Centro Médico da Bahia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};