import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Search, Palette, Share2, MessageSquare, Plus } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK, PRIMARY_LIGHT } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

export default function LayoutTeam({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const teamIcons = [UserCheck, Search, Palette, Share2, MessageSquare];
  const personnelCounts = ["1 Lead", "2 Analyst", "3 Creator", "2 Specialist", "2 Liaison"];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", animation: "animate-up 0.8s ease-out" }}>
      <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.7rem" }}>{subtitle}</p>
      <h2 style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)", fontWeight: 950, color: TEXT_MAIN, marginBottom: "3rem", letterSpacing: "-0.03em" }}>{title}</h2>

      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "1.5rem", flex: 1 }}>
        {items.map((item, i) => {
          const { label, rest } = parseBoldLabel(item);
          const Icon = teamIcons[i % teamIcons.length];
          const count = personnelCounts[i % personnelCounts.length];

          return (
            <motion.div 
              key={i} 
              whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.04)" }}
              style={{ ...GLASS_DARK, borderRadius: 28, padding: "2rem", borderTop: `2px solid ${GOLD}44`, display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative", overflow: "hidden" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <Icon size={28} color={PRIMARY} />
                </div>
                <div style={{ padding: "0.5rem 1rem", borderRadius: 12, background: "rgba(212,175,55,0.12)", border: `1px solid ${GOLD}33`, color: GOLD, fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                   {count}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.4rem", letterSpacing: "-0.01em" }}>{label}</h3>
                <div style={{ width: 40, height: 2, background: GOLD, marginBottom: "1.25rem" }} />
                <p style={{ fontSize: "0.92rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  <InlineText text={rest} />
                </p>
              </div>

              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "0.5rem", color: GOLD, fontSize: "0.75rem", fontWeight: 800 }}>
                 <Plus size={14} /> DETAILS JOBDESK
              </div>
            </motion.div>
          );
        })}
      </div>

      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
          <div style={{ ...GLASS_DARK, padding: "1rem 2rem", borderRadius: 16, display: "flex", gap: "3rem", fontSize: "0.8rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", border: "1px solid rgba(255,255,255,0.05)" }}>
            <span style={{ color: TEXT_MUTED }}>TOTAL PERSONIL: <span style={{ color: GOLD }}>10 EXPERTS</span></span>
            <span style={{ color: TEXT_MUTED }}>OPERATIONAL: <span style={{ color: GOLD }}>24/7 COMMAND</span></span>
          </div>
      </div>
    </div>
  );
}
