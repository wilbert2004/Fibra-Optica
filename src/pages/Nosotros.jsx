import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ChatBot from "../components/ChatBot.jsx";
//importamos el componente de nosotros hero
import NosotrosHero from "../components/nosotros/NosotrosHero.jsx";
//importamos el componente de mision vision
import MisionVision from "../components/nosotros/MisionVision.jsx";

function Nosotros() {
  return (
    <>
      <Navbar />
      <NosotrosHero />
      <MisionVision />
      <Footer />
      <ChatBot />
    </>
  );
}

export default Nosotros;
