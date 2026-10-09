import React, { useState } from 'react';

interface CartaProps {
  onNavigate: (tab: 'inicio' | 'carta' | 'grupos' | 'el-dia-a-dia' | 'contacto') => void;
}

export const Carta: React.FC<CartaProps> = ({ onNavigate }) => {
  const baseUrl = import.meta.env.BASE_URL;
  const [activeFilter, setActiveFilter] = useState<string>('all');

  return (
    <main className="w-full pt-20 bg-surface">
      <div className="flex flex-col w-full">
{/*  Sub-header Editorial Banner  */}
<section className="relative px-6 lg:px-margin-lg pt-space-lg pb-space-xl overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
<div className="max-w-3xl space-y-space-sm">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-secondary-container text-on-secondary-container" style={{'backgroundColor': 'rgb(44, 38, 35)', 'color': 'rgb(241, 251, 255)', 'border': '1px solid rgb(58, 48, 42)'}}>
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">Cocina de Mercado &amp; Taberna Vasca</span>
</div>
<h1 className="font-display-xl text-display-xl-mobile lg:text-display-xl text-primary tracking-tight" style={{'color': 'rgb(45, 35, 30)'}}>
            La Carta de La Cotorra.
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Producto honesto, sabores caseros y la alegría descarada de compartir en la barra y en la mesa. Desde el primer café del día hasta el último txakoli de la noche.
          </p>
</div>
<div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-space-sm">
<div className="px-space-md py-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[28px]">schedule</span>
<div>
<p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Cocina Non-Stop</p>
<p className="font-title-md text-title-md text-on-surface font-bold">08:00 — Cierre</p>
</div>
</div>
<a className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-lg text-label-lg hover:bg-tertiary-fixed-dim transition-colors shadow-sm" href="#take-away">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
<span className="">Take Away Disponible</span>
</a>
</div>
</div>
{/*  Filter Pills Bar  */}
<div className="mt-space-xl overflow-x-auto pb-space-xs">
<div className="flex items-center gap-space-xs min-w-max" id="category-filters">
<button
          key="all"
          type="button"
          onClick={() => setActiveFilter('all')}
          className={`category-btn whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all shadow-sm ${
            activeFilter === 'all'
              ? 'bg-primary text-on-primary font-bold shadow-md'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
          }`}
        >
            Todos
          </button>
<button
          key="marisco"
          type="button"
          onClick={() => setActiveFilter('marisco')}
          className={`category-btn whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all shadow-sm ${
            activeFilter === 'marisco'
              ? 'bg-primary text-on-primary font-bold shadow-md'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
          }`}
        >
            Fin de Semana Marisco
          </button>
<button
          key="pintxos"
          type="button"
          onClick={() => setActiveFilter('pintxos')}
          className={`category-btn whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all shadow-sm ${
            activeFilter === 'pintxos'
              ? 'bg-primary text-on-primary font-bold shadow-md'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
          }`}
        >
            Pintxos &amp; Barra
          </button>
<button
          key="desayunos"
          type="button"
          onClick={() => setActiveFilter('desayunos')}
          className={`category-btn whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all shadow-sm ${
            activeFilter === 'desayunos'
              ? 'bg-primary text-on-primary font-bold shadow-md'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
          }`}
        >
            Desayunos &amp; Brunch
          </button>
<button
          key="smoothies"
          type="button"
          onClick={() => setActiveFilter('smoothies')}
          className={`category-btn whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all shadow-sm ${
            activeFilter === 'smoothies'
              ? 'bg-primary text-on-primary font-bold shadow-md'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
          }`}
        >
            Smoothies &amp; Zumos
          </button>
<button
          key="raciones"
          type="button"
          onClick={() => setActiveFilter('raciones')}
          className={`category-btn whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all shadow-sm ${
            activeFilter === 'raciones'
              ? 'bg-primary text-on-primary font-bold shadow-md'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
          }`}
        >
            Raciones &amp; Cazuelas
          </button>
<button
          key="vinos"
          type="button"
          onClick={() => setActiveFilter('vinos')}
          className={`category-btn whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all shadow-sm ${
            activeFilter === 'vinos'
              ? 'bg-primary text-on-primary font-bold shadow-md'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
          }`}
        >
            Vinos &amp; Tragos
          </button>
</div>
</div>
</div>
</section>
{/*  Special Hero Feature: Fin de Semana de Marisco  */}
<section className="menu-section px-6 lg:px-margin-lg py-space-lg"  data-category="marisco"  style={{ display: (activeFilter === "all" || activeFilter === "marisco") ? "block" : "none" }}>
<div className="max-w-7xl mx-auto bg-primary text-on-primary rounded-xl overflow-hidden shadow-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
<div className="lg:col-span-5 p-space-lg lg:p-space-xl flex flex-col justify-between space-y-space-lg">
<div className="space-y-space-md">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest font-bold">
<span className="material-symbols-outlined text-[16px]">set_meal</span>
<span className="">Campaña Especial de Lonja</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold leading-tight">
              Fin de Semana de Marisco Fresco
            </h2>
<p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
              De viernes a domingo traemos el Cantábrico directo al fogón. Kiskillas vivas salteadas al punto de sal marina, navajas carnosas a la plancha con vinagreta cítrica y gambones dorados con ajo fresco.
            </p>
<div className="pt-space-xs space-y-space-sm">
<div className="flex items-center justify-between pb-space-xs border-b border-primary-container">
<div>
<span className="font-title-md text-title-md font-bold text-on-primary block">Kiskillas de Lonja al Punto de Sal</span>
<span className="font-body-sm text-body-sm text-primary-fixed-dim">Salteadas vivas al minuto, textura sedosa</span>
</div>
<span className="font-headline-sm text-headline-sm text-secondary-fixed font-bold">18,50 €</span>
</div>
<div className="flex items-center justify-between pb-space-xs border-b border-primary-container">
<div>
<span className="font-title-md text-title-md font-bold text-on-primary block">Navajas de Buceo a la Plancha</span>
<span className="font-body-sm text-body-sm text-primary-fixed-dim">Aove virgen extra, limón verde y perejil fresco</span>
</div>
<span className="font-headline-sm text-headline-sm text-secondary-fixed font-bold">16,00 €</span>
</div>
<div className="flex items-center justify-between">
<div>
<span className="font-title-md text-title-md font-bold text-on-primary block">Mariscada Templada La Cotorra</span>
<span className="font-body-sm text-body-sm text-primary-fixed-dim">Kiskilla, navajas, percebes y gambón al fuego</span>
</div>
<span className="font-headline-sm text-headline-sm text-secondary-fixed font-bold">38,00 €</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-md pt-space-sm">
<a className="inline-flex items-center gap-space-xs bg-tertiary-fixed text-on-tertiary-fixed font-label-lg text-label-lg px-space-lg py-space-sm rounded-full font-bold hover:bg-tertiary-fixed-dim transition-colors" href="tel:946047308">
<span className="material-symbols-outlined text-[18px]">call</span>
<span className="">Reservar Mariscada</span>
</a>
<span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider">Unidades limitadas</span>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-sm p-space-sm lg:p-space-md bg-primary-container/40">
<div className="relative h-64 sm:h-full rounded-lg overflow-hidden group">
<img alt="Kiskillas frescas de lonja La Cotorra Muda" src={`${baseUrl}images/gastronomia/kiskilla.webp`} />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed bg-primary/90 px-space-xs py-1 rounded-full inline-block">Directo de lonja</span>
<p className="font-title-md text-title-md font-bold text-on-primary mt-1">Kiskilla fresca cocida &amp; plancha</p>
</div>
</div>
<div className="relative h-64 sm:h-full rounded-lg overflow-hidden flex flex-col justify-between p-space-lg bg-surface-container-lowest text-on-surface">
<div>
<span className="material-symbols-outlined text-secondary text-[40px]">wine_bar</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-primary mt-space-sm">Maridaje recomendado</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                Acompaña el marisco con nuestro <strong>Txakoli de Bizkaia</strong> bien fresco o un verdejo de barrica seleccionado por sumillería.
              </p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Copa Txakoli D.O.</span>
<span className="font-title-md text-title-md font-bold text-primary">3,20 €</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Section: Barra de Pintxos  */}
<section className="menu-section px-6 lg:px-margin-lg py-space-xl"  data-category="pintxos"  style={{ display: (activeFilter === "all" || activeFilter === "pintxos") ? "block" : "none" }}>
<div className="max-w-7xl mx-auto space-y-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">El Alma de Bilbao</span>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold text-primary" style={{'color': 'rgb(45, 35, 30)'}}>Barra de Pintxos Diaria</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Barras repletas de color, bandejas que salen humeantes y el ritual vasco de charlar de pie con un buen bocado.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
<div className="lg:col-span-5 rounded-xl overflow-hidden bg-surface-container-lowest shadow-md">
<div className="h-72 overflow-hidden relative">
<img alt="Pintxos y aperitivo en barra de La Cotorra Muda" src={`${baseUrl}images/gastronomia/surtido-tablas-pintxos.webp`} />
<span className="absolute top-4 left-4 bg-primary text-on-primary px-space-sm py-space-xs rounded-full font-label-sm text-label-sm uppercase tracking-wider font-bold">
              Imprescindibles
            </span>
</div>
<div className="p-space-lg space-y-space-sm">
<h3 className="font-headline-sm text-headline-sm font-bold text-primary">Gildas &amp; Aperitivos de la Barra</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Nuestras gildas dobles con piparra de Ibarra, antxoa del Cantábrico y aceituna manzanilla rellena. Elaboradas cada dos horas para conservar el crujiente perfecto.
            </p>
<div className="flex items-center justify-between pt-space-xs font-title-md text-title-md font-bold text-primary">
<span className="">Gilda Clásica Doble</span>
<span className="bg-secondary-container text-on-secondary-container px-space-sm py-space-xs rounded-full text-label-lg font-bold">2,20 €</span>
</div>
</div>
</div>
<div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-md space-y-space-md">
<div className="flex items-center justify-between pb-space-sm"><div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 shadow-sm"><img src={`${baseUrl}images/gastronomia/tortilla-jugosa.webp`} alt="Tortilla de Patata Jugosa" className="w-full h-full object-cover" /></div>
<h4 className="font-title-lg text-title-lg font-bold text-primary">Pintxos fríos &amp; calientes</h4>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Salida continua</span>
</div>
<div className="space-y-space-md">
<div className="flex items-start justify-between gap-space-md pb-space-sm bg-surface-container-low p-space-sm rounded-lg"><div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 shadow-sm"><img src={`${baseUrl}images/gastronomia/tortilla-jugosa.webp`} alt="Tortilla de Patata Jugosa" className="w-full h-full object-cover" /></div>
<div>
<span className="font-title-md text-title-md font-bold text-on-surface">Tortilla de Patata Jugosa al Estilo Bilbao</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Con cebolla caramelizada suave, patata agria pochada y huevo de caserío. Se corta caliente cada 40 min.</p>
</div>
<span className="font-title-md text-title-md font-bold text-primary whitespace-nowrap">2,80 €</span>
</div>
<div className="flex items-start justify-between gap-space-md pb-space-sm bg-surface-container-low p-space-sm rounded-lg">
<div>
<span className="font-title-md text-title-md font-bold text-on-surface">Pintxo Txangurro Gratinado</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Centollo desmigado con fondo tradicional de tomate, puerro y un toque sutil de coñac flameado.</p>
</div>
<span className="font-title-md text-title-md font-bold text-primary whitespace-nowrap">3,90 €</span>
</div>
<div className="flex items-start justify-between gap-space-md pb-space-sm bg-surface-container-low p-space-sm rounded-lg">
<div>
<span className="font-title-md text-title-md font-bold text-on-surface">Solomillo Ibérico con Foie y Reducción</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Montado sobre rebanada de pan rústico tostado con compota de manzana y sal Maldon.</p>
</div>
<span className="font-title-md text-title-md font-bold text-primary whitespace-nowrap">4,20 €</span>
</div>
<div className="flex items-start justify-between gap-space-md pb-space-sm bg-surface-container-low p-space-sm rounded-lg">
<div>
<span className="font-title-md text-title-md font-bold text-on-surface">Chistorra de Arbizu Frita al Txakoli</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">En cazuelita individual con pan crujiente para mojar la salsa reducida.</p>
</div>
<span className="font-title-md text-title-md font-bold text-primary whitespace-nowrap">3,50 €</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Section: Desayunos & Brunch  */}
<section className="menu-section px-6 lg:px-margin-lg py-space-xl bg-surface-container-low"  data-category="desayunos"  style={{ display: (activeFilter === "all" || activeFilter === "desayunos") ? "block" : "none" }}>
<div className="max-w-7xl mx-auto space-y-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Mañanas con Ritmo</span>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold text-primary" style={{'color': 'rgb(45, 35, 30)'}}>Desayunos &amp; Brunch</h2>
</div>
<div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-lowest shadow-sm font-label-md text-label-md text-on-surface">
<span className="material-symbols-outlined text-[16px] text-secondary">wb_sunny</span>
<span className="">Servido todos los días de 08:00 a 13:00</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-7 rounded-xl overflow-hidden shadow-lg h-96 relative">
<img alt="Brunch artesanal en Bilbao La Cotorra Muda" src={`${baseUrl}images/gastronomia/bocadillos.webp`} />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-lg">
<div className="text-on-primary">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">El Rey de las Mañanas</span>
<p className="font-headline-md text-headline-md-mobile lg:text-headline-md font-bold">Combo Brunch Completo La Cotorra</p>
<p className="font-body-md text-body-md text-primary-fixed-dim mt-1">Tostada artesana + Café de especialidad + Zumo o Smoothie natural + Repostería del día</p>
</div>
</div>
</div>
<div className="lg:col-span-5 space-y-space-sm">
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
<div className="flex justify-between items-start">
<div>
<h4 className="font-title-md text-title-md font-bold text-primary">Tostada Ibérica de Masa Madre</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Pan rústico de hogaza, tomate natural rallado, AOVE Arbequina y jamón de bellota 100%.</p>
</div>
<span className="font-title-md text-title-md font-bold text-primary">5,50 €</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
<div className="flex justify-between items-start">
<div>
<h4 className="font-title-md text-title-md font-bold text-primary">Avocado &amp; Huevo Poché</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Aguacate machacado al momento con lima, copos de chile suave, semillas tostadas y huevo campero.</p>
</div>
<span className="font-title-md text-title-md font-bold text-primary">6,90 €</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
<div className="flex justify-between items-start">
<div>
<h4 className="font-title-md text-title-md font-bold text-primary">Croissant Francés Horneado</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Mantequilla pura, mermeladas de frutos del bosque caseras o relleno de crema de avellana.</p>
</div>
<span className="font-title-md text-title-md font-bold text-primary">2,60 €</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
<div className="flex justify-between items-start">
<div>
<h4 className="font-title-md text-title-md font-bold text-primary">Café de Especialidad Tostado</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Espresso doble, Flat White, Capuccino cremoso con leche fresca de granja o vegetal.</p>
</div>
<span className="font-title-md text-title-md font-bold text-primary">2,20 €</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Section: Smoothies & Bebidas Naturales  */}
<section className="menu-section px-6 lg:px-margin-lg py-space-xl"  data-category="smoothies"  style={{ display: (activeFilter === "all" || activeFilter === "smoothies") ? "block" : "none" }}>
<div className="max-w-7xl mx-auto space-y-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">100% Natural &amp; Energético</span>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold text-primary" style={{'color': 'rgb(45, 35, 30)'}}>Smoothies &amp; Zumos Vivos</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Fruta entera triturada al instante. Sin azúcares añadidos ni concentrados industriales. Pura vitalidad.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md flex flex-col justify-between">
<div className="h-64 overflow-hidden">
<img alt="Smoothie de fruta natural recién exprimido en vaso" src={`${baseUrl}images/gastronomia/smoothie.jpg`} />
</div>
<div className="p-space-lg space-y-space-sm flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<h3 className="font-title-lg text-title-lg font-bold text-primary">Green Detox Cotorra</h3>
<span className="font-title-md text-title-md font-bold text-secondary">4,80 €</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Manzana verde ácida, espinacas tiernas, pepino fresco, apio, jengibre y zumo de lima recién exprimido.
              </p>
</div>
<div className="pt-space-sm flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase">
<span className="material-symbols-outlined text-[16px] text-tertiary">eco</span>
<span className="">Depurativo · Antioxidante</span>
</div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md flex flex-col justify-between">
<div className="h-64 overflow-hidden">
<img alt="Tarjeta y detalles gourmet en La Cotorra Muda" src={`${baseUrl}images/branding/tarjeta.jpg`} />
</div>
<div className="p-space-lg space-y-space-sm flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<h3 className="font-title-lg text-title-lg font-bold text-primary">Tropical Bilbao Breeze</h3>
<span className="font-title-md text-title-md font-bold text-secondary">4,90 €</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Mango maduro, maracuyá, naranja natural, leche de coco cremosa y semillas de chía crujientes.
              </p>
</div>
<div className="pt-space-sm flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase">
<span className="material-symbols-outlined text-[16px] text-secondary">local_florist</span>
<span className="">Energía pura · Vegano</span>
</div>
</div>
</div>
<div className="bg-primary text-on-primary rounded-xl p-space-lg flex flex-col justify-between shadow-md">
<div className="space-y-space-md">
<span className="material-symbols-outlined text-secondary-fixed text-[44px]">blender</span>
<h3 className="font-headline-sm text-headline-sm font-bold">Zumos Exprimidos al Momento</h3>
<div className="space-y-space-sm pt-space-xs">
<div className="flex items-center justify-between pb-space-xs border-b border-primary-container">
<span className="font-body-md text-body-md">Naranja Valencia 100%</span>
<span className="font-title-md text-title-md font-bold text-secondary-fixed">3,20 €</span>
</div>
<div className="flex items-center justify-between pb-space-xs border-b border-primary-container">
<span className="font-body-md text-body-md">Zanahoria, Naranja &amp; Jengibre</span>
<span className="font-title-md text-title-md font-bold text-secondary-fixed">3,80 €</span>
</div>
<div className="flex items-center justify-between">
<span className="font-body-md text-body-md">Limonada Casera con Menta Fresca</span>
<span className="font-title-md text-title-md font-bold text-secondary-fixed">3,50 €</span>
</div>
</div>
</div>
<div className="pt-space-md">
<p className="font-body-sm text-body-sm text-primary-fixed-dim">
              Pídelo para tomar en terraza o en vaso compostable para llevar.
            </p>
</div>
</div>
</div>
</div>
</section>
{/*  Section: Raciones & Cazuelas  */}
<section className="menu-section px-6 lg:px-margin-lg py-space-xl bg-surface-container-low"  data-category="raciones"  style={{ display: (activeFilter === "all" || activeFilter === "raciones") ? "block" : "none" }}>
<div className="max-w-7xl mx-auto space-y-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Cuchara &amp; Placer Compartido</span>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold text-primary" style={{'color': 'rgb(45, 35, 30)'}}>Raciones, Cazuelas &amp; Tablas</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Recetas cocinadas a fuego lento, salsas untuosas de toda la vida y quesos seleccionados de pastores del País Vasco.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/*  Item 1: Albondigas  */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="h-52 overflow-hidden">
<img alt="Albóndigas caseras en salsa de la abuela" src={`${baseUrl}images/gastronomia/albondigas.jpg`} />
</div>
<div className="p-space-md flex-1 flex flex-col justify-between space-y-space-sm">
<div>
<div className="flex justify-between items-start">
<h3 className="font-title-md text-title-md font-bold text-primary">Albóndigas de Ternera</h3>
<span className="font-title-md text-title-md font-bold text-secondary">11,50 €</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                En salsa tradicional de verduritas confitadas, caldo concentrado de hueso y patatas dado crujientes.
              </p>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Cazuela caliente</span>
</div>
</div>
{/*  Item 2: Caracoles  */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="h-52 overflow-hidden">
<img alt="Caracoles en salsa vizcaína tradicional" src={`${baseUrl}images/gastronomia/caracoles.jpg`} />
</div>
<div className="p-space-md flex-1 flex flex-col justify-between space-y-space-sm">
<div>
<div className="flex justify-between items-start">
<h3 className="font-title-md text-title-md font-bold text-primary">Caracoles en Vizcaína</h3>
<span className="font-title-md text-title-md font-bold text-secondary">13,00 €</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Receta vizcaína de pimiento choricero, jamón picado, panceta ibérica y salsa sedosa picantona.
              </p>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Especialidad local</span>
</div>
</div>
{/*  Item 3: Tabla de quesos  */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="h-52 overflow-hidden">
<img alt="Tabla de quesos afinados Idiazabal y nueces" src={`${baseUrl}images/gastronomia/tabla-queso.webp`} />
</div>
<div className="p-space-md flex-1 flex flex-col justify-between space-y-space-sm">
<div>
<div className="flex justify-between items-start">
<h3 className="font-title-md text-title-md font-bold text-primary">Tabla de Quesos Afinados</h3>
<span className="font-title-md text-title-md font-bold text-secondary">15,50 €</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Idiazabal ahumado, Roncal curado, queso azul de caserío, dulce de membrillo y nueces del país.
              </p>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Ideal para compartir</span>
</div>
</div>
{/*  Item 4: Bocadillos Crujientes  */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="h-52 overflow-hidden">
<img alt="Bocadillos crujientes en pan artesanal" src={`${baseUrl}images/gastronomia/bocadillos.webp`} />
</div>
<div className="p-space-md flex-1 flex flex-col justify-between space-y-space-sm">
<div>
<div className="flex justify-between items-start">
<h3 className="font-title-md text-title-md font-bold text-primary">Bocadillos de Barra</h3>
<span className="font-title-md text-title-md font-bold text-secondary">6,50 €</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Pan de cristal o rústico: rabas de calamar crujientes, lomo con pimientos o bonito con piperrada.
              </p>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Pan recién horneado</span>
</div>
</div>
</div>
</div>
</section>
{/*  Section: Bodega & Vinos  */}
<section className="menu-section px-6 lg:px-margin-lg py-space-xl"  data-category="vinos"  style={{ display: (activeFilter === "all" || activeFilter === "vinos") ? "block" : "none" }}>
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-5 relative">
<div className="rounded-xl overflow-hidden shadow-lg h-96">
<img alt="Copa de vino tinto crianza y bodega selecta" src={`${baseUrl}images/gastronomia/copa-vino.jpg`} />
</div>
<div className="absolute -bottom-4 -right-4 bg-tertiary-fixed text-on-tertiary-fixed px-space-md py-space-xs rounded-full font-label-lg text-label-lg font-bold shadow-md">
            +35 Referencias de Bodega
          </div>
</div>
<div className="lg:col-span-7 space-y-space-md">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Tragos con Identidad</span>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold text-primary" style={{'color': 'rgb(45, 35, 30)'}}>Vinos, Txakolis &amp; Vermuts</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Una bodega viva con especial cariño por los productores de la comarca, vinos de Rioja Alavesa de pequeños viticultores y vermuts preparados al estilo del Botxo.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
<div className="p-space-md bg-surface-container rounded-lg space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Blancos &amp; Frescos</span>
<p className="font-title-md text-title-md font-bold text-primary">Txakoli de Bizkaia D.O.</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Hondarrabi Zuri vibrante, notas cítricas y acidez chispeante.</p>
<div className="flex justify-between items-center pt-space-xs font-label-lg text-label-lg">
<span className="text-on-surface">Copa 3,20 €</span>
<span className="text-primary font-bold">Botella 18,00 €</span>
</div>
</div>
<div className="p-space-md bg-surface-container rounded-lg space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Tintos con Alma</span>
<p className="font-title-md text-title-md font-bold text-primary">Rioja Alavesa Crianza</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Tempranillo de viña vieja, roble francés, tanino aterciopelado.</p>
<div className="flex justify-between items-center pt-space-xs font-label-lg text-label-lg">
<span className="text-on-surface">Copa 3,50 €</span>
<span className="text-primary font-bold">Botella 19,50 €</span>
</div>
</div>
<div className="p-space-md bg-surface-container rounded-lg space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Aperitivo Vasco</span>
<p className="font-title-md text-title-md font-bold text-primary">Vermut Preparado La Cotorra</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Con ginebra, toque de campari, cáscara de naranja y aceituna gordal.</p>
<div className="flex justify-between items-center pt-space-xs font-label-lg text-label-lg">
<span className="text-on-surface">Copa servida</span>
<span className="text-primary font-bold">3,80 €</span>
</div>
</div>
<div className="p-space-md bg-surface-container rounded-lg space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Cerveza de Grifo</span>
<p className="font-title-md text-title-md font-bold text-primary">Caña Maestra Doble Malta</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Tirada con doble crema densa a temperatura glaciar.</p>
<div className="flex justify-between items-center pt-space-xs font-label-lg text-label-lg">
<span className="text-on-surface">Zurito 1,80 €</span>
<span className="text-primary font-bold">Cañón 3,00 €</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Take Away Section  */}
<section className="menu-section px-6 lg:px-margin-lg py-space-xl bg-surface-container"  data-category="takeaway"  id="take-away" style={{ display: (activeFilter === "all" || activeFilter === "takeaway") ? "block" : "none" }}>
<div className="max-w-7xl mx-auto bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-md">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-4 rounded-lg overflow-hidden h-72">
<img alt="Comida para llevar y take away en La Cotorra Muda Bilbao" src={`${baseUrl}images/gastronomia/take-away.jpg`} />
</div>
<div className="lg:col-span-8 space-y-space-md">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm uppercase tracking-widest font-bold">
<span className="material-symbols-outlined text-[16px]">takeout_dining</span>
<span className="">Servicio Take Away</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold text-primary" style={{'color': 'rgb(45, 35, 30)'}}>
            ¿Comes en casa o en la oficina?
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Preparamos todas nuestras raciones, cazuelas caseras, tortillas recién hechas y menús diarios en envases térmicos sostenibles. Llámanos con 20 minutos de antelación y lo tendrás listo para recoger en barra sin esperas.
          </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-xs">
<a className="inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary hover:bg-secondary px-space-lg py-space-sm rounded-full font-label-lg text-label-lg uppercase tracking-wide transition-colors shadow-sm" href="tel:674266613">
<span className="material-symbols-outlined text-[20px]">phone_iphone</span>
<span className="">Llamar al 674 26 66 13</span>
</a>
<a className="inline-flex items-center justify-center gap-space-xs bg-surface-container text-primary hover:bg-surface-container-high px-space-lg py-space-sm rounded-full font-label-lg text-label-lg uppercase tracking-wide transition-colors" href="tel:946047308">
<span className="material-symbols-outlined text-[20px]">call</span>
<span className="">Llamar al 946 04 73 08</span>
</a>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-secondary text-[18px]">done</span> Envases térmicos libres de plástico</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-secondary text-[18px]">done</span> Recogida rápida en barra</span>
</div>
</div>
</div>
</div>
</section>
{/*  Interactive Category Filtering Logic  */}

</div>
    </main>
  );
};

export default Carta;
