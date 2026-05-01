import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Header() {
  return (
    <div
      style={{
        background: "#0b2d5c",
        color: "white",
        padding: "14px 80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "15px",
        fontWeight: "600",
        fontFamily: "Poppins, sans-serif"
      }}
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/919841423730"
        target="_blank"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "white",
          textDecoration: "none"
        }}
      >
        <FaWhatsapp color="#25D366" />
        <span>+91 9791541999</span>
      </a>

      {/* Phone */}
      <a
        href="tel:04426535631"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "white",
          textDecoration: "none"
        }}
      >
        <FaPhoneAlt />
        <span>0091545889993/ 00971504719298</span>
      </a>

      {/* Email */}
      <a
        href="mailto:info@agqrcertifications.com"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "white",
          textDecoration: "none"
        }}
      >
        <FaEnvelope />
        <span>internationaluniquecert@gmail.com</span>
      </a>
    </div>
  );
}

export default Header;