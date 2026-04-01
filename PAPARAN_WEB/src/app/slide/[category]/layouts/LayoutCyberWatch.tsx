import React from "react";
import { Radar, Activity, Eye, ShieldAlert, Cpu, SearchCode, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { InlineText } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: {title: string, desc: string, metric?: string, sub?: string}[];
}

export default function LayoutCyberWatch({ title, subtitle, body, features }: LayoutProps) {
  const items = features || [];
  const Icons = [SearchCode, Cpu, Eye, ShieldAlert, Radar, Activity];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const itemFade = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <motion.div initial="hidden" animate="show" variants={container} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      
      {/* Header section */}
      <div style={{ marginBottom: "2rem" }}>
         <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: `rgba(225,48,108,0.15)`, padding: "6px 16px", borderRadius: 20, border: `1px solid ${PRIMARY}55`, marginBottom: "1rem" }}
         >
           <div style={{ width: 8, height: 8, borderRadius: "50%", background: PRIMARY, boxShadow: `0 0 10px ${PRIMARY}` }} />
           <span style={{ fontSize: "0.75rem", fontWeight: 900, letterSpacing: "0.22em", color: PRIMARY, textTransform: "uppercase" }}>{subtitle}</span>
         </motion.div>
         <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em", margin: "0 0 1rem 0" }}>{title}</h2>
         {body && (
            <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, lineHeight: 1.6, maxWidth: "800px", margin: 0 }}>
               {body}
            </p>
         )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "3rem", flex: 1, alignItems: "center" }} className="grid-responsive">
        
        {/* LEFT: Cyber Radar Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%" }}
        >
           <div style={{ position: "relative", width: "clamp(280px, 100%, 420px)", aspectRatio: "1/1", borderRadius: "50%", border: `2px solid rgba(225,48,108,0.2)`, display: "flex", alignItems: "center", justifyContent: "center", background: "radial-gradient(circle, rgba(225,48,108,0.05) 0%, transparent 70%)" }}>
              {/* Radar Grid Circles */}
              <div style={{ position: "absolute", width: "75%", height: "75%", borderRadius: "50%", border: `1px solid rgba(255,183,3,0.15)` }} />
              <div style={{ position: "absolute", width: "50%", height: "50%", borderRadius: "50%", border: `1px solid rgba(225,48,108,0.3)` }} />
              <div style={{ position: "absolute", width: "25%", height: "25%", borderRadius: "50%", border: `1px dashed rgba(255,255,255,0.2)` }} />
              <div style={{ position: "absolute", width: "1%", height: "100%", background: "rgba(225,48,108,0.1)" }} />
              <div style={{ position: "absolute", width: "100%", height: "1%", background: "rgba(225,48,108,0.1)" }} />

              {/* Sweeping Scanner */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute", inset: 0, borderRadius: "50%", zIndex: 5,
                  background: `conic-gradient(from 0deg, transparent 0deg, rgba(225,48,108,0.1) 60deg, rgba(225,48,108,0.6) 90deg, transparent 90deg)`
                }}
              />

              {/* Center Dot */}
              <div style={{ position: "absolute", width: 12, height: 12, borderRadius: "50%", background: "white", zIndex: 10, boxShadow: `0 0 20px 5px ${PRIMARY}` }} />

              {/* Blips */}
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} style={{ position: "absolute", top: "25%", left: "30%", width: 8, height: 8, borderRadius: "50%", background: GOLD, boxShadow: `0 0 10px ${GOLD}`, zIndex: 6 }} />
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 2.1 }} style={{ position: "absolute", bottom: "35%", right: "20%", width: 6, height: 6, borderRadius: "50%", background: "#10B981", boxShadow: `0 0 10px #10B981`, zIndex: 6 }} />
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 3.2 }} style={{ position: "absolute", top: "60%", left: "70%", width: 10, height: 10, borderRadius: "50%", background: PRIMARY, boxShadow: `0 0 10px ${PRIMARY}`, zIndex: 6 }} />
              
              {/* Overlay Badge */}
              <div style={{ position: "absolute", bottom: -20, background: "rgba(0,0,0,0.8)", padding: "10px 24px", borderRadius: 30, border: `1px solid ${PRIMARY}55`, backdropFilter: "blur(10px)", zIndex: 20, display: "flex", gap: 10, alignItems: "center", boxShadow: `0 10px 30px rgba(0,0,0,0.5)` }}>
                 <Radar size={20} color={PRIMARY} />
                 <span style={{ fontSize: "0.85rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "0.1em" }}>ACTIVE CYBER PATROL</span>
              </div>
           </div>
        </motion.div>

        {/* RIGHT: Feature Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", overflowY: "auto", paddingRight: 10 }} className="custom-scroll">
          {items.map((item, i) => {
            const CIcon = Icons[i % Icons.length];
            const isAlert = item.title.includes("Sensitif") || item.title.includes("Patroli");
            const highlightColor = isAlert ? PRIMARY : GOLD;

            return (
              <motion.div 
                key={i} 
                variants={itemFade as any}
                whileHover={{ x: -10, backgroundColor: "rgba(255,255,255,0.04)" }}
                style={{ 
                  ...GLASS_DARK, 
                  borderRadius: 20, 
                  padding: "1.5rem", 
                  borderLeft: `4px solid ${highlightColor}`,
                  position: "relative",
                  overflow: "hidden"
                }}
                className="card-hover"
              >
                 <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: `${highlightColor}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${highlightColor}44` }}>
                       <CIcon size={24} color={highlightColor} />
                    </div>
                    <div style={{ flex: 1 }}>
                       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                          <h3 style={{ fontSize: "1.1rem", fontWeight: 900, color: TEXT_MAIN, margin: 0 }}>{item.title}</h3>
                          {item.metric && (
                             <div style={{ background: `${highlightColor}22`, padding: "4px 10px", borderRadius: 12, fontSize: "0.7rem", color: highlightColor, fontWeight: 900, letterSpacing: "0.05em" }}>
                               {item.metric}
                             </div>
                          )}
                       </div>
                       <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.5, margin: 0 }}>
                          <InlineText text={item.desc} />
                       </p>
                    </div>
                 </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
}
