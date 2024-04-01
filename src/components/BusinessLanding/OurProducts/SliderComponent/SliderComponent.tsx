import React, { useState } from 'react';
import golive from '../assets/goliveforfree.png';
import SinglePoint from './SinglePoint';
import style from './singlepoint.module.css';
function SliderComponent() {
    const [activeIndexValue, setActiveIndexValue] = React.useState(0);
    const [progress, setProgress] = useState(0);
    const questingarr = [
        {
            title: (
                <div>
                    <span>{`Go live for`}</span>{' '}
                    <span className={style.exclusive}>FREE</span>
                </div>
            ),
            img: golive,
        },
        {
            title: <div>{'Intuitive interface to create and edit Quests'}</div>,
            img: golive,
        },
        {
            title: <div>{'No Code Verification: An Industry First!'}</div>,
            img: golive,
        },
        {
            title: <div>{'Analytics for On-Chain and Social Tasks'}</div>,
            img: golive,
        },
        {
            title: (
                <div>
                    {'Unified Points across different questing platforms'}
                </div>
            ),
            img: golive,
        },
        {
            title: (
                <div>
                    <span>{`For Pre-Token and`}</span>{' '}
                    <span className={style.exclusive}>Airdrop Ecosystems</span>
                </div>
            ),
            img: golive,
        },
    ];
    return (
        <article className='flex flex-col md:gap-[24px] mt-8 xs:gap-[30px]'>
            {questingarr.map((questingElment, index) => {
                return (
                    <SinglePoint
                        key={index}
                        progress={progress}
                        setProgress={setProgress}
                        activeIndexValue={activeIndexValue}
                        setActiveIndexValue={setActiveIndexValue}
                        title={questingElment.title}
                        index={index}
                    />
                );
            })}
        </article>
    );
}

export default SliderComponent;
