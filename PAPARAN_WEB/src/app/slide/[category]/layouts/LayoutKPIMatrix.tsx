import React from "react";
import { Slide, Metric, Feature } from "../components/SlideTypes";

import { Target, Zap, TrendingUp, Users, ShieldCheck, Clock, Share2, Award, Settings, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";

interface KPIItem {
  label: string;
  target: string;
  unit: string;
  icon?: React.ElementType;
}

interface KPICategory {
  title: string;
  color: string;
  items: KPIItem[];
  icon: any;
}

interface LayoutProps {
  title: string;
  subtitle: string;
  features?: Feature[][]; // For structured KPIs
}

export default function LayoutKPIMatrix({ title, subtitle, features }: LayoutProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Default fallbacks if features not provided
  const kpiCategories: KPICategory[] = (features || [
    {
      title: "Response & Resilience",
      color: "#3B82F6",
      icon: Clock,
      items: [
        { label: "Golden Time Speed", target: "< 1", unit: "Hour" },
        { label: "Hoax Mitigation", target: "100", unit: "%" },
        { label: "Crisis Res. Rate", target: "> 95", unit: "%" }
      ]
    },
    {
      title: "Growth & Reach",
      color: "#10B981",
      icon: TrendingUp,
      items: [
        { label: "Follower Growth", target: "+25", unit: "%/Q" },
        { label: "Post Engagement", target: "> 5", unit: "%" },
        { label: "Monthly Impressions", target: "1M+", unit: "Hits" }
      ]
    },
    {
      title: "Sentiment & Trust",
      color: GOLD,
      icon: ShieldCheck,
      items: [
        { label: "Positive Sentiment", target: "85", unit: "%" },
        { label: "Public Confidence", target: "A+", unit: "Grade" },
        { label: "KOL Advocacy", target: "20+", unit: "Units" }
      ]
    },
    {
      title: "Operational Excellence",
      color: "#F43F5E",
      icon: Settings,
      items: [
        { label: "OPD Integration", target: "100", unit: "%" },
        { label: "Report Analytics", target: "Daily", unit: "Sync" },
        { label: "Resource Efficiency", target: "90", unit: "%" }
      ]
    }
  ]) as any;

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <motion.div initial="hidden" animate="show" variants={container} style={{ height: "100%", display: "flex", flexDirection: "column", gap: isMobile ? "1.5rem" : "3rem" }}>
      {/* HEADER */}
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "0.8rem", fontWeight: 900, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.6rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.04em", margin: 0 }}>{title}</h2>
      </div>

      {/* KPI GRID MATRIX */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
        gap: "1.5rem", 
        flex: 1 
      }}>
        {kpiCategories.map((cat, idx) => (
          <motion.div 
            key={idx} 
            variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            style={{ 
              ...GLASS_DARK, 
              borderRadius: 32, 
              padding: "2rem", 
              border: `1px solid ${cat.color}22`,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              background: `linear-gradient(135deg, rgba(13,18,37,0.8), ${cat.color}08)`
            }}
          >
             {/* Category Header */}
             <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: `${cat.color}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <cat.icon size={22} color={cat.color} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 900, color: cat.color, textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>{cat.title}</h3>
             </div>

             {/* Items List */}
             <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.75rem" }}>
                {cat.items.map((item: any, i: number) => (
                   <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", background: "rgba(255,255,255,0.03)", borderRadius: 18, border: "1px solid rgba(255,255,255,0.03)" }}>
                      <div style={{ fontSize: "0.9rem", color: TEXT_MAIN, fontWeight: 600 }}>{item.label}</div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                         <span style={{ fontSize: "1.2rem", fontWeight: 1000, color: TEXT_MAIN }}>{item.target}</span>
                         <span style={{ fontSize: "0.7rem", fontWeight: 800, color: cat.color }}>{item.unit}</span>
                      </div>
                   </div>
                ))}
             </div>
          </motion.div>
        ))}
      </div>

      {/* SUMMARY BAR */}
      {!isMobile && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1.5 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 2.5rem", borderRadius: 24, background: "rgba(13,18,37,0.8)", border: `1px solid ${GOLD}33` }}
        >
           <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 10px #10B981" }} />
              <div style={{ fontSize: "0.8rem", fontWeight: 800, color: TEXT_MAIN }}>ALL SYSTEMS OPERATIONAL</div>
           </div>
           <div style={{ display: "flex", gap: "3rem" }}>
              <div style={{ textAlign: "center" }}>
                 <div style={{ fontSize: "0.6rem", color: TEXT_MUTED, fontWeight: 900 }}>TOTAL METRICS</div>
                 <div style={{ fontSize: "1.1rem", fontWeight: 950, color: GOLD }}>12 PARAMETERS</div>
              </div>
              <div style={{ textAlign: "center" }}>
                 <div style={{ fontSize: "0.6rem", color: TEXT_MUTED, fontWeight: 900 }}>SYSTEM STATUS</div>
                 <div style={{ fontSize: "1.1rem", fontWeight: 950, color: "#10B981" }}>EXEC GRADE</div>
              </div>
           </div>
           <div style={{ background: GOLD, color: "black", padding: "6px 16px", borderRadius: 10, fontSize: "0.7rem", fontWeight: 1000 }}>MASTER KPI REPORT V1.0</div>
        </motion.div>
      )}
    </motion.div>
  );
}
