// Filtros de la lista de chats (chips): Todos, No leídos, Favoritos, Grupos.
const FILTERS = [
  { key: "todos", label: "Todos" },
  { key: "no-leidos", label: "No leídos" },
  { key: "favoritos", label: "Favoritos" },
  { key: "grupos", label: "Grupos" },
];

export default function FilterTabs({ active, onChange }) {
  return (
    <div className="filters">
      {FILTERS.map((f) => (
        <button
          key={f.key}
          type="button"
          className={"filter" + (active === f.key ? " filter--active" : "")}
          onClick={() => onChange(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
