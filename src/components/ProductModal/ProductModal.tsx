import React, { useState, useEffect } from 'react';
import type { Product } from '../../types/product';
import { formatCurrency } from '../../services/api';
import './ProductModal.scss';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const formattedQuantity = String(quantity).padStart(2, '0');

  return (
    <div 
    className="product-modal__overlay"
    onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="product-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="product-modal__close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="product-modal__image-wrapper">
          <img
            src={product.photo}
            alt={product.productName}
            className="product-modal__image"
          />
        </div>
        <div className="product-modal__info">
          <h2 id="modal-product-title" className="product-modal__title">
            {product.productName}
          </h2>
          <strong className="product-modal__price">
            {formatCurrency(product.price)}
          </strong>
          <p className="product-modal__description">
            {product.descriptionShort}. Many desktop publishing packages and web page editors now many desktop publishing.
          </p>
          <a
            href="#detalhes"
            className="product-modal__details-link"
            onClick={(e) => e.preventDefault()}
          >
            Veja mais detalhes do produto &gt;
          </a>
          <div className="product-modal__actions">
            <div className="product-modal__quantity">
              <button
                type="button"
                onClick={handleDecrement}
                aria-label="Diminuir quantidade"
              >
                &minus;
              </button>
              <span>{formattedQuantity}</span>
              <button
                type="button"
                onClick={handleIncrement}
                aria-label="Aumentar quantidade"
              >
                &#43;
              </button>
            </div>
            <button
              type="button"
              className="product-modal__buy-btn"
              onClick={onClose}
            >
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};