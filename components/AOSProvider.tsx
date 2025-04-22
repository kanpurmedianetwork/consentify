"use client";

import { useEffect } from "react";
import AOS from "aos";

interface AOSProviderProps {
  children: React.ReactNode;
}

export function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 750,
    });
  }, []);

  return <>{children}</>;
}