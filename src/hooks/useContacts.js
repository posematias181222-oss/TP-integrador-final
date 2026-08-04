import { useContext } from "react";
import { ContactContext } from "../Context/ContactContext";

// Hook para consumir el contexto de contactos de forma segura.
export function useContacts() {
  const ctx = useContext(ContactContext);
  if (!ctx) {
    throw new Error("useContacts debe usarse dentro de <ContactContextProvider>");
  }
  return ctx;
}
