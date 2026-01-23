import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "./data/products";

import {
  FaMobileAlt,
  FaBook,
  FaHome,
  FaHeartbeat,
  FaSpa,
  FaPuzzlePiece,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

/* ================= ICON MAP ================= */
const categoryIcons = {
  electronics: <FaMobileAlt size={40} />,
  beauty: <FaSpa size={40} />,
  books: <FaBook size={40} />,
  "home-kitchen": <FaHome size={40} />,
  toys: <FaPuzzlePiece size={40} />,
  fitness: <FaHeartbeat size={40} />,
};

function Home() {
  const navigate = useNavigate();

  /* ================= SLIDER ================= */
  const slides = [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div>
      {/* ================= HERO SLIDER ================= */}
      <div
        style={{
          position: "relative",
          height: "320px",
          overflow: "hidden",
        }}
      >
        <img
          src={slides[current]}
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        />

        {/* CENTER TEXT */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "38px", marginBottom: "10px" }}>
            SAGORA
          </h1>
          <p style={{ fontSize: "16px", opacity: 0.9 }}>
            Everything you need, in one place
          </p>

          <button
            className="btn-primary"
            style={{ marginTop: "16px" }}
            onClick={() => navigate("/category/electronics")}
          >
            Explore Now
          </button>
        </div>

        {/* ARROWS */}
        <button
          onClick={prevSlide}
          style={arrowStyle("left")}
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          style={arrowStyle("right")}
        >
          <FaChevronRight />
        </button>

        {/* DOTS */}
        <div
          style={{
            position: "absolute",
            bottom: "14px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
          }}
        >
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: current === i ? "#febd69" : "#fff",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>

      {/* ================= CATEGORIES ================= */}
      <div style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Shop by Category</h2>

        <div
          className="product-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
            marginTop: "40px",
            maxWidth: "1100px",
            margin: "auto",
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="product-card"
              onClick={() => navigate(`/category/${cat.slug}`)}
              style={{
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  color: "#febd69",
                  marginBottom: "12px",
                }}
              >
                {categoryIcons[cat.slug]}
              </div>

              <h3>{cat.name}</h3>
              <p style={{ opacity: 0.7 }}>Explore products</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= ARROW STYLE ================= */
const arrowStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: "14px",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.6)",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
});

export default Home;
