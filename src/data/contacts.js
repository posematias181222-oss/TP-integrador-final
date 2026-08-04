// Contactos de ejemplo. favorite / isGroup / unread se usan en los filtros.
export const initialContacts = [
  {
    id: "1",
    name: "Juan Pérez",
    color: "#e05a4f",
    status: "en línea",
    favorite: true,
    isGroup: false,
    unread: 0,
    messages: [
      { id: "m1", text: "¿Cómo va todo?", fromMe: false, time: "10:40" },
      { id: "m2", text: "Todo bien, vos como estás?", fromMe: true, time: "10:42" },
    ],
  },
  {
    id: "2",
    name: "María Gómez",
    color: "#3aa6e0",
    status: "últ. vez hoy 09:15",
    favorite: false,
    isGroup: false,
    unread: 2,
    messages: [
      { id: "m1", text: "Nos vemos mañana?", fromMe: false, time: "09:10" },
      { id: "m2", text: "Dale, nos vemos mañana!", fromMe: true, time: "09:15" },
    ],
  },
  {
    id: "3",
    name: "Carlos Ruiz",
    color: "#9b59b6",
    status: "en línea",
    favorite: true,
    isGroup: false,
    unread: 0,
    messages: [
      { id: "m1", text: "Gracias!", fromMe: false, time: "20:28" },
      { id: "m2", text: "No, gracias a vos! De todas formas no sé por qué me das las gracias.", fromMe: true, time: "20:30" },
    ],
  },
  {
    id: "4",
    name: "Lucía Fernández",
    color: "#e08a2f",
    status: "últ. vez el martes",
    favorite: false,
    isGroup: false,
    unread: 1,
    messages: [
      { id: "m1", text: "Dale, cualquier cosa aviso", fromMe: false, time: "18:00" },
      { id: "m2", text: "bueno dale!", fromMe: true, time: "18:02" },
    ],
  },
  {
    id: "5",
    name: "Grupo Facultad",
    color: "#1a8c3a",
    status: "Juan, María, Carlos, vos",
    favorite: false,
    isGroup: true,
    unread: 5,
    messages: [
      { id: "m1", text: "¿Entregaron el TP?", fromMe: false, time: "12:00" },
      { id: "m2", text: "yo no, vos?!", fromMe: true, time: "12:05" },
    ],
  },
];