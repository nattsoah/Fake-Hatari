import Link from 'next/link';
import { Box, Grid, Typography, Stack } from '@mui/material';
import { SectionData, mobileLeftCol, mobileRightTop, mobileRightBottom } from './footer-data';

// ----------------------------------------------------------------------
export const RenderSection = ({ data }: { data: SectionData }) => {
  return (
    <Box mb={{ xs:"16px" , md:"20px"}}>
      {/* SECTION TITLE */}
      <Typography
        variant="subtitle4"
        color="text.secondary"
        mb={{ xs: "8px", md: "16px" }}
        display="block"
      >
        {data.title}
      </Typography>

      {/* LINKS */}
      <Stack spacing={0.5}>
        {data.items.map((item, idx) => (
          <Link key={idx} href={item.href} style={{ textDecoration: 'none' }}>
            <Typography
              variant="buttonS"
              color="text.primary"
              textTransform="uppercase"
              fontWeight={600}
              sx={{
                '&:hover': { color: "#254EDB" },
              }}
            >
              {item.label}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

// ----------------------------------------------------------------------
// MOBILE LAYOUT COMPONENT
const FooterMobile = () => {
  return (
    <>
      {/* LEFT */}
      <Grid size={{ xs: 6 }}>
        {mobileLeftCol.map((section, idx) => (
          <RenderSection key={idx} data={section} />
        ))}
      </Grid>

      {/* RIGHT */}
      <Grid size={{ xs: 6 }}>
        {mobileRightTop.map((section, idx) => (
          <RenderSection key={idx} data={section} />
        ))}

        <Box mt={11}>
          {mobileRightBottom.map((section, idx) => (
            <RenderSection key={idx} data={section} />
          ))}
        </Box>
      </Grid>
    </>
  );
};

export default FooterMobile;