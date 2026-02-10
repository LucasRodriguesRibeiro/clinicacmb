import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { CONTACT_INFO, SPECIALTIES, EXAMS, FAQS } from '../constants';
import { FaqAccordion } from '../components/FaqAccordion';
import { MessageCircle } from 'lucide-react';

export const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the message
    const message = `Olá, vim pelo site da Clínica CMB. Gostaria de solicitar um agendamento.
    
*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Serviço de Interesse:* ${formData.service}
${formData.message ? `*Observações:* ${formData.message}` : ''}`;

    // Create WhatsApp Link
    const whatsappUrl = `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Agendamento</h1>
          <p className="mt-2 text-slate-400">Escolha a melhor forma de marcar sua consulta ou exame.</p>
        </div>
      </div>

      <Section background="white">
        {/* Steps */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">Como agendar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-2xl mb-4 border-4 border-white shadow-lg z-10">1</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Escolha o Serviço</h3>
              <p className="text-slate-600 text-sm">Navegue por nossas especialidades e exames.</p>
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-slate-200 -z-0"></div>
            </div>
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-2xl mb-4 border-4 border-white shadow-lg z-10">2</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Fale no WhatsApp</h3>
              <p className="text-slate-600 text-sm">Clique no botão e fale direto com a recepção.</p>
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-slate-200 -z-0"></div>
            </div>
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-2xl mb-4 border-4 border-white shadow-lg z-10">3</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Confirme o Horário</h3>
              <p className="text-slate-600 text-sm">Receba as instruções e venha para o CMB.</p>
            </div>
          </div>
        </div>

        {/* What to bring */}
        <div className="max-w-3xl mx-auto bg-primary-50 p-6 rounded-xl border border-primary-100 mb-12">
          <h3 className="font-bold text-lg text-primary-800 mb-3 flex items-center">
            <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">!</span>
            O que levar no dia?
          </h3>
          <ul className="list-disc list-inside text-primary-700 space-y-1 ml-2">
            <li>Documento de identificação com foto (RG/CNH);</li>
            <li>Carteirinha do convênio (se houver);</li>
            <li>Pedido médico (para exames);</li>
            <li>Exames anteriores (se houver).</li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Option 1: WhatsApp (Recommended) */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center h-fit">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-green-900 mb-4">Agendamento Rápido</h2>
            <p className="text-green-800 mb-8">
              A forma mais rápida de agendar é falando direto com nossa atendente. Tire dúvidas sobre convênios e horários na hora.
            </p>
            <a href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent("Olá, vim pelo site da Clínica CMB.")}`} target="_blank" rel="noreferrer">
              <Button variant="whatsapp" className="w-full py-4 text-lg shadow-lg">
                Chamar no WhatsApp
              </Button>
            </a>
            <p className="mt-4 text-sm text-green-700">Atendimento: {CONTACT_INFO.hours}</p>
          </div>

          {/* Option 2: Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Ou solicite uma ligação</h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-3"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-3"
                  placeholder="(71) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700">O que você precisa?</label>
                <select
                  name="service"
                  id="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-3 bg-white"
                >
                  <option value="">Selecione uma opção</option>
                  <optgroup label="Especialidades">
                    {SPECIALTIES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  </optgroup>
                  <optgroup label="Exames">
                    {EXAMS.map(e => <option key={e.id} value={e.title}>{e.title}</option>)}
                  </optgroup>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Observações (Opcional)</label>
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-3"
                  placeholder="Preferência de horário, dúvida, etc."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full" isLoading={isSubmitting}>
                Solicitar Agendamento
              </Button>
              <p className="text-xs text-slate-500 text-center mt-2">
                Nossa equipe entrará em contato para confirmar o horário disponível.
              </p>
            </form>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900">Perguntas Frequentes</h2>
          <p className="text-slate-600">Tire suas dúvidas antes de agendar</p>
        </div>
        <FaqAccordion items={FAQS} />
      </Section>
    </>
  );
};