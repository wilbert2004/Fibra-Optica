import "../assets/styles/navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="barra-navegacion">
      <Link to="/" className="logo-navbar" aria-label="Ir al inicio">
        <div className="contenedor-icono-logo">
          <img
            src="/images/hero/logo-starmy.png"
            alt="StarMy"
            className="logo-imagen-navbar"
          />
        </div>

        <div className="texto-logo-navbar">
          <h2>STARMY</h2>
          <span>Fibra óptica</span>
        </div>
      </Link>

      <button
        className="boton-menu-movil"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? <FaTimes /> : <FaBars />}
      </button>

      <nav
        className={
          menuAbierto ? "enlaces-navbar enlaces-activos" : "enlaces-navbar"
        }
      >
        <Link to="/">Inicio</Link>

        <Link to="/nosotros">Nosotros</Link>

        <Link to="/cobertura">Cobertura</Link>

        <Link to="/precios">Precios</Link>
      </nav>
    </header>
  );
}

export default Navbar;
