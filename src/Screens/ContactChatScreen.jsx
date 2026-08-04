import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useContacts } from "../hooks/useContacts";
import Avatar from "../Components/Avatar";
import MessageBubble from "../Components/MessageBubble";
import MessageForm from "../Components/MessageForm";

export default function ContactChatScreen() {
  const { contact_id } = useParams();
  const { getContact } = useContacts();
  const navigate = useNavigate();
  const contact = getContact(contact_id);

  // Con "Esc" vuelvo a la lista.
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") navigate("/");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  if (!contact) {
    return (
      <div className="welcome">
        <div className="welcome__box">
          <h2 className="welcome__title">Contacto no encontrado</h2>
          <p className="welcome__text">El chat que buscás no existe.</p>
          <Link to="/" className="welcome__link">Volver a la lista</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="chat">
      <header className="topbar topbar--chat">
        <Link to="/" className="topbar__back" aria-label="Volver a la lista">
          ←
        </Link>
        <Avatar name={contact.name} color={contact.color} size={40} />
        <div className="chat-info">
          <span className="chat-info__name">{contact.name}</span>
          <span className="chat-info__status">{contact.status}</span>
        </div>
      </header>

      <div className="messages">
        {contact.messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      <MessageForm contactId={contact.id} />
    </div>
  );
}
