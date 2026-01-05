import { HeroData } from '@/app/component/BrandIntroduction';
import { HeroProduct } from '@/app/component/HeroProductCard';
import { ArticlesSectionData } from '@/app/component/ArticlesSection';
import { BannerData } from '@/app/component/hero-banner';
import { HighlightCategoryData } from '@/app/component/hightlight-category';

// Articles mockup data
export const mockArticles: ArticlesSectionData = {
    sectionTitle: 'Harnessing The Wind of Change',
    seeMoreLink: '/blog',
    articles: [
        {
            thumbnail: '/images/home/slide-1.png',
            category: 'Our blog',
            date: 'May 15, 2024',
            title: '5 Ways to Take Control of Your Health with Telemedicine',
            link: '/blog/telemedicine',
        },
        {
            thumbnail: '/images/home/slide-2.png',
            category: 'Our blog',
            date: 'May 15, 2024',
            title: '5 Ways to Take Control of Your Health with Telemedicine',
            link: '/blog/wind-change',
        },
        {
            thumbnail: '/images/home/slide-3.png',
            category: 'External Resources',
            date: 'May 15, 2024',
            title: '5 Ways to Take Control of Your Health with Telemedicine',
            link: '/blog/cooling',
        },
    ],
};

// Hero data mockup
export const heroData: HeroData[] = [
    {
        backgroundImage: '/images/home/banner-4.png',
        tagline: 'A well-known brand producing electric fans and appliances.',
        buttonText: "Learn more",
        buttonLink: '/about-us',
        productImage: '',
    }
];

// Contact CTA mockup data
export const CONTACT_CTA_DATA = {
    title: 'Harnessing\nThe Wind of Change',
    description: "Lorem ipsum dolor sit amet consectetur. Auctor sociis dui aenean et. Diam lorem vel enim duis magna. Leo malesuada vulputate lectus nisl turpis lacus mus etiam. Gravida aliquam augue vulputate feugiat pellentesque.",
    buttonText: "Contact Us",
    buttonLink: "/contact-form",
    imageSrc: "/images/home/banner/banner-3.png"
};

// Hero products mockup data
export const heroProducts: HeroProduct[] = [
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
];

// Highlight category mockup data
export const highlightCategoryData: HighlightCategoryData = {
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

// Banners mockup data
export const banners: BannerData[] = [
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

