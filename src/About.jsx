import { motion, useAnimate, useScroll, useTransform, useInView, useAnimation} from 'framer-motion';
import React, { useEffect,useRef,useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from './Banner';
import './About.css'
import { GoArrowUpRight } from "react-icons/go";
import { style } from 'framer-motion/client';
import Card from './components/Card';
import { useMediaQuery } from 'react-responsive';
import VideoBlock from './components/VideoBlock';
import Reveal from './components/Reveal';
import { VideoContext } from './context/VideoContext';


const About = () => {

  const element = useRef(null);
    const { state, videoRef } = useContext(VideoContext);
  
  
  const {scrollYProgress} = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25']
  })

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


  const h1Opacity = useTransform(scrollYProgress, [0.7  , 1], [0, 1]);


  const text = `Хочеш бути серед тих, хто тримає не автомат, а пульт? Тут, на землі й у повітрі — треба не героїв, а людей, які готові вчитись, бути уважними й працювати в команді.`;
  const words = text.split(" ")

  return (
  <div id="about" className="font-flex scroll-mt-[100px] text-olive-light flex-grow lg:mt-32 mt-12 w-full mr-10 mb-12">
  <div className="px-2 mx-auto sm:px-6 lg:px-12 md:mb-16 mt-16 max-w-7xl ">
    <h2 ref={element} style={{opacity: scrollYProgress}} className="flex flex-wrap md:max-w-5xl w-full lg:justify-start font-semibold mx-auto md:mx-0 text-[35px] md:text-[50px] md:leading-[50px] leading-[40px] md:mt-2 break-words">
        {
          words.map((word,i) => {
            const start = i / words.length
            const end = start + (1 / words.length)
            return <Word key={i} range={[start,end]} progress={scrollYProgress}>{word}</Word>
          })
        }
    </h2>
  </div>

  <div className='w-full mx-auto flex md:flex-row flex-col mt-8 px-2 sm:px-6 lg:px-12 max-w-7xl'>
    <div className="w-full flex flex-col ">
        {state.allVideosReady && (
          <>
          <Reveal>
          <motion.div className='md:text-[60px] flex flex-col gap-2 text-[45px] text-left mb-5 text-gold-warm-light font-semibold'>
            <h3 className='leading-[50px]'>
              Це інша війна — технологічна. І в ній потрібні ті хто може
            </h3>
          </motion.div>
          
          </Reveal>
          </>
        )}
    </div>
    <div className="w-full flex p-5">
    <ul className="md:space-y-6 space-y-0 justify-center ">
            {[
              { number: "01", title: "Зібратись і вчитись чомусь новому", description: "" },
              { number: "02", title: "Тримати холодну голову", description: "" },
              { number: "03", title: "Не бути «військовим» у старому сенсі — бути ефективним", description: "" },
              { number: "04", title: "Бути гнучким і адаптивним", description: "" },
            ].map((item, index) => (
              <li key={index} className="flex flex-col ">
                {state.allVideosReady &&(
                  <Reveal>
                  <div className=" flex ml-2 flex-col">
                    <div className='flex w-full gap-10'>                  
                      <span className="text-xl  font-bold text-gold-warm">{item.number}</span>
                      <div className='pb-8 w-full'>
                      <h3 className="md:text-3xl text-2xl font-semibold text-olive-light">{item.title}</h3>
                      </div>
                    </div>
                    <hr className="border-t border-zinc-700 w-full md:mb-0 mb-4" />
                  </div>
                  </Reveal>
                )}
              </li>
              ))}
            </ul>
    </div>
  </div>
  <div className="mt-16 h-full w-full ">
    <h1 className="md:text-[75px] text-[60px] font-semibold text-center leading-none">
    МИ НЕ ОБІЦЯЄМО, ЩО БУДЕ <span className='font-bold text-gold-warm-light'>ЛЕГКО</span><br/>АЛЕ ТОЧНО БУДЕ <span className='font-bold text-gold-warm-light'>НЕ СОРОМНО</span>
    </h1>
  </div>
</div>

  );
};

const Word = ({children, range, progress, bigWord}) => {
  const color = useTransform(progress, range, ["#6B6D43", "#e0b43d"]); // gray-400 → black

  return (
    <motion.span
      className="mr-[12px]"
      style={{ color }}
    >
      {children}
    </motion.span>
  );
}


export default About;

