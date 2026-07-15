import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { Benefit } from '../../data/especialidades';

interface BeneficiosEspecialidadeProps {
  nome: string;
  beneficios: Benefit[];
}

export const BeneficiosEspecialidade: React.FC<BeneficiosEspecialidadeProps> = ({ nome, beneficios }) => {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Benefícios do Acompanhamento Preventivo
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Descubra por que realizar consultas periódicas com o especialista em {nome} é vital para sua saúde.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 text-[#0055A4] rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-800 mb-2">{beneficio.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{beneficio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BeneficiosEspecialidade;
