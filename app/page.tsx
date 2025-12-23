import { Container } from "@mui/material";
import HomePage from "./content/home/page";

export default function Home() {
  return (
    <Container maxWidth={"xl"} disableGutters>
      <HomePage />
    </Container>
  );
}
