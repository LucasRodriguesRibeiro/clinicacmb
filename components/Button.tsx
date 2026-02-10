import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  isLoading,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:to-primary-600 hover:shadow-lg shadow-primary-500/30 transform hover:-translate-y-0.5",
    secondary: "bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:shadow-lg shadow-secondary-500/30 transform hover:-translate-y-0.5",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 hover:shadow-md transition-shadow",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] hover:shadow-lg shadow-green-500/30 transform hover:-translate-y-0.5"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
      {children}
    </button>
  );
};