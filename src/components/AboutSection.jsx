function AboutSection() {
  return (
    <section
      style={{
        padding: "80px 80px",
        display: "flex",
        alignItems: "center",
        gap: "60px",
        fontFamily: "Poppins, sans-serif"
      }}
    >
      {/* Left Image */}

      <div style={{ flex: 1 }}>
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
          alt="about"
          style={{
            width: "100%",
            borderRadius: "6px"
          }}
        />
      </div>

      {/* Right Content */}

      <div style={{ flex: 1 }}>

        <h2
          style={{
            fontSize: "32px",
            color: "#0b2d5c",
            marginBottom: "20px",
            fontWeight: "600"
          }}
        >
          About Our Company
        </h2>

        <p
          style={{
            fontSize: "15px",
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "15px"
          }}
        >
          We provide professional ISO certification services for
          organizations across various industries. Our team ensures
          that companies achieve international standards efficiently
          and improve their business processes.
        </p>

        <p
          style={{
            fontSize: "15px",
            color: "#555",
            lineHeight: "1.8"
          }}
        >
          With experienced auditors and consultants, we support
          businesses in achieving compliance, improving quality
          management systems, and enhancing global credibility.
        </p>

      </div>
    </section>
  );
}

export default AboutSection;