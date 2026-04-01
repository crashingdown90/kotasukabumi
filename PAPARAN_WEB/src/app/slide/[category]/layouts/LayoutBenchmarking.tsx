"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";
import { GOLD, PRIMARY, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseListItems, parseBoldLabel } from "../components/Shared";

export default function LayoutBenchmarking({ title, subtitle, body }: any) {
  const items = parseListItems(body);
  const data = items.map((item: string) => {
    const { label, rest } = parseBoldLabel(item);
    // Extracting numeric value from string like "± Rp 3,05 Triliun"
    const match = rest.match(/Rp\s*([\d,.]+)/);
    const value = match ? parseFloat(match[1].replace(",", ".")) : 0;
    // Normalize to same scale if Triliun vs Miliar (e.g., Miliar = 0.x Triliun)
    const isMiliar = rest.toLowerCase().includes("miliar");
    const finalValue = isMiliar ? value / 1000 : value;
    
    return { name: label, value: finalValue, originalText: rest };
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <div style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "-0.02em" }}>{title}</h2>
      </div>

      <div style={{ flex: 1, ...GLASS_DARK, borderRadius: 32, padding: "2rem", border: "1px solid rgba(255,255,255,0.05)", minHeight: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: TEXT_MUTED, fontSize: 12, fontWeight: 600 }}
              interval={0}
            />
            <YAxis hide />
            <Tooltip 
              cursor={{ fill: "rgba(255,255,255,0.03)" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div style={{ ...GLASS_DARK, padding: "1rem", borderRadius: 12, border: `1px solid ${GOLD}44`, boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                      <p style={{ color: GOLD, fontWeight: 900, marginBottom: "0.25rem", fontSize: "0.9rem" }}>{payload[0].payload.name}</p>
                      <p style={{ color: TEXT_MAIN, fontSize: "0.85rem" }}>{payload[0].payload.originalText}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="value" radius={[10, 10, 0, 0]} barSize={60}>
              {data.map((entry: any, index: number) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.name.toUpperCase().includes("SUKABUMI") ? GOLD : "rgba(255,255,255,0.1)"} 
                  stroke={entry.name.toUpperCase().includes("SUKABUMI") ? GOLD : "transparent"}
                  strokeWidth={2}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {data.map((d: any, i: number) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.03)", padding: "0.5rem 1rem", borderRadius: 99, fontSize: "0.75rem" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: d.name.toUpperCase().includes("SUKABUMI") ? GOLD : "rgba(255,255,255,0.2)" }} />
            <span style={{ color: TEXT_MUTED, fontWeight: 600 }}>{d.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
