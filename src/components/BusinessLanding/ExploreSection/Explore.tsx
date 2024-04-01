import { Divider } from '@/ui-components/divider/Divider';
import React from 'react';
import GemsAtoms from './atoms/gemsAtoms';
import clsx from 'clsx';
import styles from './explore.module.css';
import Button from '@/ui-components/button/Button';
import img from './assets/BG.png';
import Image from 'next/image';
import Pair from './Pair';
import base from './partnerLogos/base.png';
import blast from './partnerLogos/blast.png';
import linea from './partnerLogos/Linea.png';
import zksync from './partnerLogos/zksync.png';
import mode from './partnerLogos/mode.png';
import polygon from './partnerLogos/polygon.png';
import Marquee from 'react-fast-marquee';
import image1 from '../../BusinessLanding/assets/ecosystemLogos/Linea.svg';
import image2 from '../../BusinessLanding/assets/ecosystemLogos/blast.png';
import image3 from '../../BusinessLanding/assets/ecosystemLogos/zksync.svg';
function Explore() {
    const [play, setPlay] = React.useState(false);
    const ecosystemLogos = [image1, image2, image3];
    return (
        <div className={styles.exploreSection}>
            <section className={styles.glow_effect} />
            <div className={clsx(styles.content, 'relative')}>
                <h1 className={styles.headline}>
                    Unleash your <br /> Web3 Growth
                </h1>
                <p className={styles.description}>
                    Access world’s first bot-less community of 5M+ <br />{' '}
                    On-Chain users with our quest platform
                </p>
                <Button
                    className={styles.exploreButton}
                    name='Explore'
                ></Button>
                <section className={styles.base_network_logos}>
                    <div className={styles.left_transparent_gradient} />
                    <div className={styles.right_transparent_gradient} />

                    <Marquee autoFill speed={50}>
                        {[base, blast, linea, zksync, mode, polygon].map(
                            (logo) => (
                                <Image
                                    style={{ aspectRatio: '1/1' }}
                                    className={styles.logo_image}
                                    src={logo}
                                    alt={'logo'}
                                />
                            )
                        )}
                    </Marquee>
                </section>
            </div>
        </div>
    );
}

export default Explore;
