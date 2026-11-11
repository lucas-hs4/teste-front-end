import React from 'react';
import './Brands.scss';

export const Brands: React.FC = () => {
  return (
    <section className="brands" aria-label="Navegue por marcas">
      <div className="container">
        <h2 className="brands__title">Navegue por marcas</h2>
        <div className="brands__list">
          {[1, 2, 3, 4, 5].map((brand) => (
            <a
              key={brand}
              href="#marca"
              className="brands__circle"
              aria-label={`Marca parceira ${brand}`}
            >
              <span className="brands__logo">econverse</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};