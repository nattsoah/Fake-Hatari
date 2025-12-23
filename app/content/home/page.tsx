'use client';
import HeroProductCard, { HeroProduct, } from "@/app/component/HeroProductCard";

/* MOCK DATA */
const heroProducts: HeroProduct[] = [
    {
        imageSrc: '/images/home/banner-1.png',
        title: 'Harnessing\nThe Wind of Change',
        description: "Lorem ipsum dolor sit amet consectetur. Auctor sociis dui aenean et. Diam lorem vel enim duis magna. Leo malesuada vulputate lectus nisl turpis lacus mus etiam. Gravida aliquam augue vulputate feugiat pellentesque.",
        alignment: 'left',
    },
    {
        imageSrc: '/images/home/banner-2.png',
        title: 'Harnessing\nThe Wind of Change',
        description: "Lorem ipsum dolor sit amet consectetur. Auctor sociis dui aenean et. Diam lorem vel enim duis magna. Leo malesuada vulputate lectus nisl turpis lacus mus etiam. Gravida aliquam augue vulputate feugiat pellentesque.",
        alignment: 'right',
    },
];

const HomeContentPage = () => {
    return <HeroProductCard items={heroProducts} />;
};

export default HomeContentPage;
