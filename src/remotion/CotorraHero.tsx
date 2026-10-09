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
        className="cotorra-video-element"
        muted
        loop
      />
    </div>
  );
};

export default CotorraHero;
