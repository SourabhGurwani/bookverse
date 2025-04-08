import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBookOpen, FaUserPlus, FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      fontFamily: "'Cinzel', serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      background: "linear-gradient(135deg, #f5f7fa 0%, #f0f2f5 100%)",
      overflow: "hidden",
      color: "#1a1a1a",
    },
    backgroundText: {
      position: "absolute",
      fontSize: "clamp(8rem, 20vw, 18rem)",
      fontWeight: "bold",
      opacity: 0.03,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      userSelect: "none",
    },
    content: {
      zIndex: 10,
      maxWidth: "min(90vw, 1200px)",
      padding: "2rem",
      textAlign: "center",
    },
    heading: {
      fontSize: "clamp(2.5rem, 5vw, 5rem)",
      fontWeight: "700",
      marginBottom: "1.5rem",
      lineHeight: "1.2",
      textShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    accentText: {
      background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      position: "relative",
      display: "inline-block",
    },
    accentUnderline: {
      position: "absolute",
      bottom: "-5px",
      left: "0",
      width: "100%",
      height: "3px",
      background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
      transformOrigin: "left center",
    },
    subHeading: {
      fontSize: "clamp(1rem, 2vw, 1.5rem)",
      color: "#555",
      marginBottom: "3rem",
      maxWidth: "800px",
      marginLeft: "auto",
      marginRight: "auto",
      lineHeight: "1.6",
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
      flexWrap: "wrap",
    },
    button: {
      padding: "clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)",
      fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
      borderRadius: "50px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      border: "none",
      display: "flex",
      alignItems: "center",
      gap: "0.8rem",
      position: "relative",
      overflow: "hidden",
      fontWeight: "600",
      letterSpacing: "0.5px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    },
    primaryBtn: {
      background: "linear-gradient(45deg, #6d28d9, #8b5cf6)",
      color: "#fff",
    },
    secondaryBtn: {
      backgroundColor: "transparent",
      color: "#6d28d9",
      border: "2px solid #6d28d9",
    },
    bookImage: {
      position: "absolute",
      bottom: "0",
      right: "5%",
      height: "70%",
      zIndex: "1",
      filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.2))",
    },
    floatingPages: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      overflow: "hidden",
      zIndex: "0",
    },
    page: {
      position: "absolute",
      background: "rgba(255,255,255,0.7)",
      borderRadius: "2px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    floating: `
      @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(2deg); }
        100% { transform: translateY(0px) rotate(0deg); }
      }
      @keyframes floatReverse {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(-2deg); }
        100% { transform: translateY(0px) rotate(0deg); }
      }
      @keyframes wave {
        0% { transform: translateX(0) translateY(0); }
        50% { transform: translateX(5px) translateY(-3px); }
        100% { transform: translateX(0) translateY(0); }
      }
      @keyframes buttonHover {
        0% { transform: translateY(0); }
        50% { transform: translateY(-3px); }
        100% { transform: translateY(0); }
      }
    `,
  };

  // Generate random floating pages
  const floatingPages = Array.from({ length: 15 }).map((_, i) => {
    const size = Math.random() * 100 + 50;
    return (
      <motion.div
        key={i}
        style={{
          ...styles.page,
          width: `${size}px`,
          height: `${size * 1.4}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.3,
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, Math.random() * 20 - 10, 0],
          rotate: [0, Math.random() * 10 - 5, 0],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    );
  });

  return (
    <>
      <style>
        {styles.floating}
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:wght@400;600;700&display=swap');
      </style>

      <section style={styles.container}>
        <div style={styles.floatingPages}>{floatingPages}</div>
        
        <motion.div 
          style={styles.backgroundText}
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          BookVerse
        </motion.div>

        <motion.div
          style={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <motion.h1 
            style={styles.heading}
            animate={{ 
              letterSpacing: ["0px", "2px", "0px"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Discover Literary{" "}
            <span style={styles.accentText}>
              Masterpieces
              <motion.span 
                style={styles.accentUnderline}
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            style={styles.subHeading}
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Immerse yourself in BookVerse - where timeless stories meet modern reading experiences.
            Curated collections for the discerning bibliophile.
          </motion.p>
          
          <div style={styles.buttonGroup}>
            <motion.button
              style={{ ...styles.button, ...styles.primaryBtn }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -3, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaBookOpen /> Explore Books
            </motion.button>
            
            <motion.button
              style={{ ...styles.button, ...styles.secondaryBtn }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(109, 40, 217, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Join BookVerse <FaUserPlus />
            </motion.button>
          </div>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Premium Book Collection"
          style={styles.bookImage}
          initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
          animate={{ 
            scale: 1, 
            opacity: 1, 
            rotate: 5,
            y: [0, -20, 0],
          }}
          transition={{ 
            scale: { duration: 1, delay: 0.5 },
            opacity: { duration: 1, delay: 0.5 },
            rotate: { duration: 8, repeat: Infinity, repeatType: "reverse" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <motion.div 
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "150px",
            background: "linear-gradient(0deg, rgba(0,0,0,0.03) 0%, transparent 100%)",
            zIndex: 2
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </section>
    </>
  );
}