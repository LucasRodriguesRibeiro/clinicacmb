import React from 'react';
import { useLocation } from 'react-router-dom';
import { MetaTags } from './MetaTags';
import { StructuredData } from './StructuredData';
import routesData from '../routes.json';
import { DOCTORS, FAQS } from '../../constants';
import { ESPECIALIDADES } from '../../data/especialidades';
import { getMedicalClinicSchema } from '../schemas/medicalClinic';
import { getPhysicianSchema, getDoctorsListSchema } from '../schemas/physician';
import { getFaqSchema } from '../schemas/faq';
import { getBreadcrumbSchema } from '../schemas/breadcrumb';

interface RouteSEO {
  path: string;
  title: string;
  description: string;
  changefreq: string;
  priority: number;
  keywords: string;
}

export const SEOManager: React.FC = () => {
  const { pathname } = useLocation();
  const url = 'https://cmbclinica.com.br';

  // 1. Identify current route metadata
  let currentMeta: RouteSEO | null = null;
  let isDoctorRoute = false;
  let isSpecialtyRoute = false;
  let matchedDoctor: typeof DOCTORS[0] | null = null;
  let matchedSpecialty: typeof ESPECIALIDADES[0] | null = null;

  // Check static routes
  const matchedRoute = (routesData as RouteSEO[]).find(
    (r) => r.path === pathname || (r.path !== '/' && pathname.startsWith(r.path))
  );

  if (matchedRoute) {
    currentMeta = matchedRoute;
  }

  // Check specialty route: /especialidades/:slug
  const specialtyMatch = pathname.match(/^\/especialidades\/([a-zA-Z0-9-]+)$/);
  if (specialtyMatch) {
    const specSlug = specialtyMatch[1];
    const spec = ESPECIALIDADES.find((s) => s.slug === specSlug);
    if (spec) {
      isSpecialtyRoute = true;
      matchedSpecialty = spec;
      currentMeta = {
        path: pathname,
        title: spec.titleSeo,
        description: spec.metaDescription,
        changefreq: 'monthly',
        priority: 0.8,
        keywords: spec.keywords
      };
    }
  }

  // Check doctor route: /medicos/:id
  const doctorMatch = pathname.match(/^\/medicos\/([a-zA-Z0-9-]+)$/);
  if (doctorMatch) {
    const docId = doctorMatch[1];
    const doc = DOCTORS.find((d) => d.id === docId);
    if (doc) {
      isDoctorRoute = true;
      matchedDoctor = doc;
      currentMeta = {
        path: pathname,
        title: `${doc.name} - ${doc.specialty} em Jussara - BA | CMB Clínica`,
        description: `Agende sua consulta com ${doc.name}, especialista em ${doc.specialty} no Centro Médico da Bahia (CMB) em Jussara - BA. Atendimento humanizado e de confiança.`,
        changefreq: 'monthly',
        priority: 0.8,
        keywords: `${doc.name.toLowerCase()}, ${doc.specialty.toLowerCase()} jussara, cmb clinica medicos, medico jussara ba`
      };
    }
  }

  // Fallback metadata if not matched
  if (!currentMeta) {
    currentMeta = (routesData as RouteSEO[]).find((r) => r.path === '/') || {
      path: '/',
      title: 'CMB - Centro Médico da Bahia',
      description: 'Agende sua consulta ou exame no CMB - Centro Médico da Bahia.',
      changefreq: 'weekly',
      priority: 1.0,
      keywords: 'clinica cmb, centro medico da bahia'
    };
  }

  const canonicalUrl = `${url}${pathname}`;

  // 2. Select schemas to render
  const schemas: object[] = [];

  // Breadcrumbs schema for all pages
  const breadcrumbItems = [
    { name: 'Início', item: `${url}/` }
  ];
  if (pathname !== '/') {
    if (isDoctorRoute && matchedDoctor) {
      breadcrumbItems.push({ name: 'Corpo Clínico', item: `${url}/corpo-clinico` });
      breadcrumbItems.push({ name: matchedDoctor.name, item: canonicalUrl });
    } else if (isSpecialtyRoute && matchedSpecialty) {
      breadcrumbItems.push({ name: 'Especialidades', item: `${url}/#especialidades` });
      breadcrumbItems.push({ name: matchedSpecialty.nome, item: canonicalUrl });
    } else if (pathname === '/exames' || pathname === '/exames-em-jussara') {
      breadcrumbItems.push({ name: 'Exames em Jussara', item: `${url}/exames-em-jussara` });
    } else {
      const pageName = pathname === '/corpo-clinico' ? 'Corpo Clínico' :
                       pathname === '/contato' ? 'Contato' : 'Página';
      breadcrumbItems.push({ name: pageName, item: canonicalUrl });
    }
  }
  schemas.push(getBreadcrumbSchema(breadcrumbItems));

  // Page-specific schemas
  if (pathname === '/') {
    // MedicalClinic combined graph (MedicalClinic, LocalBusiness, Organization, WebSite, SearchAction)
    schemas.push(getMedicalClinicSchema());
    // FAQ Schema
    schemas.push(getFaqSchema(FAQS));
    // Doctor list
    schemas.push(getDoctorsListSchema(DOCTORS));
  } else if (pathname === '/exames' || pathname === '/exames-em-jussara') {
    // MedicalClinic + LocalBusiness schema for exam page
    schemas.push(getMedicalClinicSchema());
    // FAQ sobre exames
    const examFaqs = [
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
        answer: 'O preparo varia conforme o tipo (ex: jejum, bexiga cheia). Ao agendar, nossa equipe enviará todas as instruções detalhadas via WhatsApp.'
      },
      {
        question: 'Quais convênios a CMB aceita para exames?',
        answer: 'Atendemos diversos convênios e também particular com valores acessíveis. Entre em contato pelo WhatsApp para verificar a cobertura do seu plano.'
      },
      {
        question: 'Posso agendar exame para outra pessoa?',
        answer: 'Sim! Você pode agendar exames para familiares ou dependentes pelo nosso WhatsApp. Basta informar o nome do paciente e o tipo de exame desejado.'
      }
    ];
    schemas.push(getFaqSchema(examFaqs));
  } else if (pathname === '/corpo-clinico') {
    schemas.push(getDoctorsListSchema(DOCTORS));
  } else if (isDoctorRoute && matchedDoctor) {
    schemas.push(getPhysicianSchema(matchedDoctor));
  } else if (isSpecialtyRoute && matchedSpecialty) {
    // MedicalClinic info
    schemas.push(getMedicalClinicSchema());
    // Specialty FAQ
    schemas.push(getFaqSchema(matchedSpecialty.faqs));

    // Dynamic Physician schema injection for matching doctors
    const getDoctorsForSpecialty = (specSlug: string) => {
      return DOCTORS.filter((doc) => {
        const spec = doc.specialty.toLowerCase();
        if (specSlug === 'ortopedia') return spec.includes('ortoped');
        if (specSlug === 'pediatria') return spec.includes('pediat');
        if (specSlug === 'ginecologia') return spec.includes('ginec');
        if (specSlug === 'cardiologia') return spec.includes('cardio');
        if (specSlug === 'alergologia') return spec.includes('alerg');
        if (specSlug === 'ortodontia') return spec.includes('ortodon');
        if (specSlug === 'odontologia') return spec.includes('cirurgi') || spec.includes('dentista');
        if (specSlug === 'clinica-geral') return spec.includes('clínico') || spec.includes('clinico');
        return false;
      });
    };
    const matchedDocs = getDoctorsForSpecialty(matchedSpecialty.slug);
    matchedDocs.forEach((doc) => {
      schemas.push(getPhysicianSchema(doc));
    });
  }

  return (
    <>
      <MetaTags
        title={currentMeta.title}
        description={currentMeta.description}
        canonicalUrl={canonicalUrl}
        keywords={currentMeta.keywords}
        ogImage={isDoctorRoute && matchedDoctor?.photo ? `${url}${matchedDoctor.photo.endsWith('.png') ? matchedDoctor.photo.replace('.png', '.webp') : matchedDoctor.photo}` : undefined}
      />
      {schemas.map((schema, index) => (
        <StructuredData key={index} schema={schema} />
      ))}
    </>
  );
};
export default SEOManager;
