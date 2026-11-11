import { useEffect, useState } from 'react';
import type { Product } from './types/product';
import { fetchProducts } from './services/api';
import { Header } from './components/Header/Header';
import { HeroBanner } from './components/HeroBanner/HeroBanner';
import { Categories } from './components/Categories/Categories';
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase';
import { PartnerBanners } from './components/PartnerBanners/PartnerBanners';
import { Brands } from './components/Brands/Brands';
import { Footer } from './components/Footer/Footer';
import { ProductModal } from './components/ProductModal/ProductModal';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
        <PartnerBanners />

        <ProductShowcase
          products={products}
          onSelectProduct={(product) => setSelectedProduct(product)}
          showTabs={false}
        />

        <PartnerBanners />

        <Brands />

        <ProductShowcase
          products={products}
          onSelectProduct={(product) => setSelectedProduct(product)}
          showTabs={false}
        />
      </main>

      <Footer />
      
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default App;