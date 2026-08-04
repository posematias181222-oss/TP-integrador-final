import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Login simulado: valida usuario y contraseña y va al home.
export default function LoginScreen() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.trim() || !password.trim()) {
      setError("Completá usuario y contraseña.");
      return;
    }
    navigate("/home");
  };

  return (
    <div className="login-screen">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-form__title">Iniciar sesión</h1>

        <div className="field">
          <label htmlFor="user">Usuario</label>
          <input
            id="user"
            type="text"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
              setError("");
            }}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            required
          />
        </div>

        {error && (
          <p className="login-form__error" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="login-form__submit">
          Ingresar
        </button>

        <Link to="/" className="login-form__link">
          Volver a los chats
        </Link>
      </form>
    </div>
  );
}
