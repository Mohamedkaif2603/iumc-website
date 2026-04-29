import { FaWhatsapp } from "react-icons/fa";

function WhatsApp() {
  return (
    <a
      href="https://wa.me/919841423730"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "65px",
        height: "65px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        zIndex: "999999",
        boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
        cursor: "pointer",
        transition: "0.3s"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsApp;