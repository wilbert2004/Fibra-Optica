import "../nosotros/nosotros.css";

function MisionVision() {
  return (
    <section className="seccion-mision-vision">
      <div className="contenedor-mision-vision">
        <div className="encabezado-mision-vision">
          <span className="etiqueta-nosotros">
            <span></span>
            Nuestra esencia
          </span>

          <h2>Misión y visión</h2>
          <p>
            Nuestro compromiso es ofrecer una conexión confiable, cercana y
            pensada para las necesidades de cada comunidad.
          </p>
        </div>

        <div className="tarjetas-mision-vision">
          <div className="tarjeta-mision-vision">
            <h3>Misión</h3>
            <p>
              Brindar internet de fibra óptica rápido, estable y accesible para
              hogares y negocios, impulsando la comunicación, educación y
              crecimiento de nuestros clientes.
            </p>
          </div>

          <div className="tarjeta-mision-vision">
            <h3>Visión</h3>
            <p>
              Ser una empresa reconocida por su calidad de conexión, atención
              cercana e innovación en servicios de internet, ampliando nuestra
              cobertura de forma responsable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MisionVision;
