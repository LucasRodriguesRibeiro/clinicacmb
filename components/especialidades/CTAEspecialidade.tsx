import React from 'react';
import { CalendarCheck, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

interface CTAEspecialidadeProps {
  nome: string;
}

export const CTAEspecialidade: React.FC<CTAEspecialidadeProps> = ({ nome }) => {
  const whatsappUrl = `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá! Gostaria de agendar uma consulta com especialista em ${nome} em Irecê.`)}`;

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background visual styles */}
      <div className="absolute inset-0 bg-gradient-primary"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
          Agende sua consulta hoje
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
          Pronto para cuidar da sua saúde em {nome} com os melhores especialistas?
        </h2>
        <p className="text-blue-100 mb-10 text-lg sm:text-xl font-light">
          Agende agora a sua avaliação no Centro Médico da Bahia e garanta um acompanhamento preventivo humanizado e eficiente em Irecê - BA.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
            <button className="w-full h-14 bg-white text-[#0055A4] hover:bg-slate-50 font-bold px-8 py-3 rounded-xl shadow-xl flex items-center justify-center gap-2 transition-all">
              <CalendarCheck className="w-5 h-5" />
              Agendar Consulta
            </button>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
            <button className="w-full h-14 bg-[#25D366] text-white hover:bg-[#128C7E] font-bold px-8 py-3 rounded-xl shadow-xl flex items-center justify-center gap-2 transition-all">
              <MessageSquare className="w-5 h-5" fill="white" />
              Falar no WhatsApp
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default CTAEspecialidade;
