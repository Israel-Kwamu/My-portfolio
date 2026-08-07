import React from 'react';
import nexarisLogoImg from '../assets/images/nexaris-logo.png';

interface NexarisLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const NexarisLogo: React.FC<NexarisLogoProps> = ({ 
  className = '', 
  size = 'md',
}) => {
  const heights = {
    sm: 'h-10 sm:h-12',
    md: 'h-12 sm:h-16',
    lg: 'h-18 sm:h-22',
    xl: 'h-24 sm:h-36'
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img 
        src={nexarisLogoImg} 
        alt="NEXARIS LABS Logo" 
        className={`${heights} w-auto object-contain transition-opacity duration-300 hover:opacity-90`}
      />
    </div>
  );
};


