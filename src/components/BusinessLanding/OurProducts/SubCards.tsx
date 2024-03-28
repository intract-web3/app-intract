import React from 'react';
import SingleSubCard from './SingleSubCard';
import subcard1 from './assets/subcard1.svg';
import image from '../assets/Grids.png';
import subcardstyle from './singlesubcard.module.css';
import clsx from 'clsx';
import Marketing from './Marketing/Marketing';
import Web3CommunityCard from './HappiestCommunity/Web3CommunityCard';
function SubCards() {
    return (
        <div className='grid grid-cols-2 gap-[16px] mt-[16px] '>
            <Marketing />
            <Web3CommunityCard />
        </div>
    );
}

export default SubCards;
