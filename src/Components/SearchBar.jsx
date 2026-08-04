import { useSearchParams } from "react-router-dom";

// Buscador: guarda el término en la URL como search param (?q=).
export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="search-bar">
      <label htmlFor="chat-search" className="visually-hidden">
        Buscar chat
      </label>
      <input
        id="chat-search"
        type="search"
        placeholder="Buscar o empezar un chat nuevo"
        value={query}
        onChange={handleChange}
        autoComplete="off"
      />
    </div>
  );
}
