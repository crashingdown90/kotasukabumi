import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Activity, Database, Radar } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MUTED } from "../components/Constants";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  image?: string;
}

export default function LayoutImmersive({ title, subtitle, body, image }: LayoutProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: 32, animation: "animate-up 0.8s ease-out" }}>
      
      {/* ── BACKGROUND IMAGE & OVERLAYS ────────────────── */}
      {image && (
        <>
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src={image} 
            alt={title}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
          />
          {/* Heavy Vignette & Dark Overlay for Text Readability */}
          <div style={{ 
            position: "absolute", inset: 0, zIndex: 1,
            background: "radial-gradient(circle at center, transparent 0%, rgba(5,8,15,0.8) 100%), linear-gradient(to right, rgba(5,8,15,0.95) 0%, rgba(5,8,15,0.4) 100%)"
          }} />
        </>
      )}

      {/* ── CYBER HUD ELEMENTS (DECORATIVE) ─────────────── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", opacity: 0.6 }}>
         {/* Top Left HUD */}
         <div style={{ position: "absolute", top: 30, left: 30, display: "flex", alignItems: "center", gap: "1rem" }}>
            <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
               <div style={{ width: 12, height: 12, borderRadius: "50%", background: PRIMARY, boxShadow: `0 0 10px ${PRIMARY}` }} />
            </motion.div>
            <div style={{ fontSize: "0.65rem", fontWeight: 900, color: PRIMARY, letterSpacing: "0.2em", textTransform: "uppercase" }}>SMC UPLINK: ACTIVE</div>
         </div>
         
         {/* Bottom Right HUD */}
         <div style={{ position: "absolute", bottom: 30, right: 30, textAlign: "right", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.5rem", color: GOLD }}>
               <Radar size={14} /> <span style={{ fontSize: "0.6rem", fontWeight: 900, letterSpacing: "0.1em" }}>SCANNING PING: 12ms</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.5rem", color: "#10B981" }}>
               <Database size={14} /> <span style={{ fontSize: "0.6rem", fontWeight: 900, letterSpacing: "0.1em" }}>DATA INTEGRITY: 100%</span>
            </div>
         </div>
         
         {/* Side Scanner Line */}
         <motion.div 
           animate={{ y: ["0%", "800%", "0%"] }} 
           transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
           style={{ position: "absolute", right: 20, top: 40, width: 2, height: 80, background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)` }}
         />
      </div>

      {/* ── MAIN CONTENT (GLASSMORPHISM CARD) ──────────── */}
      <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", alignItems: "center", padding: "4rem" }}>
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          style={{ 
            maxWidth: "600px", 
            background: "rgba(10, 15, 30, 0.4)", 
            backdropFilter: "blur(20px)", 
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderLeft: `6px solid ${PRIMARY}`,
            borderRadius: 32,
            padding: "3.5rem"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
             <AlertTriangle size={20} color={GOLD} />
             <p style={{ fontSize: "0.75rem", fontWeight: 900, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", margin: 0 }}>
               {subtitle}
             </p>
          </div>
          
          <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 950, color: "white", marginBottom: "2rem", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            {title}
          </h2>
          
          <div 
            style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, fontWeight: 500 }}
            dangerouslySetInnerHTML={{ __html: body }}
          />
          
          <div style={{ marginTop: "3rem", display: "inline-flex", alignItems: "center", gap: "1rem", padding: "0.75rem 1.5rem", borderRadius: 100, background: "rgba(0,0,0,0.5)", border: `1px solid ${PRIMARY}55` }}>
             <Activity size={16} color={PRIMARY} />
             <span style={{ fontSize: "0.75rem", fontWeight: 900, color: "white", letterSpacing: "0.15em" }}>LIVE MONITORING PROTOCOL</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
