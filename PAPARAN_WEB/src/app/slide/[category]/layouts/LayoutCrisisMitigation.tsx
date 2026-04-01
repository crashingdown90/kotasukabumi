import React from "react";
import { ShieldAlert, Users, TrendingUp, AlertTriangle, Search, ShieldCheck, Activity, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK, DARK_BORDER } from "../components/Constants";
import { InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

export default function LayoutCrisisMitigation({ title, subtitle, body }: LayoutProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  const items = parseListItems(body);

  React.useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      style={{ height: "100%", display: "flex", flexDirection: "column", gap: isMobile ? "1rem" : "2rem", overflow: isMobile ? "auto" : "hidden" }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "0.8rem", fontWeight: 900, letterSpacing: "0.25em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.04em" }}>{title}</h2>
      </div>

      {/* TOP DASHBOARD (INTEL) */}
      <div style={{ 
        display: "flex", 
        flexDirection: isMobile ? "column" : "row", 
        gap: "1.5rem", 
        flex: 1,
        minHeight: isMobile ? "auto" : "400px"
      }}>
        
        {/* LEFT: BUZZER DETECTION */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ delay: 0.3 }}
          style={{ flex: 1, ...GLASS_DARK, borderRadius: 28, padding: "1.5rem", border: `1px solid ${PRIMARY}33`, display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
             <Users size={20} color={PRIMARY} />
             <span style={{ fontSize: "0.9rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "0.1em" }}>BUZZER CLUSTER DETECTION</span>
          </div>
          
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
             <BuzzerItem user="@info_skbm_provoc" risk="HIGH" probability="98%" />
             <BuzzerItem user="@rakyat_pro_X" risk="HIGH" probability="92%" />
             <BuzzerItem user="@sukabumi_truth_88" risk="MEDIUM" probability="65%" />
             <BuzzerItem user="@anon_news_skb" risk="MEDIUM" probability="54%" />
             <BuzzerItem user="@bot_amplificator" risk="HIGH" probability="99%" />
          </div>
          
          <div style={{ marginTop: "1rem", fontSize: "0.7rem", color: TEXT_MUTED }}>
             <span style={{ color: PRIMARY }}>●</span> Identifying coordinated inauthentic behavior patterns...
          </div>
        </motion.div>

        {/* CENTER: RADAR SCANNER */}
        <div style={{ flex: 1.2, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
           <RadarScanner isMobile={isMobile} />
        </div>

        {/* RIGHT: TRAFFIC ANOMALY */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ delay: 0.5 }}
          style={{ flex: 1, ...GLASS_DARK, borderRadius: 28, padding: "1.5rem", border: `1px solid ${GOLD}33`, display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
             <Activity size={20} color={GOLD} />
             <span style={{ fontSize: "0.9rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "0.1em" }}>TRAFFIC ANOMALY ANALYSIS</span>
          </div>
          
          <div style={{ flex: 1, position: "relative", padding: "10px 0" }}>
             <AnomalyChart />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginTop: "1rem" }}>
             <div style={{ textAlign: "center", padding: "10px", background: "rgba(255,255,255,0.03)", borderRadius: 12 }}>
                <div style={{ fontSize: "0.6rem", color: TEXT_MUTED }}>VOL (MTN/HR)</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 900, color: GOLD }}>1,240 <span style={{ fontSize: "0.6rem", color: "#EF4444" }}>▲</span></div>
             </div>
             <div style={{ textAlign: "center", padding: "10px", background: "rgba(255,255,255,0.03)", borderRadius: 12 }}>
                <div style={{ fontSize: "0.6rem", color: TEXT_MUTED }}>AUTHORS</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 900, color: TEXT_MAIN }}>882</div>
             </div>
          </div>
        </motion.div>

      </div>

      {/* STRATEGY CARDS SECTION */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", 
        gap: "1.5rem",
        marginBottom: isMobile ? "2rem" : "0"
      }}>
         {items.map((item: any, idx: number) => {
           const label = typeof item === 'string' ? item.split(":")[0] : "Modul Kerjasama";
           const desc = typeof item === 'string' ? item.split(":")[1] : item;
           const icons = [ShieldCheck, ShieldAlert, Globe];
           const colors = [PRIMARY, "#EF4444", "#3B82F6"];
           const Icon = icons[idx % icons.length];
           
           return (
             <motion.div 
               key={idx} 
               whileHover={{ y: -5, background: "rgba(255,255,255,0.05)" }}
               style={{ ...GLASS_DARK, padding: "1.5rem", borderRadius: 24, border: `1px solid ${colors[idx % colors.length]}44`, position: "relative", overflow: "hidden" }}
             >
                <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: colors[idx % colors.length] }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "0.8rem" }}>
                   <div style={{ width: 36, height: 36, borderRadius: 10, background: `${colors[idx % colors.length]}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={18} color={colors[idx % colors.length]} />
                   </div>
                   <span style={{ fontWeight: 950, color: colors[idx % colors.length], fontSize: "0.9rem", letterSpacing: "0.02em" }}>{label}</span>
                </div>
                <p style={{ fontSize: "0.8rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>{desc}</p>
             </motion.div>
           );
         })}
      </div>

    </motion.div>
  );
}

function BuzzerItem({ user, risk, probability }: any) {
  const isHigh = risk === "HIGH";
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "rgba(255,255,255,0.03)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: isHigh ? "#EF4444" : "#F59E0B" }} />
          <span style={{ fontSize: "0.8rem", fontWeight: 800, color: TEXT_MAIN }}>{user}</span>
       </div>
       <div style={{ display: "flex", gap: "10px" }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 900, color: isHigh ? "#EF4444" : "#F59E0B", background: isHigh ? "#EF444415" : "#F59E0B15", padding: "2px 6px", borderRadius: 4 }}>{risk} RISK</span>
          <span style={{ fontSize: "0.8rem", color: TEXT_MUTED, fontWeight: 700 }}>{probability}</span>
       </div>
    </div>
  );
}

function RadarScanner({ isMobile }: any) {
  const size = isMobile ? 240 : 320;
  return (
    <div style={{ width: size, height: size, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
       {/* Rings */}
       {[0, 1, 2, 3].map(i => (
         <div key={i} style={{ 
           position: "absolute", 
           width: `${(i+1)*25}%`, 
           height: `${(i+1)*25}%`, 
           borderRadius: "50%", 
           border: `1px solid ${PRIMARY}22`,
           zIndex: 0
         }} />
       ))}
       
       {/* Scanning Sweep */}
       <motion.div 
         animate={{ rotate: 360 }}
         transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
         style={{ 
           position: "absolute", 
           width: "50%", 
           height: "50%", 
           top: 0, 
           left: "50%", 
           originX: "0%", 
           originY: "100%", 
           background: `linear-gradient(90deg, ${PRIMARY}44 0%, transparent 100%)`,
           borderRadius: "0 100% 0 0",
           zIndex: 1
         }} 
       />

       {/* HUB */}
       <div style={{ width: 80, height: 80, borderRadius: "50%", border: `2px solid ${PRIMARY}`, background: `${PRIMARY}22`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, boxShadow: `0 0 30px ${PRIMARY}44` }}>
          <Search size={32} color={PRIMARY} className="pulsating" />
       </div>

       {/* Blips */}
       <Blip x="20%" y="30%" delay={0} />
       <Blip x="70%" y="20%" delay={1.5} color="#EF4444" />
       <Blip x="40%" y="80%" delay={0.8} />
       <Blip x="80%" y="60%" delay={2.2} color="#EF4444" />

       <style jsx>{`
         .pulsating { animation: pulse 2s infinite; }
         @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.6; } 100% { transform: scale(1); opacity: 1; } }
       `}</style>
    </div>
  );
}

function Blip({ x, y, delay, color = PRIMARY }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
      transition={{ repeat: Infinity, duration: 2, delay }}
      style={{ position: "absolute", top: y, left: x, width: 10, height: 10, borderRadius: "50%", background: color, zIndex: 5, boxShadow: `0 0 10px ${color}` }}
    />
  );
}

function AnomalyChart() {
  const points = "0,80 20,70 40,75 60,72 80,40 100,60 120,10 140,50 160,55 180,60 200,65 220,62 240,68 260,70";
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
       <svg viewBox="0 0 260 100" style={{ width: "100%", overflow: "visible" }}>
          {/* Grid Lines */}
          {[0, 25, 50, 75, 100].map(y => (
            <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          ))}
          
          {/* The Path */}
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d={`M ${points}`}
            fill="none" 
            stroke={GOLD} 
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: `drop-shadow(0 0 10px ${GOLD}66)` }}
          />

          {/* Anomaly Indicator */}
          <motion.circle 
            animate={{ r: [3, 8, 3], opacity: [0.3, 0.8, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            cx="120" cy="10" r="5" fill="#EF4444" 
          />
          <text x="125" y="5" fill="#EF4444" fontSize="10" fontWeight="900">ANOMALY SPIKE DETECTED</text>
       </svg>
    </div>
  );
}
