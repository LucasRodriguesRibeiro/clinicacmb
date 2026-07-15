import {
  Heart,
  Baby,
  Flower,
  Bone,
  Sparkles,
  Zap,
  Flame,
  Smile,
  Shield,
  Activity,
  Wind,
  Users,
  ShieldAlert,
  ClipboardList,
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
    descricao: "A Cardiologia é a especialidade médica focada na prevenção, diagnóstico e tratamento de doenças que acometem o coração e os vasos sanguíneos. O acompanhamento cardiovascular regular é o principal pilar para evitar problemas graves, como o infarto agudo do miocárdio e o acidente vascular cerebral (AVC). Se você busca uma consulta com cardiologista em Irecê, o Centro Médico da Bahia oferece atendimento com médicos especialistas altamente qualificados e exames diagnósticos rápidos e precisos para cuidar da sua saúde e bem-estar.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Dor ou aperto no peito durante esforço ou em repouso",
      "Palpitações, batedeira ou sensação de ritmo cardíaco irregular",
      "Falta de ar ou fadiga excessiva ao realizar atividades cotidianas",
      "Tonturas frequentes, desmaios ou sensação de desfalecimento",
      "Inchaço incomum nas pernas, tornozelos ou pés",
      "Pressão arterial elevada constantemente monitorada"
    ],
    exames: [
      "Eletrocardiograma (ECG)",
      "Ultrassonografia com Doppler Colorido de Vasos",
      "Exames de Sangue (Perfil Lipídico, Enzimas Cardíacas)",
      "Monitoramento de Pressão Arterial"
    ],
    beneficios: [
      {
        title: "Prevenção de Infartos",
        description: "Identificação precoce de placas de gordura e obstruções nas artérias coronárias."
      },
      {
        title: "Controle da Hipertensão",
        description: "Ajuste preciso de medicamentos e hábitos para manter a pressão em níveis ideais."
      },
      {
        title: "Longevidade Ativa",
        description: "Orientações médicas para a prática segura de exercícios físicos e dieta saudável."
      }
    ],
    faqs: [
      {
        question: "Quando devo fazer minha primeira consulta com um cardiologista em Irecê?",
        answer: "Homens a partir dos 40 anos e mulheres a partir dos 45 anos devem iniciar o acompanhamento preventivo anual. Contudo, se houver histórico familiar de infarto precoce, hipertensão ou sintomas como dor no peito, a consulta deve ser imediata."
      },
      {
        question: "O que é a hipertensão arterial e como ela afeta meu corpo?",
        answer: "A hipertensão, ou pressão alta, é uma doença crônica caracterizada pela força excessiva que o sangue exerce nas paredes das artérias. Se não tratada, pode levar a infarto, AVC e insuficiência renal."
      },
      {
        question: "Quais exames cardiológicos posso realizar na CMB Clínica em Irecê?",
        answer: "Oferecemos exames laboratoriais essenciais para dosagem de colesterol e glicemia, eletrocardiograma (ECG) computadorizado e ultrassonografia vascular com Doppler."
      },
      {
        question: "O cansaço fácil pode ser um sinal de problema no coração?",
        answer: "Sim, a fadiga exagerada ou falta de ar em atividades simples pode indicar que o coração não está conseguindo bombear sangue suficiente para o corpo (insuficiência cardíaca)."
      },
      {
        question: "Como o estresse diário interfere no coração?",
        answer: "O estresse prolongado libera hormônios como cortisol e adrenalina, que elevam a frequência cardíaca e a pressão arterial, sobrecarregando o sistema circulatório."
      }
    ],
    keywords: "cardiologista irece, consulta cardiologia irece, clinica cardiologista irece, exames do coracao irece, medico cardiologista irece",
    titleSeo: "Cardiologista em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Precisa de consulta com cardiologista em Irecê? Agende sua avaliação no Centro Médico da Bahia. Estrutura completa, atendimento qualificado e exames rápidos.",
    schemaMedicalSpecialty: "Cardiovascular",
    icon: Heart
  },
  {
    nome: "Pediatria",
    slug: "pediatria",
    descricao: "A Pediatria é a área da medicina dedicada à saúde integral de crianças e adolescentes, desde o nascimento até a fase adulta. Mais do que tratar doenças, o pediatra acompanha de perto o crescimento, o desenvolvimento motor e cognitivo, a imunização e a nutrição do seu filho. No Centro Médico da Bahia, oferecemos consulta com pediatra em Irecê em um ambiente acolhedor, humanizado e focado nas necessidades específicas de cada fase do crescimento infantil.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Febre persistente ou sem causa aparente",
      "Dificuldade alimentar, perda de peso ou vômitos recorrentes",
      "Atraso no desenvolvimento da fala ou coordenação motora",
      "Mudanças bruscas no comportamento, irritabilidade ou apatia",
      "Tosse persistente, chiado no peito ou coriza constante",
      "Problemas na pele, assaduras ou brotuejas frequentes"
    ],
    exames: [
      "Hemograma Completo e Dosagens Hormonais",
      "Exames de Urina e Fezes rotineiros",
      "Avaliação Antropométrica (Peso, Estatura, Perímetro Cefálico)",
      "Exames Diagnósticos por Imagem Básicos"
    ],
    beneficios: [
      {
        title: "Acompanhamento do Crescimento",
        description: "Garantia de que seu filho está se desenvolvendo dentro das curvas de crescimento saudáveis."
      },
      {
        title: "Orientação Vacinal",
        description: "Controle e atualização do calendário de vacinação para blindar o sistema imunológico da criança."
      },
      {
        title: "Apoio Nutricional",
        description: "Direcionamento para introdução alimentar correta e prevenção da obesidade infantil."
      }
    ],
    faqs: [
      {
        question: "Com que frequência meu filho deve ir ao pediatra em Irecê?",
        answer: "No primeiro ano de vida, as consultas são mensais. De 1 a 2 anos, a cada 3 meses. A partir dos 2 anos, consultas semestrais ou anuais são suficientes para o acompanhamento preventivo."
      },
      {
        question: "Qual é a importância da consulta de puericultura?",
        answer: "A puericultura é a subespecialidade que acompanha o desenvolvimento integral da criança, analisando comportamento, sono, alimentação, postura e a dinâmica familiar."
      },
      {
        question: "O que fazer em caso de febre repentina na criança?",
        answer: "Mantenha a criança hidratada, use roupas leves e ministre o antitérmico prescrito pelo médico. Se a febre persistir por mais de 72h ou for acompanhada de apatia, procure atendimento imediato."
      },
      {
        question: "Como lidar com as cólicas no recém-nascido?",
        answer: "Compressas mornas na barriga, massagens suaves (movimentos circulares) e o movimento de 'bicicleta' com as pernas da criança ajudam a aliviar os gases e o desconforto."
      },
      {
        question: "Quando iniciar a introdução alimentar e como deve ser?",
        answer: "A partir dos 6 meses de vida, de forma gradual, mantendo o aleitamento materno. Comece com frutas e papas salgadas ricas em legumes, cereais e proteínas."
      }
    ],
    keywords: "pediatra irece, consulta pediatra irece, clinica pediatrica irece, medico infantil irece, consulta de puericultura irece",
    titleSeo: "Pediatra em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Agende consulta com pediatra em Irecê no Centro Médico da Bahia. Acompanhamento completo do crescimento, puericultura e cuidados dedicados à saúde do seu filho.",
    schemaMedicalSpecialty: "Pediatric",
    icon: Baby
  },
  {
    nome: "Ginecologia",
    slug: "ginecologia",
    descricao: "A Ginecologia é a especialidade essencial para a saúde integral da mulher, acompanhando-a desde a menarca até a pós-menopausa. Além do exame preventivo periódico (Papanicolau), a ginecologia diagnostica infecções urinárias, corrimentos, cistos nos ovários, miomas, e conduz orientações contraceptivas e o planejamento familiar. O Centro Médico da Bahia é referência em consulta com ginecologista em Irecê, dispondo de atendimento humanizado e ultrassonografia no próprio local.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Dor pélvica crônica ou cólicas menstruais incapacitantes",
      "Irregularidade no ciclo menstrual ou sangramento fora do período",
      "Corrimentos vaginais com alteração de cor, odor ou coceira",
      "Dor ou sangramento durante a relação sexual",
      "Nódulos ou alterações na palpação das mamas",
      "Calores intensos, insônia e outros sintomas da menopausa"
    ],
    exames: [
      "Preventivo (Papanicolau)",
      "Ultrassonografia Transvaginal e de Mamas",
      "Colposcopia e Biópsia do Colo Uterino",
      "Exames de Sangue Hormonais"
    ],
    beneficios: [
      {
        title: "Prevenção de Câncer",
        description: "Rastreamento precoce de lesões no colo do útero causadas por HPV e nódulos mamários."
      },
      {
        title: "Planejamento Familiar",
        description: "Indicação e inserção de métodos contraceptivos eficientes, como o DIU hormonal e de cobre."
      },
      {
        title: "Saúde Sexual",
        description: "Tratamento de infecções sexualmente transmissíveis (ISTs) e modulação hormonal segura."
      }
    ],
    faqs: [
      {
        question: "Quando deve ser realizada a primeira consulta ginecológica?",
        answer: "Recomenda-se a primeira consulta logo após a primeira menstruação (menarca) ou antes do início da atividade sexual, para orientação sobre contracepção e prevenção."
      },
      {
        question: "Com qual frequência devo fazer o exame preventivo (Papanicolau)?",
        answer: "O exame deve ser realizado anualmente por todas as mulheres que já iniciaram a vida sexual. Após dois exames seguidos com resultados normais, a frequência pode mudar a critério médico."
      },
      {
        question: "Quais exames de imagem ginecológicos estão disponíveis no CMB?",
        answer: "Dispomos de ultrassonografia transvaginal, pélvica, de mamas e exames laboratoriais hormonais para uma avaliação diagnóstica completa no mesmo local."
      },
      {
        question: "Qual a diferença entre o DIU de Cobre e o DIU Mirena (Hormonal)?",
        answer: "O DIU de Cobre é um método não-hormonal que pode durar até 10 anos. O DIU Mirena libera hormônio localmente na cavidade uterina, reduzindo significativamente o fluxo e as cólicas."
      },
      {
        question: "O que é a endometriose e quais são seus sintomas?",
        answer: "É o crescimento do endométrio fora do útero. Causa cólicas menstruais intensas, dor profunda durante as relações sexuais e, em alguns casos, infertilidade."
      }
    ],
    keywords: "ginecologista irece, ginecologia irece, preventivo papanicolau irece, colocacao de diu irece, ultrassom transvaginal irece",
    titleSeo: "Ginecologista em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Encontre médica ginecologista em Irecê. Consultas de rotina, exames preventivos, colocação de DIU e ultrassom transvaginal no Centro Médico da Bahia.",
    schemaMedicalSpecialty: "Gynecologic",
    icon: Flower
  },
  {
    nome: "Ortopedia",
    slug: "ortopedia",
    descricao: "A Ortopedia é a especialidade responsável por diagnosticar e tratar lesões e patologias do sistema locomotor, abrangendo ossos, músculos, articulações, ligamentos e tendões. Problemas como dores na coluna, artrose, tendinites e fraturas afetam diretamente a autonomia e a qualidade de vida. Para quem precisa de ortopedista em Irecê, o Centro Médico da Bahia dispõe de médicos especialistas para consultas completas, infiltrações e acompanhamento pós-lesão.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Dores persistentes nas costas, pescoço, lombar ou ombros",
      "Rigidez nas articulações, especialmente ao acordar",
      "Dificuldade de locomoção, falta de flexibilidade ou estalos",
      "Dores nos joelhos, tornozelos ou quadril ao caminhar",
      "Dormência, formigamento ou perda de força nos membros",
      "Lesões agudas, entorses e traumas causados por quedas"
    ],
    exames: [
      "Ultrassonografia de Articulações e Músculos",
      "Avaliação Clínica de Marcha e Amplitude",
      "Exames de Sangue para Fatores Reumatológicos",
      "Exames de Imagem de Apoio"
    ],
    beneficios: [
      {
        title: "Alívio da Dor Crônica",
        description: "Tratamento individualizado de dores na coluna, joelhos e articulações."
      },
      {
        title: "Recuperação de Lesões",
        description: "Reabilitação precisa para entorses, contusões e reabilitação pós-cirúrgica."
      },
      {
        title: "Preservação Articular",
        description: "Prevenção do desgaste acelerado das articulações e combate à osteoporose."
      }
    ],
    faqs: [
      {
        question: "Quando devo procurar um ortopedista em Irecê em vez de um fisioterapeuta?",
        answer: "O ortopedista é o médico responsável pelo diagnóstico clínico, solicitação de exames e indicação de tratamentos (medicamentos, infiltrações ou cirurgia). A fisioterapia atua na execução da reabilitação física indicada pelo médico."
      },
      {
        question: "O que causa a hérnia de disco e quais são os tratamentos?",
        answer: "É o deslocamento do disco intervertebral que pressiona os nervos da coluna. O tratamento costuma ser conservador, com analgésicos, fisioterapia e reeducação postural."
      },
      {
        question: "Qual a diferença entre artrose e artrite?",
        answer: "A artrite é uma inflamação na articulação, enquanto a artrose (ou osteoartrite) é o desgaste progressivo da cartilagem que recobre as extremidades ósseas."
      },
      {
        question: "O que fazer imediatamente após sofrer um entorse no tornozelo?",
        answer: "Faça repouso, aplique gelo por 20 minutos protegido por um pano, mantenha a perna elevada e evite apoiar o pé no chão até ser avaliado por um especialista."
      },
      {
        question: "Como prevenir a osteoporose?",
        answer: "Consuma alimentos ricos em cálcio, mantenha bons níveis de vitamina D (através de exposição solar segura), faça musculação ou caminhadas regularmente e evite o fumo."
      }
    ],
    keywords: "ortopedista irece, ortopedia irece, consulta ortopedista irece, dor nas costas irece, medico de ossos irece",
    titleSeo: "Ortopedista em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Consulte ortopedista em Irecê no Centro Médico da Bahia. Especialistas em dor na coluna, joelho, articulações, reabilitação e infiltrações articulares.",
    schemaMedicalSpecialty: "Orthopedic",
    icon: Bone
  },
  {
    nome: "Dermatologia",
    slug: "dermatologia",
    descricao: "A Dermatologia é a especialidade clínica e cirúrgica que se dedica ao diagnóstico, prevenção e tratamento de doenças da pele, cabelos, unhas e mucosas. Desde o tratamento de acne ativa, melasma e alergias até o diagnóstico precoce do câncer de pele, o dermatologista assegura a integridade do maior órgão do corpo humano. No Centro Médico da Bahia, sua consulta com dermatologista em Irecê é conduzida com rigor clínico para promover a saúde da sua pele.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Surgimento de pintas novas ou alterações em manchas antigas",
      "Coceira intensa na pele, descamação ou vermelhidão crônica",
      "Queda acentuada de cabelo ou falhas no couro cabeludo",
      "Unhas fracas, quebradiças ou com manchas escuras lineares",
      "Acne persistente na idade adulta ou cicatrizes profundas",
      "Feridas na pele que demoram mais de quatro semanas para cicatrizar"
    ],
    exames: [
      "Dermatoscopia (Análise de Pintas)",
      "Biópsia de Lesões de Pele",
      "Raspagem e Exames Micológicos",
      "Testes Alérgicos de Contato"
    ],
    beneficios: [
      {
        title: "Detecção de Câncer",
        description: "Identificação precoce de melanomas e carcinomas através de análise dermatoscópica."
      },
      {
        title: "Saúde Capilar",
        description: "Diagnóstico e tratamento de alopecias e queda crônica de cabelos."
      },
      {
        title: "Controle de Doenças Crônicas",
        description: "Controle eficaz de psoríase, dermatite atópica, vitiligo e rosácea."
      }
    ],
    faqs: [
      {
        question: "Como funciona o autoexame de pele para prevenir o câncer?",
        answer: "Fique atento à regra do ABCDE das pintas: Assimetria, Bordas irregulares, Cores misturadas, Diâmetro maior que 6mm e Evolução rápida no tamanho. Qualquer alteração exige consulta médica."
      },
      {
        question: "O que causa a queda excessiva de cabelo (Alopécia)?",
        answer: "A queda pode ter causas genéticas (calvície), alterações hormonais (tireoide, pós-parto), estresse, deficiências de vitaminas ou uso de produtos inadequados."
      },
      {
        question: "Qual é a rotina básica de cuidados com a pele (Skincare)?",
        answer: "A rotina ideal envolve três passos fundamentais: higienização com sabonete específico, hidratação adequada ao tipo de pele e proteção solar diária com FPS mínimo de 30."
      },
      {
        question: "O que é o melasma e como controlá-lo?",
        answer: "São manchas escuras na pele, comuns no rosto, associadas a hormônios e radiação solar. O controle envolve uso constante de protetor solar, antioxidantes e clareadores indicados pelo dermatologista."
      },
      {
        question: "Como tratar as micoses de unha?",
        answer: "O tratamento varia conforme a gravidade, podendo envolver esmaltes terapêuticos e antifúngicos orais. Por causa do crescimento lento da unha, o tratamento pode levar de 6 a 12 meses."
      }
    ],
    keywords: "dermatologista irece, clinica dermatologia irece, consulta dermatologista irece, biopsia de pele irece, queda de cabelo tratamento irece",
    titleSeo: "Dermatologista em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Consulte dermatologista em Irecê no Centro Médico da Bahia. Diagnóstico de câncer de pele, tratamento de acne, queda de cabelo, alergias e cuidados clínicos.",
    schemaMedicalSpecialty: "Dermatology",
    icon: Sparkles
  },
  {
    nome: "Neurologia",
    slug: "neurologia",
    descricao: "A Neurologia é a especialidade responsável por investigar, diagnosticar e tratar distúrbios físicos que afetam o sistema nervoso central (cérebro e medula espinhal) e o sistema nervoso periférico (nervos e músculos). Condições como cefaleias crônicas, tremores, epilepsia e perdas de memória são acompanhadas por essa especialidade. No Centro Médico da Bahia, oferecemos consulta com neurologista em Irecê com profissionais altamente preparados para avaliar a saúde do seu sistema nervoso.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Dores de cabeça constantes, intensas ou que pioram com o tempo",
      "Esquecimentos frequentes que afetam as atividades diárias",
      "Tremores involuntários nas mãos, pernas ou rigidez muscular",
      "Formigamento, queimação ou dormência nas mãos e pés",
      "Episódios de crises convulsivas ou desmaios súbitos",
      "Tonturas frequentes, desequilíbrio e fraqueza muscular"
    ],
    exames: [
      "Avaliação de Reflexos e Coordenação Motora",
      "Exames de Sangue Neurológicos e Metabólicos",
      "Exames de Imagem Cerebral",
      "Encaminhamento para Exames Eletrofisiológicos"
    ],
    beneficios: [
      {
        title: "Controle da Enxaqueca",
        description: "Tratamentos modernos e profiláticos para dores de cabeça incapacitantes."
      },
      {
        title: "Diagnóstico de Demências",
        description: "Avaliação precoce de Alzheimer e outras doenças degenerativas para manter a funcionalidade."
      },
      {
        title: "Tratamento de Epilepsia",
        description: "Ajuste medicamentoso ideal para controle total de crises convulsivas."
      }
    ],
    faqs: [
      {
        question: "Quando uma dor de cabeça deve me acender um sinal de alerta?",
        answer: "Dores de cabeça muito fortes que surgem de repente (explosivas), acompanhadas de febre, rigidez no pescoço, alterações de visão, fala ou fraqueza muscular exigem atendimento médico urgente."
      },
      {
        question: "Esquecimentos frequentes são normais com o envelhecimento?",
        answer: "Pequenos lapsos podem ocorrer, mas quando o esquecimento interfere na realização de tarefas habituais, na orientação de tempo/espaço ou no reconhecimento de familiares, deve ser avaliado pelo neurologista."
      },
      {
        question: "O que é a enxaqueca e como ela difere da dor de cabeça comum?",
        answer: "A enxaqueca é uma doença neurológica crônica. A dor costuma ser latejante, de um lado da cabeça, acompanhada de sensibilidade à luz, som e episódios de náuseas ou vômitos."
      },
      {
        question: "Tremores nas mãos sempre indicam doença de Parkinson?",
        answer: "Não. Existem outras causas de tremores, como o tremor essencial (condição benigna frequentemente familiar), ansiedade extrema, consumo excessivo de cafeína e efeito de certos medicamentos."
      },
      {
        question: "Como prevenir o Acidente Vascular Cerebral (AVC)?",
        answer: "Mantenha a pressão arterial e o diabetes sob controle, pratique atividade física, evite o cigarro, modere o consumo de álcool e faça exames preventivos regulares."
      }
    ],
    keywords: "neurologista irece, consulta neurologista irece, clinica neurologia irece, tratamento de enxaqueca irece, medico neurologista irece",
    titleSeo: "Neurologista em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Agende sua consulta com neurologista em Irecê no Centro Médico da Bahia. Diagnóstico e tratamento de enxaqueca, tremores, epilepsia e distúrbios da memória.",
    schemaMedicalSpecialty: "Neurology",
    icon: Activity
  },
  {
    nome: "Endocrinologia",
    slug: "endocrinologia",
    descricao: "A Endocrinologia é a especialidade médica dedicada ao diagnóstico e tratamento de distúrbios hormonais e metabólicos. Como os hormônios controlam o metabolismo, crescimento, sono e reprodução, o desequilíbrio nessas substâncias pode levar a problemas como diabetes, hipotireoidismo, obesidade e osteoporose. O Centro Médico da Bahia disponibiliza consulta com endocrinologista em Irecê para um diagnóstico laboratorial preciso e acompanhamento contínuo.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Ganho ou perda rápida de peso sem justificativa dietética",
      "Sede excessiva acompanhada de urina muito frequente",
      "Cansaço extremo, fraqueza muscular e sonolência constante",
      "Surgimento de nódulos ou aumento do volume na região do pescoço",
      "Sensação de calor ou frio intensos que diferem do ambiente",
      "Crescimento excessivo de pelos em mulheres ou ciclos menstruais irregulares"
    ],
    exames: [
      "Perfil Hormonal Completo (TSH, T4 Livre, Cortisol)",
      "Dosagem de Glicose e Hemoglobina Glicada",
      "Ultrassonografia de Tireoide e Glândulas",
      "Perfil Lipídico e Vitaminas"
    ],
    beneficios: [
      {
        title: "Controle do Diabetes",
        description: "Prevenção de complicações renais, oculares e cardiovasculares por meio do controle glicêmico."
      },
      {
        title: "Tratamento da Tireoide",
        description: "Equilíbrio dos hormônios tireoidianos para devolver o ânimo, disposição física e regulação metabólica."
      },
      {
        title: "Gerenciamento de Peso",
        description: "Investigação de distúrbios hormonais subjacentes que impedem o emagrecimento saudável."
      }
    ],
    faqs: [
      {
        question: "Quais são os principais sinais de problemas na tireoide?",
        answer: "No hipotireoidismo (funcionamento lento), ocorrem cansaço, ganho de peso, pele seca e intestino preso. No hipertireoidismo (funcionamento acelerado), há agitação, perda de peso, palpitações e insônia."
      },
      {
        question: "Como saber se estou com pré-diabetes?",
        answer: "O pré-diabetes é assintomático. O diagnóstico é feito por exames laboratoriais, como glicemia de jejum (entre 100 e 125 mg/dL) ou hemoglobina glicada (entre 5,7% e 6,4%)."
      },
      {
        question: "A obesidade é sempre uma questão de falta de dieta?",
        answer: "Não. A obesidade é uma doença crônica multifatorial que envolve fatores genéticos, metabólicos, emocionais e hormonais. O tratamento deve ser global e sem julgamentos."
      },
      {
        question: "Quando crianças devem ser avaliadas por um endocrinologista?",
        answer: "Crianças com atraso ou aceleração acentuada no crescimento, puberdade precoce (antes dos 8 anos em meninas e 9 em meninos) ou obesidade infantil grave devem ser avaliadas."
      },
      {
        question: "O que é a osteopenia e qual a relação com os hormônios?",
        answer: "É a perda gradual de massa óssea, precursora da osteoporose. Está muito ligada à queda de hormônios sexuais (estrogênio na menopausa) e à deficiência de vitamina D."
      }
    ],
    keywords: "endocrinologista irece, consulta endocrinologista irece, diabetes tratamento irece, tireoide exames irece, clinica endocrinologia irece",
    titleSeo: "Endocrinologista em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Consulte endocrinologista em Irecê no Centro Médico da Bahia. Especialistas em diabetes, hipotireoidismo, nódulos de tireoide, obesidade e reposição hormonal.",
    schemaMedicalSpecialty: "Endocrine",
    icon: Zap
  },
  {
    nome: "Psiquiatria",
    slug: "psiquiatria",
    descricao: "A Psiquiatria é a especialidade médica focada na prevenção, diagnóstico e tratamento de distúrbios mentais, emocionais e comportamentais. Doenças como depressão crônica, transtorno de ansiedade generalizada (TAG), insônia crônica e transtorno bipolar afetam profundamente a qualidade de vida e a saúde física dos pacientes. No Centro Médico da Bahia, sua consulta com psiquiatra em Irecê é realizada de forma acolhedora, confidencial, humanizada e sob forte ética profissional.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Tristeza profunda ou apatia que persiste por mais de duas semanas",
      "Preocupação excessiva, batimentos acelerados e falta de ar (ansiedade)",
      "Alterações graves no sono (insônia severa ou sono em excesso)",
      "Mudanças bruscas e extremas de humor sem motivo aparente",
      "Dificuldade crônica de concentração e falhas de atenção no dia a dia",
      "Pensamentos obsessivos, fobias limitantes ou dependência de substâncias"
    ],
    exames: [
      "Avaliação Clínica de Estado Mental e Comportamento",
      "Exames de Sangue Gerais (Avaliação de Vitaminas, Hormônios da Tireoide)",
      "Triagens Cognitivas e Escalas Psicométricas",
      "Exames de Imagem (para excluir causas orgânicas)"
    ],
    beneficios: [
      {
        title: "Equilíbrio Emocional",
        description: "Prescrição e ajuste preciso de psicofármacos para controle de crises e estabilização do humor."
      },
      {
        title: "Qualidade de Vida",
        description: "Redução dos sintomas físicos da ansiedade, permitindo o retorno às atividades sociais e profissionais."
      },
      {
        title: "Abordagem Integrada",
        description: "Trabalho conjunto com psicologia para uma recuperação integral e sustentável."
      }
    ],
    faqs: [
      {
        question: "Qual a diferença entre o atendimento do psiquiatra e do psicólogo?",
        answer: "O psiquiatra é um médico que pode diagnosticar transtornos sob o ponto de vista biológico, solicitar exames e prescrever medicamentos. O psicólogo atua por meio da psicoterapia, trabalhando comportamentos e conflitos emocionais."
      },
      {
        question: "Os medicamentos psiquiátricos causam dependência para sempre?",
        answer: "A maioria dos medicamentos modernos (como antidepressivos) não vicia. Os ansiolíticos conhecidos como 'tarja preta' podem causar dependência se usados incorretamente, mas o psiquiatra gerencia o uso seguro e o desmame."
      },
      {
        question: "Quando a ansiedade deixa de ser comum e vira um transtorno?",
        answer: "A ansiedade se torna patológica quando é desproporcional aos fatos, causa sofrimento diário intenso e impede a pessoa de trabalhar, estudar ou se socializar."
      },
      {
        question: "Como identificar a depressão no dia a dia?",
        answer: "Os principais sinais são a perda de interesse em atividades que antes davam prazer (anedonia), desânimo constante, choro fácil, alterações no apetite e pensamentos de inutilidade."
      },
      {
        question: "O tratamento para transtornos mentais dura a vida toda?",
        answer: "Depende do diagnóstico. Alguns quadros (como episódios únicos de depressão ou ansiedade reativa) têm tratamento com início, meio e fim. Doenças crônicas como transtorno bipolar exigem controle a longo prazo."
      }
    ],
    keywords: "psiquiatra irece, consulta psiquiatra irece, tratamento depressao irece, ansiedade tratamento irece, clinica psiquiatria irece",
    titleSeo: "Psiquiatria em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Consulte psiquiatra em Irecê no Centro Médico da Bahia. Atendimento humanizado e especializado para ansiedade, depressão, insônia e transtornos de humor.",
    schemaMedicalSpecialty: "Psychiatric",
    icon: Smile
  },
  {
    nome: "Gastroenterologia",
    slug: "gastroenterologia",
    descricao: "A Gastroenterologia é a especialidade que se ocupa do diagnóstico e tratamento de doenças que afetam o trato gastrointestinal, englobando esôfago, estômago, intestinos, fígado, vesícula biliar e pâncreas. Sintomas frequentes como azia, queimação, refluxo e alterações intestinais crônicas são avaliados por este especialista. No Centro Médico da Bahia, realizamos consulta com gastroenterologista em Irecê para prevenir e tratar doenças digestivas com diagnósticos seguros.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Azia recorrente, queimação no estômago ou refluxo ácido",
      "Dor, estufamento ou desconforto abdominal após as refeições",
      "Alteração persistente do trânsito intestinal (diarreia ou constipação)",
      "Presença de sangue ou muco nas fezes",
      "Náuseas e vômitos frequentes ou dificuldade para engolir",
      "Olhos e pele amarelados (icterícia) ou dor na região do fígado"
    ],
    exames: [
      "Ultrassonografia de Abdômen Total",
      "Exames de Sangue Funcionais de Fígado e Pâncreas",
      "Exames de Fezes (Pesquisa de Sangue Oculto e Parasitas)",
      "Encaminhamento para Endoscopia e Colonoscopia"
    ],
    beneficios: [
      {
        title: "Controle do Refluxo",
        description: "Tratamento do refluxo gastroesofágico para evitar esofagite e lesões pré-cancerosas."
      },
      {
        title: "Saúde Intestinal",
        description: "Abordagem clínica para síndrome do intestino irritável, intolerâncias alimentares e colites."
      },
      {
        title: "Prevenção de Cálculos",
        description: "Avaliação do fígado e vesícula para prevenir crises agudas de dor por pedras na vesícula."
      }
    ],
    faqs: [
      {
        question: "O que causa o refluxo gastroesofágico?",
        answer: "Ocorre quando o esfíncter (válvula) entre o esôfago e o estômago não fecha corretamente, permitindo que o ácido gástrico suba, causando irritação e azia."
      },
      {
        question: "Quando a dor de estômago pode indicar uma úlcera?",
        answer: "Dores de queimação que pioram com o estômago vazio ou logo após comer, associadas a náuseas e saciedade precoce, devem ser avaliadas para diagnosticar gastrite ou úlcera."
      },
      {
        question: "Quais exames iniciais de gastroenterologia posso fazer na CMB em Irecê?",
        answer: "Realizamos exames de sangue metabólicos e de função hepática, exames de fezes específicos e ultrassonografia de abdômen total."
      },
      {
        question: "O que é a intolerância à lactose e como diagnosticá-la?",
        answer: "É a incapacidade de digerir o açúcar do leite (lactose) por deficiência da enzima lactase, causando gases, diarreia e inchaço. O diagnóstico é clínico ou por exames de sangue específicos."
      },
      {
        question: "Como manter o intestino saudável?",
        answer: "Consuma pelo menos 25g de fibras diariamente (frutas, verduras, grãos integrais), beba pelo menos 2 litros de água por dia e pratique exercícios físicos regulares."
      }
    ],
    keywords: "gastroenterologista irece, gastro irece, consulta gastroenterologia irece, dor de estomago irece, refluxo tratamento irece",
    titleSeo: "Gastroenterologista em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Agende consulta com gastroenterologista em Irecê no Centro Médico da Bahia. Diagnóstico e tratamento de refluxo, gastrite, gordura no fígado e dores abdominais.",
    schemaMedicalSpecialty: "Gastroenterology",
    icon: ClipboardList
  },
  {
    nome: "Pneumologia",
    slug: "pneumologia",
    descricao: "A Pneumologia é a especialidade responsável por diagnosticar e tratar patologias que acometem as vias aéreas e todo o sistema respiratório, incluindo pulmões, brônquios e pleura. Doenças crônicas como asma, bronquite, enfisema (DPOC) e pneumonia requerem cuidados especializados. Se você necessita de consulta com pneumologista em Irecê, o Centro Médico da Bahia oferece infraestrutura diagnóstica e médicos experientes para cuidar do seu pulmão.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Falta de ar constante ou durante pequenos esforços físicos",
      "Tosse seca ou com catarro que persiste por mais de três semanas",
      "Chiado, cansaço ou sensação de aperto no peito ao respirar",
      "Dores no peito ao respirar fundo ou ao tossir",
      "Roncos intensos durante a noite acompanhados de cansaço diurno",
      "Cansaço extremo e rouquidão respiratória inexplicável"
    ],
    exames: [
      "Exames de Sangue (Gasometria, Hemograma)",
      "Avaliação de Oximetria de Pulso em Repouso",
      "Ultrassonografia Torácica Básica",
      "Encaminhamento para Radiografia e Espirometria"
    ],
    beneficios: [
      {
        title: "Controle da Asma",
        description: "Tratamento de manutenção para evitar crises graves e dependência excessiva de bombinhas de resgate."
      },
      {
        title: "Tratamento de DPOC",
        description: "Melhora significativa na capacidade respiratória e na qualidade de vida de ex-fumantes."
      },
      {
        title: "Combate ao Tabagismo",
        description: "Apoio médico estruturado com fármacos específicos para ajudar o paciente a parar de fumar."
      }
    ],
    faqs: [
      {
        question: "Qual a diferença entre bronquite crônica e asma?",
        answer: "A asma é uma doença inflamatória crônica reversível, com crises causadas por alérgenos. A bronquite crônica está muito ligada ao tabagismo, gerando tosse com pigarro constante e falta de ar progressiva."
      },
      {
        question: "Quando uma tosse é considerada preocupante?",
        answer: "Tosses que persistem por mais de 3 semanas (tosse crônica), acompanhadas de perda de peso, febre vespertina, falta de ar ou presença de sangue no catarro exigem avaliação médica imediata."
      },
      {
        question: "Como o tabagismo danifica os pulmões?",
        answer: "A fumaça do cigarro destrói os alvéolos (onde ocorre a troca de oxigênio), inflama os brônquios e altera as células pulmonares, sendo a principal causa de câncer de pulmão e enfisema."
      },
      {
        question: "O que é a apneia do sono e como o pneumologista ajuda?",
        answer: "É a obstrução das vias aéreas durante o sono, causando paradas respiratórias repetidas, roncos e sonolência diurna. O pneumologista avalia a necessidade de aparelhos como o CPAP."
      },
      {
        question: "Como prevenir infecções pulmonares no inverno?",
        answer: "Mantenha a vacinação de gripe e pneumonia atualizada, lave as mãos frequentemente, mantenha ambientes arejados e evite o contato próximo com pessoas gripadas."
      }
    ],
    keywords: "pneumologista irece, consulta pneumologia irece, tratamento de asma irece, espirometria irece, clinica pneumologia irece",
    titleSeo: "Pneumologista em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Consulte pneumologista em Irecê no Centro Médico da Bahia. Tratamento especializado para asma, bronquite, DPOC, tosse crônica e exames respiratórios.",
    schemaMedicalSpecialty: "Pulmonology",
    icon: Wind
  },
  {
    nome: "Urologia",
    slug: "urologia",
    descricao: "A Urologia é a especialidade cirúrgica e clínica que cuida do trato urinário de homens e mulheres, bem como do sistema reprodutor masculino. Responsável pelo diagnóstico do câncer de próstata, tratamento de cálculos renais (pedras nos rins) e infecções urinárias de repetição, a urologia é vital para a saúde de todas as idades. O Centro Médico da Bahia é referência para consulta com urologista em Irecê, com atendimento pautado pela ética, privacidade e cuidado preventivo.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Dificuldade, dor ou ardência intensa ao urinar",
      "Aumento repentino da frequência urinária, especialmente à noite",
      "Jato urinário fraco, interrompido ou sensação de esvaziamento incompleto",
      "Dor aguda e intensa nas costas/rins irradiada para a virilha",
      "Sangue na urina ou alteração acentuada na cor e odor",
      "Dores ou nódulos na região dos testículos"
    ],
    exames: [
      "Dosagem de PSA Total e Livre (Exame de Sangue)",
      "Ultrassonografia de Rins, Vias Urinárias e Próstata",
      "Exame de Urina Tipo 1 e Urocultura com Antibiograma",
      "Exame Clínico Prostático (Toque Retal)"
    ],
    beneficios: [
      {
        title: "Prevenção de Câncer de Próstata",
        description: "Rastreamento preventivo anual essencial para homens a partir de 45 ou 50 anos."
      },
      {
        title: "Tratamento de Pedras nos Rins",
        description: "Diagnóstico por ultrassom e conduta clínica para aliviar a cólica renal e expelir cálculos."
      },
      {
        title: "Saúde Sexual Masculina",
        description: "Tratamento de disfunção erétil, ejaculação precoce e reposição de testosterona na andropausa."
      }
    ],
    faqs: [
      {
        question: "Com que idade o homem deve iniciar os exames preventivos da próstata em Irecê?",
        answer: "A partir dos 50 anos para homens sem histórico familiar da doença. Se houver parentes de primeiro grau com histórico de câncer de próstata ou se o homem for negro, o rastreamento deve começar aos 45 anos."
      },
      {
        question: "O exame de sangue PSA substitui o exame de toque retal?",
        answer: "Não. Eles são exames complementares. Cerca de 10% a 20% dos casos de câncer de próstata são detectados no toque mesmo com PSA normal, por isso a realização de ambos é fundamental."
      },
      {
        question: "Mulheres também se consultam com urologista?",
        answer: "Sim. O urologista trata problemas do trato urinário feminino, como infecções urinárias recorrentes, cálculos renais e incontinência urinária."
      },
      {
        question: "Como evitar a formação de cálculos renais (pedras nos rins)?",
        answer: "Beba cerca de 2,5 litros de água por dia (para manter a urina clara), reduza o consumo de sal e evite alimentos embutidos e o excesso de proteínas animais."
      },
      {
        question: "Quais os sintomas de uma infecção urinária de repetição?",
        answer: "Vontade urgente de urinar mesmo com pouca urina, dor na uretra, odor forte e, em alguns casos, incontinência. Ter mais de três episódios no ano exige investigação urológica."
      }
    ],
    keywords: "urologista irece, consulta urologista irece, exame de próstata irece, tratamento calculo renal irece, clinica urologia irece",
    titleSeo: "Urologista em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Marque sua consulta com urologista em Irecê no Centro Médico da Bahia. Prevenção do câncer de próstata, tratamento de pedras nos rins e infecções urinárias.",
    schemaMedicalSpecialty: "Urology",
    icon: Shield
  },
  {
    nome: "Geriatria",
    slug: "geriatria",
    descricao: "A Geriatria é a especialidade médica dedicada ao cuidado da saúde do idoso, promovendo o envelhecimento saudável, a prevenção de doenças e a manutenção da independência funcional. O geriatra avalia a saúde física, cognitiva e emocional do paciente, gerenciando o uso de múltiplos medicamentos (polifarmácia) e acompanhando síndromes geriátricas como quedas e perdas de memória. O Centro Médico da Bahia oferece consulta com geriatra em Irecê com foco em respeito, acolhimento e qualidade de vida.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Perda progressiva de memória que interfere no cotidiano",
      "Episódios recorrentes de tontura, desequilíbrio ou quedas frequentes",
      "Perda de peso involuntária ou diminuição acentuada do apetite",
      "Tristeza, isolamento social, desinteresse ou apatia no dia a dia",
      "Uso de cinco ou mais medicamentos diariamente (polifarmácia)",
      "Dificuldade de locomoção, fraqueza nas pernas ou dores articulares crônicas"
    ],
    exames: [
      "Avaliação Geriátrica Ampla (Cognitiva, Funcional, Nutricional)",
      "Exames de Sangue Metabólicos (Perfil Lipídico, Vitaminas B12 e D)",
      "Monitoramento Clínico de Marcha e Equilíbrio",
      "Dosagem de Função Renal e Hepática"
    ],
    beneficios: [
      {
        title: "Prevenção de Quedas",
        description: "Avaliação do equilíbrio corporal e força muscular para prevenir fraturas de fêmur e perda de mobilidade."
      },
      {
        title: "Ajuste de Medicamentos",
        description: "Revisão periódica de receitas para eliminar interações medicamentosas perigosas no organismo do idoso."
      },
      {
        title: "Envelhecer com Saúde",
        description: "Foco na preservação da capacidade do idoso de realizar suas atividades de forma autônoma."
      }
    ],
    faqs: [
      {
        question: "Quando é o momento certo para começar a se consultar com um geriatra em Irecê?",
        answer: "A partir dos 60 anos, idade em que se inicia a terceira idade no Brasil. O acompanhamento pode começar antes (aos 50 anos) para planejar um envelhecimento ativo e saudável."
      },
      {
        question: "O que é a Avaliação Geriátrica Ampla (AGA)?",
        answer: "É uma avaliação multidimensional detalhada que analisa a capacidade física, o funcionamento mental (memória), o estado nutricional, as condições sociais e ambientais do idoso."
      },
      {
        question: "Como prevenir quedas em idosos dentro de casa?",
        answer: "Remova tapetes soltos, melhore a iluminação dos corredores e banheiros, instale barras de apoio no box e evite usar calçados sem solado antiderrapante ou abertos atrás."
      },
      {
        question: "O idoso tomar muitos remédios é perigoso? O que o geriatra faz?",
        answer: "Sim, isso é chamado de polifarmácia e aumenta o risco de efeitos colaterais e quedas. O geriatra faz a conciliação medicamentosa, retirando remédios desnecessários com segurança."
      },
      {
        question: "Como diferenciar o esquecimento comum de um quadro de Alzheimer?",
        answer: "Esquecer onde deixou a chave é comum. Esquecer a utilidade da chave ou perder-se em caminhos conhecidos são sinais de alerta para demências que devem ser investigados pelo geriatra."
      }
    ],
    keywords: "geriatra irece, consulta geriatra irece, clinica geriatria irece, envelhecimento saudavel irece, medico de idoso irece",
    titleSeo: "Geriatria em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Agende consulta com geriatra em Irecê no Centro Médico da Bahia. Envelhecimento saudável, avaliação de memória, prevenção de quedas e qualidade de vida na terceira idade.",
    schemaMedicalSpecialty: "Geriatric",
    icon: Users
  },
  {
    nome: "Infectologia",
    slug: "infectologia",
    descricao: "A Infectologia é a especialidade responsável por diagnosticar, tratar e prevenir doenças causadas por micro-organismos, como vírus, bactérias, fungos e parasitas. Atuando desde o tratamento de infecções bacterianas graves e resistentes até o acompanhamento de hepatites virais, HIV/AIDS, tuberculose, arboviroses (dengue, zika) e infecções urinárias recorrentes, o infectologista é crucial para a saúde pública e individual. No Centro Médico da Bahia, oferecemos consulta com infectologista em Irecê com máxima discrição e suporte clínico completo.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Febre prolongada, recorrente ou de origem desconhecida",
      "Infecções recorrentes que não melhoram com antibióticos comuns",
      "Feridas com inflamação crônica, pus ou vermelhidão que se espalha",
      "Exposição a materiais biológicos ou suspeita de ISTs",
      "Tosse persistente há semanas acompanhada de suores noturnos",
      "Diarreia crônica após viagens para regiões de risco sanitário"
    ],
    exames: [
      "Sorologias Completas (HIV, Hepatites, Sífilis)",
      "Hemograma e Marcadores Inflamatórios (PCR, VHS)",
      "Exames de Cultura com Antibiograma",
      "Testes Moleculares de Detecção Rápida"
    ],
    beneficios: [
      {
        title: "Uso Correto de Antibióticos",
        description: "Orientação precisa para tratar infecções sem provocar resistência bacteriana no organismo."
      },
      {
        title: "Acompanhamento Preventivo",
        description: "Orientações sobre imunização (vacinas) para viagens internacionais e profilaxia pós-exposição."
      },
      {
        title: "Controle de Doenças Crônicas",
        description: "Tratamento moderno para manter o HIV sob controle (indetectável) e curar hepatites virais."
      }
    ],
    faqs: [
      {
        question: "O que faz um médico infectologista e quando devo procurá-lo em Irecê?",
        answer: "O infectologista trata qualquer infecção no corpo (pele, pulmão, urina, ossos) que seja de difícil resolução, infecções por vírus (como HIV e herpes), micoses profundas e febres inexplicáveis."
      },
      {
        question: "O que é a Profilaxia Pós-Exposição (PEP)?",
        answer: "É um tratamento com medicamentos antirretrovirais para prevenir a infecção pelo HIV após uma situação de risco (relação sexual sem camisinha ou acidente com agulha). Deve ser iniciada em até 72h."
      },
      {
        question: "Por que não devo tomar antibióticos por conta própria?",
        answer: "O uso incorreto ou desnecessário elimina as bactérias fracas e seleciona as resistentes. Com o tempo, infecções simples podem se tornar intratáveis por falta de antibióticos eficazes."
      },
      {
        question: "Como é transmitida a Hepatite B e C e quais são os sintomas?",
        answer: "A transmissão ocorre por sangue contaminado (compartilhamento de alicates, agulhas) ou relações sexuais desprotegidas. Costumam ser doenças silenciosas que danificam o fígado lentamente."
      },
      {
        question: "Quais vacinas o adulto deve tomar para se prevenir?",
        answer: "Adultos devem manter em dia as vacinas contra Tétano/Difteria (Dupla Adulta), Hepatite B, Tríplice Viral (Sarampo, Caxumba, Rubéola) e Febre Amarela."
      }
    ],
    keywords: "infectologista irece, consulta infectologia irece, tratamento de infeccao irece, teste de hiv irece, clinica infectologia irece",
    titleSeo: "Infectologia em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Agende sua consulta com infectologista em Irecê no Centro Médico da Bahia. Diagnóstico e tratamento de infecções graves, hepatites virais e orientação vacinal.",
    schemaMedicalSpecialty: "Infectious",
    icon: ShieldAlert
  },
  {
    nome: "Nefrologia",
    slug: "nefrologia",
    descricao: "A Nefrologia é a especialidade médica que se dedica ao diagnóstico e tratamento clínico das doenças do sistema renal, incluindo os rins e as vias urinárias. Responsável por acompanhar pacientes com hipertensão de difícil controle, diabetes com impacto renal, infecções urinárias de repetição, cálculos renais frequentes e insuficiência renal crônica, o nefrologista atua diretamente para preservar a função de filtragem dos rins. O Centro Médico da Bahia oferece consulta com nefrologista em Irecê com foco em diagnóstico precoce e prevenção da falência renal.",
    imagem: "/imagens/fachada.webp",
    sintomas: [
      "Inchaço constante nas pernas, pés, mãos e ao redor dos olhos (edema)",
      "Alterações na urina, como cor muito escura, espuma em excesso ou dor",
      "Cansaço frequente, fraqueza inexplicável, anemia sem causa clara",
      "Pressão arterial que permanece muito alta mesmo usando remédios",
      "Dores frequentes nas costas, na região lombar baixa",
      "Cãibras musculares inexplicáveis e coceira generalizada na pele"
    ],
    exames: [
      "Dosagem de Creatinina e Ureia (Exame de Sangue)",
      "Exame de Urina Tipo 1 e Microalbuminúria",
      "Ultrassonografia de Rins e Vias Urinárias",
      "Taxa de Filtração Glomerular Estimada (TFGe)"
    ],
    beneficios: [
      {
        title: "Evitar a Hemodiálise",
        description: "Tratamento precoce da doença renal crônica para desacelerar a perda de função do órgão e evitar a necessidade de diálise."
      },
      {
        title: "Controle Renal no Diabetes",
        description: "Monitoramento de proteínas na urina (microalbuminúria) para proteger os rins dos efeitos da glicemia alta."
      },
      {
        title: "Prevenção de Cálculos Recorrentes",
        description: "Investigação metabólica da urina para descobrir por que o paciente forma pedras nos rins e evitar novas crises."
      }
    ],
    faqs: [
      {
        question: "Qual a diferença entre o urologista e o nefrologista?",
        answer: "O nefrologista trata clinicamente as doenças dos rins (como perda de função renal, nefrites, controle de pressão e diabetes). O urologista é um cirurgião que trata problemas anatômicos e cirúrgicos (como pedras nos rins obstrutivas, tumores, próstata e bexiga)."
      },
      {
        question: "Como o diabetes e a pressão alta prejudicam os rins?",
        answer: "Ambas as doenças danificam os minúsculos vasos sanguíneos responsáveis pela filtragem do sangue nos rins (os glomérulos). Com o tempo, os rins perdem a capacidade de filtrar as toxinas do corpo."
      },
      {
        question: "O que é o exame de Creatinina e por que ele é tão importante?",
        answer: "A creatinina é um resíduo produzido pelos músculos e filtrado pelos rins. Se os níveis de creatinina no sangue estiverem altos, significa que os rins não estão filtrando o sangue corretamente."
      },
      {
        question: "Quais são os sinais de que os rins não estão funcionando bem?",
        answer: "A doença renal é silenciosa nas fases iniciais. Nas fases avançadas, surgem inchaço nas pernas e rosto, urina com muita espuma, fadiga extrema, perda de apetite, náuseas e anemia."
      },
      {
        question: "Quanta água devo beber para manter os rins saudáveis?",
        answer: "Para adultos saudáveis, recomenda-se beber de 2 a 3 litros de água por dia. Isso ajuda a diluir as substâncias na urina que podem formar cristais e cálculos."
      }
    ],
    keywords: "nefrologista irece, consulta nefrologista irece, clinica nefrologia irece, exame de creatinina irece, pedra nos rins nefrologista irece",
    titleSeo: "Nefrologia em Irecê - BA | Centro Médico da Bahia",
    metaDescription: "Marque consulta com nefrologista em Irecê no Centro Médico da Bahia. Diagnóstico precoce de insuficiência renal, nefrites, exames de creatinina e urina.",
    schemaMedicalSpecialty: "Renal",
    icon: Activity
  }
];
