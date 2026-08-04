import { useTheme } from "../hooks/useTheme";

// Botón que alterna entre tema claro y oscuro (consume ThemeContext).
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Cambiar a tema ${isLight ? "oscuro" : "claro"}`}
    >
      {isLight ? "🌙" : "☀️"}
    </button>
  );
}
