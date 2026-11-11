import React from 'react';
import './HeroBanner.scss';

export const HeroBanner: React.FC = () => {
    return (
        <section className="hero-banner" aria-label="Promoção Principal">
            <div className="container hero-banner__content">
                <h1 className="hero-banner__title">
                    Venha conhecer nossas promoções
                </h1>
                <p className="hero-banner__subtitle">
                    <strong>50% Off</strong> nos produtos
                </p>
                <a href="#produtos" className="hero-banner__btn">
                    Ver produto
                </a>
            </div>
        </section>
    );
};