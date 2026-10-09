import React, { useState } from 'react';
import HeroMascot from '../components/HeroMascot';

interface HomeProps {
  onNavigate: (tab: 'inicio' | 'carta' | 'grupos' | 'el-dia-a-dia' | 'contacto') => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const baseUrl = import.meta.env.BASE_URL;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  return (
    <main className="w-full pt-20 bg-surface">
      <div className="flex flex-col w-full text-on-surface">
{/*  1. HERO — IMPACTO INMEDIATO  */}
<section className="relative w-full overflow-hidden bg-surface pb-space-xl">
<div className="max-w-7xl mx-auto px-6 lg:px-margin-lg pt-space-lg">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
{/*  Left Column: Typography & CTAs  */}
<div className="lg:col-span-7 flex flex-col space-y-space-md z-10">
<div className="inline-flex items-center gap-space-xs w-fit bg-[#2D231E] text-surface-bright px-space-md py-space-xs rounded-full shadow-sm border border-[#3E3028]"><span className="w-2.5 h-2.5 rounded-full bg-[#dded3a] animate-ping"></span><span className="font-label-sm text-label-sm uppercase tracking-widest font-bold text-[#dded3a]">Barra Viva · Bilbao Indautxu</span></div>
<h1 className="font-display-xl text-display-xl-mobile lg:text-display-xl font-extrabold uppercase tracking-tight text-[#2D231E] leading-none">
            Aquí la cotorra es muda. <br />
<span className="text-secondary italic font-light">El resto, no.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Desayunos con fundamento, barra rebosante de pintxos, buena mesa y mejores encuentros. Un espacio auténtico para saborear y vivir Bilbao a cualquier hora del día.
          </p>
<div className="flex flex-wrap items-center gap-space-md pt-space-sm">
<a className="bg-primary text-on-primary hover:bg-secondary transition-all rounded-full px-space-lg py-space-sm font-label-lg text-label-lg uppercase tracking-wider shadow-[3px_3px_0px_#79f2f5] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 inline-flex items-center gap-space-xs" href="#carta">
<span className="">Descubre nuestra carta</span>
<span className="material-symbols-outlined text-lg">restaurant_menu</span>
</a>
<a className="bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors rounded-full px-space-lg py-space-sm font-label-lg text-label-lg uppercase tracking-wider shadow-sm inline-flex items-center gap-space-xs" href="#contacto">
<span className="material-symbols-outlined text-lg">near_me</span>
<span className="">Ven a vernos</span>
</a>
</div>
{/*  Interactive Micro-Badge  */}
<div className="pt-space-md flex items-center gap-space-sm text-on-surface-variant">
<a className="inline-flex items-center gap-2 group font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold" href="#experiencia">
<span className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center group-hover:translate-y-0.5 transition-transform">
<span className="material-symbols-outlined text-base">arrow_downward</span>
</span>
<span className="">Scroll para saborear Bilbao</span>
</a>
</div>
</div>
{/*  Right Column: Visual Composition with Mascot & Real Photos  */}
<div className="lg:col-span-5 relative mt-space-md lg:mt-0 flex flex-col items-center">
            <HeroMascot />
          </div>
        </div>
      </div>
    </section>
{/*  2. SECCIÓN: DE LA MAÑANA A LA MESA  */}
<section className="w-full py-space-xl bg-surface-container-low" id="experiencia">
<div className="max-w-7xl mx-auto px-6 lg:px-margin-lg">
{/*  Section Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-[#5C483D] font-bold flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#332822]"></span>Ritmo continuo</span>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-[#2D231E] tracking-tight font-bold">
            De la mañana a la mesa
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">Siempre hay un buen pretexto para parar en La Cotorra.</p>
</div>
<div className="hidden md:flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-[#5C483D] font-bold flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#332822]"></span>Ritmo continuo</span>
<span className="">Servicio continuo en barra y mesa</span>
</div>
</div>
{/*  Asymmetrical Editorial Magazine Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Desayunos y Café artesanal (Col 7)  */}
<div className="md:col-span-7 bg-surface-container-lowest rounded-3xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
<div className="flex flex-col sm:flex-row gap-space-md items-start sm:items-center justify-between mb-space-sm">
<div>
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2.5 py-0.5 rounded-full uppercase font-bold">08:00h en adelante</span>
<h3 className="font-headline-sm text-headline-sm text-[#2D231E] mt-space-xs font-bold">Desayunos &amp; Café artesanal</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Tostadas de hogaza con aguacate, bollería tierna y cafés de especialidad para arrancar con brío.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-space-sm mt-space-sm">
<div className="h-52 rounded-2xl overflow-hidden relative">
<img alt="Café artesanal y desayuno completo" src={`${baseUrl}images/ambiente/hero2.jpg`} />
</div>
<div className="h-52 rounded-2xl overflow-hidden relative">
<img alt="Detalle del café y tostadas" src={`${baseUrl}images/ambiente/hero2.jpg`} />
</div>
</div>
</div>
{/*  Smoothies y Zumos naturales (Col 5)  */}
<div className="md:col-span-5 bg-surface-container-lowest rounded-3xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
<div>
<span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2.5 py-0.5 rounded-full uppercase font-bold">100% Natural</span>
<h3 className="font-headline-sm text-headline-sm text-[#2D231E] mt-space-xs font-bold">Smoothies &amp; Zumos</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Fruta fresca de temporada batida al momento. Energía pura y combinaciones refrescantes.</p>
</div>
<div className="h-52 w-full rounded-2xl overflow-hidden mt-space-sm">
<img alt="Smoothies coloridos de frutas frescas" src={`${baseUrl}images/gastronomia/smoothie.jpg`} />
</div>
</div>
{/*  Barra de Pintxos bilbaínos (Col 6)  */}
<div className="md:col-span-6 bg-surface-container-lowest rounded-3xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
<div>
<div className="flex items-center justify-between">
<span className="bg-surface-variant text-primary font-label-sm text-label-sm px-2.5 py-0.5 rounded-full uppercase font-bold">Tradición &amp; Vanguardia</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-[#5C483D] font-bold flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#332822]"></span>Ritmo continuo</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mt-space-xs font-bold">La Barra de Pintxos</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Gildas clásicas, tortillas jugosas al punto, txangurro y bocados de autor recién salidos.</p>
</div>
<div className="grid grid-cols-2 gap-space-sm mt-space-sm">
<div className="h-44 rounded-2xl overflow-hidden">
<img alt="Tortilla de patatas casera jugosa" src={`${baseUrl}images/gastronomia/tortilla-jugosa.webp`} />
</div>
<div className="h-44 rounded-2xl overflow-hidden">
<img alt="Tablas de pintxos y tortillas variadas" src={`${baseUrl}images/gastronomia/surtido-tablas-pintxos.webp`} />
</div>
</div>
</div>
{/*  Raciones Caseras (Col 6)  */}
<div className="md:col-span-6 bg-surface-container-lowest rounded-3xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
<div>
<div className="flex items-center justify-between">
<span className="bg-surface-variant text-primary font-label-sm text-label-sm px-2.5 py-0.5 rounded-full uppercase font-bold">Para Compartir</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-[#5C483D] font-bold flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#332822]"></span>Ritmo continuo</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mt-space-xs font-bold">Raciones de Siempre</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Albóndigas melosas en su jugo, caracoles en salsa vizcaína y pan para mojar sin vergüenza.</p>
</div>
<div className="grid grid-cols-2 gap-space-sm mt-space-sm">
<div className="h-44 rounded-2xl overflow-hidden">
<img alt="Albóndigas caseras en salsa con pan crujiente" src={`${baseUrl}images/gastronomia/albondigas.jpg`} />
</div>
<div className="h-44 rounded-2xl overflow-hidden">
<img alt="Cazuela de caracoles tradicionales con salsa de tomate picante" src={`${baseUrl}images/gastronomia/caracoles.jpg`} />
</div>
</div>
</div>
{/*  FEATURE DESTACADO: MARISCO DE FIN DE SEMANA (Col 12)  */}
<div className="md:col-span-12 bg-primary text-on-primary rounded-3xl p-space-lg shadow-lg relative overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center relative z-10">
<div className="lg:col-span-6 space-y-space-sm">
<div className="inline-flex items-center gap-space-xs bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-3 py-1 rounded-full uppercase font-bold">
<span className="material-symbols-outlined text-sm">stars</span>
<span className="">Exclusivo: Viernes &amp; Sábados</span>
</div>
<h3 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-extrabold uppercase tracking-tight text-surface">
                Marisco de Fin de Semana
              </h3>
<p className="font-body-md text-body-md text-primary-fixed-dim">
                Kiskillas vivas de lonja salteadas con mimo, gambas blancas a la plancha, nécoras y mariscada de temporada recién traída de los puertos cercanos. Directo del mar a tu mesa en Indautxu.
              </p>
<div className="pt-space-xs flex items-center gap-space-md">
<a className="bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim transition-colors rounded-full px-space-md py-space-xs font-label-lg text-label-lg uppercase tracking-wider font-bold" href="#contacto">
                  Reservar marisco de lonja
                </a>
<span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-widest font-semibold">Plazas limitadas</span>
</div>
</div>
<div className="lg:col-span-6 grid grid-cols-2 gap-space-sm">
<div className="h-64 rounded-2xl overflow-hidden shadow-md">
<img alt="Mariscada fresca y marisco a la plancha" src={`${baseUrl}images/gastronomia/kiskilla.webp`} />
</div>
<div className="h-64 rounded-2xl overflow-hidden shadow-md">
<img alt="Mejillones tigres caseros con salsa especial" src={`${baseUrl}images/gastronomia/tigres.jpg`} />
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  3. SECCIÓN: LA CARTA  */}
<section className="w-full py-space-xl bg-surface" id="carta">
<div className="max-w-7xl mx-auto px-6 lg:px-margin-lg">
{/*  Section Header & Filter Tabs  */}
<div className="flex flex-col items-center text-center space-y-space-xs mb-space-lg">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Gastronomía sincera</span>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-[#2D231E] tracking-tight font-bold">
          Nuestra Carta Seleccionada
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          Elaboraciones limpias, materia prima sin artificios y el punto justo de vanguardia.
        </p>
{/*  Categories Nav Filter  */}
<div className="flex flex-wrap items-center justify-center gap-space-xs pt-space-sm" id="menu-filters"><button
          key="all"
          type="button"
          onClick={() => setActiveCategory('all')}
          className={`menu-filter-btn px-space-md py-1.5 rounded-full font-label-sm text-label-sm uppercase transition-all ${
            activeCategory === 'all'
              ? 'bg-[#2D231E] text-surface-bright shadow-sm font-bold'
              : 'bg-surface-container-high text-on-surface hover:bg-surface-variant'
          }`}
        >Todos</button><button
          key="pintxos"
          type="button"
          onClick={() => setActiveCategory('pintxos')}
          className={`menu-filter-btn px-space-md py-1.5 rounded-full font-label-sm text-label-sm uppercase transition-all ${
            activeCategory === 'pintxos'
              ? 'bg-[#2D231E] text-surface-bright shadow-sm font-bold'
              : 'bg-surface-container-high text-on-surface hover:bg-surface-variant'
          }`}
        >Pintxos</button><button
          key="bocadillos"
          type="button"
          onClick={() => setActiveCategory('bocadillos')}
          className={`menu-filter-btn px-space-md py-1.5 rounded-full font-label-sm text-label-sm uppercase transition-all ${
            activeCategory === 'bocadillos'
              ? 'bg-[#2D231E] text-surface-bright shadow-sm font-bold'
              : 'bg-surface-container-high text-on-surface hover:bg-surface-variant'
          }`}
        >Bocadillos & Tablas</button><button
          key="especiales"
          type="button"
          onClick={() => setActiveCategory('especiales')}
          className={`menu-filter-btn px-space-md py-1.5 rounded-full font-label-sm text-label-sm uppercase transition-all ${
            activeCategory === 'especiales'
              ? 'bg-[#2D231E] text-surface-bright shadow-sm font-bold'
              : 'bg-surface-container-high text-on-surface hover:bg-surface-variant'
          }`}
        >Platos del Día</button><button
          key="marisco"
          type="button"
          onClick={() => setActiveCategory('marisco')}
          className={`menu-filter-btn px-space-md py-1.5 rounded-full font-label-sm text-label-sm uppercase transition-all ${
            activeCategory === 'marisco'
              ? 'bg-[#2D231E] text-surface-bright shadow-sm font-bold'
              : 'bg-surface-container-high text-on-surface hover:bg-surface-variant'
          }`}
        >Marisco Finde</button></div>
</div>
{/*  Featured Menu Items Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter" id="menu-cards">
{/*  Dish Card 1: Bocadillos artesanos  */}
<div className="menu-item bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow"  data-cat="bocadillos" style={{ display: (activeCategory === "all" || activeCategory === "bocadillos") ? "flex" : "none" }} >
<div className="h-56 overflow-hidden relative">
<img alt="Bocadillo artesanal con ingredientes selectos" src={`${baseUrl}images/gastronomia/bocadillos.webp`} />
<span className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase font-bold">Crujiente</span>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-title-md text-title-md text-primary font-bold">Bocadillos de Autor</h4>
<span className="font-title-md text-title-md text-secondary font-bold">7,50€</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Pan rústico de masa madre, rellenos calientes y fríos, jamón ibérico y combinaciones del chef.</p>
</div>
<div className="pt-space-sm flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">thumb_up</span>
<span className="">Recomendado de barra</span>
</div>
</div>
</div>
{/*  Dish Card 2: Tabla de quesos  */}
<div className="menu-item bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow"  data-cat="bocadillos" style={{ display: (activeCategory === "all" || activeCategory === "bocadillos") ? "flex" : "none" }} >
<div className="h-56 overflow-hidden relative">
<img alt="Tabla de quesos artesanos e Idiazabal" src={`${baseUrl}images/gastronomia/tabla-queso.webp`} />
<span className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase font-bold">D.O.</span>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-title-md text-title-md text-primary font-bold">Tabla de Quesos del País</h4>
<span className="font-title-md text-title-md text-secondary font-bold">14,00€</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Selección de Idiazabal ahumado, quesos curados de pastor y confitura de higos casera.</p>
</div>
<div className="pt-space-sm flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">wine_bar</span>
<span className="">Marida con Txakoli</span>
</div>
</div>
</div>
{/*  Dish Card 3: Pizza casera artesana  */}
<div className="menu-item bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow"  data-cat="especiales" style={{ display: (activeCategory === "all" || activeCategory === "especiales") ? "flex" : "none" }} >
<div className="h-56 overflow-hidden relative">
<img alt="Pizza casera al horno" src={`${baseUrl}images/gastronomia/pizza.jpg`} />
<span className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase font-bold">Al Horno</span>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-title-md text-title-md text-primary font-bold">Pizzas de Masa Madre</h4>
<span className="font-title-md text-title-md text-secondary font-bold">12,50€</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Masa fermentada lentamente, mozzarella fior di latte e ingredientes de proximidad.</p>
</div>
<div className="pt-space-sm flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">local_fire_department</span>
<span className="">Masa 48h fermentación</span>
</div>
</div>
</div>
{/*  Dish Card 4: Paella del día  */}
<div className="menu-item bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow"  data-cat="especiales" style={{ display: (activeCategory === "all" || activeCategory === "especiales") ? "flex" : "none" }} >
<div className="h-56 overflow-hidden relative">
<img alt="Paella de marisco y verduras del día" src={`${baseUrl}images/gastronomia/paella.webp`} />
<span className="absolute top-3 right-3 bg-secondary text-on-secondary font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase font-bold">Del Día</span>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-title-md text-title-md text-primary font-bold">Arroces &amp; Paellas</h4>
<span className="font-title-md text-title-md text-secondary font-bold">15,00€</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Arroz meloso o seco con fumet de roca, marisco seleccionado o verduras de caserío.</p>
</div>
<div className="pt-space-sm flex items-center gap-1 text-error font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-sm">alarm</span>
<span className="">Mediodías bajo pedido</span>
</div>
</div>
</div>
</div>
{/*  Action Button for Full Menu  */}
<div className="mt-space-lg flex justify-center">
<a className="bg-primary text-on-primary hover:bg-secondary px-space-lg py-space-sm rounded-full font-label-lg text-label-lg uppercase tracking-wider inline-flex items-center gap-space-xs shadow-md transition-all" href="#contacto">
<span className="">Ver la carta completa y alérgenos</span>
<span className="material-symbols-outlined text-lg">arrow_forward</span>
</a>
</div>
</div>
</section>
{/*  4. SECCIÓN: EL PLAN DEL DÍA  */}
<section className="w-full py-space-xl bg-primary-container text-on-primary relative overflow-hidden">
{/*  Subtle radial glow  */}
<div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary/30 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-margin-lg relative z-10">
<div className="bg-primary/95 rounded-3xl p-space-lg lg:p-space-xl shadow-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
<div className="lg:col-span-7 space-y-space-md">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-tertiary-fixed"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim font-bold">Menú Diario Casero</span>
</div>
<h2 className="font-display-xl text-display-xl-mobile lg:text-headline-lg font-extrabold uppercase text-surface tracking-tight">
              ¿Y hoy qué se come?
            </h2>
<p className="font-body-lg text-body-lg text-primary-fixed-dim leading-relaxed">
              Plato del día elaborado cada mañana con producto directo de la plaza y de nuestros proveedores de confianza. Primero de cuchara o verdura, segundo de lonja o carnicería, postre artesano, pan y bebida.
            </p>
<div className="bg-primary-container/80 rounded-2xl p-space-md space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg uppercase text-surface font-bold">Sugerencia de hoy:</span>
<span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-bold px-2 py-0.5 rounded-full">14,50€ completo</span>
</div>
<p className="font-body-md text-body-md text-surface/90">
                Pochas tiernas guisadas con marisco de primero · Merluza a la plancha con vinagreta de tomate o carrillera ibérica glaseada de segundo.
              </p>
</div>
<div className="flex flex-wrap items-center gap-space-md pt-space-xs">
<a className="bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim transition-colors px-space-lg py-space-sm rounded-full font-label-lg text-label-lg uppercase tracking-wider font-bold inline-flex items-center gap-space-xs shadow-md" href="tel:946047308">
<span className="material-symbols-outlined text-lg">restaurant</span>
<span className="">Ver menú de hoy</span>
</a>
<div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-container text-surface-bright font-label-sm text-label-sm">
<span className="">🦐</span>
<span className="">Finde: Mariscada &amp; Kiskilla fresca</span>
</div>
</div>
</div>
<div className="lg:col-span-5 relative flex flex-col items-center justify-center">
<div className="relative w-full aspect-square max-w-sm rounded-3xl overflow-hidden shadow-2xl">
<img alt="La Cotorra Muda y gastronomía diaria" src={`${baseUrl}images/branding/logo-pared-fruta.jpg`} />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 text-center">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim font-bold">Siempre fresco</span>
<p className="font-title-md text-title-md text-surface font-bold">Cocinamos como en casa</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  5. SECCIÓN: ATHLETIC Y AMBIENTE  */}
<section className="w-full py-space-xl bg-surface">
<div className="max-w-7xl mx-auto px-6 lg:px-margin-lg">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
{/*  Left Visuals: Copa vino & Aperitivo  */}
<div className="lg:col-span-6 grid grid-cols-2 gap-space-md">
<div className="relative rounded-3xl overflow-hidden shadow-md h-72">
<img alt="Brindis con copa de vino y ambiente de cuadrilla" src={`${baseUrl}images/gastronomia/copa-vino.jpg`} />
<div className="absolute top-3 left-3 bg-error text-on-error font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-bold">
              Zuri-gorri
            </div>
</div>
<div className="relative rounded-3xl overflow-hidden shadow-md h-72 mt-space-md">
<img alt="Copa aperitivo y vermut preparado" src={`${baseUrl}images/gastronomia/aperitivo.jpg`} />
<div className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-bold">
              El Poteo
            </div>
</div>
</div>
{/*  Right Content: San Mamés & Espíritu Bilbaíno  */}
<div className="lg:col-span-6 space-y-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-3 h-3 rounded-full bg-error"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-error font-bold">San Mamés a un paso</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-[#2D231E] tracking-tight font-bold">
            Aquí también se siente el Athletic
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
            Pasión bilbaína, cuadrillas incondicionales, días de partido y la mejor previa. En La Cotorra Muda el poteo se vive con orgullo rojiblanco: una copa de crianza, un txakoli bien tirado, risas de toda la vida y el rugido de la catedral a escasos metros.
          </p>
<div className="grid grid-cols-2 gap-space-md pt-space-xs"><div className="p-space-sm rounded-2xl bg-[#2D231E] text-surface-bright border border-[#3E3028]"><span className="font-headline-sm text-headline-sm text-[#dded3a] font-bold">100%</span><p className="font-body-sm text-body-sm text-surface-container-high">Ambiente de previa y pospartido</p></div><div className="p-space-sm rounded-2xl bg-[#2D231E] text-surface-bright border border-[#3E3028]"><span className="font-headline-sm text-headline-sm text-[#dded3a] font-bold">5 min</span><p className="font-body-sm text-body-sm text-surface-container-high">Caminando directo a San Mamés</p></div></div>
</div>
</div>
</div>
</section>
{/*  6. SECCIÓN: GRUPOS Y ENCUENTROS  */}
<section className="w-full py-space-xl bg-surface-container-high">
<div className="max-w-7xl mx-auto px-6 lg:px-margin-lg">
<div className="bg-surface-container-lowest rounded-3xl p-space-lg lg:p-space-xl shadow-md">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
<div className="lg:col-span-6 space-y-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Mesas &amp; Cuadrillas</span>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-[#2D231E] tracking-tight font-bold">
              Los mejores planes se comparten
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
              Cumpleaños, picoteos con la cuadrilla, despedidas o comidas de trabajo sin rigideces. Adaptamos menús a medida, tablas gigantes de degustación y reservas de espacio para que vosotros solo tengáis que brindar.
            </p>
<ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
<span className="">Menús cerrados de picoteo con barra libre opcional</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
<span className="">Opciones vegetarianas y sin gluten previo aviso</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
<span className="">Reserva rápida sin complicaciones de pago</span>
</li>
</ul>
<div className="pt-space-xs">
<a className="bg-primary text-on-primary hover:bg-secondary px-space-lg py-space-sm rounded-full font-label-lg text-label-lg uppercase tracking-wider inline-flex items-center gap-space-xs shadow-sm transition-all" href="tel:674266613">
<span className="material-symbols-outlined text-lg">groups</span>
<span className="">Consúltanos para grupos</span>
</a>
</div>
</div>
<div className="lg:col-span-6">
<div className="rounded-3xl overflow-hidden shadow-lg h-80 lg:h-96">
<img alt="Tablas surtidas y celebraciones de grupo en La Cotorra Muda" src={`${baseUrl}images/gastronomia/surtido-tablas-pintxos.webp`} />
</div>
</div>
</div>
</div>
</div>
</section>
{/*  7. SECCIÓN: INSTAGRAM Y VIDA SOCIAL  */}
<section className="w-full py-space-xl bg-surface">
<div className="max-w-7xl mx-auto px-6 lg:px-margin-lg">
<div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-space-lg gap-space-xs">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Comunidad &amp; Vida Social</span>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-[#2D231E] tracking-tight font-bold">
            Lo que pasa en La Cotorra
          </h2>
</div>
<a className="bg-surface-container-high hover:bg-surface-variant text-primary px-space-md py-space-xs rounded-full font-label-lg text-label-lg uppercase tracking-wider inline-flex items-center gap-2 transition-colors" href="https://instagram.com" rel="noopener" target="_blank">
<span className="material-symbols-outlined text-base">photo_camera</span>
<span className="">@lacotorramuda</span>
</a>
</div>
{/*  Editorial Minimal Photo Stream  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
<div className="aspect-square rounded-2xl overflow-hidden shadow-sm group">
<img alt="Barra de pintxos y ambiente social" src={`${baseUrl}images/ambiente/hero.jpg`} />
</div>
<div className="aspect-square rounded-2xl overflow-hidden shadow-sm group">
<img alt="Detalle del café y la decoración del local" src={`${baseUrl}images/branding/logo-pared-fruta.jpg`} />
</div>
<div className="aspect-square rounded-2xl overflow-hidden shadow-sm group">
<img alt="Café y servicio para llevar de La Cotorra" src={`${baseUrl}images/gastronomia/take-away.jpg`} />
</div>
<div className="aspect-square rounded-2xl overflow-hidden shadow-sm group">
<img alt="Detalle de La Cotorra y despedida" src={`${baseUrl}images/branding/cotorra-thanks.jpg`} />
</div>
</div>
</div>
</section>
{/*  8. SECCIÓN: CONTACTO & LOCALIZACIÓN  */}
<section className="w-full py-space-xl bg-surface-container-low" id="contacto">
<div className="max-w-7xl mx-auto px-6 lg:px-margin-lg">
<div className="bg-surface-container-lowest rounded-3xl p-space-lg lg:p-space-xl shadow-md">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
<div className="lg:col-span-7 space-y-space-md">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Puertas Abiertas</span>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-[#2D231E] tracking-tight font-bold">
                ¿Nos vemos hoy?
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Estamos en una de las arterias más animadas de Bilbao, junto a Sabino Arana y Termibus. Acércate a la barra o asegura tu mesa con una llamada.
              </p>
</div>
{/*  Address and Phone Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase text-secondary font-bold">Dirección</span>
<p className="font-title-md text-title-md text-primary font-bold">Avda. Juan Antonio Zunzunegui 6</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">48013 Bilbao, Bizkaia</p>
</div>
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase text-secondary font-bold">Reservas y Encargos</span>
<p className="font-title-md text-title-md text-primary font-bold">
<a className="hover:text-secondary transition-colors" href="tel:946047308">946 04 73 08</a>
</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Móvil / WhatsApp: <a className="font-bold hover:text-secondary" href="tel:674266613">674 26 66 13</a>
</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-md pt-space-sm">
<a className="bg-primary text-on-primary hover:bg-secondary px-space-lg py-space-sm rounded-full font-label-lg text-label-lg uppercase tracking-wider inline-flex items-center gap-space-xs shadow-[3px_3px_0px_#11A8AB] transition-all" href="https://maps.google.com/?q=Avda.+Juan+Antonio+Zunzunegui+6+48013+Bilbao" rel="noopener" target="_blank">
<span className="material-symbols-outlined text-lg">directions</span>
<span className="">Cómo llegar (Google Maps)</span>
</a>
<a className="bg-surface-container-high text-on-surface hover:bg-surface-variant px-space-lg py-space-sm rounded-full font-label-lg text-label-lg uppercase tracking-wider inline-flex items-center gap-space-xs transition-colors" href="tel:946047308">
<span className="material-symbols-outlined text-lg">call</span>
<span className="">Llamar ahora</span>
</a>
</div>
</div>
{/*  Closing Card / Illustration Mascot  */}
<div className="lg:col-span-5 flex flex-col items-center justify-center">
<div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full bg-surface-container p-4 shadow-inner flex items-center justify-center relative">
<img alt="Ilustración cotorra de despedida: muchas gracias" src={`${baseUrl}images/branding/cotorra-gracias.jpg`} />
<div className="absolute -bottom-2 bg-secondary text-on-secondary px-space-md py-1 rounded-full font-label-sm text-label-sm uppercase font-bold tracking-widest shadow-md">
                Eskerrik Asko!
              </div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

    </main>
  );
};

export default Home;
