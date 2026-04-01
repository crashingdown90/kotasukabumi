import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ShieldCheck, Heart, Star, Target, Info, ChevronRight, X } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { InlineText } from "../components/Shared";

interface PillarDetail {
  title: string;
  desc: string;
  detail?: string;
  points?: string[];
}

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: PillarDetail[];
}

export default function LayoutMasterNarrative({ title, subtitle, body, features }: LayoutProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const pillars = features || [
    { title: "Inovatif", desc: "Digital first governance", points: ["GovTech Excellence", "Smart City Hub", "AI Integration"] },
    { title: "Mandiri", desc: "Self-reliant economy", points: ["Fiscal Sovereignty", "SME Empowerment", "PAD Optimization"] },
    { title: "Agamis", desc: "Values & Ethics", points: ["Universal Harmony", "Ethics in Action", "Cultural Wisdom"] },
    { title: "Nasionalis", desc: "Pride & Unity", points: ["Regional Hub", "Inclusive Patriotism", "National Integration"] }
  ];

  const pillarIcons = [Zap, ShieldCheck, Heart, Star];
  const orbitRadius = 260;

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
      
      {/* BACKGROUND DNA DECORATION */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none", zIndex: 0 }}>
         <svg width="100%" height="100%" viewBox="0 0 1000 1000">
            <motion.path 
              d="M0,500 Q250,200 500,500 T1000,500" 
              fill="none" stroke={PRIMARY} strokeWidth="2" 
              animate={{ d: ["M0,500 Q250,200 500,500 T1000,500", "M0,500 Q250,800 500,500 T1000,500", "M0,500 Q250,200 500,500 T1000,500"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path 
              d="M0,500 Q250,800 500,500 T1000,500" 
              fill="none" stroke={GOLD} strokeWidth="2" 
              animate={{ d: ["M0,500 Q250,800 500,500 T1000,500", "M0,500 Q250,200 500,500 T1000,500", "M0,500 Q250,800 500,500 T1000,500"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
         </svg>
      </div>

      <div style={{ zIndex: 1, marginBottom: "2rem" }}>
        <p style={{ fontSize: "0.8rem", fontWeight: 900, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 950, color: TEXT_MAIN, margin: 0, letterSpacing: "-0.03em" }}>{title}</h2>
        <p style={{ fontSize: "1.1rem", color: TEXT_MUTED, maxWidth: "700px", marginTop: "1rem", lineHeight: 1.6 }}>
           <InlineText text={body} />
        </p>
      </div>

      <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "500px" }}>
        
        {/* CENTRAL CORE */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], boxShadow: [`0 0 50px ${PRIMARY}44`, `0 0 100px ${PRIMARY}66`, `0 0 50px ${PRIMARY}44`] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            width: 180, height: 180, borderRadius: "50%", 
            background: `linear-gradient(135deg, ${PRIMARY}, #8E1540)`, 
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", 
            border: `4px solid ${GOLD}44`, zIndex: 10, position: "relative",
            backdropFilter: "blur(20px)"
          }}
        >
          <Target size={48} color="white" />
          <div style={{ color: TEXT_MAIN, fontWeight: 950, fontSize: "1.5rem", textAlign: "center", marginTop: "0.5rem", letterSpacing: "0.1em" }}>IMAN</div>
          <div style={{ color: GOLD, fontSize: "0.6rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase" }}>MASTER DNA</div>
          
          {/* Rotating Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", inset: -15, border: "2px dashed rgba(212, 175, 55, 0.3)", borderRadius: "50%" }}
          />
           <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", inset: -30, border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "50%" }}
          />
        </motion.div>

        {/* PILLAR NODES */}
        {pillars.map((pillar, i) => {
          const angle = (i * 90) - 90; // Circular distribution
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * orbitRadius;
          const y = Math.sin(rad) * orbitRadius;
          const Icon = pillarIcons[i % pillarIcons.length];

          return (
            <React.Fragment key={i}>
               {/* Connecting Line to Core */}
               <motion.div 
                 initial={{ opacity: 0, width: 0 }}
                 animate={{ opacity: 0.3, width: orbitRadius - 90 }}
                 style={{ 
                   position: "absolute", height: "2px", background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
                   left: "50%", top: "50%", originX: 0, 
                   transform: `rotate(${angle}deg) translateX(90px)`,
                   zIndex: 1
                 }}
               />

               <motion.div
                 initial={{ opacity: 0, x: 0, y: 0 }}
                 animate={{ opacity: 1, x, y }}
                 transition={{ delay: 0.5 + (i * 0.2), type: "spring", stiffness: 50 }}
                 whileHover={{ scale: 1.1, zIndex: 20 }}
                 onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                 style={{ 
                    position: "absolute", width: 140, 
                    display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer",
                    zIndex: 15
                 }}
               >
                  <div style={{ 
                    width: 70, height: 70, borderRadius: 24, 
                    background: activeIndex === i ? GOLD : GLASS_DARK.background,
                    border: `2px solid ${activeIndex === i ? "white" : GOLD + "44"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: activeIndex === i ? `0 0 30px ${GOLD}` : "0 10px 30px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)"
                  }}>
                    <Icon size={32} color={activeIndex === i ? PRIMARY : GOLD} />
                  </div>
                  <div style={{ marginTop: "1rem", textAlign: "center" }}>
                    <div style={{ color: TEXT_MAIN, fontWeight: 900, fontSize: "1.1rem", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>{pillar.title}</div>
                    <div style={{ color: TEXT_MUTED, fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{pillar.desc}</div>
                  </div>
               </motion.div>
            </React.Fragment>
          );
        })}

        {/* TACTICAL OVERLAY FOR ACTIVE NODE */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={{ 
                position: "absolute", 
                bottom: -20, 
                left: "50%", transform: "translateX(-50%)",
                width: "90%", maxWidth: "600px", 
                ...GLASS_DARK, borderRadius: 32, padding: "2rem",
                border: `1px solid ${GOLD}44`, zIndex: 100,
                boxShadow: "0 30px 100px rgba(0,0,0,0.8)"
              }}
            >
               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: GOLD, display: "flex", alignItems: "center", justifyContent: "center" }}>
                       {React.createElement(pillarIcons[activeIndex], { size: 24, color: PRIMARY })}
                    </div>
                    <div>
                       <div style={{ fontSize: "0.7rem", fontWeight: 900, color: GOLD, letterSpacing: "0.15em" }}>TACTICAL SUB-NARRATIVE</div>
                       <h4 style={{ fontSize: "1.5rem", fontWeight: 950, color: TEXT_MAIN, margin: 0 }}>{pillars[activeIndex].title}</h4>
                    </div>
                 </div>
                 <button 
                   onClick={() => setActiveIndex(null)}
                   style={{ background: "rgba(255,255,255,0.05)", border: "none", color: TEXT_MAIN, padding: "0.5rem", borderRadius: "50%", cursor: "pointer" }}
                 >
                   <X size={20} />
                 </button>
               </div>
               
               {pillars[activeIndex].detail && (
                  <p style={{ color: TEXT_MUTED, fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem", marginTop: 0 }}>
                     {pillars[activeIndex].detail}
                  </p>
               )}

               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {pillars[activeIndex].points?.map((pt, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
                       <ChevronRight size={16} color={GOLD} />
                       <span style={{ fontSize: "0.95rem", color: TEXT_MAIN, fontWeight: 600 }}>{pt}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* FOOTER LEGEND */}
      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "3rem" }}>
         <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", fontWeight: 800, color: TEXT_MUTED }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: GOLD }} /> SYMBOL OF UNITY
         </div>
         <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", fontWeight: 800, color: TEXT_MUTED }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: PRIMARY }} /> STRATEGIC CORE
         </div>
      </div>
    </div>
  );
}
