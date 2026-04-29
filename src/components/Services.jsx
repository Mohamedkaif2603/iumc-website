import "../assets/css/services.css";

function Services() {
  const data = [
    "ISO 9001 Certification",
    "ISO 14001 Certification",
    "ISO 45001 Certification",
    "ISO 22000 Certification",
    "ISO 27001 Certification",
    "ISO 13485 Certification"
  ];

  return (
    <section className="services">
      <h2>Our Certifications</h2>

      <div className="services-grid">
        {data.map((item, index) => (
          <div className="service-card" key={index}>
            <h3>{item}</h3>
            <p>Professional certification services for your business.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;