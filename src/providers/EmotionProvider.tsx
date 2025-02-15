"use client";
import { ReactNode } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from '@emotion/cache';

interface EmotionProviderProps {
  children: ReactNode;
}

function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

export default function EmotionProvider({ children }: EmotionProviderProps) {
  return <CacheProvider value={createEmotionCache()}>{children}</CacheProvider>;
}