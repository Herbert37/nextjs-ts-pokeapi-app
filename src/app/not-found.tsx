'use client';

import RedirectButton from "@/components/RedirectButton";
import { Container, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Container
      maxWidth='lg'
      sx={{ pl: "1rem !important", pr: "1rem !important", mt: 3, mb: 2 }}
    >
      <Typography gutterBottom variant='h5' component='div' sx={{ pb: 2 }}>
        <RedirectButton path={"/"} />
        Page Not Found
      </Typography>
    </Container>
  );
}