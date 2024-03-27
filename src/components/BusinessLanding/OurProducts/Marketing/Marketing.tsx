import React from 'react';
import styles from './marketing.module.css';
import clsx from 'clsx';
const Marketing = () => {
  return (
    <div className={clsx(styles.container,"md:col-span-1 xs:col-span-2")}>
      <h1 className="text-4xl text-white font-bold mb-4">Marketing</h1>
      <p className="text-xl text-gray-300 mb-8">We give 10000x Boost to your marketing</p>
      <div className="grid grid-cols-2 gap-4">
        <div className={styles.statItem}>
          <h2 className="text-2xl text-white">KOLs</h2>
          <p className="text-5xl text-white font-bold">100M+</p>
          <p className="text-xl text-gray-300">Impressions</p>
        </div>
        <div className={styles.statItem}>
          <h2 className="text-2xl text-white">Intract Twitter</h2>
          <p className="text-5xl text-white font-bold">5M+</p>
          <p className="text-xl text-gray-300">Impressions</p>
        </div>
        <div className={styles.statItem}>
          <h2 className="text-2xl text-white">Discord</h2>
          <p className="text-5xl text-white font-bold">400K+</p>
          <p className="text-xl text-gray-300">Engaged</p>
        </div>
        <div className={styles.statItem}>
          <h2 className="text-2xl text-white">Web3 Ads</h2>
          <p className="text-5xl text-white font-bold">50M+</p>
          <p className="text-xl text-gray-300">Reach</p>
        </div>
        <div className={styles.statItem}>
          <h2 className="text-2xl text-white">Intract Website</h2>
          <p className="text-5xl text-white font-bold">100K+</p>
          <p className="text-xl text-gray-300">Daily Quester</p>
        </div>
        <div className={styles.statItem}>
          <h2 className="text-2xl text-white">PR</h2>
          <p className="text-5xl text-white font-bold">50M+</p>
          <p className="text-xl text-gray-300">Impressions</p>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
