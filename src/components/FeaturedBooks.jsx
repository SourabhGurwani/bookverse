import { motion } from "framer-motion";
import { useState } from "react";
import { FiShoppingCart, FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FeaturedBooks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const books = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      description:
        "Between life and death there is a library, and within that library, the shelves go on forever...",
      price: 24.99,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      description:
        "A practical guide to breaking bad habits and building good ones, showing how tiny changes can lead to remarkable results.",
      price: 19.99,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1588776814546-ec7ee4bd4947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      description:
        "A fable about following your dreams, this timeless story inspires readers to listen to their hearts.",
      price: 14.99,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const nextBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const prevBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length);
  };

  return (
    <section
      style={{
        width: "100%",
        padding: "5rem 2rem",
        background: "linear-gradient(135deg, #0a0f1a 0%, #1a2a4a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              background: "rgba(212, 175, 55, 0.1)",
              width: "80px",
              height: "120px",
              borderRadius: "2px",
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
            }}
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 0.3, 0],
              rotate: `${Math.random() * 30 - 15}deg`,
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#f4e5c2",
              fontFamily: "'Cinzel', serif",
              textShadow: "0 2px 10px rgba(212, 175, 55, 0.5)",
              margin: 0,
            }}
          >
            ✨ Featured Books ✨
          </h2>
          <div style={{ display: "flex", gap: "1rem" }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevBook}
              style={{
                background: "rgba(212, 175, 55, 0.2)",
                border: "1px solid #d4af37",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f4e5c2",
                cursor: "pointer",
              }}
            >
              <FiChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextBook}
              style={{
                background: "rgba(212, 175, 55, 0.2)",
                border: "1px solid #d4af37",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f4e5c2",
                cursor: "pointer",
              }}
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredCard(book.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: "linear-gradient(180deg, #1a2a4a 0%, #0a0f1a 100%)",
                borderRadius: "16px",
                padding: "1.5rem",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                transform:
                  hoveredCard === book.id
                    ? "perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.03)"
                    : "none",
                transition: "all 0.5s ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "linear-gradient(135deg, #d4af37, #f4e5c2)",
                  color: "#1a2a4a",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  boxShadow: "0 2px 10px rgba(212, 175, 55, 0.5)",
                }}
              >
                Bestseller
              </div>

              <div
                style={{
                  width: "100%",
                  height: "300px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  marginBottom: "1.5rem",
                }}
              >
                <motion.img
                  src={book.image}
                  alt={book.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    transform: hoveredCard === book.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>

              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.5rem",
                  color: "#f4e5c2",
                  marginBottom: "0.5rem",
                }}
              >
                {book.title}
              </h3>
              <p style={{ color: "#d4af37", fontStyle: "italic", marginBottom: "0.5rem" }}>
                by {book.author}
              </p>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    size={16}
                    color={i < Math.floor(book.rating) ? "#d4af37" : "#4a5568"}
                    fill={i < Math.floor(book.rating) ? "#d4af37" : "none"}
                  />
                ))}
                <span style={{ color: "#ccc", fontSize: "0.8rem", marginLeft: "0.5rem" }}>
                  {book.rating.toFixed(1)}
                </span>
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.95rem",
                  marginBottom: "1.5rem",
                  lineHeight: 1.6,
                }}
              >
                {book.description}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#f4e5c2", fontSize: "1.1rem", fontWeight: "bold" }}>
                  ₹{book.price}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "linear-gradient(90deg, #d4af37, #f4e5c2)",
                    color: "#1a2a4a",
                    padding: "0.5rem 1.2rem",
                    borderRadius: "30px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 15px rgba(212, 175, 55, 0.4)",
                    gap: "0.5rem",
                  }}
                >
                  <FiShoppingCart size={18} />
                  Buy Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedBooks;