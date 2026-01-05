'use client';
import { Container } from "@mui/material";
import ArticlesSection from '@/app/component/ArticlesSection';
import BrandIntroductionCard from "@/app/component/BrandIntroduction";
import ContactCTASection from '@/app/component/ContactCTASection';
import HeroProductCard from "@/app/component/HeroProductCard";
import HighlightCategory from '@/app/component/hightlight-category';
import BannerSlider from '@/app/component/hero-banner';
import {
    mockArticles,
    heroData,
    CONTACT_CTA_DATA,
    heroProducts,
    highlightCategoryData,
    banners,
} from '@/app/consts/home-data';

export default function Home() {
  return (
    <Container maxWidth={"xl"} disableGutters>
      <BannerSlider items={banners} />
      <HighlightCategory data={highlightCategoryData} />
      <HeroProductCard items={heroProducts} />
      <ContactCTASection data={CONTACT_CTA_DATA} />
      <BrandIntroductionCard items={heroData} />
      <ArticlesSection data={mockArticles} />
    </Container>
  );
}
