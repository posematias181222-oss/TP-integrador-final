// Burbuja de un mensaje. Cambia de estilo si es propio o recibido.
export default function MessageBubble({ message }) {
  const className =
    "bubble " + (message.fromMe ? "bubble--mine" : "bubble--theirs");

  return (
    <div className={className}>
      <p className="bubble__text">{message.text}</p>
      <span className="bubble__time">{message.time}</span>
    </div>
  );
}
