import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarCheck,
  MessageCircle,
  ShieldCheck,
  Search,
  ChevronRight,
  TestTube,
  Waves,
  Activity,
  Shield,
  Eye,
  Scissors,
  Flower,
  Zap,
  Clock,
  BadgeCheck,
  MapPin,
  Phone,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import { CONTACT_INFO } from '../constants';




const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay }
  })
};

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
const examTypes = [
  { value: '', label: 'Todos os tipos' },
  { value: 'laboratorial', label: 'Exames Laboratoriais' },
  { value: 'imagem', label: 'Exames de Imagem' },
  { value: 'cardiologico', label: 'Exames Cardiológicos' },
  { value: 'ginecologico', label: 'Exames Ginecológicos' },
  { value: 'preventivo', label: 'Exames Preventivos' },
];

const specialtyOptions = [
  { value: '', label: 'Todas as especialidades' },
  { value: 'ginecologia', label: 'Ginecologia & Ultrassonografia' },
  { value: 'cardiologia', label: 'Cardiologia' },
  { value: 'clinico-geral', label: 'Clínica Geral' },
  { value: 'pediatria', label: 'Pediatria' },
  { value: 'ortopedia', label: 'Ortopedia' },
];

const doctorOptions = [
  { value: '', label: 'Qualquer médico (opcional)' },
  { value: 'jose-edjevandio', label: 'Dr. José Edjevandio — Ginecologia' },
  { value: 'denivan-machado', label: 'Dr. Denivan Machado — Cardiologia' },
  { value: 'paulo-cesar', label: 'Dr. Paulo Cesar — Pediatria' },
  { value: 'misterbrando', label: 'Dr. Misterbrando — Ortopedia' },
];

const highlights = [
  { icon: BadgeCheck, label: 'Resultados em até 24h' },
  { icon: ShieldCheck, label: 'Equipamentos modernos' },
  { icon: Clock, label: 'Atendimento ágil' },
  { icon: MapPin, label: 'Centro de Jussara - BA' },
];

const examCards = [
  {
    icon: TestTube,
    title: 'Exames Laboratoriais',
    desc: 'Hemograma, glicemia, colesterol, coagulograma e muito mais com resultados em até 24h.',
    keywords: 'laboratório em Jussara',
    color: '#0055A4',
  },
  {
    icon: Waves,
    title: 'Ultrassonografias',
    desc: 'Ultrassom geral, morfológico e com Doppler colorido. Equipamento de última geração.',
    keywords: 'ultrassom em Jussara',
    color: '#0891b2',
  },
  {
    icon: Activity,
    title: 'Eletrocardiograma (ECG)',
    desc: 'Avaliação cardíaca rápida e precisa com laudo imediato pelo cardiologista.',
    keywords: 'ECG em Jussara',
    color: '#D32F2F',
  },
  {
    icon: Shield,
    title: 'Preventivo (Papanicolau)',
    desc: 'Rastreamento ginecológico essencial para a saúde da mulher. Agende com comodidade.',
    keywords: 'preventivo em Jussara',
    color: '#7c3aed',
  },
  {
    icon: Eye,
    title: 'Colposcopia',
    desc: 'Avaliação detalhada do colo do útero com ampliação óptica especializada.',
    keywords: 'exames ginecológicos Jussara',
    color: '#0055A4',
  },
  {
    icon: Scissors,
    title: 'Biópsia de Colo Uterino',
    desc: 'Coleta de fragmento tecidual para análise histopatológica com precisão e segurança.',
    keywords: 'biópsia Jussara',
    color: '#0891b2',
  },
  {
    icon: Zap,
    title: 'Eletrocauterização Uterina',
    desc: 'Tratamento preciso de lesões benignas do colo uterino com tecnologia moderna.',
    keywords: 'procedimentos ginecológicos Jussara',
    color: '#D32F2F',
  },
  {
    icon: Flower,
    title: 'Inserção de DIU',
    desc: 'Procedimento seguro e eficaz de contracepção de longo prazo, com acompanhamento especializado.',
    keywords: 'DIU Jussara',
    color: '#7c3aed',
  },
];

const faqItems = [
  {
    question: 'Preciso de pedido médico para fazer exames?',
    answer: 'Para a maioria dos exames de imagem e laboratoriais via convênio, sim. Para particular, alguns exames podem ser realizados sem guia médica. Entre em contato e nossa equipe orientará você.'
  },
  {
    question: 'Quanto tempo demora o resultado dos exames?',
    answer: 'Exames laboratoriais simples ficam prontos em até 24h. Ultrassom e ECG geralmente entregamos o laudo logo após a realização do exame, no mesmo dia.'
  },
  {
    question: 'Como devo me preparar para o ultrassom?',
    answer: 'O preparo varia conforme o tipo (ex: jejum, bexiga cheia). Ao agendar, nossa equipe enviará todas as instruções detalhadas via WhatsApp para facilitar sua preparação.'
  },
  {
    question: 'Quais convênios a CMB aceita para exames?',
    answer: 'Atendemos diversos convênios e também particular com valores acessíveis. Entre em contato pelo WhatsApp para verificar a cobertura do seu plano.'
  },
  {
    question: 'Posso agendar exame para outra pessoa?',
    answer: 'Sim! Você pode agendar exames para familiares ou dependentes pelo nosso WhatsApp. Basta informar o nome do paciente e o tipo de exame desejado.'
  },
];

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-start py-5 text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0055A4] focus-visible:ring-offset-2 rounded-lg"
        aria-expanded={open}
      >
        <span className="text-slate-800 font-semibold text-base leading-snug">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#0055A4] flex-shrink-0 mt-0.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="text-slate-500 text-sm leading-relaxed pb-5 pr-8">{answer}</p>
      </motion.div>
    </div>
  );
};

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export const Exames: React.FC = () => {
  const whatsappExame = `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de agendar um exame no Centro Médico da Bahia.')}`;
  const whatsappGeneral = `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de mais informações sobre os exames disponíveis.')}`;

  const [searchSpec, setSearchSpec] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchDoc, setSearchDoc] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappExame, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col overflow-x-hidden w-full bg-white">

      {/* ═══════════════════════════════════════════
          BREADCRUMB — ACESSIBILIDADE + SEO
      ═══════════════════════════════════════════ */}
      <nav aria-label="Navegação estrutural" className="bg-slate-50 border-b border-slate-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2.5">
          <ol className="flex items-center gap-2 text-xs text-slate-400" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item" className="hover:text-[#0055A4] transition-colors font-medium">
                <span itemProp="name">Início</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-[#0055A4] font-semibold" itemProp="name">Exames em Jussara</span>
              <meta itemProp="position" content="2" />
              <meta itemProp="item" content="https://cmbclinica.com.br/exames-em-jussara" />
            </li>
          </ol>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          HERO — PRIMEIRA DOBRA (≈ 100vh)
      ═══════════════════════════════════════════ */}
      <section
        id="hero-exames"
        aria-label="Centro Médico da Bahia — Exames em Jussara"
        className="relative min-h-[calc(100vh-80px)] flex flex-col overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-slate-50"
      >
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='1.5' fill='%230055A4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
          aria-hidden="true"
        />
        {/* Blue ambient glow */}
        <div className="absolute top-[-80px] left-[-40px] w-[500px] h-[500px] rounded-full bg-blue-100/60 blur-3xl opacity-40 pointer-events-none" aria-hidden="true" />

        {/* ── MOBILE: imagem acima do conteúdo ── */}
        <div className="lg:hidden w-full h-[240px] sm:h-[320px] relative overflow-hidden flex-shrink-0">
          <img
            src="/imagens/fachada.webp"
            alt="Fachada do Centro Médico da Bahia em Jussara — laboratório e exames de imagem"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
            width="800"
            height="320"
          />
          {/* Gradient overlay mobile */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,85,164,0.18) 0%, rgba(255,255,255,0.92) 100%)' }}
            aria-hidden="true"
          />
        </div>

        {/* ── GRID DESKTOP: 2 colunas ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center relative z-10">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 xl:gap-12 items-center py-8 lg:py-0">

            {/* ─── COLUNA ESQUERDA ─── */}
            <motion.div
              className="lg:col-span-7 flex flex-col items-start text-left lg:pr-8 xl:pr-12 pb-10 lg:pb-0"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Badge */}
              <motion.div
                variants={staggerItem}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-xs font-bold uppercase tracking-widest text-[#0055A4] mb-7 shadow-sm"
              >
                <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                <span>Exames Laboratoriais e de Imagem em Jussara</span>
              </motion.div>

              {/* H1 — única tag H1 da página */}
              <motion.h1
                variants={staggerItem}
                className="text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-5xl font-bold text-slate-900 leading-[1.18] tracking-tight mb-6"
              >
                Exames em{' '}
                <span className="text-[#0055A4]">Jussara</span>{' '}
                com rapidez,{' '}
                <br className="hidden sm:block" />
                tecnologia e{' '}
                <span className="relative inline-block">
                  máxima precisão.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-0.5 left-0 right-0 h-[3px] bg-[#D32F2F] origin-left rounded-full"
                    aria-hidden="true"
                  />
                </span>
              </motion.h1>

              {/* Subtítulo */}
              <motion.p
                variants={staggerItem}
                className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-[540px]"
              >
                Realize <strong className="text-slate-700 font-semibold">exames laboratoriais</strong> e <strong className="text-slate-700 font-semibold">exames de imagem</strong> com equipamentos modernos, atendimento humanizado e resultados rápidos no Centro Médico da Bahia, em <strong className="text-slate-700 font-semibold">Jussara - BA</strong>.
              </motion.p>

              {/* Highlight Pills */}
              <motion.div
                variants={staggerItem}
                className="flex flex-wrap gap-2.5 mb-9"
              >
                {highlights.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium shadow-sm"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#0055A4] flex-shrink-0" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={staggerItem}
                className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
              >
                <a
                  href={whatsappExame}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-agendar-exame-hero"
                  className="btn-primary-cmb text-base w-full sm:w-auto"
                  aria-label="Agendar exame pelo WhatsApp no Centro Médico da Bahia em Jussara"
                >
                  <CalendarCheck className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  Agendar Exame
                </a>

                <a
                  href={whatsappGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-whatsapp-hero"
                  className="btn-whatsapp-cmb text-base w-full sm:w-auto"
                  aria-label="Falar no WhatsApp com o Centro Médico da Bahia"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  Falar no WhatsApp
                </a>
              </motion.div>

              {/* Micro trust signal */}
              <motion.p
                variants={staggerItem}
                className="mt-5 text-xs text-slate-400 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" aria-hidden="true" />
                Atendemos convênios e particular · Sem fila de espera
              </motion.p>
            </motion.div>

            {/* ─── COLUNA DIREITA — Imagem ─── */}
            <motion.div
              className="lg:col-span-5 hidden lg:flex items-center justify-end relative h-full min-h-[520px]"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0.35}
            >
              <div className="relative w-full h-full max-h-[580px] overflow-hidden rounded-[24px] shadow-[0_24px_64px_-12px_rgba(0,85,164,0.22)]">
                <img
                  src="/imagens/fachada.webp"
                  alt="Fachada do Centro Médico da Bahia em Jussara — laboratório, exames laboratoriais e de imagem"
                  className="w-full h-full object-cover object-center"
                  fetchPriority="high"
                  loading="eager"
                  width="620"
                  height="580"
                />
                {/* Overlay gradiente azul integrado */}
                <div
                  className="absolute inset-0 rounded-[24px]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,85,164,0.35) 0%, rgba(0,85,164,0.12) 50%, rgba(0,34,65,0.08) 100%)'
                  }}
                  aria-hidden="true"
                />
                {/* Floating info badge sobre a imagem */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-5 left-5 right-5"
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg border border-white/50 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0055A4] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Localização</p>
                      <p className="text-slate-800 font-semibold text-sm leading-tight">Praça João Batista, 40</p>
                      <p className="text-slate-500 text-xs">Centro — Jussara, Bahia</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative shape */}
              <div
                className="absolute -top-6 -right-6 w-28 h-28 rounded-full border-2 border-[#0055A4]/10 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute top-12 -right-3 w-12 h-12 rounded-full bg-[#D32F2F]/8 pointer-events-none"
                aria-hidden="true"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CARD FLUTUANTE — BUSCA DE EXAME
      ═══════════════════════════════════════════ */}
      <section aria-label="Buscar exame no CMB" className="relative z-20 -mt-6 pb-6 px-4 sm:px-6 lg:px-8 bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="floating-card px-6 sm:px-8 py-7 sm:py-8">
            {/* Header do card */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#0055A4] flex items-center justify-center flex-shrink-0">
                <Search className="w-4.5 h-4.5 text-white" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-slate-800 font-bold text-base sm:text-lg leading-tight">
                  Encontre seu exame
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm">Filtre e agende rapidamente pelo WhatsApp</p>
              </div>
            </div>

            <form
              onSubmit={handleSearch}
              role="search"
              aria-label="Formulário de busca de exames"
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {/* Campo: Especialidade */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="select-especialidade" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Especialidade
                </label>
                <div className="relative">
                  <select
                    id="select-especialidade"
                    value={searchSpec}
                    onChange={e => setSearchSpec(e.target.value)}
                    className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-[#0055A4] transition-all cursor-pointer pr-9"
                    aria-label="Selecione a especialidade médica"
                  >
                    {specialtyOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" aria-hidden="true" />
                </div>
              </div>

              {/* Campo: Tipo de Exame */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="select-tipo-exame" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Tipo de Exame
                </label>
                <div className="relative">
                  <select
                    id="select-tipo-exame"
                    value={searchType}
                    onChange={e => setSearchType(e.target.value)}
                    className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-[#0055A4] transition-all cursor-pointer pr-9"
                    aria-label="Selecione o tipo de exame"
                  >
                    {examTypes.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" aria-hidden="true" />
                </div>
              </div>

              {/* Campo: Médico (opcional) */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="select-medico" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Médico <span className="text-slate-300 font-normal normal-case tracking-normal">(opcional)</span>
                </label>
                <div className="relative">
                  <select
                    id="select-medico"
                    value={searchDoc}
                    onChange={e => setSearchDoc(e.target.value)}
                    className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-[#0055A4] transition-all cursor-pointer pr-9"
                    aria-label="Selecione o médico (opcional)"
                  >
                    {doctorOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" aria-hidden="true" />
                </div>
              </div>

              {/* Botão de busca — ocupa linha inteira no mobile */}
              <div className="sm:col-span-3 flex justify-end pt-1">
                <button
                  type="submit"
                  id="btn-buscar-exame"
                  className="w-full sm:w-auto btn-primary-cmb text-base gap-2.5 py-3.5 px-10"
                  aria-label="Buscar exame e agendar pelo WhatsApp"
                >
                  <Search className="w-4.5 h-4.5" aria-hidden="true" />
                  Buscar e Agendar Exame
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          GRID DE EXAMES DISPONÍVEIS
      ═══════════════════════════════════════════ */}
      <section
        id="exames-disponiveis"
        aria-labelledby="heading-exames"
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-14 lg:mb-16"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0055A4] mb-4">
              <span className="w-5 h-px bg-[#0055A4] rounded-full" aria-hidden="true" />
              Diagnóstico completo em Jussara
            </span>
            <h2 id="heading-exames" className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
              Exames e procedimentos disponíveis no CMB
            </h2>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              Do laboratório em Jussara aos exames de imagem, oferecemos diagnósticos precisos com equipamentos modernos e laudos rápidos.
            </p>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {examCards.map((exam) => {
              const Icon = exam.icon;
              return (
                <motion.article
                  key={exam.title}
                  variants={staggerItem}
                  className="group relative bg-white border border-slate-100 rounded-[20px] p-6 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_-4px_rgba(0,85,164,0.14)] hover:-translate-y-1 transition-all duration-300 cursor-default"
                  aria-label={exam.title}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${exam.color}12` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: exam.color }} aria-hidden="true" />
                  </div>
                  <h3 className="text-slate-800 font-bold text-base mb-2 leading-snug">{exam.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{exam.desc}</p>
                  <p className="sr-only">{exam.keywords}</p>
                </motion.article>
              );
            })}
          </motion.div>

          {/* CTA abaixo da grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14"
          >
            <a
              href={whatsappExame}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-agendar-exame-grid"
              className="btn-primary-cmb w-full sm:w-auto"
              aria-label="Agendar exame no Centro Médico da Bahia em Jussara"
            >
              <CalendarCheck className="w-5 h-5" aria-hidden="true" />
              Agendar Exame Agora
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
              id="btn-ligar"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-[#0055A4] font-semibold text-sm transition-colors"
              aria-label={`Ligar para o CMB: ${CONTACT_INFO.phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {CONTACT_INFO.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST STRIP — DIFERENCIAIS
      ═══════════════════════════════════════════ */}
      <section
        aria-label="Por que escolher o Centro Médico da Bahia para seus exames"
        className="bg-[#0055A4] py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-center mb-12"
          >
            <h2 className="text-white font-bold text-2xl sm:text-3xl leading-tight mb-3">
              Por que realizar seus exames no CMB?
            </h2>
            <p className="text-blue-200 text-base max-w-xl mx-auto">
              O Centro Médico da Bahia é referência em diagnósticos e exames em Jussara e região.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: TestTube, title: 'Laboratório próprio', desc: 'Resultados em até 24h com qualidade garantida.' },
              { icon: Waves, title: 'Ultrassom moderno', desc: 'Equipamento de última geração para diagnósticos precisos.' },
              { icon: BadgeCheck, title: 'Médicos especialistas', desc: 'Corpo clínico experiente e atualizado em cada área.' },
              { icon: Clock, title: 'Agendamento rápido', desc: 'Marque pelo WhatsApp em menos de 2 minutos.' },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="text-center p-5 rounded-[18px] bg-white/10 border border-white/10 backdrop-blur-sm"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-white/15 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base mb-1.5">{title}</h3>
                <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ — SCHEMA FAQPage
      ═══════════════════════════════════════════ */}
      <section
        id="faq-exames"
        aria-labelledby="heading-faq"
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/60"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0055A4] mb-4">
              <span className="w-5 h-px bg-[#0055A4] rounded-full" aria-hidden="true" />
              Dúvidas frequentes
            </span>
            <h2 id="heading-faq" className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Perguntas sobre exames no CMB
            </h2>
            <p className="text-slate-500 text-base">
              Tire suas dúvidas sobre exames laboratoriais e de imagem em Jussara.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-[22px] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.07)] border border-slate-100 px-6 sm:px-8 py-2"
          >
            {faqItems.map((item) => (
              <div
                key={item.question}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <meta itemProp="name" content={item.question} />
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <meta itemProp="text" content={item.answer} />
                </div>
                <FaqItem question={item.question} answer={item.answer} />
              </div>
            ))}
          </motion.div>

          {/* CTA FAQ */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-10"
          >
            <p className="text-slate-500 text-sm mb-4">Tem mais alguma dúvida? Nossa equipe está pronta para ajudar.</p>
            <a
              href={whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-whatsapp-faq"
              className="btn-whatsapp-cmb inline-flex py-3.5"
              aria-label="Falar com atendimento do CMB pelo WhatsApp"
            >
              <MessageCircle className="w-4.5 h-4.5" aria-hidden="true" />
              Falar com atendimento
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════ */}
      <section
        aria-label="Agende seu exame no CMB"
        className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-blue-50 flex items-center justify-center">
            <CalendarCheck className="w-7 h-7 text-[#0055A4]" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight">
            Pronto para realizar seus exames em Jussara?
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mb-8 leading-relaxed">
            Agende agora mesmo pelo WhatsApp e nossa equipe entrará em contato para confirmar data, horário e preparo necessário.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappExame}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-agendar-exame-final"
              className="btn-primary-cmb text-base"
              aria-label="Agendar exame agora no CMB em Jussara"
            >
              <CalendarCheck className="w-5 h-5" aria-hidden="true" />
              Agendar Exame Agora
            </a>
            <a
              href={whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-whatsapp-final"
              className="btn-whatsapp-cmb text-base"
              aria-label="Tirar dúvidas sobre exames pelo WhatsApp"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Tirar Dúvidas
            </a>
          </div>
          {/* Micro trust */}
          <p className="mt-6 text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#0055A4] flex-shrink-0" aria-hidden="true" />
            {CONTACT_INFO.address} · {CONTACT_INFO.hours}
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default Exames;
