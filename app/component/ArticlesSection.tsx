'use client';
import Link from 'next/link';
import { Box, Typography, Button, Grid, Stack, useTheme } from '@mui/material';
import { ArticleCard } from '@/app/component/ArticlesCard';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Article item
export interface ArticleItem {
    thumbnail: string;
    category: string;
    date: string;
    title: string;
    link: string;
}

// Section data
export interface ArticlesSectionData {
    sectionTitle: string;
    articles: ArticleItem[];
    seeMoreLink: string;
}

// Props
interface ArticlesSectionProps {
    data: ArticlesSectionData;
}

// Articles Section
function ArticlesSection({ data }: ArticlesSectionProps) {
    return (
        <Box maxWidth="1440px" mx="auto" component="section" px={{ xs: 2, md: 4 }} py={8}>
            {/* --- HEADER SECTION --- */}
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent="space-between"
                alignItems={{ xs: 'flex-start', md: 'center' }}
                spacing={2}
                mb="40px"
            >
                {/* Title */}
                <Typography
                    variant="h5"
                    textTransform="uppercase"
                    fontWeight={600}
                >
                    {data.sectionTitle}
                </Typography>

                {/* Desktop Button */}
                <Box display={{ xs: 'none', md: 'block' }}>
                    <Button
                        variant="outlined"
                        component={Link}
                        href={data.seeMoreLink}
                        sx={{
                            borderRadius: 50,
                            px: 3,
                            py: 1,
                            borderColor: 'grey.400',
                            color: 'text.primary',
                            '&:hover': { borderColor: "#2E44E3", color: "#2E44E3" }
                        }}
                    >
                        <Typography variant="buttonL" fontWeight={600}>
                            See More Details
                        </Typography>
                    </Button>
                </Box>
            </Stack>

            {/* --- CONTENT SECTION --- */}
            {/* Desktop: GRID LAYOUT */}
            <Box display={{ xs: 'none', md: 'block' }}>
                <Grid container spacing={2}>
                    {data.articles.map((article, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <ArticleCard data={article} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Mobile: SWIPER CAROUSEL */}
            <Box display={{ xs: 'block', md: 'none' }}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={true}
                    pagination={{ clickable: true, dynamicBullets: false }}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    loop={true}
                    speed={600}
                    style={{
                        paddingBottom: '50px',
                        '--swiper-pagination-color': "#2E44E3"
                    } as React.CSSProperties}
                >
                    {data.articles.map((article, index) => (
                        <SwiperSlide key={index}>
                            <ArticleCard data={article} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>

            {/* Mobile Button */}
            <Box display={{ xs: 'flex', md: 'none' }} justifyContent='center' mt={4} >
                <Button
                    variant="outlined"
                    component={Link}
                    href={data.seeMoreLink}
                    sx={{
                        borderRadius: 50,
                        px: 3,
                        py: 1,
                        borderColor: 'grey.400',
                        color: 'text.primary',
                        '&:hover': { borderColor: "#2E44E3", color: "#2E44E3" }
                    }}
                >
                    <Typography variant="buttonL" fontWeight={600}>
                        See More Details
                    </Typography>
                </Button>
            </Box>
        </Box >
    );
};

export default ArticlesSection;