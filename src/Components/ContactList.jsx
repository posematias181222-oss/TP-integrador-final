import ChatListItem from "./ChatListItem";

export default function ContactList({ contacts, query }) {
  if (contacts.length === 0) {
    return (
      <p className="chat-list__empty">
        No se encontraron chats para “{query}”.
      </p>
    );
  }

  return (
    <nav aria-label="Lista de chats">
      <ul className="chat-list">
        {contacts.map((contact) => (
          <ChatListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </nav>
  );
}
