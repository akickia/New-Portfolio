import VectorLeft from './blobs/VectorLeft';
import VectorRight from './blobs/VectorRight';
import VectorThin from './blobs/VectorThin';
import BlobLarge from './blobs/BlobLarge';
import './main.scss';
import { useState } from 'react';

export default function Layout({ children }) {
  const [isHomepage, setIsHomepage] = useState(true);
  return (
    <section>
      {isHomepage ? <VectorRight /> : <VectorThin />}
      <VectorLeft />
      {children}
      <BlobLarge />
    </section>
  );
}
