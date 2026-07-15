import React from 'react';

interface SobreEspecialidadeProps {
  nome: string;
  descricao: string;
}

export const SobreEspecialidade: React.FC<SobreEspecialidadeProps> = ({ nome, descricao }) => {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-6">
              Sobre a especialidade de {nome}
            </h2>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                {descricao}
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                O acompanhamento preventivo com um <strong>médico especialista em {nome} em Irecê</strong> é de extrema importância para rastrear patologias silenciosas em estágios iniciais, permitindo tratamentos muito mais eficazes e menos invasivos. A prevenção é sempre a melhor escolha para uma vida longa, saudável e feliz.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                No <strong>Centro Médico da Bahia (CMB)</strong>, priorizamos o atendimento humanizado, entendendo a individualidade de cada paciente de Irecê e região. Nossa equipe médica qualificada está à disposição para oferecer um diagnóstico preciso e conduzir as melhores práticas de saúde baseadas em evidências científicas.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8">
            <h3 className="font-bold text-lg text-slate-800 mb-4">Por que se consultar no CMB?</h3>
            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0055A4] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                <span><strong>Atendimento Humanizado:</strong> Focado no acolhimento e no bem-estar do paciente.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0055A4] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                <span><strong>Estrutura Completa:</strong> Consultórios modernos no centro de Irecê - BA.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0055A4] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                <span><strong>Resultados Ágeis:</strong> Integração com exames diagnósticos complementares.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SobreEspecialidade;
