import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Faq } from '../../data/especialidades';

interface FAQEspecialidadeProps {
  nome: string;
  faqs: Faq[];
}

export const FAQEspecialidade: React.FC<FAQEspecialidadeProps> = ({ nome, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Perguntas Frequentes sobre {nome}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Esclareça suas principais dúvidas sobre consultas, exames e tratamentos na área de {nome}.
          </p>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg bg-white overflow-hidden">
              <button
                id={`faq-spec-btn-${index}`}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-primary-500 transition-colors"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-spec-panel-${index}`}
              >
                <span className="font-semibold text-slate-800 text-sm sm:text-base">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div
                  id={`faq-spec-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-spec-btn-${index}`}
                  className="p-4 pt-0 text-slate-600 bg-slate-50 border-t border-slate-100 text-sm sm:text-base leading-relaxed"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQEspecialidade;
