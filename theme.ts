import { createTheme, CSSObject } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    display1: CSSObject;
    display2: CSSObject;
    subtitle3: CSSObject;
    subtitle4: CSSObject;
    caption1: CSSObject;
    caption2: CSSObject;
    body3: CSSObject;
    body4: CSSObject;
    buttonL: CSSObject;
    buttonM: CSSObject;
    buttonS: CSSObject;
    label: CSSObject;
    link: CSSObject;
  }

  interface TypographyVariantsOptions {
    display1?: CSSObject;
    display2?: CSSObject;
    subtitle3?: CSSObject;
    subtitle4?: CSSObject;
    caption1?: CSSObject;
    caption2?: CSSObject;
    body3?: CSSObject;
    body4?: CSSObject;
    buttonL?: CSSObject;
    buttonM?: CSSObject;
    buttonS?: CSSObject;
    label?: CSSObject;
    link?: CSSObject;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display1: true;
    display2: true;
    subtitle3: true;
    subtitle4: true;
    caption1: true;
    caption2: true;
    body3: true;
    body4: true;
    buttonL: true;
    buttonM: true;
    buttonS: true;
    label: true;
    link: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',

    // --- Headings (h1 - h6) ---
    h1: { // Heading 1
      fontSize: '28px', lineHeight: '36px',
      '@media (min-width:900px)': { fontSize: '48px', lineHeight: '64px' },
    },
    h2: { // Heading 2
      fontSize: '24px', lineHeight: '32px',
      '@media (min-width:900px)': { fontSize: '40px', lineHeight: '48px' },
    },
    h3: { // Heading 3
      fontSize: '24px', lineHeight: '32px', 
      '@media (min-width:900px)': { fontSize: '40px', lineHeight: '48px' },
    },
    h4: { // Heading 4
      fontSize: '16px', lineHeight: '24px',
      '@media (min-width:900px)': { fontSize: '28px', lineHeight: '40px' },
    },
    h5: { // Heading 5
      fontSize: '24px', lineHeight: '32px',
      '@media (min-width:900px)': { fontSize: '32px', lineHeight: '40px' },
    },
    h6: { // Heading 6
      fontSize: '20px', lineHeight: '28px',
      '@media (min-width:900px)': { fontSize: '28px', lineHeight: '40px' },
    },

    // --- Subtitles (Subtitle 1 & 2 are standard, added 3 & 4) ---
    subtitle1: { // Subtitle 1
      fontSize: '28px', lineHeight: '32px',
      '@media (min-width:900px)': { fontSize: '48px', lineHeight: '56px' },
    },
    subtitle2: { // Subtitle 2
      fontSize: '20px', lineHeight: '24px',
      '@media (min-width:900px)': { fontSize: '24px', lineHeight: '32px' },
    },
    subtitle3: {
      fontSize: '14px', lineHeight: '20px',
      fontFamily: 'Roboto, Arial, sans-serif', // ใส่เผื่อไว้เพื่อให้ TS ไม่ฟ้อง
      fontWeight: 400,
      '@media (min-width:900px)': { fontSize: '18px', lineHeight: '24px' },
    },
    subtitle4: {
      fontSize: '10px', lineHeight: '16px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
      '@media (min-width:900px)': { fontSize: '16px', lineHeight: '24px' },
    },

    // --- Body (Body 1 & 2 are standard, added 3 & 4) ---
    body1: { // Body 1
      fontSize: '16px', lineHeight: '24px',
      '@media (min-width:900px)': { fontSize: '16px', lineHeight: '24px' },
    },
    body2: { // Body 2
      fontSize: '14px', lineHeight: '20px',
      '@media (min-width:900px)': { fontSize: '16px', lineHeight: '24px' },
    },
    body3: {
      fontSize: '14px', lineHeight: '20px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
      '@media (min-width:900px)': { fontSize: '16px', lineHeight: '20px' },
    },
    body4: {
      fontSize: '12px', lineHeight: '20px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
      '@media (min-width:900px)': { fontSize: '14px', lineHeight: '20px' },
    },

    // --- Captions ---
    caption: { // Default Caption maps to Caption 1 logic
      fontSize: '12px', lineHeight: '20px',
      '@media (min-width:900px)': { fontSize: '12px', lineHeight: '20px' },
    },
    caption1: {
      fontSize: '12px', lineHeight: '20px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
      '@media (min-width:900px)': { fontSize: '12px', lineHeight: '20px' },
    },
    caption2: {
      fontSize: '12px', lineHeight: '20px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
      '@media (min-width:900px)': { fontSize: '12px', lineHeight: '20px' },
    },

    // --- Custom Displays ---
    display1: {
      fontSize: '48px', lineHeight: '64px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
      '@media (min-width:900px)': { fontSize: '60px', lineHeight: '64px' },
    },
    display2: {
      fontSize: '40px', lineHeight: '48px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
      '@media (min-width:900px)': { fontSize: '56px', lineHeight: '64px' },
    },

    // --- Buttons & Labels ---
    buttonL: {
      fontSize: '16px', lineHeight: '36px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      textTransform: 'none',
      '@media (min-width:900px)': { fontSize: '20px', lineHeight: '48px' },
    },
    buttonM: {
      fontSize: '14px', lineHeight: '24px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      '@media (min-width:900px)': { fontSize: '16px', lineHeight: '28px' },
    },
    buttonS: {
      fontSize: '12px', lineHeight: '20px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      '@media (min-width:900px)': { fontSize: '14px', lineHeight: '20px' },
    },
    label: {
      fontSize: '14px', lineHeight: '20px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      '@media (min-width:900px)': { fontSize: '16px', lineHeight: '24px' },
    },
    link: {
      fontSize: '12px', lineHeight: '20px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
      textDecoration: 'underline',
      '@media (min-width:900px)': { fontSize: '16px', lineHeight: '20px' },
    },
  },
});

export default theme;