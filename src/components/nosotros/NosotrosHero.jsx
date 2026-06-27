// importamos el diseño de nosotros css
import "../nosotros/nosotros.css";

function NosotrosHero() {
  return (
    <section className="seccion-nosotros-hero">
      <div className="forma-nosotros-superior"></div>
      <div className="forma-nosotros-inferior"></div>

      <div className="contenido-nosotros-hero">
        <div className="texto-nosotros-hero">
          <span className="etiqueta-seccion">
            <span></span>
            Sobre StarMy
          </span>

          <h1 className="titulo-principal">
            Conectamos comunidades con internet confiable
          </h1>

          <p className="descripcion-principal">
            Somos una empresa enfocada en brindar internet de fibra óptica para
            hogares y negocios, con atención cercana, soporte local y conexión
            estable.
          </p>
        </div>

        <div className="tarjeta-nosotros-hero">
          <h3>Fibra óptica para tu comunidad</h3>
          <p>
            Más velocidad, más estabilidad y soporte cercano para mantenerte
            conectado todos los días.
          </p>

          <div className="mini-datos-nosotros">
            <div>
              <strong>Soporte</strong>
              <span>Atención cercana</span>
            </div>

            <div>
              <strong>Cobertura</strong>
              <span>Zonas disponibles</span>
            </div>
          </div>
        </div>
      </div>

      <div className="planeta-hero"></div>
    </section>
  );
}

export default NosotrosHero;
