function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        background: "#f5f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "700px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            color: "#0b2d5c",
            marginBottom: "20px",
            fontSize: "40px"
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            color: "#555",
            fontSize: "18px",
            marginBottom: "30px",
            lineHeight: "30px"
          }}
        >
          Feel free to reach out to us for certification services
          and business consultation.
        </p>

        <div
          style={{
            background: "#f5f7fb",
            padding: "25px",
            borderRadius: "10px"
          }}
        >
          <h2
            style={{
              color: "#0b2d5c",
              marginBottom: "15px"
            }}
          >
            Our Address
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: "#444",
              lineHeight: "30px"
            }}
          >
            No.9 Starbucks Building, <br />
            5th Floor, Hamdan Street, <br />
            Abu Dhabi, UAE.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;