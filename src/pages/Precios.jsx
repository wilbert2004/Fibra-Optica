//importamos los footer
import Footer from "../components/Footer.jsx";
//impportamos los navbar
import Navbar from "../components/Navbar.jsx";
//importamos los precios
import PreciosHero from "../components/precios/PrecioHero.jsx";

//crearemos la funcion de precios
function Precios() {
  return (
    <>
      <Navbar />
      <PreciosHero />
      <Footer />
    </>
  );
}

//exportamsos el componente de precios
export default Precios;
