"use client";

import React from "react";
import { motion } from "framer-motion";
import { DataParticles } from "./HUDComponents";
import { PRIMARY } from "./Constants";

export default function VideoBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", background: "#080C18" }}>
      {/* Mesh Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "70%",
          height: "70%",
          background: "radial-gradient(circle, rgba(142, 21, 64, 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: "60%",
          height: "60%",
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      
      {/* Grid Pattern Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(circle at center, black, transparent)",
      }} />

      {/* Noise Texture */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.02,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      {/* Futuristic Data Particles Overlay */}
      <DataParticles />

      {/* Global Bottom Scanning Pulse */}
      <motion.div 
        animate={{ opacity: [0, 0.1, 0], y: ["100vh", "0vh"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${PRIMARY}22, transparent)`, pointerEvents: "none" }}
      />
    </div>
  );
}
