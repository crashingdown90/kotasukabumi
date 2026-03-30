import React from "react";
import { Timer, Search, Zap, Send, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { InlineText } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: { title: string; desc: string; metric?: string }[];
}

export default function LayoutGoldenTime({ title, subtitle, body, features }: LayoutProps) {
  const items = features || [
    { title: "Deteksi & Verifikasi", desc: "Identifikasi anomali informasi melalui EWS dan kroscek lintas sektoral.", metric: "0-30 Menit" },
    { title: "Sikap Strategis", desc: "Tim Khusus merumuskan narasi tunggal dan holding statement.", metric: "30-60 Menit" },
    { title: "Publikasi Awal", desc: "Penyebaran narasi klarifikasi ke seluruh kanal informasi publik.", metric: "60-120 Menit" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemFade = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  // Color mapping based on urgency
  const getStageColor = (i: number) => {
    if (i === 0) return "#EF4444"; // Red
    if (i === 1) return "#F59E0B"; // Orange
    return GOLD; // Gold
  };

  return (
    <motion.div initial="hidden" animate="show" variants={container} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
         <div style={{ flex: 1 }}>
            <motion.div 
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,183,3,0.1)", padding: "6px 16px", borderRadius: 20, border: "1px solid rgba(255,183,3,0.3)", marginBottom: "1rem" }}
            >
              <Timer size={14} color={GOLD} />
              <span style={{ fontSize: "0.75rem", fontWeight: 900, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase" }}>{subtitle}</span>
            </motion.div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)", fontWeight: 950, color: "white", letterSpacing: "-0.04em", margin: 0 }}>{title}</h2>
         </div>
         <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: 900, color: "#EF4444", display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end", marginBottom: "0.5rem" }}>
               <AlertCircle size={18} />
               CRITICAL RESPONSE MODE
            </div>
            <div style={{ fontSize: "0.75rem", color: TEXT_MUTED, fontWeight: 700, letterSpacing: "0.1em" }}>LATENCY TARGET: &lt; 120 MINUTES</div>
         </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "4rem", flex: 1 }} className="grid-responsive">
        
        {/* LEFT: PROGRESSIVE TIMELINE */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", justifyContent: "center" }}>
          {items.map((item, i) => {
            const color = getStageColor(i);
            const Icons = [Search, Zap, Send];
            const Icon = Icons[i % Icons.length];

            return (
              <motion.div 
                key={i} 
                variants={itemFade as any}
                whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.03)" }}
                style={{ 
                  ...GLASS_DARK, 
                  borderRadius: 24, 
                  padding: "1.75rem 2.5rem", 
                  borderLeft: `8px solid ${color}`,
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  position: "relative"
                }}
              >
                 <div style={{ width: 60, height: 60, borderRadius: 20, background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${color}44`, flexShrink: 0 }}>
                    <Icon size={28} color={color} />
                 </div>
                 
                 <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                       <h3 style={{ fontSize: "1.35rem", fontWeight: 900, color: "white", margin: 0 }}>{item.title}</h3>
                       <span style={{ fontSize: "0.9rem", fontWeight: 900, color, letterSpacing: "0.05em" }}>{item.metric}</span>
                    </div>
                    <p style={{ fontSize: "1rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>
                       <InlineText text={item.desc} />
                    </p>
                 </div>
                 
                 {/* Connection Link Animation Logic can go here */}
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT: LIVE STATUS GAUGE */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", justifyContent: "center" }}>
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.5, duration: 1 }}
             style={{ ...GLASS_DARK, borderRadius: "50%", aspectRatio: "1/1", width: "100%", maxWidth: "340px", margin: "0 auto", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 20px 80px rgba(0,0,0,0.5)" }}
           >
              {/* Circular Ringtones */}
              <div style={{ position: "absolute", width: "85%", height: "85%", borderRadius: "50%", border: "2px dashed rgba(255,255,255,0.05)" }} />
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                style={{ position: "absolute", width: "95%", height: "95%", borderRadius: "50%", border: `2px solid transparent`, borderTop: `2px solid #EF4444`, borderRight: `3px solid #F59E0B` }} 
              />
              
              <div style={{ textAlign: "center", zIndex: 1, position: "relative" }}>
                 <Clock size={40} color={GOLD} style={{ margin: "0 auto 1rem" }} />
                 <div style={{ fontSize: "3.5rem", fontWeight: 950, color: "white", lineHeight: 0.9 }}>120</div>
                 <div style={{ fontSize: "0.85rem", fontWeight: 900, color: GOLD, letterSpacing: "0.2em", marginTop: 8 }}>MINUTES LIMIT</div>
                 <div style={{ height: "4px", width: "40px", background: GOLD, margin: "1.5rem auto" }} />
                 <div style={{ fontSize: "0.7rem", color: TEXT_MUTED, fontWeight: 700, letterSpacing: "0.1em" }}>MAXIMUM RESPONSE SLA</div>
              </div>

              {/* Decorative Pulse */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ repeat: Infinity, duration: 3 }}
                style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `1px solid ${GOLD}` }}
              />
           </motion.div>
           
           <div style={{ background: "rgba(142,21,64,0.1)", border: "1px solid rgba(142,21,64,0.3)", borderRadius: 24, padding: "1.75rem", display: "flex", alignItems: "flex-start", gap: "1.25rem", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: GOLD, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                 <Zap size={24} color={PRIMARY} />
              </div>
              <div>
                 <div style={{ fontSize: "1rem", fontWeight: 950, color: "white", marginBottom: "0.4rem", letterSpacing: "0.02em" }}>DOKTRIN AMBANG KRISIS</div>
                 <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>Publik akan mengisi ketidaktahuan dengan rumor jika otoritas diam lebih dari 120 menit. <b style={{ color: GOLD }}>Holding Statement</b> adalah kunci kedaulatan informasi.</p>
              </div>
           </div>
        </div>

      </div>
    </motion.div>
  );
}
