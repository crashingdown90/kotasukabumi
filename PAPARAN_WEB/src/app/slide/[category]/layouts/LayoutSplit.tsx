import React from "react";
import { motion } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MUTED, TEXT_MAIN } from "../components/Constants";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  image?: string;
  icon?: any;
}

export default function LayoutSplit({ title, subtitle, body, image }: LayoutProps) {
  return (
    <div style={{ height: "100%", display: "flex", borderRadius: 32, overflow: "hidden", background: "rgba(10, 15, 30, 0.4)", border: "1px solid rgba(255, 255, 255, 0.05)", animation: "animate-up 0.8s ease-out" }}>
      
      {/* ── LEFT: FULL HERO IMAGE ───────────────────────── */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden", borderRight: "1px solid rgba(255, 255, 255, 0.05)" }}>
        {image ? (
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={image} 
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(142,21,64,0.2), rgba(20,20,30,1))" }} />
        )}
        
        {/* Subtle Inner Glow */}
        <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 100px rgba(0,0,0,0.8)", pointerEvents: "none" }} />
      </div>

      {/* ── RIGHT: ELEGANT TYPOGRAPHY ───────────────────── */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "4rem", backgroundColor: "rgba(10, 15, 30, 0.9)" }}>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ maxWidth: "550px" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 900, letterSpacing: "0.25em", color: GOLD, textTransform: "uppercase", marginBottom: "1rem" }}>
            {subtitle}
          </p>
          
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 950, color: TEXT_MAIN, marginBottom: "2.5rem", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            {title}
          </h2>
          
          <div style={{ 
            fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontWeight: 500,
            display: "flex", flexDirection: "column", gap: "1.25rem" 
          }}>
            {/* If the body contains simple text, render it beautifully. If it has HTML, use dangerouslySetInnerHTML */}
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </div>
          
          {/* Decorative Divider */}
          <div style={{ marginTop: "4rem", width: "40px", height: "4px", background: PRIMARY, borderRadius: 2 }} />
        </motion.div>

      </div>
    </div>
  );
}
