import React from 'react';
import { CalendarCheck } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const whatsappUrl = `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.`;

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300 border-b border-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <Logo className="h-12 w-auto" />
            </a>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-medium text-sm flex items-center transition-colors shadow-md"
          >
            <CalendarCheck className="w-4 h-4 mr-2" />
            Agendar Consulta
          </a>
        </div>
      </div>
    </nav>
  );
};