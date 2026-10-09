import React, { useState } from 'react';

interface HeaderProps {
  activeTab: 'inicio' | 'carta' | 'grupos' | 'el-dia-a-dia' | 'contacto';
  onNavigate?: (tab: 'inicio' | 'carta' | 'grupos' | 'el-dia-a-dia' | 'contacto') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (tab: 'inicio' | 'carta' | 'grupos' | 'el-dia-a-dia' | 'contacto') => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(tab);
    } else {
      if (tab === 'inicio') window.location.hash = '#/';
      else if (tab === 'carta') window.location.hash = '#/carta';
      else if (tab === 'grupos') window.location.hash = '#/grupos';
      else if (tab === 'el-dia-a-dia') {
        window.location.hash = '#/el-dia-a-dia';
      } else if (tab === 'contacto') {
        window.location.hash = '#/contacto';
      }
    }
  };

  const navItems: { id: 'inicio' | 'carta' | 'grupos' | 'el-dia-a-dia' | 'contacto'; label: string; href: string }[] = [
    { id: 'inicio', label: 'Inicio', href: '#/' },
    { id: 'carta', label: 'Nuestra carta', href: '#/carta' },
    { id: 'el-dia-a-dia', label: 'El día a día', href: '#/el-dia-a-dia' },
    { id: 'grupos', label: 'Grupos', href: '#/grupos' },
    { id: 'contacto', label: 'Contacto', href: '#/contacto' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
      style={{ borderBottom: '1px solid rgba(245, 235, 225, 0.15)' }}
    >
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-margin-lg flex items-center justify-between gap-gutter">
        {/* Logo and Brand */}
        <div className="flex items-center gap-space-sm">
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('inicio');
            }}
            className="flex items-center gap-3 group py-1"
          >
            <div className="h-14 w-14 rounded-2xl overflow-hidden shadow-md border-2 border-[#504138] bg-[#2C2623] flex-shrink-0 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center ring-2 ring-[#dded3a]/40">
              <img
                src={`${import.meta.env.BASE_URL}images/branding/logo.jpg`}
                alt="La Cotorra Muda Gastrobar"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-[19px] font-bold tracking-tight text-on-surface leading-none">
                La Cotorra Muda
              </span>
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#7cf5f8] font-semibold mt-1">
                Gastrobar · Bilbao
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.id);
                }}
                className={
                  isActive
                    ? 'transition-colors bg-primary-container text-on-primary font-bold rounded-full px-space-md py-space-xs font-label-lg text-label-lg'
                    : 'font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors'
                }
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-space-md">
          <a
            className="hidden sm:inline-flex items-center gap-space-xs bg-primary-container text-on-primary hover:bg-secondary hover:text-on-secondary px-space-md py-space-xs rounded-full font-label-lg text-label-lg tracking-wide uppercase transition-all shadow-[3px_3px_0px_#11A8AB]"
            href="https://maps.google.com/?q=Avda.+Juan+Antonio+Zunzunegui+6+48013+Bilbao"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">near_me</span>
            <span>Cómo llegar</span>
          </a>

          <a
            href="https://maps.google.com/?q=Avda.+Juan+Antonio+Zunzunegui+6+48013+Bilbao"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary hover:bg-secondary transition-colors"
            title="Localización en Bilbao"
          >
            <span className="material-symbols-outlined text-[18px]">location_on</span>
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl text-on-surface hover:bg-surface-container-high transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-t border-[#3A302A]/10 px-6 py-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(item.id);
                  }}
                  className={`px-4 py-2.5 rounded-full font-label-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-primary-container text-on-primary font-bold'
                      : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-full font-label-lg text-sm uppercase tracking-wide shadow-sm"
              href="https://maps.google.com/?q=Avda.+Juan+Antonio+Zunzunegui+6+48013+Bilbao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">near_me</span>
              <span>Cómo llegar · Avda. Zunzunegui 6</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
