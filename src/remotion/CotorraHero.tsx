import React from 'react';
import { Video } from 'remotion';

interface CotorraHeroProps {
  videoSrc?: string;
}

export const CotorraHero: React.FC<CotorraHeroProps> = ({ videoSrc }) => {
  const src = videoSrc || `${import.meta.env.BASE_URL}videos/cotorra-blinking.mp4`;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <Video
        src={src}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'center',
          transform: 'translateY(10px) scale(0.97)',
          mixBlendMode: 'multiply',
          WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 95%)',
          maskImage: 'linear-gradient(to bottom, black 65%, transparent 95%)',
          display: 'block',
        }}
        muted
        loop
      />
    </div>
  );
};

export default CotorraHero;
