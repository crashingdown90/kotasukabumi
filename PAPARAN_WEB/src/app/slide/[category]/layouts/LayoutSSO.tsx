"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Fingerprint, Lock, Key, ShieldCheck, UserCheck, Settings, Network, Cpu, Scan } from "lucide-react";
import { TEXT_MAIN, TEXT_MUTED, SURFACE } from "../components/Constants";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

export function LayoutSSOHero({ title, subtitle, body }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const primary = "#1e3a8a"; // Authoritative Navy
  const secondary = "#b45309"; // Institutional Gold
  const accent = "#0f766e"; // Bureaucratic Teal 

  return (
    <div style={{
      height: "100%", width: "100%", backgroundColor: "#f8fafc",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", color: TEXT_MAIN
    }}>

      {/* Dynamic Animated Mesh Background */}
      {mounted && (
        <>
          <motion.div animate={{ x: ["-10%", "10%", "-10%"], y: ["-10%", "10%", "-10%"] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} style={{ position: "absolute", top: "-10%", left: "-10%", width: "60vw", height: "60vw", background: `radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, transparent 60%)`, filter: "blur(60px)", zIndex: 0 }} />
          <motion.div animate={{ x: ["10%", "-10%", "10%"], y: ["10%", "-10%", "10%"] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "70vw", height: "70vw", background: `radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)`, filter: "blur(80px)", zIndex: 0 }} />
          <motion.div animate={{ x: ["-5%", "5%", "-5%"], y: ["5%", "-5%", "5%"] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} style={{ position: "absolute", top: "20%", right: "20%", width: "40vw", height: "40vw", background: `radial-gradient(circle, rgba(5, 150, 105, 0.05) 0%, transparent 50%)`, filter: "blur(50px)", zIndex: 0 }} />
        </>
      )}

      {/* Grid line overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)`, backgroundSize: "40px 40px", zIndex: 0 }} />

      <div style={{ zIndex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: "1400px", padding: "0 4rem", gap: "4rem" }}>

        {/* Left Side: Text Section */}
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
          <div style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(20px)", padding: "3rem", borderRadius: "32px", border: "1px solid rgba(2, 132, 199, 0.1)", boxShadow: "0 10px 40px rgba(15, 23, 42, 0.03)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 24px", borderRadius: "99px", background: `linear-gradient(135deg, ${primary}15 0%, ${secondary}15 100%)`, border: `1px solid ${primary}20`, marginBottom: "2rem" }}>
              <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ width: 8, height: 8, borderRadius: "50%", background: primary, boxShadow: `0 0 10px ${primary}80` }} />
              <span style={{ fontSize: "0.85rem", fontWeight: 800, letterSpacing: "0.3em", color: primary, textTransform: "uppercase" }}>
                {subtitle}
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(3.5rem, 5vw, 4.8rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.04em", marginBottom: "1.5rem", lineHeight: 1.1, background: `linear-gradient(135deg, ${TEXT_MAIN} 60%, ${primary} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {title}
            </h1>

            <p style={{ fontSize: "1.25rem", color: TEXT_MUTED, lineHeight: 1.8, fontWeight: 500, maxWidth: "600px" }}>
              {body}
            </p>
          </div>
        </motion.div>

        {/* Right Side: Nodes & Login Mockup */}
        <div style={{ flex: "1", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", height: "600px" }}>

          {/* Decorative glowing lines */}
          {mounted && (
            <div style={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} style={{ position: "absolute", width: "120%", height: "1px", background: `linear-gradient(90deg, transparent, ${primary}44, transparent)`, zIndex: 0 }} />
              <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 45, ease: "linear" }} style={{ position: "absolute", height: "120%", width: "1px", background: `linear-gradient(180deg, transparent, ${secondary}44, transparent)`, zIndex: 0 }} />
            </div>
          )}

          {/* Core Animation Rings (Enlarged) */}
          <div style={{ position: "absolute", width: 500, height: 500, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
            {mounted && (
              <>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `1px dashed ${primary}`, opacity: 0.2 }} />
                <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} style={{ position: "absolute", inset: 40, borderRadius: "50%", border: `2px solid ${secondary}`, opacity: 0.15, borderLeftColor: "transparent", borderBottomColor: "transparent" }} />
                <motion.div animate={{ rotate: 360, scale: [1, 1.05, 1] }} transition={{ rotate: { repeat: Infinity, duration: 25, ease: "linear" }, scale: { repeat: Infinity, duration: 4, ease: "easeInOut" } }} style={{ position: "absolute", inset: 80, borderRadius: "50%", border: `1px solid ${primary}`, opacity: 0.3, boxShadow: `0 0 40px rgba(2, 132, 199, 0.1), inset 0 0 20px rgba(2, 132, 199, 0.05)` }} />
              </>
            )}

            {/* Rotating Data Nodes */}
            {mounted && [
              { Icon: Lock, color: primary, delay: 0 },
              { Icon: Network, color: secondary, delay: 0.2 },
              { Icon: ShieldCheck, color: accent, delay: 0.4 },
              { Icon: UserCheck, color: primary, delay: 0.6 },
              { Icon: Settings, color: secondary, delay: 0.8 },
              { Icon: Scan, color: accent, delay: 1.0 }
            ].map((item, i) => {
              const angle = (i * 360) / 6;
              return (
                <motion.div key={i} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 45, ease: "linear" }} style={{ position: "absolute", width: "100%", height: "100%", zIndex: 2 }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", transform: `rotate(${angle}deg)` }}>
                    <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                      style={{ position: "absolute", top: -20, left: "50%", marginLeft: -20, width: 40, height: 40, borderRadius: "50%", background: SURFACE, border: `1px solid ${item.color}40`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 15px ${item.color}20` }}>
                      <item.Icon size={18} color={item.color} style={{ transform: `rotate(-${angle}deg)` }} />
                      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }} transition={{ repeat: Infinity, duration: 2, delay: item.delay, ease: "easeInOut" }} style={{ position: "absolute", inset: -2, borderRadius: "50%", border: `1px solid ${item.color}` }} />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* The Login Mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            style={{ width: "380px", background: "rgba(255,255,255,0.85)", backdropFilter: "blur(24px)", borderRadius: 24, padding: "2.5rem", boxShadow: "0 20px 40px rgba(15,23,42,0.1), inset 0 0 0 1px rgba(2,132,199,0.15)", border: "1px solid rgba(255,255,255,0.6)", zIndex: 10 }}>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem", position: "relative" }}>
              {/* Laser Scan line on login logo */}
              {mounted && (
                <motion.div animate={{ y: [-10, 30, -10] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} style={{ position: "absolute", top: 10, left: "40%", right: "40%", height: 2, background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, boxShadow: `0 0 10px ${accent}`, zIndex: 11, opacity: 0.8 }} />
              )}
              <div style={{ width: 64, height: 64, borderRadius: 16, background: `linear-gradient(135deg, ${primary}, ${secondary})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 10px 20px ${primary}40`, zIndex: 10 }}>
                <Fingerprint color="white" size={32} />
              </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "-0.02em", marginBottom: 4 }}>SSO PORTAL BIROKRASI</h3>
              <p style={{ color: TEXT_MUTED, fontSize: "0.9rem", fontWeight: 500 }}>Sistem Integrasi Layanan Aparatur Kota Sukabumi</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}>
                <label style={{ fontSize: "0.8rem", fontWeight: 700, color: TEXT_MUTED }}>Nomor Induk Pegawai / Surel Kedinasan</label>
                <div style={{ width: "100%", height: 48, borderRadius: 12, border: "1px solid rgba(15,23,42,0.1)", background: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", padding: "0 1rem" }}>
                  <div style={{ width: "60%", height: 6, background: "rgba(15,23,42,0.1)", borderRadius: 4 }} />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}>
                <label style={{ fontSize: "0.8rem", fontWeight: 700, color: TEXT_MUTED }}>Sandi Otentikasi</label>
                <div style={{ width: "100%", height: 48, borderRadius: 12, border: "1px solid rgba(15,23,42,0.1)", background: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", padding: "0 1rem" }}>
                  <div style={{ display: "flex", gap: "6px" }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} style={{ width: 6, height: 6, background: "rgba(15,23,42,0.2)", borderRadius: "50%" }} />)}
                  </div>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ height: 48, borderRadius: 12, background: `linear-gradient(135deg, ${primary}, #1e40af)`, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1rem", color: "white", fontWeight: 700, boxShadow: `0 8px 20px ${primary}40`, cursor: "pointer" }}>
                Verifikasi Kredensial
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

/* ── SSO CARDS LAYOUT ──────────────────────────────────────── */
import { parseListItems, parseBoldLabel, InlineText } from "../components/Shared";

export function LayoutSSOCards({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const primary = "#1e3a8a"; // Authoritative Navy
  const secondary = "#b45309"; // Institutional Gold
  const accent = "#0f766e"; // Bureaucratic Teal 

  const cardColors = [
    { base: primary, bg: `${primary}10`, border: `${primary}30`, glow: `${primary}20` },
    { base: secondary, bg: `${secondary}10`, border: `${secondary}30`, glow: `${secondary}20` },
    { base: accent, bg: `${accent}10`, border: `${accent}30`, glow: `${accent}20` },
  ];

  const CardIcons = [Network, ShieldCheck, Cpu, Key, Scan];

  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#f8fafc", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>

      {/* Same Ambient Tech Background */}
      {mounted && (
        <>
          <motion.div animate={{ x: ["-5%", "5%", "-5%"], y: ["-5%", "5%", "-5%"] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} style={{ position: "absolute", top: "-10%", left: "-5%", width: "50vw", height: "50vw", background: `radial-gradient(circle, rgba(2, 132, 199, 0.05) 0%, transparent 60%)`, filter: "blur(60px)", zIndex: 0 }} />
          <motion.div animate={{ x: ["5%", "-5%", "5%"], y: ["5%", "-5%", "5%"] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "50vw", height: "50vw", background: `radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 60%)`, filter: "blur(60px)", zIndex: 0 }} />
        </>
      )}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.02) 1px, transparent 1px)`, backgroundSize: "40px 40px", zIndex: 0 }} />

      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ padding: "0 6%", zIndex: 1 }}>
        <div style={{ marginBottom: "3.5rem", display: "flex", flexDirection: "column", alignItems: "flex-start", maxWidth: "1100px" }}>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "6px 20px", borderRadius: "99px", background: `linear-gradient(90deg, ${primary}15, transparent)`, borderLeft: `2px solid ${primary}`, marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 850, letterSpacing: "0.3em", color: primary, textTransform: "uppercase" }}>
              <InlineText text={subtitle} />
            </span>
          </div>

          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2rem" }}>
            <InlineText text={title} />
          </h2>

          <div style={{ display: "flex", gap: "8px", marginBottom: "1rem" }}>
            <motion.div animate={{ width: ["20px", "60px", "20px"] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} style={{ height: "4px", background: primary, borderRadius: 2 }} />
            <motion.div animate={{ width: ["60px", "20px", "60px"] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }} style={{ height: "4px", background: secondary, borderRadius: 2 }} />
            <div style={{ width: "20px", height: "4px", background: accent, borderRadius: 2 }} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {items.map((item: any, i: number) => {
            let label = ""; let rest = "";
            if (typeof item === 'string') { const parsed = parseBoldLabel(item); label = parsed.label; rest = parsed.rest; }
            else if (item.title) { label = item.title; rest = item.desc; }

            const ColorMap = cardColors[i % cardColors.length];
            const CardIcon = CardIcons[i % CardIcons.length];

            return (
              <motion.div key={i} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 + (i * 0.15) }}
                whileHover={{ y: -8, boxShadow: `0 20px 40px rgba(15,23,42,0.05), 0 0 20px ${ColorMap.glow}`, borderColor: ColorMap.base }}
                style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", borderRadius: 24, padding: "2rem", border: `1px solid ${ColorMap.border}`, transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative", overflow: "hidden" }}>

                {/* Tech Node Corner Deco */}
                <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: `radial-gradient(circle at top right, ${ColorMap.glow} 0%, transparent 70%)` }} />
                <div style={{ position: "absolute", top: 20, right: 20, display: "flex", gap: "4px" }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: ColorMap.base, opacity: 0.5 }} />
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: ColorMap.base, opacity: 0.3 }} />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", zIndex: 1 }}>
                  <div style={{ flexShrink: 0, width: 54, height: 54, borderRadius: 16, background: ColorMap.bg, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${ColorMap.border}` }}>
                    <CardIcon size={28} color={ColorMap.base} strokeWidth={2} />
                  </div>
                  {label && <h3 style={{ fontWeight: 900, fontSize: "1.2rem", color: TEXT_MAIN, letterSpacing: "-0.01em", lineHeight: 1.3 }}><InlineText text={label} /></h3>}
                </div>

                {rest && (
                  <div style={{ zIndex: 1, fontSize: "1.05rem", color: TEXT_MUTED, lineHeight: 1.7, fontWeight: 500 }}>
                    <InlineText text={rest} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

/* ── SSO VISION LAYOUT ──────────────────────────────────────── */
import { Target, Compass, Layers } from "lucide-react";

export function LayoutSSOVision({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const primary = "#1e3a8a"; // Authoritative Navy
  const secondary = "#b45309"; // Institutional Gold
  const accent = "#0f766e"; // Bureaucratic Teal 

  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#f8fafc", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>

      {/* Background Ambience */}
      {mounted && (
        <>
          <motion.div animate={{ x: ["-5%", "5%", "-5%"], y: ["-5%", "5%", "-5%"] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} style={{ position: "absolute", top: "-10%", right: "-5%", width: "60vw", height: "60vw", background: `radial-gradient(circle, rgba(2, 132, 199, 0.05) 0%, transparent 60%)`, filter: "blur(80px)", zIndex: 0 }} />
          <motion.div animate={{ x: ["5%", "-5%", "5%"], y: ["5%", "-5%", "5%"] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "50vw", height: "50vw", background: `radial-gradient(circle, rgba(5, 150, 105, 0.04) 0%, transparent 60%)`, filter: "blur(60px)", zIndex: 0 }} />
        </>
      )}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.02) 1px, transparent 1px)`, backgroundSize: "60px 60px", zIndex: 0 }} />

      <div style={{ zIndex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: "1500px", padding: "0 4rem", gap: "4rem" }}>

        {/* Left Side: Title & Subtitle */}
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} style={{ flex: "0.8", display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 24px", borderRadius: "99px", background: `linear-gradient(135deg, ${primary}15 0%, transparent 100%)`, borderLeft: `3px solid ${primary}`, marginBottom: "2rem" }}>
            <Target size={16} color={primary} />
            <span style={{ fontSize: "0.85rem", fontWeight: 850, letterSpacing: "0.3em", color: primary, textTransform: "uppercase" }}>
              <InlineText text={subtitle} />
            </span>
          </div>

          <h2 style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "2rem" }}>
            <InlineText text={title} />
          </h2>

          <div style={{ display: "flex", gap: "8px" }}>
            <motion.div animate={{ width: ["20px", "80px", "20px"] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} style={{ height: "6px", background: primary, borderRadius: 3 }} />
            <div style={{ width: "20px", height: "6px", background: secondary, borderRadius: 3, opacity: 0.8 }} />
          </div>

        </motion.div>

        {/* Right Side: Visi, Misi, Pendekatan Bento Grid */}
        <div style={{ flex: "1.2", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>

          {items.map((item: any, i: number) => {
            let label = ""; let rest = "";
            if (typeof item === 'string') { const parsed = parseBoldLabel(item); label = parsed.label; rest = parsed.rest; }
            else if (item.title) { label = item.title; rest = item.desc; }

            const isVisi = i === 0;
            const cardColor = i === 0 ? primary : (i === 1 ? secondary : accent);
            const CardIcon = i === 0 ? Target : (i === 1 ? Compass : Layers);

            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 + (i * 0.2) }}
                whileHover={{ y: -5, boxShadow: `0 20px 40px rgba(15,23,42,0.06), 0 0 0 1px ${cardColor}40 inset` }}
                style={{
                  gridColumn: isVisi ? "span 2" : "span 1",
                  background: isVisi ? `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)` : "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(20px)", borderRadius: 24, padding: isVisi ? "3rem" : "2.5rem",
                  border: `1px solid rgba(15,23,42,0.05)`, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: "1rem"
                }}>

                {/* Decorative Accent */}
                {mounted && isVisi && (
                  <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 3 }} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 3, background: `linear-gradient(90deg, ${primary}, ${secondary}, ${accent})` }} />
                )}

                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", zIndex: 1 }}>
                  <div style={{ flexShrink: 0, width: isVisi ? 64 : 54, height: isVisi ? 64 : 54, borderRadius: 16, background: `${cardColor}15`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${cardColor}30` }}>
                    <CardIcon size={isVisi ? 32 : 28} color={cardColor} strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1 }}>
                    {label && <h3 style={{ fontWeight: 900, fontSize: isVisi ? "1.8rem" : "1.4rem", color: TEXT_MAIN, letterSpacing: "-0.02em", marginBottom: "0.5rem" }}><InlineText text={label} /></h3>}
                    {rest && (
                      <p style={{ fontSize: isVisi ? "1.2rem" : "1.05rem", color: TEXT_MUTED, lineHeight: 1.7, fontWeight: 500 }}>
                        <InlineText text={rest} />
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </div>
  );
}

/* ── SSO CHALLENGE & SOLUTION LAYOUT ──────────────────────────────────────── */
import { AlertTriangle, Database, Unlink, Zap } from "lucide-react"; // Import appropriate icons, keeping existing valid ones from Lucide

export function LayoutSSOChallenge({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const primary = "#1e3a8a"; // Authoritative Navy
  const danger = "#991b1b"; // Dark Red for Bureaucratic Issues
  const success = "#065f46"; // Dark Emerald for Bureaucratic Solution

  const challenges = items.slice(0, 3);
  const solution = items[3];

  const challengeIcons = [Unlink, Database, AlertTriangle];

  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#f8fafc", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>

      {/* Background Ambience */}
      {mounted && (
        <>
          <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} style={{ position: "absolute", top: "-10%", left: "-5%", width: "40vw", height: "40vw", background: `radial-gradient(circle, rgba(225, 29, 72, 0.03) 0%, transparent 60%)`, filter: "blur(60px)", zIndex: 0 }} />
          <motion.div animate={{ opacity: [0.4, 0.7, 0.4] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "60vw", height: "60vw", background: `radial-gradient(circle, rgba(5, 150, 105, 0.06) 0%, transparent 60%)`, filter: "blur(80px)", zIndex: 0 }} />
        </>
      )}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.02) 1px, transparent 1px)`, backgroundSize: "40px 40px", zIndex: 0 }} />

      <div style={{ zIndex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: "1400px", padding: "0 4rem", gap: "4rem" }}>

        {/* Left Side: Title & The 3 Challenges */}
        <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 24px", borderRadius: "99px", background: `linear-gradient(135deg, rgba(225, 29, 72, 0.1) 0%, transparent 100%)`, borderLeft: `3px solid ${danger}`, marginBottom: "1.5rem" }}>
            <AlertTriangle size={16} color={danger} />
            <span style={{ fontSize: "0.85rem", fontWeight: 850, letterSpacing: "0.2em", color: danger, textTransform: "uppercase" }}>
              <InlineText text={subtitle} />
            </span>
          </div>

          <h2 style={{ fontSize: "clamp(3rem, 4vw, 4rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "2.5rem" }}>
            <InlineText text={title} />
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
            {challenges.map((item: any, i: number) => {
              let label = ""; let rest = "";
              if (typeof item === 'string') { const parsed = parseBoldLabel(item); label = parsed.label; rest = parsed.rest; }
              else if (item.title) { label = item.title; rest = item.desc; }

              const Icon = challengeIcons[i % challengeIcons.length] || AlertTriangle;

              return (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + (i * 0.15) }}
                  style={{ background: "rgba(255,255,255,0.8)", border: `1px solid ${danger}20`, borderRadius: "16px", padding: "1.5rem", display: "flex", alignItems: "flex-start", gap: "1.2rem", boxShadow: "0 4px 20px rgba(15,23,42,0.03)" }}>

                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${danger}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={20} color={danger} />
                  </div>

                  <div>
                    <h4 style={{ fontWeight: 800, fontSize: "1.1rem", color: TEXT_MAIN, marginBottom: "0.3rem" }}><InlineText text={label} /></h4>
                    <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500 }}><InlineText text={rest} /></p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side: The Giant Solution Card */}
        <div style={{ flex: "0.9", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {solution && (
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.8, type: "spring", stiffness: 90 }}
              whileHover={{ y: -8, boxShadow: `0 30px 60px rgba(5, 150, 105, 0.15), 0 0 0 1px ${success}40 inset` }}
              style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)`, backdropFilter: "blur(24px)", borderRadius: "32px", padding: "3.5rem", border: `1px solid ${success}40`, boxShadow: `0 20px 40px rgba(15,23,42,0.08), 0 0 0 1px ${success}20 inset`, position: "relative", overflow: "hidden" }}>

              {/* Dynamic Glow inside the card */}
              {mounted && (
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} style={{ position: "absolute", top: "-20%", right: "-20%", width: "80%", height: "80%", background: `radial-gradient(circle, ${success}30 0%, transparent 70%)` }} />
              )}

              {/* Corner decor */}
              <div style={{ position: "absolute", top: 30, right: 30, display: "flex", gap: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: success, opacity: 0.8 }} />
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: success, opacity: 0.4 }} />
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: success, opacity: 0.2 }} />
              </div>

              {((sol: any) => {
                let label = ""; let rest = "";
                if (typeof sol === 'string') { const parsed = parseBoldLabel(sol); label = parsed.label; rest = parsed.rest; }
                else if (sol.title) { label = sol.title; rest = sol.desc; }

                return (
                  <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>

                    <div style={{ width: 80, height: 80, borderRadius: 20, background: `linear-gradient(135deg, ${success}, #047857)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 10px 25px ${success}40` }}>
                      <Zap size={36} color="white" />
                    </div>

                    <div>
                      <div style={{ fontSize: "0.9rem", fontWeight: 800, color: success, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>KONSOLIDASI STRATEGIS</div>
                      <h3 style={{ fontWeight: 950, fontSize: "2.2rem", color: TEXT_MAIN, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.2rem" }}><InlineText text={label} /></h3>
                      <p style={{ fontSize: "1.15rem", color: TEXT_MUTED, lineHeight: 1.8, fontWeight: 500 }}>
                        <InlineText text={rest} />
                      </p>
                    </div>

                    <div style={{ marginTop: "1rem", height: "4px", width: "60px", borderRadius: "2px", background: `linear-gradient(90deg, ${success}, ${primary})` }} />
                  </div>
                );
              })(solution)}

            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── SSO LEGAL COMPLIANCE MATRIX (UNIFIED PANEL) ──────────────────────────────────────── */
import { Scale, FileCheck, ShieldAlert, BookOpen } from "lucide-react";

export function LayoutSSOLegal({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const primary = "#1e3a8a"; // Authoritative Navy
  const secondary = "#b45309"; // Institutional Gold
  const accent = "#0f766e"; // Bureaucratic Teal

  // Reusing icons safely (avoiding Fingerprint since it clashed previously in the scope if not careful)
  const icons = [Scale, Network, BookOpen, FileCheck, ShieldAlert, Scale];
  const accents = [primary, secondary, accent, primary, secondary, accent];

  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#f8fafc", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

      {/* Delicate Ambient Background */}
      {mounted && (
        <>
          <motion.div animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }} style={{ position: "absolute", top: "10%", left: "10%", width: "50vw", height: "50vw", background: `radial-gradient(circle, ${primary}10 0%, transparent 70%)`, filter: "blur(80px)" }} />
          <motion.div animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", delay: 2 }} style={{ position: "absolute", bottom: "10%", right: "10%", width: "60vw", height: "60vw", background: `radial-gradient(circle, ${secondary}10 0%, transparent 70%)`, filter: "blur(100px)" }} />
        </>
      )}

      {/* Grid Pattern */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.02) 1px, transparent 1px)`, backgroundSize: "40px 40px", zIndex: 0 }} />

      {/* Header Section */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} style={{ zIndex: 1, textAlign: "center", marginBottom: "2rem", padding: "0 2rem", maxWidth: "1000px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 24px", borderRadius: "99px", background: `linear-gradient(90deg, #ffffff, rgba(255,255,255,0.4))`, border: `1px solid rgba(15,23,42,0.05)`, boxShadow: `0 4px 15px rgba(15,23,42,0.02)`, marginBottom: "1.2rem" }}>
          <Scale size={16} color={primary} />
          <span style={{ fontSize: "0.85rem", fontWeight: 800, letterSpacing: "0.25em", color: TEXT_MAIN, textTransform: "uppercase" }}>
            <InlineText text={subtitle} />
          </span>
        </div>
        <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          <InlineText text={title} />
        </h2>
      </motion.div>

      {/* Unified Glass Matrix Panel */}
      <div style={{ zIndex: 1, width: "100%", maxWidth: "1300px", padding: "0 2rem" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          style={{
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(30px)",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            boxShadow: "0 20px 40px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.02)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr" // Strict 2 column layout
          }}>

          {items.map((item: any, i: number) => {
            let label = ""; let rest = "";
            if (typeof item === 'string') { const parsed = parseBoldLabel(item); label = parsed.label; rest = parsed.rest; }
            else if (item.title) { label = item.title; rest = item.desc; }

            const Icon = icons[i % icons.length];
            const acc = accents[i % accents.length];

            // Define borders for the matrix look
            const isRightColumn = i % 2 !== 0;
            const isBottomRow = i >= items.length - 2;

            return (
              <div key={i} style={{
                padding: "2rem 2.5rem",
                borderRight: isRightColumn ? "none" : "1px solid rgba(15,23,42,0.06)",
                borderBottom: isBottomRow ? "none" : "1px solid rgba(15,23,42,0.06)",
                display: "flex",
                alignItems: "flex-start",
                gap: "1.5rem",
                position: "relative",
                transition: "background 0.3s ease",
              }}
                onMouseEnter={(e) => e.currentTarget.style.background = "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, transparent 100%)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >

                {/* Subtle left glow indicator */}
                <div style={{ position: "absolute", left: 0, top: "20%", bottom: "20%", width: 3, borderRadius: "0 4px 4px 0", background: `linear-gradient(to bottom, transparent, ${acc}40, transparent)` }} />

                <div style={{
                  width: 48, height: 48,
                  borderRadius: "14px",
                  background: `linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)`,
                  border: `1px solid rgba(15,23,42,0.05)`,
                  boxShadow: `0 4px 10px ${acc}15`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                }}>
                  <Icon size={22} color={acc} strokeWidth={2.5} />
                </div>

                <div style={{ flex: 1 }}>
                  <h4 style={{ fontWeight: 800, fontSize: "1.05rem", color: TEXT_MAIN, marginBottom: "0.5rem", letterSpacing: "-0.01em", display: "flex", alignItems: "center", gap: "8px" }}>
                    <InlineText text={label} />
                  </h4>
                  <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.65, fontWeight: 500 }}>
                    <InlineText text={rest} />
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

    </div>
  );
}

/* ── SSO PODIUM LAYOUT ──────────────────────────────────────── */
import { Eye } from "lucide-react";

export function LayoutSSOPodium({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const primary = "#1e3a8a"; // Authoritative Navy
  const secondary = "#b45309"; // Institutional Gold
  const accent = "#0f766e"; // Bureaucratic Teal

  const icons = [Cpu, Fingerprint, Eye];
  const colors = [primary, secondary, accent];

  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#f8fafc", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

      {/* Background Ambience / Spotlight on Center */}
      {mounted && (
        <>
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "40vw", height: "40vw", background: `radial-gradient(circle, ${secondary}20 0%, transparent 60%)`, filter: "blur(60px)", zIndex: 0 }} />
          {/* Floor grid effect */}
          <div style={{ position: "absolute", bottom: "-20%", left: 0, right: 0, height: "50%", background: "radial-gradient(ellipse at bottom, rgba(139, 92, 246, 0.05) 0%, transparent 70%)", transform: "perspective(500px) rotateX(60deg)", borderTop: "1px solid rgba(139,92,246,0.1)", zIndex: 0 }} />
        </>
      )}

      {/* Header Section */}
      <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} style={{ zIndex: 1, textAlign: "center", marginBottom: "4rem", padding: "0 2rem", maxWidth: "1000px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 24px", borderRadius: "99px", background: `linear-gradient(90deg, ${primary}10, ${secondary}10)`, border: `1px solid ${secondary}30`, marginBottom: "1.2rem" }}>
          <Fingerprint size={16} color={secondary} />
          <span style={{ fontSize: "0.85rem", fontWeight: 850, letterSpacing: "0.2em", color: secondary, textTransform: "uppercase" }}>
            <InlineText text={subtitle} />
          </span>
        </div>
        <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          <InlineText text={title} />
        </h2>
      </motion.div>

      {/* Podium Grid */}
      <div style={{ zIndex: 1, width: "100%", maxWidth: "1350px", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", alignItems: "center" }}>

          {items.map((item: any, i: number) => {
            let label = ""; let rest = "";
            if (typeof item === 'string') { const parsed = parseBoldLabel(item); label = parsed.label; rest = parsed.rest; }
            else if (item.title) { label = item.title; rest = item.desc; }

            const Icon = icons[i % icons.length];
            const acc = colors[i % colors.length];

            // Middle item elevated
            const isCenter = i === 1;

            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: isCenter ? 50 : 80 }}
                animate={{ opacity: 1, y: isCenter ? -40 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), type: "spring", stiffness: 70 }}
                whileHover={{ y: isCenter ? -55 : 5, scale: 1.02 }}
                style={{
                  background: isCenter ? `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 100%)` : `rgba(255,255,255,0.6)`,
                  backdropFilter: "blur(20px)",
                  borderRadius: "28px",
                  padding: "3rem 2rem",
                  border: isCenter ? `1px solid ${acc}40` : `1px solid rgba(15,23,42,0.06)`,
                  boxShadow: isCenter ? `0 30px 60px ${acc}20, 0 0 0 1px ${acc}20 inset` : `0 10px 30px rgba(15,23,42,0.03)`,
                  display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1.5rem",
                  position: "relative",
                  zIndex: isCenter ? 2 : 1
                }}>

                {/* Center glowing crown */}
                {mounted && isCenter && (
                  <div style={{ position: "absolute", top: -10, width: "60%", height: 20, background: `radial-gradient(ellipse, ${acc}80 0%, transparent 70%)`, filter: "blur(10px)" }} />
                )}

                <div style={{
                  width: isCenter ? 80 : 64, height: isCenter ? 80 : 64,
                  borderRadius: "20px",
                  background: `linear-gradient(135deg, ${acc}15 0%, transparent 100%)`,
                  border: `1px solid ${acc}40`,
                  boxShadow: `0 10px 25px ${acc}20`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                }}>
                  <Icon size={isCenter ? 36 : 28} color={acc} strokeWidth={2} />
                </div>

                <div>
                  <h3 style={{ fontWeight: 900, fontSize: isCenter ? "1.6rem" : "1.3rem", color: TEXT_MAIN, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
                    <InlineText text={label} />
                  </h3>
                  <p style={{ fontSize: isCenter ? "1.05rem" : "0.95rem", color: isCenter ? TEXT_MAIN : TEXT_MUTED, lineHeight: 1.7, fontWeight: isCenter ? 600 : 500 }}>
                    <InlineText text={rest} />
                  </p>
                </div>

                {isCenter && (
                  <div style={{ marginTop: "1rem", height: "4px", width: "40px", borderRadius: "2px", background: `linear-gradient(90deg, ${acc}, transparent)` }} />
                )}

              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

/* ── SSO DASHBOARD SIMULATION LAYOUT ──────────────────────────────────────── */
import {
  Monitor, BarChart3, TrendingUp, MapPin,
  Search, Bell, Activity, Users, LayoutDashboard
} from "lucide-react";

export function LayoutSSODashboard({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const primary = "#b45309"; // Executive Gold for dashboard accents
  const darkBg = "#0f172a"; // Slate 900
  const darkCard = "#1e293b"; // Slate 800
  const darkBorder = "#334155"; // Slate 700

  const success = "#10b981";
  const warning = "#f59e0b";
  const danger = "#ef4444";

  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#f8fafc", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>

      {/* Background Ambience */}
      {mounted && (
        <>
          <motion.div animate={{ opacity: [0.1, 0.2, 0.1] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50vh", background: `linear-gradient(180deg, ${primary}10 0%, transparent 100%)`, zIndex: 0 }} />
        </>
      )}

      <div style={{ zIndex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: "1550px", padding: "0 3rem", gap: "3rem" }}>

        {/* LEFT SIDE: Cascading Dual Dashboards (55%) */}
        <div style={{ flex: "0.55", position: "relative", height: "480px", perspective: "1000px" }}>

          {/* DASHBOARD 1: Ringkasan Eksekutif (Back Layer) */}
          <motion.div initial={{ x: -20, opacity: 0, rotateY: 5 }} animate={{ x: 0, opacity: 1, rotateY: 0 }} transition={{ duration: 0.8 }}
            style={{
              position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
              background: darkBg, borderRadius: "24px", padding: "1.5rem",
              boxShadow: `0 30px 60px rgba(15,23,42,0.4), 0 0 0 1px ${darkBorder}, 0 0 40px ${primary}20`,
              display: "flex", flexDirection: "column", gap: "1rem", color: "white", overflow: "hidden", zIndex: 1
            }}>
            {/* Top Shine */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)` }} />

            {/* Nav/Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${darkBorder}`, paddingBottom: "0.8rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `rgba(255,255,255,0.1)`, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <img src="/Logo_Sukabumi.png" alt="Sukabumi" style={{ width: "100%", height: "100%", objectFit: "contain", padding: "2px" }} />
                </div>
                <div>
                  <div style={{ fontSize: "1rem", fontWeight: 800, letterSpacing: "-0.02em" }}>APBD Kota Sukabumi 2026</div>
                  <div style={{ fontSize: "0.6rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em" }}>Otoritas Eksekutif</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", color: "#94a3b8" }}>
                <Settings size={14} />
              </div>
            </div>

            {/* Financial Master Bar */}
            <div style={{ padding: "1.2rem", borderRadius: "12px", background: `linear-gradient(135deg, ${darkCard}, rgba(180,83,9,0.1))` }}>
              <div style={{ fontSize: "0.75rem", color: "#94a3b8", display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                <span>TOTAL PAGU APBD 2026</span>
                <span style={{ color: success }}>● Terhubung ke SIPD Pusat</span>
              </div>
              <div style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "0.6rem", letterSpacing: "-0.03em" }}>Rp 1.514.482.000.000</div>

              <div style={{ height: 8, background: darkBg, borderRadius: 4, overflow: "hidden", display: "flex", boxShadow: "inset 0 2px 4px rgba(0,0,0,0.5)" }}>
                <div style={{ width: "68.4%", background: `linear-gradient(90deg, ${primary}, #38bdf8)` }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px", fontSize: "0.7rem", fontWeight: 600 }}>
                <span style={{ color: "#38bdf8" }}>Realisasi Belanja: Rp 1.035 Miliar (68.4%)</span>
                <span style={{ color: "#94a3b8" }}>SiLPA Berjalan: Rp 478.5 Miliar</span>
              </div>
            </div>

            {/* Detailed Table per Dinas */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem", marginTop: "0.5rem" }}>
              <div style={{ fontSize: "0.75rem", color: "#e2e8f0", fontWeight: 700, paddingBottom: "0.4rem", borderBottom: `1px solid ${darkBorder}` }}>Daftar Serapan Terkritis per OPD</div>

              {/* Item 1 */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(239, 68, 68, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: danger, fontWeight: 800 }}>!</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700 }}>Dinas Pekerjaan Umum (PUTR)</span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: danger }}>39.2%</span>
                  </div>
                  <div style={{ height: 6, background: darkBg, borderRadius: 3, overflow: "hidden" }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: "39.2%" }} transition={{ duration: 1 }} style={{ background: danger, height: "100%" }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px", fontSize: "0.65rem", color: "#64748b", fontWeight: 600 }}>
                    <span>Pagu: Rp 215.0 Miliar</span>
                    <span>Realisasi: Rp 84.2 Miliar</span>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(245, 158, 11, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: warning, fontWeight: 800 }}>⚠</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700 }}>Dinas Kesehatan (DINKES)</span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: warning }}>61.4%</span>
                  </div>
                  <div style={{ height: 6, background: darkBg, borderRadius: 3, overflow: "hidden" }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: "61.4%" }} transition={{ duration: 1 }} style={{ background: warning, height: "100%" }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px", fontSize: "0.65rem", color: "#64748b", fontWeight: 600 }}>
                    <span>Pagu: Rp 324.0 Miliar</span>
                    <span>Realisasi: Rp 198.9 Miliar</span>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: success, fontWeight: 800 }}>✓</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700 }}>Dinas Pendidikan (DISDIK)</span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: success }}>85.0%</span>
                  </div>
                  <div style={{ height: 6, background: darkBg, borderRadius: 3, overflow: "hidden" }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: "85.0%" }} transition={{ duration: 1 }} style={{ background: success, height: "100%" }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px", fontSize: "0.65rem", color: "#64748b", fontWeight: 600 }}>
                    <span>Pagu: Rp 420.5 Miliar</span>
                    <span>Realisasi: Rp 357.4 Miliar</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* DASHBOARD 2: Geospasial & CCTV (Front Layer) */}
          <motion.div initial={{ x: 50, opacity: 0, y: 30 }} animate={{ x: 0, opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              position: "absolute", bottom: "-1rem", right: 0, width: "70%", height: "70%",
              background: "rgba(15, 23, 42, 0.75)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
              borderRadius: "20px", padding: "1.2rem",
              boxShadow: `0 40px 80px rgba(15,23,42,0.6), 0 0 0 1px rgba(255,255,255,0.15), 0 0 40px ${danger}15`,
              display: "flex", flexDirection: "column", gap: "0.8rem", color: "white", overflow: "hidden", zIndex: 2
            }}>

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: danger, boxShadow: `0 0 10px ${danger}` }} />
                <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em" }}>PANTAUAN GEOSPASIAL STRATEGIS</div>
              </div>
              <MapPin size={14} color="#94a3b8" />
            </div>

            {/* Map Area */}
            <div style={{ flex: 1, background: `linear-gradient(135deg, ${darkCard}, ${darkBg})`, borderRadius: "12px", position: "relative", overflow: "hidden", border: `1px solid rgba(255,255,255,0.05)` }}>
              {/* Radial gradient imitating map scan */}
              <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }} transition={{ repeat: Infinity, duration: 4 }} style={{ position: "absolute", top: "50%", left: "50%", width: "100%", height: "100%", transform: "translate(-50%, -50%)", background: `radial-gradient(circle, ${primary}20 0%, transparent 60%)`, borderRadius: "50%" }} />

              {/* Grid Overlay */}
              <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gridTemplateRows: "repeat(5, 1fr)" }}>
                {Array.from({ length: 40 }).map((_, i) => (
                  <div key={i} style={{ borderRight: `1px solid rgba(255,255,255,0.03)`, borderBottom: `1px solid rgba(255,255,255,0.03)` }} />
                ))}
              </div>

              {/* Simulated CCTV Callout */}
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}
                style={{ position: "absolute", bottom: "1rem", left: "1rem", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", padding: "8px 12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "8px" }}>
                <Monitor size={12} color={primary} />
                <div>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700 }}>UNIT KAMERA 04 - ALUN-ALUN</div>
                  <div style={{ fontSize: "0.55rem", color: "#94a3b8" }}>STATUS: INSPEKSI PRIORITAS</div>
                </div>
              </motion.div>

              {/* Pinging dots */}
              {mounted && (
                <>
                  <motion.div animate={{ scale: [1, 2.5], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ position: "absolute", top: "30%", right: "25%", width: 10, height: 10, borderRadius: "50%", background: danger, zIndex: 2 }} />
                  <div style={{ position: "absolute", top: "30%", right: "25%", width: 10, height: 10, borderRadius: "50%", background: danger, zIndex: 2 }} />
                </>
              )}
            </div>

          </motion.div>

        </div>

        {/* RIGHT SIDE: Text Details (45%) */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          style={{ flex: "0.45", display: "flex", flexDirection: "column" }}>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 20px", borderRadius: "99px", background: `rgba(180,83,9,0.1)`, marginBottom: "1.5rem", width: "fit-content" }}>
            <Monitor size={16} color={primary} />
            <span style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.2em", color: "#0284c7", textTransform: "uppercase" }}>
              <InlineText text={subtitle} />
            </span>
          </div>

          <h2 style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2.5rem" }}>
            <InlineText text={title} />
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {items.map((item: any, i: number) => {
              let label = ""; let rest = "";
              if (typeof item === 'string') { const parsed = parseBoldLabel(item); label = parsed.label; rest = parsed.rest; }
              else if (item.title) { label = item.title; rest = item.desc; }

              const Icon = [Zap, Activity, MapPin, ShieldAlert][i % 4];

              return (
                <div key={i} style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start", background: "white", padding: "1.2rem", borderRadius: "16px", border: "1px solid rgba(15,23,42,0.05)", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}>
                  <div style={{ width: 42, height: 42, borderRadius: "12px", background: `rgba(180,83,9,0.08)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={20} color={primary} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT_MAIN, marginBottom: "0.4rem" }}>
                      <InlineText text={label} />
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500 }}>
                      <InlineText text={rest} />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </motion.div>
      </div>

    </div>
  );
}

/* ── SSO CONCLUSION LAYOUT (GRAND FINALE) ──────────────────────────────────────── */
import { ArrowRight, CheckCircle2, Rocket } from "lucide-react";

export function LayoutSSOConclusion({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const prim = "#1e3a8a";
  const acc = "#b45309";
  const dark = "#0f172a";

  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#f8fafc", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>

      {/* Immersive background texture */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `radial-gradient(${prim} 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      {mounted && <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 6 }} style={{ position: "absolute", top: "-20%", right: "-10%", width: "60vw", height: "60vw", background: `radial-gradient(circle, ${prim}10 0%, transparent 60%)`, filter: "blur(60px)", zIndex: 0 }} />}

      {/* Top Header Horizon */}
      <div style={{ flex: "0.35", display: "flex", alignItems: "flex-end", padding: "0 5rem 2rem 5rem", position: "relative", zIndex: 2, borderBottom: `1px solid rgba(15,23,42,0.05)` }}>
        <div style={{ maxWidth: "1250px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 24px", borderRadius: "99px", background: `linear-gradient(90deg, ${prim}10, transparent)`, borderLeft: `3px solid ${prim}`, marginBottom: "1.5rem" }}>
            <ShieldCheck size={18} color={prim} />
            <span style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.2em", color: prim, textTransform: "uppercase" }}>
              <InlineText text={subtitle} />
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 950, color: dark, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            <InlineText text={title} />
          </h2>
        </div>
      </div>

      {/* Asymmetric Core Columns */}
      <div style={{ flex: "0.65", display: "flex", padding: "0 5rem", position: "relative", zIndex: 2 }}>

        {/* Connecting Line */}
        {mounted && <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }} style={{ position: "absolute", top: "45%", left: "5rem", right: "5rem", height: "2px", background: `linear-gradient(90deg, ${prim}40, ${acc}80)`, zIndex: 0 }} />}

        <div style={{ display: "flex", width: "100%", maxWidth: "1500px", margin: "0 auto", gap: "4rem", paddingTop: "4rem" }}>
          {items.map((item: any, i: number) => {
            let label = ""; let rest = "";
            if (typeof item === 'string') { const parsed = parseBoldLabel(item); label = parsed.label; rest = parsed.rest; }
            else if (item.title) { label = item.title; rest = item.desc; }

            const isFirst = i === 0;
            const cColor = isFirst ? prim : acc;
            const Icon = isFirst ? CheckCircle2 : Rocket;

            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: isFirst ? -40 : 40 }} transition={{ duration: 0.8, delay: i * 0.3 }}
                style={{
                  flex: 1, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(30px)",
                  borderRadius: "28px", padding: "3rem",
                  boxShadow: `0 30px 60px rgba(15,23,42,0.06), inset 0 0 0 1px ${cColor}20`,
                  position: "relative", zIndex: 2,
                  display: "flex", flexDirection: "column", gap: "1.5rem"
                }}>

                <div style={{ width: 64, height: 64, borderRadius: "16px", background: `linear-gradient(135deg, ${cColor}15, transparent)`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${cColor}30` }}>
                  <Icon size={32} color={cColor} strokeWidth={2.5} />
                </div>

                <h3 style={{ fontSize: "1.8rem", fontWeight: 900, color: dark, letterSpacing: "-0.02em" }}>
                  <InlineText text={label} />
                </h3>

                <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "#475569", fontWeight: 500 }}>
                  <InlineText text={rest} />
                </p>

                {!isFirst && (
                  <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: "8px", color: acc, fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    TINDAK LANJUT STRATEGIS <ArrowRight size={16} />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
