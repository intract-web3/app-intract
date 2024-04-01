'use client';
import GenericLayout from '@/components/genericSection/genericHeadingLayout/GenericLayout';
import { Divider } from '@/ui-components/divider/Divider';
import React from 'react';
import explorerstyles from './explorer.module.css';
import ExplorerCard from './ExplorerCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import img from './assets/grid.png';
import 'swiper/css/pagination';
import Image from 'next/image';
import SliderButtons from '@/ui-components/swiper/SliderButtons';

function Explorer() {
    const arr = [
        {
            id: 1,
            title: 'ARE AWESOME',
            tagline: 'NEXTJS 13 & SWIPER SLIDER',
            image: '/image1.jpg',
            buttons: [
                {
                    id: 1,
                    text: 'Roberto Nickson',
                    link: 'https://www.pexels.com/@rpnickson/',
                    type: 'btn-dark btn-circle',
                },
            ],
        },
        {
            id: 2,
            title: 'GIVE IT A SHOOT',
            tagline: 'IF YOU LIKE IT',
            image: '/image2.jpg',
            buttons: [
                {
                    id: 1,
                    text: 'Julia M Cameron',
                    link: 'https://www.pexels.com/@julia-m-cameron/',
                    type: 'btn-dark btn-circle',
                },
            ],
        },
    ];

    return (
        <div className='flex flex-col relative max-w-[1440px] h-[100vh] w-full xs:mt-[34px] lg:mt-20 md:px-12 sm:px-8 px-4'>
            <GenericLayout
                heading={'Hear what our partners say about us'}
                className='md:mt-24'
                subheading={
                    <div className='sm:max-w-[70%]'>
                        <span style={{ color: 'rgba(255, 255, 255, 0.80)' }}>
                            Real Stories, Real Experiences -
                        </span>
                        <span>Our Partners Share Their Quest Journeys</span>
                    </div>
                }
            />
            <Image
                src={img}
                className='min-w-full h-[100vh] absolute top-0 left-0'
                alt='explore-image'
            />
            <div className='flex gap-[16px] sm:mt-[56px] xs:mt-[12px] w-full'>
                <Swiper
                    pagination={{ type: 'bullets', clickable: true }}
                    autoplay={true}
                    loop={true}
                    breakpoints={{
                        1300: {
                            slidesPerView: 4,
                            spaceBetween: 16,
                        },
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        },
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                    }}
                >
                    {arr.map(({ id, image, tagline, title, buttons }) => (
                        <SwiperSlide key={id}>
                            <ExplorerCard />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* <Divider /> */}
        </div>
    );
}

export default Explorer;
