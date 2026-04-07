"use client";

import React from "react";
import { motion } from "framer-motion";
import { GOLD, TEXT_MUTED, TEXT_MAIN } from "../components/Constants";
interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  IconComp: React.ElementType;
}

export default function LayoutSection({ title, subtitle, body, IconComp }: LayoutProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", position: "relative" }}
    >
      {/* Background Accent */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "60vw", height: "60vw", background: `radial-gradient(circle, ${GOLD}11 0%, transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{ zIndex: 1 }}
      >
        <div style={{ display: "inline-flex", padding: "0.5rem 1.5rem", borderRadius: 99, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "2rem", alignItems: "center", gap: "0.75rem" }}>
           <IconComp size={18} color={GOLD} />
           <span style={{ fontSize: "0.8rem", fontWeight: 900, letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase" }}>{subtitle}</span>
        </div>
        
        <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 950, color: TEXT_MAIN, lineHeight: 1, letterSpacing: "-0.04em", margin: "0 0 2rem" }}>
          {title.split(":").map((part, i) => (
            <span key={i} style={{ display: "block", color: i === 0 ? GOLD : "white", opacity: i === 0 ? 0.8 : 1 }}>
              {part.trim()}
              {i === 0 && <span style={{ fontSize: "0.5em", verticalAlign: "middle", marginLeft: "0.5rem" }}>✦</span>}
            </span>
          ))}
        </h1>
        
        <div style={{ maxWidth: "600px", margin: "0 auto", height: "2px", background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`, marginBottom: "2rem" }} />
        
        <p style={{ fontSize: "1.4rem", color: TEXT_MUTED, maxWidth: "700px", margin: "0 auto", lineHeight: 1.6, fontWeight: 500, fontStyle: "italic" }}>
          &quot;{body}&quot;
        </p>
      </motion.div>
    </motion.div>
  );
}
