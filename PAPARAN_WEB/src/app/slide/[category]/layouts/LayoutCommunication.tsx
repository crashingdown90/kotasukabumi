"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Share2, MessageCircle, Camera, Video, Send, Smartphone, 
  MessageSquare, Users, Star, Target, Zap, ShieldCheck, TrendingUp,
  Radio, Newspaper, ArrowRight, GraduationCap, Mic2, Heart, CheckCircle2,
  ChevronRight, PlayCircle, Eye, Activity
} from "lucide-react";
import { 
  PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK, SURFACE, 
  BORDER_REFINED, SHADOW_SM, PRIMARY_LIGHT 
} from "../components/Constants";
import { parseListItems, parseBoldLabel, InlineText } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: any[];
}

/* ── SOCIAL HUB LAYOUT ─────────────────────────────────────── */
export function LayoutSocialHub({ title, subtitle, body, features }: LayoutProps) {
  const items = features || [];
  
  const getBrandConf = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("instagram")) return { icon: Camera, color: "#E1306C", bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" };
    if (l.includes("tiktok") || l.includes("reels")) return { icon: Video, color: "#000000", bg: "#000000" };
    if (l.includes("facebook")) return { icon: Users, color: "#1877F2", bg: "#1877F2" };
    if (l.includes("youtube")) return { icon: PlayCircle, color: "#FF0000", bg: "#FF0000" };
    if (l.includes("twitter") || l.includes("x")) return { icon: MessageSquare, color: "#1DA1F2", bg: "#1DA1F2" }; 
    
    return { icon: Share2, color: PRIMARY, bg: PRIMARY };
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p style={{ fontSize: "0.85rem", fontWeight: 850, color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
        <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, maxWidth: "800px", margin: "1rem auto 0", lineHeight: 1.6 }}>{body}</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "1150px", margin: "0 auto", width: "100%" }}>
        {/* Top 3 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
           {items.slice(0,3).map((it: any, i: number) => {
             const brand = getBrandConf(it.title);
             const Icon = brand.icon;
             return (
               <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 * i }} key={i} style={{ padding: "2.5rem", borderRadius: 28, background: "#FFFFFF", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "6px", background: brand.bg }} />
                  <div style={{ width: 64, height: 64, borderRadius: 20, background: "rgba(0,0,0,0.03)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Icon size={32} color={brand.color} />
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "1rem", letterSpacing: "0.02em" }}>{it.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500 }}>{it.desc}</p>
               </motion.div>
             );
           })}
        </div>
        {/* Bottom 2 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", padding: "0 10%" }}>
           {items.slice(3,5).map((it: any, i: number) => {
             const brand = getBrandConf(it.title);
             const Icon = brand.icon;
             return (
               <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 + (0.1 * i) }} key={i + 3} style={{ padding: "2rem", borderRadius: 28, background: "#FFFFFF", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, position: "relative", overflow: "hidden", display: "flex", gap: "1.5rem", alignItems: "center" }}>
                  <div style={{ position: "absolute", left: 0, top: 0, width: "6px", height: "100%", background: brand.bg }} />
                  <div style={{ width: 72, height: 72, borderRadius: 24, background: "rgba(0,0,0,0.03)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={36} color={brand.color} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.5rem", letterSpacing: "0.02em" }}>{it.title}</h3>
                    <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500 }}>{it.desc}</p>
                  </div>
               </motion.div>
             );
           })}
        </div>
      </div>
    </motion.div>
  );
}

/* ── KOL LAYOUT ────────────────────────────────────────────── */
export function LayoutKOL({ title, subtitle, body, features }: LayoutProps) {
  const kols = features || [];
  const icons = [Users, Star, Target, Activity];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
         <p style={{ fontSize: "0.85rem", fontWeight: 850, color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
         <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, maxWidth: "800px", margin: "1rem auto 0", lineHeight: 1.6 }}>{body}</p>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignContent: "center", maxWidth: "1150px", margin: "0 auto", width: "100%" }}>
        {kols.map((k: any, i: number) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 * i }} key={i} style={{ padding: "2.5rem", borderRadius: 32, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: SHADOW_SM }}>
              <div style={{ position: "absolute", right: "-5%", top: "-10%", opacity: 0.03 }}>
                <Icon size={180} color="#0F172A" />
              </div>
              
              <div style={{ zIndex: 1 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(212, 175, 55, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", border: "1px solid rgba(212, 175, 55, 0.3)" }}>
                  <Icon size={28} color={GOLD} />
                </div>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 900, marginBottom: "0.75rem", color: TEXT_MAIN, lineHeight: 1.3 }}>{k.title}</h3>
                <p style={{ color: TEXT_MUTED, marginBottom: "2rem", lineHeight: 1.6, fontSize: "0.95rem", fontWeight: 500 }}>{k.desc}</p>
              </div>

              <div style={{ zIndex: 1, borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                 <span style={{ fontWeight: 800, color: GOLD, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{k.metric}</span>
                 <span style={{ fontWeight: 950, fontSize: "1.3rem", color: TEXT_MAIN }}>{k.sub}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── MEDIA TRAINING LAYOUT ──────────────────────────────────── */
export function LayoutMediaTraining({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const icons = [Mic2, MessageSquare, Heart];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p style={{ fontSize: "0.8rem", color: GOLD, fontWeight: 900, textTransform: "uppercase" }}>{subtitle}</p>
        <h2 style={{ fontSize: "2.8rem", fontWeight: 950, display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", color: TEXT_MAIN }}>
          <GraduationCap size={40} color={GOLD} /> {title}
        </h2>
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        {items.map((it: string, i: number) => {
          const { label, rest } = parseBoldLabel(it);
          const Icon = icons[i % icons.length];
          return (
            <div key={i} style={{ flex: 1, padding: "2rem", borderRadius: 24, background: "#FFFFFF", border: `1px solid ${BORDER_REFINED}`, textAlign: "center", boxShadow: SHADOW_SM }}>
               <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(4, 120, 87, 0.05)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <Icon size={28} color={PRIMARY} />
               </div>
               <h3 style={{ fontSize: "1.2rem", fontWeight: 900, color: "#0F172A", marginBottom: "0.75rem" }}><InlineText text={label} /></h3>
               <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6 }}><InlineText text={rest.split("[")[0].trim()} /></p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── SOCIAL MEDIA LIST LAYOUT ──────────────────────────────── */
export function LayoutSocialMedia({ title, subtitle, features }: LayoutProps) {
  const items = features || [];
  return (
    <div style={{ height: "100%" }}>
       <h2 style={{ fontSize: "2.5rem", fontWeight: 950, marginBottom: "2.5rem", color: TEXT_MAIN }}>{title}</h2>
       <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {items.map((it: any, i: number) => (
             <div key={i} style={{ padding: "1.5rem", borderRadius: 20, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <Smartphone size={22} color={PRIMARY} />
                </div>
                <div>
                   <div style={{ fontWeight: 800, fontSize: "1.1rem", color: TEXT_MAIN }}>{it.title}</div>
                   <div style={{ fontSize: "0.9rem", color: TEXT_MUTED }}>{it.desc}</div>
                </div>
             </div>
          ))}
       </div>
    </div>
  );
}

/* ── NEWS RADAR LAYOUT ─────────────────────────────────────── */
export function LayoutNewsRadar({ title, subtitle, body }: LayoutProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <Radio size={48} color={GOLD} style={{ marginBottom: "1rem" }} />
      <h2 style={{ fontSize: "3rem", fontWeight: 950, color: TEXT_MAIN }}>{title}</h2>
      <p style={{ color: TEXT_MUTED, fontSize: "1.2rem", margin: "1.5rem 0" }}>{body}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
         {["TEMPO", "DETIK", "KOMPAS", "REPUBLIKA"].map(n => (
           <div key={n} style={{ padding: "0.5rem 1rem", borderRadius: 8, border: `1px solid ${BORDER_REFINED}`, fontSize: "0.7rem", fontWeight: 900, color: TEXT_MAIN }}>{n}</div>
         ))}
      </div>
    </div>
  );
}

/* ── COMMUNICATION FLOW LAYOUT ──────────────────────────────── */
export function LayoutCommFlow({ title, subtitle, body }: LayoutProps) {
  const nodes = [
     { label: "ARAHAN PIMPINAN", desc: "Instruksi Kebijakan", color: GOLD, icon: Activity },
     { label: "KOMANDO TERPUSAT", desc: "Tim Media Center", color: PRIMARY, icon: ShieldCheck },
     { label: "DISEMINASI PUBLIK", desc: "Warga & Media", color: "#0F172A", icon: Users }
  ];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
         <p style={{ fontSize: "0.85rem", fontWeight: 850, color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
         <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, maxWidth: "800px", margin: "1rem auto 0", lineHeight: 1.6 }}>{body}</p>
      </div>

      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem", position: "relative" }}>
         {/* Background connecting line */}
         <div style={{ position: "absolute", top: "50%", left: "10%", right: "10%", height: 3, background: `linear-gradient(90deg, transparent, ${PRIMARY}40, transparent)`, zIndex: 0 }} />

         {nodes.map((node, i) => {
           const Icon = node.icon;
           return (
             <React.Fragment key={i}>
               <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.2 }} style={{ width: 280, padding: "2.5rem 2rem", background: SURFACE, borderRadius: 32, border: `1px solid ${node.color}40`, boxShadow: SHADOW_LG, textAlign: "center", zIndex: 1, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: node.color }} />
                  <div style={{ width: 72, height: 72, borderRadius: 24, background: `${node.color}15`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                     <Icon size={32} color={node.color} />
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.5rem" }}>{node.label}</h3>
                  <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, fontWeight: 500 }}>{node.desc}</p>
               </motion.div>
               {i < nodes.length - 1 && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.2 + 0.1 }} style={{ zIndex: 1 }}>
                     <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM }}>
                        <ArrowRight size={24} color={PRIMARY} />
                     </div>
                  </motion.div>
               )}
             </React.Fragment>
           );
         })}
      </div>
    </motion.div>
  );
}

/* ── STAKEHOLDER NETWORK LAYOUT ────────────────────────────── */
export function LayoutStakeholderNetwork({ title, subtitle, body, features }: LayoutProps) {
  const items = features || [];
  const icons = [Mic2, Smartphone, Newspaper, Target];
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
         <p style={{ fontSize: "0.85rem", fontWeight: 850, color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
         <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, maxWidth: "800px", margin: "1rem auto 0", lineHeight: 1.6 }}>{body}</p>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignContent: "center", maxWidth: "1150px", margin: "0 auto", width: "100%" }}>
        {items.map((it: any, i: number) => {
           const Icon = icons[i % icons.length];
           return (
             <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 * i }} key={i} style={{ background: SURFACE, borderRadius: 32, padding: "2.5rem", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, position: "relative", overflow: "hidden", display: "flex", gap: "1.5rem" }}>
                <div style={{ position: "absolute", right: "-5%", bottom: "-10%", opacity: 0.03 }}>
                   <Icon size={160} color="#0F172A" />
                </div>
                
                <div style={{ width: 64, height: 64, flexShrink: 0, borderRadius: 20, background: i % 2 === 0 ? "rgba(4, 120, 87, 0.1)" : "rgba(212, 175, 55, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${i % 2 === 0 ? "rgba(4, 120, 87, 0.3)" : "rgba(212, 175, 55, 0.3)"}` }}>
                   <Icon size={32} color={i % 2 === 0 ? "#047857" : GOLD} />
                </div>
                
                <div style={{ zIndex: 1, paddingTop: "0.25rem" }}>
                   <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.75rem", lineHeight: 1.3 }}>{it.title}</h3>
                   <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500 }}>{it.desc}</p>
                </div>
             </motion.div>
           );
        })}
      </div>
    </motion.div>
  );
}
