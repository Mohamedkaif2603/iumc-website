import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const serviceContent = {
  trademark: {
    title: "Trademark Registration in India",
    desc: "Trademark registration protects your brand identity legally.",
  },
  patent: {
    title: "Patent Registration",
    desc: "Protect your inventions and innovations legally.",
  },
  copyright: {
    title: "Copyright Registration",
    desc: "Protect your original creative works.",
  },
  design: {
    title: "Design Registration",
    desc: "Secure your product design legally.",
  },
  "ip-enforcement": {
    title: "IP Enforcement",
    desc: "Protect your IP rights from misuse.",
  },
  "ip-audit": {
    title: "IP Audit",
    desc: "Analyze your intellectual property assets.",
  },
  "business-contracts": {
    title: "Business Contracts",
    desc: "Legal agreements for business operations.",
  },
  "company-law": {
    title: "Company Law",
    desc: "Company compliance and advisory.",
  },
  "startup-services": {
    title: "Startup Services",
    desc: "Legal support for startups.",
  },
  "property-law": {
    title: "Property Law",
    desc: "Legal advisory for property matters.",
  },
  "debt-recovery": {
    title: "Debt Recovery",
    desc: "Recover pending payments legally.",
  },
};

function ServicePage() {
  const { service } = useParams();
  const data = serviceContent[service];

  if (!data) return <h1>Service Not Found</h1>;

  return (
    <>
      <Navbar />

      <div style={{ padding: "60px 10%" }}>
        <h1 style={{ color: "#e85d04" }}>{data.title}</h1>
        <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
          {data.desc}
        </p>

        <h2 style={{ marginTop: "40px" }}>What We Do</h2>
        <p>We provide professional services with expert guidance.</p>

        <h2>Who We Do It For</h2>
        <p>Businesses, startups and individuals.</p>

        <h2>What We Deliver</h2>
        <p>Complete legal and professional solutions.</p>
      </div>
    </>
  );
}

export default ServicePage;