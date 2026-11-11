import { useEffect, useState } from 'react';
import type { Product } from './types/product';
import { fetchProducts } from './services/api';
import { Header } from './components/Header/Header';
import { HeroBanner } from './components/HeroBanner/HeroBanner';
import { Categories } from './components/Categories/Categories';
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <Categories />
        <ProductShowcase
          products={products}
          onSelectProduct={(product) => setSelectedProduct(product)}
          showTabs={true}
        />
      </main>
    </>
  );
}

export default App;