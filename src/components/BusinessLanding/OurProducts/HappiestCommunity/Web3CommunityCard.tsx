import React from 'react';
import styles from './happiestcommunity.module.css';
import clsx from 'clsx';

const Web3CommunityCard = () => {
    return (
        <div className={`${styles.container} lg:col-span-1 xs:col-span-2`}>
            <section className={styles.glow_effect} />
            <div className='flex flex-col'>
                <h1 className={styles.marketing_heading}>
                    Happiest Web3 Community
                </h1>
                <p className={styles.subtext}>
                    For Intract, our community is always our first priority!
                </p>
            </div>
            <div
                className={clsx(styles.divider, 'md:my-[16px] xs:my-[24px]')}
            ></div>
            <div className='h-full'>
                <div className={styles.points}>
                    98.4% Customer Satisfaction Score
                    <div
                        className={clsx(
                            styles.divider,
                            'md:mt-[16px] xs:mt-[8px]'
                        )}
                    ></div>
                </div>
                <div className={styles.points}>
                    Priority 24x7 Support for all quests
                    <div
                        className={clsx(
                            styles.divider,
                            'md:mt-[16px] xs:mt-[8px]'
                        )}
                    ></div>
                </div>
                <div className={styles.points}>
                    Accurate Task Verification
                    <div
                        className={clsx(
                            styles.divider,
                            'md:mt-[16px] xs:mt-[8px]'
                        )}
                    ></div>
                </div>
                <div className={styles.points}>SCAM Filtering</div>
            </div>
            {/* <div className='flex flex-col h-full w-full border border-solid border-red-200'>
                <div className={styles.points}>
                    98.4% Customer Satisfaction Score
                    <div className={styles.divider}></div>
                </div>
                <div className={styles.points}>
                    Priority 24x7 Support for all quests
                    <div className={styles.divider}></div>
                </div>
                <div className={styles.points}>
                    Accurate Task Verification
                    <div className={styles.divider}></div>
                </div>
                <div className={styles.points}>SCAM Filtering</div>
            </div> */}
        </div>
    );
};

export default Web3CommunityCard;
