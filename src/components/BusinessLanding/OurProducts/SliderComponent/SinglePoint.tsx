//@ts-nocheck
import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import arrow from '../assets/arrow.svg'
import singlepointstyle from './singlepoint.module.css'
interface ISinglePoint {
    title: React.ReactNode;
    index: number;
}
const ProgressBar = ({ progress }) => {
    return (
      <div style={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.36)' }}>
        <div
          style={{
            height: '2px',
            width: `${progress}%`,
            backgroundColor: '#6435E9',
            transition: 'width 0.1s linear'
          }}
        ></div>
      </div>
    );
  };
const LineComponent = ({ text, isActive, onClick }) => {
    return (
      <div onClick={onClick} style={{ cursor: 'pointer', color: isActive ? 'red' : 'black' }}>
        {text}
      </div>
    );
};
const SinglePoint:FC<ISinglePoint> = (props)=> {
    const { title , index } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        let intervalId:any;
    
        if (progress < 100) {
          intervalId = setInterval(() => {
            setProgress((prevProgress) => prevProgress + 1);
          }, 50);
        } else {
          clearInterval(intervalId);
          setProgress(0);
          setActiveIndex((current) => (current + 1) % 5);
        }
    
        return () => clearInterval(intervalId);
      }, [progress]);
    
      const handleClick = (index:number) => {
        setActiveIndex(index);
        setProgress(0);
      };
    return (
    <article className='flex flex-col md:gap-[8px] xs:gap-[12px] cursor-pointer' onClick={() => handleClick(index)}>
        
        <div className='flex justify-between'>
            <p className={singlepointstyle.title}>{title}</p>
            <Image src={arrow} width={12} height={16} alt={'arrow'}></Image>
        </div>
        {index === activeIndex && <ProgressBar progress={progress} />}
        {index != activeIndex && <div className={singlepointstyle.progress}></div>}
    </article>
  )
}

export default SinglePoint
