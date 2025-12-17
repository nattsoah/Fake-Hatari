'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// Icons
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';
import { SxProps } from '@mui/material';
import { Theme } from '@emotion/react';
import { usePathname } from 'next/navigation';

interface NavLink {
    text: string;
    href: string;
    isHighlight?: boolean;
    subItems?: { text: string; href: string }[];
}

const Navbar = () => {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    //Lang
    const [currentLang, setCurrentLang] = useState<'th' | 'en'>('en');
    const handleLanguageChange = (lang: 'th' | 'en') => {
        setCurrentLang(lang);
    };

    // Constants
    const brandColor = '#1a237e';
    const activeColor = '#2962ff';
    const textColor = '#383B44';

    // Style
    const responsiveFontStyles: SxProps<Theme> = {
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        lineHeight: 1, // เพิ่ม lineHeight 1 เพื่อการจัดกึ่งกลางที่แม่นยำ
        '@media (max-width:1283px)': { fontSize: '12px' },
        '@media (max-width:1200px)': { fontSize: '11px' },
        '@media (max-width:1100px)': { fontSize: '10px' },
        '@media (max-width:972px)': { fontSize: '9px' },
    };

    const navLinks: NavLink[] = [
        { text: 'About us', href: '/about' },
        { text: 'Our products', href: '/products' },
        { text: 'Warranty & services', href: '/services' },
        { text: 'Distributor partners', href: '/partners' },
        { text: 'Contact us', href: '/contact' }
    ];

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
    const drawerContent = (
        <Box
            height="100%"
            display="flex"
            flexDirection="column"
            p={3}
            bgcolor="#fff"
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
            >
                <Logo />
                <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton size="small" sx={{ color: textColor }}>
                        <ShoppingCartOutlinedIcon fontSize="small" />
                    </IconButton>
                    <Divider
                        orientation="vertical"
                        sx={{
                            height: '20px',
                            mx: 1,
                            alignSelf: 'center',
                            bgcolor: '#e0e0e0'
                        }}
                    />
                    <IconButton onClick={handleDrawerToggle} sx={{ color: textColor, p: 0.5 }}>
                        <CloseIcon />
                    </IconButton>
                </Stack>
            </Box>

            <List sx={{ m: 0, flexGrow: 1 }}>
                {navLinks.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <ListItem key={item.text} disablePadding>
                            <Link href={item.href} passHref legacyBehavior>
                                <ListItemButton
                                    component="a"
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        p: 0,
                                        bgcolor: 'transparent',
                                        transition: 'all 0.6s',
                                        '&:hover': {
                                            bgcolor: 'transparent',
                                            '& .MuiTypography-root': {
                                                color: activeColor
                                            }
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={item.text}
                                        primaryTypographyProps={{
                                            variant: 'buttonL',
                                            fontWeight: 600,
                                            color: isActive || item.isHighlight ? activeColor : textColor,
                                        }}
                                    />
                                    {(isActive || item.isHighlight) && <ChevronRightIcon sx={{ color: activeColor }} />}
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    );
                })}
            </List>

            <Box
                display="flex"
                flexDirection="column"
                gap="24px"
                mt="auto"
                pb={2}
            >
                <Link href="/login" passHref legacyBehavior>
                    <Typography
                        variant="buttonS"
                        component="a"
                        display="block"
                        color="#383B44"
                        whiteSpace="nowrap"
                        sx={{
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        LOG IN / SIGN UP
                    </Typography>
                </Link>
                <Stack direction="row" spacing={0.5} alignItems="center">
                    <Typography
                        variant="buttonS"
                        onClick={() => handleLanguageChange('th')}
                        color={currentLang === 'th' ? activeColor : textColor}
                        sx={{ cursor: 'pointer' }}
                    >
                        TH
                    </Typography>

                    <Typography variant="buttonS" color={brandColor}>/</Typography>

                    <Typography
                        variant="buttonS"
                        onClick={() => handleLanguageChange('en')}
                        color={currentLang === 'en' ? activeColor : textColor}
                        sx={{ cursor: 'pointer' }}
                    >
                        EN
                    </Typography>
                </Stack>
            </Box>
        </Box >
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
                        boxShadow="0px 4px 20px rgba(0,0,0,0.05)"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        width="100%"
                        sx={{
                            pointerEvents: 'auto',
                            transition: 'all 0.3s ease',
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
                            sx={{ display: { xs: 'none', md: 'flex' } }}
                            gap="4px"
                        >
                            {/* Group: Log in / Sign up */}
                            <Stack direction="row" alignItems="center" spacing={0.5}>
                                <Link href="/login" passHref legacyBehavior>
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
                                <ShoppingCartOutlinedIcon sx={{ fontSize: { md: '1.1rem', lg: '1.25rem' } }} />
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
                                    sx={{ cursor: 'pointer' }}
                                >
                                    TH
                                </Typography>

                                <Typography variant="buttonS" color={brandColor}>/</Typography>

                                <Typography
                                    variant="buttonS"
                                    onClick={() => handleLanguageChange('en')}
                                    color={currentLang === 'en' ? activeColor : textColor}
                                    sx={{ cursor: 'pointer' }}
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
                                <ShoppingCartOutlinedIcon sx={{ fontSize: 20 }} />
                            </IconButton>

                            <Divider
                                orientation="vertical"
                                sx={{
                                    height: '14px',
                                    alignSelf: 'center',
                                    bgcolor: '#e0e0e0'
                                }}
                            />


                            <IconButton onClick={handleDrawerToggle} sx={{ color: '#333', p: 0 }}>
                                <MenuIcon sx={{ fontSize: 20 }} />
                            </IconButton>
                        </Stack>

                    </Box>
                </Container>
            </AppBar>

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: '100%',
                    },
                }}
            >
                {drawerContent}
            </Drawer>
        </>
    );
};

export default Navbar;