import React from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const FloatingWhatsApp: React.FC = () => {
    const { pathname } = useLocation();
    const customMessage = pathname === '/drmisterbrando'
        ? "Olá! Gostaria de agendar uma consulta de Ortopedia com o Dr. Mistebrando em Jussara."
        : "Olá, vim pelo site da Clínica CMB.";

    return (
        <a
            href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(customMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
            aria-label="Falar no WhatsApp"
        >
            <MessageCircle className="w-8 h-8" fill="white" />
        </a>
    );
};
