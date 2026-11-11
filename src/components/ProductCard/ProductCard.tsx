import React from 'react';
import type { Product } from '../../types/product';
import { formatCurrency } from '../../services/api';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const oldPrice = product.price * 1.1;
  const installmentPrice = product.price / 2;

  return (
    <article
      className="product-card"
      onClick={() => onSelect(product)}
    >
      <div className="product-card__image-wrapper">
        <img
          src={product.photo}
          alt={product.productName}
          className="product-card__image"
          loading="lazy"
        />
      </div>

      <h3 className="product-card__title">{product.productName}</h3>

      <div className="product-card__pricing">
        <span className="product-card__old-price">
          {formatCurrency(oldPrice)}
        </span>
        <strong className="product-card__price">
          {formatCurrency(product.price)}
        </strong>
        <p className="product-card__installments">
          ou 2x de {formatCurrency(installmentPrice)} sem juros
        </p>
        <span className="product-card__shipping">Frete grátis</span>
      </div>

      <button
        type="button"
        className="product-card__btn"
        onClick={(e) => {
          e.stopPropagation();
          onSelect(product);
        }}
      >
        COMPRAR
      </button>
    </article>
  );
};