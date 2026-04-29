import { useState } from "react";

function ContactModal({ show, close }) {

  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      top:0,
      left:0,
      width:"100%",
      height:"100%",
      background:"rgba(0,0,0,0.5)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      zIndex:"2000"
    }}>

      <div style={{
        background:"white",
        padding:"30px",
        width:"400px",
        borderRadius:"6px"
      }}>

        <h2 style={{marginBottom:"20px"}}>Reach Us</h2>

        <input
          type="text"
          placeholder="Enter your Full name"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Enter your number"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Enter your Email"
          style={inputStyle}
        />

        <textarea
          placeholder="Type your message here..."
          style={{...inputStyle,height:"100px"}}
        />

        <button style={submitBtn}>Send Message</button>

        <button
          onClick={close}
          style={{
            marginTop:"10px",
            background:"transparent",
            border:"none",
            cursor:"pointer"
          }}
        >
          Close
        </button>

      </div>

    </div>
  );
}

const inputStyle = {
  width:"100%",
  padding:"10px",
  marginBottom:"12px",
  border:"1px solid #ccc",
  borderRadius:"4px"
}

const submitBtn = {
  width:"100%",
  padding:"10px",
  background:"#0b2d5c",
  color:"white",
  border:"none",
  borderRadius:"4px",
  cursor:"pointer"
}

export default ContactModal;