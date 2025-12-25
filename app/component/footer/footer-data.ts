import FacebookIcon from '@/public/icons/fb-icon.svg';
import YouTubeIcon from '@/public/icons/yt-icon.svg';
import InstagramIcon from '@/public/icons/ins-icon.svg';
import XIcon from '@/public/icons/x-icon.svg';
import MusicNoteIcon from '@/public/icons/tt-icon.svg';
import LineIcon from '@/public/icons/line-icon.svg';

// TYPES
export type LinkItem = { label: string; href: string; };
export type SectionData = { title: string; items: LinkItem[]; isSingleLink?: boolean };

// DATA
export const SOCIAL_LINKS = [
    { icon: FacebookIcon, href: '#' },
    { icon: LineIcon, href: '#' },
    { icon: YouTubeIcon, href: '#' },
    { icon: InstagramIcon, href: '#' },
    { icon: XIcon, href: '#' },
    { icon: MusicNoteIcon, href: '#' },
];

const ALL_SECTIONS = {
    // Nav Links
    about: {
        title: 'About Us',
        items: [{ label: 'ABOUT US', href: '/about-us' }],
    },
    warranty: {
        title: 'Warranty & Services',
        items: [{ label: 'WARRANTY & SERVICES', href: '/blog' }],
    },
    distributor: {
        title: 'Distributor Partners',
        items: [{ label: 'DISTRIBUTOR PARTNERS', href: '/partners' }],
    },
    contact: {
        title: 'Contact Us',
        items: [{ label: 'CONTACT US', href: '/contact' }],
    },

    // Products
    portable: {
        title: 'Portable Fan',
        items: [
            { label: 'HANDHELD FAN', href: '/products/portable-fan/handheld-fan' },
            { label: 'CYCLONE FAN', href: '/products/portable-fan/cyclone-fan' },
            { label: 'SLIDE FAN', href: '/products/portable-fan/slide-fan' },
            { label: 'TABLE FAN', href: '/products/portable-fan/table-fan' },
            { label: 'STAND FAN', href: '/products/portable-fan/stand-fan' },
            { label: 'TOWER FAN', href: '/products/portable-fan/tower-fan' },
        ],
    },

    installation: {
        title: 'Installation Fan',
        items: [
            { label: 'WALL FAN', href: '/products/installation-fan/wall-fan' },
            { label: 'CYCLE FAN', href: '/products/installation-fan/cycle-fan' },
            { label: 'CEILING FAN', href: '/products/installation-fan/ceiling-fan' },
        ],
    },

    industrial: {
        title: 'Industrial Fan',
        items: [
            { label: 'INDUSTRIAL FAN', href: '/products/industrial-fan' },
        ],
    },

    ventilation: {
        title: 'Ventilation Fan',
        items: [
            { label: 'VENTILATION FAN', href: '/products/ventilation-fan' },
        ],
    },

    cooler: {
        title: 'Air Cooler',
        items: [
            { label: 'AIR COOLER', href: '/products/air-cooler' },
        ],
    },

    purifier: {
        title: 'Air Purifier',
        items: [
            { label: 'AIR PURIFIER', href: '/products/air-purifier' },
        ],
    },

    spare: {
        title: 'Spare Parts',
        items: [
            { label: 'FAN BLADE', href: '/products/spare-parts/fan-blade' },
        ],
    },

};

// ----------------------------------------------------------------------
// CONFIGURATION GROUPS

//Mobile Configuration
export const mobileLeftCol = [
    ALL_SECTIONS.about,
    ALL_SECTIONS.distributor,
    ALL_SECTIONS.portable,
    ALL_SECTIONS.installation,
    ALL_SECTIONS.spare,
];

export const mobileRightTop = [
    ALL_SECTIONS.warranty,
    ALL_SECTIONS.contact,
    ALL_SECTIONS.ventilation,
    ALL_SECTIONS.industrial,
];

export const mobileRightBottom = [
    ALL_SECTIONS.cooler,
    ALL_SECTIONS.purifier,
];

//Desktop Configuration
export const desktopColumns = [
    {
        top: ALL_SECTIONS.about,
        items: [ALL_SECTIONS.portable, ALL_SECTIONS.spare]
    },
    {
        top: ALL_SECTIONS.warranty,
        items: [ALL_SECTIONS.ventilation, ALL_SECTIONS.industrial]
    },
    {
        top: ALL_SECTIONS.distributor,
        items: [ALL_SECTIONS.installation]
    },
    {
        top: ALL_SECTIONS.contact,
        items: [ALL_SECTIONS.cooler, ALL_SECTIONS.purifier]
    }
];