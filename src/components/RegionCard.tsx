"use client";
import { REGIONS_IMG } from "@/utils/constants";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { Region } from "@/types/pokemon";

interface RegionCardProps {
  region: Region; // Tipado para la prop region
}

export default function RegionCard({ region }: RegionCardProps) {
  const getRegionImage = (regionName: string): string =>
    REGIONS_IMG[regionName] || REGIONS_IMG.DEFAULT;

  return (
    <Grid item xs={12} sm={6} key={region.name}>
      <Card
        sx={{
          m: 2,
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#6c62a4",
          },
        }}
        onClick={() => redirect(`/region/${region.name}`)}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={getRegionImage(region.name.toUpperCase())}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {region.name.toUpperCase()}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
