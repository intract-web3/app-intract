import React from 'react';
import golive from '../assets/goliveforfree.png';
import SinglePoint from './SinglePoint';
function SliderComponent() {
    const [activeIndexValue, setActiveIndexValue] = React.useState(0);
    const questingarr = [
        {
            title: <div>{`Go live for FREE`}</div>,
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
            title: <div>{`For Pre-Token and Airdrop Ecosystems`}</div>,
            img: golive,
        },
    ];
    return (
        <article className='flex flex-col md:gap-[24px] xs:gap-[30px]'>
            {questingarr.map((questingElment, index) => {
                return (
                    <SinglePoint
                        key={index}
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
