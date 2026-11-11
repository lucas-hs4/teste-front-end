import React from 'react';
import './PartnerBanners.scss';

export const PartnerBanners: React.FC = () => {
  return (
    <section className="partner-banners" aria-label="Parceiros">
      <div className="container partner-banners__grid">
        {[1, 2].map((item) => (
          <div key={item} className="partner-banners__card">
            <div className="partner-banners__content">
              <h2 className="partner-banners__title">Parceiros</h2>
              <p className="partner-banners__description">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <a href="#parceiros" className="partner-banners__btn">
                CONFIRA
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};