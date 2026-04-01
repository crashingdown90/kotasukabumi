import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, AlertTriangle, MessageSquare, TrendingUp, Search, Radio, Database, Globe } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

const newsTicks = [
  "LONJAKAN ISU JALAN RUSAK (+15%) DI CIKOLE",
  "HOAKS BANSOS TERDETEKSI - SEGERA KLARIFIKASI",
  "TREND POSITIF SUKABUMI CREATIVE HUB MENINGKAT",
  "SMC RADAR MENCATAT 450 PERCAKAPAN BARU DALAM 10 MENIT LALU",
  "SENTIMEN BANJIR REDA - EVALUASI DRAINASE MULAI VIRAL",
  "EKSPEKTASI PUBLIK TINGGI TERHADAP PROGRAM PAD"
];

export default function LayoutNewsRadar({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const colors = [PRIMARY, GOLD, "#10B981", "#3B82F6"];
  const icons = [Search, AlertTriangle, Database];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "2rem", animation: "animate-up 0.8s ease-out" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <p style={{ fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.7rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 950, color: TEXT_MAIN, margin: 0, letterSpacing: "-0.04em" }}>{title}</h2>
        </div>
        
        <div style={{ display: "flex", gap: "1rem" }}>
           <div style={{ padding: "0.75rem 1.25rem", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981" }}>
                 <motion.div animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#10B981" }} />
              </div>
              <span style={{ fontSize: "0.65rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "0.15em" }}>AI RADAR ONLINE</span>
           </div>
        </div>
      </div>

      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: "2.5rem", flex: 1, minHeight: 0 }}>
        
        {/* ── LEFT: COMMAND CENTER VISUALS ──────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          <div style={{ flex: 1, ...GLASS_DARK, borderRadius: 32, position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
             {/* Dynamic Hexagon Grid Background */}
             <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(circle at center, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
             
             {/* Central Rotating Scannner */}
             <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ position: "relative", width: 220, height: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", inset: 0, border: `2px dashed ${GOLD}22`, borderRadius: "50%" }} />
                   <motion.div animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", inset: 20, border: `2px solid ${PRIMARY}33`, borderRadius: "50%", borderTopColor: PRIMARY }} />
                   <div style={{ width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 10 }}>
                      <Radio size={50} color={GOLD} />
                   </div>
                   
                   {/* Scanning Beam */}
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                     style={{ position: "absolute", inset: 0, background: "linear-gradient(45deg, transparent 50%, rgba(212,175,55,0.1) 100%)", borderRadius: "50%", zIndex: 5 }} 
                   />
                </div>
                <div style={{ textAlign: "center" }}>
                   <div style={{ fontSize: "2.2rem", fontWeight: 1000, color: TEXT_MAIN, marginBottom: "0.25rem", letterSpacing: "-0.04em" }}>2.500+ <span style={{ color: GOLD }}>Percakapan</span></div>
                   <div style={{ fontSize: "0.85rem", fontWeight: 800, color: TEXT_MUTED, letterSpacing: "0.15em" }}>MONITORED HOURLY IN SUKABUMI</div>
                </div>
             </div>

             {/* Metric Overlays */}
             <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
                {[
                  { label: "PRECISION", val: "99.8%", color: "#10B981" },
                  { label: "LATENCY", val: "< 15MS", color: GOLD },
                  { label: "MODELS", val: "BERT/GPT-4", color: "#3B82F6" }
                ].map((m, i) => (
                  <div key={i} style={{ padding: "0.8rem", borderRadius: 16, background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
                     <div style={{ fontSize: "0.55rem", fontWeight: 900, color: TEXT_MUTED, marginBottom: "0.2rem" }}>{m.label}</div>
                     <div style={{ fontSize: "1.2rem", fontWeight: 950, color: m.color }}>{m.val}</div>
                  </div>
                ))}
             </div>
          </div>

          {/* NEWS TICKER (Scrolling) */}
          <div style={{ ...GLASS_DARK, borderRadius: 20, padding: "1rem 2rem", background: "rgba(255,255,255,0.7)", border: `1px solid ${GOLD}22`, overflow: "hidden", display: "flex", alignItems: "center", gap: "2rem" }}>
             <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", whiteSpace: "nowrap", borderRight: "1px solid rgba(255,255,255,0.1)", paddingRight: "1.5rem" }}>
                <Monitor size={20} color={GOLD} />
                <span style={{ fontSize: "0.75rem", fontWeight: 950, color: GOLD, letterSpacing: "0.1em" }}>LIVE FEED</span>
             </div>
             <div style={{ flex: 1, overflow: "hidden" }}>
                <motion.div 
                  animate={{ x: [0, -1000] }} 
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                  style={{ display: "flex", gap: "4rem", fontSize: "0.9rem", color: TEXT_MAIN, fontWeight: 800, whiteSpace: "nowrap" }}
                >
                   {newsTicks.map((tick, i) => (
                     <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD }} />
                        {tick}
                     </div>
                   ))}
                </motion.div>
             </div>
          </div>
        </div>

        {/* ── RIGHT: FEATURE PILLARS ──────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", justifyContent: "center" }}>
          {items.map((item, i) => {
            const { label, rest } = parseBoldLabel(item);
            const Icon = icons[i % icons.length];
            const color = colors[i % colors.length];

            return (
              <motion.div 
                key={i}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ x: 5, background: "rgba(255,255,255,0.03)" }}
                style={{ 
                   ...GLASS_DARK, borderRadius: 24, padding: "1.5rem", 
                   borderLeft: `5px solid ${color}`, position: "relative",
                }}
              >
                <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                   <div style={{ 
                      width: 48, height: 48, borderRadius: 14, 
                      background: `${color}15`, border: `1px solid ${color}33`, 
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                   }}>
                      <Icon size={24} color={color} />
                   </div>
                   <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "1.15rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.4rem" }}>{label}</div>
                      <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.5, fontWeight: 500 }}>
                         <InlineText text={rest} />
                      </p>
                   </div>
                </div>
              </motion.div>
            );
          })}
          
          <div style={{ marginTop: "1rem", ...GLASS_DARK, borderRadius: 24, padding: "1.5rem", borderLeft: "5px solid #10B981" }}>
             <div style={{ fontSize: "0.75rem", fontWeight: 900, color: "#10B981", letterSpacing: "0.15em", marginBottom: "0.5rem" }}>COMMAND CENTER KPI</div>
             <div style={{ fontSize: "1.3rem", fontWeight: 1000, color: TEXT_MAIN, marginBottom: "0.2rem" }}>94% Akurasi Prediksi</div>
             <div style={{ fontSize: "0.85rem", color: TEXT_MUTED }}>Deep Learning Model: Transformer architecture</div>
          </div>
        </div>

      </div>
    </div>
  );
}
