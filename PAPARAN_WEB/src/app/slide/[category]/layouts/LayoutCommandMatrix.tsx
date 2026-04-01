import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Radio, Database, ChevronDown, TowerControl as Control, ChevronRight } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

export default function LayoutCommandMatrix({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const colors = [GOLD, PRIMARY, "#3B82F6", "#10B981"];
  const CommandIcons = [Shield, Control, Database, Users];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "2rem", animation: "animate-up 0.8s ease-out" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <p style={{ fontSize: "0.80rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.6rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 950, color: TEXT_MAIN, margin: 0, letterSpacing: "-0.04em" }}>{title}</h2>
        </div>
      </div>

      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "3rem", flex: 1, minHeight: 0 }}>
        
        {/* ── LEFT: ISOMETRIC COMMAND STRUCTURE ───────────────── */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", perspective: "1000px" }}>
            <div style={{ 
               display: "flex", flexDirection: "column", gap: "1.5rem", 
               transform: "rotateX(20deg) rotateY(-10deg)", 
               transformStyle: "preserve-3d"
            }}>
               {items.map((item, i) => {
                  const { label } = parseBoldLabel(item);
                  const Icon = CommandIcons[i % CommandIcons.length];
                  const color = colors[i % colors.length];

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, z: -100 }}
                      animate={{ opacity: 1, z: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.6 }}
                      style={{ 
                         ...GLASS_DARK, borderRadius: 20, padding: "1.25rem 2rem",
                         borderLeft: `8px solid ${color}`, width: "320px",
                         display: "flex", alignItems: "center", gap: "1.5rem",
                         boxShadow: `0 15px 35px rgba(0,0,0,0.4), 0 0 15px ${color}22`,
                         position: "relative",
                         zIndex: items.length - i
                      }}
                    >
                       <div style={{ 
                          width: 50, height: 50, borderRadius: 14, 
                          background: `${color}15`, border: `1px solid ${color}33`,
                          display: "flex", alignItems: "center", justifyContent: "center"
                       }}>
                          <Icon size={24} color={color} />
                       </div>
                       <div>
                          <div style={{ fontSize: "0.75rem", fontWeight: 800, color: TEXT_MUTED, letterSpacing: "0.1em", marginBottom: "0.2rem" }}>LEVEL {4 - i}</div>
                          <div style={{ fontSize: "1.1rem", fontWeight: 900, color: TEXT_MAIN }}>{label}</div>
                       </div>
                       
                       {/* Connection Line */}
                       {i < items.length - 1 && (
                          <div style={{ position: "absolute", bottom: -25, left: "50%", width: 2, height: 25, background: `linear-gradient(to bottom, ${color}, transparent)` }} />
                       )}
                    </motion.div>
                  );
               })}
            </div>
            
            {/* Background Glow */}
            <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: `radial-gradient(circle, ${PRIMARY}11, transparent)`, zIndex: -1 }} />
        </div>

        {/* ── RIGHT: OPERATIONAL DESCRIPTION ─────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", justifyContent: "center" }}>
          {items.map((item, i) => {
            const { label, rest } = parseBoldLabel(item);
            const color = colors[i % colors.length];

            return (
              <motion.div 
                key={i}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                whileHover={{ x: 5, background: "rgba(255,255,255,0.02)" }}
                style={{ 
                   ...GLASS_DARK, borderRadius: 24, padding: "1.5rem", 
                   border: `1px solid rgba(255,255,255,0.05)`,
                   position: "relative",
                   overflow: "hidden"
                }}
              >
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: color }} />
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "0.6rem" }}>
                   <div style={{ fontSize: "1.1rem", fontWeight: 900, color: color }}>{label}</div>
                   <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.05)" }} />
                   <ChevronRight size={16} color={color} />
                </div>
                <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
                   <InlineText text={rest} />
                </p>
              </motion.div>
            );
          })}
          
          <div style={{ 
             marginTop: "1rem", padding: "1.5rem", borderRadius: 24, background: "rgba(255,255,255,0.03)", 
             border: "1px dashed rgba(212,175,55,0.2)", textAlign: "center" 
          }}>
             <p style={{ fontSize: "0.8rem", color: GOLD, fontWeight: 900, margin: 0, letterSpacing: "0.05em" }}>
               "MATRIKS KOMANDO YANG RIGID MENJAMIN KECEPATAN EKSEKUSI TANPA BLUNDER."
             </p>
          </div>
        </div>

      </div>
    </div>
  );
}
