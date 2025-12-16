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
    primaryButtonL: CSSObject;
    buttonM: CSSObject;
    menuButtonS: CSSObject;
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
    primaryButtonL?: CSSObject;
    buttonM?: CSSObject;
    menuButtonS?: CSSObject;
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
    primaryButtonL: true;
    buttonM: true;
    menuButtonS: true;
    label: true;
    link: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    // --- Subtitles (Subtitle added 3 & 4) ---
    subtitle3: {
      fontSize: '14px', lineHeight: '20px',
      fontWeight: 400,
      '@media (min-width:900px)': { fontSize: '18px', lineHeight: '24px' },
    },
    subtitle4: {
      fontSize: '10px', lineHeight: '16px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
      '@media (min-width:900px)': { fontSize: '16px', lineHeight: '24px' },
    },

    // --- Body (added 3 & 4) ---
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
    primaryButtonL: {
      fontSize: '28px', lineHeight: '36px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      textTransform: 'none', 
      '@media (min-width:900px)': { fontSize: '40px', lineHeight: '48px' },
    },
    buttonM: {
      fontSize: '16px', lineHeight: '24px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      '@media (min-width:900px)': { fontSize: '20px', lineHeight: '28px' },
    },
    menuButtonS: {
      fontSize: '14px', lineHeight: '20px',
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