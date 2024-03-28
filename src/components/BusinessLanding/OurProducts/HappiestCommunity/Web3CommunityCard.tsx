import React from 'react';
import styles from './happiestcommunity.module.css';

const Web3CommunityCard = () => {
    return (
        <div className={`${styles.container} md:col-span-1 xs:col-span-2`}>
            <div className='flex flex-col'>
                <h1 className={styles.marketing_heading}>
                    Happiest Web3 Community
                </h1>
                <p className={styles.subtext}>
                    For Intract, our community is always our first priority!
                </p>
            </div>
            <div className={styles.divider}></div>
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
            <div className={styles.points}>
                SCAM Filtering
                <div className={styles.divider}></div>
            </div>
        </div>
    );
};

export default Web3CommunityCard;
