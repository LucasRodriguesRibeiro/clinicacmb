import React from 'react';
import { CalendarCheck, ShieldCheck, Clock, ArrowRight, Activity, Stethoscope, FileText, Syringe, FlaskConical, Waves } from 'lucide-react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { FaqAccordion } from '../components/FaqAccordion';
import { SPECIALTIES, EXAMS, CONTACT_INFO, FAQS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-b from-primary-600 to-primary-800 overflow-hidden py-12 lg:py-20 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-pattern-dots pointer-events-none"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-400 blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-400 blur-3xl opacity-20"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-50 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-300 rounded-full mr-2 animate-pulse"></span>
            EXCELÊNCIA EM MEDICINA
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3 sm:mb-4 leading-tight drop-shadow-md">
            Sua saúde em <span className="text-blue-200">primeiro lugar</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-lg text-blue-50 mb-6 sm:mb-8 max-w-2xl mx-auto font-light leading-relaxed px-2">
            Agende consultas e exames com agilidade e confiança. Atendimento humanizado e estrutura completa no coração da Bahia.
          </p>

          {/* Benefits Grid - Horizontal & Compact */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 sm:gap-4 mb-8 sm:mb-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 sm:p-4 border border-white/5 flex flex-col items-center hover:bg-white/20 transition-colors">
              <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 mb-1 sm:mb-2" />
              <span className="font-bold text-[10px] sm:text-sm leading-tight">Especialidades</span>
              <span className="hidden sm:block text-xs text-blue-100 opacity-80 mt-1">Clínico, pediatria e mais</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 sm:p-4 border border-white/5 flex flex-col items-center hover:bg-white/20 transition-colors">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 mb-1 sm:mb-2" />
              <span className="font-bold text-[10px] sm:text-sm leading-tight">Exames</span>
              <span className="hidden sm:block text-xs text-blue-100 opacity-80 mt-1">Laboratório e Imagem</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 sm:p-4 border border-white/5 flex flex-col items-center hover:bg-white/20 transition-colors">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 mb-1 sm:mb-2" />
              <span className="font-bold text-[10px] sm:text-sm leading-tight text-center">Atendimento</span>
              <span className="hidden sm:block text-xs text-blue-100 opacity-80 mt-1">Cuidado em cada etapa</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent("Olá, gostaria de agendar uma consulta.")}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full h-12 text-sm sm:text-base px-8 bg-white text-primary-700 hover:bg-blue-50 border-transparent shadow-lg font-bold">
                Agendar consulta
              </Button>
            </a>
            <a
              href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent("Olá, vim pelo site da Clínica CMB.")}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="whatsapp" className="w-full h-12 text-sm sm:text-base px-8 shadow-lg bg-[#25D366] hover:bg-[#128C7E] border-transparent">
                Falar no WhatsApp
              </Button>
            </a>
          </div>

          {/* Microcopy */}
          <p className="mt-6 text-[10px] sm:text-xs font-medium text-blue-200/80 uppercase tracking-wide flex items-center justify-center gap-2">
            <Clock className="w-3 h-3" />
            Resposta rápida • Atendimento local
          </p>
        </div>
      </div>

      {/* O QUE VOCÊ ENCONTRA NA CMB */}
      <Section background="white" className="relative -mt-16 z-20 pt-0">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Tudo para sua saúde</h2>
            <p className="mt-4 text-xl text-slate-500">Completa infraestrutura para cuidar de você.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 text-center hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 text-primary-600 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Consultas</h3>
              <p className="text-sm text-slate-600">Especialistas prontos para te ouvir e cuidar.</p>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 text-center hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 text-primary-600 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform flex items-center justify-center mx-auto mb-6">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Exames</h3>
              <p className="text-sm text-slate-600">Laboratório e imagem com precisão digital.</p>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 text-center hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 text-primary-600 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Check-ups</h3>
              <p className="text-sm text-slate-600">Prevenção completa para uma vida longa.</p>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 text-center hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 text-primary-600 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform flex items-center justify-center mx-auto mb-6">
                <Syringe className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Vacinas</h3>
              <p className="text-sm text-slate-600">Imunização para todas as idades.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SPECIALTIES PREVIEW */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Nossas Especialidades</h2>
          <p className="mt-4 text-xl text-slate-500">Médicos especialistas prontos para te atender.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALTIES.slice(0, 8).map((spec) => (
            <div key={spec.id} className="group relative bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <spec.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 group-hover:text-primary-600 transition-colors">
                {spec.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                {spec.description}
              </p>
            </div>
          ))}
        </div>

      </Section>

      {/* EXAMS PREVIEW */}
      <Section background="blue">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-4 text-white">
              Exames Laboratoriais e de Imagem
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Realize seus exames com equipamentos modernos, conforto e receba resultados rápidos.
            </p>
            <ul className="space-y-4 mb-8">
              {EXAMS.map((exam) => (
                <li key={exam.id} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-primary-600 shadow-sm">
                      <exam.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-white">{exam.title}</p>
                    <p className="text-primary-200 text-sm">{exam.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-center">
              <a href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá, gostaria de agendar um exame.')}`} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="primary" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-semibold shadow-md">
                  Agendar Exame
                </Button>
              </a>
            </div>

          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-10 relative">
            {/* Abstract Geometric Composition */}
            <div className="relative h-[450px] w-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden flex items-center justify-center group">

              {/* Background Gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse-slow"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

              {/* Geometric Lines */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 100 Q 50 0 100 100" stroke="white" strokeWidth="0.5" fill="none" />
                  <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" fill="none" />
                  <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="0.5" fill="none" />
                  <circle cx="80" cy="80" r="15" stroke="white" strokeWidth="0.5" fill="none" />
                </svg>
              </div>

              {/* Icons Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-6 p-6 w-full max-w-md">

                {/* ECG Icon */}
                <div className="aspect-square flex flex-col items-center justify-center p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Activity className="w-12 h-12 lg:w-16 lg:h-16 text-white/90 mb-3" strokeWidth={1.5} />
                  <span className="text-[10px] lg:text-xs font-bold text-blue-50 uppercase tracking-widest">Cardiologia</span>
                </div>

                {/* Lab Icon */}
                <div className="aspect-square flex flex-col items-center justify-center p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg transform hover:scale-105 transition-all duration-300 translate-y-8">
                  <FlaskConical className="w-12 h-12 lg:w-16 lg:h-16 text-white/90 mb-3" strokeWidth={1.5} />
                  <span className="text-[10px] lg:text-xs font-bold text-blue-50 uppercase tracking-widest">Laboratório</span>
                </div>

                {/* Ultrasound Icon (Centered below) */}
                <div className="col-span-2 aspect-video flex flex-col items-center justify-center p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg transform hover:scale-105 transition-all duration-300 w-3/4 mx-auto -mt-4">
                  <Waves className="w-12 h-12 lg:w-16 lg:h-16 text-white/90 mb-3" strokeWidth={1.5} />
                  <span className="text-[10px] lg:text-xs font-bold text-blue-50 uppercase tracking-widest">Ultrassonografia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* POR QUE ESCOLHER A CMB */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Por que escolher a CMB?</h2>
          <p className="mt-4 text-xl text-slate-500">Compromisso com sua saúde e bem-estar.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-secondary-50 text-secondary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Confiança Médica</h3>
            <p className="text-slate-600">Corpo clínico altamente qualificado e humanizado.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-secondary-50 text-secondary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Agilidade</h3>
            <p className="text-slate-600">Pontualidade nas consultas e rapidez nos resultados.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-secondary-50 text-secondary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Fácil Acesso</h3>
            <p className="text-slate-600">Localização privilegiada e agendamento simplificado.</p>
          </div>
        </div>
      </Section>

      {/* FAQ SECTION */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Perguntas Frequentes</h2>
          <p className="mt-4 text-xl text-slate-500">Tire suas dúvidas de forma rápida.</p>
        </div>
        <FaqAccordion items={FAQS} />
      </Section>


      {/* CTA STRIP */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand"></div>
        <div className="absolute inset-0 bg-primary-900/90"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
            Agende hoje mesmo
          </span>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Pronto para cuidar da sua saúde com quem entende?
          </h2>
          <p className="text-primary-100 mb-10 text-xl font-light">
            Não deixe para depois. Agende sua consulta ou exame no Centro Médico da Bahia e tenha o atendimento que você merece.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent("Olá, gostaria de agendar uma consulta.")}`} target="_blank" rel="noreferrer">
              <Button className="w-full sm:w-auto bg-white text-primary-700 hover:bg-slate-50 border-transparent shadow-xl h-14 px-8 text-lg">
                Agendar Consulta
              </Button>
            </a>
            <a href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent("Olá, vim pelo site da Clínica CMB.")}`} target="_blank" rel="noreferrer">
              <Button variant="whatsapp" className="w-full sm:w-auto h-14 px-8 text-lg shadow-xl ring-2 ring-white/20">
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
};