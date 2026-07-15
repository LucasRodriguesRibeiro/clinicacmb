import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, ShieldCheck, Clock, ArrowRight, Activity, Stethoscope, FileText, Syringe, FlaskConical, Waves, Users, Heart, MapPin, BadgeCheck, ChevronRight } from 'lucide-react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { FaqAccordion } from '../components/FaqAccordion';
import { SPECIALTIES, EXAMS, CONTACT_INFO, FAQS, DOCTORS } from '../constants';
const fachadaImg = '/imagens/fachada.webp';

// Motion variants for premium staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] // Custom easeOutExpo
    }
  }
};

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-hidden w-full">
      {/* HERO SECTION */}
      <div id="inicio" className="group/hero relative lg:min-h-[500px] flex flex-col lg:flex-row lg:items-center bg-gradient-to-br from-white via-slate-50 to-blue-50/20 overflow-hidden pt-0 pb-8 lg:pt-8 lg:pb-16 border-b border-slate-100">
        
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-[0.03] bg-pattern-dots pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto lg:px-8 w-full relative z-20">
          
          {/* Top Full-width Facade Image on Mobile */}
          <div className="lg:hidden w-full h-[240px] sm:h-[340px] relative overflow-hidden">
            <img
              src={fachadaImg}
              alt="Fachada da clínica Centro Médico da Bahia em Jussara"
              className="w-full h-full object-cover"
              fetchPriority="high"
              loading="eager"
              width="800"
              height="340"
            />
          </div>

          {/* Overlapping Content Card on Mobile */}
          <div className="bg-white rounded-t-[32px] -mt-6 pt-8 pb-4 px-4 sm:px-6 relative z-20 lg:bg-transparent lg:rounded-none lg:-mt-0 lg:p-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content Column */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="lg:col-span-7 flex flex-col items-start text-left"
              >
                {/* Badge */}
                <motion.div 
                  variants={itemVariants}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/50 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0a376c] mb-6 shadow-sm"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-primary-500" />
                  EXCELÊNCIA EM MEDICINA
                </motion.div>

                {/* Headline */}
                <motion.h1 
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight text-slate-900 leading-tight mb-4"
                >
                  Sua saúde em <br className="hidden sm:inline" />
                  <span className="text-[#0a376c]">primeiro</span> lugar
                </motion.h1>

                {/* Subheadline */}
                <motion.p 
                  variants={itemVariants}
                  className="text-base sm:text-lg text-slate-600 font-normal mb-8 max-w-xl leading-relaxed"
                >
                  Agende consultas e exames com agilidade e confiança. Atendimento humanizado e estrutura completa no coração da Bahia.
                </motion.p>

                {/* Buttons */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-2 w-full sm:w-auto"
                >
                  <a
                    href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent("Olá, gostaria de agendar uma consulta.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <button className="w-full bg-[#0a376c] hover:bg-[#002241] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-900/10 flex items-center justify-center gap-2 transition-all">
                      <CalendarCheck className="w-5 h-5" />
                      Agendar consulta
                    </button>
                  </a>
                  <a
                    href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent("Olá, vim pelo site da Clínica CMB.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <button className="w-full bg-white hover:bg-slate-50 text-[#15a34a] border border-slate-200 font-bold px-8 py-3.5 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all">
                      <svg className="w-5 h-5 text-[#15a34a]" fill="none" viewBox="0 0 24 24">
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12c0 2.17.61 4.2 1.66 5.92L2 22l4.19-1.08C7.87 21.57 9.87 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.4 14.8c-.3-.2-1.7-.9-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4-.1-.5-.1-.2-.9-2.2-1.2-2.9-.3-.7-.6-.6-.8-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.8.7.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.2-.4-.3-.7-.4z"
                          fill="currentColor"
                        />
                      </svg>
                      Falar no WhatsApp
                    </button>
                  </a>
                </motion.div>


              </motion.div>

              {/* Right Column (only visible on desktop / fallback) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
                className="lg:col-span-5 lg:hidden relative w-full h-[250px] sm:h-[350px] rounded-2xl overflow-hidden shadow-md border border-slate-100 hidden"
              >
                <img
                  src={fachadaImg}
                  alt="Fachada do Centro Médico da Bahia"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Absolute Image for Desktop */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[46%] h-full z-10 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-48 lg:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
          <motion.img
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src={fachadaImg}
            alt="Fachada da clínica Centro Médico da Bahia em Jussara"
            className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover/hero:scale-105"
            fetchPriority="high"
            loading="eager"
            width="880"
            height="500"
          />
        </div>
      </div>

      {/* OVERLAPPING HIGHLIGHT CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 lg:-mt-20 relative z-30">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-slate-100/80 shadow-sm hover:shadow-md p-3 sm:p-5 flex items-center gap-3 sm:gap-4 rounded-2xl cursor-pointer hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-blue-100 flex items-center justify-center text-[#0a376c] bg-blue-50/50 flex-shrink-0 shadow-sm">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-bold text-xs sm:text-sm text-slate-800 leading-snug">Atendimento ágil</span>
              <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5 leading-normal">Mais praticidade para sua rotina.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-100/80 shadow-sm hover:shadow-md p-3 sm:p-5 flex items-center gap-3 sm:gap-4 rounded-2xl cursor-pointer hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-blue-100 flex items-center justify-center text-[#0a376c] bg-blue-50/50 flex-shrink-0 shadow-sm">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-bold text-xs sm:text-sm text-slate-800 leading-snug">Equipe qualificada</span>
              <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5 leading-normal">Profissionais experientes e atenciosos.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-100/80 shadow-sm hover:shadow-md p-3 sm:p-5 flex items-center gap-3 sm:gap-4 rounded-2xl cursor-pointer hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-red-100 flex items-center justify-center text-[#D32F2F] bg-red-50/50 flex-shrink-0 shadow-sm">
              <Heart className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <span className="block font-bold text-xs sm:text-sm text-slate-800 leading-snug">Estrutura completa</span>
              <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5 leading-normal">Tecnologia moderna para melhor atendimento.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-100/80 shadow-sm hover:shadow-md p-3 sm:p-5 flex items-center gap-3 sm:gap-4 rounded-2xl cursor-pointer hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-blue-100 flex items-center justify-center text-[#0a376c] bg-blue-50/50 flex-shrink-0 shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-bold text-xs sm:text-sm text-slate-800 leading-snug">Localização</span>
              <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5 leading-normal">No coração da Bahia, fácil acesso para você.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CORPO CLÍNICO */}
      <section id="corpo-clinico" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0a376c] mb-4">
              <BadgeCheck className="w-3.5 h-3.5" />
              Profissionais habilitados
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Nosso Corpo Clínico
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
              Médicos especializados e dedicados ao seu bem-estar, com atendimento humanizado.
            </p>
          </motion.div>

          {/* Doctor Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCTORS.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Gradient header background */}
                <div className="bg-gradient-to-br from-[#0a376c] to-[#0e4d96] pt-8 pb-14 flex justify-center relative overflow-hidden">
                  {/* Subtle decorative circles */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full"></div>
                </div>

                {/* Avatar — overlaps the gradient header */}
                <div className="flex flex-col items-center -mt-14 px-6 flex-grow relative z-10">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0 mb-3 bg-slate-100">
                    {doctor.photo ? (
                      <img
                        src={doctor.photo.endsWith('.png') ? doctor.photo.replace('.png', '.webp') : doctor.photo}
                        alt={`Foto de ${doctor.name} - ${doctor.specialty} no Centro Médico da Bahia`}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: doctor.photoPosition ?? 'center 25%' }}
                        loading="lazy"
                        width="112"
                        height="112"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#0a376c] text-white text-2xl font-black">
                        {doctor.initials}
                      </div>
                    )}
                  </div>

                  {/* Specialty badge */}
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 text-[#0a376c] bg-blue-50 border border-blue-100">
                    {doctor.specialty}
                  </span>

                  {/* Name */}
                  <h3 className="font-black text-base text-slate-900 text-center leading-tight mb-1">
                    {doctor.name}
                  </h3>

                </div>

                {/* Book button */}
                <div className="px-6 pb-6">
                  <a
                    href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá, gostaria de agendar uma consulta com ${doctor.name}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center text-xs font-bold py-2.5 rounded-xl text-white bg-[#0a376c] hover:bg-[#062a55] transition-all hover:-translate-y-0.5 shadow-md"
                  >
                    Agendar consulta
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMES */}
      <section id="exames" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 tracking-tight">
              Exames e Procedimentos
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Estrutura completa com equipamentos modernos, atendimento humanizado e resultados confiáveis para cuidar do seu bem-estar.
            </p>
          </motion.div>

          {/* Exams Grid (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {EXAMS.map((exam) => (
              <div
                key={exam.id}
                className="bg-white rounded-2xl p-6 border border-slate-100/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0a376c]/5 flex items-center justify-center mb-4 flex-shrink-0">
                  <exam.icon className="w-5 h-5 text-[#0a376c]" />
                </div>
                <h3 className="text-sm font-black text-slate-800 mb-1 leading-snug">{exam.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{exam.description}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá, gostaria de agendar um exame.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-[#0a376c] hover:bg-[#062a55] text-white font-bold px-10 py-4 rounded-full shadow-lg transition-all hover:-translate-y-0.5 duration-200">
                Agendar Exame
              </button>
            </a>
          </div>

        </div>
      </section>

      {/* POR QUE ESCOLHER A CMB */}
      <Section id="atendimento" background="blue">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white sm:text-4xl tracking-tight">
            Por que escolher a CMB?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Compromisso com sua saúde e bem-estar em cada detalhe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl hover:bg-white/15 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-white mb-2">Confiança Médica</h3>
            <p className="text-sm text-blue-100 leading-relaxed">Corpo clínico altamente qualificado e atendimento verdadeiramente humanizado.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl hover:bg-white/15 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-white mb-2">Agilidade</h3>
            <p className="text-sm text-blue-100 leading-relaxed">Pontualidade no atendimento às consultas e máxima rapidez na entrega de laudos.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl hover:bg-white/15 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CalendarCheck className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-white mb-2">Fácil Acesso</h3>
            <p className="text-sm text-blue-100 leading-relaxed">Localização privilegiada no centro de Jussara e facilidade de agendamento digital.</p>
          </div>

        </div>
      </Section>

      {/* FAQ SECTION */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Perguntas Frequentes</h2>
          <p className="mt-4 text-xl text-slate-600">Tire suas dúvidas de forma rápida.</p>
        </div>
        <FaqAccordion items={FAQS} />
      </Section>

      {/* CTA STRIP */}
      <div id="contato" className="relative py-20 overflow-hidden">
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
    </div>
  );
};