import React from "react";
import { motion } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

export default function LayoutMap({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const markers = items.map((item, i) => {
    const { label, rest } = parseBoldLabel(item);
    return { label, rest, color: i % 2 === 0 ? PRIMARY : GOLD };
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.6rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "2.5rem", flex: 1, minHeight: 0 }} className="feature-grid">
        {/* Real Map Integration (Official Google Maps) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          style={{ ...GLASS_DARK, borderRadius: 36, overflow: "hidden", position: "relative", minHeight: "450px", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}
        >
           <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ 
              border: 0, 
              filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.15)", 
              opacity: 0.85,
              transition: "opacity 0.6s ease"
            }} 
            src="https://maps.google.com/maps?q=Kota%20Sukabumi&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            allowFullScreen
          />
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ position: "absolute", bottom: "2rem", right: "2rem", background: "rgba(15,23,42,0.9)", border: `1px solid ${GOLD}55`, padding: "1.2rem 1.8rem", borderRadius: "24px", backdropFilter: "blur(24px)", boxShadow: "0 15px 40px rgba(0,0,0,0.6)" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.4rem" }}>
              <motion.div 
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: 10, height: 10, borderRadius: "50%", background: GOLD, boxShadow: `0 0 15px ${GOLD}` }} 
              />
              <span style={{ fontSize: "0.8rem", fontWeight: 900, color: GOLD, letterSpacing: "0.15em" }}>LIVE GEOSPATIAL</span>
            </div>
            <div style={{ fontSize: "1.1rem", color: TEXT_MAIN, fontWeight: 900 }}>Kota Sukabumi Area</div>
            <div style={{ fontSize: "0.8rem", color: TEXT_MUTED, fontWeight: 500 }}>Ref: GIS Data Center 2026</div>
          </motion.div>
        </motion.div>

        {/* List Side */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", overflowY: "auto" }} className="custom-scroll">
          {markers.map((m, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.03)" }}
              style={{ ...GLASS_DARK, borderRadius: 20, padding: "1.4rem 1.8rem", borderLeft: `6px solid ${m.color}`, border: "1px solid rgba(255,255,255,0.05)", cursor: "default" }}
            >
              <div style={{ fontWeight: 900, fontSize: "1.1rem", color: TEXT_MAIN, marginBottom: "0.4rem", letterSpacing: "0.01em" }}>{m.label}</div>
              <div style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.7, fontWeight: 500 }}>{m.rest}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
