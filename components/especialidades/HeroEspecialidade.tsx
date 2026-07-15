import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

interface HeroEspecialidadeProps {
  nome: string;
  titleSeo: string;
  imagem: string;
  doctorPhoto?: string | null;
  doctorName?: string | null;
  doctorPhotoPosition?: string;
}

export const HeroEspecialidade: React.FC<HeroEspecialidadeProps> = ({ 
  nome, 
  titleSeo, 
  imagem,
  doctorPhoto,
  doctorName,
  doctorPhotoPosition
}) => {
  const whatsappUrl = `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá! Gostaria de agendar uma consulta com especialista em ${nome} em Irecê.`)}`;

  return (
    <div className="group/hero relative lg:min-h-[460px] flex flex-col lg:flex-row lg:items-center bg-gradient-to-br from-white via-slate-50 to-blue-50/20 overflow-hidden pt-0 pb-8 lg:pt-8 lg:pb-16 border-b border-slate-100">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] bg-pattern-dots pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto lg:px-8 w-full relative z-20">
        {/* Top full-width image on Mobile */}
        <div className={`lg:hidden w-full h-[260px] sm:h-[340px] relative overflow-hidden flex justify-center ${doctorPhoto ? 'bg-slate-50' : ''}`}>
          <img
            src={doctorPhoto || imagem}
            alt={doctorPhoto ? `Foto de ${doctorName} - Especialista em ${nome} em Irecê` : `Especialista em ${nome} em Irecê`}
            className="w-full h-full object-cover"
            style={doctorPhoto ? { objectPosition: doctorPhotoPosition || 'center 25%' } : undefined}
            fetchPriority="high"
            loading="eager"
          />
        </div>

        {/* Overlapping Content Card on Mobile */}
        <div className="bg-white rounded-t-[32px] -mt-6 pt-8 pb-4 px-4 sm:px-6 relative z-20 lg:bg-transparent lg:rounded-none lg:-mt-0 lg:p-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              className="lg:col-span-7 flex flex-col items-start text-left"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/50 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0a376c] mb-6 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-primary-500" />
                Especialidades CMB
              </div>

              {/* H1 Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight mb-4">
                Médico especialista em <br className="hidden sm:inline" />
                <span className="text-[#0a376c]">{nome} em Irecê - BA</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 font-normal mb-8 max-w-xl leading-relaxed">
                Agende sua consulta ou exame com total agilidade e confiança. Atendimento médico de excelência e estrutura completa no coração da Bahia.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-2 w-full sm:w-auto">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <button className="w-full bg-[#0a376c] hover:bg-[#002241] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-900/10 flex items-center justify-center gap-2 transition-all">
                    <CalendarCheck className="w-5 h-5" />
                    Agendar consulta
                  </button>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <button className="w-full bg-white hover:bg-slate-50 text-[#15a34a] border border-slate-200 font-bold px-8 py-3.5 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all">
                    <svg className="w-5 h-5 text-[#15a34a]" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12c0 2.17.61 4.2 1.66 5.92L2 22l4.19-1.08C7.87 21.57 9.87 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.4 14.8c-.3-.2-1.7-.9-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4-.1-.5-.1-.2-.9-2.2-1.2-2.9-.3-.7-.6-.6-.8-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.8.7.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.2-.4-.3-.7-.4z"
                        fill="currentColor"
                      />
                    </svg>
                    Falar no WhatsApp
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Right Column spacer to align text to the left 58% */}
            <div className="lg:col-span-5 hidden lg:block pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Absolute Image for Desktop (Right Side Panel Background) */}
      <div className={`hidden lg:block absolute top-0 right-0 bottom-0 w-[42%] h-full z-10 overflow-hidden ${doctorPhoto ? 'bg-slate-50' : ''}`}>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        <img
          src={doctorPhoto || imagem}
          alt={doctorPhoto ? `Foto de ${doctorName} - Especialista em ${nome}` : `Fachada Centro Médico da Bahia - Especialidade de ${nome}`}
          className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover/hero:scale-105"
          style={doctorPhoto ? { objectPosition: doctorPhotoPosition || 'center 25%' } : undefined}
          fetchPriority="high"
          loading="eager"
        />
      </div>
    </div>
  );
};
export default HeroEspecialidade;
