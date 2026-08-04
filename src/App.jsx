import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { ContactContextProvider } from "./Context/ContactContext";
import Layout from "./Components/Layout";
import HomeScreen from "./Screens/HomeScreen";
import ContactChatScreen from "./Screens/ContactChatScreen";
import LoginScreen from "./Screens/LoginScreen";

function App() {
  return (
    <ThemeContextProvider>
      <div>
        <Routes>
          <Route element={<ContactContextProvider />}>
            <Route element={<Layout />}>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/contact/:contact_id" element={<ContactChatScreen />} />
            </Route>
          </Route>

          <Route path="/login" element={<LoginScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
