import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, ShieldAlert, Zap, AlertTriangle, ShieldCheck, Target, ChevronRight } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: { title: string, desc: string }[];
}

export default function LayoutSWOT({ title, subtitle, body, features }: LayoutProps) {
  // Use features if provided, otherwise fallback to parsing body
  const rawItems = features ? features.map(f => `**${f.title}**: ${f.desc}`) : parseListItems(body);
  
  const swotConfig = [
    { 
      label: "STRENGTHS", 
      icon: TrendingUp, 
      color: "#10B981", 
      bg: "rgba(16,185,129,0.05)",
      border: "rgba(16,185,129,0.3)",
      desc: "Internal advantages & core assets"
    },
    { 
      label: "WEAKNESSES", 
      icon: ShieldAlert, 
      color: "#F43F5E", 
      bg: "rgba(244,63,94,0.05)",
      border: "rgba(244,63,94,0.3)",
      desc: "Internal limitations & gaps"
    },
    { 
      label: "OPPORTUNITIES", 
      icon: Zap, 
      color: GOLD, 
      bg: "rgba(212,175,55,0.05)",
      border: "rgba(212,175,55,0.3)",
      desc: "External growth & expansion paths"
    },
    { 
      label: "THREATS", 
      icon: AlertTriangle, 
      color: "#A855F7", 
      bg: "rgba(168,85,247,0.05)",
      border: "rgba(168,85,247,0.3)",
      desc: "External risks & disruptions"
    }
  ];

  return (
    <div style={{ 
      height: "100%", 
      display: "flex", 
      flexDirection: "column", 
      gap: "1.5rem",
      position: "relative"
    }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <p style={{ fontSize: "0.85rem", fontWeight: 950, letterSpacing: "0.3em", color: PRIMARY, textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 1000, color: "white", margin: 0, letterSpacing: "-0.04em" }}>{title}</h2>
          <div style={{ height: 4, width: 80, background: GOLD, marginTop: "1rem", borderRadius: 2 }} />
        </motion.div>
        
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          style={{ ...GLASS_DARK, padding: "0.75rem 1.5rem", borderRadius: 16, border: `1px solid ${PRIMARY}33`, display: "flex", alignItems: "center", gap: "1rem", backdropFilter: "blur(20px)" }}
        >
           <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${GOLD}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ShieldCheck size={20} color={GOLD} />
           </div>
           <div>
              <div style={{ fontSize: "0.6rem", fontWeight: 950, color: TEXT_MUTED, letterSpacing: "0.1em" }}>AUDIT STATUS</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 1000, color: "white" }}>VERIFIED v2.5</div>
           </div>
        </motion.div>
      </div>

      {/* SUMMARY BAR */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ fontSize: "1.1rem", color: TEXT_MUTED, lineHeight: 1.6, maxWidth: "900px", fontWeight: 500, borderLeft: `4px solid ${GOLD}44`, paddingLeft: "1.5rem" }}
      >
        <InlineText text={body} />
      </motion.div>

      {/* SWOT GRID */}
      <div style={{ 
        flex: 1, 
        display: "grid", 
        gridTemplateColumns: "1fr 1fr", 
        gridTemplateRows: "1fr 1fr", 
        gap: "1.5rem", 
        position: "relative",
        paddingBottom: "1rem"
      }}>
        
        {/* Central Hub Decoration */}
        <div style={{ 
          position: "absolute", 
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)",
          width: "140px",
          height: "140px",
          zIndex: 10,
          pointerEvents: "none"
        }}>
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             style={{ 
               width: "100%", height: "100%", border: `1px dashed ${PRIMARY}22`, borderRadius: "50%",
               display: "flex", alignItems: "center", justifyContent: "center"
             }}
           >
              <div style={{ width: "75%", height: "75%", background: "rgba(0,0,0,0.9)", borderRadius: "50%", border: `2px solid ${GOLD}44`, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(15px)", boxShadow: `0 0 30px ${GOLD}22` }}>
                 <Target size={24} color={GOLD} />
              </div>
           </motion.div>
        </div>

        {swotConfig.map((config, index) => {
          const item = rawItems[index];
          if (!item) return null;
          const { label, rest } = parseBoldLabel(item);
          const Icon = config.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)", borderColor: config.color }}
              style={{
                ...GLASS_DARK,
                borderRadius: 24,
                padding: "2rem",
                border: `1px solid ${config.border}`,
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 15px 45px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease"
              }}
            >
              {/* Corner Accent */}
              <div style={{ 
                position: "absolute", top: 0, right: 0, width: "120px", height: "120px",
                background: `radial-gradient(circle at top right, ${config.color}22, transparent 70%)`
              }} />

              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", zIndex: 1 }}>
                <div style={{ 
                  width: 56, height: 56, borderRadius: 18, 
                  background: `${config.color}15`,
                  border: `1px solid ${config.color}33`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 8px 20px ${config.color}11`
                }}>
                  <Icon size={28} color={config.color} />
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 1000, color: config.color, letterSpacing: "0.2em" }}>{config.label}</div>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, color: TEXT_MUTED }}>{config.desc}</div>
                </div>
              </div>

              <div style={{ flex: 1, zIndex: 1 }}>
                 <h3 style={{ fontSize: "1.45rem", fontWeight: 1000, color: "white", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>{label}</h3>
                 <p style={{ fontSize: "1rem", color: TEXT_MAIN, lineHeight: 1.8, fontWeight: 500, margin: 0, opacity: 0.95 }}>
                    <InlineText text={rest} />
                 </p>
              </div>

              {/* DYNAMIC TELEMETRY */}
              <div style={{ zIndex: 1, marginTop: "0.5rem" }}>
                 <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", alignItems: "center" }}>
                    <span style={{ fontSize: "0.65rem", fontWeight: 950, color: TEXT_MUTED, letterSpacing: "0.1em" }}>STRATEGIC DENSITY</span>
                    <span style={{ fontSize: "0.7rem", fontWeight: 1000, color: config.color }}>{85 + index * 3}%</span>
                 </div>
                 <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: 10, position: "relative", overflow: "hidden" }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${85 + index * 3}%` }}
                      transition={{ duration: 2, delay: 1 + (index * 0.2) }}
                      style={{ height: "100%", background: `linear-gradient(90deg, ${config.color}, #fff)`, borderRadius: 10, boxShadow: `0 0 15px ${config.color}55` }}
                    />
                 </div>
              </div>

              {/* ACTION CALLOUT */}
              <div style={{ 
                marginTop: "0.5rem", padding: "0.75rem 1rem", 
                background: `${config.color}08`, borderRadius: 12, 
                border: `1px solid ${config.color}11`,
                display: "flex", alignItems: "center", gap: "0.75rem"
              }}>
                 <Zap size={14} color={config.color} />
                 <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "white", opacity: 0.8 }}>
                    {index < 2 ? "INTERNAL RESPONSE ACTIVE" : "EXTERNAL MONITORING ON"}
                 </span>
                 <motion.div 
                   animate={{ opacity: [1, 0.4, 1] }} 
                   transition={{ repeat: Infinity, duration: 1.5 }}
                   style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: config.color }} 
                 />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
