'use client';
import BusinessLanding from '@/components/BusinessLanding/BusinessLanding';
import { Navbar } from '@/components/Navbar/Navbar';
import { Divider } from '@/ui-components/divider/Divider';
export default function Home() {
    return (
        <>
            <Navbar />
            <BusinessLanding />
            <Divider className='my-16 w-full bg-red-300' />
        </>
    );
}
