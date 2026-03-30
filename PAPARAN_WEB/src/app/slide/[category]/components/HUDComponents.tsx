"use client";

import React from "react";
import { motion } from "framer-motion";
import { PRIMARY } from "./Constants";

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
    return (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ 
                        x: Math.random() * 100 + "%", 
                        y: Math.random() * 100 + "%",
                        opacity: 0
                    }}
                    animate={{ 
                        y: ["-10%", "110%"],
                        opacity: [0, 0.4, 0]
                    }}
                    transition={{ 
                        duration: 5 + Math.random() * 10,
                        repeat: Infinity,
                        delay: Math.random() * 10,
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
