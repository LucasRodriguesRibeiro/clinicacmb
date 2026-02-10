import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { EXAMS, CONTACT_INFO } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const Exams: React.FC = () => {
  return (
    <>
      <div className="bg-secondary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Exames</h1>
          <p className="mt-4 text-xl text-secondary-100 max-w-3xl mx-auto">
            Diagnósticos precisos com tecnologia de ponta e resultados rápidos.
          </p>
        </div>
      </div>

      <Section>
        <div className="space-y-12">
          {EXAMS.map((exam, index) => (
            <div 
              key={exam.id} 
              className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2">
                <img 
                  src={`https://picsum.photos/seed/${exam.id}/600/400`} 
                  alt={exam.title} 
                  className="rounded-xl shadow-lg w-full object-cover h-64 md:h-80"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-secondary-100 text-secondary-600 rounded-lg mr-4">
                    <exam.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{exam.title}</h2>
                </div>
                <p className="text-lg text-slate-600 mb-6">
                  {exam.description}
                </p>
                
                {exam.details && (
                  <ul className="mb-8 space-y-3">
                    {exam.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-secondary-500 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mb-1">Preparo</p>
                  <p className="text-slate-700">Consulte as orientações de preparo específicas para este exame via WhatsApp.</p>
                </div>

                <a href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">
                  <Button variant="whatsapp">Agendar {exam.title}</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="blue">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Dúvidas sobre resultados?</h2>
          <p className="text-slate-600 mb-8">
            Nossos exames laboratoriais possuem prazos ágeis. Entre em contato para saber a previsão de entrega do seu.
          </p>
          <Link to="/contato">
            <Button variant="primary">Ver contatos</Button>
          </Link>
        </div>
      </Section>
    </>
  );
};