import "../assets/styles/chatbot.css";
import { FaWhatsapp } from "react-icons/fa";

function ChatBot() {
  return (
    <div className="chatbot-starmy">
      <div className="mensaje-chatbot">
        <strong>Hola</strong>
        <span>¿Necesitas ayuda?</span>
      </div>

      <a
        href="https://wa.me/529903406287"
        target="_blank"
        rel="noreferrer"
        className="boton-chatbot"
      >
        <img
          src="/images/hero/chatbot.png"
          alt="Asistente StarMy"
          className="robot-chatbot"
        />

        <div className="icono-whatsapp-chatbot">
          <FaWhatsapp />
        </div>
      </a>
    </div>
  );
}

export default ChatBot;
