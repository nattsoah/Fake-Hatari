'use client';
import HighlightCategory, { HighlightCategoryData } from '@/app/component/hightlight-category';

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

const HomePage = () => {
    return (
        <>
            <HighlightCategory data={highlightCategoryData} />
        </>
    );
};

export default HomePage;
