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



export interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: string;
  hours: string;
  email: string;
  googleMapsUrl?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  crm: string;
  days: string;
  initials: string;
  color: string;           // Hex color for avatar accent
  photo?: string;          // optional: path to actual photo
  photoPosition?: string;  // optional: CSS object-position (e.g. 'center 10%')
}