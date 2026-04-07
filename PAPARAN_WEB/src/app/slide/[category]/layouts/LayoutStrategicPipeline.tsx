"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Zap, Target, ArrowRight, Share2, Activity, CheckCircle2 } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { InlineText } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: { title: string, desc: string, icon?: string }[];
}

export default function LayoutStrategicPipeline({ title, subtitle, body, features }: LayoutProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const flowIcons: { [key: string]: any } = {
    Star, ShieldCheck, Zap, Target, Share2, Activity
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const nodes = features || [
    { title: "Input Strategis", desc: "Mandat & Data Kebijakan", icon: "Target" },
    { title: "Orkestrasi Narasi", desc: "One-Gate Policy SMC", icon: "ShieldCheck" },
    { title: "Amplifikasi Masif", desc: "Multi-Channel & KOL", icon: "Zap" },
    { title: "Public Trust", desc: "Winning Hearts & Minds", icon: "Star" }
  ];

  return (
    <motion.div initial="hidden" animate="show" variants={container} style={{ height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
      {/* HEADER */}
      <div style={{ marginBottom: isMobile ? "2rem" : "3rem", maxWidth: "800px" }}>
        <p style={{ fontSize: "0.8rem", fontWeight: 900, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.6rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em", margin: "0 0 1rem" }}>{title}</h2>
        <div style={{ color: TEXT_MUTED, fontSize: "1.1rem", lineHeight: 1.6 }}>
           <InlineText text={body} />
        </div>
      </div>

      {/* PIPELINE AREA */}
      <div style={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: isMobile ? "column" : "row", 
        alignItems: "center", 
        justifyContent: "space-between",
        gap: isMobile ? "2rem" : "0",
        position: "relative",
        padding: isMobile ? "0" : "0 2rem",
        zIndex: 5
      }}>
        {/* CONNECTION LINE (DESKTOP) */}
        {!isMobile && (
          <div style={{ 
            position: "absolute", 
            top: "50%", 
            left: "5%", 
            right: "5%", 
            height: "2px", 
            background: `linear-gradient(to right, transparent, ${PRIMARY}33, ${GOLD}33, transparent)`,
            zIndex: 0,
            transform: "translateY(-50%)"
          }}>
            {/* Animated Pulses */}
            {[1, 2, 3].map((p) => (
              <motion.div 
                key={p}
                animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: p * 1, ease: "linear" }}
                style={{ position: "absolute", width: "10%", height: "100%", background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
              />
            ))}
          </div>
        )}

        {nodes.map((node, i) => {
          const NodeIcon = flowIcons[node.icon || "Activity"] || Activity;
          const isLast = i === nodes.length - 1;
          
          return (
            <React.Fragment key={i}>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  show: { opacity: 1, scale: 1, y: 0 }
                }}
                whileHover={{ y: -10, scale: 1.05 }}
                style={{ 
                  ...GLASS_DARK,
                  width: isMobile ? "100%" : "230px",
                  padding: "2rem 1.5rem",
                  borderRadius: 30,
                  border: `1px solid ${i % 2 === 0 ? PRIMARY : GOLD}33`,
                  textAlign: "center",
                  position: "relative",
                  zIndex: 2,
                  boxShadow: `0 15px 45px rgba(0,0,0,0.3)`
                }}
              >
                <div style={{ 
                  width: 60, height: 60, borderRadius: 18, 
                  background: `linear-gradient(135deg, ${i % 2 === 0 ? PRIMARY : GOLD}, ${i % 2 === 0 ? "#C41E5B" : "#B8860B"})`,
                  margin: "0 auto 1.5rem",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 10px 20px ${i % 2 === 0 ? PRIMARY : GOLD}33`
                }}>
                  <NodeIcon size={28} color="white" />
                </div>
                
                <h4 style={{ fontSize: "1.1rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.5rem" }}>{node.title}</h4>
                <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.5, margin: 0 }}>{node.desc}</p>
                
                <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                   <CheckCircle2 size={16} color={i % 2 === 0 ? PRIMARY : GOLD} opacity={0.6} />
                </div>
              </motion.div>

              {!isLast && !isMobile && (
                 <motion.div 
                   animate={{ x: [0, 10, 0] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   style={{ zIndex: 1, color: GOLD, opacity: 0.5 }}
                 >
                   <ArrowRight size={32} />
                 </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* FOOTER STATUS */}
      {!isMobile && (
        <div style={{ position: "absolute", bottom: 0, left: 0, padding: "1.25rem", background: "rgba(255,255,255,0.03)", borderRadius: "15px 15px 0 0", borderLeft: `4px solid ${PRIMARY}`, display: "flex", alignItems: "center", gap: "10px" }}>
           <Activity size={18} color={PRIMARY} className="pulse" />
           <span style={{ fontSize: "0.7rem", fontWeight: 800, color: TEXT_MAIN, letterSpacing: "0.05em" }}>SYSTEM STATUS: STRATEGIC FLOW FULLY OPERATIONAL</span>
        </div>
      )}

      <style jsx>{`
        .pulse { animation: pulse 2s infinite ease-in-out; }
        @keyframes pulse { 0% { opacity: 0.3; } 50% { opacity: 1; } 100% { opacity: 0.3; } }
      `}</style>
    </motion.div>
  );
}
