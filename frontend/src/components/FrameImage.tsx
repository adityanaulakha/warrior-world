import React, { useState } from 'react';

const FALLBACK = '/warrior-world-emblem.png';

interface FrameImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

/** Product and tile photo that never leaves an empty frame if the file fails. */
export const FrameImage: React.FC<FrameImageProps> = ({ src, alt = '', className = '', ...rest }) => {
  const [brokenSrc, setBrokenSrc] = useState<string | null>(null);
  const failed = brokenSrc === src;

  if (failed) {
    return (
      <span className="absolute inset-0 flex items-center justify-center bg-[#eeeeee]" role="img" aria-label={alt || 'Image unavailable'}>
        <img src={FALLBACK} alt="" className="h-14 w-14 object-contain" />
      </span>
    );
  }

  return (
    <img
      {...rest}
      src={src}
      alt={alt}
      className={className}
      onError={() => setBrokenSrc(src)}
    />
  );
};
