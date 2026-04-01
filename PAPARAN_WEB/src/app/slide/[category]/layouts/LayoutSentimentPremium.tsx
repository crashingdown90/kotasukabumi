import React from "react";
import { motion } from "framer-motion";
import { Heart, ThumbsDown, BarChart3, Target, PieChart, TrendingUp, Search } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";
import { PieChart as RePieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

const sentimentData = [
  { name: 'Positif', value: 72, color: '#10B981' },
  { name: 'Netral', value: 18, color: GOLD },
  { name: 'Negatif', value: 10, color: PRIMARY },
];

export default function LayoutSentimentPremium({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const colors = [PRIMARY, GOLD, "#3B82F6"];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "2rem", animation: "animate-up 0.8s ease-out" }}>
      <div>
        <p style={{ fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.7rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 950, color: TEXT_MAIN, margin: 0, letterSpacing: "-0.04em" }}>{title}</h2>
      </div>

      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", flex: 1, minHeight: 0 }}>
        
        {/* ── LEFT: SENTIMENT GAUGE & PIE ──────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          <div style={{ flex: 1.2, ...GLASS_DARK, borderRadius: 32, position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ position: "absolute", top: 24, left: 24, display: "flex", alignItems: "center", gap: "0.8rem" }}>
               <Target size={20} color={GOLD} />
               <div style={{ fontSize: "0.75rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "0.1em" }}>TARGET SENTIMEN POSITIF: 85%</div>
            </div>

            {/* Gauge Simulation */}
            <div style={{ width: "100%", height: 280, position: "relative" }}>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 style={{ width: "100%", height: "100%" }}
               >
                 <ResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                      <Pie
                        data={sentimentData}
                        cx="50%" cy="80%"
                        startAngle={180} endAngle={0}
                        innerRadius="80%" outerRadius="110%"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {sentimentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RePieChart>
                 </ResponsiveContainer>
               </motion.div>
               
               {/* Center Value */}
               <div style={{ position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
                  <div style={{ fontSize: "3.5rem", fontWeight: 1000, color: TEXT_MAIN, lineHeight: 1 }}>72%</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#10B981", letterSpacing: "0.2em", marginTop: "0.5rem" }}>SENTIMENT RATIO</div>
               </div>
            </div>

            {/* Legend */}
            <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
               {[
                 { label: "Positif", color: "#10B981" },
                 { label: "Netral", color: GOLD },
                 { label: "Negatif", color: PRIMARY }
               ].map((l, i) => (
                 <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: l.color }} />
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: TEXT_MUTED }}>{l.label}</span>
                 </div>
               ))}
            </div>
          </div>

          <div style={{ flex: 0.8, ...GLASS_DARK, borderRadius: 28, padding: "1.5rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
             <div style={{ width: 60, height: 60, borderRadius: 16, background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <TrendingUp size={30} color="#10B981" />
             </div>
             <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 900, color: GOLD, letterSpacing: "0.1em", marginBottom: "0.2rem" }}>OPTIMISME PUBLIK</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 950, color: TEXT_MAIN }}>Meningkat 12% dibanding bulan lalu</div>
             </div>
          </div>
        </div>

        {/* ── RIGHT: ANALYSIS PILLARS ─────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", justifyContent: "center" }}>
          {items.map((item, i) => {
            const { label, rest } = parseBoldLabel(item);
            const LabelIcon = i === 0 ? Heart : i === 1 ? ThumbsDown : Search;
            const color = i === 0 ? "#10B981" : i === 1 ? PRIMARY : GOLD;

            return (
              <motion.div 
                key={i}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                style={{ 
                   ...GLASS_DARK, borderRadius: 24, padding: "1.5rem", 
                   borderLeft: `6px solid ${color}`, position: "relative",
                   background: `linear-gradient(90deg, ${color}08, transparent)`
                }}
              >
                <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
                   <div style={{ 
                      width: 44, height: 44, borderRadius: 12, 
                      background: `${color}15`, border: `1px solid ${color}33`, 
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                   }}>
                      <LabelIcon size={22} color={color} />
                   </div>
                   <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "1.1rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.3rem" }}>{label}</div>
                      <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.5, fontWeight: 500 }}>
                         <InlineText text={rest} />
                      </p>
                   </div>
                </div>
              </motion.div>
            );
          })}
          
          <div style={{ marginTop: "1rem", padding: "1rem 1.5rem", borderRadius: 20, border: "1px dashed rgba(255,255,255,0.1)", textAlign: "center" }}>
             <p style={{ fontSize: "0.75rem", color: TEXT_MUTED, fontWeight: 700, margin: 0 }}>
               DATA DIVALIDASI SECARA ORGANIK MELALUI <b>AI NLP ANALYSIS</b>
             </p>
          </div>
        </div>

      </div>
    </div>
  );
}
