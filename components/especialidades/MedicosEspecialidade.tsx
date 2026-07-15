import React from 'react';
import { motion } from 'framer-motion';
import { CalendarRange, PhoneCall } from 'lucide-react';
import { DOCTORS, CONTACT_INFO } from '../../constants';

interface MedicosEspecialidadeProps {
  nome: string;
  slug: string;
}

export const MedicosEspecialidade: React.FC<MedicosEspecialidadeProps> = ({ nome, slug }) => {
  // Dynamically map doctors from constants to this specialty
  const getDoctorsForSpecialty = () => {
    return DOCTORS.filter((doc) => {
      const spec = doc.specialty.toLowerCase();
      if (slug === 'ortopedia') return spec.includes('ortoped');
      if (slug === 'pediatria') return spec.includes('pediat');
      if (slug === 'ginecologia') return spec.includes('ginec');
      if (slug === 'cardiologia') return spec.includes('cardio');
      if (slug === 'alergologia') return spec.includes('alerg');
      if (slug === 'ortodontia') return spec.includes('ortodon');
      if (slug === 'odontologia') return spec.includes('cirurgi') || spec.includes('dentista');
      if (slug === 'clinica-geral') return spec.includes('clínico') || spec.includes('clinico');
      return false;
    });
  };

  const filteredDoctors = getDoctorsForSpecialty();
  const whatsappUrl = `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá, gostaria de agendar uma consulta em ${nome}.`)}`;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Especialistas em {nome}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            Conheça nossos médicos que atendem a especialidade de {nome} no Centro Médico da Bahia em Irecê.
          </p>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="flex flex-wrap gap-6 justify-center">
            {filteredDoctors.map((doctor, index) => (
              <div
                key={doctor.id}
                className="group bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col w-full max-w-[350px]"
              >
                {/* Gradient header background */}
                <div className="bg-gradient-to-br from-[#0a376c] to-[#0e4d96] pt-8 pb-14 flex justify-center relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full"></div>
                </div>

                {/* Avatar */}
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

                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 text-[#0a376c] bg-blue-50 border border-blue-100">
                    {doctor.specialty}
                  </span>

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
              </div>
            ))}
          </div>
        ) : (
          /* Fallback structure when no doctor is assigned yet */
          <div className="max-w-2xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 text-center shadow-sm">
            <div className="w-16 h-16 bg-blue-50 text-[#0055A4] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CalendarRange className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Atendimento sob Agendamento</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Nossos especialistas em <strong>{nome} em Irecê</strong> atendem em dias programados. Entre em contato com a nossa equipe no WhatsApp para consultar datas disponíveis e agendar sua avaliação.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#0055A4] hover:bg-[#003c75] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
            >
              <PhoneCall className="w-4.5 h-4.5" />
              Consultar datas no WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
export default MedicosEspecialidade;
