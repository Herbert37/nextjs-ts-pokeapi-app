"use client";

import { Fab } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { redirect } from "next/navigation";

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

export default function FloatingButton() {
  return (
    <Fab sx={style} onClick={()=> redirect("/favorites")} size="medium" color="secondary" aria-label="add">
      <FavoriteIcon />
    </Fab>
  );
}
