'use client';
import { Theme } from '@emotion/react';
import { Box, Typography, Button, SxProps } from '@mui/material';
import Link from 'next/link';

/* TYPES */
export type HeroData = {
    backgroundImage: string;
    tagline: string;
    buttonText: string;
    buttonLink: string;
    productImage: string;
};

type HeroCardProps = {
    items: HeroData[];
};

//fontSyle
const responsiveFontStyles: SxProps<Theme> = {
    // fontWeight:800,
    '@media (max-width:1200px)': { fontSize: '36px' },
    '@media (max-width:1020px)': { fontSize: '30px' },
    '@media (max-width:972px)': { fontSize: '24px' },
    '@media (max-width:900px)': { fontSize: '24px' },
};

const BrandIntroductionCard = ({ items }: HeroCardProps) => {
    return (
        <>
            {
                items.map((item, index) => {
                    return (
                        <Box maxWidth="1440px" mx="auto">
                            <Box
                                width="100%"
                                overflow="hidden"
                                position="relative"
                                sx={{
                                    aspectRatio: { xs: '3 / 5', md: '44 / 17' },
                                    backgroundImage: `url(${item.backgroundImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                {/* Flex container */}
                                <Box
                                    position="relative"
                                    zIndex={1}
                                    display="flex"
                                    height="100%"
                                    flexDirection={{ xs: 'column', md: 'row' }}
                                    justifyContent={{ xs: "flex-end", md: "flex-start" }}
                                    p={{ xs: 2, md: 4 }}
                                >
                                    {/* CONTENT */}
                                    <Box
                                        width={{ xs: '100%', md: '65%' }}
                                        height={{ xs: '50%', md: '100%' }}
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="space-between"
                                        p={{ xs: 3, md: 6 }}
                                        top={0}
                                        overflow="auto"
                                        borderRadius={{ xs: "12px", md: "24px" }}
                                        bgcolor="white"
                                    >
                                        <Box height="100%" pt={{ xs: "2rem", md: "3rem" }}>
                                            <Typography
                                                variant="h3"
                                                maxWidth="620px"
                                                fontWeight={"Light"}
                                                mb={3}
                                                sx={{ ...responsiveFontStyles }}
                                            >
                                                {item.tagline}
                                            </Typography>
                                        </Box>

                                        <Link href={item.buttonLink} passHref>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    borderRadius: '50px',
                                                    boxShadow: 0,
                                                    px: 4,
                                                    py: 1.5,
                                                    textTransform: 'none',
                                                    backgroundColor: '#254EDB',
                                                    '&:hover': {
                                                        backgroundColor: '#1e3db3',
                                                        boxShadow: 0,
                                                    },
                                                }}
                                            >
                                                <Typography variant="body1">{item.buttonText}</Typography>
                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box >
                        </Box >
                    );
                })
            }
        </>
    );
};

export default BrandIntroductionCard;