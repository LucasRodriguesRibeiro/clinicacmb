import {
  Stethoscope,
  Heart,
  Bone,
  Baby,
  Flower,
  Smile,
  Activity,
  TestTube,
  Waves,
  Sparkles,
  AlignCenter,
  Shield,
  Eye,
  Zap,
  Scissors
} from 'lucide-react';

import { ServiceItem, FaqItem, ContactInfo, Doctor } from './types';

export const CONTACT_INFO: ContactInfo = {
  phone: "(74) 99816-2793",
  whatsapp: "(74) 99816-2793",
  address: "Rua Lafayete Coutinho, 120 - Centro, Irecê - BA",
  hours: "Segunda a Sexta: 07h às 18h | Sábado: 07h às 12h",
  email: "contato@cmb.com.br"
};

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-misterbrando',
    name: 'Dr. Misterbrando',
    specialty: 'Ortopedia',
    crm: 'CRM-BA —',
    days: 'A consultar',
    initials: 'MB',
    color: '#0891b2',
    photo: '/profissionais/misterbrando.webp',
    photoPosition: 'center 30%',
  },
  {
    id: 'dr-paulo-cesar',
    name: 'Dr. Paulo Cesar',
    specialty: 'Pediatra e Alergologista',
    crm: 'CRM-BA —',
    days: 'A consultar',
    initials: 'PC',
    color: '#059669',
    photo: '/profissionais/dr-paulo.webp',
    photoPosition: 'center 25%',
  },
  {
    id: 'dr-jose-edjevandio',
    name: 'Dr. José Edjevandio',
    specialty: 'Ginecologia e Ultrassonografia',
    crm: 'CRM-BA —',
    days: 'A consultar',
    initials: 'JE',
    color: '#7c3aed',
    photo: '/profissionais/jose-edvando.webp',
    photoPosition: 'center 25%',
  },
  {
    id: 'dra-josy-silva',
    name: 'Dra. Josy Silva',
    specialty: 'Ortodontia Especializada',
    crm: 'CRM-BA —',
    days: 'A consultar',
    initials: 'JS',
    color: '#db2777',
    photo: '/profissionais/dra-josy.webp',
    photoPosition: 'center 30%',
  },
  {
    id: 'dr-jair-mendes',
    name: 'Dr. Jair Mendes',
    specialty: 'Cirurgião-Dentista e Ortodontista',
    crm: 'CRM-BA —',
    days: 'A consultar',
    initials: 'JM',
    color: '#0a376c',
    photo: '/profissionais/jair-mendes.webp',
    photoPosition: 'center 25%',
  },
  {
    id: 'dr-denivan-machado',
    name: 'Dr. Denivan Machado',
    specialty: 'Cardiologista e Clínico Geral',
    crm: 'CRM-BA —',
    days: 'A consultar',
    initials: 'DM',
    color: '#D32F2F',
    photo: '/profissionais/denivan-machado.webp',
    photoPosition: 'center 30%',
  },
];




export const SPECIALTIES: ServiceItem[] = [
  {
    id: 'ortopedia',
    title: 'Ortopedista',
    description: 'Cuidados com ossos, muscles e articulações para sua mobilidade.',
    icon: Bone
  },
  {
    id: 'ginecologia',
    title: 'Ginecologia & Ultrassonografia',
    description: 'Saúde da mulher, prevenção e acompanhamento em todas as fases.',
    icon: Flower
  },
  {
    id: 'clinico',
    title: 'Clínico Geral',
    description: 'Atendimento primário, check-ups e avaliação de saúde completa.',
    icon: Stethoscope
  },
  {
    id: 'cardiologia',
    title: 'Cardiologista',
    description: 'Cuidado especializado para a saúde do seu coração.',
    icon: Heart
  },
  {
    id: 'pediatria',
    title: 'Pediatra',
    description: 'Acompanhamento do crescimento e desenvolvimento infantil.',
    icon: Baby
  },
  {
    id: 'alergologia',
    title: 'Alergologista',
    description: 'Diagnóstico e tratamento de alergias e imunidade.',
    icon: Activity
  },
  {
    id: 'ortodontia',
    title: 'Ortodontia Especializada',
    description: 'Correção da posição dos dentes e dos ossos maxilares.',
    icon: Smile
  }
];

export const EXAMS: ServiceItem[] = [
  {
    id: 'ecg',
    title: 'Eletrocardiograma (ECG)',
    description: 'Avaliação rápida do ritmo e saúde do coração.',
    icon: Activity
  },
  {
    id: 'laboratorio',
    title: 'Exames Laboratoriais',
    description: 'Hemograma, glicemia, colesterol e check-ups.',
    icon: TestTube
  },
  {
    id: 'ultrassom',
    title: 'Ultrassonografias',
    description: 'Geral, morfológica e com Doppler colorido.',
    icon: Waves
  },
  {
    id: 'preventivo',
    title: 'Preventivo (Papanicolau)',
    description: 'Prevenção e rastreamento ginecológico essencial.',
    icon: Shield
  },
  {
    id: 'biopsia',
    title: 'Biópsia de Colo Uterino',
    description: 'Coleta de fragmento para análise de laboratório.',
    icon: Scissors
  },
  {
    id: 'diu',
    title: 'Inserção de DIU',
    description: 'Procedimento seguro de contracepção de longo prazo.',
    icon: Flower
  },
  {
    id: 'colposcopia',
    title: 'Colposcopia',
    description: 'Avaliação detalhada do colo do útero com ampliação.',
    icon: Eye
  },
  {
    id: 'eletrocauterizacao',
    title: 'Eletrocauterização Uterina',
    description: 'Tratamento preciso de lesões benignas do colo.',
    icon: Zap
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Como faço para agendar uma consulta?",
    answer: "Você pode agendar diretamente pelo nosso WhatsApp clicando no botão 'Agendar via WhatsApp' ou preenchendo o formulário aqui no site."
  },
  {
    question: "Quais convênios a CMB atende?",
    answer: "Atendemos diversos convênios e também particular com valores acessíveis. Entre em contato pelo WhatsApp para verificar a cobertura do seu plano."
  },
  {
    question: "Preciso de pedido médico para fazer exames?",
    answer: "Para a maioria dos exames de imagem e laboratoriais via convênio, sim. Para particular, alguns exames podem ser feitos sem guia. Consulte nossa equipe."
  },
  {
    question: "Onde a clínica está localizada?",
    answer: `Estamos na ${CONTACT_INFO.address}. Temos fácil acesso e estacionamento próximo.`
  },
  {
    question: "Qual o horário de funcionamento?",
    answer: CONTACT_INFO.hours
  },
  {
    question: "Quanto tempo demora o resultado dos exames?",
    answer: "Exames laboratoriais simples saem em até 24h. Ultrassom e ECG geralmente entregamos o laudo logo após o exame."
  },
  {
    question: "Crianças precisam estar acompanhadas?",
    answer: "Sim, pacientes menores de 18 anos devem estar acompanhados por um responsável legal durante consultas e exames."
  },
  {
    question: "Vocês fazem atendimento de urgência?",
    answer: "Nosso foco é atendimento ambulatorial com hora marcada. Para emergências graves, recomendamos procurar um hospital com pronto-socorro."
  },
  {
    question: "Como devo me preparar para o ultrassom?",
    answer: "O preparo varia conforme o tipo (ex: jejum, bexiga cheia). Ao agendar, nossa equipe enviará todas as instruções detalhadas via WhatsApp."
  },
  {
    question: "Aceitam cartão de crédito?",
    answer: "Sim, aceitamos cartões de crédito, débito e PIX para pagamentos particulares."
  }
];