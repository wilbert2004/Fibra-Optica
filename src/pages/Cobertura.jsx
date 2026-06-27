//importamos el navbar
import Navbar from "../components/Navbar.jsx";
//importamos el footer
import Footer from "../components/Footer.jsx";
//importamos el chatbot
import ChatBot from "../components/ChatBot.jsx";
//importamos el componente de cobertura hero
import CoberturaHero from "../components/cobertura/Coberturahero.jsx";

function Cobertura() {
  return (
    <>
      <Navbar />
      <CoberturaHero />
      <Footer />
      <ChatBot />
    </>
  );
}

export default Cobertura;
