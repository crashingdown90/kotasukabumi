import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Share2, Megaphone, Radio, Tv, Smartphone, Newspaper } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

export default function LayoutStakeholderNetwork({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const colors = [PRIMARY, GOLD, "#3B82F6", "#10B981"];
  const StakeIcons = [Globe, Megaphone, Share2, Radio, Smartphone, Newspaper];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "2rem", animation: "animate-up 0.8s ease-out" }}>
      <div>
        <p style={{ fontSize: "0.80rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.6rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 950, color: TEXT_MAIN, margin: 0, letterSpacing: "-0.04em" }}>{title}</h2>
      </div>

      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", flex: 1, minHeight: 0 }}>
        
        {/* ── LEFT: CENTRAL HUB VISUAL ────────────────────────── */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
           {/* Connecting Lines (SVG) */}
           <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
              <svg width="100%" height="100%" style={{ stroke: "rgba(255,255,255,0.05)", strokeWidth: 1 }}>
                 {[0, 60, 120, 180, 240, 300].map(angle => (
                    <line key={angle} x1="50%" y1="50%" x2={`${50 + 40 * Math.cos(angle * Math.PI / 180)}%`} y2={`${50 + 40 * Math.sin(angle * Math.PI / 180)}%`} />
                 ))}
              </svg>
           </div>

           <motion.div 
             animate={{ scale: [1, 1.05, 1] }} 
             transition={{ duration: 4, repeat: Infinity }}
             style={{ 
                width: 140, height: 140, borderRadius: "50%", 
                background: "rgba(255,255,255,0.02)", zIndex: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: `0 0 40px ${PRIMARY}44`, 
                border: `2px solid ${PRIMARY}`,
                overflow: "hidden"
             }}
           >
              <img 
                src="/smc_official_logo.png" 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover", 
                  clipPath: "circle()",
                  filter: "brightness(1.1) contrast(1.1)"
                }} 
                alt="SMC Hub" 
              />
           </motion.div>

           {/* Floating Nodes */}
           {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const Icon = StakeIcons[i % StakeIcons.length];
              const color = colors[i % colors.length];
              return (
                 <motion.div 
                   key={i}
                   animate={{ 
                      x: [40 * Math.cos(angle * Math.PI / 180), 45 * Math.cos(angle * Math.PI / 180), 40 * Math.cos(angle * Math.PI / 180)],
                      y: [160 * Math.sin(angle * Math.PI / 180), 170 * Math.sin(angle * Math.PI / 180), 160 * Math.sin(angle * Math.PI / 180)]
                   }}
                   transition={{ duration: 3 + i, repeat: Infinity }}
                   style={{ 
                      position: "absolute", width: 60, height: 60, borderRadius: 16, 
                      background: "rgba(255,255,255,0.7)", border: `1px solid ${color}44`,
                      display: "flex", alignItems: "center", justifyContent: "center", zIndex: 5
                   }}
                 >
                    <Icon size={24} color={color} />
                 </motion.div>
              );
           })}
        </div>

        {/* ── RIGHT: STAKEHOLDER LIST ─────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", justifyContent: "center" }}>
          {items.map((item, i) => {
            const { label, rest } = parseBoldLabel(item);
            const color = colors[i % colors.length];

            return (
              <motion.div 
                key={i}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ x: 5, background: "rgba(255,255,255,0.03)" }}
                style={{ 
                   ...GLASS_DARK, borderRadius: 24, padding: "1.25rem", 
                   borderLeft: `5px solid ${color}`, position: "relative"
                }}
              >
                <div style={{ fontSize: "1.1rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.25rem" }}>{label}</div>
                <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.5, fontWeight: 500 }}>
                   <InlineText text={rest} />
                </p>
              </motion.div>
            );
          })}
          
          <div style={{ marginTop: "1rem", padding: "1rem", borderRadius: 16, background: "rgba(16, 185, 129, 0.05)", border: "1px solid rgba(16, 185, 129, 0.2)", textAlign: "center" }}>
             <p style={{ fontSize: "0.75rem", color: "#10B981", fontWeight: 900, margin: 0, letterSpacing: "0.1em" }}>
               JARINGAN AMPLIFIKASI NARASI MENJANGKAU 1.2JT+ AUDIENS DIGITAL
             </p>
          </div>
        </div>

      </div>
    </div>
  );
}
