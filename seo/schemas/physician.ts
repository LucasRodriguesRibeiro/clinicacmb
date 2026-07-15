import { Doctor } from '../../types';
import { CONTACT_INFO } from '../../constants';

const specialtyMap: Record<string, string> = {
  'Ortopedia': 'Orthopedic',
  'Pediatra e Alergologista': 'Pediatric',
  'Ginecologia e Ultrassonografia': 'Gynecologic',
  'Ortodontia Especializada': 'Dentistry',
  'Cirurgião-Dentista': 'Dentistry',
  'Cardiologista e Clínico Geral': 'Cardiovascular',
};

export const getPhysicianSchema = (doctor: Doctor) => {
  const url = 'https://cmbclinica.com.br';
  const docSpecialty = specialtyMap[doctor.specialty] || 'MedicalSpecialty';
  const photoPath = doctor.photo ? (doctor.photo.endsWith('.png') ? doctor.photo.replace('.png', '.webp') : doctor.photo) : '/favicon.svg';

  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${url}/medicos/${doctor.id}#physician`,
    'name': doctor.name,
    'image': `${url}${photoPath}`,
    'telephone': `+55${CONTACT_INFO.phone.replace(/\D/g, '')}`,
    'url': `${url}/medicos/${doctor.id}`,
    'medicalSpecialty': docSpecialty,
    'worksFor': {
      '@type': 'MedicalClinic',
      '@id': `${url}/#medicalclinic`
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Rua Lafayete Coutinho, 120 - Centro',
      'addressLocality': 'Irecê',
      'addressRegion': 'BA',
      'postalCode': '44900-000',
      'addressCountry': 'BR'
    }
  };
};

export const getDoctorsListSchema = (doctors: Doctor[]) => {
  const url = 'https://cmbclinica.com.br';
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Corpo Clínico - CMB',
    'numberOfItems': doctors.length,
    'itemListElement': doctors.map((doctor, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': getPhysicianSchema(doctor)
    }))
  };
};
