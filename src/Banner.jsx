import React from 'react';

export function ImageSection({ images, speed }) {
  const imagesStyle = {
    animation: `swipe ${speed}ms linear infinite`,
  };

  return (
    <div className="flex animate-swipe" style={imagesStyle}>
      {images.map(({ src, name }, index) => (
        <div key={index} className="relative flex-shrink-0 w-[350px] h-[480px]">
          <img src={src} alt={name} className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}

export default function Banner({ images, speed }) {
  return (
    <div className="w-full h-auto flex flex-col group">
  <div className="flex">
    <ImageSection images={images} speed={speed} />
    <ImageSection images={images} speed={speed} />
  </div>
</div>
  );
}
