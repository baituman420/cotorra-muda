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
        <div className="w-full max-w-xl lg:max-w-2xl flex items-center justify-center h-[460px] sm:h-[540px] lg:h-[620px]">
          <img
            src={staticImageUrl}
            alt="Mascota oficial La Cotorra Muda"
            className="w-full h-full max-h-[600px] object-contain"
          />
        </div>
      ) : (
        <div className="w-full max-w-xl lg:max-w-2xl flex items-center justify-center h-[460px] sm:h-[540px] lg:h-[620px]">
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
              maxHeight: '620px',
              display: 'block',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HeroMascot;
