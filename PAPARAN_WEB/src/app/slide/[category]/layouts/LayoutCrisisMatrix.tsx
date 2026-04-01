import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, ShieldAlert, Zap, User, Users, Globe, MessageSquare, Megaphone } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

export default function LayoutCrisisMatrix({ title, subtitle, body }: LayoutProps) {
  const rawItems = parseListItems(body);
  
  // Custom parsing for this specific slide content (expecting | separators in body text)
  const matrixData = rawItems.map((item, i) => {
    const parts = item.split('|').map(p => p.trim());
    return {
      level: i + 1,
      indicators: parts[0] || "",
      threshold: parts[1] || "",
      action: parts[2] || "",
      authority: parts[3] || "",
      color: i === 0 ? "#10B981" : i === 1 ? GOLD : PRIMARY
    };
  });

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "2rem", animation: "animate-up 0.8s ease-out" }}>
      <div>
        <p style={{ fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.7rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 950, color: TEXT_MAIN, margin: 0, letterSpacing: "-0.04em" }}>{title}</h2>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
        {matrixData.map((node, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * i }}
            style={{ 
               ...GLASS_DARK, borderRadius: 32, padding: "2.5rem", 
               borderTop: `10px solid ${node.color}`,
               display: "flex", flexDirection: "column", gap: "1.5rem",
               background: `linear-gradient(to bottom, ${node.color}08, transparent)`,
               position: "relative", overflow: "hidden"
            }}
          >
            {/* Level Indicator */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
               <div style={{ fontSize: "0.85rem", fontWeight: 1000, color: node.color, letterSpacing: "0.2em" }}>LEVEL 0{node.level}</div>
               <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${node.color}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {i === 0 ? <MessageSquare size={18} color={node.color} /> : i === 1 ? <ShieldAlert size={18} color={node.color} /> : <Zap size={18} color={node.color} />}
               </div>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
               <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 900, color: TEXT_MUTED, letterSpacing: "0.1em", marginBottom: "0.4rem" }}>INDIKATOR & THRESHOLD</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: TEXT_MAIN, lineHeight: 1.4 }}>{node.indicators}</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: node.color, marginTop: "0.5rem" }}>{node.threshold}</div>
               </div>

               <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />

               <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 900, color: TEXT_MUTED, letterSpacing: "0.1em", marginBottom: "0.4rem" }}>INTERVENSI TAKTIS</div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: TEXT_MAIN }}>{node.action}</div>
               </div>

               <div style={{ marginTop: "auto", padding: "1rem", borderRadius: 16, background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ fontSize: "0.6rem", fontWeight: 900, color: GOLD, letterSpacing: "0.15em", marginBottom: "0.3rem" }}>AUTHORITY LEVEL</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 900, color: TEXT_MAIN, display: "flex", alignItems: "center", gap: "0.6rem" }}>
                     <User size={14} color={GOLD} />
                     {node.authority}
                  </div>
               </div>
            </div>

            {/* Glowing Aura for High Level */}
            {i === 2 && (
               <motion.div 
                 animate={{ opacity: [0.1, 0.3, 0.1] }} 
                 transition={{ duration: 2, repeat: Infinity }}
                 style={{ position: "absolute", inset: 0, boxShadow: `inset 0 0 50px ${node.color}33`, pointerEvents: "none" }} 
               />
            )}
          </motion.div>
        ))}
      </div>
      
      <div style={{ ...GLASS_DARK, padding: "1rem 2rem", borderRadius: 16, textAlign: "center", border: "1px solid rgba(255,255,255,0.03)" }}>
         <p style={{ fontSize: "0.8rem", color: TEXT_MUTED, fontWeight: 700, margin: 0 }}>
           Sistem Monitoring SMC menjalankan **Auto-Escalation** berdasarkan matriks di atas untuk menjamin akuntabilitas respon pimpinan.
         </p>
      </div>
    </div>
  );
}
