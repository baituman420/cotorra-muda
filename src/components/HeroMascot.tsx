import React, { useEffect, useState } from 'react';
import { Player } from '@remotion/player';
import { CotorraHero } from '../remotion/CotorraHero';

interface HeroMascotProps {
  className?: string;
}

export const HeroMascot: React.FC<HeroMascotProps> = ({ className = '' }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [dimensions, setDimensions] = useState(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 1280,
    height: typeof window !== 'undefined' ? window.innerHeight : 720,
  }));

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const updateDimensions = () => {
      setDimensions({
        width: typeof window !== 'undefined' ? window.innerWidth : 1280,
        height: typeof window !== 'undefined' ? window.innerHeight : 720,
      });
    };

    updateDimensions();

    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);
    window.addEventListener('resize', updateDimensions);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const videoUrl = `${import.meta.env.BASE_URL}videos/cotorra-blinking.mp4`;
  const staticImageUrl = `${import.meta.env.BASE_URL}images/branding/cotorra.png`;

  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      {prefersReducedMotion ? (
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={staticImageUrl}
            alt="Mascota oficial La Cotorra Muda"
            className="cotorra-video-element drop-shadow-sm"
          />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center relative overflow-visible">
          <Player
            component={CotorraHero}
            inputProps={{ videoSrc: videoUrl }}
            durationInFrames={300}
            compositionWidth={dimensions.width}
            compositionHeight={dimensions.height}
            fps={30}
            loop
            autoPlay
            overflowVisible
            controls={false}
            clickToPlay={false}
            spaceKeyToPlayOrPause={false}
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
