//importamos mapContainer con titleLayer para mostrar el mapa
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//importamos el leaflet css
import "leaflet/dist/leaflet.css";
//importamos leaflet para crear nuestro icono personalizado
import L from "leaflet";
//impotamos la data de cobertura para mostrar los puntos en el mapa
import { puntosCobertura } from "../../data/cobertura.js";

//creremos nuetsro icono de mascota
const iconMascota = new L.Icon({
  //definimos la url de la imagen del icono
  iconUrl: "/images/mapa-icono/personaje-principal.png",
  //definimos el tamaño del icono
  iconSize: [70, 70],
  //definimos el anclaje del icono
  iconAnchor: [30, 40],
  //definimos el anclaje del popup
  popupAnchor: [0, -40],
  className: "icono-mascota-mapa",
});

//crearemos la funcion para mostrar el mapa
function CoverageMap() {
  return (
    <MapContainer className="mapa-grande" center={[21.1, -88.53]} zoom={11}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="&copy; OSM &copy; CARTO"
      />
      {puntosCobertura.map((punto, index) => (
        <Marker
          key={index}
          position={[punto.latitud, punto.longitud]}
          icon={iconMascota}
        >
          <Popup>
            <h3>{punto.nombre}</h3>
            Cobertura disponible en esta zona.
            <h3>Instalación disponible</h3>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

//exportamos el componente para usarlo en otras partes de la aplicacion
export default CoverageMap;
