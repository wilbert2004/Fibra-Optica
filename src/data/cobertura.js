export const puntosCobertura = [
  { nombre: "Tixbacab", latitud: 21.094526, longitud: -88.512036 },
  { nombre: "Cenotillo", latitud: 20.966923, longitud: -88.6054 },
  { nombre: "Tuzik", latitud: 21.11326, longitud: -88.472001 },
  { nombre: "X-Ualtez", latitud: 21.123508, longitud: -88.471984 },
  { nombre: "San francisco", latitud: 21.244607, longitud: -88.482914 },
  { nombre: "La Gran Lucha", latitud: 21.208016, longitud: -88.553982 },
];

//validamos que los punto de cobertura si hay a
if (puntosCobertura.length > 0) {
  console.log("Puntos de cobertura disponibles:");
  //recorremos el arreglo de puntos de cobertura
  puntosCobertura.forEach((punto) => {
    console.log(
      `- ${punto.nombre} (Latitud: ${punto.latitud}, Longitud: ${punto.longitud})`,
    );
  });
} else {
  console.log("No hay puntos de cobertura disponibles.");
}
