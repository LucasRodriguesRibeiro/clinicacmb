import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { Benefit } from '../../data/especialidades';

interface BeneficiosEspecialidadeProps {
  nome: string;
  beneficios: Benefit[];
}

export const BeneficiosEspecialidade: React.FC<BeneficiosEspecialidadeProps> = ({ nome, beneficios }) => {
  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Benefícios do Acompanhamento Preventivo
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
            Descubra por que realizar consultas periódicas com o especialista em {nome} é vital para sua saúde.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="bg-white border border-slate-100 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 text-[#0055A4] rounded-lg sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-inner">
                <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-800 mb-1.5 sm:mb-2">{beneficio.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{beneficio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BeneficiosEspecialidade;
