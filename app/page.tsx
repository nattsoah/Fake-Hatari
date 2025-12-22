import { Container, Typography } from "@mui/material";
import BannerSlider from "./component/hero-banner";

export default function Home() {
  return (
    <Container maxWidth={"xl"} disableGutters>
      <BannerSlider />
    </Container>
  );
}
