import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarCheck, 
  ShieldCheck, 
  Bone, 
  Activity, 
  Zap, 
  RotateCcw, 
  Flame, 
  Shield, 
  Sparkles, 
  AlertTriangle,
  Stethoscope,
  Clock,
  MapPin,
  Star,
  Phone,
  Mail,
  ChevronRight,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Logo } from '../components/Logo';
import { StructuredData } from '../seo/components/StructuredData';

// Framer motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

export const DrMisterbrando: React.FC = () => {
  const whatsappNumber = CONTACT_INFO.whatsapp.replace(/\D/g, '');
  const docWhatsappUrl = `https://wa.me/55${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta de Ortopedia com o Dr. Mistebrando em Jussara.")}`;

  // Structured Data Schema for SEO
  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': 'https://cmbclinica.com.br/drmisterbrando#physician',
    'name': 'Dr. Mistebrando Machado Gonçalves',
    'image': 'https://cmbclinica.com.br/profissionais/misterbrando.webp',
    'telephone': `+55${whatsappNumber}`,
    'url': 'https://cmbclinica.com.br/drmisterbrando',
    'medicalSpecialty': 'Orthopedic',
    'worksFor': {
      '@type': 'MedicalClinic',
      '@id': 'https://cmbclinica.com.br/#medicalclinic',
      'name': 'CMB - Centro Médico da Bahia',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Praça João Batista, 40 - Centro',
        'addressLocality': 'Jussara',
        'addressRegion': 'BA',
        'postalCode': '44925-000',
        'addressCountry': 'BR'
      }
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Praça João Batista, 40 - Centro',
      'addressLocality': 'Jussara',
      'addressRegion': 'BA',
      'postalCode': '44925-000',
      'addressCountry': 'BR'
    }
  };

  const motivos = [
    { title: 'Dor na coluna', icon: Bone, desc: 'Problemas de postura, contraturas, desgaste articular ou hérnias.' },
    { title: 'Dor no joelho', icon: Activity, desc: 'Lesões de menisco, ligamento ou desgaste por artrose.' },
    { title: 'Dor no ombro', icon: ShieldAlert, desc: 'Lesões do manguito rotador, tendinites ou bursites.' },
    { title: 'Artrose', icon: Sparkles, desc: 'Desgaste crônico das cartilagens nas articulações.' },
    { title: 'Hérnia de disco', icon: Shield, desc: 'Compressão nervosa que causa fortes dores e formigamento.' },
    { title: 'Lesões esportivas', icon: Zap, desc: 'Contusões, distensões musculares e estiramentos.' },
    { title: 'Fraturas', icon: AlertTriangle, desc: 'Tratamento de fraturas ósseas com gesso ou cirurgia.' },
    { title: 'Entorses', icon: RotateCcw, desc: 'Torções do tornozelo, joelho ou punho com edema.' },
    { title: 'Tendinites', icon: Flame, desc: 'Processos inflamatórios nos tendões por esforço repetitivo.' },
    { title: 'Dor no quadril', icon: Activity, desc: 'Desgaste articular, bursite trocantérica ou impacto femoral.' }
  ];

  const timelineSteps = [
    { title: 'Agendamento', desc: 'Marque sua consulta de forma simples e rápida através do WhatsApp.' },
    { title: 'Avaliação Clínica', desc: 'Consulta presencial detalhada, exame físico completo e escuta atenta.' },
    { title: 'Diagnóstico', desc: 'Análise de exames complementares (se necessário) para identificar a causa exata da dor.' },
    { title: 'Tratamento Personalizado', desc: 'Definição da melhor conduta clínica, fisioterapêutica ou cirúrgica para seu caso.' }
  ];

  const diferenciais = [
    { title: 'Atendimento humanizado', icon: Stethoscope, desc: 'Ouvimos cada paciente com empatia para oferecer o melhor acolhimento.' },
    { title: 'Equipe especializada', icon: ShieldCheck, desc: 'Profissionais experientes e titulados nas suas respectivas áreas.' },
    { title: 'Estrutura moderna', icon: Sparkles, desc: 'Consultórios climatizados, modernos e equipados com tecnologia atual.' },
    { title: 'Localização de fácil acesso', icon: MapPin, desc: 'Situado bem no centro da cidade, facilitando o seu deslocamento.' },
    { title: 'Agendamento rápido', icon: Clock, desc: 'Processo ágil pelo WhatsApp para você consultar sem esperas.' },
    { title: 'Diversas especialidades médicas', icon: Activity, desc: 'Uma clínica completa com diversas especialidades e exames.' }
  ];

  const avaliacoes = [
    { name: 'Maria Souza', comment: 'Dr. Mistebrando é excelente! Muito atencioso, explicou detalhadamente o meu problema no joelho e o tratamento foi super eficaz.', stars: 5 },
    { name: 'João Batista Silva', comment: 'O atendimento na clínica é de alto padrão. Dr. Mistebrando resolveu minha dor na coluna que já durava meses. Recomendo muito!', stars: 5 },
    { name: 'Ana Oliveira', comment: 'Médico muito humano e competente. O tratamento para a tendinite deu ótimos resultados rapidamente.', stars: 5 }
  ];

  return (
    <div className="flex flex-col w-full bg-white relative">
      <StructuredData schema={physicianSchema} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50/20 border-b border-slate-100">
        <div className="absolute inset-0 opacity-[0.03] bg-pattern-dots pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Left Content Column */}
            <motion.div 
              className="lg:col-span-7 flex flex-col items-start text-left"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div 
                variants={fadeUp}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/50 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0a376c] mb-6 shadow-sm"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-primary-500" />
                Especialista em Ortopedia
              </motion.div>

              {/* Headline */}
              <motion.h1 
                variants={fadeUp}
                className="text-3.5xl sm:text-5xl lg:text-5.5xl font-black tracking-tight text-slate-900 leading-tight mb-4"
              >
                Dor na coluna, joelho, <br className="hidden sm:inline" />
                ombro ou articulações?
              </motion.h1>

              {/* Subheadline */}
              <motion.p 
                variants={fadeUp}
                className="text-base sm:text-lg text-slate-600 font-normal mb-8 max-w-xl leading-relaxed"
              >
                Agende sua consulta com o <strong>Dr. Mistebrando Machado Gonçalves</strong>, ortopedista em Jussara, e receba um atendimento especializado para diagnóstico e tratamento de dores, lesões e doenças ortopédicas.
              </motion.p>

              {/* Buttons */}
              <motion.div 
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-2 w-full sm:w-auto"
              >
                <a href={docWhatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full h-14 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]">
                    <CalendarCheck className="w-5 h-5" />
                    Agendar pelo WhatsApp
                  </button>
                </a>
                <a href="#biografia" className="w-full sm:w-auto">
                  <button className="w-full h-14 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold px-8 py-3 rounded-full shadow-sm flex items-center justify-center gap-2 transition-all">
                    Conheça o médico
                  </button>
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Right Column (Doctor Image) */}
            <motion.div 
              className="lg:col-span-5 flex justify-center relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Decorative health element grid */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-50 text-blue-300 rounded-full blur-xl opacity-70 pointer-events-none"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 text-blue-200 rounded-full blur-2xl opacity-40 pointer-events-none"></div>

              <div className="w-full max-w-[380px] lg:max-w-none aspect-[4/5] rounded-[32px] overflow-hidden border-8 border-white shadow-2xl relative bg-slate-50">
                <img
                  src="/profissionais/misterbrando.webp"
                  alt="Foto do Dr. Mistebrando Machado Gonçalves - Ortopedista"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                  fetchPriority="high"
                  loading="eager"
                />
                
                {/* Floating identity card on Desktop */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border border-slate-100 p-4 rounded-2xl shadow-xl">
                  <p className="text-sm font-black text-slate-800 leading-tight">Dr. Mistebrando M. Gonçalves</p>
                  <p className="text-[11px] text-[#0055A4] font-bold mt-0.5">Médico Ortopedista — CRM-BA 11857</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2 (MOTIVOS / SYMPTOMS) */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Quando procurar um Ortopedista?
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              A dor é o sinal de alerta do seu corpo. Encontre tratamento especializado para aliviar o desconforto e recuperar sua mobilidade total.
            </p>
          </motion.div>

          {/* Grid stack */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            {motivos.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={fadeUp}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D32F2F] flex items-center justify-center mb-4 flex-shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mb-2 leading-snug">{item.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* WhatsApp button inside section */}
          <div className="text-center">
            <a href={docWhatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-10 py-4 rounded-full shadow-md flex items-center justify-center gap-2 transition-all hover:scale-105">
                <CalendarCheck className="w-5 h-5" />
                Agendar Minha Consulta
              </button>
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 3 (BIOGRAPHY) */}
      <section id="biografia" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left columns (Info) */}
            <motion.div 
              className="lg:col-span-7 flex flex-col items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0a376c] mb-6">
                Corpo Clínico CMB
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6">
                Conheça o Dr. Mistebrando
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base space-y-6 leading-relaxed">
                <p>
                  O <strong>Dr. Mistebrando Machado Gonçalves</strong> é médico ortopedista, inscrito no <strong>CRM-BA 11857</strong>, altamente qualificado e dedicado ao diagnóstico, prevenção e tratamento de doenças e lesões que acometem ossos, músculos, articulações, tendões e ligamentos.
                </p>
                <p>
                  Seu atendimento no Centro Médico da Bahia é pautado na escuta atenta, no diagnóstico clínico preciso e no planejamento de tratamento individualizado. Ele atua buscando restaurar a mobilidade, aliviar a dor e devolver qualidade de vida e bem-estar aos pacientes da região de Jussara - BA.
                </p>
              </div>
            </motion.div>

            {/* Right columns (Doctor Photo) */}
            <motion.div 
              className="lg:col-span-5 flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              <div className="w-full max-w-[340px] aspect-square rounded-[32px] overflow-hidden border-8 border-slate-50 shadow-xl relative bg-slate-50">
                <img
                  src="/profissionais/misterbrando.webp"
                  alt="Dr. Mistebrando Machado Gonçalves no consultório"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                  loading="lazy"
                />
              </div>
            </motion.div>

          </div>

          {/* Section CTA */}
          <div className="text-center mt-16">
            <a href={docWhatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-10 py-4 rounded-full shadow-md flex items-center justify-center gap-2 transition-all hover:scale-105">
                <CalendarCheck className="w-5 h-5" />
                Agendar Consulta com Ortopedista
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4 (TIMELINE) */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Como funciona sua consulta
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Seguimos um fluxo estruturado para garantir que você receba um diagnóstico detalhado e o melhor planejamento terapêutico.
            </p>
          </motion.div>

          {/* Timeline Wrapper */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical connector line on Mobile, Horizontal on Desktop */}
            <div className="absolute left-[20px] top-6 bottom-6 w-[2px] bg-blue-100 md:hidden"></div>
            <div className="absolute left-6 right-6 top-[28px] h-[2px] bg-blue-100 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {timelineSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4 md:flex-col md:items-center md:text-center relative z-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-65px' }}
                  variants={fadeUp}
                >
                  {/* Step Number Circle */}
                  <div className="w-10 h-10 rounded-full bg-[#0055A4] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg shadow-blue-500/10">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-800 mb-1 leading-snug">{step.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section CTA */}
          <div className="text-center mt-16">
            <a href={docWhatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-10 py-4 rounded-full shadow-md flex items-center justify-center gap-2 transition-all hover:scale-105">
                <CalendarCheck className="w-5 h-5" />
                Agendar pelo WhatsApp
              </button>
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 5 (CMB BENEFITS / WHY US) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Por que escolher o Centro Médico da Bahia?
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Somos referência em cuidados de saúde em Jussara, unindo corpo médico qualificado a uma infraestrutura moderna.
            </p>
          </motion.div>

          {/* Advantages Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {diferenciais.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={fadeUp}
                  className="bg-slate-50 border border-slate-100/50 p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-50 text-[#0055A4] rounded-2xl flex items-center justify-center mb-4 flex-shrink-0 shadow-inner">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Section CTA */}
          <div className="text-center">
            <a href={docWhatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-10 py-4 rounded-full shadow-md flex items-center justify-center gap-2 transition-all hover:scale-105">
                <CalendarCheck className="w-5 h-5" />
                Agendar Consulta Online
              </button>
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 6 (TESTIMONIALS) */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              O que dizem os pacientes
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              A opinião e satisfação dos nossos pacientes são o reflexo do nosso compromisso diário com a saúde.
            </p>
          </motion.div>

          {/* Testimonial Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {avaliacoes.map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center"
              >
                {/* 5 Stars */}
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-6 flex-grow">
                  "{item.comment}"
                </p>
                <h3 className="text-xs sm:text-sm font-bold text-[#0a376c] uppercase tracking-wide">{item.name}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Section CTA */}
          <div className="text-center">
            <a href={docWhatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-10 py-4 rounded-full shadow-md flex items-center justify-center gap-2 transition-all hover:scale-105">
                <CalendarCheck className="w-5 h-5" />
                Agendar via WhatsApp
              </button>
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 7 (FINAL CTA) */}
      <section className="relative py-24 overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
            Não Conviva com a Dor
          </span>
          <h2 className="text-3xl sm:text-4.5xl font-black text-white mb-6 leading-tight max-w-2xl mx-auto">
            Não deixe que a dor limite sua qualidade de vida.
          </h2>
          <p className="text-blue-100 mb-10 text-base sm:text-lg font-light max-w-xl mx-auto">
            Agende sua consulta com o Dr. Mistebrando e conte com um atendimento especializado para cuidar da sua saúde.
          </p>
          <div className="flex justify-center">
            <a href={docWhatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full h-14 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-10 py-3 rounded-full shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105">
                <CalendarCheck className="w-5 h-5" />
                Agendar pelo WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            
            {/* Col 1: Brand details */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-6">
                <Logo theme="dark" className="h-10" />
              </div>
              <p className="text-sm leading-relaxed text-slate-400 max-w-md mb-6">
                O Centro Médico da Bahia em Jussara - BA é sinônimo de agilidade, segurança e humanização no cuidado médico especializado.
              </p>
              <div className="text-xs text-slate-400">
                <p>CNPJ: 09.157.211/0002-98</p>
                <p className="mt-1">Dr. Mistebrando Machado Gonçalves (CRM-BA 11857)</p>
              </div>
            </div>

            {/* Col 2: Contact info */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contato & Localização</h3>
              <ul className="space-y-4 text-sm flex flex-col items-center lg:items-start">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" />
                  <span>{CONTACT_INFO.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary-300 flex-shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary-300 flex-shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Iframe Map */}
            <div className="lg:col-span-3 w-full h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.6067711200216!2d-41.9715104!3d-11.0470697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x742617f7c11f7c1d%3A0xe2128c7ef39cf87f!2sPrac%CC%A7a%20Joa%CC%83o%20Batista%2C%20Jussara%20-%20BA%2C%2044925-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização Centro Médico da Bahia"
                className="w-full h-full rounded-2xl shadow-sm border border-slate-800"
              ></iframe>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-400">
            <p>&copy; {new Date().getFullYear()} CMB - Centro Médico da Bahia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};
export default DrMisterbrando;
