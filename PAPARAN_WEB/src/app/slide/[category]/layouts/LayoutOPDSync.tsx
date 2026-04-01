import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, HardHat, HeartPulse, GraduationCap, Building2, Trees, LayoutGrid, Zap } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";

interface cluster {
  title: string;
  desc: string;
}

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: cluster[];
}

export default function LayoutOPDSync({ title, subtitle, body, features }: LayoutProps) {
  const clusters = features || [
    { title: "Infrastructure Cluster", desc: "DPUTR, DISHUB, PERKIM" },
    { title: "Social & Health", desc: "DINKES, DINSOS, DPPKB" },
    { title: "Economy & SME", desc: "DISKUMINDAG, DPKP" },
    { title: "Education & Culture", desc: "DISDIKBUD, DISPORAPAR" },
    { title: "Regional & Law", desc: "SETDA, SATPOL PP, BPBD" },
    { title: "Digital & Tech", desc: "DISKOMINFO, BKPSDM" }
  ];

  const icons = [HardHat, HeartPulse, Building2, GraduationCap, ShieldAlert, Zap];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "2rem", position: "relative" }}>
      
      {/* HEADER SECTION */}
      <div>
        <p style={{ fontSize: "0.8rem", fontWeight: 900, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 950, color: TEXT_MAIN, margin: 0, letterSpacing: "-0.03em" }}>{title}</h2>
        <p style={{ fontSize: "1.1rem", color: TEXT_MUTED, maxWidth: "800px", marginTop: "1rem" }}>{body}</p>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", minHeight: "500px" }}>
        
        {/* CENTRAL CORE - NARRATIVE HUB */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], boxShadow: [`0 0 50px ${PRIMARY}44`, `0 0 100px ${PRIMARY}66`, `0 0 50px ${PRIMARY}44`] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            width: 220, height: 220, borderRadius: "50%", 
            background: `linear-gradient(135deg, ${PRIMARY}, #8E1540)`, 
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", 
            border: `4px solid ${GOLD}44`, zIndex: 10, position: "relative"
          }}
        >
          <LayoutGrid size={50} color="white" />
          <div style={{ color: TEXT_MAIN, fontWeight: 950, fontSize: "1.1rem", textAlign: "center", marginTop: "0.5rem", letterSpacing: "0.1em" }}>STRATEGIC<br/>CLEARANCE HUB</div>
          <div style={{ color: GOLD, fontSize: "0.6rem", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase" }}>ONE VOICE POLICY</div>
        </motion.div>

        {/* SATELLITE CLUSTERS */}
        {clusters.map((cl, i) => {
          const angle = (i * 60) - 90;
          const rad = (angle * Math.PI) / 180;
          const r = 260;
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;
          const Icon = icons[i % icons.length];

          return (
            <React.Fragment key={i}>
               {/* Connecting Line */}
               <motion.div 
                 initial={{ opacity: 0, width: 0 }}
                 animate={{ opacity: 0.3, width: r - 110 }}
                 style={{ 
                   position: "absolute", height: "2px", background: `linear-gradient(90deg, ${GOLD}, transparent)`,
                   left: "50%", top: "50%", originX: 0, 
                   transform: `rotate(${angle}deg) translateX(110px)`,
                   zIndex: 1
                 }}
               />
               {/* Pulsing Data Dot */}
               <motion.div 
                 initial={{ opacity: 0, x: 0 }}
                 animate={{ opacity: [0, 1, 0], x: [110, r - 20, 110] }}
                 transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                 style={{ 
                    position: "absolute", width: 8, height: 8, borderRadius: "50%", background: GOLD,
                    zIndex: 2, left: "50%", top: "50%", originX: 0,
                    transform: `rotate(${angle}deg)`
                 }}
               />

               <motion.div
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1, x, y }}
                 transition={{ delay: i * 0.15 + 0.5 }}
                 style={{ 
                   position: "absolute", 
                   width: 180, 
                   display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                   zIndex: 15
                 }}
               >
                  <div style={{ 
                    width: 60, height: 70, borderRadius: 16, 
                    background: GLASS_DARK.background,
                    border: `1.5px solid ${GOLD}44`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    backdropFilter: "blur(10px)",
                    marginBottom: "1rem"
                  }}>
                    <Icon size={28} color={GOLD} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, color: TEXT_MAIN, fontSize: "0.95rem", fontWeight: 900, marginBottom: "0.25rem" }}>{cl.title}</h3>
                    <p style={{ margin: 0, color: TEXT_MUTED, fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{cl.desc}</p>
                  </div>
               </motion.div>
            </React.Fragment>
          );
        })}

      </div>

    </div>
  );
}
