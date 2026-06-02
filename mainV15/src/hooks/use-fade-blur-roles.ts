"use client";

import { useEffect, useState } from "react";

export function useFadeBlurRoles(roles: string[], intervalMs = 3200) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 500);
    }, intervalMs);
    return () => clearInterval(cycle);
  }, [roles.length, intervalMs]);

  return { role: roles[index], visible };
}
