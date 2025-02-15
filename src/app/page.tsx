import { getRegions } from "@/services/pokeApi";
import { Region } from "@/types/pokemon";
import {
  Container,
  Grid,
} from "@mui/material";
import RegionCard from "@/components/RegionCard";
import FloatingButton from "@/components/FloatingButton";

async function Home() {
  const regions: Region[] = await getRegions();
  return (
    <Container maxWidth='lg' sx={{ padding: "0rem !important", mt: 3, mb: 2 }}>
      <Grid container spacing={2}>
        {regions?.map((region) => (
          <RegionCard key={region.name} region={region} />
        ))}
      </Grid>
      <FloatingButton />
    </Container>
  );
}

export default Home;
