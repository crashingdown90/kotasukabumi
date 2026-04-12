"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, ShieldAlert, Zap, AlertTriangle, Radio, 
  Clock, Eye, Search, Target, Activity, Shield, 
  Lock, Bell, Flag, Hexagon, RadioTower, Mic, MessageSquare, ArrowRight, LayoutGrid, Network, Users, Landmark,
  UserCheck, Globe, Smartphone
} from "lucide-react";
import { 
  PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK, SURFACE, 
  BORDER_REFINED, SHADOW_SM, SHADOW_LG, PRIMARY_LIGHT 
} from "../components/Constants";
import { parseListItems, parseBoldLabel, InlineText } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: any[];
}

/* ── REPUTATION SHIELD LAYOUT (UPGRADED HUD) ──────────────────── */
export function LayoutReputationShield({ title, subtitle, body, features }: LayoutProps) {
  const items = features || [];
  const icons = [Search, Zap, MessageSquare, ShieldCheck];
  const colors = [PRIMARY, GOLD, "#0ea5e9", "#10b981"];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
      {/* Background Decor */}
      <div style={{ position: "absolute", inset: -100, backgroundImage: `radial-gradient(circle at 50% 50%, ${PRIMARY}05 0%, transparent 70%)`, zIndex: 0 }} />

      <div style={{ textAlign: "center", marginBottom: "3.5rem", position: "relative", zIndex: 1 }}>
        <p style={{ fontSize: "0.9rem", fontWeight: 900, color: GOLD, letterSpacing: "0.45em", textTransform: "uppercase", marginBottom: "1rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.04em" }}>{title}</h2>
        <div style={{ width: 80, height: 4, background: PRIMARY, borderRadius: 2, margin: "1.5rem auto 0" }} />
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1.5fr 1fr", gap: "2rem", alignItems: "center", position: "relative", zIndex: 1 }}>
        {/* Left Side Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {items.slice(0, 2).map((it, i) => {
            const Icon = icons[i];
            const color = colors[i];
            return (
              <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 + i * 0.1 }} key={i}
                 style={{ padding: "1.8rem", borderRadius: 28, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, textAlign: "right" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "flex-end", marginBottom: "1rem" }}>
                   <h3 style={{ fontSize: "1.15rem", fontWeight: 950, color: TEXT_MAIN }}><InlineText text={it.title} /></h3>
                   <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}11`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${color}22` }}>
                      <Icon size={22} color={color} />
                   </div>
                </div>
                <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500 }}><InlineText text={it.desc} /></p>
              </motion.div>
            );
          })}
        </div>

        {/* Center Shield Visual */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             style={{ position: "absolute", width: "120%", height: "120%", borderRadius: "50%", border: `1px dashed ${GOLD}33` }} />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
             style={{ position: "absolute", width: "105%", height: "105%", borderRadius: "50%", border: `1px solid ${PRIMARY}11` }} />
          
          <div style={{ width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle, ${PRIMARY} 0%, ${PRIMARY_LIGHT} 100%)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: SHADOW_LG, border: "8px solid white", position: "relative" }}>
             <Shield size={120} color="white" strokeWidth={1.5} />
             <div style={{ position: "absolute", inset: -15, borderRadius: "50%", border: `2px solid ${GOLD}44`, animation: "pulse 3s infinite" }} />
          </div>
          
          {/* Status Indicators */}
          <div style={{ position: "absolute", bottom: -40, background: SURFACE, padding: "0.75rem 1.5rem", borderRadius: 99, border: `1px solid ${PRIMARY}22`, boxShadow: SHADOW_SM, display: "flex", alignItems: "center", gap: "0.75rem" }}>
             <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981" }} />
             <span style={{ fontSize: "0.75rem", fontWeight: 900, color: PRIMARY, letterSpacing: "0.15em" }}>PROTECTION ACTIVE</span>
          </div>
        </div>

        {/* Right Side Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {items.slice(2, 4).map((it, i) => {
            const Icon = icons[i + 2];
            const color = colors[i + 2];
            return (
              <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 + i * 0.1 }} key={i}
                 style={{ padding: "1.8rem", borderRadius: 28, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                   <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}11`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${color}22` }}>
                      <Icon size={22} color={color} />
                   </div>
                   <h3 style={{ fontSize: "1.15rem", fontWeight: 950, color: TEXT_MAIN }}><InlineText text={it.title} /></h3>
                </div>
                <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500 }}><InlineText text={it.desc} /></p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: "3rem", padding: "1.5rem 2rem", borderRadius: 20, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, textAlign: "center", boxShadow: SHADOW_SM }}>
         <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500 }}>{body}</p>
      </div>
    </div>
  );
}

/* ── CRISIS MATRIX LAYOUT ──────────────────────────────────── */
export function LayoutCrisisMatrix({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  return (
    <div style={{ height: "100%" }}>
      <h2 style={{ fontSize: "2.5rem", fontWeight: 950, marginBottom: "2rem" }}>{title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "1.5rem", height: "calc(100% - 100px)" }}>
        {items.slice(0, 4).map((it, i) => (
          <div key={i} style={{ padding: "2.5rem", borderRadius: 24, background: SURFACE, border: "2px solid rgba(220, 38, 38, 0.1)", position: "relative" }}>
             <AlertTriangle color="#DC2626" size={24} style={{ marginBottom: "1rem" }} />
             <InlineText text={it} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── CRISIS SOP LAYOUT ─────────────────────────────────────── */
export function LayoutCrisisSOP({ title, subtitle, body, features }: LayoutProps) {
  const steps = features || [];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem", position: "relative" }}>
         {/* Subtle red ambiance in header */}
         <div style={{ position: "absolute", top: -50, left: "50%", transform: "translateX(-50%)", width: 300, height: 100, background: "rgba(239,68,68,0.1)", filter: "blur(60px)", zIndex: -1 }} />
         <p style={{ fontSize: "0.85rem", fontWeight: 900, color: "#EF4444", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
         <p style={{ fontSize: "1rem", color: TEXT_MUTED, maxWidth: "800px", margin: "1rem auto 0", lineHeight: 1.6, fontWeight: 500 }}>{body}</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", flex: 1, alignItems: "stretch" }}>
         {steps.map((s: any, i: number) => (
            <motion.div 
               initial={{ y: 20, opacity: 0 }} 
               animate={{ y: 0, opacity: 1 }} 
               transition={{ delay: 0.15 * i + 0.1 }} 
               whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(239,68,68,0.15)", borderColor: "rgba(239,68,68,0.6)" }}
               key={i} 
               style={{ 
                 position: "relative", padding: "2.5rem 2rem", background: "#0B1120", borderRadius: 24, 
                 border: "1px solid rgba(239, 68, 68, 0.2)", boxShadow: SHADOW_SM, overflow: "hidden", 
                 display: "flex", flexDirection: "column", transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
               }}>
               
               {/* Red gradient top accent */}
               <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #DC2626, #EF4444)" }} />
               
               {/* Giant faint icon in the background */ }
               <div style={{ position: "absolute", right: -40, bottom: -40, opacity: 0.03, transform: "rotate(-15deg)" }}>
                  <ShieldAlert size={220} color="#FFFFFF" />
               </div>
               
               {/* Ambient Glow */}
               <div style={{ position: "absolute", right: 0, bottom: 0, width: 150, height: 150, background: "rgba(239,68,68,0.1)", filter: "blur(50px)", borderRadius: "50%" }} />
               
               <div style={{ fontSize: "0.85rem", fontWeight: 1000, color: "#EF4444", letterSpacing: "0.2em", marginBottom: "1.5rem", borderBottom: "1px solid rgba(239,68,68,0.15)", paddingBottom: "0.75rem", alignSelf: "flex-start", zIndex: 1 }}>
                 {s.time || `STEP 0${i+1}`}
               </div>
               
               <h3 style={{ fontSize: "1.5rem", fontWeight: 950, color: "#FFFFFF", marginBottom: "1rem", lineHeight: 1.3, zIndex: 1, letterSpacing: "-0.01em" }}>
                 <InlineText text={s.title} />
               </h3>
               
               <p style={{ fontSize: "0.95rem", color: "#94A3B8", lineHeight: 1.7, zIndex: 1, fontWeight: 400 }}>
                 <InlineText text={s.desc} />
               </p>
            </motion.div>
         ))}
      </div>
    </motion.div>
  );
}

/* ── CRISIS MITIGATION LAYOUT ──────────────────────────────── */
export function LayoutCrisisMitigation({ title, subtitle, body }: LayoutProps) {
  const items = body.split("|").map(s => s.trim());
  return (
    <div style={{ textAlign: "center" }}>
      <ShieldAlert size={48} color="#DC2626" style={{ margin: "0 auto 1.5rem" }} />
      <h2 style={{ fontSize: "2.8rem", fontWeight: 950, color: TEXT_MAIN }}>{title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "3rem" }}>
         {items.map((it, i) => (
            <div key={i} style={{ padding: "2rem", borderRadius: 24, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, fontSize: "1.1rem", boxShadow: SHADOW_SM }}>
               <InlineText text={it} />
            </div>
         ))}
      </div>
    </div>
  );
}

/* ── GOLDEN TIME LAYOUT ────────────────────────────────────── */
export function LayoutGoldenTime({ title, subtitle, body, features }: LayoutProps) {
  const steps = features || [];
  
  // Escalating severity colors: Emerald (Low), Blue (Medium), Amber (High), Red (Critical)
  const severityColors = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444"];
  const severityIcons = [Clock, Activity, ShieldAlert, AlertTriangle];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 1, paddingBottom: "1.5rem" }}>
       
       {/* Background Subtle Gradient */}
       <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(4,120,87,0.03) 0%, transparent 60%)", zIndex: -1, pointerEvents: "none" }} />

       {/* Bureaucratic Header (Compressed Margins) */}
       <div style={{ marginBottom: "1.5rem", textAlign: "center", position: "relative" }}>
          <div style={{ width: 80, height: 3, background: PRIMARY, margin: "0 auto 1.25rem", borderRadius: "2px", boxShadow: `0 0 12px ${PRIMARY}60` }} />
          <p style={{ fontSize: "0.8rem", fontWeight: 850, color: PRIMARY, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.6rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>{title}</h2>
          {body && <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, maxWidth: "1050px", margin: "0 auto", lineHeight: 1.5, fontWeight: 500 }}>{body}</p>}
       </div>

       {/* Horizontal Timeline Grid (Compressed Paddings) */}
       <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", width: "100%", maxWidth: "1350px", margin: "0 auto", position: "relative", alignContent: "start" }}>
          
          {/* Main Connector Line behind cards */}
          <div style={{ position: "absolute", left: "12%", right: "12%", top: "34px", height: "1px", background: "#E2E8F0", zIndex: 0 }} />

          {steps.map((s: any, i: number) => {
             const svColor = severityColors[i % severityColors.length];
             const SvIcon = severityIcons[i % severityIcons.length];
             
             return (
             <motion.div key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}
                style={{ flex: 1, padding: "1.25rem 1.25rem", borderRadius: 16, background: "#FFFFFF", border: "1px solid #E2E8F0", position: "relative", boxShadow: "0 10px 30px rgba(15,23,42,0.03)", display: "flex", flexDirection: "column", zIndex: 1 }}>
                
                {/* Top Colored Bar matched to Severity */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: svColor, borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }} />

                {/* Cybernetic Node Header */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.75rem", marginBottom: "1rem", position: "relative", zIndex: 2 }}>
                   <div style={{ width: 44, height: 44, borderRadius: 12, background: svColor, display: "flex", alignItems: "center", justifyContent: "center", border: `3px solid #FFFFFF`, boxShadow: `0 0 0 4px ${svColor}15`, flexShrink: 0 }}>
                      <SvIcon size={22} color="#FFFFFF" strokeWidth={2.5} />
                   </div>
                   <div style={{ fontSize: "1.05rem", fontWeight: 950, color: svColor, letterSpacing: "-0.01em", background: "#FFFFFF", padding: "0 0.25rem", borderRadius: "6px", marginLeft: "-0.25rem" }}>{s.metric}</div>
                </div>
                
                <h3 style={{ fontSize: "1.05rem", fontWeight: 850, color: "#0F172A", lineHeight: 1.35, marginBottom: "0.75rem", minHeight: "45px", display: "flex", alignItems: "flex-start" }}>
                   <InlineText text={s.title} />
                </h3>
                
                <div style={{ width: "100%", height: "1px", background: "#F1F5F9", marginBottom: "0.75rem" }} />
                
                <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.5, fontWeight: 500, margin: 0 }}>
                   <InlineText text={s.desc || ""} />
                </p>

                {/* Tampilan Issues SLA Array */}
                {s.issues && Array.isArray(s.issues) && s.issues.length > 0 && (
                   <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px dashed #E2E8F0", position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column" }}>
                      <div style={{ fontSize: "0.7rem", fontWeight: 900, color: svColor, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Kategori Isu (SLA):</div>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                         {s.issues.map((issue: string, idx: number) => (
                           <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.4rem", fontSize: "0.8rem", color: "#334155", fontWeight: 600, lineHeight: 1.35 }}>
                              <div style={{ width: 4, height: 4, borderRadius: "50%", background: svColor, marginTop: "0.3rem", flexShrink: 0 }} />
                              <InlineText text={issue} />
                           </li>
                         ))}
                      </ul>
                   </div>
                )}

                {/* Step Indicator Watermark */}
                <div style={{ position: "absolute", bottom: "1rem", right: "1rem", fontSize: "3.5rem", fontWeight: 900, color: "rgba(15,23,42,0.02)", pointerEvents: "none", lineHeight: 0.8, zIndex: 0 }}>{i+1}</div>
             </motion.div>
          )})}
       </div>
    </motion.div>
  );
}

/* ── CYBER WATCH LAYOUT ────────────────────────────────────── */
export function LayoutCyberWatch({ title, subtitle, body, features }: LayoutProps) {
  const items = features || [];
  const icons = [RadioTower, Search, Eye, Target];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
      
      {/* Background Global Radar Animation */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, border: `1px dashed ${PRIMARY}22`, borderRadius: "50%", pointerEvents: "none", zIndex: 0, opacity: 0.5 }}>
         <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", top: 0, left: "50%", width: "50%", height: "50%", originX: 0, originY: "100%", background: `conic-gradient(from 0deg, transparent 0deg, ${PRIMARY}15 90deg)`, borderRight: `2px solid ${PRIMARY}40` }} />
         <div style={{ position: "absolute", inset: 150, border: `1px solid ${PRIMARY}15`, borderRadius: "50%" }} />
         <div style={{ position: "absolute", inset: 250, border: `1px solid ${PRIMARY}30`, borderRadius: "50%" }} />
      </div>

      <div style={{ textAlign: "center", marginBottom: "2rem", position: "relative", zIndex: 1 }}>
         <p style={{ fontSize: "0.8rem", fontWeight: 900, color: GOLD, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
         <div style={{ width: 60, height: 3, background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`, margin: "1rem auto 0", borderRadius: 2 }} />
         <p style={{ fontSize: "1rem", color: TEXT_MUTED, maxWidth: "800px", margin: "1rem auto 0", lineHeight: 1.6, fontWeight: 500 }}>{body}</p>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignContent: "center", maxWidth: "1100px", margin: "0 auto", width: "100%", zIndex: 1, paddingBottom: "2rem" }}>
         {items.map((it: any, i: number) => {
            const QuadrantIcon = icons[i % icons.length];
            return (
              <motion.div 
                 initial={{ y: 20, opacity: 0 }} 
                 animate={{ y: 0, opacity: 1 }} 
                 transition={{ delay: 0.1 * i + 0.1 }} 
                 whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.06)", borderColor: `${GOLD}66` }}
                 key={i} 
                 style={{ 
                   padding: "2rem", borderRadius: 24, ...GLASS_DARK, 
                   border: `1px solid rgba(255,255,255,0.7)`, position: "relative", 
                   display: "flex", flexDirection: "column", boxShadow: SHADOW_SM, overflow: "hidden",
                   transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                 }}>
                 
                 {/* Internal Card Gradient */}
                 <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, background: `radial-gradient(circle at top right, ${PRIMARY}11 0%, transparent 70%)` }} />
                 <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: `linear-gradient(180deg, ${PRIMARY}, ${GOLD}33)` }} />

                 <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1rem", zIndex: 1 }}>
                   <div style={{ position: "relative" }}>
                     {/* Pulse behind icon */}
                     <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: "absolute", inset: -5, background: `${PRIMARY}40`, borderRadius: "50%" }} />
                     <div style={{ width: 50, height: 50, borderRadius: 14, background: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2, boxShadow: `0 8px 16px ${PRIMARY}40` }}>
                        <QuadrantIcon size={24} color="white" />
                     </div>
                   </div>
                   <h3 style={{ fontSize: "1.35rem", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.01em", lineHeight: 1.2 }}><InlineText text={it.title} /></h3>
                 </div>
                 
                 <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, flex: 1, zIndex: 1, fontWeight: 500 }}><InlineText text={it.desc} /></p>
                 
                 <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
                   <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                     <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981", animation: "pulse 2s infinite" }} />
                     <span style={{ fontSize: "0.75rem", fontWeight: 900, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.15em" }}>Status</span>
                   </div>
                   <div style={{ background: "#0F172A", padding: "0.4rem 1rem", borderRadius: 8, border: `1px solid ${PRIMARY}33` }}>
                     <span style={{ fontSize: "0.9rem", fontWeight: 800, color: "#10b981", letterSpacing: "0.05em", fontFamily: "monospace" }}>[{it.metric}]</span>
                   </div>
                 </div>
              </motion.div>
            );
         })}
      </div>
    </div>
  );
}

/* ── RAPID RESPONSE LAYOUT ─────────────────────────────────── */
export function LayoutRapidResponse({ title, subtitle, body, features }: LayoutProps) {
  const items = features || [];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
         <p style={{ fontSize: "0.85rem", fontWeight: 850, color: "#EF4444", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
         <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, maxWidth: "800px", margin: "1rem auto 0", lineHeight: 1.6 }}>{body}</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "900px", margin: "0 auto", width: "100%", justifyContent: "center" }}>
         {items.map((it: any, i: number) => (
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 * i }} key={i} style={{ padding: "2rem 2.5rem", borderRadius: 24, background: "#FFFFFF", border: `1px solid ${BORDER_REFINED}`, display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: SHADOW_SM, position: "relative", overflow: "hidden" }}>
               <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "6px", background: "#EF4444" }} />
               <div style={{ flex: 1, display: "flex", gap: "1.5rem", alignItems: "center" }}>
                  <div style={{ width: 64, height: 64, borderRadius: 20, background: "rgba(239, 68, 68, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                     <Zap size={32} color="#EF4444" />
                  </div>
                  <div>
                     <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: "#0F172A", marginBottom: "0.4rem" }}><InlineText text={it.title} /></h3>
                     <p style={{ fontSize: "1rem", color: "#475569", fontWeight: 500 }}><InlineText text={it.desc} /></p>
                  </div>
               </div>
               <div style={{ background: "#0F172A", color: "white", padding: "0.75rem 1.5rem", borderRadius: 16, fontWeight: 900, fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Clock size={18} color="#EF4444" />
                  {it.metric}
               </div>
            </motion.div>
         ))}
      </div>
    </motion.div>
  );
}
/* ── ORCHESTRATION LAYOUT (LIGHT TACTICAL TREE) ──────────────────────────────── */
export function LayoutOrchestration({ title, subtitle, features, body }: LayoutProps) {
  const nodes = features || [];
  if (nodes.length !== 4) return <div style={{ color: "red", padding: "2rem" }}>LayoutOrchestration requires exactly 4 nodes in features array.</div>;
  
  return (
    <div style={{ height: "100%", background: "#FFFFFF", borderRadius: 32, padding: "2rem 2.5rem", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", border: `1px solid rgba(0,0,0,0.03)`, boxShadow: "0 20px 50px rgba(0,0,0,0.05)" }}>
      {/* Light Tactical Background Layers */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.03) 1px, transparent 0)`, backgroundSize: "32px 32px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "0%", left: "50%", transform: "translateX(-50%)", width: "100%", height: "100%", background: "radial-gradient(circle at 50% 0%, rgba(225, 29, 72, 0.03) 0%, transparent 40%)", pointerEvents: "none" }} />

      {/* Header - Compacted */}
      <div style={{ textAlign: "center", marginBottom: "2rem", zIndex: 1, position: "relative", flexShrink: 0 }}>
         <h2 style={{ fontSize: "2.4rem", fontWeight: 1000, color: "#0F172A", letterSpacing: "-0.03em", marginBottom: subtitle ? "0.5rem" : "0" }}>{title}</h2>
         {subtitle && <p style={{ color: "#64748B", letterSpacing: "0.15em", textTransform: "uppercase", fontSize: "0.85rem", fontWeight: 700 }}>{subtitle}</p>}
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1, position: "relative", justifyContent: "space-between" }}>
         
         {/* 1. TOP NODE - Compacted padding */}
         <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ padding: "0.75rem 2.5rem", borderRadius: 99, background: "linear-gradient(135deg, #E11D48 0%, #9F1239 100%)", boxShadow: "0 10px 25px rgba(190, 18, 60, 0.3)", border: "1px solid #FDA4AF", borderBottom: "4px solid #881337", display: "flex", alignItems: "center", gap: "1rem", zIndex: 10, flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
               <ShieldCheck color="#FFFFFF" size={18} />
            </div>
            <div style={{ textAlign: "left" }}>
               <div style={{ fontSize: "1.05rem", fontWeight: 900, color: "#FFFFFF", letterSpacing: "0.02em" }}>{nodes[0].title}</div>
               {nodes[0].metric ? <div style={{ fontSize: "0.75rem", color: "#FECDD3", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{nodes[0].metric}</div> : null}
            </div>
         </motion.div>

         {/* Top Vertical Drop - Shortened */}
         <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.2 }} style={{ width: 2, height: 30, background: "linear-gradient(to bottom, #F43F5E, #D4AF37)", transformOrigin: "top" }} />

         {/* 2. MIDDLE NODES SECTION - Compacted gap & padding */}
         <div style={{ display: "flex", gap: "2.5rem", width: "100%", justifyContent: "center", alignItems: "stretch", position: "relative", zIndex: 2 }}>
            
            {/* Left Node */}
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} style={{ flex: 1, maxWidth: "440px", padding: "1.5rem", borderRadius: 20, background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.06)", borderLeft: "4px solid #E11D48", boxShadow: "0 15px 35px rgba(0,0,0,0.04)", position: "relative" }}>
               <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(225, 29, 72, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                     <Target color="#E11D48" size={20} />
                  </div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 900, color: "#E11D48", textTransform: "uppercase", letterSpacing: "0.05em", flex: 1, lineHeight: 1.3 }}>{nodes[1].title}</h3>
               </div>
               <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.6, fontWeight: 500 }}>{nodes[1].desc}</p>
            </motion.div>

            {/* Float Arrow */}
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 10 }}>
               <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: "spring" }} style={{ width: 44, height: 44, borderRadius: "50%", background: "#FFFFFF", border: "1px dashed rgba(212, 175, 55, 0.5)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
                  <ArrowRight color="#D4AF37" size={20} />
               </motion.div>
            </div>

            {/* Right Node */}
            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} style={{ flex: 1, maxWidth: "440px", padding: "1.5rem", borderRadius: 20, background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.06)", borderLeft: "4px solid #D4AF37", boxShadow: "0 15px 35px rgba(0,0,0,0.04)", position: "relative" }}>
               <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(212, 175, 55, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                     <RadioTower color="#D4AF37" size={20} />
                  </div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 900, color: "#B8860B", textTransform: "uppercase", letterSpacing: "0.05em", flex: 1, lineHeight: 1.3 }}>{nodes[2].title}</h3>
               </div>
               <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.6, fontWeight: 500 }}>{nodes[2].desc}</p>
            </motion.div>
         </div>

         {/* 3. BRANCH DOWN TO BOTTOM - Shortened drops */}
         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", zIndex: 1, marginTop: "0" }}>
             {/* Main Center Drop */}
             <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.7 }} style={{ width: 2, height: 25, background: "linear-gradient(to bottom, transparent, rgba(212, 175, 55, 0.8))", transformOrigin: "top" }} />
             
             {/* Spanning Horizontal Beam - Math: 440/2 + gap(40) + 440/2 = 220+40+220 = 480px */}
             <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8 }} style={{ width: "480px", height: 2, background: "rgba(212, 175, 55, 0.8)" }} />
             
             <div style={{ display: "flex", justifyContent: "space-between", width: "480px" }}>
                <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.9 }} style={{ width: 2, height: 25, background: "linear-gradient(to bottom, rgba(212, 175, 55, 0.8), transparent)", transformOrigin: "top" }} />
                <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.9 }} style={{ width: 2, height: 25, background: "linear-gradient(to bottom, rgba(212, 175, 55, 0.8), transparent)", transformOrigin: "top" }} />
             </div>
         </div>

         {/* 4. BOTTOM NODE - Compacted padding */}
         <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.0 }} style={{ width: "100%", maxWidth: "920px", padding: "1.5rem 2rem", borderRadius: 24, background: "#F8FAFC", border: "1px solid rgba(0,0,0,0.04)", borderTop: "3px solid #0F172A", textAlign: "center", boxShadow: "0 20px 40px rgba(0,0,0,0.03)", zIndex: 2, flexShrink: 0 }}>
             <LayoutGrid color="#0F172A" size={24} style={{ margin: "0 auto 0.75rem", opacity: 0.9 }} />
             <h3 style={{ fontSize: "1.1rem", fontWeight: 900, color: "#0F172A", marginBottom: "0.5rem", letterSpacing: "0.02em" }}>{nodes[3].title}</h3>
             <p style={{ fontSize: "0.95rem", color: "#475569", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>{nodes[3].desc}</p>
         </motion.div>

      </div>
    </div>
  );
}

/* ── COMMAND CHAIN LAYOUT (3-TIER VERTICAL FLOW) ───────────────────────── */
export function LayoutCommandChain({ title, subtitle, features }: LayoutProps) {
  const nodes = features || [];
  if (nodes.length !== 3) return <div style={{ color: "red", padding: "2rem" }}>LayoutCommandChain requires exactly 3 nodes in features array.</div>;
  
  return (
    <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
      {/* Expansive Animated Background */}
      <motion.div 
         animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
         style={{ position: "absolute", inset: -200, backgroundImage: `radial-gradient(circle at 2px 2px, rgba(15, 23, 42, 0.05) 1px, transparent 0)`, backgroundSize: "40px 40px", pointerEvents: "none", zIndex: 0 }} 
      />

      <div style={{ zIndex: 1, position: "relative", width: "100%", maxWidth: "1200px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
         
         {/* Title Section */}
         <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "2.8rem", fontWeight: 1000, color: "#0F172A", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>{title}</h2>
            <p style={{ color: "#047857", letterSpacing: "0.25em", textTransform: "uppercase", fontSize: "0.9rem", fontWeight: 900 }}>{subtitle}</p>
         </div>

         {/* TIER 1: KONSORSIUM (Significantly Widened Horizontal Graph) */}
         <div style={{ position: "relative", width: "100%", maxWidth: "960px", display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
             
             {/* Animated Horizontal Data Transmission Line */}
             <div style={{ position: "absolute", top: "36px", left: "12%", right: "12%", height: "2px", zIndex: 0, overflow: "hidden" }}>
                 <div style={{ width: "100%", height: "100%", background: "#E2E8F0", position: "absolute" }} />
                 {/* Moving dashed track to simulate data flow */}
                 <motion.div animate={{ backgroundPosition: ["0px 0", "20px 0"] }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", width: "100%", height: "100%", backgroundImage: "linear-gradient(90deg, #047857 50%, transparent 50%)", backgroundSize: "16px 2px", opacity: 0.7 }} />
             </div>
             
             {/* Node 1: Kepala Daerah */}
             <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem", zIndex: 1, flex: 1 }}>
                 <div style={{ width: "72px", height: "72px", background: "#FFFFFF", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #9F1239", position: "relative" }}>
                     <motion.div animate={{ scale: [1, 1.25], opacity: [0.3, 0] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: "absolute", inset: -4, borderRadius: "50%", border: "1px solid #9F1239" }} />
                     <Landmark size={28} color="#9F1239" />
                 </div>
                 <h4 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#0F172A", margin: "0" }}>{nodes[0].title.split(',')[0]}</h4>
             </motion.div>

             {/* Node 2: Media Center (The Central Hub) */}
             <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem", zIndex: 1, flex: 1 }}>
                 <div style={{ width: "76px", height: "76px", background: "#047857", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                     <motion.div animate={{ scale: [1, 1.35], opacity: [0.5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ position: "absolute", inset: -2, borderRadius: "50%", border: "2px solid #047857" }} />
                     <motion.div animate={{ scale: [1, 1.7], opacity: [0.2, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} style={{ position: "absolute", inset: -2, borderRadius: "50%", border: "1px solid #047857" }} />
                     <RadioTower size={30} color="#FFF" />
                 </div>
                 <h4 style={{ fontWeight: 900, fontSize: "1.15rem", color: "#047857", margin: "0", letterSpacing: "0.02em" }}>Tim Media Center</h4>
             </motion.div>

             {/* Node 3: Sekda */}
             <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem", zIndex: 1, flex: 1 }}>
                 <div style={{ width: "72px", height: "72px", background: "#FFFFFF", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #B45309", position: "relative" }}>
                     <motion.div animate={{ scale: [1, 1.25], opacity: [0.3, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} style={{ position: "absolute", inset: -4, borderRadius: "50%", border: "1px solid #B45309" }} />
                     <Target size={28} color="#B45309" />
                 </div>
                 <h4 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#0F172A", margin: "0" }}>Sekda</h4>
             </motion.div>
         </div>

         {/* VERTICAL FLOW DROP 1 (Animated Dashed Pipeline) */}
         <div style={{ width: "3px", height: "35px", position: "relative", overflow: "hidden", marginBottom: "0.25rem" }}>
             <motion.div animate={{ backgroundPosition: ["0px 0px", "0px 20px"] }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(180deg, #047857 50%, transparent 50%)", backgroundSize: "3px 12px" }} />
         </div>

         {/* TIER 2: DISKOMINFO (Ultra-Wide Cinematic Widget) */}
         <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }} style={{ width: "100%", maxWidth: "1050px", background: "#FFFFFF", border: "2px solid #DCFCE7", borderTop: "4px solid #047857", borderRadius: "24px", padding: "1.75rem 3rem", display: "flex", alignItems: "center", gap: "2.5rem", position: "relative", overflow: "hidden" }}>
             {/* Sweeping Light Ray Animation */}
             <motion.div animate={{ left: ["-10%", "110%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }} style={{ position: "absolute", top: 0, bottom: 0, width: "100px", background: "linear-gradient(90deg, transparent, rgba(4,120,87,0.06), transparent)", transform: "skewX(-20deg)", zIndex: 0 }} />
             
             <div style={{ flexShrink: 0, width: "84px", height: "84px", background: "#F0FDF4", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #86EFAC", position: "relative", zIndex: 1 }}>
                 <motion.div animate={{ opacity: [1, 0.4, 1], scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: "absolute" }}>
                    <Network size={42} color="#047857" />
                 </motion.div>
             </div>
             <div style={{ textAlign: "left", zIndex: 1 }}>
                 <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: "#047857", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{nodes[1].title}</h3>
                 <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                     {nodes[1].desc.split('\n').map((point: string, i: number) => (
                         <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.95rem", color: "#475569", lineHeight: 1.5, fontWeight: 500 }}>
                             <div style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(4,120,87,0.15)", color: "#047857", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", marginTop: "3px", flexShrink: 0, fontWeight: 900 }}>✓</div>
                             <span>{point}</span>
                         </div>
                     ))}
                 </div>
             </div>
         </motion.div>

         {/* VERTICAL FLOW DROP 2 (Animated Dashed Pipeline) */}
         <div style={{ width: "3px", height: "45px", position: "relative", overflow: "hidden", marginTop: "0.25rem" }}>
             <motion.div animate={{ backgroundPosition: ["0px 0px", "0px 20px"] }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(180deg, #047857 50%, transparent 50%)", backgroundSize: "3px 12px" }} />
         </div>

         {/* TIER 3: SKPD (Ultra-Expansive Dashed Field Layout) */}
         <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }} style={{ width: "100%", maxWidth: "1150px", position: "relative", paddingTop: "2.5rem", marginTop: "0.5rem" }}>
             {/* Animated Dashed Top Border (Simulation of distribution to SKPDs) */}
             <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", overflow: "hidden" }}>
                 <motion.div animate={{ backgroundPosition: ["0px 0", "30px 0"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", width: "100%", height: "100%", backgroundImage: "linear-gradient(90deg, #94A3B8 50%, transparent 50%)", backgroundSize: "20px 2px" }} />
             </div>
             
             <div style={{ position: "absolute", top: "-22px", left: "50%", transform: "translateX(-50%)", background: "#F8FAFC", padding: "0 1.5rem", color: "#0F172A", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                 <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                    <Users size={36} color="#0F172A" />
                 </motion.div>
             </div>
             
             <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: "#0F172A", marginBottom: "0.75rem", marginTop: "0.5rem" }}>{nodes[2].title}</h3>
             <p style={{ fontSize: "1.05rem", color: "#64748B", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7 }}>{nodes[2].desc}</p>
         </motion.div>

      </div>
    </div>
  );
}

/* ── AGENT INTEGRATION LAYOUT (Tactical Modern Grid - Clean White) ───────────────── */
export function LayoutAgentIntegration({ title, subtitle, body, features }: LayoutProps) {
  const nodes = features || [];

  return (
    <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", position: "relative", padding: "2rem 4rem" }}>
       {/* Delicate High-Tech Blueprint Grid Background */}
       <motion.div animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", inset: -100, backgroundImage: `linear-gradient(rgba(4, 120, 87, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(4, 120, 87, 0.05) 1px, transparent 1px)`, backgroundSize: "40px 40px", zIndex: 0 }} />

       <div style={{ zIndex: 1, position: "relative", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.8rem", fontWeight: 1000, color: "#0F172A", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>{title}</h2>
          <p style={{ color: "#047857", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.9rem", fontWeight: 900, marginBottom: "1rem" }}>{subtitle}</p>
          <div style={{ width: "100px", height: "4px", background: "#047857", marginBottom: "1.5rem" }} />
          <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.6, maxWidth: "900px", fontWeight: 500 }}>{body}</p>
       </div>

       <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1, gap: "2rem" }}>
          
          {/* THE 1 ASN (Pristine Core Agent) */}
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "320px", position: "relative" }}>
              <div style={{ width: "150px", height: "150px", borderRadius: "50%", background: "#FFFFFF", border: "4px solid #047857", boxShadow: "0 10px 40px rgba(4,120,87,0.15)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", inset: -14, borderRadius: "50%", border: "2px dashed #047857" }} />
                 <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", inset: -22, borderRadius: "50%", border: "2px solid rgba(4,120,87,0.3)", borderTopColor: "transparent", borderBottomColor: "transparent" }} />
                 {/* Bright Internal radar sweep */}
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", width: "50%", height: "50%", background: "conic-gradient(from 0deg, transparent 0deg, rgba(4, 120, 87, 0.1) 90deg, transparent 90deg)", borderRadius: "100% 0 0 0", transformOrigin: "bottom right", top: 0, left: 0 }} />
                 <UserCheck size={64} color="#047857" style={{ zIndex: 1 }} />
              </div>
              
              <div style={{ marginTop: "2rem", background: "#047857", color: "#FFF", padding: "0.5rem 1.5rem", borderRadius: "4px", fontWeight: 900, letterSpacing: "0.15em", fontSize: "0.95rem", boxShadow: "0 4px 15px rgba(4,120,87,0.4)" }}>
                 1 (SATU) PIC
              </div>
              <h4 style={{ marginTop: "1.25rem", color: "#0F172A", fontWeight: 900, fontSize: "1.2rem", textAlign: "center", lineHeight: 1.3, letterSpacing: "0.05em" }}>AGEN PENGELOLA<br/>INFORMASI SEKTORAL</h4>
          </motion.div>

          {/* DYNAMIC CIRCUIT PIPELINES (Rigid Angular Architecture - Emerald) */}
          <div style={{ flex: 1, height: "100%", position: "relative", pointerEvents: "none" }}>
             <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
               {/* Background Circuit Tracks */}
               <path d="M 0,50 L 15,50 L 35,15 L 100,15" fill="none" stroke="rgba(4,120,87,0.15)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
               <path d="M 0,50 L 100,50" fill="none" stroke="rgba(4,120,87,0.15)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
               <path d="M 0,50 L 15,50 L 35,85 L 100,85" fill="none" stroke="rgba(4,120,87,0.15)" strokeWidth="2" vectorEffect="non-scaling-stroke" />

               {/* Active Data Packets (Emerald Green) */}
               <motion.path d="M 0,50 L 15,50 L 35,15 L 100,15" fill="none" stroke="#047857" strokeWidth="4" strokeLinecap="square" strokeDasharray="15 35" animate={{ strokeDashoffset: [50, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} vectorEffect="non-scaling-stroke" />
               <motion.path d="M 0,50 L 100,50" fill="none" stroke="#047857" strokeWidth="4" strokeLinecap="square" strokeDasharray="15 35" animate={{ strokeDashoffset: [50, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.3 }} vectorEffect="non-scaling-stroke" />
               <motion.path d="M 0,50 L 15,50 L 35,85 L 100,85" fill="none" stroke="#047857" strokeWidth="4" strokeLinecap="square" strokeDasharray="15 35" animate={{ strokeDashoffset: [50, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.6 }} vectorEffect="non-scaling-stroke" />
               
               {/* Joint Nodes */}
               <circle cx="15" cy="50" r="2" fill="#047857" />
               <circle cx="35" cy="15" r="2" fill="#047857" />
               <circle cx="35" cy="85" r="2" fill="#047857" />
             </svg>
          </div>

          {/* THE 3 HIGH-CONTRAST TACTICAL MODULES (Bright White Box) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", width: "100%", maxWidth: "580px", zIndex: 2 }}>
             {nodes.map((node: any, i: number) => {
                const icons = [Globe, Smartphone, ShieldAlert];
                const IconComponent = icons[i] || Target;
                return (
                   <motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + (i * 0.2) }} 
                     style={{ background: "#FFFFFF", border: "2px solid #E2E8F0", borderLeft: "8px solid #047857", padding: "1.5rem 2rem", borderRadius: "8px", boxShadow: "0 10px 30px rgba(15,23,42,0.08)", display: "flex", alignItems: "flex-start", gap: "1.5rem", position: "relative", overflow: "hidden" }}>
                       
                       <div style={{ width: "56px", height: "56px", background: "#F0FDF4", border: "1px solid #A7F3D0", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#047857", flexShrink: 0, position: "relative", zIndex: 1 }}>
                           <IconComponent size={28} />
                       </div>
                       
                       <div style={{ zIndex: 1 }}>
                           <h4 style={{ fontSize: "1.15rem", fontWeight: 900, color: "#0F172A", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{node.title}</h4>
                           <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>{node.desc}</p>
                       </div>
                   </motion.div>
                )
             })}
          </div>

       </div>
    </div>
  )
}
