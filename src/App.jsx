import { useState, useEffect, useRef,useContext } from 'react';
import Header from "./Header";
import MainApp from "./MainApp";
import About from "./About";
import Vacancy from "./Vacancy";
import FAQ from './FAQ';
import Footer from './Footer';
import Media from 'react-media';
import Video from './Video';
import { VideoContext } from './context/VideoContext';
import Banner from './Banner';


const images = [
  {
    src: 'images/1.jpg',
    name: 'image 1'
  },
  {
    src: 'images/5.jpeg',
    name: 'image 2'
  },
  {
    src: 'images/2.jpeg',
    name: 'image 3'
  },
  {
    src: 'images/3.jpeg',
    name: 'image 4'
  },
  {
    src: 'images/4.jpeg',
    name: 'image 5'
  },
  {
    src: 'images/5.jpeg',
    name: 'image 6'
  },
  {
    src: 'images/6.jpeg',
    name: 'image 7'
  },
  {
    src: 'images/7.jpeg',
    name: 'image 8'
  },
  {
    src: 'images/9.jpeg',
    name: 'image 9'
  },
  {
    src: 'images/2.PNG',
    name: 'image 10'
  },
  {
    src: 'images/5.PNG',
    name: 'image 11'
  },
  {
    src: 'images/4.PNG',
    name: 'image 12'
  },
  {
    src: 'images/6.PNG',
    name: 'image 13'
  },
  {
    src: 'images/7.PNG',
    name: 'image 14'
  },
  {
    src: 'images/7.jpeg',
    name: 'image 15'
  },
];

function App() {
  const { state, videoRef } = useContext(VideoContext);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://application-bucket-b02u.s3.eu-west-1.amazonaws.com/68/03/6803a96a5a1534ea3655a28c/widget.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  useEffect(() => {
    console.log(state.videoUrl)
    if (videoRef.current && state.videoUrl) {
      videoRef.current.src = state.videoUrl;
      videoRef.current.play().catch((err) => {
        console.warn('Play error:', err);
      });
    }
  }, [state]);
  return(
    
    <div className="full bg-zinc-800 overflow-x-clip">
    <div className="relative object-cover h-auto">
    <video
      ref={videoRef}
      className="absolute blur-2xl opacity-60 top-0 left-0 w-full h-full object-cover z-0"
      autoPlay
      muted
      playsInline
    >
    </video>
    <div className="relative z-10 flex-1">
<Header />
<MainApp />
</div>
</div>
  <About />
  <Banner images={images} speed={70000}/>
  <Vacancy />
  <FAQ />
  <Footer />
</div>
  );
};

export default App;