import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom"; // Importe o Link
import "./style.css";
import Logo from "../../assets/icons/logo.png";

const NavigationBar = () => {
  return (
    <nav className="nav-container">
      {/* Logo que leva para a Home */}
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/videos">Todos os Vídeos</Link>
        </li>
        <li>
          <Link to="/">Área Membros</Link>
        </li>
      </ul>

      {/* Busca */}
      <div className="search-container">
        <input type="text" placeholder="Buscar..." className="search-input" />
        <Search className="search-icon" />
      </div>
    </nav>
  );
};

export default NavigationBar;