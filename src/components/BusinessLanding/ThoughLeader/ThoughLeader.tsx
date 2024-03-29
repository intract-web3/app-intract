import GenericLayout from '@/components/genericSection/genericHeadingLayout/GenericLayout';
import gempsDropsPng from '../../assets/gem-drops.png';
import { RewardCard } from './RewardCard/RewardCard';
import mic from './assets/Mic.svg';
import marketing from './assets/marketing-blog.svg';
import styles from './thoughleader.module.css';
const howToEarnGemsArray = [
    {
        title: 'Podcast',
        image: mic,
        description:
            'Refer and earn gems effortlessly by inviting friends to join the adventure! and watch your gem collection grow infinitely',
    },
    {
        title: 'Leadership Blog',
        image: marketing,
        description:
            'Earn Gems by completing weekly streaks and unlock exclusive rewards',
    },
];

const ThoughLeader = () => {
    return (
        <section className={styles.container}>
            <GenericLayout
                heading={'Be a Thought Leader'}
                subheading={
                    <div className='mx-auto md:mb-24'>
                        Thought Leadership Blogs
                    </div>
                }
            />
            <div className={styles.cards_section}>
                {howToEarnGemsArray.map((howToEarnGems, index) => (
                    <RewardCard
                        key={index}
                        image={howToEarnGems.image}
                        title={<div>{howToEarnGems.title}</div>}
                        description={<div>{howToEarnGems.description}</div>}
                    />
                ))}
            </div>
        </section>
    );
};

export default ThoughLeader;
