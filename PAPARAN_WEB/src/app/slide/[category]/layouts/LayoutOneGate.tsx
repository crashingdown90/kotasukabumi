import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ChevronRight, Share2, Search, Database, Users, Eye, ArrowDownRight } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  image?: string;
}

export default function LayoutOneGate({ title, subtitle, body, image }: LayoutProps) {
  const items = parseListItems(body);
  const colors = [PRIMARY, GOLD, "#22C55E", "#A855F7", "#3B82F6"];
  const icons = [Database, Search, ShieldCheck, Eye, Share2];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "2rem", animation: "animate-up 0.8s ease-out" }}>
      <div>
        <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.7rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 950, color: TEXT_MAIN, marginBottom: "0.5rem", letterSpacing: "-0.03em" }}>{title}</h2>
      </div>

      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: image ? "1.2fr 0.8fr" : "1fr", gap: "2.5rem", flex: 1, minHeight: 0 }}>
        
        {/* ── LEFT: THE FUNNEL VISUAL ─────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", justifyContent: "center" }}>
          
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "400px" }}>
            
            {/* Input Pills (Left side of funnel) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", position: "absolute", left: 0, width: "30%", zIndex: 5 }}>
              {items.slice(0, 2).map((item, i) => {
                const { label, rest } = parseBoldLabel(item);
                return (
                  <motion.div 
                    key={i}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i }}
                    style={{ ...GLASS_DARK, padding: "1rem", borderRadius: 16, borderLeft: `4px solid ${colors[i]}`, textAlign: "right" }}
                  >
                    <div style={{ fontWeight: 850, color: TEXT_MAIN, fontSize: "0.85rem", marginBottom: "0.25rem" }}>{label}</div>
                    <div style={{ fontSize: "0.7rem", color: TEXT_MUTED }}>{rest.slice(0, 60)}...</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Central Node */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], boxShadow: [`0 0 40px ${PRIMARY}44`, `0 0 80px ${PRIMARY}66`, `0 0 40px ${PRIMARY}44`] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ 
                width: 200, height: 200, borderRadius: "50%", background: `linear-gradient(135deg, ${PRIMARY}, #8E1540)`, 
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", 
                border: "4px solid rgba(255,255,255,0.2)", zIndex: 10, position: "relative"
              }}
            >
              <ShieldCheck size={50} color="white" />
              <div style={{ color: TEXT_MAIN, fontWeight: 950, fontSize: "1rem", textAlign: "center", marginTop: "0.75rem", letterSpacing: "0.1em" }}>ONE-GATE<br/>CLEARANCE</div>
              
              {/* Spinning Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ position: "absolute", inset: -20, border: "2px dashed rgba(212, 175, 55, 0.4)", borderRadius: "50%" }}
              />
            </motion.div>

            {/* Output Pills (Right side) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", position: "absolute", right: 0, width: "30%", zIndex: 5 }}>
              {items.slice(3, 5).map((item, i) => {
                const { label, rest } = parseBoldLabel(item);
                return (
                  <motion.div 
                    key={i}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * (i + 3) }}
                    style={{ ...GLASS_DARK, padding: "1rem", borderRadius: 16, borderRight: `4px solid ${colors[i+3] || colors[0]}`, textAlign: "left" }}
                  >
                    <div style={{ fontWeight: 850, color: TEXT_MAIN, fontSize: "0.85rem", marginBottom: "0.25rem" }}>{label}</div>
                    <div style={{ fontSize: "0.7rem", color: TEXT_MUTED }}>{rest.slice(0, 60)}...</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Connecting Lines / Arrows */}
            <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, zIndex: 1 }}>
               <path d="M 25% 30% Q 40% 30% 45% 45%" fill="none" stroke={PRIMARY} strokeWidth="2" strokeDasharray="5 5" opacity="0.3" />
               <path d="M 25% 70% Q 40% 70% 45% 55%" fill="none" stroke={GOLD} strokeWidth="2" strokeDasharray="5 5" opacity="0.3" />
               <path d="M 55% 45% Q 60% 30% 75% 30%" fill="none" stroke="#22C55E" strokeWidth="2" strokeDasharray="5 5" opacity="0.3" />
               <path d="M 55% 55% Q 60% 70% 75% 70%" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5 5" opacity="0.3" />
            </svg>
          </div>

          <div style={{ ...GLASS_DARK, padding: "1.5rem", borderRadius: 24, borderLeft: `6px solid ${GOLD}` }}>
             {items[2] ? (
               <>
                 <h4 style={{ margin: 0, color: GOLD, fontSize: "1.1rem", fontWeight: 900, marginBottom: "0.5rem" }}>{parseBoldLabel(items[2]).label}</h4>
                 <p style={{ margin: 0, fontSize: "0.9rem", color: TEXT_MAIN, opacity: 0.8, lineHeight: 1.5 }}><InlineText text={parseBoldLabel(items[2]).rest} /></p>
               </>
             ) : (
               <p style={{ margin: 0, fontSize: "0.9rem", color: TEXT_MUTED }}>{body.replace(/<.*?>/g, "").slice(0, 100)}...</p>
             )}
          </div>
        </div>

        {/* ── RIGHT: IMAGE & STATS ──────────────────────────── */}
        {image && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ flex: 1, borderRadius: 32, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", position: "relative" }}>
               <img src={image} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="One Gate Policy" />
               <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,12,24,0.9) 0%, transparent 40%)" }} />
               <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                     <div style={{ color: TEXT_MAIN, fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.1em" }}>COMMAND CENTER<br/>VERIFIED SYSTEM</div>
                     <CheckCircle2 color="#22C55E" size={24} />
                  </div>
               </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
               <div style={{ ...GLASS_DARK, padding: "1rem", borderRadius: 20, textAlign: "center" }}>
                  <div style={{ fontSize: "0.6rem", fontWeight: 900, color: TEXT_MUTED }}>INPUT SOURCES</div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 950, color: TEXT_MAIN }}>31+ OPD</div>
               </div>
               <div style={{ ...GLASS_DARK, padding: "1rem", borderRadius: 20, textAlign: "center" }}>
                  <div style={{ fontSize: "0.6rem", fontWeight: 900, color: TEXT_MUTED }}>SYNC RATE</div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 950, color: GOLD }}>100%</div>
               </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

const CheckCircle2 = ({ color, size }: { color: string, size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)
