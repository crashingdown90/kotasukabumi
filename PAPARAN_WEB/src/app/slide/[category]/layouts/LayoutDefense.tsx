"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, ShieldAlert, Zap, AlertTriangle, Radio, 
  Clock, Eye, Search, Target, Activity, Shield, 
  Lock, Bell, Flag, Hexagon, RadioTower, Mic, MessageSquare
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
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
         <p style={{ fontSize: "0.85rem", fontWeight: 850, color: "#EF4444", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
         <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, maxWidth: "800px", margin: "1rem auto 0", lineHeight: 1.6 }}>{body}</p>
      </div>
      <div style={{ flex: 1, display: "flex", gap: "1.5rem", alignItems: "stretch", justifyContent: "center" }}>
         {steps.map((s: any, i: number) => (
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 * i }} key={i} style={{ flex: 1, position: "relative", padding: "2.5rem 2rem", background: "#0F172A", borderRadius: 32, border: "1px solid rgba(239, 68, 68, 0.3)", boxShadow: SHADOW_LG, overflow: "hidden", display: "flex", flexDirection: "column" }}>
               {/* Connecting effect across cards (visual trick) */}
               {i < steps.length - 1 && <div style={{ position: "absolute", top: "50%", right: -15, width: 30, height: 2, background: "rgba(239, 68, 68, 0.8)", zIndex: 10 }} />}
               
               <div style={{ position: "absolute", right: -30, bottom: -30, opacity: 0.05 }}>
                  <ShieldAlert size={180} color="#FFFFFF" />
               </div>
               
               <div style={{ fontSize: "1rem", fontWeight: 900, color: "#EF4444", letterSpacing: "0.15em", marginBottom: "1.5rem", borderBottom: "1px solid rgba(239,68,68,0.2)", paddingBottom: "0.5rem", alignSelf: "flex-start" }}>{s.time || `STEP 0${i+1}`}</div>
               <h3 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#FFFFFF", marginBottom: "1rem", lineHeight: 1.3, zIndex: 1 }}><InlineText text={s.title} /></h3>
               <p style={{ fontSize: "0.95rem", color: "#94A3B8", lineHeight: 1.6, zIndex: 1 }}><InlineText text={s.desc} /></p>
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
export function LayoutGoldenTime({ title, subtitle, features }: LayoutProps) {
  const steps = features || [];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
       <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <Clock size={48} color={GOLD} style={{ margin: "0 auto 1rem" }} />
          <h2 style={{ fontSize: "3rem", fontWeight: 1000 }}>{title}</h2>
       </div>
       <div style={{ display: "flex", gap: "2rem" }}>
          {steps.map((s: any, i: number) => (
            <div key={i} style={{ flex: 1, padding: "2rem", borderRadius: 24, background: "#FFFFFF", border: `1px solid ${BORDER_REFINED}`, textAlign: "center", boxShadow: SHADOW_SM }}>
               <div style={{ fontSize: "2rem", fontWeight: 1000, color: "#D4AF37", marginBottom: "1rem" }}>{s.metric}</div>
               <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A" }}><InlineText text={s.title} /></h3>
            </div>
          ))}
       </div>
    </div>
  );
}

/* ── CYBER WATCH LAYOUT ────────────────────────────────────── */
export function LayoutCyberWatch({ title, subtitle, body, features }: LayoutProps) {
  const items = features || [];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
         <p style={{ fontSize: "0.85rem", fontWeight: 850, color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
         <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, maxWidth: "800px", margin: "1rem auto 0", lineHeight: 1.6 }}>{body}</p>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignContent: "center", maxWidth: "1150px", margin: "0 auto", width: "100%" }}>
         {items.map((it: any, i: number) => (
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 * i }} key={i} style={{ padding: "2.5rem", borderRadius: 32, background: SURFACE, border: "1px solid " + PRIMARY + "33", position: "relative", display: "flex", flexDirection: "column", boxShadow: SHADOW_SM, overflow: "hidden" }}>
               <div style={{ position: "absolute", right: -30, top: -30, width: 150, height: 150, borderRadius: "50%", background: `radial-gradient(circle, ${PRIMARY}15 0%, transparent 70%)` }} />
               <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", zIndex: 1 }}>
                 <div style={{ width: 56, height: 56, borderRadius: 16, background: PRIMARY + "10", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${PRIMARY}33` }}>
                    <Eye size={28} color={PRIMARY} />
                 </div>
                 <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: TEXT_MAIN }}><InlineText text={it.title} /></h3>
               </div>
               <p style={{ fontSize: "1rem", color: TEXT_MUTED, lineHeight: 1.6, flex: 1, zIndex: 1 }}><InlineText text={it.desc} /></p>
               <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: `1px solid ${BORDER_REFINED}`, display: "flex", justifyContent: "space-between", alignItems: "baseline", zIndex: 1 }}>
                 <span style={{ fontSize: "0.85rem", fontWeight: 800, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.1em" }}>Coverage</span>
                 <span style={{ fontSize: "1.4rem", fontWeight: 950, color: TEXT_MAIN }}>{it.metric}</span>
               </div>
            </motion.div>
         ))}
      </div>
    </motion.div>
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
