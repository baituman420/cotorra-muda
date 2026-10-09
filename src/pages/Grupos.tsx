import React from 'react';

interface GruposProps {
  onNavigate: (tab: 'inicio' | 'carta' | 'grupos' | 'el-dia-a-dia' | 'contacto') => void;
}

export const Grupos: React.FC<GruposProps> = ({ onNavigate }) => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <main className="w-full pt-20 bg-surface">
      <div className="flex flex-col w-full">
{/*  Top Highlight Bar  */}
<section className="w-full bg-primary-container text-on-primary py-space-sm px-6 lg:px-margin-lg" style={{'backgroundColor': 'rgb(44, 37, 34)'}}>
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed inline-block animate-pulse"></span>
<span className="">Reservas para cuadrillas y eventos privados • De 6 a 30 personas</span>
</div>
<div className="flex items-center gap-space-md font-label-sm text-label-sm">
<span className="text-primary-fixed-dim">Respuesta rápida por WhatsApp y llamada:</span>
<a className="text-tertiary-fixed font-bold hover:underline" href="tel:674266613">674 26 66 13</a>
</div>
</div>
</section>
{/*  Editorial Hero Section  */}
<section className="relative w-full bg-surface-bright py-space-xl px-6 lg:px-margin-lg overflow-hidden">
{/*  Subtle Background Graphic Accents  */}
<div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-12 w-80 h-80 rounded-full bg-tertiary-fixed/15 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
{/*  Left Editorial Pitch  */}
<div className="lg:col-span-7 space-y-space-md z-10">
<div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container font-label-sm text-label-sm tracking-wider uppercase text-secondary">
<span className="material-symbols-outlined text-[16px]">groups</span>
<span className="">Cuadrillas · Cumpleaños · Afterwork</span>
</div>
<h1 className="font-display-xl text-headline-lg lg:text-display-xl text-on-surface font-extrabold tracking-tight" style={{'color': '#F5EBE1'}}>
          Los mejores planes se comparten en cuadrilla
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          ¿Celebras un cumpleaños, una cena de equipo o una quedada de amigos? En <strong>La Cotorra Muda</strong> preparamos mesas y barras a medida para que solo os preocupéis de brindar, comer bien y alargar la sobremesa.
        </p>
{/*  Rapid Actions & Badges  */}
<div className="pt-space-sm flex flex-wrap items-center gap-space-md">
<a className="inline-flex items-center gap-space-xs bg-primary text-on-primary hover:bg-secondary px-space-lg py-space-md rounded-full font-label-lg text-label-lg uppercase tracking-wider transition-all shadow-[4px_4px_0px_#79f2f5]" href="#formulario-grupos">
<span className="material-symbols-outlined text-[20px]">calendar_today</span>
<span className="">Consultar disponibilidad</span>
</a>
<a className="inline-flex items-center gap-space-xs bg-surface-container-lowest text-primary hover:bg-surface-container px-space-md py-space-md rounded-full font-label-lg text-label-lg uppercase tracking-wider shadow-sm transition-all" href="tel:946047308">
<span className="material-symbols-outlined text-[20px]">call</span>
<span className="">946 04 73 08</span>
</a>
</div>
{/*  Trust Metric Strip  */}
<div className="pt-space-md grid grid-cols-3 gap-space-sm max-w-lg">
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<p className="font-headline-sm text-headline-sm text-primary font-bold">6 - 30</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Comensales</p>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<p className="font-headline-sm text-headline-sm text-secondary font-bold">100%</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">A medida</p>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<p className="font-headline-sm text-headline-sm text-tertiary-container font-bold">Sabino Arana</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Metro y tranvía</p>
</div>
</div>
</div>
{/*  Right Visual Collage  */}
<div className="lg:col-span-5 relative mt-space-md lg:mt-0">
<div className="relative w-full max-w-md mx-auto">
{/*  Main Atmospheric Card  */}
<div className="rounded-xl overflow-hidden shadow-xl bg-surface-container-lowest relative z-10 group">
<img alt="Ambiente y neón del Gastrobar La Cotorra Muda" src={`${baseUrl}images/ambiente/hero.jpg`} />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-space-md text-on-primary">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">Espacio Singular</span>
<p className="font-title-lg text-title-lg font-bold">Luces, barra vibrante y música para quedarse</p>
</div>
</div>
{/*  Graphic Callout Badge Overlapping  */}
<div className="absolute -bottom-6 -left-6 z-20 bg-tertiary-fixed text-on-tertiary-fixed p-space-md rounded-lg shadow-[4px_4px_0px_#004b51] max-w-[210px] transform -rotate-2">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm font-bold uppercase">
<span className="material-symbols-outlined text-[18px]">celebration</span>
<span className="">Barra &amp; Cazuelas</span>
</div>
<p className="font-body-sm text-body-sm mt-1 leading-snug font-medium">Picoteo informal o mesa sentada sin prisas.</p>
</div>
{/*  Floating Accent Stamp  */}
<div className="absolute -top-4 -right-4 z-20 w-16 h-16 rounded-full bg-secondary text-on-secondary flex flex-col items-center justify-center font-label-sm text-label-sm font-bold shadow-md">
<span className="">BILBO</span>
<span className="text-[9px] uppercase tracking-wider text-secondary-fixed">Top Plan</span>
</div>
</div>
</div>
</div>
</section>
{/*  Group Proposals Section (Bento Grid)  */}
<section className="w-full bg-surface-container py-space-xl px-6 lg:px-margin-lg">
<div className="max-w-7xl mx-auto space-y-space-xl">
{/*  Section Title Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="space-y-space-xs max-w-xl">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-[#7cf5f8] bg-surface-container-high px-space-sm py-space-xs rounded-full inline-block">Formatos Personalizados</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight" style={{'color': '#F5EBE1'}}>3 propuestas pensadas para compartir</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Diseñamos menús cerrados con bebida incluida o fórmulas abiertas adaptadas a alergias, vegetarianos e intolerancias.
        </p>
</div>
{/*  Bento Cards  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Proposal 1  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="space-y-space-md">
<div className="w-full h-44 rounded-lg overflow-hidden shadow-sm mb-space-sm"><img src={`${baseUrl}images/gastronomia/surtido-tablas-pintxos.webp`} alt="Surtido de tablas y pintxos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Fórmula 01</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">Picoteo de Barra &amp; Pintxos</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Pensado para charlar de pie o alrededor de las mesas altas. Bandejas surtidas de embutidos ibéricos selectos, quesos con solera, gildas artesanales y raciones calientes directas al centro.
            </p>
<ul className="space-y-space-xs pt-space-xs text-on-surface font-body-sm text-body-sm">
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Tablas ibéricas y quesos curados</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Gildas clásicas de autor</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Mini sándwiches calientes y croquetas</span>
</li>
</ul>
</div>
<div className="pt-space-lg mt-space-md border-t border-surface-container-high flex items-center justify-between">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Ambiente dinámico</span>
<span className="font-title-md text-title-md font-bold text-primary">A consultar según grupo</span>
</div>
</div>
{/*  Proposal 2 (Featured)  */}
<div className="bg-primary text-on-primary rounded-xl p-space-lg shadow-md flex flex-col justify-between relative overflow-hidden transform lg:-translate-y-2">
<div className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed px-space-sm py-space-xs rounded-full font-label-sm text-label-sm uppercase font-bold tracking-wider">
            El Favorito
          </div>
<div className="space-y-space-md">
<div className="w-full h-44 rounded-lg overflow-hidden shadow-sm mb-space-sm"><img src={`${baseUrl}images/gastronomia/albondigas.jpg`} alt="Cazuela de albóndigas caseras" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">Fórmula 02</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary font-bold mt-1">Comida / Cena de Cuadrilla</h3>
</div>
<p className="font-body-md text-body-md text-primary-fixed-dim">
              Mesa reservada para sentarse como en casa pero con el punto canalla de La Cotorra. Platos de chup-chup, albóndigas en salsa untable, cazuelas tradicionales y postres caseros para coronar la fiesta.
            </p>
<ul className="space-y-space-xs pt-space-xs text-primary-fixed-dim font-body-sm text-body-sm">
<li className="flex items-center gap-space-xs text-on-primary">
<span className="material-symbols-outlined text-secondary-fixed text-[18px]">check_circle</span>
<span className="">Entrantes fríos y calientes para compartir</span>
</li>
<li className="flex items-center gap-space-xs text-on-primary">
<span className="material-symbols-outlined text-secondary-fixed text-[18px]">check_circle</span>
<span className="">Cazuelas caseras: albóndigas y txipirones</span>
</li>
<li className="flex items-center gap-space-xs text-on-primary">
<span className="material-symbols-outlined text-secondary-fixed text-[18px]">check_circle</span>
<span className="">Postre casero + vino, caña o refresco</span>
</li>
</ul>
</div>
<div className="pt-space-lg mt-space-md border-t border-primary-container flex items-center justify-between">
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary-fixed">Mesa completa</span>
<span className="font-title-md text-title-md font-bold text-tertiary-fixed">A consultar según grupo</span>
</div>
</div>
{/*  Proposal 3  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="space-y-space-md">
<div className="w-full h-44 rounded-lg overflow-hidden shadow-sm mb-space-sm"><img src={`${baseUrl}images/gastronomia/kiskilla.webp`} alt="Marisco fresco y kiskilla" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Fórmula 03 · Especial</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">Mariscada de Fin de Semana</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Una celebración por todo lo alto. Selección especial de marisco fresco traído para tu mesa bajo encargo previo. Disponible exclusivamente para viernes y sábados.
            </p>
<ul className="space-y-space-xs pt-space-xs text-on-surface font-body-sm text-body-sm">
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Producto fresco de lonja bajo reserva previa</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Maridaje con txakoli vizcaíno o verdejo</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Viernes y sábados mediodía o noche</span>
</li>
</ul>
</div>
<div className="pt-space-lg mt-space-md border-t border-surface-container-high flex items-center justify-between">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Encargo 48h antes</span>
<span className="font-title-md text-title-md font-bold text-primary">A consultar / pax</span>
</div>
</div>
</div>
</div>
</section>
{/*  Reservation Form & Quick Information Split Section  */}
<section className="w-full bg-surface py-space-xl px-6 lg:px-margin-lg" id="formulario-grupos">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
{/*  Left Column: Modern Custom Form (7 cols)  */}
<div className="lg:col-span-7 bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-md space-y-space-lg">
<div className="space-y-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Sin compromiso</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold" style={{'color': '#F5EBE1'}}>Reserva tu mesa para cuadrilla</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Rellena este formulario con los detalles y te confirmamos disponibilidad o te proponemos opciones en menos de 24 horas.
          </p>
</div>
<div className="space-y-space-md bg-surface-container-low p-space-lg rounded-2xl border border-[#3A302A]/10">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl mt-0.5">info</span>
                <div>
                  <h4 className="font-headline-sm text-lg font-bold text-on-surface">Consulta directa para grupos y eventos</h4>
                  <p className="font-body-md text-on-surface-variant text-sm mt-1">
                    Esta propuesta web es una demo comercial. El sistema definitivo de reservas se configurará con los canales oficiales y condiciones acordadas con La Cotorra Muda.
                  </p>
                </div>
              </div>

              <div className="pt-space-sm grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <a
                  href="tel:946047308"
                  className="inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary hover:bg-secondary px-space-md py-space-sm rounded-full font-label-lg text-sm uppercase tracking-wider transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>Llamar al 946 04 73 08</span>
                </a>
                <a
                  href="tel:674266613"
                  className="inline-flex items-center justify-center gap-space-xs bg-primary-container text-on-primary hover:bg-secondary px-space-md py-space-sm rounded-full font-label-lg text-sm uppercase tracking-wider transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">phone_iphone</span>
                  <span>Móvil: 674 26 66 13</span>
                </a>
              </div>

              <div className="pt-space-xs text-center">
                <a
                  href="https://maps.google.com/?q=Avda.+Juan+Antonio+Zunzunegui+6+48013+Bilbao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-secondary font-label-md text-sm hover:underline"
                >
                  <span className="material-symbols-outlined text-[18px]">near_me</span>
                  <span>Ver ubicación en Avda. Juan Antonio Zunzunegui 6 (Bilbao)</span>
                </a>
              </div>
            </div>
</div>
{/*  Right Column: Location, Hours & Direct Contact (5 cols)  */}
<div className="lg:col-span-5 flex flex-col justify-between gap-space-lg">
{/*  Direct Quick Call Card  */}
<div className="bg-primary text-on-primary p-space-lg rounded-xl shadow-md space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">¿Urgencia o mesa para hoy?</span>
<span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold">Llámanos directamente</h3>
<p className="font-body-md text-body-md text-primary-fixed-dim">
            Para dudas de última hora o reservas de grupos en el mismo día, atención telefónica al instante:
          </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
<a className="bg-primary-container hover:bg-secondary px-space-md py-space-sm rounded-full text-center font-title-md text-title-md font-bold text-on-primary transition-colors flex items-center justify-center gap-1" href="tel:946047308">
<span className="material-symbols-outlined text-[18px]">phone</span>
              946 04 73 08
            </a>
<a className="bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim px-space-md py-space-sm rounded-full text-center font-title-md text-title-md font-bold transition-colors flex items-center justify-center gap-1" href="tel:674266613">
<span className="material-symbols-outlined text-[18px]">chat</span>
              674 26 66 13
            </a>
</div>
</div>
{/*  Schedule & Location Details  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
<div className="space-y-space-xs">
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest font-bold">
<span className="material-symbols-outlined text-[18px]">schedule</span>
<span className="">Horarios del Gastrobar</span>
</div>
<div className="space-y-space-xs pt-space-xs text-body-md text-on-surface">
<div className="flex justify-between py-1 border-b border-surface-container">
<span className="text-on-surface-variant">Lunes a Jueves</span>
<span className="font-semibold">08:00 – 23:00</span>
</div>
<div className="flex justify-between py-1 border-b border-surface-container">
<span className="text-on-surface-variant">Viernes</span>
<span className="font-semibold">08:00 – 01:00</span>
</div>
<div className="flex justify-between py-1 border-b border-surface-container">
<span className="text-on-surface-variant">Sábados</span>
<span className="font-semibold">10:00 – 01:30</span>
</div>
<div className="flex justify-between py-1">
<span className="text-on-surface-variant">Domingos</span>
<span className="font-semibold">10:30 – 17:00</span>
</div>
</div>
</div>
<div className="pt-space-sm border-t border-surface-container space-y-space-xs">
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest font-bold">
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span className="">Dónde Estamos</span>
</div>
<p className="font-title-md text-title-md font-bold text-on-surface">Avda. Juan Antonio Zunzunegui 6</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">48013 Bilbao, Bizkaia (Junto a Sabino Arana y Termibús)</p>
</div>
</div>
{/*  Interactive Map Element  */}
<div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm space-y-space-sm">
<div className="w-full h-44 rounded-lg bg-surface-container flex items-center justify-center relative overflow-hidden group" data-location="Avda. Juan Antonio Zunzunegui 6, Bilbao">
<div className="absolute inset-0 bg-secondary/10 pointer-events-none"></div>
<div className="z-10 bg-surface-container-lowest/90 backdrop-blur-md px-space-md py-space-xs rounded-full flex items-center gap-space-xs shadow-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">pin_drop</span>
<span className="font-label-sm text-label-sm font-bold text-on-surface">Sabino Arana / Zunzunegui</span>
</div>
</div>
<div className="flex items-center justify-between px-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">Metro San Mamés / Tranvía Zunzunegui</span>
<a className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold hover:underline" href="https://maps.google.com/?q=Avda.+Juan+Antonio+Zunzunegui+6+48013+Bilbao" rel="noopener" target="_blank">
<span className="">Abrir en Google Maps</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/*  Friendly Mascot Sign-off Section  */}
<section className="w-full bg-surface-container-low py-space-xl px-6 lg:px-margin-lg border-t border-surface-container">
<div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-space-lg text-center sm:text-left">
{/*  Official Mascot Image  */}
<div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-surface-container-lowest shadow-md flex-shrink-0 p-2 border-2 border-secondary-container">
<img alt="Mascota oficial de La Cotorra Muda saludando" src={`${baseUrl}images/branding/cotorra-gracias.jpg`} />
</div>
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-[#7cf5f8] font-bold">El Espíritu de La Cotorra</span>
<h3 className="font-display-xl text-headline-md sm:text-headline-lg font-bold tracking-tight" style={{'color': '#F5EBE1'}}>
          “Nos vemos en la barra”
        </h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
          Taburete alto, brindis sincero y comida con sustancia. Reserva para tu gente o acércate cualquier día a disfrutar del buen rollo de Bilbao.
        </p>
</div>
</div>
</section>
</div>
    </main>
  );
};

export default Grupos;
