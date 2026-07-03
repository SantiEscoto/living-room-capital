"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "lrc-product-likes";

export function getStoredLikes(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function useProductLikes() {
  const [likes, setLikes] = useState<Record<string, number>>({});

  useEffect(() => {
    setLikes(getStoredLikes());
  }, []);

  const toggleLike = useCallback((productId: string) => {
    setLikes((prev) => {
      const current = prev[productId] ?? 0;
      const next = current > 0 ? 0 : 1;
      const updated = { ...prev, [productId]: next };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const getUserLikes = useCallback(
    (productId: string) => likes[productId] ?? 0,
    [likes]
  );

  const getTotalLikes = useCallback(
    (productId: string, seedLikes = 0) => seedLikes + (likes[productId] ?? 0),
    [likes]
  );

  return { likes, toggleLike, getUserLikes, getTotalLikes };
}
