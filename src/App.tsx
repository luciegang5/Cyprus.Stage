import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Form from "./pages/Form";
import FormSimple from "./pages/FormSimple";
import MyForm from "./pages/MyForm";
import Users from "./pages/Users";
import UsersAxios from "./pages/UsersAxios";
import AddUser from "./pages/AddUser";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Notes from "./pages/Notes";
import Crud from "./pages/Crud";

const links = [
  ["/", "Accueil"],
  ["/about", "À propos"],
  ["/user/5", "Utilisateur 5"],
  ["/form", "Formulaire"],
  ["/form-simple", "FormData"],
  ["/my-form", "Hook Form"],
  ["/users", "Fetch"],
  ["/users-axios", "Axios"],
  ["/add-user", "POST"],
  ["/step1", "Storage 1"],
  ["/step2", "Storage 2"],
  ["/notes", "Notes"],
  ["/crud", "CRUD"],
];

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 800, margin: "0 auto", padding: 16 }}>
      <h2>Gino Bawart</h2>
      <nav style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form-simple" element={<FormSimple />} />
        <Route path="/my-form" element={<MyForm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users-axios" element={<UsersAxios />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="*" element={<h1>Page introuvable</h1>} />
      </Routes>
    </div>
  );
}
