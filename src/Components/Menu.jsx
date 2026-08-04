import { useState, useRef, useEffect } from "react";

// Botón con menú desplegable. Se cierra al hacer clic afuera.
export default function Menu({ icon, label, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="menu" ref={ref}>
      <button
        type="button"
        className="menu__button"
        onClick={() => setOpen((o) => !o)}
        aria-label={label}
        aria-expanded={open}
      >
        {icon}
      </button>

      {open && (
        <div className="menu__dropdown" onClick={() => setOpen(false)}>
          {children}
        </div>
      )}
    </div>
  );
}
