import React from 'react';
import { AlertCircle } from 'lucide-react';

interface SintomasEspecialidadeProps {
  nome: string;
  sintomas: string[];
}

export const SintomasEspecialidade: React.FC<SintomasEspecialidadeProps> = ({ nome, sintomas }) => {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Quando procurar um especialista em {nome}?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Fique atento aos sinais de alerta do seu corpo. Se você apresenta algum dos sintomas abaixo, agende uma avaliação médica.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sintomas.map((sintoma, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D32F2F] flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">{sintoma}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SintomasEspecialidade;
