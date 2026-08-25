//importamos el diseño del hero
import "../precios/precio.css";
//importamos plnaesscreen
import PlanesScreen from "./Planescreen.jsx";

//crearenos la  funcion de hero
function PrecioHero() {
  return (
    <section className="seccion-precio-hero">
      <div className="forma-precio-superior"></div>
      <div className="forma-precio-inferior"></div>
      <div className="contenido-precio-hero">
        <div className="texto-precio-hero">
          <span className="etiqueta-seccion">
            <span></span>
            Planes
          </span>
          <h1 className="titulo-principal">
            Planes de internet de fibra óptica para todos
          </h1>
          <p className="descripcion-principal">
            Descubre nuestros planes de internet de fibra óptica diseñados para
            satisfacer tus necesidades. Con velocidades ultrarrápidas y
            conexiones confiables, nuestros planes te brindan la mejor
            experiencia en línea. Elige el plan que se adapte a ti y disfruta de
            una conexión sin interrupciones.
          </p>
        </div>
      </div>
      <div className="Planes-ui-hero">
        <PlanesScreen />
      </div>
    </section>
  );
}

//exportqamos el componente de hero
export default PrecioHero;
