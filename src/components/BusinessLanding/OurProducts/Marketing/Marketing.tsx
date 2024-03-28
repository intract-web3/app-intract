import React from 'react';
import styles from './marketing.module.css';
import clsx from 'clsx';
const Marketing = () => {
    return (
        <div className={clsx(styles.container, 'lg:col-span-1 xs:col-span-2')}>
            <h1 className={styles.marketing_heading}>Marketing</h1>
            <p className={styles.subtext}>
                We give 10000x Boost to your marketing
            </p>
            <section className={styles.glow_effect} />
            <div className={styles.divider}></div>
            <div className='grid grid-cols-5 max-h-[457px]'>
                <div className={clsx(styles.statItem, 'col-span-2')}>
                    <h2 className={styles.headings}>KOLs</h2>
                    <div className='flex items-end gap-[8px]'>
                        <p className={styles.numbers}>100M+</p>
                        <p className={styles.impressions}>Impressions</p>
                    </div>
                </div>
                <div className={'col-span-1'}></div>
                <div className={clsx(styles.statItem, 'col-span-2')}>
                    <h2 className={clsx(styles.headings, 'flex self-end')}>
                        Intract Twitter
                    </h2>
                    <div className='flex items-end gap-[8px]'>
                        <p className={styles.numbers}>5M+</p>
                        <p className={styles.impressions}>Impressions</p>
                    </div>
                </div>
                <div className={clsx(styles.statItem, 'col-span-2')}>
                    <h2 className={styles.headings}>Discord</h2>
                    <div className='flex items-end gap-[8px]'>
                        <p className={styles.numbers}>400K+</p>
                        <p className={styles.impressions}>Engaged</p>
                    </div>
                </div>
                <div className={'col-span-1'}></div>
                <div className={clsx(styles.statItem, 'col-span-2')}>
                    <h2 className={styles.headings}>Web3 Ads</h2>
                    <div className='flex items-end gap-[8px]'>
                        <p className={styles.numbers}>50M+</p>
                        <p className={styles.impressions}>Reach</p>
                    </div>
                </div>
                <div className={clsx(styles.statItem, 'col-span-2')}>
                    <h2 className={styles.headings}>Intract Website</h2>
                    <div className='flex items-end gap-[8px]'>
                        <p className={styles.numbers}>100K+</p>
                        <p className={styles.impressions}>Daily Quester</p>
                    </div>
                </div>
                <div className={'col-span-1'}></div>
                <div className={clsx(styles.statItem, 'col-span-2')}>
                    <h2 className={styles.headings}>PR</h2>
                    <div className='flex items-end gap-[8px]'>
                        <p className={styles.numbers}>50M+</p>
                        <p className={styles.impressions}>Impressions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketing;
