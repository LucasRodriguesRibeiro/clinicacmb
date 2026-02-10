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
  CalendarCheck
} from 'lucide-react';
import { ServiceItem, FaqItem, ContactInfo, NavLink } from './types';

export const CONTACT_INFO: ContactInfo = {
  phone: "(74) 99816-2793",
  whatsapp: "(74) 99816-2793",
  address: "Praça João Batista, 40 - Centro, Jussara - BA",
  hours: "Segunda a Sexta: 07h às 18h | Sábado: 07h às 12h",
  email: "contato@cmb.com.br"
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'A Clínica', path: '/a-clinica' },
  { label: 'Especialidades', path: '/especialidades' },
  { label: 'Exames', path: '/exames' },
  { label: 'Agendamento', path: '/agendamento' },
  { label: 'Contato', path: '/contato' },
];

export const SPECIALTIES: ServiceItem[] = [
  {
    id: 'ortopedia',
    title: 'Ortopedista',
    description: 'Cuidados com ossos, músculos e articulações para sua mobilidade.',
    icon: Bone
  },
  {
    id: 'ginecologia',
    title: 'Ginecologista',
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
    title: 'Ortodontia',
    description: 'Correção da posição dos dentes e dos ossos maxilares.',
    icon: Smile
  }
];

export const EXAMS: ServiceItem[] = [
  {
    id: 'ecg',
    title: 'Eletrocardiograma (ECG)',
    description: 'Exame rápido para avaliar o ritmo e a saúde do coração.',
    icon: Activity
  },
  {
    id: 'laboratorio',
    title: 'Exames Laboratoriais',
    description: 'Hemograma, colesterol, glicemia e check-ups completos.',
    icon: TestTube
  },
  {
    id: 'ultrassom',
    title: 'Ultrassonografias',
    description: 'Geral, morfológica e com Doppler. Imagens de alta precisão.',
    icon: Waves,
    details: [
      'Ultrassonografia Geral',
      'Ultrassonografia Morfológica',
      'Ultrassonografia com Doppler'
    ]
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