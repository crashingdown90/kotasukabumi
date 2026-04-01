import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldAlert, CheckCircle2, MessageSquare, AlertTriangle, Radio, Activity, Target } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

export default function LayoutActionPlan({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const colors = [PRIMARY, GOLD, "#3B82F6", "#10B981"];
  const ActionIcons = [Activity, Radio, ShieldAlert, Target];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "2rem", animation: "animate-up 0.8s ease-out" }}>
      <div>
        <p style={{ fontSize: "0.85rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.6rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 1000, color: TEXT_MAIN, margin: 0, letterSpacing: "-0.04em", lineHeight: 1.1 }}>{title}</h2>
      </div>

      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", flex: 1, minHeight: 0 }}>
        
        {/* ── ACTION PLAN TIMELINE VISUAL ─────────────────────── */}
        <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
           
           <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", position: "relative" }}>
              {/* Connecting Line (Horizontal) */}
              <div style={{ position: "absolute", top: "50%", left: "10%", right: "10%", height: "2px", background: "rgba(255,255,255,0.05)", zIndex: 0 }} />
              
              {items.map((item, i) => {
                 const { label, rest } = parseBoldLabel(item);
                 const color = colors[i % colors.length];
                 const Icon = ActionIcons[i % ActionIcons.length];

                 return (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 30 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.1 * i, duration: 0.6 }}
                       style={{ 
                          ...GLASS_DARK, borderRadius: 28, padding: "2rem",
                          border: `1px solid ${color}33`, position: "relative",
                          zIndex: i + 1, background: `linear-gradient(135deg, ${color}08, transparent)`
                       }}
                    >
                       <div style={{ 
                          width: 64, height: 64, borderRadius: 18, 
                          background: `${color}15`, border: `1px solid ${color}33`, 
                          display: "flex", alignItems: "center", justifyContent: "center", 
                          marginBottom: "1.5rem", boxShadow: `0 10px 30px ${color}15`
                       }}>
                          <Icon size={32} color={color} />
                       </div>

                       <div style={{ 
                          display: "inline-block", padding: "0.4rem 1rem", 
                          background: color, borderRadius: 10, color: TEXT_MAIN, 
                          fontSize: "0.85rem", fontWeight: 1000, marginBottom: "1rem" 
                       }}>
                          {['T-60', 'T-45', 'T-30', 'T-00'][i]}
                       </div>

                       <div style={{ fontSize: "1.25rem", fontWeight: 950, color: TEXT_MAIN, marginBottom: "0.6rem" }}>{label}</div>
                       <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.5, fontWeight: 500 }}>
                          <InlineText text={rest} />
                       </p>
                    </motion.div>
                 );
              })}
           </div>

           {/* ── ADDITIONAL CONTEXT BAR ────────────────────────── */}
           <div style={{ ...GLASS_DARK, borderRadius: 24, padding: "1.5rem 3rem", display: "flex", alignItems: "center", gap: "3rem", borderTop: `8px solid ${PRIMARY}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                 <div style={{ width: 12, height: 12, borderRadius: "50%", background: PRIMARY }}>
                    <motion.div animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: "100%", height: "100%", borderRadius: "50%", background: PRIMARY }} />
                 </div>
                 <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 950, color: GOLD, letterSpacing: "0.15em" }}>OPERATIONAL STATUS</div>
                    <div style={{ fontSize: "1rem", fontWeight: 900, color: TEXT_MAIN }}>READY FOR ESCALATION</div>
                 </div>
              </div>
              
              <div style={{ width: 2, height: 40, background: "rgba(255,255,255,0.05)" }} />
              
              <div style={{ flex: 1, fontSize: "0.95rem", color: TEXT_MUTED, fontWeight: 600, fontStyle: "italic" }}>
                 "KEPEMIMPINAN DALAM KRISIS ADALAH TENTANG KEHADIRAN, KEJERNIHAN, DAN KECEPATAN NARASI."
              </div>
              
              <div style={{ display: "flex", gap: "0.75rem" }}>
                 <div style={{ padding: "0.5rem 1.25rem", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", fontSize: "0.75rem", fontWeight: 900, color: TEXT_MAIN }}>
                    LEVEL 4 CRISIS
                 </div>
              </div>
           </div>

        </div>

      </div>
    </div>
  );
}
