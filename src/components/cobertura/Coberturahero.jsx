//importamos el css de cobertura
import "../cobertura/cobertura.css";
//importamos el componente de mapa de cobertura
import CoverageMap from "./CoverageMap.jsx";

//crearemos la funcioon
function CoberturaHero() {
  return (
    <section className="seccion-cobertura-hero">
      <div className="forma-cobertura-superior"></div>
      <div className="forma-cobertura-inferior"></div>

      <div className="contenido-cobertura-hero">
        <div className="texto-cobertura-hero">
          <span className="etiqueta-seccion">
            <span></span>
            Cobertura
          </span>
          <h1 className="titulo-principal">
            Conectamos comunidades con internet confiable
          </h1>

          <p className="descripcion-principal">
            Próximamente, estaremos expandiendo nuestra cobertura a nuevas áreas
            para llevar internet de fibra óptica a más comunidades. Mantente
            atento a nuestras actualizaciones para conocer las zonas
            disponibles.
          </p>
        </div>

        {/* aqui ira la parte de nuestro ubicacion */}
        <div className="mapa-cobertura-hero">
          <div className="encabezado-mapa-cobertura">
            <h3>Cobertura StarMy</h3>
            <span>Zonas disponibles</span>
          </div>

          <CoverageMap className="disenio-hero" />
        </div>
      </div>
      <div className="planeta-hero"></div>
    </section>
  );
}

export default CoberturaHero;
