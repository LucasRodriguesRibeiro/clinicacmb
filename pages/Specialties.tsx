import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { SPECIALTIES } from '../constants';

export const Specialties: React.FC = () => {
  return (
    <>
      <div className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Especialidades Médicas</h1>
          <p className="mt-4 text-xl text-primary-100 max-w-3xl mx-auto">
            Corpo clínico qualificado para atender você e sua família em diversas áreas.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALTIES.map((spec) => (
            <div key={spec.id} className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary-200">
              <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-6">
                <spec.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{spec.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {spec.description}
              </p>
              <Link to="/agendamento">
                <span className="text-primary-600 font-semibold text-sm hover:underline cursor-pointer">
                  Agendar consulta &rarr;
                </span>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Não sabe qual especialidade escolher?</h2>
          <p className="text-slate-600 mb-8">
            Na dúvida, agende uma avaliação com nosso Clínico Geral. Ele poderá orientar o melhor tratamento para você.
          </p>
          <Link to="/agendamento">
            <Button variant="primary">Agendar com Clínico Geral</Button>
          </Link>
        </div>
      </Section>
    </>
  );
};