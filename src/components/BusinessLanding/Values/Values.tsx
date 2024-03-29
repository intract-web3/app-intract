import React from 'react';
import Image from 'next/image';
import { actionCardDetails } from './utils';
import valuesCover from './assets/populareco.png';
import ActionCards from './ActionCards/ActionCards';
import valuesstyle from './values.module.css';
import GenericLayout from '@/components/genericSection/genericHeadingLayout/GenericLayout';
import clsx from 'clsx';
import { Divider } from '@/ui-components/divider/Divider';

function Values() {
    return (
        <article
            className={clsx(
                'flex flex-col justify-center max-w-[1440px] md:px-12 sm:px-8 px-4 pt-12',
                valuesstyle.main
            )}
        >
            <GenericLayout
                heading={'Some popular quests'}
                subheading={
                    <div className='max-w-[900px]'>
                        <span style={{ color: 'rgba(255, 255, 255, 0.80)' }}>
                            Enriching experiences, meaningful rewards, and
                            empowering tools
                        </span>{' '}
                        that prioritize and enhance the journey of each
                        individual explorer within our platform
                    </div>
                }
            />
            <div className={valuesstyle.image_style}>
                <Image
                    src={valuesCover}
                    className={clsx(
                        'rounded-[16px] xs:mt-[24px] md:mt-[56px] w-full object-cover min-h-[230px] block'
                    )}
                    alt={'values-cover'}
                ></Image>
            </div>
            {/* <div className={valuesstyle.card_style}>
        {actionCardDetails.map((actionCardDetail, index) => {
          return (
            <>
              <ActionCards
                key={index}
                textFlag={index % 2 == 0}
                src={actionCardDetail.imgUrl}
                {...actionCardDetail}
              />
              <Divider className="md:my-24 xs:hidden md:block" />
            </>
          );
        })}
      </div> */}
        </article>
    );
}

export default Values;
