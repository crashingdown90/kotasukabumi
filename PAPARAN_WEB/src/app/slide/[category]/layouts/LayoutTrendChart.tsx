import React from "react";
import { motion } from "framer-motion";
import { Activity, BellRing } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "rgba(10, 15, 30, 0.95)", border: `1px solid ${PRIMARY}`, padding: "1rem", borderRadius: "12px", boxShadow: `0 10px 20px rgba(0,0,0,0.5)` }}>
        <p style={{ color: TEXT_MAIN, fontWeight: 950, marginBottom: "0.5rem" }}>T+{label}</p>
        <p style={{ color: PRIMARY, fontSize: "0.85rem", margin: 0, fontWeight: 700 }}>Volume Isu: {payload[0].value}</p>
        <p style={{ color: "#10B981", fontSize: "0.85rem", margin: 0, fontWeight: 700 }}>Sentimen (+): {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

export default function LayoutTrendChart({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);

  // Mock data representing a 120-minute crisis lifecycle with intervention at T=60
  const data = [
    { time: "0m", volume: 10, sentiment: 90 },
    { time: "15m", volume: 50, sentiment: 75 },
    { time: "30m", volume: 150, sentiment: 50 },
    { time: "45m", volume: 400, sentiment: 25 },
    { time: "60m", volume: 800, sentiment: 10 }, // Peak crisis
    { time: "75m", volume: 500, sentiment: 30 }, // SMC Intervention Drop
    { time: "90m", volume: 200, sentiment: 60 },
    { time: "105m", volume: 80, sentiment: 80 },
    { time: "120m", volume: 30, sentiment: 85 },
  ];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", animation: "animate-up 0.8s ease-out" }}>
      <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.7rem" }}>{subtitle}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
         <h2 style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em", margin: 0 }}>{title}</h2>
         <div style={{ display: "flex", gap: "1.5rem" }}>
           <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: TEXT_MAIN, fontWeight: 700 }}>
             <div style={{ width: 12, height: 12, borderRadius: 2, background: PRIMARY }} /> Viralitas Isu
           </div>
           <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: TEXT_MAIN, fontWeight: 700 }}>
             <div style={{ width: 12, height: 12, borderRadius: 2, background: "#10B981" }} /> Sentimen Positif
           </div>
         </div>
      </div>

      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem", flex: 1, minHeight: 0 }}>
        
        {/* ── LEFT: RECHARTS AREA GRAPH ───────────────────────── */}
        <div style={{ ...GLASS_DARK, borderRadius: 32, padding: "2rem", display: "flex", flexDirection: "column", border: "1px solid rgba(255,255,255,0.05)" }}>
           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
             <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <Activity size={20} color={GOLD} />
                <span style={{ fontSize: "0.8rem", fontWeight: 900, color: GOLD, letterSpacing: "0.15em" }}>LIVE CRISIS LIFECYCLE</span>
             </div>
             <div style={{ background: `${PRIMARY}33`, padding: "0.4rem 1rem", borderRadius: 100, fontSize: "0.7rem", color: PRIMARY, fontWeight: 900 }}>THRESHOLD: 60 MINS</div>
           </div>

           <div style={{ flex: 1, minHeight: 0 }}>
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                 <defs>
                   <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor={PRIMARY} stopOpacity={0.8}/>
                     <stop offset="95%" stopColor={PRIMARY} stopOpacity={0}/>
                   </linearGradient>
                   <linearGradient id="colorSentiment" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#10B981" stopOpacity={0.4}/>
                     <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                 <XAxis dataKey="time" stroke={TEXT_MUTED} fontSize={12} tickLine={false} axisLine={false} />
                 <YAxis yAxisId="left" stroke={TEXT_MUTED} fontSize={12} tickLine={false} axisLine={false} />
                 <YAxis yAxisId="right" orientation="right" stroke={TEXT_MUTED} fontSize={12} tickLine={false} axisLine={false} />
                 <Tooltip content={<CustomTooltip />} />
                 
                 <ReferenceLine x="60m" stroke={GOLD} strokeDasharray="4 4" label={{ position: 'top', value: 'SMC INTERVENTION', fill: GOLD, fontSize: 12, fontWeight: 900 }} yAxisId="left" />
                 
                 <Area yAxisId="left" type="monotone" dataKey="volume" stroke={PRIMARY} strokeWidth={4} fillOpacity={1} fill="url(#colorVolume)" animationDuration={2000} />
                 <Area yAxisId="right" type="monotone" dataKey="sentiment" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorSentiment)" animationDuration={2500} />
               </AreaChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* ── RIGHT: ANALYSIS ────────────────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", overflowY: "auto" }} className="custom-scroll">
           {items.map((item, i) => {
             const { label, rest } = parseBoldLabel(item);
             const isCritical = label.includes("Crisis") || label.includes("Viral");

             return (
               <motion.div 
                 key={i} 
                 whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.03)", borderColor: isCritical ? PRIMARY : GOLD }}
                 style={{ 
                   ...GLASS_DARK, borderRadius: 20, padding: "1.5rem", 
                   borderLeft: `4px solid ${isCritical ? PRIMARY : GOLD}`,
                   background: isCritical ? "rgba(142,21,64,0.1)" : GLASS_DARK.background
                 }}
               >
                 <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.5rem" }}>
                   {isCritical && <BellRing size={16} color={PRIMARY} />}
                   <div style={{ fontSize: "1.1rem", fontWeight: 900, color: isCritical ? PRIMARY : GOLD, textTransform: "uppercase" }}>{label}</div>
                 </div>
                 <p style={{ fontSize: "0.95rem", color: TEXT_MAIN, fontWeight: 500, margin: 0, lineHeight: 1.5 }}><InlineText text={rest} /></p>
               </motion.div>
             );
           })}
        </div>
      </div>
    </div>
  );
}
