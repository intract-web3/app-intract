//@ts-nocheck
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import arrow from '../assets/arrow.svg';
import singlepointstyle from './singlepoint.module.css';
interface ISinglePoint {
    title: React.ReactNode;
    index: number;
    activeIndexValue: number;
    setActiveIndexValue: (a: number) => void;
    progress: number;
    setProgress: (a: number) => void;
}
const ProgressBar = ({ progress }) => {
    return (
        <div
            style={{
                width: '100%',
                height: '1px',
                backgroundColor: '#FFFFFF0D',
            }}
        >
            <div
                style={{
                    height: '1px',
                    width: `${progress}%`,
                    backgroundColor: '#6435E9',
                    transition: 'width 0.1s linear',
                }}
            ></div>
        </div>
    );
};
const SinglePoint: FC<ISinglePoint> = (props) => {
    const { title, index, setActiveIndexValue, progress, setProgress } = props;
    useEffect(() => {
        let intervalId: any;

        if (progress < 100) {
            intervalId = setInterval(() => {
                setProgress((prevProgress) => prevProgress + 1);
            }, 100);
        } else {
            clearInterval(intervalId);
            setProgress(0);
            setActiveIndexValue((current) => (current + 1) % 5);
        }

        return () => clearInterval(intervalId);
    }, [progress, setActiveIndexValue, setProgress]);

    const handleClick = (index: number) => {
        setActiveIndexValue(index);
        setProgress(0);
    };
    return (
        <article
            className='flex flex-col md:gap-[8px] xs:gap-[12px] cursor-pointer'
            onClick={() => handleClick(index)}
        >
            <div className='flex justify-between'>
                <p className={singlepointstyle.title}>{title}</p>
                <Image src={arrow} width={12} height={16} alt={'arrow'}></Image>
            </div>
            {index === props.activeIndexValue && (
                <ProgressBar progress={progress} />
            )}
            {index != props.activeIndexValue && (
                <div className={singlepointstyle.progress}></div>
            )}
        </article>
    );
};

export default SinglePoint;
