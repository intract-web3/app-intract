'use client';
import React from 'react';
import businessLandingStyles from './businessLanding.module.css';
import Explore from './ExploreSection/Explore';
import OurProducts from './OurProducts/OurProducts';
import Values from './Values/Values';
import PopularQuest from './PopularQuests/PopularQuest';
import Numbers from './Numbers/Numbers';
import tear from './assets/tear.svg';
import Image from 'next/image';
import Explorer from './Explorer/Explorer';
import FAQ from './FAQs/FAQ';
import { Divider } from '@/ui-components/divider/Divider';
import ExploreLast from './ExploreLast/ExploreLast';
import Users from './Users/Users';
import ThoughLeader from './ThoughLeader/ThoughLeader';

function BusinessLanding() {
    return (
        <div className={businessLandingStyles.container}>
            <Explore />
            <Divider className='md:mb-24 md:-mt-16 my-16 w-full bg-red-300' />
            <OurProducts />
            <Divider className='md:mb-24 md:mt-24 my-16 w-full bg-red-300' />
            <Users />
            <Numbers />
            <Image src={tear} alt='Tear' className='w-full pt-12 md:pt-10' />
            <Values />
            {/* <PopularQuest /> */}
            <Explorer />
            <ThoughLeader />
            <FAQ />
            <Divider />
            {/* <ExploreLast /> */}
        </div>
    );
}

export default BusinessLanding;
