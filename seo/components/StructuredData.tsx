import React from 'react';

interface StructuredDataProps {
  schema: object;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ schema }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};
export default StructuredData;
