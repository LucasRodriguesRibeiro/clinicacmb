import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ESPECIALIDADES } from '../data/especialidades';
import { DOCTORS } from '../constants';
import { BreadcrumbEspecialidade } from '../components/especialidades/BreadcrumbEspecialidade';
import { HeroEspecialidade } from '../components/especialidades/HeroEspecialidade';
import { SobreEspecialidade } from '../components/especialidades/SobreEspecialidade';
import { SintomasEspecialidade } from '../components/especialidades/SintomasEspecialidade';
import { ExamesEspecialidade } from '../components/especialidades/ExamesEspecialidade';
import { BeneficiosEspecialidade } from '../components/especialidades/BeneficiosEspecialidade';
import { MedicosEspecialidade } from '../components/especialidades/MedicosEspecialidade';
import { FAQEspecialidade } from '../components/especialidades/FAQEspecialidade';
import { CTAEspecialidade } from '../components/especialidades/CTAEspecialidade';

export const Especialidade: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find the requested specialty
  const specialty = ESPECIALIDADES.find((item) => item.slug === slug);

  // If specialty is not found, redirect to home page
  if (!specialty) {
    return <Navigate to="/" replace />;
  }

  // Find doctors for this specialty to use their photo in the hero banner
  const getDoctorsForSpecialty = (specSlug: string) => {
    return DOCTORS.filter((doc) => {
      const spec = doc.specialty.toLowerCase();
      if (specSlug === 'ortopedia') return spec.includes('ortoped');
      if (specSlug === 'pediatria') return spec.includes('pediat');
      if (specSlug === 'ginecologia') return spec.includes('ginec');
      if (specSlug === 'cardiologia') return spec.includes('cardio');
      if (specSlug === 'alergologia') return spec.includes('alerg');
      return false;
    });
  };

  const filteredDoctors = getDoctorsForSpecialty(specialty.slug);
  const doctor = filteredDoctors.length > 0 ? filteredDoctors[0] : null;

  return (
    <div className="flex flex-col overflow-x-hidden w-full bg-white">
      <BreadcrumbEspecialidade nome={specialty.nome} />
      <HeroEspecialidade
        nome={specialty.nome}
        titleSeo={specialty.titleSeo}
        imagem={specialty.imagem}
        doctorPhoto={doctor ? doctor.photo : null}
        doctorName={doctor ? doctor.name : null}
        doctorPhotoPosition={doctor ? doctor.photoPosition : undefined}
      />
      <SobreEspecialidade nome={specialty.nome} descricao={specialty.descricao} />
      <SintomasEspecialidade nome={specialty.nome} sintomas={specialty.sintomas} />
      <ExamesEspecialidade nome={specialty.nome} exames={specialty.exames} />
      <BeneficiosEspecialidade nome={specialty.nome} beneficios={specialty.beneficios} />
      
      {/* Diferenciais do Centro Médico da Bahia */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Diferenciais do Centro Médico da Bahia
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Veja por que somos a clínica de referência no atendimento médico em Irecê e região.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 border border-slate-100/50 rounded-2xl hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#0055A4] text-base sm:text-lg mb-2">Atendimento Humanizado</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Priorizamos o carinho, a empatia e a escuta ativa para entender você e sua saúde.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100/50 rounded-2xl hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#0055A4] text-base sm:text-lg mb-2">Equipe Médica Habilitada</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Profissionais titulados, experientes e sempre prontos para o melhor cuidado.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100/50 rounded-2xl hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#0055A4] text-base sm:text-lg mb-2">Estrutura Moderna</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Equipamentos de última geração e consultórios aconchegantes para seu conforto.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100/50 rounded-2xl hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#0055A4] text-base sm:text-lg mb-2">Agendamento Ágil</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Marque de forma simples pelo WhatsApp, sem burocracias ou esperas longas.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100/50 rounded-2xl hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#0055A4] text-base sm:text-lg mb-2">Localização Privilegiada</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Fácil acesso no centro da cidade, garantindo conveniência para Irecê e entorno.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100/50 rounded-2xl hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#0055A4] text-base sm:text-lg mb-2">Especialidades Integradas</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Consultas e exames diagnósticos complementares no mesmo local.</p>
            </div>
          </div>
        </div>
      </section>

      <MedicosEspecialidade nome={specialty.nome} slug={specialty.slug} />
      <FAQEspecialidade nome={specialty.nome} faqs={specialty.faqs} />
      <CTAEspecialidade nome={specialty.nome} />
    </div>
  );
};
export default Especialidade;
