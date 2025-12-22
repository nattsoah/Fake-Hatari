'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AppBar, Typography, Box, Stack, Divider, IconButton, Container, Collapse, useTheme, useMediaQuery, SxProps } from '@mui/material';
import { Theme } from '@emotion/react';
import NavbarMobile from './navbar-mobile';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

interface NavLink {
    text: string;
    href: string;
    image?: string;
    isHighlight?: boolean;
    subItems?: NavLink[];
}

//constant
const brandColor = '#1a237e';
const activeColor = '#2962ff';
const textColor = '#383B44';
const responsiveFontStyles: SxProps<Theme> = {
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    lineHeight: 1,
    '@media (max-width:1283px)': { fontSize: '12px' },
    '@media (max-width:1200px)': { fontSize: '11px' },
    '@media (max-width:1100px)': { fontSize: '10px' },
    '@media (max-width:972px)': { fontSize: '9px' },
};

const Navbar = () => {
    //constant hook
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const [currentLang, setCurrentLang] = useState<'th' | 'en'>('en');
    const navLinks: NavLink[] = [
        { text: 'About us', href: '/about' },
        {
            text: 'Our products',
            href: '/products',
            image: '/images/overview.jpg',
            subItems: [
                { text: 'Shop all', href: '/products' },
                {
                    text: 'Portable fan',
                    href: '/products/portable-fan',
                    image: '/images/preview.jpg',
                    subItems: [
                        { text: 'All', href: '/products/portable-fan' },
                        { text: 'Handheld fan', href: '/products/portable-fan/handheld' },
                        { text: 'Cyclone fan', href: '/products/portable-fan/cyclone' },
                        { text: 'Slide fan', href: '/products/portable-fan/slide' },
                        { text: 'Table fan', href: '/products/portable-fan/table' },
                        { text: 'Stand fan', href: '/products/portable-fan/stand' },
                        { text: 'Tower fan', href: '/products/portable-fan/tower' },
                    ]
                },
                { text: 'Ventilation fan', href: '/products/ventilation-fan' },
                { text: 'Industrial fan', href: '/products/industrial-fan' },
                { text: 'Installation fan', href: '/products/installation-fan' },
                { text: 'Air cooler', href: '/products/air-cooler' },
                { text: 'Air purifier', href: '/products/air-purifier' },
                { text: 'Spare parts', href: '/products/spare-parts' },
            ]
        },
        { text: 'Warranty & services', href: '/services' },
        { text: 'Distributor partners', href: '/partners' },
        { text: 'Contact us', href: '/contact' }
    ];

    //function
    useEffect(() => {
        if (isDesktop && mobileOpen) {
            setMobileOpen(false);
        }
    }, [isDesktop, mobileOpen]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLanguageChange = (lang: 'th' | 'en') => {
        setCurrentLang(lang);
    };

    const Logo = () => (
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Box
                position="relative"
                height={{ xs: '24px', md: '20px', lg: '24px' }}
                width="auto"
                mr={{ md: 1, lg: 0 }}
                sx={{ aspectRatio: '83.66 / 24' }}
            >
                <Image
                    src="/images/Logo.png"
                    alt="Hatari Logo"
                    fill
                    sizes="(max-width: 768px) 100px, 120px"
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'left'
                    }}
                    priority
                />
            </Box>
        </Link>
    );

    return (
        <>
            <AppBar
                position="fixed"
                color="transparent"
                elevation={0}
                sx={{ pt: 2, alignItems: 'start', pointerEvents: 'none' }}
            >
                <Container maxWidth={false}>
                    <Box
                        bgcolor={{ "xs": 'rgba(255, 255, 255, 0.3)', "md": 'rgba(255, 255, 255, 0.9)' }}
                        borderRadius={999}
                        px={4}
                        py={2}
                        boxShadow={
                            mobileOpen
                                ? "none"
                                : "0px 1px 20px rgba(0,0,0,0.05)"
                        }
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        width="100%"
                        sx={{
                            pointerEvents: 'auto',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            zIndex: 1300
                        }}
                    >
                        {/* LEFT: LOGO */}
                        <Logo />

                        {/* CENTER: DESKTOP MENU */}
                        <Stack
                            direction="row"
                            spacing={{ md: 2, lg: 4 }}
                            display={{ xs: 'none', md: 'flex' }}
                            alignItems="center"
                            height="100%"
                            flexShrink={0}
                        >
                            {navLinks.map((item) => (
                                <Link key={item.text} href={item.href} passHref style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography
                                        component="a"
                                        variant="buttonS"
                                        color="#444"
                                        textTransform="uppercase"
                                        sx={{
                                            textDecoration: 'none',
                                            '&:hover': { color: brandColor },
                                            ...responsiveFontStyles,
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                </Link>
                            ))}
                        </Stack>

                        {/* RIGHT: ACTIONS */}
                        <Stack
                            direction="row"
                            alignItems="center"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexShrink: 0,
                                whiteSpace: 'nowrap'
                            }}
                            spacing={1}
                        >
                            {/* Group: Log in / Sign up */}
                            <Stack direction="row" alignItems="center" spacing={0.5}>
                                <Link href="/login" passHref>
                                    <Typography
                                        component="a"
                                        variant="buttonS"
                                        color="#333"
                                        sx={{
                                            textDecoration: 'none',
                                            '&:hover': { color: brandColor },
                                            ...responsiveFontStyles
                                        }}
                                    >
                                        LOG IN
                                    </Typography>
                                </Link>

                                <Typography
                                    variant="buttonS"
                                    color="#333"
                                    sx={{
                                        ...responsiveFontStyles
                                    }}
                                >
                                    /
                                </Typography>

                                <Link href="/signup" passHref>
                                    <Typography
                                        component="a"
                                        variant="buttonS"
                                        color="#333"
                                        sx={{
                                            textDecoration: 'none',
                                            '&:hover': { color: brandColor },
                                            ...responsiveFontStyles
                                        }}
                                    >
                                        SIGN UP
                                    </Typography>
                                </Link>
                            </Stack>

                            <Divider
                                orientation="vertical"
                                sx={{
                                    height: '14px',
                                    mx: 1,
                                    alignSelf: 'center',
                                    bgcolor: '#e0e0e0'
                                }}
                            />

                            <IconButton size="small" sx={{ color: '#333', p: 0.5 }}>
                                <Image
                                    src="/icons/Variant2.svg"
                                    alt="Cart"
                                    width={20}
                                    height={20}
                                />
                            </IconButton>

                            <Divider
                                orientation="vertical"
                                sx={{
                                    height: '14px',
                                    mx: 1,
                                    alignSelf: 'center',
                                    bgcolor: '#e0e0e0'
                                }}
                            />

                            <Stack direction="row" spacing={0.5} alignItems="center">
                                <Typography
                                    variant="buttonS"
                                    onClick={() => handleLanguageChange('th')}
                                    color={currentLang === 'th' ? activeColor : textColor}
                                    sx={{ cursor: 'pointer', ...responsiveFontStyles }}
                                >
                                    TH
                                </Typography>

                                <Typography variant="buttonS" color={brandColor}>/</Typography>

                                <Typography
                                    variant="buttonS"
                                    onClick={() => handleLanguageChange('en')}
                                    color={currentLang === 'en' ? activeColor : textColor}
                                    sx={{ cursor: 'pointer', ...responsiveFontStyles }}
                                >
                                    EN
                                </Typography>
                            </Stack>
                        </Stack>

                        {/* Mobile Toggle */}
                        <Stack
                            direction="row"
                            alignItems="center"
                            gap="12px"
                            display={{ xs: 'flex', md: 'none' }}
                        >
                            <IconButton sx={{ color: '#333', p: 0 }}>
                                <Image
                                    src="/icons/Variant2.svg"
                                    alt="Cart"
                                    width={20}
                                    height={20}
                                />
                            </IconButton>

                            <Divider
                                orientation="vertical"
                                sx={{
                                    height: '14px',
                                    alignSelf: 'center',
                                    bgcolor: '#e0e0e0'
                                }}
                            />

                            <IconButton onClick={handleDrawerToggle} sx={{ color: textColor, p: 0 }}>
                                {mobileOpen ? <CloseIcon sx={{ fontSize: 24 }} /> : <MenuIcon sx={{ fontSize: 24 }} />}
                            </IconButton>
                        </Stack>
                    </Box>

                    {/* --- MOBILE DROPDOWN MENU --- */}
                    <Box
                        sx={{
                            pointerEvents: 'auto',
                            position: 'relative',
                            zIndex: 1200
                        }}
                    >
                        <Collapse in={mobileOpen} timeout="auto" unmountOnExit>
                            <Box
                                sx={{
                                    bgcolor: '#fff',
                                    borderRadius: '0 0 24px 24px',
                                    boxShadow: '0px 10px 20px rgba(0,0,0,0.05)',
                                    mt: '-2px'
                                }}
                                maxHeight="calc(100vh - 100px)"
                                overflow="auto"
                            >
                                <NavbarMobile
                                    onClose={handleDrawerToggle}
                                    open={mobileOpen}
                                    navLinks={navLinks}
                                    Logo={Logo}
                                    brandColor={brandColor}
                                    activeColor={activeColor}
                                    textColor={textColor}
                                    currentLang={currentLang}
                                    onLanguageChange={handleLanguageChange}
                                />
                            </Box>
                        </Collapse>
                    </Box>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbar;