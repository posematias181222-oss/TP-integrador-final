import { useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { useContacts } from "../hooks/useContacts";
import SearchBar from "./SearchBar";
import FilterTabs from "./FilterTabs";
import ContactList from "./ContactList";
import ThemeToggle from "./ThemeToggle";
import Avatar from "./Avatar";
import Menu from "./Menu";

const newChatIcon = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
  </svg>
);

const dotsIcon = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <circle cx="12" cy="5" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="19" r="2" />
  </svg>
);

export default function Sidebar() {
  const { contacts } = useContacts();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState("todos");
  const query = (searchParams.get("q") ?? "").toLowerCase();

  // Filtra por el texto del buscador y por el chip activo.
  const filtered = contacts.filter((c) => {
    if (!c.name.toLowerCase().includes(query)) return false;
    if (filter === "no-leidos") return c.unread > 0;
    if (filter === "favoritos") return c.favorite;
    if (filter === "grupos") return c.isGroup;
    return true;
  });

  return (
    <aside className="sidebar">
      <header className="topbar">
        <h1 className="topbar__title">Chats</h1>

        <div className="topbar__actions">
          <ThemeToggle />

          <Menu icon={newChatIcon} label="Nuevo chat">
            <p className="menu__title">Nuevo chat</p>
            {contacts.map((c) => (
              <Link key={c.id} to={`/contact/${c.id}`} className="menu__item">
                <Avatar name={c.name} color={c.color} size={30} />
                <span>{c.name}</span>
              </Link>
            ))}
          </Menu>

          <Menu icon={dotsIcon} label="Más opciones">
            <button className="menu__item" type="button">👥 Nuevo grupo</button>
            <button className="menu__item" type="button">⭐ Mensajes destacados</button>
            <button className="menu__item" type="button">☑️ Seleccionar chats</button>
            <button className="menu__item" type="button">✔️ Marcar todos como leídos</button>
            <hr className="menu__divider" />
            <button className="menu__item" type="button">🔒 Bloqueo de aplicación</button>
            <button
              className="menu__item"
              type="button"
              onClick={() => navigate("/login")}
            >
              ↪️ Cerrar sesión
            </button>
          </Menu>
        </div>
      </header>

      <SearchBar />
      <FilterTabs active={filter} onChange={setFilter} />
      <ContactList contacts={filtered} query={query} />
    </aside>
  );
}
