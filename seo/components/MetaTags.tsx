import React from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalUrl: string;
  robots?: string;
  author?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  canonicalUrl,
  robots = 'index, follow',
  author = 'CMB - Centro Médico da Bahia',
  keywords,
  ogType = 'website',
  ogImage = 'https://cmbclinica.com.br/imagens/fachada.webp',
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robots} />
      <meta name="author" content={author} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
};
export default MetaTags;
