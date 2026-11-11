import React, { useState, useRef } from 'react';
import type { Product } from '../../types/product';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductShowcase.scss';

interface ProductShowcaseProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  showTabs?: boolean;
}

const TABS = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
];

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  onSelectProduct,
  showTabs = false,
}) => {
  const [activeTab, setActiveTab] = useState<string>('CELULAR');
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 310;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id={showTabs ? 'produtos' : undefined} className="product-showcase">
      <div className="container">
        <div className="product-showcase__header">
          <div className="product-showcase__title-wrapper">
            <span className="product-showcase__line" />
            <h2 className="product-showcase__title">Produtos relacionados</h2>
            <span className="product-showcase__line" />
          </div>
          {showTabs ? (
            <div className="product-showcase__tabs" role="tablist">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  className={`product-showcase__tab ${
                    activeTab === tab ? 'product-showcase__tab--active' : ''
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          ) : (
            <a href="#ver-todos" className="product-showcase__see-all">
              Ver todos
            </a>
          )}
        </div>
        <div className="product-showcase__carousel-wrapper">
          <button
            type="button"
            className="product-showcase__arrow product-showcase__arrow--left"
            onClick={() => handleScroll('left')}
            aria-label="Produtos anteriores"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className="product-showcase__carousel" ref={carouselRef}>
            {products.map((product, index) => (
              <ProductCard
                key={`${product.productName}-${index}`}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
          <button
            type="button"
            className="product-showcase__arrow product-showcase__arrow--right"
            onClick={() => handleScroll('right')}
            aria-label="Próximos produtos"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};