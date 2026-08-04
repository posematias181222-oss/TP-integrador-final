import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { initialContacts } from "../data/contacts";

// Estado global de los chats. Se usa como ruta con <Outlet/> para compartirlo.
export const ContactContext = createContext(null);

export function ContactContextProvider() {
  const [contacts, setContacts] = useState(initialContacts);

  const getContact = (id) => contacts.find((c) => c.id === id);

  const sendMessage = (contactId, text) => {
    const clean = text.trim();
    if (!clean) return;

    const time = new Date().toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === contactId
          ? {
              ...contact,
              messages: [
                ...contact.messages,
                { id: `m${Date.now()}`, text: clean, fromMe: true, time },
              ],
            }
          : contact
      )
    );
  };

  return (
    <ContactContext.Provider value={{ contacts, getContact, sendMessage }}>
      <Outlet />
    </ContactContext.Provider>
  );
}
