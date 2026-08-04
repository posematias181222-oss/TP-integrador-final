import { useState } from "react";
import { useContacts } from "../hooks/useContacts";

// Formulario para enviar un mensaje.
export default function MessageForm({ contactId }) {
  const [text, setText] = useState("");
  const { sendMessage } = useContacts();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(contactId, text);
    setText("");
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <label htmlFor="message-input" className="visually-hidden">
        Escribí un mensaje
      </label>
      <input
        id="message-input"
        type="text"
        placeholder="Escribí un mensaje"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoComplete="off"
      />
      <button type="submit" aria-label="Enviar mensaje" disabled={!text.trim()}>
        Enviar
      </button>
    </form>
  );
}
