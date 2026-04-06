"use client";

import React from "react";
import { motion } from "framer-motion";
import { PRIMARY } from "./Constants";
import { getStaticRandom, RANDOM_POOL_XY, RANDOM_POOL_DUR } from "./PurityUtils";

export const HUDBracket = ({ size = 260, color = PRIMARY }) => {
  const cornerSize = 40;
  const strokeWidth = 2;

  return (
    <div style={{ position: "absolute", width: size, height: size, top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none", zIndex: 1 }}>
      {/* Top Left */}
      <motion.div 
        animate={{ x: [-5, 0, -5], y: [-5, 0, -5], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: -10, left: -10, width: cornerSize, height: cornerSize, borderTop: `${strokeWidth}px solid ${color}`, borderLeft: `${strokeWidth}px solid ${color}` }} 
      />
      {/* Top Right */}
      <motion.div 
        animate={{ x: [5, 0, 5], y: [-5, 0, -5], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: "absolute", top: -10, right: -10, width: cornerSize, height: cornerSize, borderTop: `${strokeWidth}px solid ${color}`, borderRight: `${strokeWidth}px solid ${color}` }} 
      />
      {/* Bottom Left */}
      <motion.div 
        animate={{ x: [-5, 0, -5], y: [5, 0, 5], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: "absolute", bottom: -10, left: -10, width: cornerSize, height: cornerSize, borderBottom: `${strokeWidth}px solid ${color}`, borderLeft: `${strokeWidth}px solid ${color}` }} 
      />
      {/* Bottom Right */}
      <motion.div 
        animate={{ x: [5, 0, 5], y: [5, 0, 5], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ position: "absolute", bottom: -10, right: -10, width: cornerSize, height: cornerSize, borderBottom: `${strokeWidth}px solid ${color}`, borderRight: `${strokeWidth}px solid ${color}` }} 
      />
    </div>
  );
};

export const ScanningLine = () => (
  <motion.div 
    animate={{ top: ["-10%", "110%"], opacity: [0, 0.5, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    style={{ position: "absolute", left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${PRIMARY}, transparent)`, zIndex: 2, boxShadow: `0 0 10px ${PRIMARY}` }}
  />
);

export const DataParticles = () => {
  const particles = React.useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      id: i,
      x: getStaticRandom(i * 3, RANDOM_POOL_XY) * 100 + "%",
      y: getStaticRandom(i * 3 + 1, RANDOM_POOL_XY) * 100 + "%",
      duration: 5 + getStaticRandom(i * 3 + 2, RANDOM_POOL_DUR) * 10,
      delay: getStaticRandom(i * 3 + 3, RANDOM_POOL_DUR) * 10
    }));
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ 
            x: p.x, 
            y: p.y,
            opacity: 0
          }}
          animate={{ 
            y: ["-10%", "110%"],
            opacity: [0, 0.4, 0]
          }}
          transition={{ 
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
          style={{ 
            position: "absolute", 
            width: 2, 
            height: 2, 
            background: PRIMARY, 
            borderRadius: "50%",
            boxShadow: `0 0 8px ${PRIMARY}`
          }}
        />
      ))}
    </div>
  );
};
