//importamso la funcion de planes de nuestro js
import { planesPorZona } from "../../data/planes";
//manejqamos el estado para mostrar los planes
import { useState } from "react";
//importamos el css de precios
import "../precios/precio.css";

//crearemos la funcion de hero
function PrecioScreen() {
  //definimos un estadoll donde vamos a seleccionar el plan que queremos mostrar
  const [municipioSeleccionado, setMunicipioSeleccionado] =
    useState("Tixbacab");

  //usaremops la propiedad find
  const Zonaseleccionada = planesPorZona.find((zona) =>
    zona.municipio.includes(municipioSeleccionado),
  );

  //return los datos
  return (
    <div className="contenedor-municipio">
      <div className="selector-municipio">
        <label>Selecciona tu municipio:</label>
        <select
          value={municipioSeleccionado}
          onChange={(e) => setMunicipioSeleccionado(e.target.value)}
        >
          {planesPorZona.map((zona) =>
            zona.municipio.map((municipio) => (
              <option key={municipio} value={municipio}>
                {municipio}
              </option>
            )),
          )}
        </select>
      </div>
      <div className="grid-planes">
        {Zonaseleccionada.planes.map((plan, index) => (
          <div className="tarjeta-plan" key={index}>
            <div className={`encabezado-plan color-plan-${index}`}>
              <h3>{plan.velocidad}</h3>
              <p>Fibra Óptica</p>
            </div>

            <div className="cuerpo-plan">
              <div className="precio-plan">
                <span>$</span>
                <strong>{plan.precio.replace("$", "")}</strong>
                <small>/mes</small>
              </div>
              <ul className="lista-plan">
                <li>Servicio de fibra óptica</li>
                <li>Velocidad de {plan.velocidad}</li>
                <li>Internet estable</li>
                <li>Instalación sujeta a cobertura</li>
              </ul>

              <a
                className={`boton-plan color-boton-${index}`}
                href={`https://wa.me/529997709379?text=Hola,%20quiero%20contratar%20el%20plan%20de%20${plan.velocidad}%20en%20${municipioSeleccionado}`}
                target="_blank"
                rel="noreferrer"
              >
                Contratar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//exportamos el componente para usarlo en otras partes de la aplicacion
export default PrecioScreen;
