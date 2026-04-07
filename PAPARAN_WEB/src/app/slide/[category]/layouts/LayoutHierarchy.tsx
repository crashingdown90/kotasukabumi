"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Target, Zap, Waves, ChevronDown, CheckCircle2 } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

export default function LayoutHierarchy({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  
  const levels = [
    { 
       id: "L1",
       category: "STRATEGIC AUTHORITY",
       label: "Pemegang Otoritas Kebijakan",
       desc: "Wali Kota & Wakil Wali Kota",
       color: GOLD,
       icon: Shield,
       shadow: "rgba(212,175,55,0.4)"
    },
    { 
       id: "L2",
       category: "COMMAND CENTER",
       label: "Pusat Pengendali Narasi & Risiko",
       desc: "Tim Strategis SMC",
       color: PRIMARY,
       icon: Target,
       shadow: "rgba(142,21,64,0.4)"
    },
    { 
       id: "L3",
       category: "DATA HUB",
       label: "Walidata & Akselerasi Informasi",
       desc: "Diskominfo Kota Sukabumi",
       color: "#3B82F6",
       icon: Zap,
       shadow: "rgba(59,130,246,0.4)"
    },
    { 
       id: "L4",
       category: "OPERATIONAL",
       label: "Kontributor Data Sektoral",
       desc: "Seluruh OPD (Organisasi Perangkat Daerah)",
       color: "#10B981",
       icon: Waves,
       shadow: "rgba(16,185,129,0.4)"
    }
  ];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", animation: "animate-up 0.8s ease-out" }}>
      <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.7rem" }}>{subtitle}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em", margin: 0 }}>{title}</h2>
        <div style={{ padding: "0.75rem 1.5rem", borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "1rem" }}>
           <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Coat_of_arms_of_Sukabumi.png" alt="Sukabumi" style={{ width: 28, height: 35, objectFit: "contain" }} />
           <div style={{ fontSize: "0.7rem", fontWeight: 900, color: TEXT_MAIN, textTransform: "uppercase", letterSpacing: "0.1em" }}>PEMERINTAH KOTA SUKABUMI</div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
        {levels.map((lvl, index) => {
          const itemContent = items[index] ? parseBoldLabel(items[index]) : null;
          
          return (
            <React.Fragment key={lvl.id}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                style={{ 
                  width: "100%", maxWidth: "900px", 
                  display: "grid", gridTemplateColumns: "180px 1fr", 
                  alignItems: "stretch", gap: "1.5rem", position: "relative", zIndex: 10 
                }}
              >
                {/* Level Tag */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "right", paddingRight: "1rem", borderRight: `2px solid ${lvl.color}33` }}>
                  <span style={{ fontSize: "0.6rem", fontWeight: 900, color: lvl.color, letterSpacing: "0.2em" }}>{lvl.category}</span>
                  <span style={{ fontSize: "1.2rem", fontWeight: 950, color: TEXT_MAIN }}>{lvl.id}</span>
                </div>

                {/* Main Card */}
                <div style={{ 
                  ...GLASS_DARK, borderRadius: 24, padding: "1.25rem 2rem", 
                  display: "flex", alignItems: "center", gap: "2rem", 
                  borderLeft: `8px solid ${lvl.color}`, boxShadow: `0 15px 40px ${lvl.shadow}22` 
                }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: `${lvl.color}15`, border: `1px solid ${lvl.color}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <lvl.icon size={28} color={lvl.color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "1.1rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.25rem" }}>{lvl.label}</div>
                    <div style={{ fontSize: "0.85rem", color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{lvl.desc}</div>
                    {itemContent && (
                       <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.5, opacity: 0.8 }}>
                         <InlineText text={itemContent.rest} />
                       </p>
                    )}
                  </div>
                  <CheckCircle2 size={20} color={lvl.color} style={{ opacity: 0.5 }} />
                </div>
              </motion.div>

              {/* Connector Arrow */}
              {index < levels.length - 1 && (
                <div style={{ height: "1.5rem", width: 2, background: `linear-gradient(to bottom, ${lvl.color}, ${levels[index+1].color})`, margin: "0.25rem 0 0.25rem 90px", opacity: 0.5, position: "relative" }}>
                   <div style={{ position: "absolute", bottom: -5, left: "50%", transform: "translateX(-50%)" }}>
                     <ChevronDown size={14} color={levels[index+1].color} />
                   </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      
      {/* Footer Note */}
      <div style={{ marginTop: "2rem", textAlign: "center", padding: "1rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p style={{ fontSize: "0.7rem", color: TEXT_MUTED, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", margin: 0 }}>
          Alur Koordinasi Lintas Sektoral Kota Sukabumi
        </p>
      </div>
    </div>
  );
}
