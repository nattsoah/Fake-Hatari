
'use client';
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// --- Types ---
interface BannerData {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
    buttonText: string;
}

//constant
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

const BannerSlider = () => {
    return (
        <Box
            maxWidth="1440px"
            width="100%"
            mx="auto"
            sx={{
                position: 'relative',
                '& .swiper-pagination-bullet': {
                    width: 10,
                    height: 10,
                    backgroundColor: '#ccc',
                    opacity: 1,
                },
                '& .swiper-pagination-bullet-active': {
                    backgroundColor: '#2E44E3',
                    width: 10,
                    borderRadius: '50%',
                },
                '& .swiper-pagination': {
                    bottom: '20px !important',
                    textAlign: "center",
                },
            }}
        >
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                speed={800}
                slidesPerView={1}
                style={{ width: '100%', height: '100%' }}
            >
                {banners.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Box
                            position="relative"
                            width="100%"
                            height="90vh"
                            display="flex"
                            alignItems="flex-end"
                            overflow="hidden"
                            pb="100px"
                        >
                            {/* --- Background Image --- */}
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.title}
                                position="absolute"
                                top={0}
                                left={0}
                                width="100%"
                                height="100%"
                                zIndex={-1}
                                sx={{
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                            />

                            {/* --- Content Overlay --- */}
                            <Container maxWidth="xl">
                                <Box
                                    maxWidth={{ xs: "328px", sm: "500px", md: "646px" }}
                                    padding={{ xs: 2, md: 4 }}
                                    color="#000"
                                    textAlign="left"
                                >
                                    <Typography
                                        variant="display1"
                                        component="h1"
                                        mb={3}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        mb={3}
                                        color="#212121"
                                    >
                                        {item.description}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        href={item.link}
                                        sx={{
                                            backgroundColor: '#2E44E3',
                                            borderRadius: '50px',
                                            padding: '3px 25px',
                                            textTransform: 'none',
                                            boxShadow: 'none',
                                            '&:hover': {
                                                backgroundColor: '#283CC9',
                                                boxShadow: 'none',
                                            },
                                        }}
                                    >
                                        <Typography variant="buttonL">
                                            {item.buttonText}
                                        </Typography>
                                    </Button>
                                </Box>
                            </Container>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default BannerSlider;