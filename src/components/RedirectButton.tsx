"use client";

import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { redirect } from "next/navigation";

interface RedirectButtonProps {
  path: string;
}

export default function RedirectButton({ path }: RedirectButtonProps) {
  return (
    <IconButton
      sx={{
        ml: "0.5rem",
        mr: "1rem",
        backgroundColor: "#fff",
      }}
      size='small'
      color='secondary'
      onClick={()=> redirect(path)}
    >
      <ArrowBackIcon />
    </IconButton>
  );
}
