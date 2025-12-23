'use client';

import BannerSlider, { BannerData, } from '@/app/component/hero-banner';

/* Mock Data */
const banners: BannerData[] = [
    {
        id: 1,
        image: '/images/banner/wind-box.jpg',
        title: 'Harnessing the wind of change',
        description: 'Say goodbye to admin work. Zena handles the tedious tasks so you can focus on design with peace of mind.',
        link: '/products',
        buttonText: 'View More',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1654614297832-b859afe7f6c5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Hatari x Wiggle Wiggle',
        description: 'A special collection of portable fans in collaboration with Koreas iconic brand, Wiggle Wiggle',
        link: '/products/type',
        buttonText: 'Discover',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1618941716939-553df3c6c278?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Windbox',
        description: 'Compact, square-shaped air circulation fan designed to be "Fitted For All Vibes"',
        link: '/products/detail',
        buttonText: 'Shop Now',
    },
];

const HomePage = () => {
    return (
        <>
            <BannerSlider items={banners} />
        </>
    );
};

export default HomePage;
