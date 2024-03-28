import React from 'react';
import userstyle from './users.module.css';
import GenericLayout from '@/components/genericSection/genericHeadingLayout/GenericLayout';
function Users() {
    return (
        <article>
            <GenericLayout
                heading={'(Y)OUR Success Story'}
                subheading={
                    <div className='sm:max-w-[70%]'>
                        <span style={{ color: 'rgba(255, 255, 255, 0.80)' }}>
                            Real Stories, Real Experiences –
                        </span>
                        <span>Our Users Share Their Quest Journeys</span>
                    </div>
                }
            />
            <div className={userstyle.users}>
                <div className={userstyle.content}>
                    <div className={userstyle.text}>5M+</div>
                    <div className={userstyle.user_text}>Users</div>
                </div>
            </div>
        </article>
    );
}

export default Users;
