import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { InlineText } from "../components/Shared";

interface CaseStudyFeature {
  title: string;
  desc: string;
  icon?: string;
  metric?: string;
}

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: CaseStudyFeature[];
}

export default function LayoutCaseStudy({ title, subtitle, body, features }: LayoutProps) {
  const caseSteps = features || [
    { title: "The Crisis / Challenge", desc: "Berita hoax tentang kenaikan tarif RSUD yang memicu kemarahan warga di media sosial.", icon: "AlertTriangle" },
    { title: "Strategic Intervention", desc: "Klarifikasi visual + video testimoni Direktur RSUD + Blast ke 100+ grup WhatsApp warga.", icon: "Lightbulb" },
    { title: "Measurable Impact", desc: "Sentimen berubah positif dlm 45 menit. Jangkauan organik mencapai 150k+ warga.", metric: "Impact Index: 9.8/10", icon: "TrendingUp" }
  ];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "2rem" }}>
      
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <p style={{ fontSize: "0.8rem", fontWeight: 900, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>TACTICAL CASE STUDY</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 950, color: TEXT_MAIN, margin: 0, letterSpacing: "-0.03em" }}>{title}</h2>
          <p style={{ fontSize: "1.1rem", color: TEXT_MUTED, maxWidth: "700px", marginTop: "1rem" }}><InlineText text={body} /></p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", ...GLASS_DARK, padding: "10px 20px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)" }}>
           <CheckCircle2 size={18} color="#10B981" />
           <span style={{ fontSize: "0.7rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "0.1em" }}>CASE VERIFIED & AUDITED</span>
        </div>
      </div>

      {/* CASE CONTENT */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
        
        {/* Step 1: Challenge */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ ...GLASS_DARK, borderRadius: 32, padding: "2rem", border: "1px solid rgba(255,0,0,0.1)", display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
           <div style={{ width: 60, height: 60, borderRadius: 16, background: "rgba(239, 68, 68, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(239, 68, 68, 0.3)" }}>
              <AlertTriangle size={32} color="#EF4444" />
           </div>
           <h3 style={{ margin: 0, color: "#EF4444", fontSize: "1.2rem", fontWeight: 950 }}>{caseSteps[0].title}</h3>
           <p style={{ margin: 0, color: TEXT_MAIN, fontSize: "1rem", lineHeight: 1.6, fontWeight: 600 }}><InlineText text={caseSteps[0].desc} /></p>
        </motion.div>

        {/* Step 2: Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ ...GLASS_DARK, borderRadius: 32, padding: "2rem", border: `2px solid ${GOLD}44`, display: "flex", flexDirection: "column", gap: "1.5rem", boxShadow: `0 20px 60px ${GOLD}11` }}
        >
           <div style={{ width: 60, height: 60, borderRadius: 16, background: `linear-gradient(135deg, ${GOLD}, #B8860B)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 10px 30px ${GOLD}44` }}>
              <Lightbulb size={32} color={PRIMARY} />
           </div>
           <h3 style={{ margin: 0, color: GOLD, fontSize: "1.2rem", fontWeight: 950 }}>{caseSteps[1].title}</h3>
           <p style={{ margin: 0, color: TEXT_MAIN, fontSize: "1rem", lineHeight: 1.6, fontWeight: 700 }}><InlineText text={caseSteps[1].desc} /></p>
           <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "0.5rem", color: GOLD, fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.1em" }}>
              EXECUTION IN PROGRESS <ArrowRight size={12} />
           </div>
        </motion.div>

        {/* Step 3: Result */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          style={{ ...GLASS_DARK, borderRadius: 32, padding: "2rem", border: "1px solid rgba(16, 185, 129, 0.1)", display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
           <div style={{ width: 60, height: 60, borderRadius: 16, background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(16, 185, 129, 0.3)" }}>
              <TrendingUp size={32} color="#10B981" />
           </div>
           <h3 style={{ margin: 0, color: "#10B981", fontSize: "1.2rem", fontWeight: 950 }}>{caseSteps[2].title}</h3>
           <p style={{ margin: 0, color: TEXT_MAIN, fontSize: "1rem", lineHeight: 1.6, fontWeight: 600 }}><InlineText text={caseSteps[2].desc} /></p>
           
           <div style={{ marginTop: "auto", background: "rgba(16, 185, 129, 0.1)", padding: "1.5rem", borderRadius: 20, textAlign: "center", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 950, color: "#10B981" }}>{caseSteps[2].metric?.split(":")[1] || "N/A"}</div>
              <div style={{ fontSize: "0.6rem", fontWeight: 900, color: "#10B981", letterSpacing: "0.2em", textTransform: "uppercase" }}>{caseSteps[2].metric?.split(":")[0] || "KPI RESULT"}</div>
           </div>
        </motion.div>

      </div>

    </div>
  );
}
