// Avatar con las iniciales del nombre sobre un color de fondo.
function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Avatar({ name, color, size = 48 }) {
  return (
    <span
      className="avatar"
      style={{ background: color, width: size, height: size, fontSize: size / 2.5 }}
      aria-hidden="true"
    >
      {getInitials(name)}
    </span>
  );
}
