"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Smartphone, GraduationCap, Building, Heart, MessageSquare, Target, Radio } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { InlineText } from "../components/Shared";

interface Persona {
  title: string;
  desc: string;
  channel: string;
  tone: string;
  goal: string;
}

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: Persona[];
}

export default function LayoutMicroSegmentation({ title, subtitle, body, features }: LayoutProps) {
  const personas = features || [
    { title: "Gen Z & Milenial", desc: "Digital Natives", channel: "TikTok / IG", tone: "Casual & Visual", goal: "Engagement" },
    { title: "Professionals", desc: "Working Class", channel: "LinkedIn / X", tone: "Data-Driven", goal: "Trust" },
    { title: "Rural & Grassroots", desc: "Local Community", channel: "Facebook / WA", tone: "Sunda / Emosional", goal: "Relatability" },
    { title: "Entrepreneurs", desc: "SME Owners", channel: "Official Portal", tone: "Informative", goal: "Action" },
    { title: "Religious Leaders", desc: "Community Influencers", channel: "Formal Meetings", tone: "Wisdom / Ethics", goal: "Harmony" },
    { title: "Students", desc: "Future Leaders", channel: "Discord / Apps", tone: "Inspirational", goal: "Vision" }
  ];

  const personaIcons = [Smartphone, Building, MessageSquare, Heart, Users, GraduationCap];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative" }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <p style={{ fontSize: "0.8rem", fontWeight: 900, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 950, color: TEXT_MAIN, margin: 0, letterSpacing: "-0.03em" }}>{title}</h2>
          <p style={{ fontSize: "1rem", color: TEXT_MUTED, maxWidth: "700px", marginTop: "0.5rem" }}><InlineText text={body} /></p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", ...GLASS_DARK, padding: "10px 20px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)" }}>
           <Target size={18} color={PRIMARY} />
           <span style={{ fontSize: "0.7rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "0.1em" }}>MICRO-PENETRATION ACTIVE</span>
        </div>
      </div>

      {/* RADAR SWEEP DECORATION */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", zIndex: 0, opacity: 0.03, pointerEvents: "none" }}>
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           style={{ width: "100%", height: "100%", background: `conic-gradient(from 0deg, ${PRIMARY}, transparent 90deg)`, borderRadius: "50%" }}
         />
      </div>

      {/* SEGMENTATION GRID */}
      <div className="grid-responsive" style={{ 
        flex: 1, 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
        gap: "1.25rem", 
        zIndex: 1 
      }}>
        {personas.map((persona, i) => {
          const Icon = personaIcons[i % personaIcons.length];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              style={{
                ...GLASS_DARK,
                borderRadius: 28,
                padding: "1.75rem",
                border: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* TARGET RETICLE DECO */}
              <div style={{ position: "absolute", top: 15, right: 15, opacity: 0.2 }}>
                 <Target size={120} color={PRIMARY} />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: 50, height: 50, borderRadius: 14, background: `linear-gradient(135deg, ${PRIMARY}, #8E1540)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 8px 20px ${PRIMARY}44` }}>
                  <Icon size={24} color="white" />
                </div>
                <div>
                   <h3 style={{ fontSize: "1.1rem", fontWeight: 900, color: TEXT_MAIN, margin: 0 }}>{persona.title}</h3>
                   <div style={{ fontSize: "0.7rem", fontWeight: 800, color: GOLD, textTransform: "uppercase", letterSpacing: "0.1em" }}>{persona.desc}</div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                 <div style={{ background: "rgba(0,0,0,0.3)", padding: "10px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.03)" }}>
                    <div style={{ fontSize: "0.6rem", fontWeight: 900, color: TEXT_MUTED, marginBottom: "4px" }}>CORE CHANNEL</div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 800, color: TEXT_MAIN, display: "flex", alignItems: "center", gap: "5px" }}>
                       <Radio size={12} color={GOLD} /> {persona.channel}
                    </div>
                 </div>
                 <div style={{ background: "rgba(0,0,0,0.3)", padding: "10px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.03)" }}>
                    <div style={{ fontSize: "0.6rem", fontWeight: 900, color: TEXT_MUTED, marginBottom: "4px" }}>TONALITY</div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 800, color: TEXT_MAIN }}>{persona.tone}</div>
                 </div>
              </div>

              <div style={{ background: `${PRIMARY}11`, padding: "10px 15px", borderRadius: 15, borderLeft: `4px solid ${PRIMARY}` }}>
                 <div style={{ fontSize: "0.6rem", fontWeight: 900, color: PRIMARY, letterSpacing: "0.1em", marginBottom: "2px" }}>STRATEGIC AIM</div>
                 <div style={{ fontSize: "0.9rem", fontWeight: 700, color: TEXT_MAIN }}>{persona.goal}</div>
              </div>

              {/* TARGET LOCK INDICATOR */}
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
                 <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981" }} />
                 <span style={{ fontSize: "0.6rem", fontWeight: 900, color: TEXT_MUTED }}>TARGET ACQUIRED & SYNCHRONIZED</span>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
