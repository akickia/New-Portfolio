import VectorLeft from './blobs/VectorLeft';
import VectorRight from './blobs/VectorRight';
import VectorThin from './blobs/VectorThin';
import BlobLarge from './blobs/BlobLarge';
import './main.scss';

export default function Layout({ children, isHomePage }) {
  return (
    <section>
      {isHomePage ? <VectorRight /> : <VectorThin />}
      {isHomePage && <VectorLeft />}
      {children}
      {isHomePage && <BlobLarge />}
    </section>
  );
}
