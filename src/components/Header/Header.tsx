import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__topbar">
        <div className="container header__topbar-content">
          <div className="header__benefit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>Compra<strong>100% segura</strong></span>
          </div>

          <div className="header__benefit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="3" width="15" height="13" />
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            <span><strong>Frete grátis</strong> acima de R$ 200</span>
          </div>

          <div className="header__benefit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            <span><strong>Parcele</strong> suas compras</span>
          </div>
        </div>
      </div>

      <div className="header__main">
        <div className="container header__main-content">
          <a href="/" className="header__logo" aria-label="Econverse Home">
            econverse
          </a>

          <div className="header__search">
            <input
              type="text"
              placeholder="O que você está buscando?"
              aria-label="Buscar produtos"
            />
            <button type="button" aria-label="Pesquisar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          <div className="header__actions">
            <button type="button" className="header__action-btn" aria-label="Meus Pedidos">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-l.731-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </button>

            <button type="button" className="header__action-btn" aria-label="Favoritos">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>

            <button type="button" className="header__action-btn" aria-label="Minha conta">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

            <button type="button" className="header__action-btn" aria-label="Carrinho de Compras">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <nav className="header__nav" aria-label="Menu principal">
        <div className="container">
          <ul className="header__nav-list">
            <li><a href="#todas" className="header__nav-link">TODAS CATEGORIAS</a></li>
            <li><a href="#supermercado" className="header__nav-link">SUPERMERCADO</a></li>
            <li><a href="#livro" className="header__nav-link">LIVROS</a></li>
            <li><a href="#moda" className="header__nav-link">MODA</a></li>
            <li><a href="#lancamentos" className="header__nav-link">LANÇAMENTOS</a></li>
            <li><a href="#ofertas" className="header__nav-link header__nav-link--highlight">OFERTAS DO DIA</a></li>
            <li>
              <a href="#assinatura" className="header__nav-link header__nav-link--subscription">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                </svg>
                ASSINATURA
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};