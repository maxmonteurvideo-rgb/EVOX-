"use client";

import { useEffect, useState } from "react";

/* Mobile / tablette : < 1024 px (même seuil que la grille vidéo desktop). */
export const MOBILE_QUERY = "(max-width: 1023px)";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}
