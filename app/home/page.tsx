import ArticlesSection from '@/app/component/ArticlesSection';

const mockArticles = [
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
];

export default function HomePage() {
    return (
        <main>
            <ArticlesSection
                sectionTitle="Harnessing The Wind of Change"
                articles={mockArticles}
                seeMoreLink="/blog"
            />
        </main>
    );
}