import { Link } from "react-router-dom";
import Avatar from "./Avatar";

// Fila de la lista de chats. Enlaza a /contact/:contact_id.
export default function ChatListItem({ contact }) {
  const lastMessage = contact.messages[contact.messages.length - 1];

  return (
    <li>
      <Link to={`/contact/${contact.id}`} className="chat-item">
        <Avatar name={contact.name} color={contact.color} />
        <div className="chat-item__body">
          <div className="chat-item__top">
            <span className="chat-item__name">{contact.name}</span>
            <span className="chat-item__time">{lastMessage?.time}</span>
          </div>
          <div className="chat-item__bottom">
            <p className="chat-item__preview">
              {lastMessage?.fromMe && <span className="chat-item__check">✓ </span>}
              {lastMessage ? lastMessage.text : "Sin mensajes"}
            </p>
            {contact.unread > 0 && (
              <span className="chat-item__badge">{contact.unread}</span>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}
