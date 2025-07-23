// Video.jsx
import React from 'react';
import Media from 'react-media';

const Video = ({ smallVideo, mediumVideo, largeVideo }) => {
    return (
      <div className="w-full min-h-screen bg-zinc-800 mb-24 flex flex-col items-center">
        <h2 className="text-olive-light text-2xl sm:text-3xl font-bold mb-10">МЕДІА ПРО НАС</h2>
        <Media
          queries={{
            small: '(max-width: 768px)', // Малий екран
            medium: '(min-width: 769px) and (max-width: 1024px)', // Середній екран
            large: '(min-width: 1025px)', // Великий екран
          }}
        >
          {(matches) => {
            return (
              <div className="relative w-full h-full">
                <div className="flex justify-center rounded-xl items-center w-full h-full">
                  <video
                    className={`${matches.small || matches.medium ? 'w-full px-5 h-[700px] object-cover rounded-xl' : 'w-1/3 max-h-[700px] rounded-xl'}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={smallVideo} type="video/mp4" />
                    Ваш браузер не підтримує відео.
                  </video>
  
                  {/* Друге відео (відображається тільки на великих екранах) */}
                  {matches.large ? (
                    <video
                      className="w-1/3 max-h-[700px] rounded-2xl"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={mediumVideo} type="video/mp4" />
                      Ваш браузер не підтримує відео.
                    </video>
                  ) : null}
  
                  {/* Третє відео (відображається тільки на великих екранах) */}
                  {matches.large ? (
                    <video
                      className="w-1/3 max-h-[700px] rounded-lg"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={largeVideo} type="video/mp4" />
                      Ваш браузер не підтримує відео.
                    </video>
                  ) : null}
                </div>
              </div>
            );
          }}
        </Media>
      </div>
    );
  };

export default Video;
