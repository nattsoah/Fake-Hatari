import { createTheme } from '@mui/material/styles';

// 1. TypeScript Declaration Merging for custom variants

declare module '@mui/material/styles' {
  interface TypographyVariants {
    desktopDisplay1: React.CSSProperties;
    desktopDisplay2: React.CSSProperties;
    desktopSubtitle1: React.CSSProperties;
    desktopSubtitle2: React.CSSProperties;
    desktopSubtitle3: React.CSSProperties;
    desktopSubtitle4: React.CSSProperties;
    desktopCaption1: React.CSSProperties;
    desktopCaption2: React.CSSProperties;
    desktopHeading1: React.CSSProperties;
    desktopHeading2: React.CSSProperties;
    desktopHeading3: React.CSSProperties;
    desktopHeading4: React.CSSProperties;
    desktopHeading5: React.CSSProperties;
    desktopHeading6: React.CSSProperties;
    desktopBody1: React.CSSProperties;
    desktopBody2: React.CSSProperties;
    desktopBody3: React.CSSProperties;
    desktopBody4: React.CSSProperties;
    desktopButtonL: React.CSSProperties;
    desktopButtonM: React.CSSProperties;
    desktopMenuButtonS: React.CSSProperties;
    desktopPrimaryButtonL: React.CSSProperties;
    desktopLabel: React.CSSProperties;
    desktopLabelM: React.CSSProperties;
    desktopLabelS: React.CSSProperties;
    mobileDisplay1: React.CSSProperties;
    mobileDisplay2: React.CSSProperties;
    mobileSubtitle1: React.CSSProperties;
    mobileSubtitle2: React.CSSProperties;
    mobileSubtitle3: React.CSSProperties;
    mobileSubtitle4: React.CSSProperties;
    mobileCaption1: React.CSSProperties;
    mobileCaption2: React.CSSProperties;
    mobileHeading1: React.CSSProperties;
    mobileHeading2: React.CSSProperties;
    mobileHeading3: React.CSSProperties;
    mobileHeading4: React.CSSProperties;
    mobileHeading5: React.CSSProperties;
    mobileHeading6: React.CSSProperties;
    mobileBody1: React.CSSProperties;
    mobileBody2: React.CSSProperties;
    mobileBody3: React.CSSProperties;
    mobileBody4: React.CSSProperties;
    mobileButtonL: React.CSSProperties;
    mobileButtonM: React.CSSProperties;
    mobileMenuButtonS: React.CSSProperties;
    mobilePrimaryButtonL: React.CSSProperties;
    mobileLabel: React.CSSProperties;
    mobileLabelM: React.CSSProperties;
    mobileLabelS: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    desktopDisplay1?: React.CSSProperties;
    desktopDisplay2?: React.CSSProperties;
    desktopSubtitle1?: React.CSSProperties;
    desktopSubtitle2?: React.CSSProperties;
    desktopSubtitle3?: React.CSSProperties;
    desktopSubtitle4?: React.CSSProperties;
    desktopCaption1?: React.CSSProperties;
    desktopCaption2?: React.CSSProperties;
    desktopHeading1?: React.CSSProperties;
    desktopHeading2?: React.CSSProperties;
    desktopHeading3?: React.CSSProperties;
    desktopHeading4?: React.CSSProperties;
    desktopHeading5?: React.CSSProperties;
    desktopHeading6?: React.CSSProperties;
    desktopBody1?: React.CSSProperties;
    desktopBody2?: React.CSSProperties;
    desktopBody3?: React.CSSProperties;
    desktopBody4?: React.CSSProperties;
    desktopButtonL?: React.CSSProperties;
    desktopButtonM?: React.CSSProperties;
    desktopMenuButtonS?: React.CSSProperties;
    desktopPrimaryButtonL?: React.CSSProperties;
    desktopLabel?: React.CSSProperties;
    desktopLabelM?: React.CSSProperties;
    desktopLabelS?: React.CSSProperties;
    mobileDisplay1?: React.CSSProperties;
    mobileDisplay2?: React.CSSProperties;
    mobileSubtitle1?: React.CSSProperties;
    mobileSubtitle2?: React.CSSProperties;
    mobileSubtitle3?: React.CSSProperties;
    mobileSubtitle4?: React.CSSProperties;
    mobileCaption1?: React.CSSProperties;
    mobileCaption2?: React.CSSProperties;
    mobileHeading1?: React.CSSProperties;
    mobileHeading2?: React.CSSProperties;
    mobileHeading3?: React.CSSProperties;
    mobileHeading4?: React.CSSProperties;
    mobileHeading5?: React.CSSProperties;
    mobileHeading6?: React.CSSProperties;
    mobileBody1?: React.CSSProperties;
    mobileBody2?: React.CSSProperties;
    mobileBody3?: React.CSSProperties;
    mobileBody4?: React.CSSProperties;
    mobileButtonL?: React.CSSProperties;
    mobileButtonM?: React.CSSProperties;
    mobileMenuButtonS?: React.CSSProperties;
    mobilePrimaryButtonL?: React.CSSProperties;
    mobileLabel?: React.CSSProperties;
    mobileLabelM?: React.CSSProperties;
    mobileLabelS?: React.CSSProperties;
    // no fontFamily here
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    desktopDisplay1: true;
    desktopDisplay2: true;
    desktopSubtitle1: true;
    desktopSubtitle2: true;
    desktopSubtitle3: true;
    desktopSubtitle4: true;
    desktopCaption1: true;
    desktopCaption2: true;
    desktopHeading1: true;
    desktopHeading2: true;
    desktopHeading3: true;
    desktopHeading4: true;
    desktopHeading5: true;
    desktopHeading6: true;
    desktopBody1: true;
    desktopBody2: true;
    desktopBody3: true;
    desktopBody4: true;
    desktopButtonL: true;
    desktopButtonM: true;
    desktopMenuButtonS: true;
    desktopPrimaryButtonL: true;
    desktopLabel: true;
    desktopLabelM: true;
    desktopLabelS: true;
    mobileDisplay1: true;
    mobileDisplay2: true;
    mobileSubtitle1: true;
    mobileSubtitle2: true;
    mobileSubtitle3: true;
    mobileSubtitle4: true;
    mobileCaption1: true;
    mobileCaption2: true;
    mobileHeading1: true;
    mobileHeading2: true;
    mobileHeading3: true;
    mobileHeading4: true;
    mobileHeading5: true;
    mobileHeading6: true;
    mobileBody1: true;
    mobileBody2: true;
    mobileBody3: true;
    mobileBody4: true;
    mobileButtonL: true;
    mobileButtonM: true;
    mobileMenuButtonS: true;
    mobilePrimaryButtonL: true;
    mobileLabel: true;
    mobileLabelM: true;
    mobileLabelS: true;
  }
}

// 2. Define your custom typography variants (desktop & mobile)
const customTypography = {
  // --- Desktop ---
  desktopDisplay1: { fontSize: '60px', lineHeight: '64px' },
  desktopDisplay2: { fontSize: '56px', lineHeight: '64px' },
  desktopSubtitle1: { fontSize: '48px', lineHeight: '56px' },
  desktopSubtitle2: { fontSize: '24px', lineHeight: '32px' },
  desktopSubtitle3: { fontSize: '18px', lineHeight: '24px' },
  desktopSubtitle4: { fontSize: '16px', lineHeight: '24px' },
  desktopCaption1: { fontSize: '12px', lineHeight: '20px' },
  desktopCaption2: { fontSize: '12px', lineHeight: '20px' },
  desktopHeading1: { fontSize: '48px', lineHeight: '56px' },
  desktopHeading2: { fontSize: '40px', lineHeight: '48px' },
  desktopHeading3: { fontSize: '32px', lineHeight: '40px' },
  desktopHeading4: { fontSize: '28px', lineHeight: '40px' },
  desktopHeading5: { fontSize: '20px', lineHeight: '28px' },
  desktopHeading6: { fontSize: '18px', lineHeight: '24px' },
  desktopBody1: { fontSize: '16px', lineHeight: '24px' },
  desktopBody2: { fontSize: '14px', lineHeight: '20px' },
  desktopBody3: { fontSize: '16px', lineHeight: '20px' },
  desktopBody4: { fontSize: '14px', lineHeight: '20px' },
  desktopButtonL: { fontSize: '48px', lineHeight: '64px' },
  desktopButtonM: { fontSize: '20px', lineHeight: '28px' },
  desktopMenuButtonS: { fontSize: '14px', lineHeight: '20px' },
  desktopPrimaryButtonL: { fontSize: '40px', lineHeight: '48px' },
  desktopLabel: { fontSize: '16px', lineHeight: '24px' },
  desktopLabelM: { fontSize: '14px', lineHeight: '20px' },
  desktopLabelS: { fontSize: '12px', lineHeight: '20px' },
  // --- Mobile ---
  mobileDisplay1: { fontSize: '48px', lineHeight: '64px' },
  mobileDisplay2: { fontSize: '40px', lineHeight: '48px' },
  mobileSubtitle1: { fontSize: '28px', lineHeight: '32px' },
  mobileSubtitle2: { fontSize: '20px', lineHeight: '24px' },
  mobileSubtitle3: { fontSize: '14px', lineHeight: '20px' },
  mobileSubtitle4: { fontSize: '10px', lineHeight: '16px' },
  mobileCaption1: { fontSize: '12px', lineHeight: '20px' },
  mobileCaption2: { fontSize: '12px', lineHeight: '20px' },
  mobileHeading1: { fontSize: '28px', lineHeight: '32px' },
  mobileHeading2: { fontSize: '24px', lineHeight: '32px' },
  mobileHeading3: { fontSize: '18px', lineHeight: '24px' },
  mobileHeading4: { fontSize: '16px', lineHeight: '24px' },
  mobileHeading5: { fontSize: '14px', lineHeight: '20px' },
  mobileHeading6: { fontSize: '12px', lineHeight: '20px' },
  mobileBody1: { fontSize: '16px', lineHeight: '24px' },
  mobileBody2: { fontSize: '12px', lineHeight: '20px' },
  mobileBody3: { fontSize: '14px', lineHeight: '20px' },
  mobileBody4: { fontSize: '12px', lineHeight: '20px' },
  mobileButtonL: { fontSize: '28px', lineHeight: '36px' },
  mobileButtonM: { fontSize: '16px', lineHeight: '24px' },
  mobileMenuButtonS: { fontSize: '14px', lineHeight: '20px' },
  mobilePrimaryButtonL: { fontSize: '28px', lineHeight: '36px' },
  mobileLabel: { fontSize: '16px', lineHeight: '24px' },
  mobileLabelM: { fontSize: '14px', lineHeight: '20px' },
  mobileLabelS: { fontSize: '12px', lineHeight: '20px' },
};

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif ',
    ...customTypography
  },
});

export default theme;
