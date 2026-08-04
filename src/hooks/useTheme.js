import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

// Hook para consumir el contexto de tema de forma segura.
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme debe usarse dentro de <ThemeContextProvider>");
  }
  return ctx;
}
