import { Container } from "@mui/material";
import HomePage from "./home/page";

export default function Home() {
  return (
    <Container maxWidth={"xl"} disableGutters>
      <HomePage />
    </Container>
  );
}
