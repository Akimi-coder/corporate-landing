import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const Card = ({ title, description, bg, className}) => {
  return (
    <div className={`${bg} h-[320px] w-[380px] opacity-95 pl-6 text-white hover:animate-slide`}>
        <div className=' flex flex-col w-[90%] h-[50%]'>
           <div className='flex w-full'>
                <div className={`${className} mx-auto font-semibold text-[42px] font-ibm w-full`}>
                    <h4 className="leading-none">{title}</h4>
                </div>
           </div>
        </div>
    </div>
  );
};

export default Card;