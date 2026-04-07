"use client";

import React from "react";

import { Monitor, Cpu, Users, CheckCircle2, Server, Globe2, ShieldCheck, BarChart3, Database } from "lucide-react";
import { motion } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK, DARK_BORDER } from "../components/Constants";
import { parseListItems, parseBoldLabel } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

export default function LayoutInvestment({ title, subtitle, body }: LayoutProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  const items = parseListItems(body);

  React.useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const pillarIcons = [Monitor, Cpu, Users];
  const pillarColors = [PRIMARY, GOLD, "#3B82F6"];

  return (
    <motion.div initial="hidden" animate="show" variants={container} style={{ height: "100%", display: "flex", flexDirection: "column", gap: isMobile ? "1.5rem" : "3rem" }}>
      {/* HEADER */}
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "0.8rem", fontWeight: 900, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.6rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em", margin: 0 }}>{title}</h2>
      </div>

      {/* INVESTMENT PILLARS */}
      <div style={{ 
        display: "flex", 
        flexDirection: isMobile ? "column" : "row", 
        gap: isMobile ? "1.5rem" : "2.5rem", 
        justifyContent: "center",
        flex: 1
      }}>
        {items.map((item: string, idx: number) => {
          const { label, rest } = parseBoldLabel(item);
          const Icon = pillarIcons[idx % pillarIcons.length];
          const color = pillarColors[idx % pillarColors.length];
          
          // Split sub-features if present in body (using | or similar if I update data)
          // For now, let's assume body might have detailed sub-items in the string
          const subFeatures = rest.split("|").map(s => s.trim());

          return (
            <motion.div 
              key={idx} 
              variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              whileHover={{ y: -8, boxShadow: `0 30px 60px ${color}15` }}
              style={{ 
                flex: 1, 
                ...GLASS_DARK, 
                borderRadius: 32, 
                padding: "2.5rem", 
                border: `1px solid ${color}33`, 
                display: "flex", 
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
              }}
            >
               {/* Accent Glow */}
               <div style={{ position: "absolute", top: -50, right: -50, width: 150, height: 150, background: `${color}10`, filter: "blur(40px)", borderRadius: "50%" }} />
               
               <div style={{ width: 64, height: 64, borderRadius: 18, background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", border: `1px solid ${color}44` }}>
                  <Icon size={32} color={color} />
               </div>

               <h3 style={{ fontSize: "1.35rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>{label}</h3>
               
               <div style={{ height: 1, width: "40px", background: color, marginBottom: "1.5rem" }} />

               <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                  {subFeatures.map((feat, fidx) => (
                    <div key={fidx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                       <CheckCircle2 size={16} color={color} style={{ marginTop: "3px", flexShrink: 0 }} />
                       <span style={{ fontSize: "0.9rem", color: TEXT_MAIN, lineHeight: 1.5, fontWeight: 500 }}>{feat}</span>
                    </div>
                  ))}
               </div>

               <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ flex: 1, height: 6, background: "rgba(255,255,255,0.05)", borderRadius: 3, overflow: "hidden" }}>
                     <motion.div 
                       initial={{ width: 0 }} 
                       animate={{ width: "85%" }} 
                       transition={{ duration: 1.5, delay: 1 + idx * 0.2 }}
                       style={{ height: "100%", background: color }} 
                     />
                  </div>
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: color, letterSpacing: "0.1em" }}>READY</span>
               </div>
            </motion.div>
          );
        })}
      </div>

      {/* SYSTEM CAPACITY HUD */}
      {!isMobile && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 2 }}
          style={{ display: "flex", justifyContent: "center", gap: "4rem", padding: "1.5rem", background: "rgba(0,0,0,0.4)", borderRadius: 24, border: `1px solid rgba(255,255,255,0.05)`, backdropFilter: "blur(10px)" }}
        >
           <StatItem icon={Database} label="DATA CAPACITY" value="100k+ MSG/DAY" color={PRIMARY} />
           <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.1)", alignSelf: "center" }} />
           <StatItem icon={Globe2} label="GLOBAL UPTIME" value="99.98%" color={GOLD} />
           <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.1)", alignSelf: "center" }} />
           <StatItem icon={ShieldCheck} label="SECURITY PASS" value="GOV-GRADE" color="#10B981" />
        </motion.div>
      )}
    </motion.div>
  );
}

interface StatItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}

function StatItem({ icon: Icon, label, value, color }: StatItemProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
       <Icon size={24} color={color} />
       <div>
          <div style={{ fontSize: "0.6rem", color: TEXT_MUTED, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase" }}>{label}</div>
          <div style={{ fontSize: "1.1rem", color: TEXT_MAIN, fontWeight: 950 }}>{value}</div>
       </div>
    </div>
  );
}
