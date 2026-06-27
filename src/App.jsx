import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Nosotros from "./pages/Nosotros.jsx";
//improtamos el page de cobnertura
import Cobertura from "./pages/Cobertura.jsx";
//importamos el page de precios
import Precios from "./pages/Precios.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cobertura" element={<Cobertura />} />
        <Route path="/precios" element={<Precios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
