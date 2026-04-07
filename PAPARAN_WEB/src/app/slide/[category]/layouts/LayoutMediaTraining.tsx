"use client";

import React from "react";
import { GraduationCap, Mic2, MessageSquare, Heart, CheckCircle2, ChevronRight, PlayCircle, Star, Target } from "lucide-react";
import { motion } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseListItems, parseBoldLabel } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

export default function LayoutMediaTraining({ title, subtitle, body }: LayoutProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  const items = parseListItems(body);

  React.useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <motion.div initial="hidden" animate="show" variants={container} style={{ height: "100%", display: "flex", flexDirection: "column", gap: isMobile ? "1.5rem" : "3rem" }}>
      {/* HEADER */}
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "0.8rem", fontWeight: 900, letterSpacing: "0.25em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.04em", display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" }}>
           <GraduationCap size={42} color={GOLD} /> 
           {title}
        </h2>
      </div>

      {/* TRAINING TRACK / ROADMAP */}
      <div style={{ 
        display: "flex", 
        flexDirection: isMobile ? "column" : "row", 
        gap: "2rem", 
        justifyContent: "center", 
        position: "relative",
        padding: isMobile ? "0" : "0 2rem"
      }}>
        
        {/* Connection Line Desktop */}
        {!isMobile && (
          <div style={{ position: "absolute", top: "45px", left: "15%", right: "15%", height: "2px", background: `linear-gradient(90deg, transparent, ${GOLD}33, transparent)`, zIndex: 0 }} />
        )}

        {items.map((item: string, idx: number) => {
          const { label, rest } = parseBoldLabel(item);
          // Split rest for extra details if any [SKILL: ...] [OUTCOME: ...]
          const skillsMatch = rest.match(/\[SKILL: (.*?)\]/);
          const outcomeMatch = rest.match(/\[OUTCOME: (.*?)\]/);
          const description = rest.replace(/\[.*?\]/g, "").trim();
          
          const icons = [Mic2, MessageSquare, Heart];
          const Icon = icons[idx % icons.length];
          
          return (
            <motion.div 
              key={idx} 
              variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1, maxWidth: isMobile ? "100%" : "320px" }}
            >
               {/* Step Badge */}
               <div style={{ width: 90, height: 90, borderRadius: "50%", background: "rgba(13,18,37,0.8)", border: `2px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", boxShadow: `0 0 30px ${GOLD}33`, position: "relative" }}>
                  <Icon size={36} color={GOLD} />
                  <div style={{ position: "absolute", top: -5, right: -5, width: 30, height: 30, borderRadius: "50%", background: GOLD, color: "black", fontSize: "0.8rem", fontWeight: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    0{idx + 1}
                  </div>
               </div>

               <div style={{ ...GLASS_DARK, padding: "1.75rem", borderRadius: 28, border: `1px solid ${GOLD}22`, textAlign: "center", width: "100%" }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "1rem" }}>{label}</h3>
                  <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.6, marginBottom: "1.5rem" }}>{description}</p>
                  
                  <div style={{ height: 1, background: "rgba(255,183,3,0.15)", marginBottom: "1.25rem" }} />

                  {/* Skills Section */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", textAlign: "left" }}>
                     <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Target size={14} color={GOLD} />
                        <span style={{ fontSize: "0.7rem", fontWeight: 900, color: GOLD, textTransform: "uppercase", letterSpacing: "0.1em" }}>Target Skill</span>
                     </div>
                     <div style={{ fontSize: "0.8rem", color: TEXT_MAIN, fontWeight: 600 }}>{skillsMatch ? skillsMatch[1] : "Strategic Articulation"}</div>
                     
                     <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "5px" }}>
                        <CheckCircle2 size={14} color="#10B981" />
                        <span style={{ fontSize: "0.7rem", fontWeight: 900, color: "#10B981", textTransform: "uppercase", letterSpacing: "0.1em" }}>Expected Outcome</span>
                     </div>
                     <div style={{ fontSize: "0.8rem", color: TEXT_MAIN, fontWeight: 600 }}>{outcomeMatch ? outcomeMatch[1] : "Public Trust Enhancement"}</div>
                  </div>
               </div>
            </motion.div>
          );
        })}
      </div>

      {/* TRAINING KPI HUD */}
      {!isMobile && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1 }}
          style={{ ...GLASS_DARK, alignSelf: "center", padding: "1.25rem 2.5rem", borderRadius: 20, border: `1px solid ${GOLD}44`, display: "flex", gap: "3rem", alignItems: "center" }}
        >
           <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.65rem", color: TEXT_MUTED, fontWeight: 900, letterSpacing: "0.1em" }}>READINESS LEVEL</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 1000, color: GOLD }}>EXECUTIVE GRADE</div>
           </div>
           <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.1)" }} />
           <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.65rem", color: TEXT_MUTED, fontWeight: 900, letterSpacing: "0.1em" }}>SIMULATION MODE</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 1000, color: TEXT_MAIN }}>FULL INTENSITY</div>
           </div>
           <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.1)" }} />
           <div style={{ display: "flex", gap: "5px" }}>
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill={GOLD} color={GOLD} opacity={0.3 + (i * 0.14)} />)}
           </div>
        </motion.div>
      )}

    </motion.div>
  );
}
