'use client';
import BrandIntroductionCard, { HeroData, } from "@/app/component/BrandIntroduction";
import ContactCTASection from '@/app/component/ContactCTASection';
import HeroProductCard, { HeroProduct, } from "@/app/component/HeroProductCard";
import HighlightCategory, { HighlightCategoryData } from '@/app/component/hightlight-category';
import BannerSlider, { BannerData, } from '@/app/component/hero-banner';

/* MOCK DATA */
const heroData: HeroData[] = [
    {
        backgroundImage: '/images/home/banner-4.png',
        tagline: 'A well-known brand producing electric fans and appliances.',
        buttonText: "Learn more",
        buttonLink: '/about-us',
        productImage: '',
    }
]

// mockup data
const CONTACT_CTA_DATA = {
    title: 'Harnessing\nThe Wind of Change',
    description: "Lorem ipsum dolor sit amet consectetur. Auctor sociis dui aenean et. Diam lorem vel enim duis magna. Leo malesuada vulputate lectus nisl turpis lacus mus etiam. Gravida aliquam augue vulputate feugiat pellentesque.",
    buttonText: "Contact Us",
    buttonLink: "/contact-form",
    imageSrc: "/images/home/banner/banner-3.png"
};

/* MOCK DATA */
const heroProducts: HeroProduct[] = [
    {
        imageSrc: '/images/home/banner-1.png',
        title: 'Harnessing\nThe Wind of Change',
        description: "Lorem ipsum dolor sit amet consectetur. Auctor sociis dui aenean et. Diam lorem vel enim duis magna. Leo malesuada vulputate lectus nisl turpis lacus mus etiam. Gravida aliquam augue vulputate feugiat pellentesque.",
        alignment: 'left',
        link: '/portable-fan',
    },
    {
        imageSrc: '/images/home/banner-2.png',
        title: 'Harnessing\nThe Wind of Change',
        description: "Lorem ipsum dolor sit amet consectetur. Auctor sociis dui aenean et. Diam lorem vel enim duis magna. Leo malesuada vulputate lectus nisl turpis lacus mus etiam. Gravida aliquam augue vulputate feugiat pellentesque.",
        alignment: 'right',
        link: '/installation-fan',
    }
]

// mockup data
const highlightCategoryData: HighlightCategoryData = {
    title: 'HARNESSING\nTHE WIND OF CHANGE',
    description: 'Lorem ipsum dolor sit amet consectetur. Auctor sociis dui aenean et. Diam lorem vel enim duis magna. Leo malesuada vulputate lectus nisl turpis lacus mus etiam. Gravida aliquam augue vulputate feugiat pellentesque.',
    products: [
        {
            id: 1,
            name: 'Portable fan',
            image: '/images/products/Portable-fan.png',
            link: '/portable-fan',
        },
        {
            id: 2,
            name: 'Installation fan',
            image: '/images/products/Installation-fan.png',
            link: '/installation-fan',
        },
    ]
};

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
            <HighlightCategory data={highlightCategoryData} />
            <HeroProductCard items={heroProducts} />
            <ContactCTASection data={CONTACT_CTA_DATA} />
            <BrandIntroductionCard items={heroData} />
        </>
    );
};

export default HomePage;
