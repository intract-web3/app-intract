import React, { FC } from 'react';
import numberStyles from './number.module.css';
import clsx from 'clsx';
import { Divider } from '@/ui-components/divider/Divider';
interface INumberProps {
    name: string;
    number: string;
    isLast: boolean;
}
const Number: FC<INumberProps> = (props) => {
    return (
        <article
            className={clsx(
                numberStyles.numbers_main,
                'md:px-32 sm:px-8 px-4',
                `${!props.isLast && 'mb-[96px]'}`
            )}
        >
            <section className={numberStyles.single_number}>
                <div className={numberStyles.name}>{props.name}</div>
                <span className={numberStyles.number}>{props.number}</span>
            </section>
            {!props.isLast && <Divider className='m-0 p-0' />}
        </article>
    );
};

export default Number;
