import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'blue';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white'
}) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-slate-50 relative overflow-hidden',
    blue: 'bg-gradient-primary text-white relative overflow-hidden'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[background]} ${className}`}>
      {(background === 'gray' || background === 'blue') && (
        <div className="absolute inset-0 opacity-10 bg-pattern-dots pointer-events-none"></div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};