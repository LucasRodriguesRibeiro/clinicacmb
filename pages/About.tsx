import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { CONTACT_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <>
      <div className="bg-slate-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">A Clínica</h1>
          <p className="mt-4 text-xl text-slate-500 max-w-3xl mx-auto">
            Conheça o CMB - Centro Médico da Bahia, referência em atendimento humanizado e qualidade técnica.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/clinic/600/500" 
              alt="Recepção do CMB" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossa História e Missão</h2>
            <div className="prose prose-blue text-slate-600 space-y-4">
              <p>
                O <strong>CMB (Centro Médico da Bahia)</strong> nasceu com o propósito de oferecer saúde de qualidade acessível para as famílias da nossa região. Entendemos que ir ao médico pode ser um momento delicado, por isso, focamos em um ambiente acolhedor.
              </p>
              <p>
                Nossa estrutura foi pensada para garantir conforto desde a recepção até a sala de exames. Contamos com equipamentos modernos e uma equipe de profissionais que amam o que fazem.
              </p>
              <p>
                Acreditamos que saúde é coisa séria, mas o atendimento pode ser leve. Aqui, você é tratado pelo nome, com respeito e atenção.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
               <div className="border-l-4 border-primary-500 pl-4">
                 <p className="font-bold text-lg text-slate-900">Missão</p>
                 <p className="text-sm text-slate-500">Cuidar de vidas com excelência e humanidade.</p>
               </div>
               <div className="border-l-4 border-secondary-500 pl-4">
                 <p className="font-bold text-lg text-slate-900">Visão</p>
                 <p className="text-sm text-slate-500">Ser referência em saúde ambulatorial na Bahia.</p>
               </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="blue">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Estrutura Completa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
             <div className="bg-white p-6 rounded-lg shadow">
               <div className="h-40 bg-slate-200 rounded mb-4 overflow-hidden">
                 <img src="https://picsum.photos/seed/sala1/400/300" alt="Consultório" className="w-full h-full object-cover"/>
               </div>
               <h3 className="font-bold text-lg mb-2">Consultórios Modernos</h3>
               <p className="text-sm text-slate-600">Ambientes climatizados e confortáveis.</p>
             </div>
             <div className="bg-white p-6 rounded-lg shadow">
               <div className="h-40 bg-slate-200 rounded mb-4 overflow-hidden">
                 <img src="https://picsum.photos/seed/sala2/400/300" alt="Recepção" className="w-full h-full object-cover"/>
               </div>
               <h3 className="font-bold text-lg mb-2">Recepção Ampla</h3>
               <p className="text-sm text-slate-600">Espaço pensado para seu bem-estar.</p>
             </div>
             <div className="bg-white p-6 rounded-lg shadow">
               <div className="h-40 bg-slate-200 rounded mb-4 overflow-hidden">
                 <img src="https://picsum.photos/seed/sala3/400/300" alt="Equipamentos" className="w-full h-full object-cover"/>
               </div>
               <h3 className="font-bold text-lg mb-2">Tecnologia</h3>
               <p className="text-sm text-slate-600">Equipamentos de última geração.</p>
             </div>
          </div>
          <div className="mt-12">
            <a href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">
              <Button variant="primary">Agende uma visita</Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};