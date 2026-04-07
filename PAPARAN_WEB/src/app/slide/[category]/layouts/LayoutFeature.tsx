"use client";

import React from "react";

import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, PRIMARY_LIGHT, SURFACE, BORDER_REFINED, SHADOW_SM, SHADOW_LG } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";
import { motion } from "framer-motion";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  image?: string;
  IconComp: React.ElementType;
}

export default function LayoutFeature({ title, subtitle, body, image, IconComp }: LayoutProps) {
  const isList = body.toLowerCase().includes("<li>") || body.toLowerCase().includes("<ul>");
  const items = isList ? parseListItems(body) : [];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} 
      className="grid-responsive"
    >
      <div style={{ position: "relative" }}>
        <div style={{ 
          position: "relative", 
          borderRadius: 24, 
          overflow: "hidden", 
          border: `1px solid ${BORDER_REFINED}`, 
          boxShadow: SHADOW_LG,
          background: SURFACE
        }}>
          {image ? (
            <img src={image} alt={title} style={{ width: "100%", height: "auto", display: "block" }} />
          ) : (
            <div style={{ width: "100%", height: "360px", background: "var(--slate-50)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconComp size={80} color="var(--slate-200)" strokeWidth={1} />
            </div>
          )}
        </div>
        {/* Subtle Badge */}
        <div style={{ position: "absolute", bottom: -15, right: 25, background: "white", padding: "0.6rem 1.25rem", borderRadius: 12, boxShadow: SHADOW_SM, border: `1px solid ${BORDER_REFINED}`, display: "flex", alignItems: "center", gap: "0.5rem" }}>
           <div style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD }} />
           <span style={{ fontSize: "0.7rem", fontWeight: 850, color: TEXT_MAIN, letterSpacing: "0.1em", textTransform: "uppercase" }}>Strategic Asset</span>
        </div>
      </div>

      <div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--slate-50)", padding: "0.4rem 1.2rem", borderRadius: 99, border: `1px solid var(--slate-200)`, marginBottom: "1.25rem" }}>
           <span style={{ fontSize: "0.75rem", fontWeight: 850, letterSpacing: "0.15em", color: GOLD, textTransform: "uppercase" }}>{subtitle}</span>
        </div>
        
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: TEXT_MAIN, lineHeight: 1.15, marginBottom: "1.5rem", letterSpacing: "-0.03em" }}>{title}</h2>
        
        <div style={{ fontSize: "1.1rem", color: TEXT_MUTED, lineHeight: 1.75, marginBottom: isList ? "2.5rem" : 0 }}>
          <InlineText text={body.replace(/<ul>.*?<\/ul>/, "").trim()} />
        </div>

        {isList && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {items.map((item, i) => {
              const { label, rest } = parseBoldLabel(item);
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  style={{ 
                    display: "flex", 
                    gap: "1.25rem", 
                    alignItems: "flex-start", 
                    padding: "1rem 1.5rem", 
                    borderRadius: 16, 
                    background: "white", 
                    border: `1px solid ${BORDER_REFINED}`,
                    boxShadow: "0 2px 5px rgba(0,0,0,0.02)"
                  }}
                >
                  <div style={{ marginTop: "0.25rem", width: 24, height: 24, borderRadius: 8, background: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "2px", background: PRIMARY, transform: "rotate(45deg)" }} />
                  </div>
                  <div style={{ fontSize: "1rem", color: TEXT_MAIN, lineHeight: 1.6 }}>
                    {label && <strong style={{ color: PRIMARY, fontWeight: 850, marginRight: "0.4rem" }}>{label}</strong>}
                    <InlineText text={rest} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}
