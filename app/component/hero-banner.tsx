
'use client';
import { Box, Typography, Button, Container } from '@mui/material';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

/* TYPES */
export type BannerData = {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
    buttonText: string;
};

type BannerSliderProps = {
    items: BannerData[];
};

const BannerSlider = ({ items }: BannerSliderProps) => {
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
                {items.map((item) => (
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