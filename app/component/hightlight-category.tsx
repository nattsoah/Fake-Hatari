'use client';
import { Box, Typography, Container, Grid } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

/* Types */
export type HighlightProductItem = {
    id: number;
    name: string;
    image: string;
    link: string;
};

export type HighlightCategoryData = {
    title: string;
    description: string;
    products: HighlightProductItem[];
};

type HighlightCategoryProps = {
    data: HighlightCategoryData;
};

const HighlightCategory = ({ data }: HighlightCategoryProps) => {
    return (
        <Box maxWidth="1440px" mx="auto" px={{ xs: 2, md: 4 }} py={8}>
            {/* Header Section */}
            <Box textAlign="center" mb={6} maxWidth="800px" mx="auto">
                <Typography
                    variant="h1"
                    color="#333"
                    textTransform="uppercase"
                    mb={3}
                    whiteSpace="pre-line"
                >
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                    {data.description}
                </Typography>
            </Box>

            {/* Grid Section */}
            <Grid container spacing={3}>
                {data.products.map((product) => (
                    <Grid size={{ xs: 12, md: 6 }} key={product.id}>
                        <Link href={product.link} passHref style={{ textDecoration: 'none' }}>
                            <Box
                                position="relative"
                                width="100%"
                                borderRadius="24px"
                                overflow="hidden"
                                sx={{
                                    aspectRatio: { xs: '4 / 3', md: '14 / 11' },
                                    cursor: 'pointer',
                                }}
                            >
                                <Box
                                    position="absolute"
                                    sx={{
                                        inset: 0,
                                        transition: 'filter 0.3s ease',
                                        filter: 'brightness(0.8)',
                                        '&:hover': {
                                            filter: 'brightness(0.6)',
                                        },
                                    }}
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        style={{ objectFit: 'cover' }}
                                        unoptimized
                                    />
                                </Box>

                                {/* Product Name */}
                                <Typography
                                    variant="h4"
                                    position="absolute"
                                    bottom={30}
                                    left={30}
                                    color="white"
                                    zIndex={2}
                                >
                                    {product.name}
                                </Typography>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HighlightCategory;