import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Carta from './pages/Carta';
import Grupos from './pages/Grupos';

export type NavTab = 'inicio' | 'carta' | 'grupos' | 'el-dia-a-dia' | 'contacto';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('inicio');

  const parseHash = (): NavTab => {
    const hash = window.location.hash.toLowerCase();
    if (hash.startsWith('#/carta') || hash === '#carta') return 'carta';
    if (hash.startsWith('#/grupos') || hash === '#grupos') return 'grupos';
    if (hash.startsWith('#/el-dia-a-dia') || hash === '#dia-a-dia') return 'el-dia-a-dia';
    if (hash.startsWith('#/contacto') || hash === '#contacto') return 'contacto';
    return 'inicio';
  };

  useEffect(() => {
    const onHashChange = () => {
      const tab = parseHash();
      setActiveTab(tab);

      if (tab === 'el-dia-a-dia') {
        setTimeout(() => {
          const el = document.getElementById('el-dia-a-dia') || document.getElementById('experiencia');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (tab === 'contacto') {
        setTimeout(() => {
          const el = document.getElementById('contacto');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (tab === 'inicio' || tab === 'carta' || tab === 'grupos') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    onHashChange();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = (tab: NavTab) => {
    if (tab === 'inicio') window.location.hash = '#/';
    else if (tab === 'carta') window.location.hash = '#/carta';
    else if (tab === 'grupos') window.location.hash = '#/grupos';
    else if (tab === 'el-dia-a-dia') window.location.hash = '#/el-dia-a-dia';
    else if (tab === 'contacto') window.location.hash = '#/contacto';
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Header activeTab={activeTab} onNavigate={navigateTo} />
      <div className="flex-grow">
        {activeTab === 'carta' && <Carta onNavigate={navigateTo} />}
        {activeTab === 'grupos' && <Grupos onNavigate={navigateTo} />}
        {(activeTab === 'inicio' || activeTab === 'el-dia-a-dia' || activeTab === 'contacto') && (
          <Home onNavigate={navigateTo} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
