export const planesPorZona = [
  {
    //asignamos cada municipio que tendra dierentes coberturas
    municipio: ["Tixbacab"],
    planes: [
      { velocidad: "20 mbs", precio: "$350" },
      { velocidad: "30 mbs", precio: "$450" },
      { velocidad: "50 mbs", precio: "$550" },
    ],
  },
  {
    municipio: ["Tuzik"],
    planes: [
      { velocidad: "20 mbs", precio: "$350" },
      { velocidad: "30 mbs", precio: "$450" },
      { velocidad: "50 mbs", precio: "$550" },
    ],
  },
  {
    municipio: ["X-Ualtez"],
    planes: [
      { velocidad: "20 mbs", precio: "$350" },
      { velocidad: "30 mbs", precio: "$450" },
      { velocidad: "50 mbs", precio: "$550" },
    ],
  },
  {
    municipio: ["La Gran Lucha"],
    planes: [
      { velocidad: "20 mbs", precio: "$350" },
      { velocidad: "30 mbs", precio: "$450" },
      { velocidad: "50 mbs", precio: "$550" },
    ],
  },
  {
    municipio: ["San Francisco"],
    planes: [
      { velocidad: "10 mbs", precio: "$230" },
      { velocidad: "20 mbs", precio: "$350" },
      { velocidad: "30 mbs", precio: "$450" },
    ],
  },
  {
    municipio: ["Cenotillo"],
    planes: [
      { velocidad: "20 mbs", precio: "$350" },
      { velocidad: "30 mbs", precio: "$500" },
      { velocidad: "50 mbs", precio: "$790" },
    ],
  },
];

//validamos que tenag todo los datos necesarios para mostrar los planes
if (planesPorZona.length > 0) {
  console.log("Planes por zona cargados correctamente");
} else {
  console.error("Error al cargar los planes por zona");
}
