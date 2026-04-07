"use client";

import React, { useMemo } from "react";
import { Slide, Metric, Feature } from "../components/SlideTypes";

import { motion } from "framer-motion";
import { Shield, Zap, TrendingUp, Network, Search, AlertTriangle, CheckCircle2 } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { getStaticRandom, RANDOM_POOL_XY, RANDOM_POOL_DUR, RANDOM_POOL_SIZE } from "../components/PurityUtils";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

const trustData = [
  { year: '2025', trust: 72 },
  { year: '2026', trust: 75 },
  { year: '2027', trust: 79 },
  { year: '2028', trust: 82 },
  { year: '2029', trust: 85 },
];

export default function LayoutReputationShield({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  
  const nodes = useMemo(() => {
    const list = [];
    for (let i = 0; i < 30; i++) {
       const x = 15 + getStaticRandom(i, RANDOM_POOL_XY) * 70;
       const y = 15 + getStaticRandom(i, RANDOM_POOL_XY) * 70;
       list.push({ 
         id: i, 
         x, 
         y, 
         size: 2 + getStaticRandom(i, RANDOM_POOL_SIZE) * 4,
         duration: 2 + getStaticRandom(i, RANDOM_POOL_DUR) * 3
       });
    }
    return list;
  }, []);

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "2rem", animation: "animate-up 0.8s ease-out" }}>
      <div>
        <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.7rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 950, color: TEXT_MAIN, margin: 0, letterSpacing: "-0.04em" }}>{title}</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "2.5rem", flex: 1, minHeight: 0 }}>
        
        {/* ── LEFT COLUMN: VISUAL COMMAND CENTER ──────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          {/* Top: SNA / Radar Visual */}
          <div style={{ 
            flex: 1.2, 
            ...GLASS_DARK, 
            borderRadius: 32, 
            position: "relative", 
            overflow: "hidden",
            border: "1px solid rgba(212, 175, 55, 0.2)",
            background: "radial-gradient(circle at center, rgba(142, 21, 64, 0.15) 0%, rgba(8, 12, 24, 0.9) 100%)"
          }}>
            <div style={{ position: "absolute", top: 24, left: 24, zIndex: 10, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.6)", padding: "0.5rem 1rem", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.7rem", fontWeight: 900, color: GOLD, letterSpacing: "0.1em" }}>
                <Network size={16} /> RADAR REPUTASI EKSEKUTIF
              </div>
              <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", fontWeight: 700, marginLeft: "0.5rem" }}>
                SCANNING 2.500+ PERCAKAPAN / HARI
              </div>
            </div>

            {/* SVG SNA BACKGROUND */}
            <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.6 }}>
               {nodes.map((n, i) => {
                 const target = nodes[(i + 5) % nodes.length];
                 return (
                   <motion.line 
                     key={`l-${i}`} x1={`${n.x}%`} y1={`${n.y}%`} x2={`${target.x}%`} y2={`${target.y}%`} 
                     stroke="rgba(255,255,255,0.08)" strokeWidth="1"
                   />
                 )
               })}
               {nodes.slice(0, 15).map((n, i) => (
                 <motion.circle 
                   key={`c-${i}`} cx={`${n.x}%`} cy={`${n.y}%`} r={n.size} 
                   fill={i % 4 === 0 ? PRIMARY : "rgba(255,255,255,0.2)"}
                   animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: n.duration, repeat: Infinity }}
                 />
               ))}
               
               {/* Central Shield Pulse */}
               <motion.circle 
                 cx="50%" cy="50%" r="60" fill="none" stroke={GOLD} strokeWidth="1" strokeOpacity="0.3" 
                 animate={{ scale: [1, 1.5], opacity: [0.5, 0] }} transition={{ duration: 3, repeat: Infinity }}
               />
               <circle cx="50%" cy="50%" r="4" fill={GOLD} />
            </svg>

            {/* Metrics Overlay */}
            <div style={{ position: "absolute", bottom: 24, right: 24, display: "flex", gap: "1.5rem" }}>
               <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.6rem", fontWeight: 900, color: TEXT_MUTED }}>REACTION TIME</div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 950, color: GOLD }}>&lt; 15 MIN</div>
               </div>
               <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.6rem", fontWeight: 900, color: TEXT_MUTED }}>ACCURACY</div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 950, color: TEXT_MAIN }}>99.8%</div>
               </div>
            </div>

            <div style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
               <motion.div 
                 animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }} 
                 transition={{ duration: 6, repeat: Infinity }}
                 style={{ zIndex: 5, display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
               >
                 <div style={{ width: 100, height: 100, borderRadius: "50%", background: "rgba(212, 175, 55, 0.1)", border: `2px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 40px ${GOLD}33` }}>
                    <Shield size={50} color={GOLD} />
                 </div>
                 <div style={{ fontSize: "0.8rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "0.2em" }}>SMC DEFENSE SYSTEM</div>
               </motion.div>
            </div>
          </div>

          {/* Bottom: Statistics Chart */}
          <div style={{ flex: 0.8, ...GLASS_DARK, borderRadius: 28, padding: "1.5rem", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
               <h4 style={{ margin: 0, fontSize: "0.9rem", fontWeight: 800, color: TEXT_MAIN, display: "flex", alignItems: "center", gap: "0.6rem" }}>
                 <TrendingUp size={18} color={GOLD} /> Public Trust Index Projection
               </h4>
               <div style={{ fontSize: "0.75rem", fontWeight: 900, color: GOLD }}>TARGET 2029: 85%</div>
            </div>
            <div style={{ height: 140, width: "100%" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trustData}>
                  <defs>
                    <linearGradient id="colorTrust" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={GOLD} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={GOLD} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="year" stroke="rgba(255,255,255,0.3)" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis domain={[60, 90]} hide />
                  <Tooltip 
                    contentStyle={{ background: "#0D1225", border: `1px solid ${GOLD}44`, borderRadius: 12, fontSize: 12 }}
                    itemStyle={{ color: GOLD, fontWeight: 800 }}
                  />
                  <Area type="monotone" dataKey="trust" stroke={GOLD} strokeWidth={3} fillOpacity={1} fill="url(#colorTrust)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
        </div>

        {/* ── RIGHT COLUMN: DETAILED PILLARS & FLOW ─────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", overflowY: "auto" }} className="custom-scroll">
           
           {/* Flowchart Section */}
           <div style={{ padding: "0 0.5rem" }}>
              <div style={{ fontSize: "0.65rem", fontWeight: 900, color: GOLD, letterSpacing: "0.2em", marginBottom: "1.5rem", borderLeft: `3px solid ${GOLD}`, paddingLeft: "1rem" }}>
                STRATEGIC FLOW: DARI ISU MENJADI REPUTASI
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {[
                  { icon: Search, title: "Risk Identification", desc: "Deteksi gejolak opini sebelum viralitas mencapai 15%.", color: PRIMARY },
                  { icon: AlertTriangle, title: "Void Occupancy", desc: "Membanjiri ruang info dengan narasi resmi dalam < 30 menit.", color: GOLD },
                  { icon: CheckCircle2, title: "Trust Reinforcement", desc: "Transformasi manajemen krisis menjadi penguatan citra positif.", color: "#10B981" }
                ].map((step, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: `${step.color}15`, border: `1px solid ${step.color}44`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                        <step.icon size={18} color={step.color} />
                      </div>
                      {idx < 2 && <div style={{ width: 2, flex: 1, height: 30, background: `linear-gradient(to bottom, ${step.color}44, transparent)` }} />}
                    </div>
                    <div style={{ flex: 1, paddingTop: "0.2rem" }}>
                      <div style={{ fontSize: "0.95rem", fontWeight: 850, color: TEXT_MAIN, marginBottom: "0.2rem" }}>{step.title}</div>
                      <div style={{ fontSize: "0.8rem", color: TEXT_MUTED, lineHeight: 1.4 }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
           </div>

           <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", margin: "0.5rem 0" }} />

           {items.map((item, i) => {
             const { label, rest } = parseBoldLabel(item);
             return (
               <motion.div 
                 key={i} 
                 whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.03)" }}
                 style={{ ...GLASS_DARK, borderRadius: 20, padding: "1.25rem", borderLeft: `4px solid ${i === 0 ? PRIMARY : i === 1 ? GOLD : "#10B981"}` }}
               >
                 <div style={{ fontSize: "1rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.4rem" }}>{label}</div>
                 <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, fontWeight: 500, margin: 0, lineHeight: 1.5 }}><InlineText text={rest} /></p>
               </motion.div>
             );
           })}

        </div>

      </div>
    </div>
  );
}
