export interface RouteSEO {
  path: string;
  title: string;
  description: string;
  changefreq: string;
  priority: number;
  keywords: string;
  ogType?: string;
  ogImage?: string;
}

export interface DoctorSEO {
  id: string;
  name: string;
  specialty: string;
  crm: string;
  days: string;
  initials: string;
  color: string;
  photo?: string;
  photoPosition?: string;
}
