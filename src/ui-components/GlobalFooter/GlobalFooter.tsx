import { useMemo } from 'react';
import { isMobileOnly } from 'react-device-detect';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { BsSpotify } from 'react-icons/bs';
import './globalfooter.css';
export const GlobalFooter = () => {
    const location = useLocation();

    const nav = useMemo(() => {
        return [
            {
                label: 'Intract',
                options: [
                    {
                        label: 'Explore Quests',
                        link: '/quests',
                        isActive: location.pathname.includes('/quests'),
                    },
                    {
                        label: 'Comunities',
                        link: '/communities',
                        isActive: location.pathname.includes('/communit'),
                    },
                    {
                        label: 'Alpha Hub',
                        link: '/alpha-hub',
                        isActive: location.pathname.includes('/alpha-hub'),
                    },
                ],
            },
            {
                label: 'Earn',
                options: [
                    {
                        label: 'Refer & Earn',
                        link: '/referral',
                        isActive: location.pathname.includes('/referral'),
                    },
                    {
                        label: 'Leaderboard',
                        link: '/leaderboard',
                        isActive: location.pathname.includes('/leaderboard'),
                    },
                    // {
                    // 	label: 'Lottery',
                    // 	link: '/lottery-system',
                    // 	isActive: location.pathname.includes('/lottery-system'),
                    // },
                    {
                        label: 'Achievements',
                        link: '/achievements',
                        isActive: location.pathname.includes('/achievements'),
                    },
                ],
            },
            {
                label: 'About',
                options: [
                    {
                        label: 'Product Roadmap',
                        link: 'https://docs.intract.io',
                    },
                    {
                        label: 'Affiliate Program',
                        link: 'https://docs.intract.io/for-project/affiliate-+-sign-up-usd500-bonus',
                    },
                    {
                        label: 'Sign up Program',
                        link: 'https://docs.intract.io/for-business/sign-up-program',
                    },
                    {
                        label: 'Growth Community',
                        link: 'https://forms.gle/tdjCuL1HJ1EzhQpq8',
                    },
                    {
                        label: 'Blogs',
                        link: '/blogs',
                    },
                ],
            },
            {
                label: 'Support',
                options: [
                    {
                        label: 'Help Center',
                        link: 'https://intract-io.notion.site/Intract-Quests-Campaigns-FAQ-6ac66e1a71374f0b9d1f90fe92c7928f?pvs=4',
                    },
                    {
                        label: 'Create your quest',
                        link: 'https://app.intract.io',
                    },
                ],
            },
        ];
    }, [location]);

    const showGradient = location.pathname === '/alpha-hub';
    const showProjectSignup = location.pathname === '/';
    const showLinea = location.pathname.includes('linea');

    const showBlog = location.pathname.includes('blog');
    if (
        location.pathname.includes('/quest/') &&
        !location.pathname.includes('/alpha-hub/') &&
        !location.pathname.includes('/linea/') &&
        !location.pathname.includes('/base') &&
        !location.pathname.includes('/starknet')
    )
        return;

    return (
        <div>
            <div
                className={`${
                    (showProjectSignup || showProjectSignup || showLinea) &&
                    'footer-sticky'
                } bg-black`}
            >
                <div className='container '>
                    <div className='footer-wrapper pt-4'>
                        <a href='/' className='footer-brand w-block'>
                            {/* <div>
                                <Link
                                    to='/'
                                    className='brand w-nav-brand w--current '
                                >
                                    <div
                                        style={{ display: 'hidden' }}
                                        className='w-hidden md:w-block'
                                    >
                                        <div className='text-white h3 mb-0'>
                                            intract.
                                        </div>
                                    </div>
                                    <div className='block md:hidden'>
                                        <h1 className='text-white h1 d-none d-sm-block mb-0'>
                                            intract.
                                        </h1>

                                        <div className='text-white d-sm-none h2 mb-0'>
                                            intract.
                                        </div>
                                    </div>
                                </Link>
                            </div> */}
                            <div className='footer-paragraph-holder'>
                                <p>
                                    We are your personal guide for exploring
                                    web3 projects & earning 100x rewards
                                </p>
                            </div>
                        </a>
                        <div className='footer-content'>
                            {nav.map((i) => (
                                <div className='footer-block'>
                                    <div className='title-small'>{i.label}</div>
                                    {i.options.map((i) =>
                                        i?.link?.includes('https') ? (
                                            <a
                                                href={i.link}
                                                target='_blank'
                                                className={`footer-link ${'w--current'}`}
                                            >
                                                {i.label}
                                            </a>
                                        ) : (
                                            <Link
                                                to={i.link}
                                                className={`footer-link ${'w--current'}`}
                                            >
                                                {i.label}
                                            </Link>
                                        )
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='footer-divider'>
                        <div className='footer-copyright-holder'>
                            <div className='footer-copyright-center'>
                                Created by{' '}
                                <a
                                    href='http://business.intract.io/'
                                    target='_blank'
                                    className='white-link'
                                >
                                    Intract
                                </a>
                            </div>
                        </div>
                        <div className='footer-copyright-holder'>
                            <div className='footer-copyright-center'>
                                <Socials />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FooterGradient = () => {
    return (
        <div>
            <div className='gradient-holder'>
                <div className='gradient-bg'></div>
                <img
                    src='https://assets.website-files.com/646b2cebfa006878138dc849/646b9c17dce1208025b178f9_CircleBg.webp'
                    sizes='100vw'
                    alt=''
                    className='footer-cricle-bg'
                />
            </div>
            <div className='text-infinit'>
                <div className='text-holder'>
                    <div className='footer-text'>
                        {' '}
                        Learn Web3 & Discover Crypto Alpha.
                    </div>
                    <div className='footer-text'>
                        Learn Web3 & Discover Crypto Alpha.
                    </div>
                    <div className='footer-text'>
                        Learn Web3 & Discover Crypto Alpha.
                    </div>
                    <div className='footer-text'>
                        Learn Web3 & Discover Crypto Alpha.
                    </div>
                </div>
            </div>
        </div>
    );
};

const FooterProjectSignup = () => {
    // const { navigate } = useRouter();
    return (
        <div>
            <div className='gradient-holder'>
                <div className='gradient-bg'></div>
                <img
                    src='https://assets.website-files.com/646b2cebfa006878138dc849/646b9c17dce1208025b178f9_CircleBg.webp'
                    sizes='100vw'
                    alt=''
                    className='footer-cricle-bg'
                />
            </div>
            <div className='container'>
                <div className='row justify-content-between pb-5'>
                    <div className='col-12 col-lg-5 d-flex flex-column'>
                        <div className='d-block'>
                            <Link
                                to='/'
                                className='brand  d-flex align-items-center'
                            >
                                <img
                                    src='/logo/intract_logo.png'
                                    alt=''
                                    height='60px'
                                    className='me-2'
                                />
                                <div className='d-none d-md-block'>
                                    <div className='text-white display-5 fw-medium mb-0'>
                                        intract.
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='mt-auto mb-2'>
                            <div className='h4'>
                                Redefining questing experience
                            </div>
                            <p
                                className='text-white'
                                style={{ maxWidth: '400px' }}
                            >
                                We are your personal guide for exploring web3
                                projects & earning 100x rewards
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 mt-5 mt-lg-0'>
                        <div>
                            <div className='h3'>Explore Quests</div>
                            <div
                                className='fw-semibold mb-4'
                                style={{
                                    fontSize: isMobileOnly ? '3rem' : '4rem',
                                }}
                            >
                                Discover Alpha & Quests
                            </div>
                            <div
                                className={`button dark w-inline-block pointer  border border-light border-opacity-25 ${
                                    isMobileOnly ? 'w-100' : ''
                                }`}
                                onClick={() => {
                                    // navigate('/explore');
                                }}
                            >
                                <i className='bi-arrow-up-right-circle-fill me-2'></i>
                                Explore
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Socials = () => {
    return (
        <div className='text-center'>
            <div className='flex items-center justify-between gap-3'>
                <div
                    className='bg-dark rounded pointer mx-2 p-2 fs-5'
                    onClick={() => {
                        window.open(
                            'https://twitter.com/IntractCampaign',
                            '_blank'
                        );
                    }}
                >
                    <AiOutlineTwitter />
                </div>
                <div
                    className='bg-dark rounded pointer mx-2 p-2 fs-5'
                    onClick={() => {
                        window.open(
                            'https://discord.com/invite/faXj8Yzua6/',
                            '_blank'
                        );
                    }}
                >
                    <BsDiscord />
                </div>
                <div
                    className='bg-dark rounded pointer mx-2 p-2 fs-5'
                    onClick={() => {
                        window.open(
                            'https://t.me/+bNAsaw8NqsxmNWQ1/',
                            '_blank'
                        );
                    }}
                >
                    <BsTelegram />
                </div>
                <div
                    className='bg-dark rounded pointer mx-2 p-2 fs-5'
                    onClick={() => {
                        window.open(
                            'https://open.spotify.com/show/40sCgrg26jFDN3i3WsHB5D',
                            '_blank'
                        );
                    }}
                >
                    <BsSpotify />
                </div>
            </div>
        </div>
    );
};
