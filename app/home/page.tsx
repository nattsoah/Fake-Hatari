'use client';
import BrandIntroductionCard, { HeroData, } from "@/app/component/BrandIntroduction";

/* MOCK DATA */
const heroData: HeroData[] = [
    {
        backgroundImage: '/images/home/banner-4.png',
        tagline: 'A well-known brand producing electric fans and appliances.',
        buttonText: "Learn more",
        buttonLink: '/about-us',
        productImage: '',
    }
];

const HomePage = () => {
    return (
        <>
            <BrandIntroductionCard items={heroData} />
        </>
    );
};

export default HomePage;