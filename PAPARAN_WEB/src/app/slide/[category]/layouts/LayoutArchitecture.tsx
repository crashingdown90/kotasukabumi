"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Users, Building2, LayoutGrid, Zap, Flag, ShieldCheck, 
  Globe, Target, ChevronRight, HardHat, HeartPulse, 
  Layers, Database, Star, CheckCircle2, Hexagon, Mic, MapPin
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
  logo?: string;
  features?: any[];
}

export function LayoutOrgChart({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  
  if (items.length !== 3) {
      return <div>Please ensure there are exactly 3 items for this layout.</div>;
  }

  const parseItem = (it: any) => {
      let label = ""; let desc = "";
      if (typeof it === 'string') {
         const parsed = parseBoldLabel(it);
         label = parsed.label; desc = parsed.rest;
      } else if (it.title) {
         label = it.title; desc = it.desc;
      }
      return { label, desc };
  };

  const item1 = parseItem(items[0]);
  const item2 = parseItem(items[1]);
  const item3 = parseItem(items[2]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
         <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "1050px" }}>
         {/* Top Level */}
         <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ padding: "1.25rem 3rem", borderRadius: "99px", background: "linear-gradient(135deg, #047857 0%, #065F46 100%)", color: "white", fontWeight: 900, boxShadow: "0 20px 40px rgba(4, 120, 87, 0.2)", display: "flex", alignItems: "center", gap: "1.25rem", zIndex: 2, border: "2px solid rgba(255,255,255,0.2)" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
               <ShieldCheck color={GOLD} size={24} />
            </div>
            <div style={{ textAlign: "left" }}>
               <div style={{ fontSize: "1.2rem", letterSpacing: "0.05em" }}>Wali Kota dan Wakil Wali Kota</div>
               <div style={{ fontSize: "0.9rem", fontWeight: 700, opacity: 1, color: GOLD }}>Kota Sukabumi</div>
            </div>
         </motion.div>
         
         {/* Vertical connection */}
         <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.2 }} style={{ width: 3, height: 40, background: `linear-gradient(to bottom, #047857, ${GOLD})`, transformOrigin: "top" }} />
         
         {/* Middle row */}
         <div style={{ display: "flex", alignItems: "stretch", gap: "2.5rem", width: "100%", zIndex: 2 }}>
            {/* Left Block */}
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} style={{ flex: 1, padding: "2rem", borderRadius: 24, background: "linear-gradient(135deg, #FFFFFF 0%, #F0FDF4 100%)", border: `1px solid rgba(4, 120, 87, 0.15)`, boxShadow: "0 20px 40px rgba(4, 120, 87, 0.08)", position: "relative", overflow: "hidden" }}>
               <div style={{ position: "absolute", top: 0, left: 0, width: "6px", height: "100%", background: "#047857" }} />
               <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 16, background: "rgba(4, 120, 87, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                     <Users size={24} color="#047857" />
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 900, color: "#047857", textTransform: "uppercase", letterSpacing: "0.05em", flex: 1, lineHeight: 1.4 }}><InlineText text={item1.label} /></h3>
               </div>
               <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500 }}><InlineText text={item1.desc} /></p>
            </motion.div>

            {/* Arrow */}
            <div style={{ display: "flex", alignItems: "center" }}>
               <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, type: "spring" }} style={{ width: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg, ${GOLD} 0%, #B8860B 100%)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 10px 25px rgba(212, 175, 55, 0.4)", zIndex: 10, border: "4px solid #FFFFFF" }}>
                   <ChevronRight color="white" size={28} strokeWidth={3} />
               </motion.div>
            </div>

            {/* Right Block */}
            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} style={{ flex: 1, padding: "2rem", borderRadius: 24, background: "linear-gradient(135deg, #FFFFFF 0%, #FEFCE8 100%)", border: `1px solid rgba(212, 175, 55, 0.15)`, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.08)", position: "relative", overflow: "hidden" }}>
               <div style={{ position: "absolute", top: 0, left: 0, width: "6px", height: "100%", background: GOLD }} />
               <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 16, background: "rgba(212, 175, 55, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                     <Globe size={24} color="#B8860B" />
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 900, color: "#B8860B", textTransform: "uppercase", letterSpacing: "0.05em", flex: 1, lineHeight: 1.4 }}><InlineText text={item2.label} /></h3>
               </div>
               <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500 }}><InlineText text={item2.desc} /></p>
            </motion.div>
         </div>

         {/* Connection to bottom */}
         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginTop: "-28px", zIndex: 1, position: "relative" }}>
             {/* The line drops from the center gap behind the arrow */}
             <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.7 }} style={{ width: 3, height: 60, background: GOLD, transformOrigin: "top" }} />
             
             {/* The horizontal branch above the bottom block */}
             <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8 }} style={{ width: "40%", height: 3, background: GOLD }} />
             <div style={{ display: "flex", justifyContent: "space-between", width: "40%" }}>
                <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.9 }} style={{ width: 3, height: 20, background: GOLD, transformOrigin: "top" }} />
                <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.9 }} style={{ width: 3, height: 20, background: GOLD, transformOrigin: "top" }} />
             </div>

             {/* Bottom Block */}
             <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.0 }} style={{ width: "100%", padding: "2.5rem", borderRadius: 24, background: "#FFFFFF", borderTop: `6px solid #0F172A`, borderBottom: `1px solid rgba(0,0,0,0.05)`, borderLeft: `1px solid rgba(0,0,0,0.05)`, borderRight: `1px solid rgba(0,0,0,0.05)`, boxShadow: "0 30px 60px rgba(0,0,0,0.08)", textAlign: "center", marginTop: 0 }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(15, 23, 42, 0.05)", margin: "0 auto 1.25rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <LayoutGrid color="#0F172A" size={28} />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "1rem", letterSpacing: "0.02em" }}><InlineText text={item3.label} /></h3>
                <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500, maxWidth: "850px", margin: "0 auto" }}><InlineText text={item3.desc} /></p>
             </motion.div>
         </div>

      </div>
    </motion.div>
  );
}

/* ── TEAM LAYOUT ───────────────────────────────────────────── */
export function LayoutTeam({ title, subtitle, body }: LayoutProps) {
  const members = parseListItems(body);
  return (
    <div style={{ height: "100%" }}>
      <h2 style={{ fontSize: "2.8rem", fontWeight: 950, marginBottom: "3rem" }}>{title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
         {members.map((m, i) => (
           <div key={i} style={{ padding: "2rem", borderRadius: 24, background: "#FFFFFF", border: `1px solid ${BORDER_REFINED}`, textAlign: "center", boxShadow: SHADOW_SM }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(4, 120, 87, 0.05)", margin: "0 auto 1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <Users size={32} color="#047857" />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 900, color: "#0F172A" }}><InlineText text={m} /></h3>
           </div>
         ))}
      </div>
    </div>
  );
}

/* ── INSTITUTIONAL MANDATE LAYOUT ─────────────────────────── */
export function LayoutInstitutionalMandate({ title, subtitle, body }: LayoutProps) {
  return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
      <Building2 size={48} color={GOLD} style={{ margin: "0 auto 1.5rem" }} />
      <h2 style={{ fontSize: "3rem", fontWeight: 950 }}>{title}</h2>
      <p style={{ fontSize: "1.3rem", color: TEXT_MUTED, maxWidth: "800px", margin: "2rem auto", lineHeight: 1.6 }}>{body}</p>
      <div style={{ background: PRIMARY, color: "white", padding: "1.5rem 3rem", borderRadius: 20, display: "inline-block", margin: "0 auto", fontWeight: 900, fontSize: "1.2rem", letterSpacing: "0.1em" }}>OFFICIAL DECREE ENFORCED</div>
    </div>
  );
}

/* ── PILLARS LAYOUT ────────────────────────────────────────── */
export function LayoutPillars({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  return (
    <div style={{ height: "100%" }}>
      <h2 style={{ fontSize: "2.8rem", fontWeight: 950, marginBottom: "3rem", textAlign: "center" }}>{title}</h2>
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "stretch" }}>
         {items.map((it, i) => (
           <div key={i} style={{ flex: 1, padding: "2rem", borderRadius: 24, background: SURFACE, borderTop: `6px solid ${GOLD}`, boxShadow: SHADOW_SM }}>
              <Star size={32} color={GOLD} style={{ marginBottom: "1.5rem" }} />
              <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: TEXT_MAIN }}>{it}</h3>
           </div>
         ))}
      </div>
    </div>
  );
}

/* ── ONE GATE LAYOUT ───────────────────────────────────────── */
export function LayoutOneGate({ title, subtitle, body }: LayoutProps) {
    const items = parseListItems(body);
    const ICONS = [Globe, Target, Star]; 
    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: "3rem", textAlign: "center" }}>
                <p style={{ fontSize: "0.85rem", fontWeight: 900, color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
                <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 1000, textAlign: "center", color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
            </div>
            
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", alignItems: "center" }}>
                {items.map((it, i) => {
                    let label = ""; let rest = "";
                    if (typeof it === 'string') {
                        const parsed = parseBoldLabel(it);
                        label = parsed.label || `Benchmarking ${i + 1}`;
                        rest = parsed.rest || it;
                    }
                    const Icon = ICONS[i % ICONS.length];
                    const isCenter = i === 1;

                    return (
                        <motion.div key={i} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.2, duration: 0.5 }} 
                            style={{ 
                                padding: "2.5rem", 
                                borderRadius: 32, 
                                background: isCenter ? `linear-gradient(135deg, ${PRIMARY}, #065F46)` : SURFACE, 
                                color: isCenter ? "#FFFFFF" : TEXT_MAIN,
                                border: isCenter ? "none" : `1px solid ${BORDER_REFINED}`,
                                boxShadow: isCenter ? SHADOW_LG : SHADOW_SM,
                                transform: isCenter ? "scale(1.05)" : "scale(0.98)", 
                                zIndex: isCenter ? 10 : 1,
                                display: "flex", 
                                flexDirection: "column",
                                position: "relative",
                                overflow: "hidden"
                            }}>
                            
                            <div style={{ position: "absolute", top: -20, right: -20, width: 200, height: 200, borderRadius: "50%", background: isCenter ? "rgba(255,255,255,0.05)" : `${PRIMARY}05` }} />

                            <div style={{ width: 64, height: 64, borderRadius: 20, background: isCenter ? "rgba(255,255,255,0.15)" : PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2.5rem" }}>
                                <Icon size={32} color={isCenter ? "#FFF" : PRIMARY} />
                            </div>
                            
                            <h3 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: "1rem", lineHeight: 1.3 }}>{label}</h3>
                            <p style={{ fontSize: "1.05rem", color: isCenter ? "rgba(255,255,255,0.8)" : TEXT_MUTED, lineHeight: 1.6 }}>{rest}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

/* ── HIERARCHY LAYOUT ──────────────────────────────────────── */
export function LayoutHierarchy({ title, subtitle, body }: LayoutProps) {
    const items = parseListItems(body);
    const ICONS = [Globe, Layers, Database, Target, MapPin];
    
    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: "2rem", textAlign: "center" }}>
                <p style={{ fontSize: "0.85rem", fontWeight: 900, color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
                <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
            </div>
            
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div style={{ position: "absolute", top: "10%", bottom: "10%", left: "50%", width: "4px", marginLeft: "-2px", background: `linear-gradient(180deg, ${PRIMARY}33, ${GOLD}33)`, zIndex: 0 }} />

                {items.map((item, i) => {
                    const parsed = parseBoldLabel(item);
                    const label = parsed.label || `Lapis ${i + 1}`;
                    const rest = parsed.rest || item;
                    const Icon = ICONS[i % ICONS.length];
                    const w = 600 + (i * 120); 

                    return (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2, duration: 0.5 }} 
                            style={{ width: `${w}px`, maxWidth: "90%", background: SURFACE, border: `1px solid ${BORDER_REFINED}`, borderRadius: 24, padding: "1.5rem 2rem", boxShadow: SHADOW_LG, position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: "2rem" }}>
                            
                            <div style={{ width: 64, height: 64, borderRadius: 16, background: i === 0 ? PRIMARY : i === items.length - 1 ? TEXT_MAIN : `${PRIMARY}11`, color: i === 1 ? PRIMARY : "#FFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: i === 1 ? `1px solid ${PRIMARY}44` : "none" }}>
                                <Icon size={32} />
                            </div>

                            <div style={{ flex: 1, textAlign: "left" }}>
                                <h3 style={{ fontSize: "1.2rem", fontWeight: 850, color: TEXT_MAIN, marginBottom: "0.5rem" }}>{label}</h3>
                                <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.5 }}>{rest}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

/* ── FEATURE LAYOUT ────────────────────────────────────────── */
export function LayoutFeature({ title, subtitle, body }: LayoutProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", height: "100%" }}>
      <div>
         <p style={{ fontSize: "0.8rem", fontWeight: 900, color: GOLD, letterSpacing: "0.3em", marginBottom: "1rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "3rem", fontWeight: 1000, color: TEXT_MAIN, lineHeight: 1.1 }}>{title}</h2>
         <p style={{ marginTop: "2rem", fontSize: "1.2rem", color: TEXT_MUTED, lineHeight: 1.7 }}>{body}</p>
      </div>
      <div style={{ background: "#F8FAFC", borderRadius: 32, height: "400px", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_LG }}>
         <Target size={120} color="#D4AF37" opacity={0.8} />
      </div>
    </div>
  );
}

/* ── HERO STRAKOM LAYOUT ───────────────────────────────────── */
export function LayoutHeroStrakom({ title, subtitle, body, logo }: LayoutProps) {
  return (
    <div style={{ 
      height: "100%", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between", 
      position: "relative",
      overflow: "hidden",
      gap: "4rem"
    }}>
      {/* ── BACKGROUND LAYER ── */}
      <div style={{ 
        position: "absolute", 
        inset: 0, 
        backgroundImage: `radial-gradient(circle at 20% 30%, ${PRIMARY}05 0%, transparent 50%), radial-gradient(circle at 80% 70%, ${GOLD}05 0%, transparent 50%)`,
        zIndex: 0,
        pointerEvents: "none"
      }} />
      
      {/* Tactical Grid Background */}
      <div style={{ 
        position: "absolute", 
        inset: -100, 
        backgroundImage: `radial-gradient(circle at 2px 2px, ${PRIMARY}08 1.5px, transparent 0)`,
        backgroundSize: "40px 40px",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.8
      }} />

      {/* ── LEFT PANEL: DATA & NARRATIVE (60%) ── */}
      <motion.div 
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ flex: 1.2, zIndex: 2, textAlign: "left" }}
      >
        <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
          {/* Vertical Title Bar */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: PRIMARY, borderRadius: 2 }} />
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ 
              fontSize: "0.95rem", 
              fontWeight: 900, 
              color: PRIMARY, 
              letterSpacing: "0.3em", 
              textTransform: "uppercase", 
              marginBottom: "1rem" 
            }}>
             {subtitle}
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ 
              fontSize: "clamp(2.5rem, 5vw, 4rem)", 
              fontWeight: 1000, 
              color: TEXT_MAIN, 
              lineHeight: 1.1, 
              marginBottom: "2rem", 
              letterSpacing: "-0.03em" 
            }}
          >
             <InlineText text={title} />
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.7 }}
            style={{ 
              fontSize: "1.15rem", 
              color: TEXT_MUTED, 
              lineHeight: 1.7, 
              maxWidth: "600px",
              fontWeight: 500
            }}
          >
             {body}
          </motion.p>
          
          <motion.div 
            initial={{ scaleX: 0 }} 
            animate={{ scaleX: 1 }} 
            transition={{ delay: 1, duration: 0.8 }}
            style={{ width: 100, height: 6, background: GOLD, marginTop: "2.5rem", borderRadius: 3 }} 
          />
        </div>
      </motion.div>

      {/* ── RIGHT PANEL: HUD VISUAL (40%) ── */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        style={{ 
          flex: 1, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          position: "relative",
          zIndex: 2
        }}
      >
        {/* Decorative HUD Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ 
            position: "absolute", 
            width: "360px", 
            height: "360px", 
            borderRadius: "50%", 
            border: `1px dashed ${GOLD}44`,
            zIndex: 0
          }} 
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ 
            position: "absolute", 
            width: "420px", 
            height: "420px", 
            borderRadius: "50%", 
            border: `1px solid ${PRIMARY}11`,
            zIndex: 0
          }} 
        />
        
        {/* Glow Core */}
        <div style={{ 
          position: "absolute", 
          width: "250px", 
          height: "250px", 
          background: `radial-gradient(circle, ${PRIMARY}11 0%, transparent 70%)`,
          borderRadius: "50%",
          zIndex: 1
        }} />

        {/* Main Logo Card */}
        <div style={{ 
          width: 200, 
          height: 200, 
          borderRadius: 40, 
          background: "#FFFFFF", 
          border: `2px solid ${GOLD}`, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          boxShadow: "0 40px 100px rgba(0,0,0,0.12)",
          position: "relative",
          zIndex: 2,
          transform: "rotate(-2deg)"
        }}>
           <Image src={logo || "/Logo_Sukabumi.png"} alt="Sukabumi" width={130} height={130} style={{ objectFit: "contain" }} priority />
        </div>
        
        {/* Floating Metrics (HUD Style) */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "10%", right: "15%", background: "white", padding: "0.5rem 1rem", borderRadius: 12, border: "1px solid " + GOLD + "33", boxShadow: SHADOW_SM, zIndex: 3 }}>
           <div style={{ fontSize: "0.6rem", fontWeight: 900, color: GOLD }}>SECURITY</div>
           <div style={{ fontSize: "1rem", fontWeight: 1000, color: TEXT_MAIN }}>ENCRYPTED</div>
        </motion.div>
        
        <motion.div 
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ position: "absolute", bottom: "10%", left: "10%", background: "white", padding: "0.5rem 1rem", borderRadius: 12, border: "1px solid " + PRIMARY + "33", boxShadow: SHADOW_SM, zIndex: 3 }}>
           <div style={{ fontSize: "0.6rem", fontWeight: 900, color: PRIMARY }}>ORCHESTRATION</div>
           <div style={{ fontSize: "1rem", fontWeight: 1000, color: TEXT_MAIN }}>CONNECTED</div>
        </motion.div>
      </motion.div>

    </div>
  );
}

/* ── CASE STUDY LAYOUT ──────────────────────────────────────── */
export function LayoutCaseStudy({ title, subtitle, body, features }: LayoutProps) {
  const steps = features || [];
  const bgColors = ["#FEF2F2", "#F0F9FF", "#ECFDF5"];
  const borderColors = ["#EF4444", "#3B82F6", "#10B981"];
  const icons = [ShieldAlert, Zap, Star];
  
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontWeight: 900, color: PRIMARY, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</motion.p>
      <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={{ fontSize: "2.8rem", fontWeight: 950, marginBottom: "1rem" }}>{title}</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} style={{ fontSize: "1.1rem", color: TEXT_MUTED, maxWidth: "800px", marginBottom: "3rem", lineHeight: 1.6 }}>{body}</motion.p>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem", flex: 1 }}>
         {steps.map((s: any, i: number) => {
           const Icon = icons[i % icons.length];
           return (
             <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (i * 0.1) }}
               style={{ 
                 padding: "2rem", borderRadius: 24, background: bgColors[i % bgColors.length], 
                 border: `1px solid ${borderColors[i % borderColors.length]}33`, position: "relative", overflow: "hidden",
                 display: "flex", flexDirection: "column"
               }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                   <div style={{ width: 48, height: 48, borderRadius: 16, background: "white", boxShadow: SHADOW_SM, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={24} color={borderColors[i % borderColors.length]} />
                   </div>
                   <h3 style={{ fontSize: "1.1rem", fontWeight: 900, color: borderColors[i % borderColors.length] }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: "0.95rem", color: "#334155", lineHeight: 1.6, fontWeight: 500, flex: 1 }}>{s.desc}</p>
                
                {s.metric && (
                  <div style={{ marginTop: "1.5rem", padding: "1rem", borderRadius: 16, background: "white", textAlign: "center", boxShadow: SHADOW_SM }}>
                     <div style={{ fontSize: "1.5rem", fontWeight: 900, color: borderColors[i % borderColors.length] }}>{s.metric}</div>
                  </div>
                )}
             </motion.div>
           );
         })}
      </div>
    </div>
  );
}

/* ── AUDIENCE GRID LAYOUT ──────────────────────────────────── */
export function LayoutAudienceGrid({ title, subtitle, body }: LayoutProps) {
    const items = parseListItems(body);
    return (
        <div style={{ height: "100%" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 950, marginBottom: "2.5rem" }}>{title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                {items.map((it, i) => (
                    <div key={i} style={{ padding: "1.5rem", borderRadius: 24, background: "#FFFFFF", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM }}>
                        <Users size={24} color="#D4AF37" style={{ marginBottom: "1rem" }} />
                        <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A" }}><InlineText text={it} /></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
