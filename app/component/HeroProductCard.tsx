'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/* TYPES */
export type HeroProduct = {
    imageSrc: string;
    title: string;
    description: string;
    alignment: 'left' | 'right';
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
                        <Box maxWidth="1440px" py={{ xs: "1rem", md: "2rem" }} mx="auto" px={{ xs: 2, md: 4 }}>
                            <Box
                                width="100%"
                                borderRadius={{ xs: "12px", md: "24px" }}
                                overflow="hidden"
                                sx={{
                                    aspectRatio: { xs: '3 / 5', md: '44 / 17' },
                                    backgroundImage: `url(${item.imageSrc})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                {/* Flex container */}
                                <Box
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
                            </Box>
                        </Box>
                    );
                })
            }
        </>
    );
};

export default HeroProductCard;