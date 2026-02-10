import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      <div className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">Contato & Localização</h1>
          <p className="mt-4 text-lg text-slate-500">
            Estamos prontos para atender você.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Informações de Contato</h2>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary-100 rounded-lg p-3">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-slate-900">Endereço</h3>
                <p className="text-slate-600 mt-1">{CONTACT_INFO.address}</p>
                <p className="text-sm text-slate-500 mt-1">Próximo ao Centro Comercial</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary-100 rounded-lg p-3">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-slate-900">Telefones</h3>
                <p className="text-slate-600 mt-1">Fixo: {CONTACT_INFO.phone}</p>
                <p className="text-slate-600">WhatsApp: {CONTACT_INFO.whatsapp}</p>
                <a
                  href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 text-sm text-primary-600 font-semibold hover:underline"
                >
                  Iniciar conversa agora &rarr;
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary-100 rounded-lg p-3">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-slate-900">E-mail</h3>
                <p className="text-slate-600 mt-1">{CONTACT_INFO.email}</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary-100 rounded-lg p-3">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-slate-900">Horário de Funcionamento</h3>
                <p className="text-slate-600 mt-1">{CONTACT_INFO.hours}</p>
              </div>
            </div>

            {/* Map moved to bottom or side */}
            <div className="mt-8 h-64 bg-slate-100 rounded-xl overflow-hidden shadow-inner border border-slate-200 relative">
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <img
                  src="https://picsum.photos/seed/mapa/800/600"
                  alt="Mapa da localização"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute bg-white p-3 rounded-lg shadow-lg text-center">
                  <p className="font-bold text-slate-900 text-xs text-center">CMB - Centro Médico</p>
                  <Button variant="outline" className="mt-1 text-[10px] py-1 px-2 h-auto" onClick={() => window.open(`https://maps.google.com/?q=${CONTACT_INFO.address}`)}>
                    Abrir no Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Envie uma mensagem</h2>
            <form className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nome</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-3" placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700">WhatsApp</label>
                <input type="tel" id="whatsapp" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-3" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label htmlFor="msg" className="block text-sm font-medium text-slate-700">Mensagem</label>
                <textarea id="msg" rows={4} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-3" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <Button className="w-full">Enviar Mensagem</Button>
            </form>
          </div>

        </div>
      </Section>

      {/* Final CTA */}
      <div className="bg-primary-50 py-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Ainda tem dúvidas?</h2>
        <a href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">
          <Button variant="whatsapp">Falar com Atendente</Button>
        </a>
      </div>
    </>
  );
};