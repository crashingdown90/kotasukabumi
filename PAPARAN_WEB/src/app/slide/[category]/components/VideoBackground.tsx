"use client";

import React from "react";
import { motion } from "framer-motion";
import { DataParticles } from "./HUDComponents";
import { PRIMARY } from "./Constants";

export default function VideoBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", background: "#F8FAFC" }}>
      {/* Mesh Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.45, 0.3],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "70%",
          height: "70%",
          background: "radial-gradient(circle, rgba(4, 120, 87, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -20, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: "60%",
          height: "60%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      
      {/* Grid Pattern Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(circle at center, black, transparent)",
      }} />

      {/* Noise Texture */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.015,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      {/* Futuristic Data Particles Overlay */}
      <DataParticles />

      {/* Global Bottom Scanning Pulse */}
      <motion.div 
        animate={{ opacity: [0, 0.06, 0], y: ["100vh", "0vh"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(4,120,87,0.05), transparent)`, pointerEvents: "none" }}
      />
    </div>
  );
}
