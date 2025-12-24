'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography, Button, Grid, Stack, useTheme } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// TYPES
interface ArticleCardProps {
    thumbnail: string;
    category: string;
    date: string;
    title: string;
    link: string;
}

interface SectionProps {
    sectionTitle: string;
    articles: ArticleCardProps[];
    seeMoreLink: string;
}

function ArticleCard({ thumbnail, category, date, title, link, }: ArticleCardProps) {
    return (
        <Link href={link}>
            <Box
                height="100%"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                gap="12px"
                sx={{
                    cursor: "pointer",
                }}
            >
                {/* Thumbnail Image */}
                <Box
                    position="relative"
                    width="100%"
                    borderRadius={{ xs: "12px", md: "16px" }}
                    overflow="hidden"
                    mb={1}
                    sx={{
                        aspectRatio: '424 / 240',
                        transition: "all 0.4s ease",

                        '&:hover': {
                            filter: 'brightness(0.8)',
                        }
                    }}
                >
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </Box>

                {/* Category & Date */}
                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <Typography variant="subtitle4" fontWeight={600} color="#2E44E3">
                        {category}
                    </Typography>
                    <Typography variant="subtitle4" color="text.disabled">
                        •
                    </Typography>
                    <Typography variant="subtitle4" fontWeight={600} color="#2E2E2E">
                        {date}
                    </Typography>
                </Stack>

                {/* Title */}
                <Typography variant="buttonL" fontWeight={600} mb={1} flexGrow={1}>
                    {title}
                </Typography>

                {/* Read More Link */}
                <Button
                    endIcon={<OpenInNewIcon sx={{ color: "#2E44E3" }} />}
                    sx={{
                        p: 0,
                        mt: 'auto',
                        textTransform: 'none',
                        '&:hover': { backgroundColor: 'transparent' },
                    }}
                    disableRipple
                >
                    <Typography variant="buttonM" fontWeight={600} color="#2E44E3">Read more</Typography>
                </Button>
            </Box>
        </Link>
    );
};

// ----------------------------------------------------------------------
// Articles Section
// ----------------------------------------------------------------------
function ArticlesSection({ sectionTitle, articles, seeMoreLink }: SectionProps) {
    const theme = useTheme();
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
                    {sectionTitle}
                </Typography>

                {/* Desktop Button */}
                <Box display={{ xs: 'none', md: 'block' }}>
                    <Button
                        variant="outlined"
                        component={Link}
                        href={seeMoreLink}
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
                    {articles.map((article, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <ArticleCard {...article} />
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
                    {articles.map((article, index) => (
                        <SwiperSlide key={index}>
                            <ArticleCard {...article} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>

            {/* Mobile Button */}
            <Box display={{ xs: 'flex', md: 'none' }} justifyContent='center' mt={4} >
                <Button
                    variant="outlined"
                    component={Link}
                    href={seeMoreLink}
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