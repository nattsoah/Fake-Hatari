'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Grid, Typography, Stack, Divider, useTheme, useMediaQuery } from '@mui/material';
// Components & Data
import { SOCIAL_LINKS, desktopColumns } from './footer-data';
import FooterMobile, { RenderSection } from './footer-mobile';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box component="footer" bgcolor="#F9FAFB" pt={8} pb={4}>
            <Box maxWidth="1440px" mx="auto" px={{ xs: 2, md: 4 }}>
                <Grid container spacing={{ xs: 2, md: 4 }}>
                    {/* --- BRAND COLUMN --- */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Stack spacing={{ xs: "16px", md: "32px" }} alignItems="flex-start">
                            <Box sx={{ width: 100 }}>
                                <Image src="/images/Logo.png" alt="Hatari" width={85} height={24} style={{ objectFit: 'contain' }} />
                            </Box>
                            <Typography variant="body2">Contact us</Typography>
                            <Stack direction="row" spacing="16px">
                                {SOCIAL_LINKS.map((s, i) => (
                                    <Box
                                        key={i}
                                        component="a"
                                        href={s.href}
                                        borderRadius={50}
                                    >
                                        <Image src={s.icon} alt="social icon" />
                                    </Box>
                                ))}
                            </Stack>
                        </Stack>
                    </Grid>

                    {/* --- CONTENT COLUMNS --- */}

                    {/* MOBILE */}
                    {isMobile && <FooterMobile />}

                    {/* DESKTOP */}
                    {!isMobile && (
                        <>
                            {desktopColumns.map((col, index) => (
                                <Grid key={index} size={{ md: 2 }}>
                                    {/* Navigation Link */}
                                    <RenderSection data={col.top} />

                                    {/* Product Categories */}
                                    <Box sx={{ mt: 3 }}>
                                        {col.items.map((section, idx) => (
                                            <RenderSection key={idx} data={section} />
                                        ))}
                                    </Box>
                                </Grid>
                            ))}
                        </>
                    )}

                </Grid>

                {/* --- BOTTOM BAR --- */}
                <Divider sx={{ my: 4, borderColor: 'divider' }} />
                <Stack
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    justifyContent="space-between"
                    alignItems={{ xs: 'flex-start', md: 'center' }}
                    spacing={3}
                >
                    <Typography variant="body2" color="text.primary">© 2023 Hatari. All rights reserved.</Typography>
                    <Stack direction="row" spacing={{ xs: 2, md: "32px" }}>
                        {['Privacy policy', 'Terms of service', 'Cookie settings'].map((text) => (
                            <Link key={text} href="#" style={{ textDecoration: 'none' }}>
                                <Typography variant="link" color="text.primary" sx={{ textDecoration: 'underline' }}>{text}</Typography>
                            </Link>
                        ))}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};

export default Footer;