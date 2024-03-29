import { ReactNode, cloneElement, useEffect, useRef, useState } from 'react';
import rewardCardStyles from './rewardCard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Image from 'next/image';
import mic from '../assets/Mic.svg';
import marketing from '../assets/marketing-blog.svg';
import diagonal from '../assets/diagonal-arrow.svg';
export const RewardCard = ({
    key,
    title,
    description,
    image,
}: {
    key: number;
    title: ReactNode;
    description: ReactNode;
    image: any;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const descriptionRef = useRef<any>(null);

    useEffect(() => {
        onHoverOut();
    }, []);

    const onHoverIn = () => {
        setIsHovered(true);
        descriptionRef.current.style.marginBottom = `0px`;
        descriptionRef.current.style.opacity = `1`;
    };

    const onHoverOut = () => {
        setIsHovered(false);
        descriptionRef.current.style.marginBottom = `0px`;

        const descriptionHeight =
            descriptionRef.current.getBoundingClientRect().height;

        descriptionRef.current.style.marginBottom = `-${
            descriptionHeight + 8
        }px`;
        descriptionRef.current.style.opacity = `0`;
    };

    return (
        <div
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}
            className={rewardCardStyles.container}
        >
            {/* {image && cloneElement(image, { isHovered })} */}
            <div className={rewardCardStyles.content_container}>
                <div className={rewardCardStyles.content_section}>
                    <div>
                        <Image
                            src={image}
                            alt='mic'
                            className={rewardCardStyles.card_img}
                        />
                        <div className={rewardCardStyles.title}>
                            {title}
                            <Image
                                alt='diagonal'
                                src={diagonal}
                                width={20}
                                height={20}
                                className='flex-shrink-0'
                            />
                        </div>

                        <div
                            ref={descriptionRef}
                            className={rewardCardStyles.description}
                        >
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
