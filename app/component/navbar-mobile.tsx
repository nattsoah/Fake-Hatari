'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, Stack, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export interface NavLink {
    text: string;
    href: string;
    image?: string;
    subItems?: NavLink[];
}

interface NavbarMobileProps {
    onClose: () => void;
    navLinks: NavLink[];
    Logo: React.FC;
    brandColor: string;
    activeColor: string;
    textColor: string;
    currentLang: 'th' | 'en';
    onLanguageChange: (lang: 'th' | 'en') => void;
    open: boolean;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
    onClose,
    navLinks,
    brandColor,
    activeColor,
    textColor,
    currentLang,
    onLanguageChange,
    open
}) => {
    const pathname = usePathname();
    const [activeSubMenu, setActiveSubMenu] = useState<NavLink | null>(null);
    const [activeNestedMenu, setActiveNestedMenu] = useState<NavLink | null>(null);
    const BackHeader = ({ text, onClick }: { text: string, onClick: () => void }) => (
        <Box px={3} pt={3} pb={2} display="flex" alignItems="center" bgcolor="#fff" flexShrink={0}>
            <Stack direction="row" spacing={1} alignItems="center" onClick={onClick} sx={{ cursor: 'pointer', color: activeColor }}>
                <ChevronLeftIcon sx={{ fontVariant: "buttonM" }} />
                <Typography variant="buttonM" fontWeight={600}>Back to {text}</Typography>
            </Stack>
        </Box>
    );

    useEffect(() => {
        if (!open) {
            setActiveSubMenu(null);
            setActiveNestedMenu(null);
        }
    }, [open]);
    return (
        <Box
            minHeight="90vh"
            position="relative"
            overflow="hidden"
            bgcolor="#fff"
        >
            {/* ================= LAYER 1: MAIN MENU ================= */}
            <Box
                display="flex"
                flexDirection="column"
                height="100%"
                minHeight="90vh"
            >
                {/* Content: Main Menu */}
                <Box flexGrow={1} overflow="auto" px={3} pt={2} pb={3}>
                    <List disablePadding>
                        {navLinks.map((item) => {
                            const hasSubMenu = item.subItems && item.subItems.length > 0;
                            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                            return (
                                <ListItem key={item.text} disablePadding >
                                    {hasSubMenu ? (
                                        <ListItemButton
                                            onClick={() => setActiveSubMenu(item)}
                                            sx={{
                                                p: 0,
                                                bgcolor: 'transparent',
                                                justifyContent: 'space-between',
                                                '&:hover': {
                                                    bgcolor: 'transparent',
                                                    '& .MuiTypography-root': { color: activeColor },
                                                    '& .MuiSvgIcon-root': { color: activeColor },
                                                }
                                            }}
                                        >                                            <ListItemText primary={item.text} primaryTypographyProps={{ variant: 'buttonL', fontWeight: 600, color: isActive ? activeColor : textColor }} />
                                            <ChevronRightIcon sx={{ color: isActive ? activeColor : textColor }} />
                                        </ListItemButton>
                                    ) : (
                                        <Link href={item.href} passHref legacyBehavior>
                                            <ListItemButton component="a" onClick={onClose} sx={{ p: 0, bgcolor: 'transparent', '&:hover .MuiTypography-root': { color: activeColor }, '&:hover': { bgcolor: 'transparent' } }}>
                                                <ListItemText primary={item.text} primaryTypographyProps={{ variant: 'buttonL', fontWeight: 600, color: isActive ? activeColor : textColor }} />
                                            </ListItemButton>
                                        </Link>
                                    )}
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>

                {/* Footer */}
                <Box px={3} pb={3} display="flex" flexDirection="column" gap="24px" mt="auto">
                    <Link href="/login" passHref legacyBehavior>
                        <Typography variant="buttonS" component="a" display="block" color="#383B44" sx={{ textDecoration: 'none', cursor: 'pointer' }}>LOG IN / SIGN UP</Typography>
                    </Link>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography variant="buttonS" onClick={() => onLanguageChange('th')} color={currentLang === 'th' ? activeColor : textColor} sx={{ cursor: 'pointer' }}>TH</Typography>
                        <Typography variant="buttonS" color={brandColor}>/</Typography>
                        <Typography variant="buttonS" onClick={() => onLanguageChange('en')} color={currentLang === 'en' ? activeColor : textColor} sx={{ cursor: 'pointer' }}>EN</Typography>
                    </Stack>
                </Box>
            </Box>

            {/* ================= LAYER 2: SUB MENU  ================= */}
            <Box
                sx={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    bgcolor: '#fff', zIndex: 10,
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: activeSubMenu ? 'translateX(0)' : 'translateX(100%)', // สไลด์
                    display: 'flex', flexDirection: 'column'
                }}
            >
                <BackHeader text="Main menu" onClick={() => setActiveSubMenu(null)} />

                <Box flexGrow={1} overflow="auto" px={3} pb={3}>
                    <Typography variant="subtitle2" mb={2} mt={1} textTransform="uppercase">PRODUCT MODEL</Typography>
                    <List disablePadding>
                        {activeSubMenu?.subItems?.map((subItem) => {
                            const hasNested = subItem.subItems && subItem.subItems.length > 0;
                            return (
                                <ListItem key={subItem.text} disablePadding sx={{ mb: 1 }}>
                                    {hasNested ? (
                                        <ListItemButton onClick={() => setActiveNestedMenu(subItem)}
                                            sx={{
                                                p: 0,
                                                bgcolor: 'transparent',
                                                justifyContent: 'space-between',
                                                '&:hover': {
                                                    bgcolor: 'transparent',
                                                    '& .MuiTypography-root': { color: activeColor },
                                                    '& .MuiSvgIcon-root': { color: activeColor },
                                                }
                                            }}
                                        >
                                            <ListItemText primary={subItem.text} primaryTypographyProps={{ variant: 'body1', fontWeight: 600, color: pathname.startsWith(subItem.href) && subItem.href !== '/products' ? activeColor : textColor }} />
                                            <ChevronRightIcon fontSize="small" sx={{ color: pathname.startsWith(subItem.href) && subItem.href !== '/products' ? activeColor : textColor }} />
                                        </ListItemButton>
                                    ) : (
                                        <Link href={subItem.href} passHref legacyBehavior>
                                            <ListItemButton component="a" onClick={onClose}
                                                sx={{
                                                    p: 0,
                                                    bgcolor: 'transparent',
                                                    justifyContent: 'space-between',
                                                    '&:hover': {
                                                        bgcolor: 'transparent',
                                                        '& .MuiTypography-root': { color: activeColor },
                                                        '& .MuiSvgIcon-root': { color: activeColor },
                                                    }
                                                }}
                                            >
                                                <ListItemText primary={subItem.text} primaryTypographyProps={{ variant: 'body1', fontWeight: 600, color: pathname === subItem.href ? activeColor : textColor }} />
                                                {subItem.text !== 'Shop all' && <ChevronRightIcon fontSize="small" sx={{ color: textColor }} />}
                                            </ListItemButton>
                                        </Link>
                                    )}
                                </ListItem>
                            );
                        })}
                    </List>
                    {/* Image */}
                    {activeSubMenu?.image && (
                        <Box mt={4} position="relative" width="100%" borderRadius="16px" overflow="hidden" bgcolor="#f5f5f5" sx={{ aspectRatio: '5 / 5' }}>
                            <Image
                                src={activeSubMenu?.image}
                                alt={activeSubMenu.text}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>
                    )}
                </Box>
            </Box>

            {/* ================= LAYER 3: NESTED MENU ================= */}
            <Box
                sx={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    bgcolor: '#fff', zIndex: 20,
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: activeNestedMenu ? 'translateX(0)' : 'translateX(100%)',
                    display: 'flex', flexDirection: 'column'
                }}
            >
                <BackHeader text={activeNestedMenu?.text || 'Previous'} onClick={() => setActiveNestedMenu(null)} />

                <Box flexGrow={1} overflow="auto" px={3} pb={3}>
                    <Typography variant="subtitle2" mb={2} mt={1} textTransform="uppercase">PRODUCT TYPE</Typography>
                    <List disablePadding>
                        {activeNestedMenu?.subItems?.map((item) => (
                            <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                                <Link href={item.href} passHref legacyBehavior>
                                    <ListItemButton component="a" onClick={onClose}
                                        sx={{
                                            p: 0,
                                            bgcolor: 'transparent',
                                            justifyContent: 'space-between',
                                            '&:hover': {
                                                bgcolor: 'transparent',
                                                '& .MuiTypography-root': { color: activeColor },
                                                '& .MuiSvgIcon-root': { color: activeColor },
                                            }
                                        }}
                                    >
                                        <ListItemText primary={item.text} primaryTypographyProps={{ variant: 'body1', fontWeight: 600, color: pathname === item.href ? activeColor : textColor }} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                    {/* Image */}
                    {activeNestedMenu?.image && (
                        <Box mt={4} position="relative" width="100%" borderRadius="16px" overflow="hidden" bgcolor="#f5f5f5" sx={{ aspectRatio: '5 / 5' }}>
                            <Image
                                src={activeNestedMenu.image}
                                alt={activeNestedMenu.text}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default NavbarMobile;