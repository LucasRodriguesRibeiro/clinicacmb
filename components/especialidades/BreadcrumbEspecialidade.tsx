import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbEspecialidadeProps {
  nome: string;
}

export const BreadcrumbEspecialidade: React.FC<BreadcrumbEspecialidadeProps> = ({ nome }) => {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-xs sm:text-sm text-slate-600 bg-white border-b border-slate-100" aria-label="Breadcrumb">
      <Link to="/" className="flex items-center gap-1 hover:text-[#0055A4] transition-colors" aria-label="Voltar para a página inicial">
        <Home className="w-4 h-4" />
        <span>Início</span>
      </Link>
      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
      <span className="text-slate-400">Especialidades</span>
      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
      <span className="font-semibold text-slate-800" aria-current="page">{nome}</span>
    </nav>
  );
};
export default BreadcrumbEspecialidade;
