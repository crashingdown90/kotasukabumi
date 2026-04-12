"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, ShieldCheck, Globe, Activity, LayoutGrid, MessageCircle, 
  Smartphone, Database, Share2, MapPin, CheckCircle, Users,
  Phone, Server, Radio, Network, Workflow, BarChart3, ArrowRight,
  TrendingUp, Clock
} from "lucide-react";
import { 
  PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, SURFACE, 
  BORDER_REFINED, SHADOW_SM, PRIMARY_LIGHT, SHADOW_LG 
} from "../components/Constants";
import { parseListItems, parseBoldLabel, InlineText } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: any[];
}

/* ── SOCS HERO LAYOUT (ASYMMETRIC HUD) ─────────────────────── */
export function LayoutSOCSHero({ title, subtitle, body }: LayoutProps) {
  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", overflow: "hidden", gap: "4rem" }}>
      {/* Background Decor */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 10% 20%, ${PRIMARY}05 0%, transparent 40%), radial-gradient(circle at 90% 80%, ${GOLD}05 0%, transparent 40%)`, zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, ${PRIMARY}05 1px, transparent 0)`, backgroundSize: "40px 40px", zIndex: 0 }} />

      <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} style={{ flex: 1.2, zIndex: 2 }}>
        <p style={{ fontSize: "0.85rem", fontWeight: 900, color: GOLD, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "1rem" }}>{subtitle}</p>
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 1000, color: TEXT_MAIN, lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.04em" }}><InlineText text={title} /></h1>
        <div style={{ width: 80, height: 4, background: PRIMARY, borderRadius: 2, marginBottom: "2rem" }} />
        <div style={{ fontSize: "1.2rem", color: TEXT_MUTED, lineHeight: 1.75, maxWidth: "650px" }}><InlineText text={body} /></div>
      </motion.div>

      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }} style={{ flex: 1, display: "flex", justifyContent: "center", position: "relative", zIndex: 2 }}>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", border: `1px dashed ${GOLD}22` }} />
        <div style={{ width: 240, height: 240, borderRadius: 60, background: SURFACE, border: `2px solid ${GOLD}`, boxShadow: SHADOW_LG, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
           <Zap size={100} color={GOLD} />
           <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} style={{ position: "absolute", top: -20, right: -20, background: SURFACE, padding: "0.75rem", borderRadius: 16, border: `1px solid ${GOLD}44`, boxShadow: SHADOW_SM }}>
              <Activity size={24} color={GOLD} />
           </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── SOCS ARCHITECTURE LAYOUT (MODERN CARDS) ────────────────── */
export function LayoutSOCSArchitecture({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  return (
    <div style={{ height: "100%" }}>
      <div style={{ marginBottom: "3rem" }}>
         <p style={{ fontSize: "0.75rem", fontWeight: 900, color: GOLD, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>ARSTITEKTUR SISTEM</p>
         <h2 style={{ fontSize: "2.8rem", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.02em" }}>{title}</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
         {items.map((it: any, i: number) => (
           <motion.div key={i} whileHover={{ y: -5 }} style={{ padding: "2rem", borderRadius: 24, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, display: "flex", gap: "1.5rem", alignItems: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${PRIMARY}11` }}>
                 <Server size={24} color={PRIMARY} />
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: TEXT_MAIN, lineHeight: 1.4 }}><InlineText text={it} /></div>
           </motion.div>
         ))}
      </div>
    </div>
  );
}

/* ── SOCS TOPOLOGY LAYOUT (HUB DESIGN) ─────────────────────── */
export function LayoutSOCSTopology({ title, subtitle, body }: LayoutProps) {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 950, color: TEXT_MAIN }}>{title}</h2>
        <p style={{ color: TEXT_MUTED, marginTop: "1rem" }}>{subtitle}</p>
      </div>
      <div style={{ position: "relative", width: 400, height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
         <motion.div animate={{ rotate: 360, scale: [1, 1.05, 1] }} transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }} style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", border: `2px dashed ${PRIMARY}44` }} />
         <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", width: "130%", height: "130%", borderRadius: "50%", border: `1px solid ${PRIMARY}11` }} />
         
         <div style={{ width: 180, height: 180, background: SURFACE, borderRadius: 50, border: `4px solid ${PRIMARY}`, boxShadow: "0 0 50px rgba(4, 120, 87, 0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
            <Network size={60} color={PRIMARY} />
            <div style={{ fontSize: "0.7rem", fontWeight: 900, color: PRIMARY, marginTop: "0.75rem", letterSpacing: "0.1em" }}>CORE SOCS</div>
         </div>

         {/* Decentralized Nodes */}
         {[0, 90, 180, 270].map((angle, i) => (
           <motion.div key={i} animate={{ y: [0, -10, 0] }} transition={{ delay: i * 0.5, duration: 3, repeat: Infinity }} style={{ position: "absolute", transform: `rotate(${angle}deg) translateY(-180px) rotate(-${angle}deg)`, width: 60, height: 60, borderRadius: 16, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: SHADOW_SM, zIndex: 1 }}>
              <Database size={24} color={GOLD} />
           </motion.div>
         ))}
      </div>
    </div>
  );
}

/* ── SOCS FLOWCHART LAYOUT (PROCESS PATH) ───────────────────── */
export function LayoutSOCSFlowchart({ title, subtitle, body }: LayoutProps) {
    const steps = parseListItems(body);
    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: "3.5rem" }}>
                <h2 style={{ fontSize: "2.8rem", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.02em" }}>{title}</h2>
                <div style={{ width: 60, height: 4, background: GOLD, borderRadius: 2, marginTop: "1rem" }} />
            </div>
            <div style={{ flex: 1, display: "flex", gap: "1rem", alignItems: "stretch" }}>
                {steps.map((s: any, i: number) => (
                    <React.Fragment key={i}>
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.15 }} style={{ flex: 1, padding: "2rem", borderRadius: 24, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div style={{ position: "absolute", top: -15, left: 20, width: 32, height: 32, borderRadius: 8, background: GOLD, color: "#FFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.9rem" }}>{i + 1}</div>
                            <div style={{ fontSize: "1.05rem", fontWeight: 700, color: TEXT_MAIN, lineHeight: 1.5 }}><InlineText text={s} /></div>
                        </motion.div>
                        {i < steps.length - 1 && (
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <ArrowRight size={24} color={GOLD} opacity={0.5} />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

/* ── SOCS DASHBOARD LAYOUT (BENTO METRICS) ─────────────────── */
export function LayoutSOCSDashboard({ title, subtitle, body }: LayoutProps) {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "2.5rem" }}>
         <p style={{ fontSize: "0.8rem", fontWeight: 900, color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.5rem" }}>EXECUTIVE MONITORING</p>
         <h2 style={{ fontSize: "3rem", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
      </div>
      
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "2.4fr 1fr", gap: "1.5rem" }}>
         {/* Main Visualization Bento */}
         <div style={{ background: SURFACE, borderRadius: 32, border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_LG, padding: "2.5rem", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", background: `radial-gradient(circle at 100% 0%, ${GOLD}11 0%, transparent 50%)` }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", zIndex: 1 }}>
               <div>
                  <div style={{ fontSize: "1.25rem", fontWeight: 850, color: TEXT_MAIN }}>Volume Aduan Terintegrasi</div>
                  <div style={{ fontSize: "0.9rem", color: TEXT_MUTED }}>Statistik Real-time Omni-Channel</div>
               </div>
               <BarChart3 size={32} color={GOLD} />
            </div>
            <div style={{ flex: 1, border: `1px dashed ${BORDER_REFINED}`, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
               <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} style={{ fontSize: "1.2rem", color: TEXT_MUTED, fontWeight: 700, letterSpacing: "0.2em" }}>SIMULASI CHART AKTIF</motion.div>
            </div>
         </div>

         {/* Metrics Sidebar Bento */}
         <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
                { label: "SLA RESPONS", value: "98.4%", icon: Clock, color: PRIMARY },
                { label: "PUBLIK TRUSt", value: "+12.5%", icon: TrendingUp, color: GOLD },
                { label: "RESOLUSI", value: "94.2%", icon: CheckCircle, color: "#10B981" }
            ].map((m, i) => (
                <motion.div key={i} whileHover={{ x: -10 }} style={{ flex: 1, background: SURFACE, borderRadius: 24, padding: "1.5rem", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                   <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                      <m.icon size={18} color={m.color} />
                      <span style={{ fontSize: "0.75rem", fontWeight: 900, color: TEXT_MUTED, letterSpacing: "0.1em" }}>{m.label}</span>
                   </div>
                   <div style={{ fontSize: "2.2rem", fontWeight: 1000, color: m.color, letterSpacing: "-0.04em" }}>{m.value}</div>
                </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
}

/* ── SOCS CHANNELS LAYOUT (GLASS CARDS) ───────────────────── */
export function LayoutSOCSChannels({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const CHANNELS = [
    { icon: MessageCircle, color: "#25D366", tag: "WHATSAPP" },
    { icon: Share2, color: PRIMARY, tag: "SOCIAL MEDIA" },
    { icon: Globe, color: "#1E293B", tag: "WEB PORTAL" },
    { icon: Phone, color: GOLD, tag: "VOICE/SMS" },
    { icon: Smartphone, color: "#4338CA", tag: "OFFLINE" }
  ];
  return (
    <div style={{ height: "100%" }}>
      <div style={{ marginBottom: "3rem" }}>
         <p style={{ fontSize: "0.8rem", fontWeight: 900, color: GOLD, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.5rem" }}>KANAL AKSESIBILITAS</p>
         <h2 style={{ fontSize: "3rem", fontWeight: 1000, marginBottom: "0.5rem", color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
         <p style={{ fontSize: "1.1rem", color: TEXT_MUTED }}>{subtitle}</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
        {items.map((item: any, i: number) => {
          const { label, rest } = parseBoldLabel(item);
          const config = CHANNELS[i % CHANNELS.length];
          const Icon = config.icon;
          return (
            <motion.div key={i} whileHover={{ y: -8, borderColor: config.color }} style={{ background: SURFACE, borderRadius: 24, padding: "2rem", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: config.color + "08" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: config.color + "11", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={24} color={config.color} />
                </div>
                <div style={{ fontSize: "0.65rem", fontWeight: 1000, color: config.color, background: config.color + "11", padding: "4px 10px", borderRadius: 8, letterSpacing: "0.05em" }}>{config.tag}</div>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 850, color: TEXT_MAIN, marginBottom: "0.75rem" }}>{label}</h3>
              <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6 }}>{rest}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
