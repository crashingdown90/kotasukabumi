import React from "react";
import { ShieldCheck, Search, Zap, Send, LayoutList, UserCheck, ArrowRight, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { InlineText } from "../components/Shared";

interface SOPStep {
  title: string;
  desc: string;
  time?: string;
  owner?: string;
  checklist?: string[];
}

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: SOPStep[];
}

export default function LayoutCrisisSOP({ title, subtitle, body, features }: LayoutProps) {
  const items: SOPStep[] = features || [];
  
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemFade = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <motion.div initial="hidden" animate="show" variants={container} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
         <div style={{ flex: 1 }}>
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(16,185,129,0.1)", padding: "6px 16px", borderRadius: 20, border: "1px solid rgba(16,185,129,0.3)", marginBottom: "1rem" }}
            >
              <Settings size={14} color="#10B981" />
              <span style={{ fontSize: "0.75rem", fontWeight: 900, letterSpacing: "0.22em", color: "#10B981", textTransform: "uppercase" }}>{subtitle}</span>
            </motion.div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.04em", margin: 0 }}>{title}</h2>
            {body && <p style={{ fontSize: "1rem", color: TEXT_MUTED, maxWidth: "700px", marginTop: "0.75rem" }}>{body}</p>}
         </div>
         <div style={{ textAlign: "right" }}>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "10px 20px", borderRadius: 16 }}>
               <div style={{ fontSize: "0.65rem", fontWeight: 900, color: TEXT_MUTED, letterSpacing: "0.15em", marginBottom: "4px" }}>LOGISTIC STATUS</div>
               <div style={{ fontSize: "0.9rem", fontWeight: 900, color: "#10B981", display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981" }} />
                  READY TO DEPLOY
               </div>
            </div>
         </div>
      </div>

      {/* DASHBOARD GRID */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", flex: 1 }}>
        {items.map((item, i) => {
          const Icons = [Search, ShieldCheck, Zap, Send];
          const Icon = Icons[i % Icons.length];
          const colors = ["#EF4444", "#3B82F6", "#F59E0B", "#10B981"];
          const accent = colors[i % colors.length];

          return (
            <motion.div 
              key={i} 
              variants={itemFade as any}
              whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.03)", borderColor: `${accent}44` }}
              style={{ 
                ...GLASS_DARK, 
                borderRadius: 24, 
                padding: "1.75rem", 
                display: "flex", 
                flexDirection: "column", 
                border: "1px solid rgba(255,255,255,0.05)",
                position: "relative",
                overflow: "hidden",
                borderTop: `6px solid ${accent}`
              }}
            >
               {/* Time Badge */}
               <div style={{ position: "absolute", top: 15, right: 15, background: `${accent}22`, color: accent, padding: "4px 10px", borderRadius: 8, fontSize: "0.7rem", fontWeight: 950, letterSpacing: "0.05em" }}>
                  {item.time || "00:00"}
               </div>

               <div style={{ width: 44, height: 44, borderRadius: 14, background: `${accent}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", border: `1px solid ${accent}33` }}>
                  <Icon size={22} color={accent} />
               </div>

               <h3 style={{ fontSize: "1.15rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.5rem" }}>{item.title}</h3>
               
               {/* Owner Label */}
               <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "1rem" }}>
                  <UserCheck size={12} color={TEXT_MUTED} />
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase" }}>BY: {item.owner || "SMC TEAM"}</span>
               </div>

               <p style={{ fontSize: "0.85rem", color: TEXT_MAIN, lineHeight: 1.5, margin: "0 0 1.5rem 0", flex: 1 }}>{item.desc}</p>

               {/* Checklist section */}
               <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 16, padding: "1rem", border: "1px solid rgba(255,255,255,0.03)" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 900, color: TEXT_MUTED, letterSpacing: "0.1em", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: 6 }}>
                     <LayoutList size={12} /> ACTION ITEM
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {(item.checklist || []).map((check, ci) => (
                      <div key={ci} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                         <div style={{ width: 14, height: 14, borderRadius: 4, border: `1px solid ${accent}66`, marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: 6, height: 6, borderRadius: 1, background: accent, opacity: 0.8 }} />
                         </div>
                         <span style={{ fontSize: "0.75rem", color: TEXT_MUTED, fontWeight: 500, lineHeight: 1.3 }}>{check}</span>
                      </div>
                    ))}
                  </div>
               </div>
               
               {/* Connection Arrow (Except last) */}
               {i < items.length - 1 && (
                 <div style={{ position: "absolute", right: "-15px", top: "50%", zIndex: 10, color: "rgba(255,255,255,0.1)" }} className="hide-mobile">
                    <ArrowRight size={20} />
                 </div>
               )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
