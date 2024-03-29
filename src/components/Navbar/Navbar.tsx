import clsx from 'clsx';
import navbarStyles from './navbar.module.css';
import { useLocation } from 'react-router-dom';
import Link from 'next/link';
import Image from 'next/image';
import intractImg from './assets/intract.svg';
import Button from '@/ui-components/button/Button';
export const Navbar = () => {
    // const pathname = useLocation().pathname;
    // const handleScrollToTop = () => {
    // 	window.scrollTo({ top: 0, behavior: 'smooth' });
    // };
    return (
        <>
            <header
                className={clsx(
                    navbarStyles.navbar_container,
                    'flex justify-between relative'
                )}
                style={{ zIndex: 1000 }}
            >
                <div className={clsx(navbarStyles.navbar_content_section)}>
                    <Link
                        href='/'
                        aria-current='page'
                        aria-label='home'
                        className='shrink-0'
                        // onClick={() => {
                        // 	pathname == '/' && handleScrollToTop();
                        // }}
                    >
                        <Image
                            src={intractImg}
                            className='flex w-[97px] h-[20px]'
                            alt={''}
                        ></Image>
                    </Link>
                </div>
                <div className='flex gap-4 absolute md:right-[120px] xs:right-1'>
                    <Button
                        className={navbarStyles.singin_button}
                        name={'Sign in'}
                    />
                    <Button
                        className={navbarStyles.create_quest_button}
                        name={'Create Quest'}
                    />
                </div>
            </header>
        </>
    );
};
