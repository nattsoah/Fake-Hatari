'use client';

import { Box, Grid, Typography, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

interface ContactCTAProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    imageSrc: string;
}

export default function ContactCTASection({
    title,
    description,
    buttonText,
    buttonLink,
    imageSrc,
}: ContactCTAProps) {
    return (
        <Box
            component="section"
            maxWidth="1440px"
            mx="auto"
            px={{ xs: 2, md: 4 }}
            py={{ xs: 6, md: 10 }}
            bgcolor="#FAFAFB"
        >
            <Grid
                container
                spacing={{ xs: 4, md: 8 }}
                alignItems="center"
            >
                {/* Left Column: Text */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box display="flex" flexDirection="column" gap={{xs:"0px" , md:"16px"}} pr={{ md: 4 }} >
                        <Typography
                            variant="h1"
                            mb={3}
                            textTransform="uppercase"
                            whiteSpace="pre-line"
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="#212121"
                            mb={4}
                        >
                            {description}
                        </Typography>

                        <Link href={buttonLink} passHref>
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
                                <Typography variant="body1">{buttonText}</Typography>
                            </Button>
                        </Link>
                    </Box>
                </Grid>

                {/* Right Column: Image */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '643 / 600',
                            borderRadius: {xs:"12px" , md:"24px"},
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
