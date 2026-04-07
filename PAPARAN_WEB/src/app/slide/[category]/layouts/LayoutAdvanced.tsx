"use client";

import React from "react";
import { Star, TrendingUp, AlertTriangle, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK, PRIMARY_LIGHT } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

/* ── TIMELINE LAYOUT ───────────────────────────────────────── */
export function LayoutTimeline({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
      <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
      <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", fontWeight: 900, color: TEXT_MAIN, marginBottom: "3rem", letterSpacing: "-0.03em" }}>{title}</h2>
      
      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "2rem" }}>
        {/* Connection Line */}
        <div style={{ position: "absolute", left: "19px", top: "20px", bottom: "20px", width: "2px", background: `linear-gradient(to bottom, ${PRIMARY}, ${GOLD}, transparent)`, opacity: 0.2 }} />
        
        {items.map((item, i) => {
          const { label, rest } = parseBoldLabel(item);
          return (
            <motion.div 
              key={i} 
              whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.02)" }}
              style={{ display: "flex", gap: "2rem", alignItems: "flex-start", position: "relative", cursor: "default" }}
            >
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: i === 0 ? PRIMARY : "rgba(255,255,255,0.05)", border: `3px solid ${i === 0 ? "white" : PRIMARY}`, flexShrink: 0, zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: i === 0 ? `0 0 20px ${PRIMARY}44` : "none" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: i === 0 ? "white" : PRIMARY }} />
              </div>
              <div style={{ ...GLASS_DARK, borderRadius: 28, padding: "1.75rem 2.25rem", flex: 1, borderLeft: i === 0 ? `6px solid ${PRIMARY}` : GLASS_DARK.border, border: "1px solid rgba(255,255,255,0.05)" }}>
                <h4 style={{ margin: "0 0 0.6rem", fontSize: "1.3rem", fontWeight: 900, color: i === 0 ? "white" : GOLD, letterSpacing: "-0.01em" }}>{label}</h4>
                <p style={{ margin: 0, fontSize: "1rem", color: TEXT_MUTED, lineHeight: 1.7 }}><InlineText text={rest} /></p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── KPI GRID LAYOUT ────────────────────────────────────────── */
export function LayoutKPIGrid({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);

  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
      <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
      <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", fontWeight: 900, color: TEXT_MAIN, marginBottom: "3.5rem", letterSpacing: "-0.03em" }}>{title}</h2>
      
      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
        {items.map((item, i) => {
          const { label, rest } = parseBoldLabel(item);
          // Extract percentage if available, else use a random one for demo
          const percentageMatch = rest.match(/(\d+)%/);
          const percentage = percentageMatch ? parseInt(percentageMatch[1]) : (80 + i * 5);

          return (
            <motion.div 
              key={i} 
              whileHover={{ y: -12, backgroundColor: "rgba(142,21,64,0.08)" }}
              style={{ ...GLASS_DARK, borderRadius: 32, padding: "2.5rem", textAlign: "center", position: "relative", border: "1px solid rgba(255,255,255,0.06)", cursor: "default" }}
            >
               <div style={{ position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)", background: `linear-gradient(135deg, ${PRIMARY}, #8E1540)`, borderRadius: 99, padding: "6px 20px", fontSize: "0.7rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "0.15em", boxShadow: "0 10px 25px rgba(142,21,64,0.4)" }}>
                KPI TARGET
               </div>
               
               <div style={{ position: "relative", width: 100, height: 100, margin: "0.5rem auto 2rem" }}>
                  <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                    <motion.circle 
                      cx="50" cy="50" r="40" fill="none" stroke={GOLD} strokeWidth="8" strokeLinecap="round"
                      strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      animate={{ strokeDashoffset: 251.2 * (1 - percentage / 100) }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </svg>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <span style={{ fontSize: "1.4rem", fontWeight: 950, color: TEXT_MAIN }}>{percentage}%</span>
                  </div>
               </div>

               <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: GOLD, marginBottom: "1rem", letterSpacing: "-0.01em", lineHeight: 1.2 }}>{label}</h3>
               <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}><InlineText text={rest} /></p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── SENTIMENT LAYOUT ───────────────────────────────────────── */
export function LayoutSentiment({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const levels = [
    { type: "STRATEGY", color: GOLD, icon: Target },
    { type: "SYSTEM", color: "#10B981", icon: Zap },
    { type: "MONITORING", color: PRIMARY, icon: AlertTriangle },
    { type: "DASHBOARD", color: "#3B82F6", icon: TrendingUp }
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
        <div>
          <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "-0.03em", margin: 0 }}>{title}</h2>
        </div>
        
        {/* Sentiment Gauge Meter */}
        <div style={{ ...GLASS_DARK, padding: "1.5rem 2.5rem", borderRadius: 32, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "2rem", minWidth: "400px", position: "relative", overflow: "hidden" }}>
           <div style={{ position: "relative", width: 120, height: 70 }}>
              <svg viewBox="0 0 100 55" style={{ width: "100%", height: "100%" }}>
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" strokeLinecap="round" />
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="url(#activeGradient)" strokeWidth="8" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset={125.6 * (1 - 0.85)} />
                <defs>
                  <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={PRIMARY} />
                    <stop offset="50%" stopColor={GOLD} />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
                <motion.line 
                  x1="50" y1="50" x2="50" y2="15" 
                  stroke="white" strokeWidth="3" strokeLinecap="round"
                  animate={{ rotate: [60, 65, 60] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  style={{ transformOrigin: "50px 50px" }}
                />
                <circle cx="50" cy="50" r="4" fill="white" />
              </svg>
           </div>
           
           <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.65rem", fontWeight: 900, color: TEXT_MUTED, letterSpacing: "0.2em", marginBottom: "0.25rem" }}>PUBLIC SENTIMENT SCORE</div>
              <div style={{ fontSize: "2.2rem", fontWeight: 950, color: "#10B981", lineHeight: 1 }}>85.4%</div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.65rem", color: "#10B981", fontWeight: 800, marginTop: "0.5rem" }}>
                <TrendingUp size={12} /> +2.4% FROM YESTERDAY
              </div>
           </div>

           <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "rgba(16, 185, 129, 0.3)" }}>
              <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} style={{ width: "30%", height: "100%", background: "#10B981" }} />
           </div>
        </div>
      </div>
      
      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", flex: 1 }}>
        {items.map((item, i) => {
          const { label, rest } = parseBoldLabel(item);
          const lvl = levels[i % levels.length];
          const SIcon = lvl.icon;
          return (
            <motion.div 
              key={i} 
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}
              style={{ ...GLASS_DARK, borderRadius: 32, padding: "2.5rem", position: "relative", borderTop: `8px solid ${lvl.color}`, display: "flex", flexDirection: "column", gap: "1.25rem", border: "1px solid rgba(255,255,255,0.05)", cursor: "default" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${lvl.color}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <SIcon size={22} color={lvl.color} />
                </div>
                <div style={{ fontWeight: 900, fontSize: "0.85rem", color: lvl.color, letterSpacing: "0.15em", textTransform: "uppercase" }}>{lvl.type}</div>
              </div>
              <div style={{ fontSize: "1.5rem", fontWeight: 900, color: TEXT_MAIN, lineHeight: 1.25 }}>{label}</div>
              <p style={{ fontSize: "1rem", color: TEXT_MUTED, lineHeight: 1.7, margin: 0 }}><InlineText text={rest} /></p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
