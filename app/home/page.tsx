import ContactCTASection from '@/app/component/ContactCTASection';

export default function HomePage() {
    return (
        <>
            <ContactCTASection
                title={'Harnessing\nThe Wind of Change'}
                description="Lorem ipsum dolor sit amet consectetur. Auctor sociis dui aenean et. Diam lorem vel enim duis magna. Leo malesuada vulputate lectus nisl turpis lacus mus etiam. Gravida aliquam augue vulputate feugiat pellentesque."
                buttonText="Contact Us"
                buttonLink="/contact-form"
                imageSrc="/images/home/banner/banner-3.png"
            />
        </>
    );
}