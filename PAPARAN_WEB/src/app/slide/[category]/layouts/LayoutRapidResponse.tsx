import React from "react";
import { ShieldAlert, Users, RadioTower, Mic, Siren, Hexagon, ArrowRight, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { InlineText } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: {title: string, desc: string, metric?: string}[];
}

export default function LayoutRapidResponse({ title, subtitle, body, features }: LayoutProps) {
  const items = features || [];
  
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemFade: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  // Safe checks for data mapping
  const komando = items[0] || { title: "Komposisi Tim", desc: "" };
  const jalur = items[1] || { title: "Jalur Komunikasi Khusus", desc: "", metric: "Siaga Merah" };
  const otoritas = items[2] || { title: "Otoritas Komunikasi", desc: "" };

  return (
    <motion.div initial="hidden" animate="show" variants={container} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      
      {/* HEADER */}
      <div style={{ marginBottom: "2rem", display: "flex", gap: "2rem", alignItems: "flex-end" }}>
         <div style={{ flex: 1 }}>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: `rgba(239,68,68,0.15)`, padding: "6px 16px", borderRadius: 20, border: `1px solid rgba(239,68,68,0.5)`, marginBottom: "1rem" }}
            >
              <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                 <Siren size={14} color="#EF4444" />
              </motion.div>
              <span style={{ fontSize: "0.75rem", fontWeight: 900, letterSpacing: "0.22em", color: "#EF4444", textTransform: "uppercase" }}>{subtitle}</span>
            </motion.div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em", margin: "0 0 1rem 0" }}>{title}</h2>
            {body && <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, lineHeight: 1.6, maxWidth: "800px", margin: 0 }}>{body}</p>}
         </div>
      </div>

      {/* BODY DASHBOARD */}
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gridTemplateRows: "1fr 1fr", gap: "1.5rem", flex: 1, minHeight: 0 }}>
        
        {/* LEFT BLOCK: STRUKTUR KOMANDO (Spans 2 rows) */}
        <motion.div 
           variants={itemFade}
           style={{ ...GLASS_DARK, borderRadius: 24, padding: "2.5rem", gridRow: "span 2", position: "relative", overflow: "hidden", border: `1px solid rgba(255,255,255,0.05)` }}
        >
           {/* Decorator Lines */}
           <div style={{ position: "absolute", top: 0, left: 30, width: 4, height: "100%", background: `linear-gradient(to bottom, ${GOLD}, rgba(255,183,3,0.1))` }} />
           
           <div style={{ marginLeft: "3rem", height: "100%", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                 <div style={{ width: 50, height: 50, borderRadius: 16, background: `rgba(255,183,3,0.1)`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${GOLD}44` }}>
                   <Users size={24} color={GOLD} />
                 </div>
                 <h3 style={{ fontSize: "1.4rem", fontWeight: 900, color: TEXT_MAIN, margin: 0 }}>{komando.title}</h3>
              </div>
              
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                 <p style={{ fontSize: "1rem", color: TEXT_MUTED, lineHeight: 1.6, margin: "0 0 1rem 0" }}>{komando.desc}</p>
                 
                 {/* Visual Hierarchy */}
                 <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
                       <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(255,183,3,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}><Hexagon size={20} color={GOLD} /></div>
                       <div><div style={{ fontSize: "0.8rem", color: TEXT_MUTED, fontWeight: 700 }}>Panglima Krisis</div><div style={{ fontSize: "1.1rem", color: TEXT_MAIN, fontWeight: 900 }}>Wali Kota / Wakil</div></div>
                    </div>
                    
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", marginLeft: "1.5rem" }}>
                       <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(33,150,243,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}><Hexagon size={20} color="#2196F3" /></div>
                       <div><div style={{ fontSize: "0.8rem", color: TEXT_MUTED, fontWeight: 700 }}>Koordinator Operasional</div><div style={{ fontSize: "1.1rem", color: TEXT_MAIN, fontWeight: 900 }}>Sekretaris Daerah (Sekda)</div></div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", background: `linear-gradient(135deg, rgba(225,48,108,0.2) 0%, rgba(225,48,108,0.05) 100%)`, padding: "1.5rem", borderRadius: 20, border: `1px solid rgba(225,48,108,0.5)`, marginLeft: "3rem", boxShadow: "0 8px 32px rgba(225,48,108,0.25)", position: "relative" }}>
                       <div style={{ width: 50, height: 50, borderRadius: 14, background: `rgba(225,48,108,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(225,48,108,0.4)" }}><Zap size={28} color="#E1306C" /></div>
                       <div>
                          <div style={{ fontSize: "0.85rem", color: "#E1306C", fontWeight: 950, letterSpacing: "0.1em", marginBottom: "4px" }}>ORKESTRATOR UTAMA KEDARURATAN INFORMASI</div>
                          <div style={{ fontSize: "1.3rem", color: TEXT_MAIN, fontWeight: 950, letterSpacing: "-0.02em" }}>Tim Khusus Sukabumi Media Center (SMC)</div>
                       </div>
                       <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: 20, border: "2px solid rgba(225,48,108,0.3)" }} />
                    </div>

                    <div style={{ display: "flex", gap: "1rem", marginLeft: "1.5rem" }}>
                       <div style={{ display: "flex", alignItems: "center", gap: "1rem", background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", flex: 1 }}>
                          <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(16,185,129,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}><Hexagon size={20} color="#10B981" /></div>
                          <div><div style={{ fontSize: "0.8rem", color: TEXT_MUTED, fontWeight: 700 }}>Komandan Taktis</div><div style={{ fontSize: "1rem", color: TEXT_MAIN, fontWeight: 900 }}>Kadiskominfo</div></div>
                       </div>
                       <div style={{ display: "flex", alignItems: "center", gap: "1rem", background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", flex: 1 }}>
                          <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(16,185,129,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}><Hexagon size={20} color="#10B981" /></div>
                          <div><div style={{ fontSize: "0.8rem", color: TEXT_MUTED, fontWeight: 700 }}>Ahli Teknis</div><div style={{ fontSize: "1rem", color: TEXT_MAIN, fontWeight: 900 }}>Kepala OPD Terkait</div></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* TOP RIGHT BLOCK: JALUR KOMUNIKASI KHUSUS */}
        <motion.div 
           variants={itemFade}
           whileHover={{ scale: 1.02 }}
           style={{ ...GLASS_DARK, borderRadius: 24, padding: "2rem", display: "flex", flexDirection: "column", border: `1px solid rgba(239,68,68,0.2)`, boxShadow: `0 10px 40px rgba(239,68,68,0.08)`, position: "relative", overflow: "hidden" }}
        >
           {/* Flashing Red Background Element */}
           <motion.div animate={{ opacity: [0.02, 0.08, 0.02] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(circle at top right, rgba(239,68,68,0.6) 0%, transparent 70%)" }} />
           
           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", position: "relative", zIndex: 1 }}>
              <div style={{ width: 50, height: 50, borderRadius: 16, background: `rgba(239,68,68,0.15)`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid rgba(239,68,68,0.5)` }}>
                <RadioTower size={24} color="#EF4444" />
              </div>
              {jalur.metric && (
                 <div style={{ background: "#EF4444", padding: "4px 12px", borderRadius: 12, display: "flex", alignItems: "center", gap: "6px" }}>
                    <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} style={{ width: 6, height: 6, borderRadius: "50%", background: "white" }} />
                    <span style={{ fontSize: "0.75rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "0.05em", textTransform: "uppercase" }}>{jalur.metric}</span>
                 </div>
              )}
           </div>
           
           <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.5rem" }}>{jalur.title}</h3>
              <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>
                 <InlineText text={jalur.desc} />
              </p>
           </div>
        </motion.div>

        {/* BOTTOM RIGHT BLOCK: OTORITAS KOMUNIKASI (SINGLE VOICE) */}
        <motion.div 
           variants={itemFade}
           whileHover={{ scale: 1.02 }}
           style={{ ...GLASS_DARK, borderRadius: 24, padding: "2rem", display: "flex", flexDirection: "column", border: `1px solid ${PRIMARY}33`, position: "relative", overflow: "hidden" }}
        >
           <div style={{ position: "absolute", bottom: -20, right: -20, opacity: 0.05, transform: "rotate(-15deg)" }}><Mic size={150} /></div>
           
           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", position: "relative", zIndex: 1 }}>
              <div style={{ width: 50, height: 50, borderRadius: 16, background: `${PRIMARY}15`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${PRIMARY}44` }}>
                <Mic size={24} color={PRIMARY} />
              </div>
              <div style={{ background: `${PRIMARY}33`, padding: "4px 12px", borderRadius: 12, fontSize: "0.75rem", fontWeight: 900, color: PRIMARY, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                 <InlineText text={otoritas.metric || "SINGLE SOURCE"} />
              </div>
           </div>
           
           <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.5rem" }}>{otoritas.title}</h3>
              <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>
                 <InlineText text={otoritas.desc} />
              </p>
           </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
