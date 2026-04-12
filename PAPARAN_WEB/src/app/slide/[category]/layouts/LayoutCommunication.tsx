"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Share2, MessageCircle, Camera, Video, Send, Smartphone, 
  MessageSquare, Users, Star, Target, Zap, ShieldCheck, TrendingUp,
  Radio, Newspaper, ArrowRight, GraduationCap, Mic2, Heart, CheckCircle2,
  ChevronRight, PlayCircle, Eye, Activity, Settings, Database, Globe
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

/* ── KOL & HOMELESS MEDIA LAYOUT ────────────────────────────── */
export function LayoutKOL({ title, subtitle, body, features }: LayoutProps) {
  const kols = features || [];
  const icons = [Users, Target, Activity, Share2]; 
  const colors = ["#8B5CF6", "#F59E0B", "#10B981", "#3B82F6"];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column", paddingBottom: "1.5rem" }}>
      
      {/* Background Subtle Gradient */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.04) 0%, transparent 60%)", zIndex: -1, pointerEvents: "none" }} />

      {/* Bureaucratic Header (Compressed Margins) */}
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
         <div style={{ width: 80, height: 3, background: GOLD, margin: "0 auto 1.25rem", borderRadius: "2px", boxShadow: `0 0 12px ${GOLD}60` }} />
         <p style={{ fontSize: "0.85rem", fontWeight: 850, color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.7rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
         {body && <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, maxWidth: "1050px", margin: "1rem auto 0", lineHeight: 1.5, fontWeight: 500 }}>{body}</p>}
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "1.25rem", alignContent: "start", maxWidth: "1150px", margin: "0 auto", width: "100%" }}>
        {kols.map((k: any, i: number) => {
          const Icon = icons[i % icons.length];
          const ringColor = colors[i % colors.length];
          return (
             <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 * i }} key={i} 
                style={{ padding: "1.5rem", borderRadius: 20, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: SHADOW_SM, zIndex: 1 }}>
                
                {/* Thin Colored Edge Marker in GOLD */}
                <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "5px", background: ringColor }} />

                <div style={{ position: "absolute", right: "-5%", bottom: "-15%", opacity: 0.03, zIndex: 0 }}>
                  <Icon size={160} color={ringColor} />
                </div>
                
                <div style={{ zIndex: 2, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                     <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ringColor}10`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${ringColor}30`, flexShrink: 0 }}>
                       <Icon size={22} color={ringColor} strokeWidth={2.5} />
                     </div>
                     <h3 style={{ fontSize: "1.2rem", fontWeight: 900, color: TEXT_MAIN, lineHeight: 1.3 }}>{k.title}</h3>
                  </div>
                  <div style={{ width: "100%", height: "1px", background: "#F1F5F9", marginBottom: "0.75rem" }} />
                  <p style={{ color: TEXT_MUTED, margin: 0, lineHeight: 1.5, fontSize: "0.9rem", fontWeight: 500 }}>{k.desc}</p>
                </div>

                <div style={{ zIndex: 2, borderTop: `1px dashed ${BORDER_REFINED}`, paddingTop: "1rem", marginTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                   <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                      <span style={{ fontWeight: 850, color: ringColor, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Parametrik Pengukuran:</span>
                      <span style={{ fontWeight: 700, color: TEXT_MUTED, fontSize: "0.85rem" }}>{k.metric}</span>
                   </div>
                   <span style={{ fontWeight: 950, fontSize: "1.1rem", color: TEXT_MAIN, textAlign: "right" }}>{k.sub}</span>
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

/* ── DISTRIBUTION PLAN LAYOUT (Modern Hierarchical Flow) ───────────────── */
export function LayoutDistributionPlan({ title, subtitle, body, features }: LayoutProps) {
  const nodes = features || [];

  return (
    <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", padding: "2rem 4rem" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem", position: "relative", zIndex: 1 }}>
         <p style={{ fontSize: "0.85rem", fontWeight: 850, color: "#047857", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "2.8rem", fontWeight: 950, color: "#0F172A", letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>{title}</h2>
         <p style={{ fontSize: "1.05rem", color: "#475569", maxWidth: "900px", margin: "0 auto", lineHeight: 1.6 }}>{body}</p>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "stretch", justifyContent: "center", position: "relative", marginBottom: "2rem", background: "#FFFFFF", borderRadius: "24px", border: "1px solid #E2E8F0", boxShadow: "0 10px 40px rgba(15,23,42,0.04)", padding: "1.5rem" }}>
         
         {nodes.map((node: any, i: number) => {
           const icons = [Star, ShieldCheck, Zap, Users];
           const Icon = icons[i] || Share2;
           return (
             <React.Fragment key={i}>
               <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.15 }} 
                 style={{ flex: 1, padding: "2rem 1.5rem", display: "flex", flexDirection: "column", position: "relative" }}>
                  
                  {/* Step Badge & Icon Header */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "#F0FDF4", padding: "0.4rem 1rem", borderRadius: "24px", border: "1px solid #A7F3D0" }}>
                      <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#047857", color: "#FFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.85rem" }}>
                        {i + 1}
                      </div>
                      <div style={{ fontWeight: 800, color: "#047857", fontSize: "0.75rem", letterSpacing: "0.15em" }}>TAHAP {i + 1}</div>
                    </div>
                    <div style={{ color: "#047857", opacity: 0.8 }}>
                       <Icon size={28} strokeWidth={2} />
                    </div>
                  </div>
                  
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 900, color: "#0F172A", marginBottom: "1rem", lineHeight: 1.4, paddingRight: "1rem" }}>{node.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748B", fontWeight: 500, lineHeight: 1.6, margin: 0 }}>{node.desc}</p>
               </motion.div>
               
               {/* Vertical Divider / Flow Arrow */}
               {i < nodes.length - 1 && (
                  <div style={{ width: "1px", background: "linear-gradient(to bottom, transparent, #E2E8F0, #E2E8F0, transparent)", display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0", position: "relative" }}>
                     <div style={{ position: "absolute", width: "28px", height: "28px", borderRadius: "50%", background: "#FFFFFF", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", color: "#A0AEC0", boxShadow: "0 2px 10px rgba(0,0,0,0.02)", zIndex: 2 }}>
                       <ChevronRight size={16} strokeWidth={2.5} />
                     </div>
                  </div>
               )}
             </React.Fragment>
           );
         })}
      </div>
    </div>
  );
}

/* ── COMMUNICATION ARCHITECTURE LAYOUT (Brand Target Demographics) ──────── */
export function LayoutCommArchitecture({ title, subtitle, body, features }: LayoutProps) {
  const nodes = features || [];
  
  const getBrandConf = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("instagram")) return { 
      icon: Camera, 
      bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)", 
      shadow: "rgba(220, 39, 67, 0.2)",
      solid: "#dc2743"
    };
    if (l.includes("tiktok")) return { 
      icon: Video, 
      bg: "#000000", 
      shadow: "rgba(0, 0, 0, 0.2)",
      accent: "#00f2fe",
      solid: "#000000"
    };
    if (l.includes("facebook")) return { 
      icon: Users, 
      bg: "#1877F2", 
      shadow: "rgba(24, 119, 242, 0.2)",
      solid: "#1877F2"
    };
    if (l.includes("twitter") || l.includes("kanal x") || l.includes("platform x")) return { 
      icon: MessageSquare, 
      bg: "#000000", 
      shadow: "rgba(0, 0, 0, 0.2)",
      solid: "#000000"
    };
    return { 
      icon: Globe, 
      bg: "#047857", 
      shadow: "rgba(4, 120, 87, 0.2)",
      solid: "#047857"
    };
  };

  return (
    <div style={{ height: "100%", width: "100%", padding: "1.5rem 3rem", display: "flex", flexDirection: "column" }}>
      {/* Tactical Header */}
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
         <p style={{ fontSize: "0.75rem", fontWeight: 850, color: "#047857", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "2.4rem", fontWeight: 950, color: "#0F172A", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>{title}</h2>
         <p style={{ fontSize: "0.95rem", color: "#475569", maxWidth: "950px", margin: "0 auto", lineHeight: 1.5 }}>{body}</p>
      </div>

      {/* Modern Compact 5-Column Grid */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem", zIndex: 2, alignItems: "stretch" }}>
         {nodes.map((node: any, i: number) => {
           const brand = getBrandConf(node.title);
           const Icon = brand.icon;
           
           // Extracting Target and Fokus cleanly
           const descParts = node.desc.split("\n");
           const targetPart = descParts[0] || "";
           const fokusPart = descParts.slice(1).join(" ") || node.desc;
           
           return (
             <motion.div key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}
                style={{ background: "#FFFFFF", borderRadius: "14px", padding: "1.25rem", boxShadow: `0 8px 25px ${brand.shadow}`, border: "1px solid #E2E8F0", display: "flex", flexDirection: "column", position: "relative" }}>
                
                {/* Top Brand Accent Line */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: brand.bg, borderTopLeftRadius: "14px", borderTopRightRadius: "14px" }} />
                
                {/* Brand Logo & Name Header */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.75rem", marginBottom: "1rem" }}>
                   <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: brand.icon === Camera ? brand.bg : brand.solid, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", boxShadow: `0 4px 15px ${brand.shadow}` }}>
                      <Icon size={20} color="#FFF" strokeWidth={2.5} />
                   </div>
                   <h3 style={{ fontSize: "0.95rem", fontWeight: 900, color: "#0F172A", margin: 0, lineHeight: 1.3 }}>{node.title}</h3>
                </div>

                {/* Target Audience Pill */}
                <div style={{ background: "#F8FAFC", borderRadius: "8px", padding: "0.75rem", marginBottom: "1rem", borderLeft: `3px solid ${brand.solid}` }}>
                   <div style={{ fontSize: "0.55rem", fontWeight: 900, color: brand.solid, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.25rem" }}>TARGET AUDIENCE</div>
                   <div style={{ fontSize: "0.80rem", fontWeight: 800, color: "#0F172A", lineHeight: 1.4 }}>
                      {targetPart.replace("Target: ", "").trim()}
                   </div>
                </div>

                {/* Strategy / Focus */}
                <div style={{ flex: 1 }}>
                   <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.4rem" }}>
                      <Target size={12} color="#64748B" />
                      <div style={{ fontSize: "0.55rem", fontWeight: 900, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.15em" }}>STRATEGI & VOICE</div>
                   </div>
                   <p style={{ fontSize: "0.75rem", color: "#475569", lineHeight: 1.5, fontWeight: 500, margin: 0 }}>
                      {fokusPart.replace("Fokus: ", "").trim()}
                   </p>
                </div>

             </motion.div>
           );
         })}
      </div>
    </div>
  );
}

/* ── STAKEHOLDER NETWORK LAYOUT ────────────────────────────── */
export function LayoutStakeholderNetwork({ title, subtitle, body, features }: LayoutProps) {
  const items = features || [];
  const icons = [Newspaper, Radio, Smartphone, Users]; // Better dynamic bureaucratic mapping
  const colors = ["#10B981", "#3B82F6", "#F59E0B", "#8B5CF6"]; // Matrix quartet

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: "100%", display: "flex", flexDirection: "column", paddingBottom: "1.5rem" }}>
      
      {/* Background Subtle Gradient */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 10%, rgba(4,120,87,0.03) 0%, transparent 60%)", zIndex: -1, pointerEvents: "none" }} />

      {/* Bureaucratic Header (No-Scroll Optimized) */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
         <div style={{ width: 80, height: 3, background: PRIMARY, margin: "0 auto 1.25rem", borderRadius: "2px", boxShadow: `0 0 12px ${PRIMARY}60` }} />
         <p style={{ fontSize: "0.85rem", fontWeight: 850, color: PRIMARY, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.7rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
         {body && <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, maxWidth: "1050px", margin: "1rem auto 0", lineHeight: 1.5, fontWeight: 500 }}>{body}</p>}
      </div>

      {/* Corporate Grid Segmentation */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "1.5rem", alignContent: "start", maxWidth: "1150px", margin: "0 auto", width: "100%" }}>
        {items.map((it: any, i: number) => {
           const Icon = icons[i % icons.length];
           const ringColor = colors[i % colors.length];
           return (
             <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 * i }} key={i} 
                style={{ background: SURFACE, borderRadius: 20, padding: "2rem 1.75rem", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, position: "relative", overflow: "hidden", display: "flex", gap: "1.25rem", alignItems: "flex-start", zIndex: 1 }}>
                
                {/* Thin Colored Edge Marker */}
                <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "6px", background: ringColor }} />

                {/* Cybernetic Background Watermark Icon */}
                <div style={{ position: "absolute", right: "-5%", bottom: "-15%", opacity: 0.03, zIndex: 0 }}>
                   <Icon size={160} color={ringColor} />
                </div>
                
                {/* Institutional Icon Box */}
                <div style={{ width: 56, height: 56, flexShrink: 0, borderRadius: 16, background: `${ringColor}10`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${ringColor}30`, position: "relative", zIndex: 2 }}>
                   <Icon size={26} color={ringColor} strokeWidth={2.5} />
                </div>
                
                <div style={{ zIndex: 2, paddingTop: "0.25rem" }}>
                   <h3 style={{ fontSize: "1.2rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.5rem", lineHeight: 1.3 }}>{it.title}</h3>
                   <div style={{ width: "2rem", height: "3px", background: `${ringColor}50`, marginBottom: "0.75rem", borderRadius: "2px" }} />
                   <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.5, fontWeight: 500, margin: 0 }}>{it.desc}</p>
                </div>
             </motion.div>
           );
        })}
      </div>
    </motion.div>
  );
}
