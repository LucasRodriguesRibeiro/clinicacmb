import {
  Heart,
  Baby,
  Flower,
  Bone,
  Smile,
  ShieldAlert,
  Stethoscope,
  Sparkles,
  LucideIcon
} from 'lucide-react';

export interface Benefit {
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Specialty {
  nome: string;
  slug: string;
  descricao: string;
  imagem: string;
  sintomas: string[];
  exames: string[];
  beneficios: Benefit[];
  faqs: Faq[];
  keywords: string;
  titleSeo: string;
  metaDescription: string;
  schemaMedicalSpecialty: string;
  icon: LucideIcon;
}

export const ESPECIALIDADES: Specialty[] = [
  {
    nome: "Cardiologia",
    slug: "cardiologia",
    descricao: "A Cardiologia do Centro Médico da Bahia é focada na prevenção, diagnóstico e tratamento de doenças que acometem o coração e o sistema circulatório. O acompanhamento cardiovascular periódico é fundamental para prevenir infartos, controlar a hipertensão e tratar arritmias. Se você precisa de um cardiologista em Irecê, oferecemos atendimento com médico especialista e exames rápidos para cuidar do seu coração.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Dor ou aperto no peito durante esforços físicos",
      "Palpitações, taquicardia ou batimentos irregulares",
      "Falta de ar ou fadiga extrema em atividades comuns",
      "Tonturas frequentes, desfalecimento ou desmaios",
      "Inchaço incomum nas pernas e nos pés",
      "Pressão arterial elevada"
    ],
    exames: [
      "Eletrocardiograma (ECG)",
      "Ultrassonografia com Doppler Colorido de Vasos",
      "Perfil Lipídico e Enzimas Cardíacas (Laboratório)",
      "Avaliação de Pressão Arterial de Rotina"
    ],
    beneficios: [
      {
        title: "Prevenção Cardiovascular",
        description: "Diagnóstico precoce de entupimentos arteriais e risco de infarto."
      },
      {
        title: "Controle de Pressão",
        description: "Tratamento eficaz contra a hipertensão arterial crônica."
      },
      {
        title: "Segurança nos Exercícios",
        description: "Avaliação completa para liberação segura de atividades físicas."
      }
    ],
    faqs: [
      {
        question: "Quando devo procurar um cardiologista em Irecê?",
        answer: "A partir de 40 anos para homens e 45 anos para mulheres é indicada a consulta de rotina anual. Caso haja histórico familiar de doenças cardíacas ou sintomas como dor no peito, a avaliação deve ser feita imediatamente."
      },
      {
        question: "Como funciona a consulta de rotina no coração?",
        answer: "O médico realiza uma anamnese detalhada, afere a pressão, escuta os batimentos cardíacos e solicita exames complementares como eletrocardiograma e exames de sangue."
      },
      {
        question: "O cansaço fácil pode ser um sintoma cardíaco?",
        answer: "Sim, a fadiga extrema ao fazer pequenos esforços pode ser um sinal de que o coração não está conseguindo bombear o sangue com a força necessária."
      }
    ],
    keywords: "cardiologista irece, consulta cardiologista irece, clinica cardiologia irece, exames do coracao irece, medico cardiologista irece",
    titleSeo: "Cardiologista em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Agende sua consulta com cardiologista em Irecê no Centro Médico da Bahia. Atendimento especializado, exames do coração e controle de hipertensão.",
    schemaMedicalSpecialty: "Cardiovascular",
    icon: Heart
  },
  {
    nome: "Pediatria",
    slug: "pediatria",
    descricao: "A Pediatria da CMB Clínica acompanha a saúde integral de bebês, crianças e adolescentes. O pediatra cuida do crescimento saudável, nutrição, prevenção de infecções e calendário vacinal. Oferecemos consulta com pediatra em Irecê em um ambiente seguro, acolhedor e humanizado para o desenvolvimento do seu filho.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Febre alta ou persistente",
      "Atraso no desenvolvimento motor ou na fala",
      "Falta de apetite, perda de peso ou vômitos",
      "Problemas respiratórios, tosse frequente ou chiado",
      "Alergias, coceiras ou brotuejas na pele",
      "Alterações de comportamento ou sono"
    ],
    exames: [
      "Avaliação de Crescimento e Peso (Puericultura)",
      "Hemograma Completo e Exames de Fezes/Urina",
      "Testes Alérgicos Rápidos",
      "Avaliação de Desenvolvimento Motor"
    ],
    beneficios: [
      {
        title: "Crescimento Monitorado",
        description: "Acompanhamento rigoroso da curva de desenvolvimento infantil."
      },
      {
        title: "Vacinação em Dia",
        description: "Orientação e acompanhamento do calendário de imunização."
      },
      {
        title: "Nutrição Infantil",
        description: "Apoio no aleitamento materno e na introdução alimentar correta."
      }
    ],
    faqs: [
      {
        question: "Qual a frequência ideal de consultas com o pediatra?",
        answer: "No primeiro ano as consultas devem ser mensais. De 1 a 2 anos, a cada três meses. A partir dos 2 anos, consultas preventivas semestrais ou anuais são recomendadas."
      },
      {
        question: "O que é puericultura?",
        answer: "É o ramo da pediatria focado na prevenção e no acompanhamento do crescimento físico e mental da criança, identificando precocemente qualquer alteração."
      }
    ],
    keywords: "pediatra irece, consulta pediatra irece, clinica pediatrica irece, medico de crianca irece, consulta puericultura irece",
    titleSeo: "Pediatra em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Agende consulta com pediatra em Irecê na CMB Clínica. Acompanhamento completo da puericultura, crescimento infantil e vacinação.",
    schemaMedicalSpecialty: "Pediatric",
    icon: Baby
  },
  {
    nome: "Ginecologia",
    slug: "ginecologia",
    descricao: "A Ginecologia do Centro Médico da Bahia é voltada à saúde preventiva da mulher em todas as suas fases. Realizamos exames preventivos (Papanicolau), acompanhamento de cólicas intensas, infecções urinárias, corrimentos, climatério e planejamento familiar (incluindo colocação de DIU). Oferecemos consulta com ginecologista em Irecê com alto rigor clínico e humanização.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Cólicas menstruais muito fortes ou dor pélvica",
      "Corrimentos vaginais com alteração de cor ou cheiro",
      "Nódulos ou dor nas mamas",
      "Menstruação atrasada ou sangramento irregular",
      "Sintomas incômodos de menopausa (ondas de calor)",
      "Coceira ou feridas na região íntima"
    ],
    exames: [
      "Exame Preventivo (Papanicolau)",
      "Ultrassonografia Transvaginal e de Mamas",
      "Exames de Sangue Hormonais",
      "Ultrassom Pélvico e Abdominal"
    ],
    beneficios: [
      {
        title: "Prevenção do Câncer",
        description: "Rastreamento do câncer de colo do útero e de mama."
      },
      {
        title: "Contracepção Segura",
        description: "Orientação e colocação de DIU hormonal ou de cobre."
      },
      {
        title: "Bem-estar Hormonal",
        description: "Tratamento de cistos, miomas e reposição no climatério."
      }
    ],
    faqs: [
      {
        question: "Quando deve ser feita a primeira consulta ginecológica?",
        answer: "Recomenda-se realizar a primeira consulta logo após a primeira menstruação ou antes de iniciar a vida sexual, para orientações de prevenção."
      },
      {
        question: "De quanto em quanto tempo devo fazer o preventivo?",
        answer: "O Papanicolau deve ser feito anualmente por mulheres sexualmente ativas. A regularidade pode mudar a critério médico após resultados normais consecutivos."
      }
    ],
    keywords: "ginecologista irece, ginecologia irece, preventivo papanicolau irece, colocacao de diu irece, ginecologista clinica irece",
    titleSeo: "Ginecologista em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Precisa de ginecologista em Irecê? Agende preventivos, ultrassom transvaginal e planejamento contraceptivo no Centro Médico da Bahia.",
    schemaMedicalSpecialty: "Gynecologic",
    icon: Flower
  },
  {
    nome: "Ortopedia",
    slug: "ortopedia",
    descricao: "A Ortopedia do Centro Médico da Bahia é especializada em diagnosticar e tratar disfunções, lesões e deformidades que acometem o aparelho locomotor (ossos, músculos, tendões, articulações e ligamentos). Cuidamos de dores nas costas, artrose, tendinites, torções e reabilitação pós-fratura. Agende sua consulta com ortopedista em Irecê para recuperar sua mobilidade.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Dor crônica nas costas, ombros ou pescoço",
      "Dificuldade de movimentação ou rigidez nas articulações",
      "Dores nos joelhos, quadril ou tornozelos ao caminhar",
      "Formigamento ou perda de força nos braços ou pernas",
      "Inchaço articular ou estalos dolorosos",
      "Entorses e contusões recentes"
    ],
    exames: [
      "Ultrassonografia de Articulações e Tendões",
      "Exames de Imagem Diagnóstica",
      "Avaliação de Força e Mobilidade",
      "Exames de Sangue Reumatológicos"
    ],
    beneficios: [
      {
        title: "Combate à Dor Lombar",
        description: "Diagnóstico e alívio de dores na coluna e hérnias de disco."
      },
      {
        title: "Preservação das Articulações",
        description: "Tratamento precoce contra o desgaste da artrose."
      },
      {
        title: "Prevenção da Osteoporose",
        description: "Fortalecimento ósseo para evitar fraturas na terceira idade."
      }
    ],
    faqs: [
      {
        question: "O que causa dor constante nas costas?",
        answer: "Pode ser decorrente de má postura, contraturas musculares, sedentarismo ou problemas estruturais como hérnia de disco ou artrose na coluna."
      },
      {
        question: "Como tratar a artrose nos joelhos?",
        answer: "O tratamento envolve perda de peso, fortalecimento muscular através de exercícios dirigidos, medicamentos analgésicos e, em alguns casos, infiltrações articulares."
      }
    ],
    keywords: "ortopedista irece, ortopedia irece, consulta ortopedista irece, dor na coluna tratamento irece, medico de ossos irece",
    titleSeo: "Ortopedista em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Consulte ortopedista em Irecê no Centro Médico da Bahia. Especialistas em dor na coluna, joelhos, articulações e reabilitação de lesões.",
    schemaMedicalSpecialty: "Orthopedic",
    icon: Bone
  },
  {
    nome: "Ortodontia",
    slug: "ortodontia",
    descricao: "A Ortodontia da CMB Clínica foca no alinhamento correto dos dentes e das arcadas dentárias, devolvendo a funcionalidade da mordida, facilitando a higiene bucal e melhorando a estética do sorriso. Trabalhamos com aparelhos ortodônticos modernos, com planejamento personalizado. Agende sua consulta com ortodontista em Irecê e conquiste o sorriso que você merece.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Dentes encavalados, tortos ou muito espaçados",
      "Dificuldade na mastigação ou dor ao morder",
      "Dores de cabeça constantes ou estalos na articulação da mandíbula",
      "Dentes superiores que não se encaixam nos inferiores",
      "Dificuldade em higienizar dentes apinhados",
      "Mordida cruzada ou aberta"
    ],
    exames: [
      "Avaliação Clínica Ortodôntica",
      "Moldagem e Planejamento Digital",
      "Solicitação de Radiografia Panorâmica",
      "Fotografia e Documentação Ortodôntica"
    ],
    beneficios: [
      {
        title: "Sorriso Harmônico",
        description: "Dentes perfeitamente alinhados, aumentando a autoestima."
      },
      {
        title: "Mastigação Eficiente",
        description: "Melhora no encaixe da mordida e na digestão dos alimentos."
      },
      {
        title: "Saúde Gengival",
        description: "Dentes alinhados são mais fáceis de escovar, prevenindo cáries e gengivite."
      }
    ],
    faqs: [
      {
        question: "Qual a melhor idade para usar aparelho ortodôntico?",
        answer: "A partir dos 7 anos recomenda-se a primeira avaliação para detectar problemas de crescimento ósseo. Contudo, aparelhos podem ser instalados em qualquer idade na fase adulta com excelentes resultados."
      },
      {
        question: "Quanto tempo dura um tratamento ortodôntico?",
        answer: "O tempo varia conforme a complexidade de cada caso, durando em média entre 12 e 24 meses, dependendo da colaboração do paciente nas manutenções."
      }
    ],
    keywords: "ortodontista irece, aparelho dentario irece, clinica de ortodontia irece, colocar aparelho irece, dentista aparelho irece",
    titleSeo: "Ortodontista em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Precisa colocar aparelho? Consulte ortodontista em Irecê na CMB Clínica. Planejamento moderno, manutenção e alinhamento do sorriso.",
    schemaMedicalSpecialty: "PublicHealth",
    icon: Sparkles
  },
  {
    nome: "Odontologia",
    slug: "odontologia",
    descricao: "A Odontologia do Centro Médico da Bahia cuida da saúde e higiene bucal integral de toda a família. Realizamos procedimentos clínicos preventivos, limpeza, restauração, extrações e tratamentos de gengiva. Se você busca um dentista em Irecê para garantir dentes saudáveis e livres de dor, conte com a nossa equipe de cirurgiões-dentistas qualificados.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Dor de dente aguda ou ao consumir alimentos frios/quentes",
      "Sangramento na gengiva durante a escovação ou uso de fio dental",
      "Mau hálito persistente",
      "Surgimento de manchas escuras ou cavidades nos dentes",
      "Dentes amolecidos ou com sensibilidade incomum",
      "Inchaço ou dor na gengiva"
    ],
    exames: [
      "Exame Clínico Intraoral de Rotina",
      "Profilaxia Profissional (Limpeza e Remoção de Tártaro)",
      "Aplicação Tópica de Flúor Preventivo",
      "Restauração e Selantes"
    ],
    beneficios: [
      {
        title: "Eliminação da Dor",
        description: "Tratamento rápido de cáries e infecções dentárias dolorosas."
      },
      {
        title: "Gengivas Saudáveis",
        description: "Combate à placa bacteriana que causa gengivite e periodontite."
      },
      {
        title: "Hálito Puro",
        description: "Prevenção e tratamento de infecções bucais que causam mau odor."
      }
    ],
    faqs: [
      {
        question: "De quanto em quanto tempo devo ir ao dentista em Irecê?",
        answer: "Recomenda-se realizar uma visita preventiva a cada 6 meses para fazer limpeza profissional e detectar problemas em estágio inicial."
      },
      {
        question: "O que causa o sangramento na gengiva?",
        answer: "A causa mais comum é o acúmulo de placa bacteriana decorrente de higienização incorreta, levando à inflamação da gengiva (gengivite). Deve ser tratada pelo dentista."
      }
    ],
    keywords: "dentista irece, clinica odontologica irece, consulta dentista irece, limpeza de dente irece, obturacao dentista irece",
    titleSeo: "Dentista em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Agende sua consulta com dentista em Irecê no Centro Médico da Bahia. Limpeza profissional, restaurações e tratamentos para sua saúde bucal.",
    schemaMedicalSpecialty: "PublicHealth",
    icon: Smile
  },
  {
    nome: "Alergologia",
    slug: "alergologia",
    descricao: "A Alergologia da CMB Clínica é dedicada à prevenção, diagnóstico e tratamento de alergias que afetam as vias respiratórias, pele e o sistema digestivo. Tratamos rinite alérgica, asma, dermatites e alergias alimentares. Agende sua consulta com alergologista em Irecê e recupere seu bem-estar diário, respirando melhor e vivendo sem coceiras irritantes.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Espirros frequentes, coriza constante e coceira no nariz",
      "Tosse persistente, falta de ar ou chiado no peito",
      "Coceira intensa na pele, vermelhidão ou placas ásperas",
      "Olhos lacrimejantes, vermelhos ou coçando constantemente",
      "Reações adversas a alimentos, como inchaços na boca ou vômitos",
      "Urticárias repentinas na pele"
    ],
    exames: [
      "Testes Alérgicos de Contato e Cutâneos (Prick Test)",
      "Exames de Sangue IgE Específicos (Laboratório)",
      "Avaliação de Função Respiratória Básica",
      "Triagem de Alérgenos Alimentares"
    ],
    beneficios: [
      {
        title: "Controle da Rinite",
        description: "Redução de espirros e coriza para noites de sono tranquilas."
      },
      {
        title: "Alívio na Pele",
        description: "Tratamento eficaz contra dermatites e coceiras crônicas."
      },
      {
        title: "Diagnóstico Preciso",
        description: "Identificação exata do que causa a sua reação alérgica."
      }
    ],
    faqs: [
      {
        question: "Qual a diferença entre rinite alérgica e resfriado?",
        answer: "O resfriado é infeccioso (causado por vírus), dura cerca de 7 dias e pode vir com febre e dor no corpo. A rinite alérgica dura semanas, não causa febre e é desencadeada por poeira, ácaros ou pelos."
      },
      {
        question: "Como funciona o teste alérgico na clínica?",
        answer: "O teste cutâneo consiste na aplicação de gotas de substâncias alérgenas na pele do braço, fazendo um leve estímulo. Em 15 minutos, se houver reação (como uma pequena bolha vermelha), o teste confirma a sensibilidade."
      }
    ],
    keywords: "alergologista irece, consulta alergia irece, teste alergico irece, rinite alergica tratamento irece, clinica alergia irece",
    titleSeo: "Alergologista em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Consulte alergologista em Irecê no Centro Médico da Bahia. Diagnóstico e tratamento de rinite alérgica, asma, dermatites e testes de alergia.",
    schemaMedicalSpecialty: "PublicHealth",
    icon: ShieldAlert
  },
  {
    nome: "Clínica Geral",
    slug: "clinica-geral",
    descricao: "A Clínica Geral da CMB Clínica é a porta de entrada para a sua saúde. O clínico geral realiza uma avaliação global do organismo, trata doenças agudas comuns, gerencia check-ups preventivos anuais e orienta o encaminhamento para outras especialidades quando necessário. Encontre seu clínico geral em Irecê e mantenha seus exames em dia com comodidade.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Dores de cabeça constantes ou cansaço inexplicável",
      "Mal-estar geral, febre baixa ou indisposição",
      "Sintomas de gripe, resfriados, infecções de garganta ou sinusite",
      "Dores nas articulações ou desconforto muscular",
      "Desconforto digestivo ou queimação estomacal leve",
      "Necessidade de realizar exames de rotina (check-up)"
    ],
    exames: [
      "Check-up Completo (Hemograma, Glicose, Colesterol, Função Renal/Hepática)",
      "Aferição de Pressão Arterial e Oximetria",
      "Exames de Urina e Fezes gerais",
      "Avaliação Física Geral"
    ],
    beneficios: [
      {
        title: "Avaliação Global",
        description: "Cuidado integrado de todas as funções do seu corpo."
      },
      {
        title: "Check-up Preventivo",
        description: "Detecção precoce de diabetes, anemia e taxas elevadas de colesterol."
      },
      {
        title: "Orientação Médica",
        description: "Direcionamento correto para especialistas quando houver alterações."
      }
    ],
    faqs: [
      {
        question: "O que é feito em um check-up geral anual?",
        answer: "O clínico geral faz uma entrevista médica detalhada, solicita exames laboratoriais essenciais (sangue, urina e fezes) e afere sinais vitais como pressão arterial para verificar se o organismo está equilibrado."
      },
      {
        question: "Quando devo procurar o clínico geral em vez de um especialista?",
        answer: "Sempre que tiver sintomas inespecíficos (como dor de cabeça, cansaço, febre) ou quando quiser realizar seus exames preventivos de rotina. O clínico geral tem a visão ampla capaz de dar o primeiro diagnóstico e orientar você."
      }
    ],
    keywords: "clinico geral irece, consulta clinico geral irece, exames de rotina irece, clinica medica irece, checkup anual irece",
    titleSeo: "Clínico Geral em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Agende consulta com clínico geral em Irecê no Centro Médico da Bahia. Check-up preventivo completo, exames de rotina e atendimento humanizado.",
    schemaMedicalSpecialty: "PublicHealth",
    icon: Stethoscope
  }
];
