import React from 'react';
import Reveal from './Reveal';
import { GoArrowUpRight } from "react-icons/go";


const VideoBlock = () => (
  <Reveal>
  <a
    href="/apply"
    className="relative w-full overflow-hidden text-white group"
    role="button"
    aria-label="Подати заявку"
  >
    <div className="bg-zinc-900/60 backdrop-blur-sm p-6 flex flex-col h-full text-gold-warm-light hover:animate-slide transition duration-300">
      <div className="flex w-full items-start justify-between">
        <div className="font-semibold text-3xl md:text-[42px] h-full w-full font-ibm">
          <h4 className="leading-none flex items-center">Подати заявку зараз</h4>
        </div>
        <div className="flex">
          <GoArrowUpRight className="size-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </div>
  </a>
</Reveal>
  );

export default VideoBlock;