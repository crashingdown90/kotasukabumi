"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  LineChart, Line, AreaChart, Area, PieChart, Pie
} from "recharts";
import { 
  Activity, Target, TrendingUp, Zap, Server, ShieldCheck, FileText, 
  Database, Map as MapIcon, Share2, Award, Clock, Settings, Search,
  CheckSquare, BarChart3, AlertTriangle, Users
} from "lucide-react";
import { 
  GOLD, PRIMARY, TEXT_MAIN, TEXT_MUTED, SURFACE, BORDER_REFINED, 
  SHADOW_SM, SHADOW_LG, GLASS_DARK, PRIMARY_LIGHT 
} from "../components/Constants";
import { parseListItems, parseBoldLabel, InlineText } from "../components/Shared";
import { getStaticRandom, RANDOM_POOL_XY } from "../components/PurityUtils";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  metrics?: {label: string, value: string, unit?: string, trend?: string}[];
  features?: any[];
  highlights?: string[];
  image?: string;
}

/* ── CHART LAYOUT ─────────────────────────────────────────── */
export function LayoutChart({ title, subtitle, body, metrics, features, highlights }: LayoutProps) {
  const items = features || highlights || parseListItems(body);
  const colors = [PRIMARY, GOLD, "#1A5FB4", "#26A269", "#E5A50A", "#C061CB"];
  
  let data = metrics?.map((m, i) => ({
    name: m.label,
    value: parseFloat(m.value) || 0,
    color: colors[i % colors.length],
    suffix: m.unit || "",
    description: m.trend || ""
  })) || [];

  if (data.length === 0) {
    data = items.map((item: any, i: number) => {
        let label = ""; let rest = "";
        if (typeof item === 'string') { const parsed = parseBoldLabel(item); label = parsed.label; rest = parsed.rest; } 
        else { label = item.title; rest = item.desc; }
        const valMatch = rest.match(/(\d+)/);
        return { name: label, value: valMatch ? parseInt(valMatch[0]) : 0, color: colors[i % colors.length], suffix: "", description: rest };
    });
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 850, color: GOLD, textTransform: "uppercase", letterSpacing: "0.15em" }}>{subtitle}</p>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
      </div>
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem" }}>
        <div style={{ background: SURFACE, borderRadius: 24, padding: "2rem", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_LG }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: TEXT_MUTED, fontSize: 12 }} />
              <YAxis hide />
              <Tooltip cursor={{ fill: "rgba(255,255,255,0.03)" }} contentStyle={{ background: SURFACE, border: `1px solid ${BORDER_REFINED}` }} />
              <Bar dataKey="value" radius={[8, 8, 2, 2]} barSize={40}>
                {data.map((entry: any, index: number) => <Cell key={index} fill={entry.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {items.slice(0, 5).map((item: any, i: number) => {
             const label = typeof item === 'string' ? parseBoldLabel(item).label : item.title;
             return (
               <div key={i} style={{ padding: "1.25rem", borderRadius: 16, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, display: "flex", alignItems: "center", gap: "1rem" }}>
                 <div style={{ width: 40, height: 40, borderRadius: 10, background: `${colors[i % colors.length]}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <Activity size={20} color={colors[i % colors.length]} />
                 </div>
                 <div style={{ fontSize: "0.9rem", fontWeight: 700, color: TEXT_MAIN }}>{label}</div>
               </div>
             );
          })}
        </div>
      </div>
    </motion.div>
  );
}

/* ── BENTO PROPORTIONAL (60-30-10) ────────────────────────── */
export function LayoutBentoProportional({ title, subtitle, body, metrics, features }: LayoutProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
         <p style={{ fontSize: "0.85rem", fontWeight: 850, color: GOLD, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: "0.75rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
         <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, maxWidth: "800px", margin: "1rem auto 0", lineHeight: 1.6 }}>{body}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "1.5rem", flex: 1 }}>
        {/* Left Big Card (60%) */}
        {metrics?.[0] && features?.[0] && (
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} style={{ background: "linear-gradient(135deg, #047857 0%, #065F46 100%)", borderRadius: 32, padding: "3rem", color: "white", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 20px 40px rgba(4, 120, 87, 0.2)" }}>
            <div style={{ position: "absolute", right: "-5%", bottom: "-15%", fontSize: "25rem", fontWeight: 900, opacity: 0.05, lineHeight: 1 }}>{metrics[0].value}</div>
            
            <div style={{ zIndex: 2 }}>
               <div style={{ fontSize: "6rem", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1, marginBottom: "0.5rem", display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                  {metrics[0].value}<span style={{ fontSize: "2.5rem", color: "rgba(255,255,255,0.7)" }}>{metrics[0].unit}</span>
               </div>
               <h3 style={{ fontSize: "1.85rem", fontWeight: 800, marginBottom: "1.25rem", lineHeight: 1.3 }}>{features[0].title}</h3>
            </div>

            <div style={{ zIndex: 2 }}>
               <div style={{ width: "100%", height: 8, background: "rgba(255,255,255,0.2)", borderRadius: 4, marginBottom: "1.5rem", overflow: "hidden" }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: `${metrics[0].value}%` }} transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }} style={{ height: "100%", background: GOLD, borderRadius: 4 }} />
               </div>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>{features[0].desc}</p>
            </div>
          </motion.div>
        )}

        {/* Right Stack (30% & 10%) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {metrics?.[1] && features?.[1] && (
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} style={{ flex: 1.4, background: SURFACE, borderRadius: 32, padding: "2.5rem", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: "-5%", bottom: "-15%", fontSize: "12rem", fontWeight: 900, opacity: 0.05, color: "#D4AF37", lineHeight: 1 }}>{metrics[1].value}</div>
              
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", zIndex: 2 }}>
                <div style={{ width: 88, height: 88, borderRadius: 24, background: "rgba(212, 175, 55, 0.1)", border: `1px solid rgba(212, 175, 55, 0.3)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, flexDirection: "column" }}>
                    <span style={{ fontSize: "2.5rem", fontWeight: 900, color: GOLD, lineHeight: 1 }}>{metrics[1].value}</span>
                    <span style={{ fontSize: "0.9rem", fontWeight: 800, color: GOLD }}>{metrics[1].unit}</span>
                </div>
                <div>
                   <h3 style={{ fontSize: "1.35rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.75rem", lineHeight: 1.3 }}>{features[1].title}</h3>
                   <p style={{ fontSize: "1.05rem", lineHeight: 1.6, color: TEXT_MUTED, fontWeight: 500 }}>{features[1].desc}</p>
                </div>
              </div>

              <div style={{ zIndex: 2, marginTop: "1rem" }}>
                 <div style={{ width: "100%", height: 6, background: "rgba(0,0,0,0.05)", borderRadius: 3, overflow: "hidden" }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: `${metrics[1].value}%` }} transition={{ delay: 1.0, duration: 1.5, ease: "easeOut" }} style={{ height: "100%", background: GOLD, borderRadius: 3 }} />
                 </div>
              </div>
            </motion.div>
          )}

          {metrics?.[2] && features?.[2] && (
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} style={{ flex: 1, background: "#0F172A", color: "white", borderRadius: 32, padding: "2.5rem", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
               <div style={{ position: "absolute", left: "-5%", bottom: "-20%", fontSize: "10rem", fontWeight: 900, opacity: 0.05, lineHeight: 1 }}>{metrics[2].value}</div>

               <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", zIndex: 2 }}>
                 <div style={{ width: 72, height: 72, borderRadius: 20, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, flexDirection: "column" }}>
                    <span style={{ fontSize: "2rem", fontWeight: 900, color: "white", lineHeight: 1 }}>{metrics[2].value}</span>
                 </div>
                 <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: "0.5rem" }}>{features[2].title}</h3>
                    <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{features[2].desc}</p>
                 </div>
               </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── TREND CHART LAYOUT ───────────────────────────────────── */
export function LayoutTrendChart({ title, subtitle, body, metrics }: LayoutProps) {
    const data = metrics?.map((m, i) => ({ name: m.label, value: parseFloat(m.value) || 0 })) || [
        {name: "Jan", value: 400}, {name: "Feb", value: 300}, {name: "Mar", value: 600}, {name: "Apr", value: 800}
    ];
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: "2rem" }}>
                <p style={{ fontSize: "0.8rem", fontWeight: 850, color: GOLD, letterSpacing: "0.2em" }}>{subtitle}</p>
                <h2 style={{ fontSize: "2.6rem", fontWeight: 950, color: TEXT_MAIN }}>{title}</h2>
            </div>
            <div style={{ flex: 1, background: "#FFFFFF", borderRadius: 24, padding: "2rem", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={GOLD} stopOpacity={0.3}/>
                                <stop offset="95%" stopColor={GOLD} stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <XAxis dataKey="name" stroke={TEXT_MUTED} fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke={GOLD} fillOpacity={1} fill="url(#colorVal)" strokeWidth={3} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}

/* ── MAP LAYOUT ───────────────────────────────────────────── */
export function LayoutMap({ title, subtitle, body }: LayoutProps) {
  const points = parseListItems(body);
  return (
    <div style={{ height: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
      <div style={{ background: SURFACE, borderRadius: 24, border: `1px solid ${BORDER_REFINED}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }} />
        {/* Pseudo Map Markers */}
        {[1,2,3,4,5].map(i => (
            <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.2 }} style={{ position: "absolute", left: `${getStaticRandom(i, RANDOM_POOL_XY) * 80 + 10}%`, top: `${getStaticRandom(i+10, RANDOM_POOL_XY) * 80 + 10}%`, width: 12, height: 12, borderRadius: "50%", background: GOLD, boxShadow: `0 0 15px ${GOLD}` }} />
        ))}
        <div style={{ position: "absolute", bottom: 20, left: 20, background: "rgba(0,0,0,0.5)", padding: "0.5rem 1rem", borderRadius: 8, fontSize: "0.7rem", color: "white" }}>SUKABUMI GEOSPATIAL ENGINE 2.0</div>
      </div>
      <div>
        <p style={{ fontSize: "0.8rem", fontWeight: 850, color: GOLD, letterSpacing: "0.2em", marginBottom: "1rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "2.4rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "2rem" }}>{title}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {points.map((p, i) => (
            <div key={i} style={{ padding: "1.25rem", borderRadius: 16, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, display: "flex", alignItems: "center", gap: "1.3rem" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: PRIMARY, flexShrink: 0 }} />
              <div style={{ fontSize: "1.05rem", color: "#0F172A", fontWeight: 600, lineHeight: 1.5 }}>
                <InlineText text={p} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LayoutBigData({ title, subtitle, body, features, metrics }: LayoutProps) {
  const hasFeatures = Array.isArray(features) && features.length > 0;
  const items = hasFeatures ? features : parseListItems(body);
  const introText = hasFeatures ? body : "";

  // Futuristic System Icons for Bureaucratic Data Tracking
  const nodeIcons = [Database, AlertTriangle, TrendingUp, Target];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
      {/* Background Ambient Tech Grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 50%, rgba(4,120,87,0.03) 0%, transparent 60%), linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(241,245,249,0.5) 100%)", zIndex: -1, borderRadius: "24px" }} />

      {/* Cinematic HUD Header */}
      <div style={{ marginBottom: "3.5rem", textAlign: "center", position: "relative" }}>
        <div style={{ width: 80, height: 3, background: PRIMARY, margin: "0 auto 1.5rem", borderRadius: "2px", boxShadow: `0 0 12px ${PRIMARY}60` }} />
        <p style={{ fontSize: "0.85rem", fontWeight: 900, color: PRIMARY, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.2rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>{title}</h2>
        {introText && <p style={{ fontSize: "1.1rem", color: TEXT_MUTED, maxWidth: "950px", margin: "0 auto", lineHeight: 1.65, fontWeight: 500 }}>{introText}</p>}
      </div>

      {/* Data Nodes Telemetry Grid */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", alignContent: "start", width: "100%", maxWidth: "1250px", margin: "0 auto" }}>
        {items.map((it: any, i: number) => {
          const NodeIcon = nodeIcons[i % nodeIcons.length];
          return (
          <motion.div key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.15 }}
             style={{ padding: "2rem 1.5rem", borderRadius: 16, background: "#FFFFFF", border: "1px solid #E2E8F0", position: "relative", boxShadow: "0 10px 30px rgba(15,23,42,0.04)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
             
             {/* Glowing Tech Edge */}
             <div style={{ position: "absolute", top: 0, left: "12%", right: "12%", height: "3px", background: PRIMARY, borderBottomRightRadius: "4px", borderBottomLeftRadius: "4px", boxShadow: `0 2px 10px ${PRIMARY}80` }} />
             
             {/* Cybernetic Node Status */}
             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.2em", color: "#64748B", textTransform: "uppercase" }}>[ SYS.NODE-{String(i+1).padStart(2, '0')} ]</div>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: PRIMARY, boxShadow: `0 0 8px ${PRIMARY}` }} />
             </div>

             <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: "10px", background: "rgba(4,120,87,0.06)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(4,120,87,0.15)", flexShrink: 0 }}>
                   <NodeIcon size={20} color={PRIMARY} strokeWidth={2.5} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 850, color: "#0F172A", lineHeight: 1.4, margin: 0, minHeight: "75px", display: "flex", alignItems: "flex-start" }}>
                   <InlineText text={it.title || it} />
                </h3>
             </div>
             
             {/* Divider Line */}
             <div style={{ width: "100%", height: "1px", background: "#E2E8F0", margin: "1.25rem 0" }} />

             <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.65, margin: 0, fontWeight: 500, flex: 1 }}><InlineText text={it.desc || ""} /></p>
          </motion.div>
        )})}
      </div>
    </motion.div>
  );
}

/* ── TIMELINE LAYOUT ───────────────────────────────────────── */
/* ── HORIZONTAL TIMELINE LAYOUT ───────────────────────────────── */
export function LayoutTimeline({ title, subtitle, body, features }: LayoutProps) {
  
  // If explicitly provided via JSON features array, use the ultra-modern Zero-Scroll Horizontal Timeline
  if (features && features.length > 0) {
      const colors = ["#10B981", "#3B82F6", "#F59E0B", "#8B5CF6"]; // 4-Color Matrix HUD

      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column", paddingBottom: "1.5rem" }}>
          
          {/* Cybernetic Background Grid Texture */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)`, backgroundSize: "24px 24px", zIndex: -1, pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 10%, rgba(59,130,246,0.04) 0%, transparent 60%)", zIndex: -1 }} />

          {/* Bureaucratic Header (HUD Engineered) */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
             <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                {colors.map((c, i) => <div key={i} style={{ width: 15, height: 3, background: c, borderRadius: "2px", boxShadow: `0 0 8px ${c}60` }} />)}
             </div>
             <p style={{ fontSize: "0.85rem", fontWeight: 850, color: "#3B82F6", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
             <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.7rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
             {body && <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, maxWidth: "1050px", margin: "0.75rem auto 0", lineHeight: 1.5, fontWeight: 500 }}>{body}</p>}
          </div>

          <div style={{ position: "relative", flex: 1, display: "grid", gridTemplateColumns: `repeat(${features.length}, 1fr)`, gap: "1.5rem", maxWidth: "1150px", margin: "0 auto", width: "100%" }}>
             {/* Dynamic Multi-Color Connecting Line */}
             <div style={{ position: "absolute", top: "32px", left: `${100 / (features.length * 2)}%`, right: `${100 / (features.length * 2)}%`, height: "4px", background: `linear-gradient(90deg, ${colors.join(', ')})`, zIndex: 0, borderRadius: "2px", boxShadow: "0 0 10px rgba(59,130,246,0.2)" }} />

             {features.map((y: any, i: number) => {
                const ringColor = colors[i % colors.length];

                return (
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 * i }} key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
                     
                     {/* Cyber-Glowing Year Node */}
                     <div style={{ width: 64, height: 64, borderRadius: "50%", background: SURFACE, border: `3px solid ${ringColor}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", boxShadow: `0 0 0 6px ${SURFACE}, 0 0 20px ${ringColor}40`, zIndex: 2, position: "relative" }}>
                        <div style={{ position: "absolute", inset: 2, borderRadius: "50%", background: `${ringColor}10` }} />
                        <span style={{ fontWeight: 950, fontSize: "1.2rem", color: ringColor, zIndex: 3 }}>{y.title}</span>
                     </div>
                     
                     {/* Futuristic Data Card */}
                     <div style={{ background: SURFACE, borderRadius: 24, padding: "2.25rem 1.75rem", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, width: "100%", height: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
                        
                        {/* Glowing HUD Accents */}
                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "6px", background: `linear-gradient(90deg, transparent, ${ringColor}, transparent)` }} />
                        <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "5px", background: ringColor }} />
                        
                        <div style={{ fontSize: "0.8rem", fontWeight: 850, color: ringColor, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>FASE {i+1}</div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 850, color: TEXT_MAIN, marginBottom: "1rem", lineHeight: 1.4, textAlign: "left" }}>{y.metric}</h3>
                        
                        <div style={{ width: "35px", height: "4px", background: ringColor, marginBottom: "1.25rem", borderRadius: "2px" }} />
                        
                        <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.65, margin: 0, fontWeight: 500, textAlign: "left" }}>{y.desc}</p>
                        
                        {/* Cybernetic Corner Geometry */}
                        <div style={{ position: "absolute", bottom: "12px", right: "12px", width: "16px", height: "16px", borderBottom: `3px solid ${ringColor}50`, borderRight: `3px solid ${ringColor}50` }} />
                     </div>
                  </motion.div>
                );
             })}
          </div>
        </motion.div>
      );
  }

  // Backup execution for Legacy String-Parsed Vertical Timelines
  const items = parseListItems(body || "");
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%" }}>
       <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 850, color: GOLD, letterSpacing: "0.2em" }}>{subtitle}</p>
          <h2 style={{ fontSize: "3rem", fontWeight: 950, color: TEXT_MAIN }}>{title}</h2>
       </div>
        <div style={{ position: "relative", paddingLeft: "3rem" }}>
           <div style={{ position: "absolute", left: 7, top: 0, bottom: 0, width: 2, background: "rgba(15, 23, 42, 0.1)" }} />
           <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {items.map((it, i) => {
                 const { label, rest } = parseBoldLabel(it);
                 return (
                    <div key={i} style={{ position: "relative" }}>
                       <div style={{ position: "absolute", left: -30, top: 12, width: 14, height: 14, borderRadius: "50%", background: PRIMARY, border: "2px solid white", boxShadow: `0 0 0 2px ${PRIMARY}` }} />
                       <div style={{ fontSize: "1.2rem", fontWeight: 850, color: PRIMARY, marginBottom: "0.4rem" }}><InlineText text={label} /></div>
                       <div style={{ fontSize: "1rem", color: "#475569", lineHeight: 1.6 }}><InlineText text={rest} /></div>
                    </div>
                 );
              })}
           </div>
        </div>
    </motion.div>
  );
}

/* ── KPI GRID LAYOUT ────────────────────────────────────────── */
export function LayoutKPIGrid({ title, subtitle, body }: LayoutProps) {
    const items = parseListItems(body);
    return (
        <div style={{ height: "100%" }}>
            <div style={{ marginBottom: "2.5rem" }}>
                <p style={{ fontSize: "0.8rem", fontWeight: 850, color: GOLD }}>{subtitle}</p>
                <h2 style={{ fontSize: "2.8rem", fontWeight: 900, color: TEXT_MAIN }}>{title}</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
                {items.map((it, i) => (
                    <div key={i} style={{ padding: "2rem", borderRadius: 24, background: "#FFFFFF", border: `1px solid ${BORDER_REFINED}`, textAlign: "center", boxShadow: SHADOW_SM }}>
                        <Target size={32} color={PRIMARY} style={{ margin: "0 auto 1rem" }} />
                        <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#0F172A" }}><InlineText text={it.split(":")[1]?.trim() || it} /></div>
                        <div style={{ fontSize: "0.75rem", fontWeight: 850, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.1em" }}><InlineText text={it.split(":")[0]?.trim()} /></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ── SNA LAYOUT ────────────────────────────────────────────── */
export function LayoutSNA({ title, subtitle, body }: LayoutProps) {
    const items = parseListItems(body);
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", height: "100%" }}>
            <div style={{ background: "#F8FAFC", borderRadius: 32, border: `1px solid ${BORDER_REFINED}`, position: "relative", overflow: "hidden" }}>
                 {/* Visual Nodes for SNA */}
                 {[1,2,3,4,5,6].map(i => (
                     <div key={i} style={{ position: "absolute", left: `${getStaticRandom(i, RANDOM_POOL_XY)*70+15}%`, top: `${getStaticRandom(i+5, RANDOM_POOL_XY)*70+15}%`, width: 40, height: 40, borderRadius: "50%", background: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid gold" }}>
                        <Users size={18} color="white" />
                     </div>
                 ))}
                 <div style={{ position: "absolute", bottom: 20, right: 20, color: GOLD, fontSize: "0.6rem", fontWeight: 900 }}>NETWORK TOPOLOGY ANALYSIS</div>
            </div>
            <div>
                 <p style={{ fontSize: "0.8rem", color: GOLD, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em" }}><InlineText text={subtitle} /></p>
                 <h2 style={{ fontSize: "2.5rem", fontWeight: 950, color: TEXT_MAIN }}><InlineText text={title} /></h2>
                 <div style={{ marginTop: "2rem" }}>
                    {items.map((it, i) => (
                        <div key={i} style={{ marginBottom: "1.5rem", padding: "1.25rem", borderRadius: 16, background: "#FFFFFF", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM }}>
                           <InlineText text={it} />
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    );
}

/* ── MATRIX LAYOUT ──────────────────────────────────────────── */
export function LayoutMatrix({ title, subtitle, body }: LayoutProps) {
    const items = parseListItems(body);
    const ICONS = [Award, FileText, ShieldCheck, CheckSquare];
    
    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
             <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
                <p style={{ fontSize: "0.85rem", fontWeight: 900, color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
                <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
             </div>
             
             <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "2rem" }}>
                 {items.slice(0, 4).map((it, i) => {
                     let label = ""; let rest = "";
                     if (typeof it === 'string') {
                         const parsed = parseBoldLabel(it);
                         label = parsed.label || `Elemen ${i + 1}`;
                         rest = parsed.rest || it;
                     }
                     const Icon = ICONS[i % ICONS.length];

                     return (
                         <motion.div key={i} initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.15, duration: 0.5 }} 
                            style={{ padding: "2.5rem", borderRadius: 24, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_LG, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                             
                             <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: "50%", background: `linear-gradient(135deg, transparent, ${PRIMARY}08)` }} />
                             
                             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", position: "relative", zIndex: 1 }}>
                                 <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                     <div style={{ width: 48, height: 48, borderRadius: 14, background: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                         <Icon size={24} color={PRIMARY} />
                                     </div>
                                 </div>
                                 <div style={{ fontSize: "4rem", fontWeight: 950, color: `${PRIMARY}11`, lineHeight: 1, position: "absolute", top: -10, right: 0 }}>0{i+1}</div>
                             </div>
                             
                             <div style={{ position: "relative", zIndex: 1 }}>
                                 <h3 style={{ fontSize: "1.3rem", fontWeight: 850, color: TEXT_MAIN, marginBottom: "0.75rem", lineHeight: 1.3 }}>{label}</h3>
                                 <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, lineHeight: 1.6 }}>{rest}</p>
                             </div>
                         </motion.div>
                     );
                 })}
             </div>
        </div>
    );
}

/* ── BUDGET LAYOUT ──────────────────────────────────────────── */
export function LayoutBudget({ title, subtitle, body }: LayoutProps) {
    return (
        <div style={{ textAlign: "center" }}>
            <Award size={40} color={GOLD} style={{ marginBottom: "1rem" }} />
            <h2 style={{ fontSize: "3rem", fontWeight: 950, color: TEXT_MAIN }}>{title}</h2>
            <p style={{ color: TEXT_MUTED, fontSize: "1.2rem", maxWidth: "700px", margin: "1.5rem auto" }}>{body}</p>
            <div style={{ display: "inline-block", padding: "2rem 4rem", borderRadius: 32, background: GOLD, color: "black", fontWeight: 1000, fontSize: "2.5rem" }}>
                100% TRANSPARENT
            </div>
        </div>
    );
}

/* ── BENCHMARKING LAYOUT ───────────────────────────────────── */
export function LayoutBenchmarking({ title, subtitle, body }: LayoutProps) {
    return <LayoutChart title={title} subtitle={subtitle} body={body} />;
}

/* ── KPI MATRIX LAYOUT ───────────────────────────────────────── */
/* ── KPI MATRIX LAYOUT ─────────────────────────────────────── */
export function LayoutKPIMatrix({ title, subtitle, body, features }: LayoutProps) {
  const kpiCategories = features || [];
  
  const icons = [Award, ShieldCheck, TrendingUp, Clock];
  const colors = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444"];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column", paddingBottom: "1.5rem" }}>
      
      {/* Background Subtle Gradient */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.03) 0%, transparent 60%)", zIndex: -1, pointerEvents: "none" }} />

      {/* Bureaucratic Header (Compressed Margins) */}
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
         <div style={{ width: 80, height: 3, background: GOLD, margin: "0 auto 1.25rem", borderRadius: "2px", boxShadow: `0 0 12px ${GOLD}60` }} />
         <p style={{ fontSize: "0.85rem", fontWeight: 850, color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.7rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
         {body && <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, maxWidth: "1050px", margin: "0.75rem auto 0", lineHeight: 1.5, fontWeight: 500 }}>{body}</p>}
      </div>

      {/* Zero Scroll Grid */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "1.25rem", alignContent: "start", maxWidth: "1150px", margin: "0 auto", width: "100%" }}>
        {kpiCategories.map((cat: any, i: number) => {
          const Icon = icons[i % icons.length];
          const ringColor = colors[i % colors.length];

          return (
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 * i }} key={i} 
             style={{ padding: "1.75rem 1.5rem", borderRadius: 20, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, display: "flex", alignItems: "center", gap: "1.5rem", position: "relative", overflow: "hidden", zIndex: 1 }}>
             
             {/* Thin Colored Edge Marker */}
             <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "6px", background: ringColor }} />
             
             {/* Bureaucratic Icon Base */}
             <div style={{ width: 64, height: 64, borderRadius: 16, background: `${ringColor}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${ringColor}30`, position: "relative", zIndex: 2 }}>
                <Icon size={30} color={ringColor} strokeWidth={2.5} />
             </div>
             
             {/* Text Content */}
             <div style={{ flex: 1, zIndex: 2 }}>
                <h3 style={{ fontSize: "1.1rem", color: TEXT_MAIN, fontWeight: 850, marginBottom: "0.4rem", lineHeight: 1.3 }}>{cat.title}</h3>
                <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.5, margin: 0 }}>{cat.desc}</p>
             </div>
             
             {/* Massive Metric Highlight */}
             <div style={{ fontSize: "3rem", fontWeight: 1000, color: ringColor, letterSpacing: "-0.03em", textAlign: "right", zIndex: 2, paddingLeft: "1rem" }}>
                {cat.metric}
             </div>

             {/* Cybernetic Background Watermark */}
             <div style={{ position: "absolute", right: "-5%", bottom: "-25%", opacity: 0.03, zIndex: 0 }}>
                <Icon size={160} color={ringColor} />
             </div>
          </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── TECHNICAL SERVICE LAYOUT ──────────────────────────────── */
export function LayoutService({ title, subtitle, body }: LayoutProps) {
    const items = parseListItems(body);
    return (
        <div style={{ height: "100%" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem" }}>{title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                {items.map((it, i) => (
                    <div key={i} style={{ padding: "1.5rem", borderRadius: 20, background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}>
                        <CheckSquare size={20} color={GOLD} style={{ marginBottom: "0.5rem" }} />
                        <InlineText text={it} />
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ── CHALLENGES LAYOUT ──────────────────────────────────────── */
export function LayoutChallenges({ title, subtitle, body }: LayoutProps) {
    const items = parseListItems(body);
    const threatColors = [
        { border: "rgba(220, 38, 38, 0.3)", bg: "rgba(220, 38, 38, 0.04)", iconBg: "#DC2626", color: "#DC2626", glow: "0 10px 30px rgba(220,38,38,0.15)" }, // Red
        { border: "rgba(124, 58, 237, 0.3)", bg: "rgba(124, 58, 237, 0.04)", iconBg: "#7C3AED", color: "#7C3AED", glow: "0 10px 30px rgba(124,58,237,0.15)" }, // Purple
        { border: "rgba(245, 158, 11, 0.3)", bg: "rgba(245, 158, 11, 0.04)", iconBg: "#D97706", color: "#D97706", glow: "0 10px 30px rgba(245,158,11,0.15)" }, // Amber
        { border: "rgba(37, 99, 235, 0.3)", bg: "rgba(37, 99, 235, 0.04)", iconBg: "#2563EB", color: "#2563EB", glow: "0 10px 30px rgba(37,99,235,0.15)" }   // Blue
    ];
    
    // Use dynamic icons for each challenge
    const icons = [AlertTriangle, Users, Clock, Zap];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ marginBottom: "3rem" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 30, height: 2, background: GOLD }} />
                  <span style={{ fontSize: "0.85rem", fontWeight: 900, color: GOLD, textTransform: "uppercase", letterSpacing: "0.3em" }}>{subtitle}</span>
                </div>
                <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                {items.map((it: any, i: number) => {
                    const styleConf = threatColors[i % threatColors.length];
                    const IconComp = icons[i % icons.length];
                    
                    let label = ""; let desc = "";
                    if (typeof it === 'string') { 
                         const parsed = parseBoldLabel(it); 
                         label = parsed.label; 
                         desc = parsed.rest; 
                    } else if (it.title) { 
                         label = it.title; 
                         desc = it.desc; 
                    }

                    return (
                        <motion.div 
                            key={i} 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ y: -6, boxShadow: styleConf.glow, borderColor: styleConf.color }}
                            style={{ 
                                padding: "2rem", 
                                borderRadius: 24, 
                                background: SURFACE, 
                                border: `1px solid ${styleConf.border}`, 
                                display: "flex", 
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: "1.5rem",
                                position: "relative",
                                overflow: "hidden",
                                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                            }}
                        >
                            {/* Ambient background glow */}
                            <div style={{ position: "absolute", top: -50, right: -50, width: 180, height: 180, borderRadius: "50%", background: styleConf.color, opacity: 0.05, filter: "blur(40px)", zIndex: 0 }} />
                            
                            {/* Solid Corner Accent */}
                            <div style={{ position: "absolute", top: 0, right: 0, width: 60, height: 60, background: `linear-gradient(135deg, transparent 50%, ${styleConf.bg} 50%)`, zIndex: 0 }} />

                            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", zIndex: 1, width: "100%" }}>
                                <motion.div 
                                    style={{ width: 56, height: 56, borderRadius: 16, background: styleConf.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: `0 8px 16px ${styleConf.color}40`, border: "1px solid rgba(255,255,255,0.1)" }}
                                >
                                    <IconComp color="#FFFFFF" size={28} strokeWidth={2.5} />
                                </motion.div>
                                <div style={{ flex: 1 }}>
                                    {label && <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: TEXT_MAIN, lineHeight: 1.3, letterSpacing: "-0.01em" }}><InlineText text={label} /></h3>}
                                </div>
                            </div>
                            
                            <div style={{ zIndex: 1, paddingLeft: "1rem", borderLeft: `2px solid ${styleConf.border}` }}>
                                <div style={{ fontSize: "1.05rem", color: TEXT_MUTED, fontWeight: 500, lineHeight: 1.65 }}>
                                    <InlineText text={desc} />
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    );
}

/* ── SENTIMENT LAYOUT ────────────────────────────────────────── */
export function LayoutSentiment({ title, subtitle, body }: LayoutProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
         <p style={{ fontSize: "0.85rem", fontWeight: 850, color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
         <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, maxWidth: "800px", margin: "1rem auto 0", lineHeight: 1.6 }}>{body}</p>
      </div>

      <div style={{ flex: 1, display: "flex", gap: "2rem", justifyContent: "center", alignItems: "center", maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
        {/* Positive index */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} style={{ flex: 1, padding: "4rem 3rem", background: "linear-gradient(135deg, rgba(4,120,87,0.05), rgba(4,120,87,0.15))", borderRadius: 32, border: "1px solid rgba(4,120,87,0.2)", textAlign: "center", boxShadow: SHADOW_SM }}>
            <Activity color="#047857" size={64} style={{ margin: "0 auto 1.5rem" }} />
            <div style={{ fontSize: "5rem", fontWeight: 1000, color: "#047857", lineHeight: 1 }}>78%</div>
            <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0F172A", marginTop: "1rem" }}>SENTIMEN POSITIF</div>
            <p style={{ color: "#475569", marginTop: "1rem", lineHeight: 1.6, fontWeight: 500 }}>Dominasi narasi apresiasi struktural dan dukungan publik terhadap kebijakan prioritas daerah.</p>
        </motion.div>

        {/* Negative index */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} style={{ flex: 1, padding: "4rem 3rem", background: "linear-gradient(135deg, rgba(239, 68, 68,0.05), rgba(239, 68, 68,0.15))", borderRadius: 32, border: "1px solid rgba(239, 68, 68,0.2)", textAlign: "center", boxShadow: SHADOW_SM }}>
            <AlertTriangle color="#EF4444" size={64} style={{ margin: "0 auto 1.5rem" }} />
            <div style={{ fontSize: "5rem", fontWeight: 1000, color: "#EF4444", lineHeight: 1 }}>22%</div>
            <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0F172A", marginTop: "1rem" }}>SENTIMEN KRITIS</div>
            <p style={{ color: "#475569", marginTop: "1rem", lineHeight: 1.6, fontWeight: 500 }}>Akumulasi aduan infrastruktur dan peringatan dini potensi *Black Campaign* di wilayah siber.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
