'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AppBar, Typography, Box, Stack, Divider, IconButton, Container, Collapse, useTheme, useMediaQuery, SxProps, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Fade from '@mui/material/Fade';
import { Theme } from '@emotion/react';
import NavbarMobile from './navbar-mobile';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

// --- Desktop Menu Component ---
const DesktopMenu = ({ isOpen, items, }: {
    isOpen: boolean;
    items?: NavLink[];
}) => {
    const [activeModel, setActiveModel] = useState<NavLink | null>(null);
    const [activeType, setActiveType] = useState<NavLink | null>(null);

    useEffect(() => {
        if (isOpen && items && items.length > 0 && !activeModel) {
            setActiveModel(items[1]);
        }
    }, [isOpen, items]);

    const currentImage = activeType?.image || activeModel?.image || '/images/overview.jpg';

    if (!items) return null;

    return (
        <Fade in={isOpen} timeout={500}>
            <Box
                top="100%"
                left={0}
                right={0}
                mt={1.5}
                bgcolor="white"
                borderRadius="24px"
                boxShadow="0px 10px 40px rgba(0,0,0,0.08)"
                p={4}
                zIndex={1400}
                display={isOpen ? 'flex' : 'none'}
                minHeight="450px"
                width="100%"
            >
                {/* Column 1: PRODUCT MODEL */}
                <Box
                    width={{ xs: '25%', xl: '305px' }}
                    minWidth="200px"
                    pr={2}
                >
                    <Typography variant="subtitle2" color="text.secondary" mb={2} fontWeight={700}>
                        PRODUCT MODEL
                    </Typography>
                    <List disablePadding>
                        {items.map((item) => {
                            const isActive = activeModel?.text === item.text;
                            const hasSub = item.subItems && item.subItems.length > 0;
                            return (
                                <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                                    <Link href={item.href} passHref style={{ textDecoration: 'none', width: '100%' }}>
                                        <ListItemButton
                                            onMouseEnter={() => {
                                                setActiveModel(item);
                                                setActiveType(null);
                                            }}
                                            sx={{
                                                p: 0,
                                                bgcolor: 'transparent',
                                                '&:hover': { bgcolor: 'transparent' },
                                                whiteSpace: 'normal'
                                            }}
                                        >
                                            <ListItemText
                                                primary={item.text}
                                                primaryTypographyProps={{
                                                    variant: 'buttonM',
                                                    color: isActive ? '#2962ff' : '#383B44'
                                                }}
                                            />
                                            {hasSub && <ChevronRightIcon sx={{ color: isActive ? '#2962ff' : '#383B44', fontSize: 20 }} />}
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>

                {/* Column 2: PRODUCT TYPE */}
                <Box
                    width={{ xs: '40%', xl: '561px' }}
                    minWidth="300px"
                    px={4}
                    borderLeft="1px solid #eee"
                >
                    <Typography variant="subtitle2" color="text.secondary" mb={2} fontWeight={700}>
                        PRODUCT TYPE
                    </Typography>
                    {activeModel?.subItems ? (
                        <List disablePadding>
                            {activeModel.subItems.map((subItem) => {
                                const isActive = activeType?.text === subItem.text;
                                return (
                                    <ListItem key={subItem.text} disablePadding sx={{ mb: 1 }}>
                                        <Link href={subItem.href} passHref style={{ textDecoration: 'none', width: '100%' }}>

                                            <ListItemButton
                                                onMouseEnter={() => setActiveType(subItem)}
                                                sx={{ p: 0, bgcolor: 'transparent', '&:hover': { bgcolor: 'transparent' } }}
                                            >
                                                <ListItemText
                                                    primary={subItem.text}
                                                    primaryTypographyProps={{
                                                        variant: 'buttonM',
                                                        color: isActive ? '#2962ff' : '#383B44'
                                                    }}
                                                />
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                );
                            })}
                        </List>
                    ) : (
                        <Typography variant="body2" color="text.secondary">No options available</Typography>
                    )}
                </Box>

                {/* Column 3: IMAGE PREVIEW  */}
                <Box
                    flexGrow={1}
                    position="relative"
                    borderRadius="16px"
                    overflow="hidden"
                    bgcolor="#f9f9f9"
                >
                    <Image
                        src={currentImage}
                        alt="Product Preview"
                        fill
                        style={{ objectFit: "cover" }}
                        key={currentImage}
                    />
                </Box>
            </Box>
        </Fade>
    );
};

const Navbar = () => {
    //constant hook
    const [mobileOpen, setMobileOpen] = useState(false);
    const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
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
                        { text: 'All', href: '/products/portable-fan', image: '/images/preview.jpg' },
                        { text: 'Handheld fan', href: '/products/portable-fan/handheld', image: '/images/product.png' },
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
        if (isDesktop) {
            if (mobileOpen) {
                setMobileOpen(false);
                setDesktopMenuOpen(true);
            }
        } else {
            if (desktopMenuOpen) {
                setDesktopMenuOpen(false);
                setMobileOpen(true);
            }
        }
    }, [isDesktop, mobileOpen, desktopMenuOpen]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDesktopMenuToggle = (e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        setDesktopMenuOpen((prev) => !prev);
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
                        bgcolor={
                            mobileOpen
                                ? '#fff'
                                : {
                                    xs: 'rgba(255, 255, 255, 0.3)',
                                    md: 'rgba(255, 255, 255, 0.9)'
                                }
                        }
                        borderRadius={mobileOpen ? "30px 30px 0px 0px" : "50px"}
                        px={4}
                        py={2}
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
                            {navLinks.map((item) => {
                                const isOurProduct = item.text === 'Our products';
                                const hasSub = item.subItems && item.subItems.length > 0;
                                const isOpen = isOurProduct && desktopMenuOpen;
                                return (
                                    <Link
                                        key={item.text}
                                        onClick={isOurProduct ? handleDesktopMenuToggle : undefined}
                                        href={item.href}
                                        passHref
                                        style={{ display: 'flex', alignItems: 'center' }}>
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            spacing={0.5}
                                            sx={{
                                                cursor: 'pointer',
                                                '&:hover .menu-text': { color: brandColor }, // Effect เปลี่ยนสี Text
                                                '&:hover .menu-icon': { color: brandColor }  // Effect เปลี่ยนสี Icon
                                            }}
                                        >
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

                                            {/* แสดง Icon SubItems */}
                                            {hasSub && (
                                                <KeyboardArrowDownIcon
                                                    className="menu-icon"
                                                    sx={{
                                                        fontSize: 16,
                                                        color: '#444',
                                                        transition: 'transform 0.3s ease, color 0.2s',
                                                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    }}
                                                />
                                            )}
                                        </Stack>
                                    </Link>
                                )
                            })}
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
                                <Link href="/login" passHref style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
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

                                <Link href="/signup" passHref style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
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


                    {/* --- DESKTOP DROPDOWN MENU --- */}
                    <Box sx={{ pointerEvents: 'auto' }}>
                        <DesktopMenu
                            isOpen={desktopMenuOpen}
                            items={navLinks.find(n => n.text === 'Our products')?.subItems}
                        />
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
            </AppBar >
        </>
    );
};

export default Navbar;