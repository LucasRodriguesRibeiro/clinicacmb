import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: string;
  hours: string;
  email: string;
}