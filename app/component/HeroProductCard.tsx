'use client';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

/* TYPES */
export type HeroProduct = {
    imageSrc: string;
    title: string;
    description: string;
    alignment: 'left' | 'right';
    link: string;
};

type HeroProductCardProps = {
    items: HeroProduct[];
};

const HeroProductCard = ({ items }: HeroProductCardProps) => {
    return (
        <>
            {
                items.map((item, index) => {
                    const isRight = item.alignment === 'right';
                    return (
                        <Link href={item.link} passHref style={{ textDecoration: 'none' }}>
                            <Box maxWidth="1440px" py={{ xs: "1rem", md: "2rem" }} mx="auto" px={{ xs: 2, md: 4 }}>
                                <Box
                                    width="100%"
                                    borderRadius={{ xs: "12px", md: "24px" }}
                                    overflow="hidden"
                                    position="relative"
                                    sx={{
                                        aspectRatio: { xs: '3 / 5', md: '44 / 17' },
                                        cursor: "pointer",
                                        '&:hover .bg-image': {
                                            filter: 'brightness(0.8)',
                                        }
                                    }}
                                >
                                    {/* image content */}
                                    <Box
                                        className="bg-image"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            zIndex: 0,
                                            backgroundImage: `url(${item.imageSrc})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            transition: 'all 0.4s ease',
                                        }}
                                    />

                                    {/* Flex container */}
                                    <Box
                                        position="relative" // [เพิ่ม] เพื่อให้ใช้ zIndex ได้
                                        zIndex={1}          // [เพิ่ม] บังคับให้ลอยอยู่เหนือรูปภาพ
                                        display="flex"
                                        height="100%"
                                        flexDirection={{ xs: 'column', md: 'row' }}
                                        justifyContent={{
                                            xs: 'flex-end',
                                            md: isRight ? 'flex-end' : 'flex-start',
                                        }}
                                        p="16px"
                                    >
                                        {/* CONTENT */}
                                        <Box
                                            width={{ xs: '100%', md: '50%' }}
                                            height={{ xs: '50%', md: '100%' }}
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="space-between"
                                            p={3}
                                            top={0}
                                            overflow="auto"
                                            borderRadius="16px"
                                            bgcolor="rgba(255,255,255,0.8)"
                                        >
                                            <Typography
                                                variant="h6"
                                                textTransform="uppercase"
                                                mb={2}
                                                whiteSpace="pre-line"
                                            >
                                                {item.title}
                                            </Typography>

                                            <Typography variant="body2" color='#000'>
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box >
                            </Box >
                        </Link>
                    );
                })
            }
        </>
    );
};

export default HeroProductCard;