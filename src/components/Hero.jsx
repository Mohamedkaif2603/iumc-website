import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Hero() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      title: "ISO Certification Services",
      subtitle: "Enhance your business credibility with global standards"
    },
    {
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      title: "Professional Business Certification",
      subtitle: "Trusted solutions for your certification needs"
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
      title: "Improve Your Business Standards",
      subtitle: "Take your business to the next level"
    }
  ];

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              height: "85vh",
              background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              padding: "0 20px"
            }}
          >
            <div style={{ maxWidth: "800px" }}>
              <h1
                style={{
                  fontSize: "48px",
                  marginBottom: "15px",
                  fontWeight: "700",
                  lineHeight: "1.2"
                }}
              >
                {slide.title}
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  marginBottom: "25px",
                  opacity: "0.9"
                }}
              >
                {slide.subtitle}
              </p>

              <button
                style={{
                  padding: "12px 28px",
                  border: "none",
                  background: "#0b2d5c",
                  color: "white",
                  fontSize: "16px",
                  cursor: "pointer",
                  borderRadius: "6px",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => (e.target.style.background = "#081f40")}
                onMouseOut={(e) => (e.target.style.background = "#0b2d5c")}
              >
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;