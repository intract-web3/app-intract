'use client';
import BusinessLanding from '@/components/BusinessLanding/BusinessLanding';
import { Navbar } from '@/components/Navbar/Navbar';
import { GlobalFooter } from '@/ui-components/GlobalFooter/GlobalFooter';
import { Divider } from '@/ui-components/divider/Divider';
import { BrowserRouter } from 'react-router-dom';
export default function Home() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <BusinessLanding />
                <Divider className='my-16 w-full bg-red-300' />
                <GlobalFooter />
            </BrowserRouter>
        </>
    );
}
