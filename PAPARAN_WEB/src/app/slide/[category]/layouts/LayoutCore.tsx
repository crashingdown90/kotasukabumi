"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe, FileText, ShieldCheck, Zap, Star, Target, Layers, CheckCircle2,
  Activity, ArrowRight, Layout as LayoutIcon, HelpCircle, ShieldAlert
} from "lucide-react";
import {
  PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, SURFACE, BORDER_REFINED,
  SHADOW_SM, SHADOW_LG, PRIMARY_LIGHT, GLASS_LIGHT
} from "../components/Constants";
import { parseListItems, parseBoldLabel, InlineText } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  image?: string;
  icon?: any;
}

/* ── EXECUTIVE HERO LAYOUT (MODERN GOV) ────────────────────────── */
export function LayoutHero({ title, subtitle, body, image }: LayoutProps) {
  const isCentered = !image;
  
  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: isCentered ? "center" : "flex-start", position: "relative", overflow: "hidden", backgroundColor: "var(--bg-color)" }}>
      
      {/* ── DIGITAL GOVERNMENT BACKGROUND ── */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${PRIMARY}11 1px, transparent 1px), linear-gradient(90deg, ${PRIMARY}11 1px, transparent 1px)`, backgroundSize: "4rem 4rem", zIndex: 0, opacity: 0.8 }} />
      {/* Floating Orbs for Dimension */}
      <div style={{ position: "absolute", top: "-10%", left: "5%", width: "40vw", height: "40vw", background: `radial-gradient(circle, ${PRIMARY}0C 0%, transparent 70%)`, filter: "blur(60px)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "60vw", height: "60vw", background: `radial-gradient(circle, ${PRIMARY}08 0%, transparent 70%)`, filter: "blur(80px)", zIndex: 0 }} />

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} style={{ width: "100%", zIndex: 2, display: "flex", flexDirection: "column", alignItems: isCentered ? "center" : "stretch" }}>
        <div style={!isCentered ? { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", padding: "0 6%" } : { maxWidth: "1100px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5%" }}>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: isCentered ? "center" : "flex-start", width: "100%" }}>
            
            {/* Modern Tagline Badge */}
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.8rem",
                padding: "0.6rem 1.5rem", borderRadius: "12px",
                background: `rgba(255,255,255,0.9)`, backdropFilter: "blur(20px)",
                border: `1px solid ${PRIMARY}33`, boxShadow: `0 8px 30px rgba(0,0,0,0.04)`,
                marginBottom: "2.5rem"
              }}>
              <div style={{ width: 8, height: 8, borderRadius: "2px", background: PRIMARY, boxShadow: `0 0 12px ${PRIMARY}` }} />
              <span style={{ fontSize: "0.85rem", fontWeight: 900, letterSpacing: "0.3em", color: PRIMARY, textTransform: "uppercase" }}>
                <InlineText text={subtitle} />
              </span>
            </motion.div>
            
            {/* Authoritative Bold Title */}
            <h1 style={{ 
              width: "100%", fontSize: isCentered ? "clamp(3.5rem, 5.5vw, 5.5rem)" : "clamp(3rem, 4.5vw, 4.5rem)", 
              fontWeight: 950, color: TEXT_MAIN, lineHeight: 1.1, letterSpacing: "-0.04em", 
              marginBottom: "2rem", textShadow: isCentered ? `0 15px 35px rgba(0,0,0,0.06)` : "none" 
            }}>
               <InlineText text={title} />
            </h1>
            
            {/* Tech-inspired Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3rem" }}>
              <div style={{ width: isCentered ? "80px" : "60px", height: "4px", background: PRIMARY, borderRadius: 2 }} />
              <div style={{ width: "12px", height: "4px", background: PRIMARY, borderRadius: 2, opacity: 0.6 }} />
              <div style={{ width: "6px", height: "4px", background: PRIMARY, borderRadius: 2, opacity: 0.3 }} />
            </div>
            
            {/* Sleek Paragraph */}
            <p style={{ 
              fontSize: isCentered ? "1.45rem" : "1.25rem", color: TEXT_MUTED, lineHeight: 1.7, 
              fontWeight: 500, maxWidth: "900px", margin: isCentered ? "0 auto" : "0" 
            }}>
               <InlineText text={body} />
            </p>
          </div>
          
          {!isCentered && image && (
            <motion.div initial={{ opacity: 0, filter: "blur(20px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ delay: 0.5, duration: 1.2 }} style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "10%", left: "10%", width: "80%", height: "80%", background: `radial-gradient(circle, ${PRIMARY}15 0%, transparent 70%)`, filter: "blur(40px)", zIndex: -1 }} />
              <img src={image} alt="Hero Visualization" style={{ width: "100%", maxHeight: "65vh", objectFit: "contain", filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.12))" }} />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* ── EXECUTIVE CLOSING LAYOUT (BUREAUCRATIC) ─────────────── */
export function LayoutClosing({ title, subtitle, body }: LayoutProps) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", position: "relative" }}>
      
      {/* Bureaucratic Cybernetic Radial Background */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 50% 50%, rgba(4, 120, 87, 0.08) 0%, transparent 65%)`, zIndex: 0 }} />

      <div style={{ maxWidth: "950px", zIndex: 2 }}>
        
        {/* Government Shield Emblem */}
        <motion.div initial={{ rotateY: -180, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 80, delay: 0.1 }}
          style={{ width: 110, height: 110, borderRadius: "50%", background: SURFACE, border: `3px solid ${PRIMARY}`, boxShadow: `0 0 0 8px rgba(4, 120, 87, 0.08), 0 10px 25px rgba(0,0,0,0.05)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 3rem", position: "relative" }}>
          
          <div style={{ position: "absolute", inset: 4, borderRadius: "50%", background: `linear-gradient(135deg, ${PRIMARY}15, transparent)` }} />
          <ShieldCheck size={50} color={PRIMARY} strokeWidth={2} />
        </motion.div>

        {/* Executive Subtitle */}
        <p style={{ fontSize: "1.05rem", fontWeight: 850, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.45em", marginBottom: "1rem" }}>{subtitle}</p>
        
        {/* Headline */}
        <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 950, color: TEXT_MAIN, marginBottom: "2.5rem", letterSpacing: "-0.04em", lineHeight: 1.1 }}>{title}</h2>
        
        {/* Authoritative Dividing Line */}
        <div style={{ width: 160, height: 4, background: `linear-gradient(90deg, transparent, ${GOLD}, ${PRIMARY}, ${GOLD}, transparent)`, margin: "0 auto 2.5rem", opacity: 0.8 }} />
        
        {/* Bureaucratic Body */}
        <p style={{ fontSize: "1.15rem", color: TEXT_MUTED, lineHeight: 1.8, marginBottom: "4rem", fontWeight: 500, padding: "0 2rem" }}>
           <InlineText text={body} />
        </p>

        {/* Closing Signature Bars */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1.25rem" }}>
          <div style={{ width: 80, height: 5, background: GOLD, borderRadius: 2 }} />
          <div style={{ width: 80, height: 5, background: PRIMARY, borderRadius: 2 }} />
          <div style={{ width: 80, height: 5, background: "#3B82F6", borderRadius: 2 }} />
        </div>
      </div>
    </motion.div>
  );
}

/* ── CARDS LAYOUT (UPGRADED) ─────────────────────────────────── */
export function LayoutCards({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const icons = [Globe, FileText, ShieldCheck, Zap, Star, Target, Layers, CheckCircle2];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} 
      style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      
      {/* Ambient Ornaments */}
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 500, height: 500, background: `radial-gradient(circle, ${GOLD}08 0%, transparent 60%)`, zIndex: -1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: 500, height: 500, background: `radial-gradient(circle, ${PRIMARY}05 0%, transparent 60%)`, zIndex: -1, pointerEvents: "none" }} />

      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
        <div style={{ marginBottom: "3rem", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ width: 30, height: 2, background: GOLD }} />
            <span style={{ fontSize: "0.85rem", fontWeight: 900, letterSpacing: "0.4em", color: GOLD, textTransform: "uppercase" }}>
              <InlineText text={subtitle} />
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2rem", maxWidth: "1200px" }}>
            <InlineText text={title} />
          </h2>
          <div style={{ width: 80, height: 4, background: `linear-gradient(90deg, ${PRIMARY}, ${GOLD})`, borderRadius: 2, marginBottom: "2rem" }} />
          {body && body.replace(/<ul>.*?<\/ul>/, "").trim() && (
            <div style={{ fontSize: "1.25rem", color: TEXT_MUTED, lineHeight: 1.7, maxWidth: "900px", fontWeight: 500 }}>
              <InlineText text={body.replace(/<ul>.*?<\/ul>/, "").trim()} />
            </div>
          )}
        </div>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "1.5rem", zIndex: 1 }}>
        {items.map((item: any, i: number) => {
          let label = ""; let rest = "";
          if (typeof item === 'string') { const parsed = parseBoldLabel(item); label = parsed.label; rest = parsed.rest; }
          else if (item.title) { label = item.title; rest = item.desc; }

          const CardIcon = icons[i % icons.length];
          const bgColors = [PRIMARY, GOLD, "#7C3AED", "#2563EB", "#E11D48"]; // Green, Gold, Purple, Blue, Rose
          const bgColor = bgColors[i % bgColors.length];

          return (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(0,0,0,0.06)`, borderColor: `${GOLD}66` }} 
              style={{ ...GLASS_LIGHT, borderRadius: 20, padding: "1.75rem", position: "relative", overflow: "hidden", transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", display: "flex", flexDirection: "column", gap: "1.25rem" }}>

              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", position: "relative", zIndex: 1 }}>
                <div style={{ flexShrink: 0, width: 52, height: 52, borderRadius: 16, background: bgColor, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 8px 16px ${bgColor}33` }}>
                  <CardIcon size={26} color="#FFFFFF" strokeWidth={2.5} />
                </div>
                <div>
                  {label && <h3 style={{ fontWeight: 900, fontSize: "1.15rem", color: TEXT_MAIN, letterSpacing: "-0.01em", lineHeight: 1.3 }}><InlineText text={label} /></h3>}
                </div>
              </div>
              
              {rest && (
                <div style={{ position: "relative", zIndex: 1, fontSize: "1rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500 }}>
                  <InlineText text={rest} />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── RESOURCES LAYOUT ──────────────────────────────────────── */
export function LayoutResources({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div style={{ marginBottom: "3.5rem" }}>
        <p style={{ fontSize: "0.85rem", fontWeight: 900, color: GOLD, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "3rem", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.02em" }}>{title}</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
        {items.map((item: any, i: number) => (
          <motion.div key={i} whileHover={{ x: 10, borderColor: GOLD }} style={{ padding: "1.75rem", borderRadius: 20, border: `1px solid ${BORDER_REFINED}`, background: SURFACE, display: "flex", alignItems: "center", gap: "1.25rem", cursor: "pointer", transition: "all 0.3s" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(212, 175, 55, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FileText size={22} color={GOLD} />
            </div>
            <div style={{ fontSize: "1.1rem", fontWeight: 700, color: TEXT_MAIN }}>{item}</div>
            <ArrowRight size={20} color={GOLD} style={{ marginLeft: "auto" }} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ── SECTION LAYOUT (UPGRADED) ─────────────────────────────── */
export function LayoutSection({ title, subtitle, body }: LayoutProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100vw", height: "100vw", background: `radial-gradient(circle, ${GOLD}08 0%, transparent 60%)`, pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, ${PRIMARY}05 1px, transparent 0)`, backgroundSize: "60px 60px", zIndex: 0 }} />

      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} style={{ zIndex: 1 }}>
        <div style={{ display: "inline-flex", padding: "0.6rem 2rem", borderRadius: 99, background: SURFACE, border: `1px solid ${PRIMARY}22`, boxShadow: SHADOW_SM, marginBottom: "2.5rem", alignItems: "center", gap: "0.75rem" }}>
          <LayoutIcon size={20} color={PRIMARY} />
          <span style={{ fontSize: "0.85rem", fontWeight: 900, letterSpacing: "0.35em", color: PRIMARY, textTransform: "uppercase" }}>{subtitle}</span>
        </div>

        <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 1000, color: TEXT_MAIN, lineHeight: 1, letterSpacing: "-0.05em", margin: "0 0 3rem" }}>
          {title.split(":").map((part, i) => (
            <span key={i} style={{ display: "block", color: i === 0 ? GOLD : TEXT_MAIN, marginBottom: i === 0 ? "1rem" : 0 }}>
              {part.trim()}
              {i === 0 && <span style={{ fontSize: "0.5em", verticalAlign: "middle", marginLeft: "1rem" }}>✦</span>}
            </span>
          ))}
        </h1>

        <div style={{ maxWidth: "600px", margin: "0 auto", height: "4px", background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`, marginBottom: "3rem", borderRadius: 2 }} />

        <p style={{ fontSize: "1.6rem", color: TEXT_MUTED, maxWidth: "850px", margin: "0 auto", lineHeight: 1.6, fontWeight: 500, fontStyle: "italic" }}>
          &quot;{body}&quot;
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ── SPLIT LAYOUT (UPGRADED) ────────────────────────────────── */
export function LayoutSplit({ title, subtitle, body, image }: LayoutProps) {
  const isLogo = image && (image.toLowerCase().endsWith('.png') || image.toLowerCase().endsWith('.svg'));
  return (
    <div style={{ height: "100%", display: "flex", borderRadius: 40, overflow: "hidden", background: SURFACE, border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_LG }}>
      <div style={{ flex: 1.1, position: "relative", overflow: "hidden", background: isLogo ? `linear-gradient(135deg, rgba(255,255,255,0.8), rgba(248,250,252,0.8))` : `background-color: #f8fafc`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {image ? <motion.img initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 2 }} src={image} style={{ width: "100%", height: "100%", objectFit: isLogo ? "contain" : "cover", padding: isLogo ? "4rem" : "0" }} /> : <div style={{ width: "100%", height: "100%" }} />}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.02))", pointerEvents: "none" }} />
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "3rem", backgroundColor: SURFACE }}>
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 900, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 950, color: TEXT_MAIN, lineHeight: 1.2, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>{title}</h2>
          <div style={{ fontSize: "1rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500, whiteSpace: "pre-wrap" }}>
             <InlineText text={body} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ── INVESTMENT LAYOUT (UPGRADED) ───────────────────────────── */
export function LayoutInvestment({ title, subtitle, body, features }: LayoutProps) {
  const items = features || [];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p style={{ fontSize: "0.9rem", fontWeight: 900, color: GOLD, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "3.5rem", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
        <p style={{ fontSize: "1.2rem", color: TEXT_MUTED, maxWidth: "850px", margin: "1rem auto 0", lineHeight: 1.6, fontWeight: 500 }}>{body}</p>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignContent: "center", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        {items.map((it: any, i: number) => (
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 * i }} key={i} style={{ padding: "3rem", borderRadius: 32, background: SURFACE, border: `1px solid ${GOLD}22`, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: SHADOW_SM }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: `${GOLD}05`, zIndex: 0 }} />
            <div style={{ zIndex: 1 }}>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 950, marginBottom: "1rem", color: TEXT_MAIN, lineHeight: 1.2 }}>{it.title}</h3>
              <p style={{ color: TEXT_MUTED, marginBottom: "2.5rem", lineHeight: 1.6, fontSize: "1.1rem", fontWeight: 500 }}>{it.desc}</p>
            </div>

            <div style={{ zIndex: 1, borderTop: `1px solid ${GOLD}11`, paddingTop: "2rem", display: "flex", alignItems: "baseline", gap: "1.25rem" }}>
              <span style={{ fontWeight: 1000, fontSize: "3rem", color: GOLD, letterSpacing: "-0.03em", lineHeight: 1 }}>{it.metric}</span>
              <span style={{ fontWeight: 900, color: TEXT_MUTED, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>Proyeksi Investasi</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
