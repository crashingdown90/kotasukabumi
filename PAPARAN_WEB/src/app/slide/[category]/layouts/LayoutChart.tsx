"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";
import { motion } from "framer-motion";
import { Activity, Target, TrendingUp, Zap, Server, ShieldCheck } from "lucide-react";
import { GOLD, PRIMARY, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseListItems, parseBoldLabel } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  metrics?: {label: string, value: string, unit?: string, trend?: string}[];
  features?: {title: string, desc: string}[];
  highlights?: string[];
}

export default function LayoutChart({ title, subtitle, body, metrics, features, highlights }: LayoutProps) {
  const items = features || highlights || parseListItems(body);
  const colors = [PRIMARY, GOLD, "#10B981", "#3B82F6", "#8B5CF6", "#F59E0B"];
  const ICONS = [Target, TrendingUp, Activity, Zap, Server, ShieldCheck];
  
  let data: any[] = [];

  if (metrics && metrics.length > 0) {
    data = metrics.map((m, i) => ({
      name: m.label,
      value: parseFloat(m.value) || 0,
      color: colors[i % colors.length],
      suffix: m.unit || "",
      description: m.trend || "",
      originalText: m.label
    }));
  } else {
    data = items.map((item: any, i: number) => {
      let label = ""; let rest = "";
      if (typeof item === 'string') { const parsed = parseBoldLabel(item); label = parsed.label; rest = parsed.rest; } 
      else { label = item.title; rest = item.desc; }

      const valMatch = rest.match(/(\d+)/);
      const value = valMatch ? parseInt(valMatch[0]) : 0;
      let suffix = ""; let description = "";
      
      if (valMatch) {
        const parts = rest.split(valMatch[0]);
        suffix = (parts[1] || "").split(" ")[0] || "";
        description = (parts[1] || "").replace(suffix, "").trim();
      }

      return { 
        name: label || `Data ${i+1}`, 
        value, 
        color: colors[i % colors.length], 
        suffix,
        description,
        originalText: rest
      };
    });
  }

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemFade: any = { hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } } };

  return (
    <motion.div initial="hidden" animate="show" variants={container} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.6rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", fontWeight: 900, color: "white", letterSpacing: "-0.02em", margin: 0 }}>{title}</h2>
        {body && !body.trim().startsWith("<ul") && (
           <p style={{ marginTop: "1rem", fontSize: "1.05rem", color: TEXT_MUTED, lineHeight: 1.6, maxWidth: "80%" }}>{body.replace(/<ul>.*?<\/ul>/, "").trim()}</p>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2.5rem", flex: 1, minHeight: 0 }} className="grid-responsive">
        
        {/* Interactive Chart Container */}
        <motion.div variants={itemFade} style={{ ...GLASS_DARK, borderRadius: 32, padding: "2.5rem", border: "1px solid rgba(255,255,255,0.08)", position: "relative", boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}>
          <div style={{ position: "absolute", top: 20, right: 20, padding: "8px 16px", background: "rgba(16, 185, 129, 0.15)", borderRadius: 12, border: "1px solid rgba(16, 185, 129, 0.3)" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 900, color: "#10B981", letterSpacing: "0.1em" }}>● LIVE ANALYSIS</span>
          </div>
          
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 50, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: TEXT_MUTED, fontSize: 13, fontWeight: 700 }} dy={10} />
              <YAxis hide />
              <Tooltip 
                cursor={{ fill: "rgba(255,255,255,0.03)" }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const d = payload[0].payload;
                    return (
                      <div style={{ ...GLASS_DARK, padding: "1.2rem", borderRadius: 16, border: `1px solid ${d.color}aa`, boxShadow: "0 20px 50px rgba(0,0,0,0.6)" }}>
                        <p style={{ color: d.color, fontWeight: 900, marginBottom: "0.4rem", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{d.name}</p>
                        <p style={{ color: "white", fontSize: "2rem", fontWeight: 900, lineHeight: 1 }}>{d.value}<span style={{ fontSize: "1rem", color: TEXT_MUTED, marginLeft: 2 }}>{d.suffix}</span></p>
                        {d.description && <p style={{ color: TEXT_MUTED, fontSize: "0.85rem", marginTop: "0.5rem", maxWidth: "200px" }}>{d.description}</p>}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="value" radius={[12, 12, 4, 4]} barSize={60} animationDuration={1800} animationBegin={300}>
                {data.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.9} style={{ filter: `drop-shadow(0 8px 16px ${entry.color}66)` }} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Dynamic Parameter Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", overflowY: "auto" }} className="custom-scroll">
          
          {items && items.map((d: any, i: number) => {
            let label = ""; let rest = "";
            if (typeof d === 'string') { const parsed = parseBoldLabel(d); label = parsed.label; rest = parsed.rest; } 
            else { label = d.title || `Parameter ${i+1}`; rest = d.desc || d; }
            
            // If we have metrics, highlight the matching metric value!
            const matchMetric = data[i] || data[0];
            const CIcon = ICONS[i % ICONS.length];

            return (
              <motion.div 
                key={i}
                variants={itemFade}
                whileHover={{ x: -5, backgroundColor: "rgba(255,255,255,0.06)", borderColor: `${matchMetric.color}aa` }}
                style={{ 
                  padding: "1.5rem", 
                  borderRadius: 24, 
                  background: `linear-gradient(135deg, rgba(255,255,255,0.02), rgba(0,0,0,0.2))`,
                  border: `1px solid rgba(255,255,255,0.05)`,
                  position: "relative",
                  overflow: "hidden"
                }}
                className="card-hover"
              >
                <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "4px", background: matchMetric.color }} />
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${matchMetric.color}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${matchMetric.color}44` }}>
                    <CIcon size={22} color={matchMetric.color} />
                  </div>
                  <div>
                    <div style={{ color: matchMetric.color, fontSize: "0.75rem", fontWeight: 900, marginBottom: "0.2rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
                    {metrics && data[i] && <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "white", marginBottom: "0.4rem", letterSpacing: "-0.02em" }}>{data[i].value}{data[i].suffix}</div>}
                    <div style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6 }}>{rest}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          
          <motion.div 
            variants={itemFade}
            style={{ marginTop: "auto", paddingTop: "1rem", color: TEXT_MUTED, fontSize: "0.75rem", fontStyle: "italic", textAlign: "right" }}
          >
            Sumber: Pusat Analisis & Integrasi Data Pemerintah Daerah
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
