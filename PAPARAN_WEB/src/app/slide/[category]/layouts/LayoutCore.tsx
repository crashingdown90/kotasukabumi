"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, FileText, ShieldCheck, Zap, Star, Target, Layers, CheckCircle2,
  Activity, ArrowRight, Layout as LayoutIcon, HelpCircle, ShieldAlert
} from "lucide-react";
import { 
  PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, SURFACE, BORDER_REFINED, 
  SHADOW_SM, SHADOW_LG, PRIMARY_LIGHT 
} from "../components/Constants";
import { parseListItems, parseBoldLabel, InlineText } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  image?: string;
  icon?: any;
}

/* ── EXECUTIVE HERO LAYOUT (UPGRADED) ────────────────────────── */
export function LayoutHero({ title, subtitle, body, image }: LayoutProps) {
  return (
    <div style={{ 
      height: "100%", 
      display: "flex", 
      alignItems: "center", 
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background Decor */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 10% 20%, ${PRIMARY}05 0%, transparent 40%)`, zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, ${PRIMARY}05 1px, transparent 0)`, backgroundSize: "48px 48px", zIndex: 0 }} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ width: "100%", zIndex: 2 }}>
        <div style={image ? { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "center" } : { maxWidth: "900px" }}>
          <div>
            <motion.div initial={{ x: -20 }} animate={{ x: 0 }} transition={{ delay: 0.2 }}
               style={{ 
                 fontSize: "0.9rem", 
                 fontWeight: 900, 
                 letterSpacing: "0.45em", 
                 color: GOLD, 
                 textTransform: "uppercase", 
                 marginBottom: "1.5rem",
                 display: "inline-block",
                 padding: "0.5rem 0",
                 borderBottom: `2px solid ${GOLD}44`
               }}>
               <InlineText text={subtitle} />
            </motion.div>
            <h1 style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 1000, color: TEXT_MAIN, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: "2.5rem" }}><InlineText text={title} /></h1>
            <div style={{ width: "120px", height: "6px", background: PRIMARY, borderRadius: 3, marginBottom: "3rem" }} />
            <p style={{ fontSize: "1.35rem", color: TEXT_MUTED, lineHeight: 1.7, fontWeight: 500, maxWidth: "750px" }}><InlineText text={body} /></p>
          </div>
          {image && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 1 }} style={{ position: "relative" }}>
               <div style={{ position: "absolute", inset: -20, background: `radial-gradient(circle, ${GOLD}11 0%, transparent 70%)`, zIndex: -1 }} />
               <img src={image} alt="Slide Preview" style={{ width: "100%", maxHeight: "65vh", objectFit: "contain", filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.12))", borderRadius: 24 }} />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* ── EXECUTIVE CLOSING LAYOUT (UPGRADED) ─────────────────────── */
export function LayoutClosing({ title, subtitle, body }: LayoutProps) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 50% 50%, ${PRIMARY}05 0%, transparent 70%)`, zIndex: 0 }} />
      
      <div style={{ maxWidth: "850px", zIndex: 2 }}>
        <motion.div initial={{ rotate: -180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100 }}
           style={{ width: 100, height: 100, borderRadius: 32, background: SURFACE, border: `2px solid ${GOLD}`, boxShadow: SHADOW_LG, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 3rem" }}>
          <Star size={48} color={GOLD} fill={GOLD} />
        </motion.div>
        
        <p style={{ fontSize: "1.2rem", fontWeight: 1000, color: GOLD, textTransform: "uppercase", letterSpacing: "0.4em", marginBottom: "1.5rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 1000, color: TEXT_MAIN, marginBottom: "2rem", letterSpacing: "-0.03em", lineHeight: 1.1 }}>{title}</h2>
        <div style={{ width: 100, height: 4, background: `linear-gradient(90deg, transparent, ${PRIMARY}, transparent)`, margin: "0 auto 2.5rem" }} />
        <p style={{ fontSize: "1.4rem", color: TEXT_MUTED, lineHeight: 1.7, marginBottom: "4rem", fontWeight: 500 }}><InlineText text={body} /></p>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
           <div style={{ width: 60, height: 6, background: GOLD, borderRadius: 3 }} />
           <div style={{ width: 60, height: 6, background: PRIMARY, borderRadius: 3 }} />
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
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div style={{ marginBottom: "4rem" }}>
        <p style={{ fontSize: "0.8rem", fontWeight: 900, letterSpacing: "0.25em", color: GOLD, textTransform: "uppercase", marginBottom: "1rem" }}><InlineText text={subtitle} /></p>
        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em", marginBottom: "1rem" }}><InlineText text={title} /></h2>
        <div style={{ width: 80, height: 4, background: PRIMARY, borderRadius: 2, marginBottom: "2rem" }} />
        {body && (
          <div style={{ fontSize: "1.2rem", color: TEXT_MUTED, lineHeight: 1.7, maxWidth: "900px", fontWeight: 500 }}>
            <InlineText text={body.replace(/<ul>.*?<\/ul>/, "").trim()} />
          </div>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))", gap: "1.5rem" }}>
        {items.map((item: any, i: number) => {
          let label = ""; let rest = "";
          if (typeof item === 'string') { const parsed = parseBoldLabel(item); label = parsed.label; rest = parsed.rest; } 
          else if (item.title) { label = item.title; rest = item.desc; }

          const CardIcon = icons[i % icons.length];
          return (
            <motion.div key={i} whileHover={{ y: -8, borderColor: PRIMARY }} style={{ background: SURFACE, borderRadius: 28, padding: "2.5rem", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, transition: "all 0.3s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1.5rem" }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${PRIMARY}11` }}>
                  <CardIcon size={28} color={PRIMARY} />
                </div>
                {label && <span style={{ fontWeight: 950, fontSize: "1.25rem", color: TEXT_MAIN, letterSpacing: "-0.02em" }}><InlineText text={label} /></span>}
              </div>
              {rest && <div style={{ fontSize: "1.05rem", color: TEXT_MUTED, lineHeight: 1.65, fontWeight: 500 }}><InlineText text={rest} /></div>}
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
  return (
    <div style={{ height: "100%", display: "flex", borderRadius: 40, overflow: "hidden", background: SURFACE, border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_LG }}>
      <div style={{ flex: 1.1, position: "relative", overflow: "hidden" }}>
        {image ? <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 2 }} src={image} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, ${PRIMARY}11, ${GOLD}11)` }} />}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.02))" }} />
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "5rem", backgroundColor: SURFACE }}>
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ maxWidth: "550px" }}>
          <p style={{ fontSize: "0.85rem", fontWeight: 900, letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "1.25rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 1000, color: TEXT_MAIN, lineHeight: 1.1, marginBottom: "2.5rem", letterSpacing: "-0.03em" }}>{title}</h2>
          <div style={{ fontSize: "1.2rem", color: TEXT_MUTED, lineHeight: 1.8, fontWeight: 500 }} dangerouslySetInnerHTML={{ __html: body }} />
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
