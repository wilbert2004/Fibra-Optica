// importamos el style del hero
import "../assets/styles/hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="seccion-hero" id="inicio">
      {/* Decoraciones del fondo hechas con CSS */}
      <div className="forma-decorativa forma-superior"></div>
      <div className="forma-decorativa forma-inferior"></div>
      <div className="orbita-planeta"></div>

      <div className="contenido-hero">
        {/* Parte izquierda */}
        <div className="bloque-texto-hero">
          <span className="etiqueta-seccion">
            <span></span>
            Fibra para tu comunidad
          </span>

          <h1 className="titulo-principal">
            Starmy Networks: internet veloz para tu mundo
          </h1>

          <p className="descripcion-principal">
            Conecta tu hogar o negocio con la red de <strong>StarMy</strong>.
            Más velocidad, más estabilidad, más tú.
          </p>

          <div className="acciones-hero">
            <a
              href="https://wa.me/529997709379?text=Hola%2C%20me%20interesa%20contratar%20un%20plan%20de%20internet%20de%20fibra%20%C3%B3ptica.%20%C2%BFMe%20pueden%20compartir%20informaci%C3%B3n%20sobre%20los%20paquetes%20disponibles%3F"
              target="_blank"
              rel="noreferrer"
              className="boton-hero"
            >
              Contratar ahora
            </a>

            <Link to="/precios" className="boton-secundario-hero">
              Ver paquetes
            </Link>
          </div>

          <div className="tarjetas-hero">
            <div className="tarjeta-mini-hero">
              <span>VELOCIDAD</span>
              <p>Fibra estable</p>
            </div>

            <div className="tarjeta-mini-hero">
              <span>SOPORTE</span>
              <p>Atención cercana</p>
            </div>

            <div className="tarjeta-mini-hero">
              <span>COBERTURA</span>
              <p>Zonas disponibles</p>
            </div>
          </div>
        </div>

        {/* Parte derecha */}
        <div className="bloque-visual-hero">
          <div className="tarjeta-flotante velocidad-flotante">
            <strong>50 Mbps</strong>
            <span>Velocidad real</span>
          </div>

          <div className="tarjeta-flotante uptime-flotante">
            <strong>99.9% uptime</strong>
            <span>Siempre conectado</span>
          </div>

          <div className="planeta-hero"></div>
          <div className="cohete-hero"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
