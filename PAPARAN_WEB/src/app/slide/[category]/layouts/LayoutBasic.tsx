"use client";

import React from "react";
import { Slide, Metric, Feature } from "../components/SlideTypes";

import Image from "next/image";
import { Globe, FileText, ShieldCheck, Zap, Star, Target, Layers, CheckCircle2, FileDown, Eye, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, TEXT_SUBTLE, PRIMARY_LIGHT, SURFACE, BORDER_REFINED, SHADOW_LG, SHADOW_SM } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  image?: string;
  logo?: string;
  IconComp: React.ElementType;
  features?: { title: string, desc: string }[];
  metrics?: { label: string, value: string, unit?: string, trend?: string }[];
  highlights?: string[];
}

/* ── FORMAL LOGO ────────────────────────────────────────── */
const FormalLogo = ({ src, size = 90 }: { src: string; size?: number }) => {
  return (
    <div style={{ position: "relative", width: size * 1.4, height: size * 1.4, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
      {/* Refined Outer Ring */}
      <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `1px solid var(--slate-200)`, opacity: 0.6 }} />
      <div style={{ position: "absolute", inset: 8, borderRadius: "50%", border: `1.5px solid var(--slate-100)` }} />
      
      {/* Main Logo Frame */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ 
          position: "relative", 
          width: size, 
          height: size, 
          borderRadius: 20, 
          overflow: "hidden", 
          background: "white", 
          border: `1px solid var(--slate-200)`,
          boxShadow: "var(--shadow-md)",
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          zIndex: 2
        }}
      >
        <Image 
          src={src} 
          alt="Government Logo" 
          width={size * 0.7} 
          height={size * 0.7} 
          priority 
          style={{ objectFit: "contain" }} 
        />
      </motion.div>
    </div>
  );
};

/* ── HERO LAYOUT ────────────────────────────────────────── */
export function LayoutHero({ title, subtitle, body, logo }: LayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ textAlign: "center", padding: "4rem 2rem", display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <FormalLogo src={logo || "/Logo_Sukabumi.png"} size={100} />
      
      <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "var(--slate-50)", border: `1px solid var(--slate-200)`, padding: "0.6rem 1.75rem", borderRadius: 99, marginBottom: "2.5rem" }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: PRIMARY }} />
        <span style={{ fontSize: "0.75rem", fontWeight: 850, letterSpacing: "0.15em", color: PRIMARY, textTransform: "uppercase" }}>{subtitle}</span>
      </div>

      <h1 style={{
        fontSize: "clamp(2.5rem, 6.5vw, 4.5rem)",
        fontWeight: 900,
        color: TEXT_MAIN,
        lineHeight: 1.1,
        marginBottom: "2.5rem",
        letterSpacing: "-0.04em",
        maxWidth: "1000px"
      }}>
        {title}
      </h1>

      <div style={{ maxWidth: "800px", fontSize: "1.2rem", color: TEXT_MUTED, lineHeight: 1.8, fontWeight: 500 }}>
        <InlineText text={body} />
      </div>
    </motion.div>
  );
}

/* ── CLOSING LAYOUT ─────────────────────────────────────── */
export function LayoutClosing({ title, subtitle, body, logo }: LayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}
    >
      <div style={{
        background: SURFACE,
        padding: "6rem 4rem",
        borderRadius: 32,
        border: `1px solid ${BORDER_REFINED}`,
        position: "relative",
        maxWidth: "1000px",
        width: "100%",
        boxShadow: SHADOW_LG,
        borderTop: `8px solid ${PRIMARY}`
      }}>
        <div style={{ position: "absolute", top: 40, left: "50%", transform: "translateX(-50%)" }}>
           <FormalLogo src={logo || "/Logo_Sukabumi.png"} size={70} />
        </div>
        
        <p style={{ fontSize: "0.85rem", fontWeight: 850, letterSpacing: "0.25em", color: PRIMARY, textTransform: "uppercase", marginBottom: "1.5rem", marginTop: "2rem" }}>{subtitle}</p>
        
        <h2 style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: 900,
          color: TEXT_MAIN,
          marginBottom: "2.5rem",
          letterSpacing: "-0.03em",
          lineHeight: 1.1
        }}>{title}</h2>

        <div style={{
          fontSize: "1.2rem",
          color: TEXT_MUTED,
          maxWidth: "750px",
          margin: "0 auto",
          lineHeight: 1.8,
          fontWeight: 500,
          marginBottom: "4rem"
        }}>
          <InlineText text={body} />
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "4rem", alignItems: "center", borderTop: `1px solid var(--slate-100)`, paddingTop: "3rem" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: TEXT_SUBTLE, fontWeight: 800, letterSpacing: "0.1em", marginBottom: "0.4rem" }}>TIM TRANSFORMASI</div>
            <div style={{ fontSize: "1rem", color: GOLD, fontWeight: 900 }}>KOTA SUKABUMI</div>
          </div>
          <div style={{ width: 1, height: 40, background: "var(--slate-200)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: TEXT_SUBTLE, fontWeight: 800, letterSpacing: "0.1em", marginBottom: "0.4rem" }}>OPERASIONAL TAHUN</div>
            <div style={{ fontSize: "1rem", color: TEXT_MAIN, fontWeight: 900 }}>2025 – 2029</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── RESOURCES LAYOUT ───────────────────────────────────── */
export function LayoutResources({ title, subtitle, body }: LayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}
    >
      <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.5rem 1.25rem", borderRadius: 99, background: "var(--slate-50)", border: `1px solid var(--slate-200)`, marginBottom: "1.5rem" }}>
         <FileText size={14} color={GOLD} />
         <span style={{ fontSize: "0.75rem", fontWeight: 850, letterSpacing: "0.15em", color: GOLD, textTransform: "uppercase" }}>{subtitle}</span>
      </div>
      
      <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", fontWeight: 900, color: TEXT_MAIN, marginBottom: "4rem", letterSpacing: "-0.03em" }}>{title}</h2>

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
        {[
          { label: "PDF RESMI (HD)", desc: "Salinan Produk Hukum Asli", icon: FileDown, color: GOLD, url: "/docs/perda-rpjmd-2025.pdf" },
          { label: "DIGITAL VERSION", desc: "Format Teks Terintegrasi", icon: Eye, color: PRIMARY, url: "/docs/perda-rpjmd-2025.md" }
        ].map((res, i) => (
          <motion.a
            key={i}
            whileHover={{ y: -6, borderColor: res.color }}
            href={res.url} target="_blank" rel="noopener noreferrer"
            style={{ 
              background: "white", 
              padding: "2.5rem", 
              borderRadius: 24, 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              gap: "1.5rem", 
              width: "320px", 
              textDecoration: "none", 
              border: `1px solid var(--border-refined)`, 
              boxShadow: SHADOW_SM,
              transition: "all 0.3s"
            }}
          >
            <div style={{ width: 64, height: 64, borderRadius: 16, background: `${res.color}08`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${res.color}15` }}>
              <res.icon size={32} color={res.color} />
            </div>
            <div>
              <div style={{ fontWeight: 850, fontSize: "1.1rem", color: TEXT_MAIN, marginBottom: "0.4rem" }}>{res.label}</div>
              <div style={{ fontSize: "0.85rem", color: TEXT_MUTED, fontWeight: 500 }}>{res.desc}</div>
            </div>
          </motion.a>
        ))}
      </div>

      <div style={{ marginTop: "4rem", color: TEXT_MUTED, fontSize: "1.05rem", maxWidth: "600px", lineHeight: 1.7, fontWeight: 500 }}>
        {body}
      </div>
    </motion.div>
  );
}

/* ── CARDS LAYOUT ───────────────────────────────────────── */
export function LayoutCards({ title, subtitle, body, features, highlights }: LayoutProps) {
  const items = features || highlights || parseListItems(body);
  const icons = [Globe, FileText, ShieldCheck, Zap, Star, Target, Layers, CheckCircle2];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div style={{ marginBottom: "3.5rem" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 850, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>{title}</h2>
        {body && (
          <div style={{ fontSize: "1.1rem", color: TEXT_MUTED, lineHeight: 1.7, maxWidth: "850px" }}>
            <InlineText text={body.replace(/<ul>.*?<\/ul>/, "").trim()} />
          </div>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "1.5rem" }}>
        {items.map((item: any, i: number) => {
          let label = "";
          let rest = "";

          if (typeof item === 'string') {
            const parsed = parseBoldLabel(item);
            label = parsed.label;
            rest = parsed.rest;
          } else if (item.title) {
            label = item.title;
            rest = item.desc;
          }

          const CardIcon = icons[i % icons.length];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 + 0.2, duration: 0.5 }}
              whileHover={{ y: -5, borderColor: PRIMARY }}
              style={{ 
                background: SURFACE, 
                borderRadius: 20, 
                padding: "2rem", 
                display: "flex", 
                flexDirection: "column", 
                gap: "1.25rem", 
                border: `1px solid ${BORDER_REFINED}`, 
                boxShadow: SHADOW_SM,
                transition: "all 0.3s"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CardIcon size={24} color={PRIMARY} />
                </div>
                {label && <span style={{ fontWeight: 850, fontSize: "1.1rem", color: TEXT_MAIN }}>{label}</span>}
              </div>
              {rest && <div style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6 }}><InlineText text={rest} /></div>}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
