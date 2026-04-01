import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, AlertTriangle, AlertCircle, PhoneCall, PenTool, Radio } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { InlineText } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

export default function LayoutMatrix({ title, subtitle, body }: LayoutProps) {
  // Parsing simple matrix data from body
  // Expecting body to be a UL where each LI is: "<Level>|<Indikator>|<Aksi>|<PIC>" separated by "|"
  const items = body.replace(/<ul>/g, "").replace(/<\/ul>/g, "").split("</li>").filter(i => i.trim());
  
  const levels = [
    { name: "LEVEL 1 (LOW)", color: "#10B981", icon: ShieldAlert, bg: "rgba(16, 185, 129, 0.1)" },
    { name: "LEVEL 2 (MID)", color: GOLD, icon: AlertTriangle, bg: "rgba(212, 175, 55, 0.1)" },
    { name: "LEVEL 3 (HIGH)", color: PRIMARY, icon: AlertCircle, bg: "rgba(142, 21, 64, 0.15)" }
  ];

  const actions = [
    { icon: PenTool, name: "Klarifikasi Medsos" },
    { icon: Radio, name: "Press Release Resmi" },
    { icon: PhoneCall, name: "Doorstop Wali Kota" }
  ];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", animation: "animate-up 0.8s ease-out" }}>
      <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.7rem" }}>{subtitle}</p>
      <h2 style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)", fontWeight: 950, color: TEXT_MAIN, marginBottom: "3rem", letterSpacing: "-0.03em" }}>{title}</h2>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2rem" }}>
        
        {/* Table Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 2fr 1.5fr 1fr", gap: "1rem", padding: "0 1rem" }}>
           <div style={{ fontSize: "0.75rem", fontWeight: 900, color: TEXT_MUTED, letterSpacing: "0.15em", textTransform: "uppercase" }}>Tingkat Eskalasi</div>
           <div style={{ fontSize: "0.75rem", fontWeight: 900, color: TEXT_MUTED, letterSpacing: "0.15em", textTransform: "uppercase" }}>Indikator (SNA & Radar)</div>
           <div style={{ fontSize: "0.75rem", fontWeight: 900, color: TEXT_MUTED, letterSpacing: "0.15em", textTransform: "uppercase" }}>Respon Intervensi</div>
           <div style={{ fontSize: "0.75rem", fontWeight: 900, color: TEXT_MUTED, letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "right" }}>Otoritas (PIC)</div>
        </div>

        {/* Matrix Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", overflowY: "auto", paddingBottom: "2rem" }}>
          {items.map((item, i) => {
             // Clean tag
             const text = item.replace(/<li>/g, "");
             const parts = text.split("|").map(s => s.trim());
             
             // Fallback if formatting is wrong
             if (parts.length < 4) return null;

             const level = levels[i % levels.length];
             const LIcon = level.icon;
             const AIcon = actions[i % actions.length].icon;

             return (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.15 }}
                 whileHover={{ scale: 1.01, backgroundColor: "rgba(255,255,255,0.05)" }}
                 style={{ 
                   ...GLASS_DARK, borderRadius: 24, padding: "1.5rem", 
                   display: "grid", gridTemplateColumns: "1.2fr 2fr 1.5fr 1fr", gap: "1.5rem", alignItems: "center",
                   borderLeft: `6px solid ${level.color}`, background: level.bg, border: "1px solid rgba(255,255,255,0.06)"
                 }}
               >
                 <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                   <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <LIcon size={24} color={level.color} />
                   </div>
                   <div style={{ fontSize: "1.1rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "-0.01em" }}>{parts[0]}</div>
                 </div>

                 <div style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500 }}>
                   <InlineText text={parts[1]} />
                 </div>

                 <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                   <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <AIcon size={16} color={GOLD} />
                   </div>
                   <span style={{ fontSize: "0.95rem", fontWeight: 700, color: GOLD }}>{parts[2]}</span>
                 </div>

                 <div style={{ textAlign: "right" }}>
                    <div style={{ display: "inline-flex", padding: "0.4rem 1rem", borderRadius: 100, background: "rgba(255,255,255,0.6)", border: `1px solid ${level.color}55`, fontSize: "0.75rem", fontWeight: 900, color: level.color }}>
                       {parts[3]}
                    </div>
                 </div>
               </motion.div>
             )
          })}
        </div>

      </div>
    </div>
  );
}
