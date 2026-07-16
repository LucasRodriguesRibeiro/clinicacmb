import React from 'react';
import { AlertCircle } from 'lucide-react';

interface SintomasEspecialidadeProps {
  nome: string;
  sintomas: string[];
}

export const SintomasEspecialidade: React.FC<SintomasEspecialidadeProps> = ({ nome, sintomas }) => {
  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Quando procurar um especialista em {nome}?
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
            Fique atento aos sinais de alerta do seu corpo. Se você apresenta algum dos sintomas abaixo, agende uma avaliação médica.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sintomas.map((sintoma, index) => (
            <div key={index} className="bg-white p-5 rounded-xl sm:rounded-2xl border border-slate-100/80 shadow-sm flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-red-50 text-[#D32F2F] flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </div>
              <div className="flex-grow">
                <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-800 leading-snug">{sintoma}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SintomasEspecialidade;
