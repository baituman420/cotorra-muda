import React, { useEffect, useState } from 'react';
import { Player } from '@remotion/player';
import { CotorraHero } from '../remotion/CotorraHero';

export const HeroMascot: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const videoUrl = `${import.meta.env.BASE_URL}videos/cotorra-blinking.mp4`;
  const staticImageUrl = `${import.meta.env.BASE_URL}images/branding/cotorra.png`;

  return (
    <div className="w-full flex items-center justify-center">
      {prefersReducedMotion ? (
        <div className="w-full max-w-lg rounded-3xl overflow-hidden shadow-xl border border-[#3A302A]/15 bg-surface-container-lowest p-6 flex items-center justify-center">
          <img
            src={staticImageUrl}
            alt="Mascota oficial La Cotorra Muda"
            className="w-full max-h-[460px] object-contain drop-shadow-md"
          />
        </div>
      ) : (
        <div className="w-full max-w-lg rounded-3xl overflow-hidden shadow-xl border border-[#3A302A]/15 bg-[#00656c] aspect-[16/9] sm:aspect-[4/3] flex items-center justify-center">
          <Player
            component={CotorraHero}
            inputProps={{ videoSrc: videoUrl }}
            durationInFrames={300}
            compositionWidth={1280}
            compositionHeight={720}
            fps={30}
            loop
            autoPlay
            controls={false}
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HeroMascot;
