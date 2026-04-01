import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Settings, Zap, Repeat, ArrowRight, Share2 } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";

interface Step {
  title: string;
  desc: string;
}

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: Step[];
}

export default function LayoutFeedbackLoop({ title, subtitle, body, features }: LayoutProps) {
  const steps = features || [
    { title: "Mendengarkan (Omni-Channel)", desc: "1,000+ komentar warga/hari diproses secara digital." },
    { title: "Analisis Sentimen (AI Policy)", desc: "Data aspirasi diubah menjadi acuan kebijakan teknis." },
    { title: "Aksi Lapangan (Execution)", desc: "Penanganan cepat oleh OPD terkait dalam 24 jam." },
    { title: "Laporan Balik (Resonance)", desc: "Bukti solusi dibagikan ulang ke warga via kanal resmi." }
  ];

  const loopIcons = [MessageSquare, Settings, Zap, Repeat];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "2rem", position: "relative" }}>
      
      {/* HEADER SECTION */}
      <div>
        <p style={{ fontSize: "0.8rem", fontWeight: 900, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 950, color: TEXT_MAIN, margin: 0, letterSpacing: "-0.03em" }}>{title}</h2>
        <p style={{ fontSize: "1rem", color: TEXT_MUTED, maxWidth: "700px", marginTop: "1rem" }}>{body}</p>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        
        {/* THE LOOP CIRCLE */}
        <div style={{ position: "relative", width: 500, height: 500, display: "flex", alignItems: "center", justifyContent: "center" }}>
           
           {/* Rotating Outer Ring */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             style={{ 
               position: "absolute", inset: -40, 
               border: "2px dashed rgba(255, 255, 255, 0.1)", 
               borderRadius: "50%",
               pointerEvents: "none"
             }}
           />

           {/* Central Core */}
           <motion.div 
             animate={{ scale: [1, 1.1, 1], boxShadow: [`0 0 40px ${GOLD}22`, `0 0 80px ${GOLD}44`, `0 0 40px ${GOLD}22`] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             style={{ 
               width: 160, height: 160, borderRadius: "50%", 
               background: `linear-gradient(135deg, ${GOLD}, #B8860B)`, 
               display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", 
               border: "4px solid rgba(255,255,255,0.2)", zIndex: 10
             }}
           >
              <Repeat size={48} color={PRIMARY} />
              <div style={{ color: PRIMARY, fontWeight: 950, fontSize: "0.9rem", textAlign: "center", marginTop: "0.5rem", letterSpacing: "0.1em" }}>FEEDBACK<br/>ACTIVE</div>
           </motion.div>

           {/* LOOP NODES */}
           {steps.map((step, i) => {
             const angle = (i * 90) - 90;
             const rad = (angle * Math.PI) / 180;
             const r = 240;
             const x = Math.cos(rad) * r;
             const y = Math.sin(rad) * r;
             const Icon = loopIcons[i % loopIcons.length];

             return (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1, x, y }}
                 transition={{ delay: i * 0.2 }}
                 style={{ 
                   position: "absolute", 
                   width: 250, 
                   display: "flex", flexDirection: "column", alignItems: i === 0 || i === 2 ? "center" : i === 1 ? "flex-start" : "flex-end",
                   textAlign: i === 0 || i === 2 ? "center" : i === 1 ? "left" : "right"
                 }}
               >
                  <div style={{ 
                    width: 70, height: 70, borderRadius: 20, 
                    background: i % 2 === 0 ? PRIMARY : GOLD, 
                    border: "2px solid white",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    marginBottom: "1rem"
                  }}>
                    <Icon size={32} color={i % 2 === 0 ? "white" : PRIMARY} />
                  </div>
                  <div style={{ ...GLASS_DARK, padding: "1.25rem", borderRadius: 20, border: "1px solid rgba(255,255,255,0.1)" }}>
                     <h3 style={{ margin: 0, color: TEXT_MAIN, fontSize: "1rem", fontWeight: 900, marginBottom: "0.25rem" }}>{step.title}</h3>
                     <p style={{ margin: 0, color: TEXT_MUTED, fontSize: "0.8rem", fontWeight: 700 }}>{step.desc}</p>
                  </div>
               </motion.div>
             );
           })}

           {/* Flow Arrows (Simplified dots) */}
           <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
              <motion.circle 
                r="3" fill={GOLD}
                animate={{ cx: [150, 350, 350, 150, 150], cy: [150, 150, 350, 350, 150] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
           </svg>

        </div>
      </div>

    </div>
  );
}
