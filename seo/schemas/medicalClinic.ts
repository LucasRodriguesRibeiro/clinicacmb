import { CONTACT_INFO } from '../../constants';

export const getMedicalClinicSchema = () => {
  const url = 'https://cmbclinica.com.br';
  const logoUrl = `${url}/favicon.svg`;
  const imageUrl = `${url}/imagens/fachada.webp`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${url}/#website`,
        'url': `${url}/`,
        'name': 'CMB - Centro Médico da Bahia',
        'description': 'Agende sua consulta ou exame no CMB - Centro Médico da Bahia. Especialistas em Ortopedia, Cardiologia, Ginecologia, Ultrassonografia, Pediatria e mais.',
        'publisher': {
          '@id': `${url}/#organization`
        },
        'potentialAction': [
          {
            '@type': 'SearchAction',
            'target': {
              '@type': 'EntryPoint',
              'urlTemplate': `${url}/?s={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          }
        ],
        'inLanguage': 'pt-BR'
      },
      {
        '@type': 'Organization',
        '@id': `${url}/#organization`,
        'name': 'Centro Médico da Bahia',
        'url': `${url}/`,
        'logo': logoUrl,
        'image': imageUrl,
        'sameAs': [
          'https://www.instagram.com/cmbclinica/'
        ]
      },
      {
        '@type': 'MedicalClinic',
        '@id': `${url}/#medicalclinic`,
        'name': 'CMB - Centro Médico da Bahia',
        'alternateName': 'Centro Médico da Bahia',
        'description': 'A clínica CMB oferece atendimento médico humanizado nas especialidades de ortopedia, cardiologia, ginecologia, pediatria, alergologia, odontologia e exames laboratoriais.',
        'url': `${url}/`,
        'logo': logoUrl,
        'image': imageUrl,
        'telephone': `+55${CONTACT_INFO.phone.replace(/\D/g, '')}`,
        'priceRange': '$$',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Praça João Batista, 40 - Centro',
          'addressLocality': 'Jussara',
          'addressRegion': 'BA',
          'postalCode': '44925-000',
          'addressCountry': 'BR'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '-11.025287',
          'longitude': '-41.977265'
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            'opens': '07:00',
            'closes': '18:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Saturday'],
            'opens': '07:00',
            'closes': '12:00'
          }
        ]
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${url}/#localbusiness`,
        'name': 'CMB - Centro Médico da Bahia',
        'image': imageUrl,
        'telephone': `+55${CONTACT_INFO.phone.replace(/\D/g, '')}`,
        'url': `${url}/`,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Praça João Batista, 40 - Centro',
          'addressLocality': 'Jussara',
          'addressRegion': 'BA',
          'postalCode': '44925-000',
          'addressCountry': 'BR'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '-11.025287',
          'longitude': '-41.977265'
        },
        'openingHours': 'Mo-Fr 07:00-18:00, Sa 07:00-12:00'
      }
    ]
  };
};
