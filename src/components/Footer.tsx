import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary text-on-primary pt-space-xl pb-space-lg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-margin-lg relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-space-xl pb-space-xl">
          <div className="space-y-space-md max-w-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim bg-primary-container px-space-sm py-space-xs rounded-full inline-block">
              Bilbao Indautxu · Sabino Arana
            </span>
            <h2 className="font-display-xl text-display-xl-mobile lg:text-display-xl tracking-tight text-on-primary">
              ¿Nos vemos?
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim">
              Cocina canalla, producto honesto, tragos largos y conversaciones que empiezan de día y acaban de noche.
            </p>
          </div>

          <div className="space-y-space-md text-left lg:text-right">
            <div className="space-y-space-xs">
              <p className="font-label-sm text-label-sm uppercase text-secondary-fixed tracking-widest">
                Dónde encontrarnos
              </p>
              <p className="font-title-lg text-title-lg text-on-primary">
                Avda. Juan Antonio Zunzunegui 6
              </p>
              <p className="font-body-md text-body-md text-primary-fixed-dim">
                48013 Bilbao, Bizkaia
              </p>
            </div>

            <div className="space-y-space-xs pt-space-xs">
              <p className="font-label-sm text-label-sm uppercase text-secondary-fixed tracking-widest">
                Contacto &amp; Consultas
              </p>
              <p className="font-title-md text-title-md text-on-primary">
                <a
                  className="hover:text-secondary-fixed underline underline-offset-4 decoration-secondary-fixed-dim transition-colors"
                  href="tel:946047308"
                >
                  946 04 73 08
                </a>
                {' / '}
                <a
                  className="hover:text-secondary-fixed underline underline-offset-4 decoration-secondary-fixed-dim transition-colors"
                  href="tel:674266613"
                >
                  674 26 66 13
                </a>
              </p>
            </div>

            <div className="flex items-center lg:justify-end gap-space-sm pt-space-xs">
              <a
                className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors"
                href="https://maps.google.com/?q=Avda.+Juan+Antonio+Zunzunegui+6+48013+Bilbao"
                target="_blank"
                rel="noopener noreferrer"
                title="Google Maps"
              >
                <span className="material-symbols-outlined text-[20px]">near_me</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors"
                href="tel:946047308"
                title="Llamar"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-space-lg border-t border-primary-container flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-primary-fixed-dim">
          <p>© 2025 La Cotorra Muda Gastrobar. Todos los derechos reservados.</p>
          <div className="flex items-center gap-space-md">
            <span className="hover:text-on-primary cursor-pointer transition-colors">Aviso Legal</span>
            <span className="hover:text-on-primary cursor-pointer transition-colors">Privacidad</span>
            <span className="hover:text-on-primary cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 right-12 lg:right-28 pointer-events-none opacity-20 lg:opacity-30 select-none">
        <img
          alt="La Cotorra Muda"
          className="w-48 lg:w-64 h-auto transform rotate-12 translate-y-8"
          src={`${import.meta.env.BASE_URL}images/branding/cotorra.png`}
        />
      </div>
    </footer>
  );
};

export default Footer;
