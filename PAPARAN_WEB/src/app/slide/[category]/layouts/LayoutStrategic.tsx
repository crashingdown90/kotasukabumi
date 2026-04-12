"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Target, TrendingUp, Search, Calendar, Repeat, Activity, 
  Users, HardHat, HeartPulse, Building2, LayoutGrid, Zap,
  Flag, Award, Star, Compass, Map, Radio, ShieldAlert, ShieldCheck,
  ChevronRight, ArrowRight, Circle, Smartphone, Briefcase, Heart,
  ShoppingBag, Landmark, CheckSquare
} from "lucide-react";
import { 
  PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK, SURFACE, 
  BORDER_REFINED, SHADOW_SM, SHADOW_LG, PRIMARY_LIGHT 
} from "../components/Constants";
import { parseListItems, parseBoldLabel, InlineText } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: any[];
}

/* ── MASTER NARRATIVE LAYOUT (ARCHITECTURAL PILLARS) ────────── */
export function LayoutMasterNarrative({ title, subtitle, features, body }: LayoutProps) {
  const pillars = features || [];
  const icons = [Flag, Compass];
  
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
      {/* Ambient Canvas Glows */}
      <div style={{ position: "absolute", top: "-10%", left: "5%", width: 500, height: 500, background: `radial-gradient(circle, ${PRIMARY}05 0%, transparent 60%)`, zIndex: -1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", right: "5%", width: 500, height: 500, background: `radial-gradient(circle, ${GOLD}05 0%, transparent 60%)`, zIndex: -1, pointerEvents: "none" }} />
      
      <div style={{ marginBottom: "2rem", textAlign: "center", position: "relative", zIndex: 1 }}>
        <p style={{ fontSize: "0.8rem", fontWeight: 900, color: GOLD, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
        <div style={{ width: 60, height: 3, background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`, margin: "1rem auto 0", borderRadius: 2 }} />
        {body && <div style={{ maxWidth: "800px", margin: "1rem auto 0", fontSize: "1rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500 }}><InlineText text={body} /></div>}
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "stretch", flex: 1, zIndex: 1, paddingBottom: "2rem" }}>
        {pillars.map((p: any, i: number) => {
           const PillarIcon = icons[i % icons.length];
           const mainTitle = p.title.split("(")[0].trim();
           const subTitle = p.title.includes("(") ? "(" + p.title.split("(")[1] : "";
           
           return (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.1 }}
              whileHover={{ y: -4, boxShadow: `0 15px 35px rgba(0,0,0,0.06)`, borderColor: `${GOLD}66` }}
              style={{ 
                padding: "2rem", borderRadius: 24, ...GLASS_DARK, 
                border: `1px solid rgba(255,255,255,0.7)`, boxShadow: SHADOW_SM,
                display: "flex", flexDirection: "column", position: "relative", overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
              }}>
              
              {/* Premium Gradient Top Line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: `linear-gradient(90deg, ${PRIMARY}, ${GOLD})` }} />
              
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1.5rem", zIndex: 1 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: `0 8px 16px ${PRIMARY}40` }}>
                      <PillarIcon size={24} color="#FFFFFF" strokeWidth={2.5} />
                  </div>
                  <div>
                     <h3 style={{ fontSize: "1.5rem", fontWeight: 1000, color: PRIMARY, letterSpacing: "-0.02em", lineHeight: 1 }}>{mainTitle}</h3>
                     {subTitle && <div style={{ fontSize: "0.8rem", fontWeight: 800, color: GOLD, marginTop: "0.4rem" }}>{subTitle}</div>}
                  </div>
              </div>
              
              <div style={{ fontSize: "0.75rem", fontWeight: 900, color: TEXT_MAIN, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem", zIndex: 1 }}>
                 {p.desc}
              </div>
              
              <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, marginBottom: "1.5rem", flex: 1, zIndex: 1, fontWeight: 500 }}>
                 {p.detail}
              </p>
              
              {p.points && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", zIndex: 1 }}>
                  {p.points.map((pt: string, j: number) => (
                    <motion.div 
                      key={j}
                      whileHover={{ x: 4, background: `${GOLD}0A` }}
                      style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: `rgba(15, 23, 42, 0.02)`, padding: "0.75rem 1rem", borderRadius: 12, border: `1px solid rgba(15, 23, 42, 0.04)`, transition: "all 0.2s" }}
                    >
                      <div style={{ padding: "0.2rem", background: PRIMARY_LIGHT, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                         <CheckSquare size={14} color={PRIMARY} strokeWidth={2.5} />
                      </div>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: TEXT_MAIN, letterSpacing: "-0.01em" }}>{pt}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ── ROADMAP LAYOUT (TACTICAL TIMELINE) ─────────────────────── */
export function LayoutRoadmap({ title, subtitle, features }: LayoutProps) {
  const steps = features || [];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.85rem", fontWeight: 900, color: GOLD, letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "1rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "3.2rem", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
      </div>
      
      <div style={{ position: "relative", maxWidth: "1100px", margin: "0 auto", width: "100%", padding: "0 2rem" }}>
         {/* Connecting Line */}
         <div style={{ position: "absolute", top: 120, left: "10%", right: "10%", height: 2, background: `${PRIMARY}22`, zIndex: 0 }} />
         <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5 }} 
            style={{ position: "absolute", top: 120, left: "10%", width: "40%", height: 3, background: `linear-gradient(to right, ${PRIMARY}, ${GOLD})`, zIndex: 1, transformOrigin: "left" }} />
         
         <div style={{ display: "flex", justifyContent: "space-between", position: "relative", zIndex: 2 }}>
            {steps.map((s: any, i: number) => {
              const isActive = s.status === "active";
              return (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "28%" }}>
                   <motion.div 
                     initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 + (i * 0.15) }}
                     style={{ padding: "0.6rem 1.4rem", borderRadius: 12, background: isActive ? PRIMARY : SURFACE, border: `1px solid ${isActive ? PRIMARY : BORDER_REFINED}`, color: isActive ? "#FFF" : TEXT_MAIN, fontWeight: 900, marginBottom: "2rem", fontSize: "0.9rem", boxShadow: isActive ? `0 15px 30px ${PRIMARY}33` : SHADOW_SM }}>
                      {s.year}
                   </motion.div>
                   
                   <motion.div 
                      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 + (i * 0.2), type: "spring" }}
                      style={{ width: 28, height: 28, borderRadius: "50%", background: SURFACE, border: `4px solid ${isActive ? GOLD : BORDER_REFINED}`, position: "relative", marginBottom: "2.5rem", zIndex: 2 }}>
                      {isActive && <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: "absolute", inset: -8, borderRadius: "50%", border: `2px solid ${GOLD}` }} />}
                   </motion.div>
                   
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + (i * 0.2) }} style={{ textAlign: "center" }}>
                      <h3 style={{ fontSize: "1.3rem", fontWeight: 950, color: TEXT_MAIN, marginBottom: "0.5rem" }}>{s.title}</h3>
                      <p style={{ fontSize: "0.85rem", color: GOLD, fontWeight: 800, marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.desc}</p>
                      
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", textAlign: "left" }}>
                          {s.points && s.points.map((pt: string, j: number) => (
                              <div key={j} style={{ display: "flex", gap: "0.75rem", fontSize: "0.8rem", color: TEXT_MUTED, lineHeight: 1.4 }}>
                                  <ChevronRight size={14} color={GOLD} style={{ marginTop: 2, flexShrink: 0 }} />
                                  <span style={{ fontWeight: 500 }}>{pt}</span>
                              </div>
                          ))}
                      </div>
                   </motion.div>
                </div>
              );
            })}
         </div>
      </div>
    </div>
  );
}

/* ── STRATEGIC PIPELINE LAYOUT (COMMATER FLOW) ──────────────── */
export function LayoutStrategicPipeline({ title, subtitle, features, body }: LayoutProps) {
  const steps = features || [];
  const icons = [Star, Target, Zap, ShieldCheck];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
       
       {/* Ambient Flowchart Background */}
       <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "2px", background: `linear-gradient(90deg, transparent, ${GOLD}33, transparent)`, zIndex: 0 }} />
       <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 50% 100%, ${PRIMARY}05 0%, transparent 60%)`, zIndex: 0, pointerEvents: "none" }} />

       <div style={{ marginBottom: "3rem", textAlign: "center", position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: "0.85rem", fontWeight: 900, color: GOLD, letterSpacing: "0.45em", textTransform: "uppercase", marginBottom: "1rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
          <div style={{ width: 80, height: 4, background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`, borderRadius: 2, margin: "1.5rem auto 0" }} />
          {body && <p style={{ maxWidth: "800px", margin: "1.5rem auto 0", color: TEXT_MUTED, fontSize: "1.15rem", lineHeight: 1.7, fontWeight: 500 }}>{body}</p>}
       </div>

       <div style={{ display: "flex", justifyContent: "center", alignItems: "stretch", gap: "1rem", flex: 1, paddingBottom: "2rem", zIndex: 1, position: "relative" }}>
          {steps.map((s: any, i: number) => {
            const Icon = icons[i % icons.length];
            return (
              <React.Fragment key={i}>
                  <motion.div 
                     initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 100 }}
                     whileHover={{ y: -10, boxShadow: `0 20px 40px rgba(0,0,0,0.08)`, borderColor: `${GOLD}88` }}
                     style={{ flex: 1, padding: "2.5rem 1.5rem", borderRadius: 28, background: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(20px)", border: `1px solid rgba(0,0,0,0.05)`, borderTop: `4px solid ${PRIMARY}`, textAlign: "center", boxShadow: SHADOW_SM, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", transition: "all 0.4s" }}>
                     
                     {/* Internal Subtle Highlight */}
                     <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "50%", background: `linear-gradient(180deg, ${PRIMARY}05 0%, transparent 100%)`, zIndex: 0 }} />

                     <div style={{ position: "relative", zIndex: 1, width: 70, height: 70, borderRadius: 24, background: SURFACE, margin: "0 auto 2rem", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 10px 20px rgba(0,0,0,0.05)`, border: `1px solid ${BORDER_REFINED}` }}>
                         <Icon size={34} color={PRIMARY} strokeWidth={2.5} />
                     </div>
                     <h3 style={{ fontSize: "1.25rem", fontWeight: 950, marginBottom: "1.25rem", lineHeight: 1.3, color: TEXT_MAIN, zIndex: 1 }}>{s.title}</h3>
                     <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, fontWeight: 500, lineHeight: 1.6, zIndex: 1 }}>{s.desc}</p>
                     
                     {/* Connector Node Dot */}
                     <div style={{ position: "absolute", bottom: -6, left: "50%", transform: "translateX(-50%)", width: 12, height: 12, borderRadius: "50%", background: GOLD, boxShadow: `0 0 10px ${GOLD}AA` }} />
                  </motion.div>
                  
                  {i < steps.length - 1 && (
                     <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.15 + 0.4 }} style={{ display: "flex", alignItems: "center", position: "relative" }}>
                        <div style={{ width: "30px", height: "3px", background: `linear-gradient(90deg, ${GOLD}AA, ${PRIMARY}AA)`, borderRadius: 2 }} />
                        <ArrowRight size={28} color={PRIMARY} style={{ margin: "0 -8px", filter: `drop-shadow(0 0 5px ${PRIMARY}44)` }} />
                     </motion.div>
                  )}
              </React.Fragment>
            );
          })}
       </div>
    </div>
  );
}

/* ── MICRO SEGMENTATION LAYOUT (UPGRADED IDENTITY CARDS) ──────── */
export function LayoutMicroSegmentation({ title, subtitle, features, body }: LayoutProps) {
  const personas = features || [];
  const icons = [Smartphone, Briefcase, Heart, ShoppingBag, Landmark, Search];
  const colors = [PRIMARY, GOLD, "#10b981", "#f59e0b", "#6366f1", "#ec4899"];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
       <div style={{ marginBottom: "3rem", textAlign: "left" }}>
          <p style={{ fontSize: "0.9rem", fontWeight: 900, color: GOLD, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
          <div style={{ width: 80, height: 4, background: PRIMARY, borderRadius: 2, marginTop: "1rem" }} />
       </div>
       
       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", flex: 1 }}>
          {personas.map((p: any, i: number) => {
             const Icon = icons[i % icons.length];
             const color = colors[i % colors.length];
             return (
               <motion.div 
                  key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -8, borderColor: color }}
                  style={{ 
                    padding: "2rem", borderRadius: 32, background: SURFACE, 
                    border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, 
                    display: "flex", flexDirection: "column", position: "relative", overflow: "hidden",
                    transition: "all 0.3s ease"
                  }}>
                  
                  {/* Persona Indicator Badge */}
                  <div style={{ position: "absolute", top: 0, right: 0, background: `${color}11`, color: color, padding: "0.5rem 1.25rem", borderRadius: "0 0 0 20px", fontSize: "0.65rem", fontWeight: 1000, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {p.desc}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "2rem" }}>
                     <div style={{ width: 60, height: 60, borderRadius: 20, background: `${color}11`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${color}22` }}>
                        <Icon size={28} color={color} />
                     </div>
                     <h3 style={{ fontSize: "1.25rem", fontWeight: 950, color: TEXT_MAIN, lineHeight: 1.25, letterSpacing: "-0.02em" }}>{p.title}</h3>
                  </div>

                  <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                     <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                        <div style={{ fontSize: "0.65rem", fontWeight: 1000, color: TEXT_MUTED, letterSpacing: "0.1em" }}>UTAMAKAN SALURAN</div>
                        <div style={{ fontSize: "0.95rem", fontWeight: 850, color: PRIMARY, letterSpacing: "-0.01em" }}>{p.channel}</div>
                     </div>
                     
                     <div style={{ height: "1px", background: `linear-gradient(90deg, ${BORDER_REFINED}, transparent)` }} />
                     
                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        <div>
                           <div style={{ fontSize: "0.65rem", fontWeight: 1000, color: TEXT_MUTED, letterSpacing: "0.1em" }}>TONASI</div>
                           <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#059669" }}>{p.tone}</div>
                        </div>
                        <div>
                           <div style={{ fontSize: "0.65rem", fontWeight: 1000, color: TEXT_MUTED, letterSpacing: "0.1em" }}>OBJEKTIF</div>
                           <div style={{ fontSize: "0.85rem", fontWeight: 900, color: GOLD }}>{p.goal}</div>
                        </div>
                     </div>
                  </div>
               </motion.div>
             );
          })}
       </div>
    </div>
  );
}

/* ── OPD SYNC LAYOUT (GOVERNANCE ARCHITECTURE) ──────────────── */
export function LayoutOPDSync({ title, subtitle, features }: LayoutProps) {
  const clusters = features || [];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "3.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.85rem", fontWeight: 900, color: GOLD, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "3.2rem", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", flex: 1 }}>
         {clusters.map((cl: any, i: number) => (
            <motion.div 
               key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
               style={{ padding: "2.5rem 2rem", borderRadius: 28, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
               <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: PRIMARY }} />
               <div style={{ width: 48, height: 48, borderRadius: 14, background: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <LayoutGrid size={24} color={PRIMARY} />
               </div>
               <h3 style={{ fontSize: "1.25rem", fontWeight: 950, marginBottom: "0.75rem", color: TEXT_MAIN, letterSpacing: "-0.01em" }}>{cl.title}</h3>
               <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, fontWeight: 500, lineHeight: 1.6 }}>{cl.desc}</p>
            </motion.div>
         ))}
      </div>
    </div>
  );
}

/* ── FEEDBACK LOOP LAYOUT (TACTICAL CYCLE) ──────────────────── */
export function LayoutFeedbackLoop({ title, subtitle, features }: LayoutProps) {
    const steps = features || [];
    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ marginBottom: "4.5rem", textAlign: "center" }}>
                <h2 style={{ fontSize: "3.2rem", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.04em" }}>{title}</h2>
                <div style={{ width: 100, height: 4, background: GOLD, borderRadius: 2, margin: "1.5rem auto 0" }} />
            </div>
            
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", position: "relative", padding: "0 2rem" }}>
                {steps.map((s: any, i: number) => (
                    <React.Fragment key={i}>
                       <motion.div 
                           initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.15 }}
                           style={{ width: "23%", padding: "2.5rem 1.8rem", borderRadius: 32, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, textAlign: "center", boxShadow: SHADOW_SM, position: "relative" }}>
                           <div style={{ width: 56, height: 56, borderRadius: "50%", background: PRIMARY, color: "white", display: "flex", alignItems: "center", justifyContent: "center", margin: "-4.5rem auto 1.5rem", fontSize: "1.4rem", fontWeight: 1000, border: "4px solid white", boxShadow: SHADOW_SM }}>
                              {i + 1}
                           </div>
                           <h3 style={{ fontSize: "1.15rem", fontWeight: 950, marginBottom: "1rem", color: TEXT_MAIN, letterSpacing: "-0.01em" }}>{s.title}</h3>
                           <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, fontWeight: 500, lineHeight: 1.55 }}>{s.desc}</p>
                       </motion.div>
                       {i < steps.length - 1 && (
                          <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                             <Repeat size={24} color={GOLD} opacity={0.4} />
                          </motion.div>
                       )}
                    </React.Fragment>
                ))}
            </div>
            
            <motion.div 
               initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
               style={{ background: SURFACE, padding: "1.2rem 3rem", borderRadius: 99, margin: "4.5rem auto 0", border: `1px solid ${PRIMARY}22`, boxShadow: SHADOW_SM, display: "flex", alignItems: "center", gap: "1.2rem" }}>
                <Activity size={24} color={PRIMARY} />
                <span style={{ fontWeight: 1000, color: PRIMARY, letterSpacing: "0.15em", fontSize: "0.9rem", textTransform: "uppercase" }}>INTEGRATED GOVERNANCE CYCLE</span>
            </motion.div>
        </div>
    );
}
