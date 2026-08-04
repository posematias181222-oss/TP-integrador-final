import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

// Dos paneles: en mobile se muestra la lista o el chat según la URL.
export default function Layout() {
  const location = useLocation();
  const inChat = location.pathname.startsWith("/contact/");

  return (
    <div className={"layout" + (inChat ? " layout--chat" : "")}>
      <Sidebar />
      <main className="layout__main">
        <Outlet />
      </main>
    </div>
  );
}
