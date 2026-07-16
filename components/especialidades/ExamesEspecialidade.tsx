import React from 'react';
import { FileText } from 'lucide-react';

interface ExamesEspecialidadeProps {
  nome: string;
  exames: string[];
}

export const ExamesEspecialidade: React.FC<ExamesEspecialidadeProps> = ({ nome, exames }) => {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Exames e Procedimentos Relacionados
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
            Dispomos de exames complementares na própria clínica ou indicamos procedimentos laboratoriais essenciais para fechar seu diagnóstico em {nome}.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {exames.map((exame, index) => (
            <div key={index} className="bg-slate-50 border border-slate-100 p-5 rounded-xl sm:rounded-2xl flex flex-col items-center text-center sm:items-start sm:text-left hover:-translate-y-1 transition-all duration-300">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#0055A4]/5 text-[#0055A4] flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0">
                <FileText className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-black text-slate-800 mb-1 sm:mb-1.5 leading-snug">{exame}</h3>
              <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 leading-relaxed">
                Exame essencial para acompanhamento preventivo e investigação clínica detalhada na especialidade de {nome}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExamesEspecialidade;
