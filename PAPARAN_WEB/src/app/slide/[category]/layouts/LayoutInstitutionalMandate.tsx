"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Scale, Zap, BadgeCheck, Users2, Gavel } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  image?: string;
}

export default function LayoutInstitutionalMandate({ title, subtitle, body, image }: LayoutProps) {
  const items = parseListItems(body);
  const icons = [BadgeCheck, Users2, Zap, Scale, FileCheck];
  const colors = [GOLD, PRIMARY, "#10B981", "#3B82F6", "#A855F7"];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "2rem", animation: "animate-up 0.8s ease-out" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <p style={{ fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.7rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 950, color: TEXT_MAIN, margin: 0, letterSpacing: "-0.04em" }}>{title}</h2>
        </div>
        <div style={{ padding: "0.8rem 1.5rem", borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "1rem" }}>
            <Gavel size={20} color={GOLD} />
            <div style={{ fontSize: "0.7rem", fontWeight: 900, color: TEXT_MAIN, textTransform: "uppercase", letterSpacing: "0.15em" }}>Legitimasi Hukum Utama</div>
        </div>
      </div>

      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", flex: 1, minHeight: 0 }}>
        
        {/* ── LEFT: DIGITAL LEGAL SEAL / MANDATE MATRIX ─────────── */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          
          <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            
            {/* Spinning Rings */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
               style={{ position: "absolute", width: 400, height: 400, border: "2px dashed rgba(212,175,55,0.1)", borderRadius: "50%" }} 
            />
            <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               style={{ position: "absolute", width: 320, height: 320, border: "1px solid rgba(255,255,255,0.05)", borderRadius: "50%" }} 
            />
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ 
                width: 250, height: 250, borderRadius: "50%", 
                background: `radial-gradient(circle at center, ${GOLD}33 0%, transparent 70%)`,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                border: `3px solid ${GOLD}`, boxShadow: `0 0 80px ${GOLD}22, inset 0 0 30px ${GOLD}11`,
                zIndex: 10, position: "relative"
              }}
            >
              <Scale size={60} color={GOLD} strokeWidth={1.5} />
              <div style={{ fontSize: "1.1rem", fontWeight: 950, color: TEXT_MAIN, marginTop: "1rem", letterSpacing: "0.1em", textAlign: "center" }}>
                 MANDAT<br/>HUKUM
              </div>
              <div style={{ position: "absolute", bottom: -50, width: "150%", textAlign: "center" }}>
                 <div style={{ fontSize: "0.7rem", fontWeight: 900, color: TEXT_MUTED, letterSpacing: "0.2em", marginBottom: "0.5rem" }}>NOMOR REGISTRASI NEGARA</div>
                 <div style={{ fontSize: "1rem", fontWeight: 950, color: TEXT_MAIN, fontFamily: "monospace", textShadow: `0 0 10px ${GOLD}44` }}>180.45/Kep.210-Huk/2026</div>
              </div>
            </motion.div>

            {/* Glowing Points */}
            {[0, 90, 180, 270].map((deg, i) => (
               <motion.div 
                 key={i}
                 animate={{ opacity: [0.2, 0.6, 0.2] }}
                 transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                 style={{ 
                    position: "absolute", width: 8, height: 8, borderRadius: "50%", background: GOLD,
                    transform: `rotate(${deg}deg) translateY(-200px)`, boxShadow: `0 0 15px ${GOLD}`
                 }}
               />
            ))}
          </div>
        </div>

        {/* ── RIGHT: MANDATE PILLARS & ICONS ───────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", justifyContent: "center" }} className="custom-scroll">
          {items.map((item, i) => {
            const { label, rest } = parseBoldLabel(item);
            const Icon = icons[i % icons.length];
            const color = colors[i % colors.length];

            return (
              <motion.div 
                key={i}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="card-hover"
                style={{ 
                   ...GLASS_DARK, borderRadius: 24, padding: "1.75rem", 
                   borderLeft: `6px solid ${color}`, position: "relative", overflow: "hidden",
                   background: `linear-gradient(90deg, ${color}05, rgba(255,255,255,0.02))`
                }}
              >
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                   <div style={{ 
                      width: 52, height: 52, borderRadius: 14, 
                      background: `${color}15`, border: `1px solid ${color}33`, 
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                   }}>
                      <Icon size={24} color={color} />
                   </div>
                   <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "1.2rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.6rem", letterSpacing: "-0.01em" }}>{label}</div>
                      <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
                         <InlineText text={rest} />
                      </p>
                   </div>
                </div>

                {/* Decorative Icon Background */}
                <div style={{ position: "absolute", top: -10, right: -10, opacity: 0.03 }}>
                   <Icon size={100} />
                </div>
              </motion.div>
            );
          })}
          
          <div style={{ padding: "1rem", borderRadius: 20, border: "1px dashed rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "1rem" }}>
             <BadgeCheck size={20} color="#10B981" />
             <div style={{ fontSize: "0.85rem", color: TEXT_MUTED, fontWeight: 700 }}>VERIFIKASI LEGALITAS TERDATA DI BIRO HUKUM</div>
          </div>
        </div>

      </div>
    </div>
  );
}
