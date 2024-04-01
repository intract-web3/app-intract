import React from 'react';
import footerstyle from './globalfooter.module.css';
import clsx from 'clsx';
function GlobalFooter() {
    return (
        <article className={clsx(footerstyle.main_container, 'grid-cols-7')}>
            <div className='flex flex-col md:col-span-2'>
                <p className={footerstyle.intract_heading}>Intract.</p>
                <span></span>
            </div>
        </article>
    );
}

export default GlobalFooter;
