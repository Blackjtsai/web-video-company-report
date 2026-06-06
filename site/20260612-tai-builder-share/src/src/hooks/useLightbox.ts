import { useState, useCallback } from "react";

export function useLightbox(images: string[]) {
  const [index, setIndex] = useState(-1);

  const open = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => setIndex(-1), []);
  const prev = useCallback(() =>
    setIndex((i) => (i <= 0 ? images.length - 1 : i - 1)), [images.length]);
  const next = useCallback(() =>
    setIndex((i) => (i >= images.length - 1 ? 0 : i + 1)), [images.length]);

  return { index, open, close, prev, next };
}
