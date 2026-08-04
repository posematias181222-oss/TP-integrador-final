# TP Final Frontend — Clon de WhatsApp

App web estilo **WhatsApp** hecha en **React**, como trabajo final de Frontend.
Se puede ver la lista de chats, buscar y filtrar contactos, abrir una
conversación y mandar mensajes. Tiene tema claro/oscuro.

## Demo

- **Deploy (Vercel):** _pegar el link cuando esté desplegado_
- **Repositorio (GitHub):** _pegar el link del repo_

## Desafío elegido

Elegí el tema recomendado por la cátedra: rehacer la app de WhatsApp que vimos
en la cursada. Los datos son de ejemplo (mock) y los mensajes que se mandan se
guardan en memoria mientras la página está abierta.

## Qué hace

- Lista de chats con avatar, nombre, último mensaje, hora y globito de no leídos.
- Buscador que guarda el texto en la URL (`?q=...`), así se puede recargar.
- Filtros: Todos, No leídos, Favoritos y Grupos.
- Conversación con los mensajes y un formulario para escribir y enviar.
- Botón "+" para empezar un chat y menú "⋮" con opciones.
- Login con usuario y contraseña.
- Tema claro/oscuro (se recuerda con localStorage).
- Diseño responsivo: dos paneles en escritorio y uno solo en el celular.

## Tecnologías

- **React** (Hooks: `useState`, `useEffect`, `useContext`, `useRef`).
- **React Router** (`react-router-dom`): rutas, parámetro de ruta
  (`/contact/:contact_id`) y search params (`?q=`).
- **Vite** como entorno de desarrollo.
- CSS puro con variables, Grid y Flexbox.

## Requisitos del TP

- **React** ✔️
- **Estados** (`useState`) en los contextos, el buscador, los filtros, el login
  y el formulario de mensajes.
- **Contextos**: `ThemeContext` (tema) y `ContactContext` (chats).
- **React Router** con rutas anidadas.
- **Search params** en el buscador (`?q=`) y **parámetro de ruta** en el chat.
- **Formularios**: enviar mensaje y login.
- **Componentes** reutilizables en `src/Components`.
- **3 páginas**: inicio, conversación y login.
- **Responsiva** de 320px a 2000px.
- **Accesible**: los dos temas tienen buen contraste, los inputs tienen labels.

## Estructura

```
src/
├── Components/   # Layout, Sidebar, Menu, FilterTabs, Avatar, etc.
├── Context/      # ThemeContext y ContactContext
├── hooks/        # useTheme, useContacts, useLocalStorage
├── Screens/      # HomeScreen, ContactChatScreen, LoginScreen
├── data/         # contactos de ejemplo
├── App.jsx       # rutas
├── main.jsx      # punto de entrada
└── index.css     # estilos
```

## Rutas

| Ruta | Pantalla |
|------|----------|
| `/` y `/home` | lista de chats (con buscador `?q=` y filtros) |
| `/contact/:contact_id` | conversación |
| `/login` | login |

## Cómo correrlo

```bash
npm install
npm run dev
```

## Dificultades que me aparecieron

- Al principio la app no se veía responsiva: en escritorio quedaba una columna
  centrada con mucho espacio vacío al costado. Lo resolví con un layout de dos
  paneles usando CSS Grid y media queries (768px y 1200px).
- En el celular los botones de arriba se salían de la pantalla porque la lista
  se desbordaba. Se arregló usando `minmax(0, 1fr)` y `min-width: 0` para que los
  textos se recorten con "…" en vez de estirar todo.
- Al desplegar en Vercel, si recargaba una ruta como `/contact/1` daba error 404.
  Se soluciona con un `vercel.json` que manda todas las rutas a `index.html`.
