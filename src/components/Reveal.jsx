import { motion, useAnimate, useScroll, useTransform, useInView, useAnimation} from 'framer-motion';
import React, { useEffect,useRef } from 'react';

const Reveal = ({ children, style }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
      amount: 0.01,
    });
    const controls = useAnimation();
    const slideControls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        controls.start('visible'); 
        slideControls.start('visible');
      }
    }, [isInView, controls]);
  
    return (
      <div ref={ref} className={`${style} relative overflow-hidden`}>
        <motion.div
          initial="hidden"
          animate={controls} 
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {children}
        </motion.div>
        <motion.div
          variants={{
            hidden: {left: 0},
            visible: {left: "100%"},
          }}
          initial="hidden"
          animate={slideControls}
          transition={{duration: 0.7, ease: "easeIn"}}
          style={{
            position: "absolute",
            paddingBottom: "10px",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "#898c5e",
            zIndex: 20,
          }}
        >
          
        </motion.div>
      </div>
    );
  };
  
  export default Reveal;