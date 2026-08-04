import { useState, useEffect } from "react";

// Estado guardado en localStorage (se mantiene entre visitas).
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Si localStorage no está disponible, ignoramos el error.
    }
  }, [key, value]);

  return [value, setValue];
}
