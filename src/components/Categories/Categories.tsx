import React, { useState } from 'react';
import './Categories.scss';

interface CategoryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'tecnologia',
    name: 'Tecnologia',
    icon: (
      <svg width="61" height="61" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'supermercado',
    name: 'Supermercado',
    icon: (
      <svg width="61" height="61" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    icon: (
      <svg width="61" height="61" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 22h8" />
        <path d="M12 15v7" />
        <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
      </svg>
    ),
  },
  {
    id: 'ferramentas',
    name: 'Ferramentas',
    icon: (
      <svg width="61" height="61" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: 'saude',
    name: 'Saúde',
    icon: (
      <svg width="61" height="61" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    id: 'esportes',
    name: 'Esportes e Fitness',
    icon: (
      <svg width="61" height="61" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: 'moda',
    name: 'Moda',
    icon: (
      <svg width="61" height="61" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
      </svg>
    ),
  },
];

export const Categories: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('tecnologia');

  return (
    <section className="categories" aria-label="Categorias de produtos">
      <div className="container">
        <ul className="categories__list">
          {CATEGORIES.map((category) => {
            const isActive = category.id === activeId;
            return (
              <li key={category.id} className="categories__item">
                <button
                  type="button"
                  className={`categories__btn ${isActive ? 'categories__btn--active' : ''}`}
                  onClick={() => setActiveId(category.id)}
                >
                    <div className="categories__card">
                      {category.icon}
                    </div>
                    <span className="categories__name">{category.name}</span>
                  </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};