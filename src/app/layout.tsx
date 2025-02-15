import type { Metadata } from "next";
import { ReactNode } from "react";
import EmotionProvider from "@/providers/EmotionProvider";
import ThemeRegistry from "@/providers/ThemeRegistry";
import "../styles/styles.css";

export const metadata: Metadata = {
  title: "PokéAPI APP",
  description: "Explore Pokémon by region and manage your favorites list.",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es">
      <body>
        <EmotionProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </EmotionProvider>
      </body>
    </html>
  );
}