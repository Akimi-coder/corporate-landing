import React, { useEffect, useRef, useContext, useState } from 'react';
import { VideoContext } from './context/VideoContext';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Media from 'react-media';
import { useMediaQuery } from 'react-responsive';

const Main = () => {
  const { state, dispatch, videoRef } = useContext(VideoContext);
  const [videosLoaded, setVideosLoaded] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const previousIndexRef = useRef(0);

  const videoRefs = useRef([]);
  const swiperRef = useRef(null);

  const videos = [
    { src: 'video/1_1.mp4', id: 1 },
    { src: 'video/2_1.mp4', id: 2 },
    { src: 'video/3_1.mp4', id: 3 },
    { src: 'video/4_1.mp4', id: 4 },
  ];

  useEffect(() => {
    if (videosLoaded === videos.length) {
      dispatch({ type: 'SET_ALL_VIDEOS_READY', payload: true });
      if (videoRefs.current[0]) {
        dispatch({ type: 'SET_VIDEO_REF', payload: videoRefs.current[0] });
        videoRefs.current[0].play();
      }
    }
  }, [videosLoaded, videos.length, dispatch]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.allowTouchMove = isMobile;
    }
  }, [isMobile]);

  const handleVideoEnded = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }

    if (videoRefs.current[index + 1]) {
      videoRefs.current[index].currentTime = 0;
      videoRefs.current[index].pause();
      dispatch({ type: 'SET_VIDEO_REF', payload: videoRefs.current[index + 1] });
      videoRefs.current[index + 1].play();
    } else {
      videoRefs.current[0].currentTime = 0;
      videoRefs.current[0].play();
    }
  };

  const handleSwipe = (swiper) => {
    const currentIndex = swiper.realIndex;
  
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  
    const activeVideo = videoRefs.current[currentIndex];
    if (activeVideo) {
      activeVideo.play();
    }
  
    dispatch({ type: 'SET_VIDEO_URL', payload: videos[currentIndex].src });
  };

  const handleVideoReady = () => {
    setVideosLoaded((prev) => prev + 1);
  };

  return (
    <div className={`relative w-full h-full`}>
      {!state.allVideosReady && (
        <div className='flex bg-zinc-800 w-full h-full fixed font-flex top-0 left-0 z-50'>
          <div className="flex items-center w-full justify-center text-olive-light text-7xl font-bold">
            ББС 110
          </div>
          <div className="fixed top-0 left-0 w-full h-full flex items-end justify-end text-olive-light text-7xl font-bold">
            {Math.round((videosLoaded / videos.length) * 100)}%
          </div>
        </div>
      )}

      <div id="home" className={`mb-16 font-sofia flex justify-center w-full ${isMobile ? 'flex-col h-full mb-20' : 'flex-row h-full'}`}>
        <div className={`flex justify-end items-center relative ${isMobile ? 'w-full px-4 mt-32' : 'w-full pr-24 pl-12 mb-6'}`}>
  <div className="max-w-[700px] w-full">
    <h1 className="text-start text-[32px] sm:text-[40px] md:text-[90px] font-bold leading-none text-gold-warm-light">
      ПРИЄДНУЙСЯ ДО БАТАЛЬЙОНУ БЕЗПІЛОТНИХ СИСТЕМ
    </h1>
  </div>
</div>


        <div className="flex w-full h-full overflow-hidden">
          <Media queries={{ small: { maxWidth: 768 }, large: { minWidth: 769 } }}>
            {(matches) => (
              <div className={`h-full ${isMobile ? 'ml-8 max-w-[700px] mt-12' : 'max-w-[800px] mt-24'}`}>
                <Swiper
                  slidesPerView={matches.small ? 3 : 2}
                  loop={true}
                  ref={swiperRef}
                  allowTouchMove={false}
                  spaceBetween={matches.small ? 40 : 30}
                  className="w-auto h-full !ml-0 !justify-start !items-start"
                  onSlideChange={handleSwipe}
                >
                  {videos.map((video, index) => (
                    <SwiperSlide key={video.id}>
                      <div className="w-full flex justify-center">
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          onEnded={() => handleVideoEnded(index)}
                          onLoadedMetadata={handleVideoReady}
                          className="md:rounded-[25px] rounded-[15px] w-[300px] md:w-[400px] lg:w-[500px] object-cover"
                          muted
                          playsInline
                          preload="metadata"
                        >
                          <source src={video.src} type="video/mp4" />
                          Ваш браузер не підтримує відео.
                        </video>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </Media>
        </div>
      </div>
    </div>
  );
};

export default Main;
