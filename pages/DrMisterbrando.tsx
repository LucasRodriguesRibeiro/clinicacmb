import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { StructuredData } from '../seo/components/StructuredData';

// WhatsApp SVG icon
const WaIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.79L2.05 22l5.44-1.43c1.38.75 2.95 1.18 4.55 1.18 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.52 14.17c-.23.63-.67 1.16-1.19 1.44-.44.24-1 .38-1.84.06-1.14-.46-2.28-1.47-3.14-2.33-.86-.86-1.87-2-2.33-3.14-.32-.84-.18-1.4.06-1.84.28-.52.81-.96 1.44-1.19.2-.07.38-.05.51.06.13.11.28.34.44.65.17.35.33.68.39.8.07.14.04.25-.02.36-.07.11-.13.2-.26.33-.13.13-.28.3-.4.44-.12.14-.26.3-.11.57.15.27.67 1.12 1.44 1.82.77.7 1.43 1.08 1.72 1.2.27.11.42.09.58-.06.15-.15.54-.64.68-.86.14-.22.26-.18.44-.11.18.07 1.13.53 1.33.62.2.1.33.14.38.22.05.28.05.7-.18 1.33z"/>
  </svg>
);

// Shield icon
const ShieldIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#0055A4" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// Heart icon
const HeartIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#0055A4" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

// Clock icon
const ClockIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#0055A4" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M12 6v6l4 2"/>
  </svg>
);

// Arrow Right icon
const ArrowIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
);

// Calendar icon
const CalIcon = () => (
  <svg width="28" height="28" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeDasharray="4 2"/>
    <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);

// MapPin icon
const MapIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);

// Phone icon
const PhoneIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
);

// Custom Spine SVG (anatomical, matches mockup)
const IconColuna = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="2" width="8" height="6" rx="2" stroke="#0055A4" strokeWidth="1.6"/>
    <rect x="18" y="11" width="8" height="6" rx="2" stroke="#0055A4" strokeWidth="1.6"/>
    <rect x="18" y="20" width="8" height="6" rx="2" stroke="#0055A4" strokeWidth="1.6"/>
    <rect x="18" y="29" width="8" height="6" rx="2" stroke="#0055A4" strokeWidth="1.6"/>
    <rect x="18" y="38" width="8" height="4" rx="2" stroke="#0055A4" strokeWidth="1.6"/>
    <line x1="22" y1="8" x2="22" y2="11" stroke="#0055A4" strokeWidth="1.6"/>
    <line x1="22" y1="17" x2="22" y2="20" stroke="#0055A4" strokeWidth="1.6"/>
    <line x1="22" y1="26" x2="22" y2="29" stroke="#0055A4" strokeWidth="1.6"/>
    <line x1="22" y1="35" x2="22" y2="38" stroke="#0055A4" strokeWidth="1.6"/>
    <line x1="12" y1="5" x2="18" y2="5" stroke="#0055A4" strokeWidth="1.4"/>
    <line x1="26" y1="5" x2="32" y2="5" stroke="#0055A4" strokeWidth="1.4"/>
    <line x1="10" y1="14" x2="18" y2="14" stroke="#0055A4" strokeWidth="1.4"/>
    <line x1="26" y1="14" x2="34" y2="14" stroke="#0055A4" strokeWidth="1.4"/>
    <line x1="12" y1="23" x2="18" y2="23" stroke="#0055A4" strokeWidth="1.4"/>
    <line x1="26" y1="23" x2="32" y2="23" stroke="#0055A4" strokeWidth="1.4"/>
  </svg>
);

const IconJoelho = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 4 C14 4, 10 10, 10 18 C10 24, 13 28, 18 30 L18 40" stroke="#0055A4" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M22 4 C30 4, 34 10, 34 18 C34 24, 31 28, 26 30 L26 40" stroke="#0055A4" strokeWidth="1.8" strokeLinecap="round"/>
    <ellipse cx="22" cy="18" rx="6" ry="7" stroke="#0055A4" strokeWidth="1.6" fill="none"/>
    <line x1="18" y1="40" x2="26" y2="40" stroke="#0055A4" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconOmbro = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="12" r="7" stroke="#0055A4" strokeWidth="1.8" fill="none"/>
    <path d="M15 12 C8 12, 5 16, 5 22 C5 28, 8 34, 14 36" stroke="#0055A4" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <path d="M22 19 L22 38" stroke="#0055A4" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M16 36 L28 36" stroke="#0055A4" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconEsportivo = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="8" r="4" stroke="#0055A4" strokeWidth="1.8" fill="none"/>
    <path d="M20 18 L26 14 L32 20 L38 16" stroke="#0055A4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 18 L16 28 L10 32" stroke="#0055A4" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M24 24 L28 34 L34 38" stroke="#0055A4" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M18 20 L26 22" stroke="#0055A4" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const IconQuadril = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 14 C10 8, 16 4, 22 4 C28 4, 34 8, 34 14 C34 22, 28 30, 22 32 C16 30, 10 22, 10 14Z" stroke="#0055A4" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
    <circle cx="14" cy="18" r="4" stroke="#0055A4" strokeWidth="1.6" fill="none"/>
    <circle cx="30" cy="18" r="4" stroke="#0055A4" strokeWidth="1.6" fill="none"/>
    <line x1="14" y1="22" x2="10" y2="40" stroke="#0055A4" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="30" y1="22" x2="34" y2="40" stroke="#0055A4" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconPe = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8 L12 26 C12 30, 14 34, 20 36 L36 36" stroke="#0055A4" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <ellipse cx="12" cy="26" rx="5" ry="4" stroke="#0055A4" strokeWidth="1.6" fill="none"/>
    <circle cx="24" cy="36" r="2" stroke="#0055A4" strokeWidth="1.4" fill="none"/>
    <circle cx="30" cy="36" r="2" stroke="#0055A4" strokeWidth="1.4" fill="none"/>
    <circle cx="36" cy="36" r="2" stroke="#0055A4" strokeWidth="1.4" fill="none"/>
    <line x1="12" y1="4" x2="12" y2="8" stroke="#0055A4" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

// Stepper icons
const IcoAgendamento = () => (
  <svg width="22" height="22" fill="none" stroke="#0055A4" strokeWidth="1.8" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round"/>
    <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IcoAvaliacao = () => (
  <svg width="22" height="22" fill="none" stroke="#0055A4" strokeWidth="1.8" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="4"/>
    <path strokeLinecap="round" d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6"/>
  </svg>
);
const IcoDiagnostico = () => (
  <svg width="22" height="22" fill="none" stroke="#0055A4" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
    <rect x="9" y="3" width="6" height="4" rx="1"/>
    <line x1="9" y1="12" x2="15" y2="12" strokeLinecap="round"/>
    <line x1="9" y1="16" x2="12" y2="16" strokeLinecap="round"/>
  </svg>
);
const IcoTratamento = () => (
  <svg width="22" height="22" fill="none" stroke="#0055A4" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
  </svg>
);

export const DrMisterbrando: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const waNum = CONTACT_INFO.whatsapp.replace(/\D/g, '');
  const waUrl = `https://wa.me/55${waNum}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta de Ortopedia com o Dr. Misterbrando em Jussara.')}`;

  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Mistebrando Machado Gonçalves',
    medicalSpecialty: 'Orthopedic',
    url: 'https://cmbclinica.com.br/drmisterbrando',
    telephone: `+55${waNum}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jussara',
      addressRegion: 'BA',
      addressCountry: 'BR'
    }
  };

  const treatments = [
    { label: 'Coluna', Icon: IconColuna },
    { label: 'Joelho', Icon: IconJoelho },
    { label: 'Ombro', Icon: IconOmbro },
    { label: 'Lesões esportivas', Icon: IconEsportivo },
    { label: 'Quadril', Icon: IconQuadril },
    { label: 'Pé e tornozelo', Icon: IconPe },
  ];

  const steps = [
    { num: 1, label: 'Agendamento', desc: 'Você escolhe o melhor horário pelo WhatsApp.', Icon: IcoAgendamento },
    { num: 2, label: 'Avaliação', desc: 'Entendemos seu caso e realizamos uma avaliação completa.', Icon: IcoAvaliacao },
    { num: 3, label: 'Diagnóstico', desc: 'Identificamos a causa da dor com precisão.', Icon: IcoDiagnostico },
    { num: 4, label: 'Tratamento', desc: 'Plano personalizado para sua recuperação e qualidade de vida.', Icon: IcoTratamento },
  ];

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", background: '#fff', color: '#002241' }}>
      <StructuredData schema={physicianSchema} />

      {/* ───────────── HERO ───────────── */}
      <section style={{
        background: '#fff',
        padding: '0',
        borderBottom: '1px solid #f0f4f8',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 0 0 24px' }}>
          {/* Outer wrapper — relative so photo can absolutely position over the text */}
          <div style={{ position: 'relative', minHeight: 480, display: 'flex', alignItems: 'stretch' }} className="dr-hero-outer">

            {/* ── Blue right panel (background only, no photo inside) ── */}
            <div className="dr-hero-right" style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '48%',
              background: '#E9F2FB',
              borderRadius: '120px 0 0 0',
              zIndex: 0,
            }} />

            {/* ── Left text column ── */}
            <div className="dr-hero-left" style={{
              position: 'relative',
              zIndex: 2,
              width: '55%',
              padding: '40px 24px 40px 0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              {/* Badge */}
              <p className="dr-hero-badge" style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '0.12em',
                color: '#0055A4',
                marginBottom: 12,
                textTransform: 'uppercase',
              }}>
                ESPECIALISTA EM ORTOPEDIA
              </p>

              {/* H1 */}
              <h1 className="dr-hero-h1" style={{
                fontSize: 'clamp(20px, 4vw, 52px)',
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#002241',
                marginBottom: 16,
                letterSpacing: '-0.02em',
              }}>
                Cuide da sua<br />mobilidade.<br />
                <span style={{ color: '#002241' }}>Viva sem dor.</span>
              </h1>

              {/* Sub */}
              <p className="dr-hero-sub" style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.65, marginBottom: 24, maxWidth: 400, fontWeight: 400 }}>
                Agende sua consulta com o{' '}
                <strong style={{ color: '#002241', fontWeight: 700 }}>Dr. Misterbrando</strong>,
                ortopedista em Jussara, e receba um atendimento humanizado e especializado.
              </p>

              {/* CTA Button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dr-hero-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: '#25D366',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: '0.06em',
                  padding: '13px 22px',
                  borderRadius: 999,
                  textDecoration: 'none',
                  marginBottom: 24,
                  boxShadow: '0 4px 20px rgba(37,211,102,0.2)',
                  textTransform: 'uppercase',
                  alignSelf: 'flex-start',
                }}
              >
                <WaIcon />
                AGENDAR PELO WHATSAPP
              </a>

              {/* Trust bar */}
              <div className="dr-trust-bar" style={{
                display: 'flex',
                alignItems: 'center',
                gap: 0,
                background: '#fff',
                border: '1px solid #e8eef4',
                borderRadius: 16,
                padding: '12px 16px',
                maxWidth: 400,
                boxShadow: '0 2px 16px rgba(0,34,65,0.04)',
              }}>
                {/* CRM */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
                  <div className="dr-trust-icon" style={{ width: 34, height: 34, borderRadius: '50%', background: '#f0f6ff', border: '1px solid #e0ecff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ShieldIcon />
                  </div>
                  <div>
                    <p className="dr-trust-label" style={{ fontSize: 10, fontWeight: 800, color: '#002241', letterSpacing: '0.08em', margin: 0, textTransform: 'uppercase' }}>CRM-BA</p>
                    <p className="dr-trust-value" style={{ fontSize: 11, fontWeight: 600, color: '#64748b', margin: 0 }}>11857</p>
                  </div>
                </div>
                <div className="dr-trust-divider" style={{ width: 1, height: 28, background: '#e2e8f0', margin: '0 12px', flexShrink: 0 }} />
                {/* Atendimento */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
                  <div className="dr-trust-icon" style={{ width: 34, height: 34, borderRadius: '50%', background: '#f0f6ff', border: '1px solid #e0ecff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <HeartIcon />
                  </div>
                  <div>
                    <p className="dr-trust-label" style={{ fontSize: 10, fontWeight: 800, color: '#002241', letterSpacing: '0.08em', margin: 0, textTransform: 'uppercase' }}>ATENDIMENTO</p>
                    <p className="dr-trust-value" style={{ fontSize: 11, fontWeight: 600, color: '#64748b', margin: 0 }}>HUMANIZADO</p>
                  </div>
                </div>
                <div className="dr-trust-divider" style={{ width: 1, height: 28, background: '#e2e8f0', margin: '0 12px', flexShrink: 0 }} />
                {/* Agendamento */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
                  <div className="dr-trust-icon" style={{ width: 34, height: 34, borderRadius: '50%', background: '#f0f6ff', border: '1px solid #e0ecff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ClockIcon />
                  </div>
                  <div>
                    <p className="dr-trust-label" style={{ fontSize: 10, fontWeight: 800, color: '#002241', letterSpacing: '0.08em', margin: 0, textTransform: 'uppercase' }}>AGENDAMENTO</p>
                    <p className="dr-trust-value" style={{ fontSize: 11, fontWeight: 600, color: '#64748b', margin: 0 }}>RÁPIDO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Doctor photo — absolutely positioned, overlapping both columns ── */}
            <div style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '52%',
              height: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              zIndex: 3,
              pointerEvents: 'none',
            }} className="dr-photo-wrapper">
              <img
                src="/profissionais/misterbrando-semfundo.webp"
                alt="Dr. Misterbrando Machado Gonçalves — Ortopedista"
                fetchPriority="high"
                loading="eager"
                style={{
                  width: '90%',
                  maxWidth: 420,
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center bottom',
                  display: 'block',
                  filter: 'drop-shadow(0 8px 24px rgba(0,34,65,0.10))',
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ───────────── SECTION 2: O QUE EU TRATO ───────────── */}
      <section style={{ padding: '72px 24px', background: '#fff', borderBottom: '1px solid #f0f4f8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', color: '#0055A4', textTransform: 'uppercase', marginBottom: 12 }}>
            O QUE EU TRATO
          </p>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 900, color: '#002241', marginBottom: 48, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Tratamento para dores e lesões<br />que limitam sua vida.
          </h2>

          {/* 6 cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: 16,
            marginBottom: 32,
          }}>
            {treatments.map(({ label, Icon }) => (
              <div key={label} style={{
                background: '#fff',
                border: '1px solid #e8eef4',
                borderRadius: 16,
                padding: '24px 12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                boxShadow: '0 2px 16px rgba(0,34,65,0.03)',
                textAlign: 'center',
                cursor: 'default',
              }}>
                <Icon />
                <span style={{ fontSize: 13, fontWeight: 700, color: '#002241', lineHeight: 1.3 }}>{label}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              color: '#0055A4', fontWeight: 800, fontSize: 13, letterSpacing: '0.08em',
              textDecoration: 'none', textTransform: 'uppercase',
            }}>
              VER TODOS OS TRATAMENTOS <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ───────────── SECTION 3: SOBRE O MÉDICO ───────────── */}
      <section style={{ padding: '72px 24px', background: '#fff', borderBottom: '1px solid #f0f4f8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            background: '#F0F6FF',
            borderRadius: 24,
            padding: '40px',
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            gap: 40,
            alignItems: 'center',
          }}
          className="dr-bio-grid"
          >
            {/* Photo */}
            <img
              src="/profissionais/misterbrando.webp"
              alt="Dr. Misterbrando Machado"
              loading="lazy"
              style={{
                width: '100%',
                height: 340,
                objectFit: 'cover',
                objectPosition: 'center 10%',
                borderRadius: 16,
                display: 'block',
              }}
            />

            {/* Bio text */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', color: '#0055A4', textTransform: 'uppercase', marginBottom: 8 }}>
                SOBRE O MÉDICO
              </p>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 900, color: '#002241', marginBottom: 4, letterSpacing: '-0.01em' }}>
                Dr. Misterbrando Machado
              </h2>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#0055A4', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>
                Ortopedista &nbsp;|&nbsp; CRM-BA 11857
              </p>
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.75, marginBottom: 16, fontWeight: 400 }}>
                Médico ortopedista dedicado ao diagnóstico, prevenção e tratamento de doenças e lesões que acometem ossos, músculos, articulações, tendões e ligamentos.
              </p>
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.75, fontWeight: 400 }}>
                Seu atendimento é pautado na escuta atenta, diagnóstico preciso e tratamento individualizado, buscando devolver qualidade de vida e bem-estar aos pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── SECTION 4: COMO FUNCIONA ───────────── */}
      <section style={{ padding: '72px 24px', background: '#fff', borderBottom: '1px solid #f0f4f8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', color: '#0055A4', textTransform: 'uppercase', marginBottom: 56 }}>
            COMO FUNCIONA SUA CONSULTA
          </p>

          {/* Steps row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }} className="dr-steps-grid">
            {/* Connecting line */}
            <div style={{
              position: 'absolute',
              top: 28,
              left: '12.5%',
              right: '12.5%',
              height: 0,
              borderTop: '2px dashed #cbd5e1',
              zIndex: 0,
            }} />

            {steps.map(({ num, label, desc, Icon }) => (
              <div key={num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                {/* Circle with icon */}
                <div style={{ position: 'relative', marginBottom: 16 }}>
                  <div style={{
                    width: 56, height: 56,
                    borderRadius: '50%',
                    background: '#fff',
                    border: '1.5px solid #e2e8f0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 2px 12px rgba(0,34,65,0.06)',
                  }}>
                    <Icon />
                  </div>
                  {/* Number badge */}
                  <span style={{
                    position: 'absolute', top: -4, right: -4,
                    width: 20, height: 20,
                    background: '#0055A4', color: '#fff',
                    borderRadius: '50%',
                    fontSize: 11, fontWeight: 800,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{num}</span>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: '#002241', marginBottom: 6 }}>{label}</h3>
                <p style={{ fontSize: 12, color: '#64748b', lineHeight: 1.6, fontWeight: 400 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── SECTION 5: CTA FINAL ───────────── */}
      <section style={{ padding: '32px 24px 56px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            background: '#002241',
            borderRadius: 20,
            padding: '40px 48px',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 32,
            alignItems: 'center',
          }}
          className="dr-cta-grid"
          >
            {/* Left */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
              <div style={{
                width: 52, height: 52,
                borderRadius: '50%',
                border: '1.5px dashed rgba(255,255,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <CalIcon />
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 900, color: '#fff', marginBottom: 8, lineHeight: 1.25 }}>
                  Não deixe que a dor limite sua qualidade de vida.
                </h2>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, fontWeight: 400 }}>
                  Agende sua consulta com o Dr. Misterbrando e conte com um atendimento especializado para cuidar da sua saúde.
                </p>
              </div>
            </div>
            {/* CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#25D366',
                color: '#fff',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '0.06em',
                padding: '14px 24px',
                borderRadius: 999,
                textDecoration: 'none',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 20px rgba(37,211,102,0.25)',
                flexShrink: 0,
              }}
            >
              <WaIcon />
              AGENDAR PELO WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer style={{ background: '#f8fafc', borderTop: '1px solid #e8eef4', padding: '32px 24px' }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
          flexWrap: 'wrap',
        }}>
          <FooterItem icon={<MapIcon />} text="Jussara - BA" />
          <FooterDivider />
          <FooterItem icon={<PhoneIcon />} text={CONTACT_INFO.phone} />
          <FooterDivider />
          <FooterItem icon={<WaIcon />} text={CONTACT_INFO.whatsapp} />
        </div>
        <p style={{ textAlign: 'center', fontSize: 11, color: '#94a3b8', marginTop: 16 }}>
          © {new Date().getFullYear()} CMB — Centro Médico da Bahia. Todos os direitos reservados.
        </p>
      </footer>

      {/* ───────────── RESPONSIVE CSS ───────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');

        /* ── Hero always 2 columns ── */
        .dr-hero-grid  { display: grid; grid-template-columns: 1fr 1fr !important; }
        .dr-bio-grid   { grid-template-columns: 260px 1fr !important; }
        .dr-steps-grid { grid-template-columns: repeat(4, 1fr) !important; }
        .dr-cta-grid   { grid-template-columns: 1fr auto !important; }

        /* Mobile: keep side-by-side, shrink elements */
        @media (max-width: 600px) {
          .dr-hero-left {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
            padding-right: 8px !important;
          }
          .dr-hero-badge  { font-size: 8px !important; margin-bottom: 6px !important; }
          .dr-hero-h1     { font-size: 18px !important; margin-bottom: 8px !important; line-height: 1.15 !important; }
          .dr-hero-sub    { font-size: 11px !important; margin-bottom: 12px !important; display: none; }
          .dr-hero-btn    { font-size: 9px !important; padding: 10px 12px !important; gap: 5px !important; margin-bottom: 12px !important; }
          .dr-trust-bar   { padding: 8px !important; border-radius: 10px !important; gap: 0 !important; }
          .dr-trust-divider { margin: 0 6px !important; }
          .dr-trust-icon  { display: none !important; }
          .dr-trust-label { font-size: 8px !important; }
          .dr-trust-value { font-size: 9px !important; }
          .dr-hero-right  { min-height: 220px !important; border-radius: 60px 0 0 0 !important; }
        }

        /* Non-hero responsive */
        @media (max-width: 768px) {
          .dr-bio-grid {
            grid-template-columns: 1fr !important;
          }
          .dr-steps-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .dr-cta-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .dr-cta-grid > div {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .dr-cta-grid > a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

const FooterItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', fontSize: 13, padding: '8px 16px' }}>
    {icon}
    <span>{text}</span>
  </div>
);

const FooterDivider = () => (
  <div style={{ width: 1, height: 20, background: '#e2e8f0' }} />
);

export default DrMisterbrando;
