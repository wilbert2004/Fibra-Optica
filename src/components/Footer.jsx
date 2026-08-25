import "../assets/styles/footer.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
//IMPORTAMOS LOS LINKS DE REACT ROUTER PARA HACER LOS ENLACES DE NAVEGACION
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer-principal">
      <div className="contenedor-footer">
        {/* Marca */}
        <div className="columna-footer">
          <h2 className="logo-footer">STARMY</h2>
          <p className="descripcion-footer">
            Internet de fibra óptica para hogares y negocios. Conectando
            comunidades con velocidad y estabilidad.
          </p>
          {/*abajo vamos a agregar el logo de la empresa */}
          <img
            className="logo-imagen-footer"
            src="/images/hero/logo-starmy.png"
            alt="Logo de StarMy"
          />
        </div>

        {/* Navegación */}
        <div className="columna-footer">
          <h3>Navegación</h3>

          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/cobertura">Cobertura</Link>
          <Link to="/precios">Precios</Link>
        </div>

        {/* Contacto */}
        <div className="columna-footer">
          <h3>Contacto</h3>

          <p>
            <FaPhoneAlt />
            999 770 9379
          </p>

          <p>
            <FaMapMarkerAlt />
            Yucatán, México
          </p>

          <div className="redes-footer">
            <a href="https://www.instagram.com/starmynetworks?igsh=MXRiMGU2aXByMzloaQ%3D%3D&utm_source=qr_code">
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/529997709379"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a href="mailto:Starmynetworks@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright-footer">
        © 2026 StarMy. Todos los derechos reservados.
      </div>
    </footer>
  );
}

//exportamos el componente de footer
export default Footer;
