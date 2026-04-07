"use client";

import React from "react";
import { Slide, Metric, Feature } from "../components/SlideTypes";

import { motion } from "framer-motion";
import { Smartphone, Zap, CheckSquare, BarChart3, Users, Clock, ArrowUpRight } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  image?: string;
}

const responseData = [
  { time: '08:00', reports: 12 },
  { time: '10:00', reports: 45 },
  { time: '12:00', reports: 32 },
  { time: '14:00', reports: 89 },
  { time: '16:00', reports: 54 },
  { time: '18:00', reports: 23 },
];

export default function LayoutAccountabilityDashboard({ title, subtitle, body, image }: LayoutProps) {
  const items = parseListItems(body);
  const colors = [PRIMARY, GOLD, "#10B981", "#3B82F6"];
  const icons = [Smartphone, BarChart3, Zap, Clock];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1.5rem", animation: "animate-up 0.8s ease-out" }}>
      <div>
        <p style={{ fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.6rem)", fontWeight: 950, color: TEXT_MAIN, margin: 0, letterSpacing: "-0.04em" }}>{title}</h2>
      </div>

      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem", flex: 1, minHeight: 0 }}>
        
        {/* ── LEFT: REFINED DASHBOARD VIEW ─────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          {/* Top Panel: Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
             {[
               { label: "TOTAL LAPORAN (SUPER)", value: "2.348", color: TEXT_MAIN },
               { label: "LAPORAN TERTANGANI", value: "1.812", color: "#10B981" },
               { label: "DLM PROSES (SLA)", value: "536", color: GOLD }
             ].map((stat, i) => (
               <div key={i} style={{ ...GLASS_DARK, borderRadius: 20, padding: "1.25rem", borderBottom: `4px solid ${stat.color}44` }}>
                  <div style={{ fontSize: "0.6rem", fontWeight: 900, color: TEXT_MUTED, letterSpacing: "0.1em", marginBottom: "0.4rem" }}>{stat.label}</div>
                  <div style={{ fontSize: "1.8rem", fontWeight: 1000, color: stat.color }}>{stat.value}</div>
               </div>
             ))}
          </div>

          {/* Main Visual: Dashboard Image / Map */}
          <div style={{ flex: 1, ...GLASS_DARK, borderRadius: 32, overflow: "hidden", position: "relative", border: "1px solid rgba(255,255,255,0.05)" }}>
             {image ? (
                <img src={image} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Dashboard" />
             ) : (
                <div style={{ height: "100%", background: "rgba(13, 17, 23, 0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <BarChart3 size={80} color="rgba(255,255,255,0.05)" />
                </div>
             )}
             
             {/* Live Indicators Overlay */}
             <div style={{ position: "absolute", top: 20, right: 20, display: "flex", gap: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.7)", padding: "0.4rem 0.8rem", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)" }}>
                   <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981" }}>
                      <motion.div animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#10B981" }} />
                   </div>
                   <span style={{ fontSize: "0.6rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "0.1em" }}>SYSTEM ONLINE</span>
                </div>
             </div>
          </div>

          {/* Bottom Panel: Chart */}
          <div style={{ height: 120, ...GLASS_DARK, borderRadius: 24, padding: "1.25rem", border: "1px solid rgba(255,255,255,0.03)" }}>
             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                 <div style={{ fontSize: "0.7rem", fontWeight: 900, color: TEXT_MUTED }}>TRAFIK LAPORAN (24 JAM)</div>
                 <div style={{ fontSize: "0.7rem", fontWeight: 900, color: GOLD }}>AVG RESP: 14 MIN</div>
             </div>
             <div style={{ height: 70 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={responseData}>
                    <defs>
                      <linearGradient id="colorReports" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={GOLD} stopOpacity={0.4}/>
                        <stop offset="95%" stopColor={GOLD} stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="reports" stroke={GOLD} strokeWidth={2} fillOpacity={1} fill="url(#colorReports)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>
        </div>

        {/* ── RIGHT: COMPREHENSIVE PILLARS ─────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", overflowY: "auto" }} className="custom-scroll">
          {items.map((item, i) => {
            const { label, rest } = parseBoldLabel(item);
            const Icon = icons[i % icons.length];
            const color = colors[i % colors.length];

            return (
              <motion.div 
                key={i}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ x: 5, background: "rgba(255,255,255,0.03)" }}
                style={{ 
                   ...GLASS_DARK, borderRadius: 24, padding: "1.25rem", 
                   borderLeft: `4px solid ${color}`, position: "relative"
                }}
              >
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                   <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}15`, border: `1px solid ${color}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={20} color={color} />
                   </div>
                   <div>
                      <div style={{ fontSize: "1rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.25rem" }}>{label}</div>
                      <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.5, fontWeight: 500 }}>
                         <InlineText text={rest} />
                      </p>
                   </div>
                </div>
              </motion.div>
            );
          })}

          {/* Ranking Section */}
          <div style={{ ...GLASS_DARK, borderRadius: 24, padding: "1.5rem", marginTop: "0.5rem" }}>
             <h4 style={{ fontSize: "0.75rem", fontWeight: 900, color: GOLD, letterSpacing: "0.15em", marginBottom: "1rem", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.5rem" }}>OPD PERFORMANCE RANKING</h4>
             {[
               { name: "Dinas PUPR", rate: "94%", color: "#10B981" },
               { name: "DLH Kota", rate: "92%", color: "#10B981" },
               { name: "Dinkes", rate: "89%", color: GOLD }
             ].map((opd, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                   <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span style={{ fontSize: "0.75rem", fontWeight: 900, color: TEXT_MUTED }}>{i + 1}</span>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: TEXT_MAIN }}>{opd.name}</span>
                   </div>
                   <div style={{ fontSize: "0.85rem", fontWeight: 950, color: opd.color }}>{opd.rate}</div>
                </div>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
}
