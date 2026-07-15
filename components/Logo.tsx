import React from 'react';

interface LogoProps {
  className?: string;
  theme?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", theme = 'light' }) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-primary-500';
  const subTextColor = theme === 'dark' ? 'text-slate-300' : 'text-primary-700';

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Symbol: Red Cross */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
      >
        {/* Cross Vertical Bar */}
        <rect x="35" y="0" width="30" height="100" fill="#D32F2F" rx="4" className="shadow-sm" />
        {/* Cross Horizontal Bar */}
        <rect x="0" y="35" width="100" height="30" fill="#D32F2F" rx="4" className="shadow-sm" />
      </svg>

      {/* Text */}
      <div className="flex flex-col justify-center items-start -space-y-1">
        <span className={`text-2xl font-black leading-none tracking-tight ${textColor} drop-shadow-sm`}>CMB</span>
        <span className={`text-[8px] font-bold uppercase tracking-widest text-left ${subTextColor}`}>
          Centro Médico da Bahia
        </span>
      </div>
    </div>
  );
};
