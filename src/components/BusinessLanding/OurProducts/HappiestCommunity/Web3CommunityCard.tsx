import React from 'react';
import styles from './happiestcommunity.module.css';

const Web3CommunityCard = () => {
  return (
    <div className={`p-8 ${styles.container} md:col-span-1 xs:col-span-2`}>
      <h1 className={`text-3xl font-bold mb-4 ${styles.title}`}>Happiest Web3 Community</h1>
      <p className={`text-xl mb-3 ${styles.score}`}>98.4% Customer Satisfaction Score</p>
      <p className={`text-lg mb-3 ${styles.support}`}>Priority 24x7 Support for all quests</p>
      <p className={`text-lg mb-3 ${styles.verification}`}>Accurate Task Verification</p>
      <p className={`text-lg ${styles.filtering}`}>SCAM Filtering</p>
    </div>
  );
};

export default Web3CommunityCard;
