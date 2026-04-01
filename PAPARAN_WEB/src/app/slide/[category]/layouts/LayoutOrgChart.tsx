import React from "react";
import { ChevronRight, ArrowRight, ShieldCheck, Radio, Network, Component } from "lucide-react";
import { motion } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK, PRIMARY_LIGHT } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: {title: string, desc: string}[];
  highlights?: string[];
}

export default function LayoutOrgChart({ title, subtitle, body, features, highlights }: LayoutProps) {
  const items = features || highlights || parseListItems(body);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.2 } }
  };

  const itemFade: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <motion.div initial="hidden" animate="show" variants={container} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.6rem,3.5vw,2.2rem)", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "-0.01em", margin: 0 }}>{title}</h2>
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, flex: 1, position: "relative" }}>
        
        {/* TOP NODE: Wali Kota */}
        <motion.div variants={itemFade} style={{ position: "relative", zIndex: 10 }}>
          <motion.div 
            animate={{ boxShadow: [`0 0 15px ${PRIMARY}66`, `0 0 35px ${PRIMARY}aa`, `0 0 15px ${PRIMARY}66`] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            style={{ 
              background: `linear-gradient(135deg, ${PRIMARY}, #C41E5B)`, 
              color: TEXT_MAIN, 
              borderRadius: 30, 
              padding: "1rem 3rem", 
              fontWeight: 950, 
              fontSize: "1.1rem", 
              border: `2px solid ${GOLD}66`,
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)"
            }}
          >
            <ShieldCheck size={28} color={GOLD} />
            <div style={{ display: "flex", flexDirection: "column", textAlign: "left", lineHeight: 1.15 }}>
              <span>Wali Kota dan Wakil Wali Kota</span>
              <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", fontWeight: 800 }}>Sukabumi</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Connecting Line 1 */}
        <motion.div variants={itemFade} style={{ width: 2, height: 40, background: `linear-gradient(${PRIMARY}, ${GOLD})`, opacity: 0.8 }} />
        
        {/* MIDDLE ROW: Left and Right Nodes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "2rem", alignItems: "center", width: "100%", maxWidth: "1000px" }}>
          
          {/* Left Node */}
          {items.slice(0, 1).map((item: any, i: number) => {
            let label = ""; let rest = "";
            if (typeof item === 'string') { const parsed = parseBoldLabel(item); label = parsed.label; rest = parsed.rest; } 
            else { label = item.title || `Unit ${i+1}`; rest = item.desc || item; }

            return (
              <motion.div key={i} variants={itemFade} whileHover={{ scale: 1.03 }} style={{ ...GLASS_DARK, borderRadius: 24, padding: "2rem", textAlign: "right", borderRight: `4px solid ${PRIMARY}`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -20, left: -20, opacity: 0.05 }}><Radio size={120} /></div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <p style={{ fontWeight: 900, fontSize: "1.1rem", color: PRIMARY, margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</p>
                </div>
                {rest && <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.6 }}><InlineText text={rest} /></p>}
              </motion.div>
            );
          })}
          
          {/* Center Connection Indicator */}
          <motion.div variants={itemFade} animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: `1px dashed ${GOLD}66` }}>
             <ArrowRight size={24} color={GOLD} />
          </motion.div>
          
          {/* Right Node */}
          {items.slice(1, 2).map((item: any, i: number) => {
            let label = ""; let rest = "";
            if (typeof item === 'string') { const parsed = parseBoldLabel(item); label = parsed.label; rest = parsed.rest; } 
            else { label = item.title || `Unit ${i+2}`; rest = item.desc || item; }

            return (
              <motion.div key={i} variants={itemFade} whileHover={{ scale: 1.03 }} style={{ ...GLASS_DARK, borderRadius: 24, padding: "2rem", textAlign: "left", borderLeft: `4px solid ${GOLD}`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -20, right: -20, opacity: 0.05 }}><Network size={120} /></div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <p style={{ fontWeight: 900, fontSize: "1.1rem", color: GOLD, margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</p>
                </div>
                {rest && <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.6 }}><InlineText text={rest} /></p>}
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM NODES (Lintas OPD) */}
        {items.length > 2 && (
          <motion.div variants={itemFade} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "1000px", marginTop: "-10px", position: "relative", zIndex: 0 }}>
            {/* Splitter Line (SVG) */}
            <svg width="400" height="60" viewBox="0 0 400 60" style={{ fill: "none", stroke: GOLD, strokeWidth: 2, opacity: 0.5 }}>
               <path d="M 200 0 L 200 30" />
               <path d="M 50 30 L 350 30" />
               <path d="M 50 30 L 50 60" />
               <path d="M 350 30 L 350 60" />
               <path d="M 200 30 L 200 60" />
            </svg>
            
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length - 2}, 1fr)`, gap: "1.5rem", width: "100%" }}>
              {items.slice(2).map((item: any, i: number) => {
                let label = ""; let rest = "";
                if (typeof item === 'string') { const parsed = parseBoldLabel(item); label = parsed.label; rest = parsed.rest; } 
                else { label = item.title || `Mekanisme ${i+3}`; rest = item.desc || item; }

                return (
                  <motion.div key={i} whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.06)" }} style={{ ...GLASS_DARK, borderRadius: 20, padding: "1.5rem", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)", position: "relative" }}>
                    <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "2px", background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
                    <Component size={24} color={GOLD} style={{ margin: "0 auto 0.75rem", opacity: 0.8 }} />
                    <p style={{ fontWeight: 900, fontSize: "0.95rem", color: TEXT_MAIN, margin: "0 0 0.5rem", letterSpacing: "0.02em" }}>{label}</p>
                    {rest && <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.6 }}><InlineText text={rest} /></p>}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
