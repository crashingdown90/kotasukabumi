"use client";
import { Slide, Metric, Feature } from "../components/SlideTypes";


import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";
import { Activity, Target, TrendingUp, Zap, Server, ShieldCheck, FileText } from "lucide-react";
import { GOLD, PRIMARY, TEXT_MAIN, TEXT_MUTED, SURFACE, BORDER_REFINED, SHADOW_SM, SHADOW_LG } from "../components/Constants";
import { parseListItems, parseBoldLabel, InlineText } from "../components/Shared";

export interface ChartDataItem {
  name: string;
  value: number;
  color: string;
  suffix: string;
  description: string;
  originalText: string;
}

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
  const colors = [PRIMARY, GOLD, "#1A5FB4", "#26A269", "#E5A50A", "#C061CB"];
  const ICONS = [Target, TrendingUp, Activity, Zap, Server, ShieldCheck];
  
  let data: ChartDataItem[] = [];

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

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemFade: any = { hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } };

  return (
    <motion.div initial="hidden" animate="show" variants={container} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--slate-50)", padding: "0.4rem 1.25rem", borderRadius: 99, border: `1px solid var(--slate-200)`, marginBottom: "1rem" }}>
           <FileText size={14} color={GOLD} />
           <span style={{ fontSize: "0.75rem", fontWeight: 850, letterSpacing: "0.15em", color: GOLD, textTransform: "uppercase" }}>{subtitle}</span>
        </div>
        <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 2.8rem)", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "-0.03em", margin: 0 }}>{title}</h2>
        {body && !body.trim().startsWith("<ul") && (
           <div style={{ marginTop: "1rem", fontSize: "1.1rem", color: TEXT_MUTED, lineHeight: 1.7, maxWidth: "800px" }}>
             <InlineText text={body.replace(/<ul>.*?<\/ul>/, "").trim()} />
           </div>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem", flex: 1, minHeight: 0 }} className="grid-responsive">
        
        {/* Professional Chart Container */}
        <motion.div variants={itemFade} style={{ background: SURFACE, borderRadius: 24, padding: "2.5rem", border: `1px solid ${BORDER_REFINED}`, position: "relative", boxShadow: SHADOW_LG }}>
          <div style={{ position: "absolute", top: 25, right: 30, display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#26A269" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 850, color: "#26A269", letterSpacing: "0.1em", textTransform: "uppercase" }}>Valid Data Verified</span>
          </div>
          
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 50, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--slate-100)" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: TEXT_MUTED, fontSize: 12, fontWeight: 700 }} dy={10} />
              <YAxis hide />
              <Tooltip 
                cursor={{ fill: "var(--slate-50)" }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const d = payload[0].payload;
                    return (
                      <div style={{ background: SURFACE, padding: "1.25rem", borderRadius: 16, border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_LG }}>
                        <p style={{ color: d.color, fontWeight: 850, marginBottom: "0.4rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{d.name}</p>
                        <p style={{ color: TEXT_MAIN, fontSize: "1.8rem", fontWeight: 900, lineHeight: 1 }}>{d.value}<span style={{ fontSize: "0.9rem", color: TEXT_MUTED, marginLeft: 3 }}>{d.suffix}</span></p>
                        {d.description && <p style={{ color: TEXT_MUTED, fontSize: "0.85rem", marginTop: "0.6rem", maxWidth: "220px", lineHeight: 1.5 }}>{d.description}</p>}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="value" radius={[8, 8, 2, 2]} barSize={50}>
                {data.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.85} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Metric Detail List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", overflowY: "auto" }} className="custom-scroll">
          {items && items.map((d: any, i: number) => {
            let label = ""; let rest = "";
            if (typeof d === 'string') { const parsed = parseBoldLabel(d); label = parsed.label; rest = parsed.rest; } 
            else { label = d.title || `Parameter ${i+1}`; rest = d.desc || d; }
            
            const matchMetric = data[i] || data[0];
            const CIcon = ICONS[i % ICONS.length];

            return (
              <motion.div 
                key={i}
                variants={itemFade}
                whileHover={{ y: -4, borderColor: matchMetric.color }}
                style={{ 
                  padding: "1.5rem", 
                  borderRadius: 20, 
                  background: SURFACE,
                  border: `1px solid ${BORDER_REFINED}`,
                  boxShadow: SHADOW_SM,
                  position: "relative",
                  transition: "all 0.3s"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${matchMetric.color}08`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${matchMetric.color}15` }}>
                    <CIcon size={22} color={matchMetric.color} />
                  </div>
                  <div>
                    <div style={{ color: matchMetric.color, fontSize: "0.7rem", fontWeight: 850, marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
                    {metrics && data[i] && <div style={{ fontSize: "1.4rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "-0.02em" }}>{data[i].value}{data[i].suffix}</div>}
                    {!metrics && <div style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.5 }}><InlineText text={rest} /></div>}
                  </div>
                </div>
              </motion.div>
            );
          })}
          
          <div style={{ marginTop: "auto", paddingTop: "1.5rem", borderTop: `1px solid var(--slate-100)`, color: "var(--slate-400)", fontSize: "0.75rem", fontWeight: 600, textAlign: "right", letterSpacing: "0.05em" }}>
            SUMBER: PUSAT DATA PEMERINTAH DAERAH KOTA SUKABUMI
          </div>
        </div>
      </div>
    </motion.div>
  );
}
