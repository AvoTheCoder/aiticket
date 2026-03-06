import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SupportPage from "./components/SupportPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<SupportPage />} />
    </Routes>
  );
}