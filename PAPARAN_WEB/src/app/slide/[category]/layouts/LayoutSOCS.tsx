"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, ShieldCheck, Globe, Activity, LayoutGrid, MessageCircle, 
  Smartphone, Database, Share2, MapPin, CheckCircle, Users,
  Phone, Server, Radio, Network, Workflow, BarChart3, ArrowRight,
  TrendingUp, Clock, Landmark, RadioTower, Target, Plus, Bell,
  ArrowRightLeft, ClipboardCheck, MinusCircle, AlertOctagon, Trash2,
  Star, Building, BarChart2, Home, AlertTriangle, CornerUpLeft, CheckCircle2,
  PieChart
} from "lucide-react";
import { 
  PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, SURFACE, 
  BORDER_REFINED, SHADOW_SM, PRIMARY_LIGHT, SHADOW_LG, GLASS_DARK 
} from "../components/Constants";
import { parseListItems, parseBoldLabel, InlineText } from "../components/Shared";

/* ── BRAND ICONS ─────────────────────────────────────────────────── */
const BrandWA = ({ size, color }: any) => (<svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>);
const BrandFB = ({ size, color }: any) => (<svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>);
const BrandIG = ({ size, color }: any) => (<svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>);
const BrandX = ({ size, color }: any) => (<svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>);
const BrandTiktok = ({ size, color }: any) => (<svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-2.61.9-5.26 2.86-6.97 1.88-1.66 4.61-2.25 7.02-1.55v4.13c-1.14-.17-2.31-.08-3.35.43-1.04.5-1.89 1.41-2.22 2.52-.3 1.02-.19 2.14.32 3.06.51.93 1.47 1.57 2.49 1.77.94.19 1.95.06 2.78-.45.92-.55 1.52-1.48 1.68-2.55.1-1.07.05-5.91.05-15.62z"/></svg>);


interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: any[];
  image?: string;
}

/* ── SOCS HERO LAYOUT (ASYMMETRIC HUD) ─────────────────────── */
export function LayoutSOCSHero({ title, subtitle, body, image }: LayoutProps) {
  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", overflow: "hidden", gap: "5rem" }}>
      {/* Background Decor */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 10% 20%, ${PRIMARY}05 0%, transparent 40%), radial-gradient(circle at 90% 80%, ${GOLD}05 0%, transparent 40%)`, zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, ${PRIMARY}05 1px, transparent 0)`, backgroundSize: "40px 40px", zIndex: 0 }} />

      <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} style={{ flex: 1.2, zIndex: 2 }}>
        <p style={{ fontSize: "0.85rem", fontWeight: 900, color: GOLD, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "1rem" }}>{subtitle}</p>
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 1000, color: TEXT_MAIN, lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.04em" }}><InlineText text={title} /></h1>
        <div style={{ width: 80, height: 4, background: PRIMARY, borderRadius: 2, marginBottom: "2rem" }} />
        <div style={{ fontSize: "1.2rem", color: TEXT_MUTED, lineHeight: 1.75, maxWidth: "650px", marginBottom: "2.5rem" }}><InlineText text={body} /></div>
        
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <p style={{ fontSize: "0.85rem", fontWeight: 700, color: TEXT_MAIN, marginRight: "0.5rem", opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.1em" }}>Layanan Integrasi Publik:</p>
            <div style={{ padding: "12px", background: SURFACE, borderRadius: "50%", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, display: "flex" }}><BrandWA size={18} color={PRIMARY} /></div>
            <div style={{ padding: "12px", background: SURFACE, borderRadius: "50%", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, display: "flex" }}><BrandFB size={18} color={PRIMARY} /></div>
            <div style={{ padding: "12px", background: SURFACE, borderRadius: "50%", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, display: "flex" }}><BrandIG size={18} color={PRIMARY} /></div>
            <div style={{ padding: "12px", background: SURFACE, borderRadius: "50%", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, display: "flex" }}><BrandX size={18} color={PRIMARY} /></div>
            <div style={{ padding: "12px", background: SURFACE, borderRadius: "50%", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, display: "flex" }}><BrandTiktok size={18} color={PRIMARY} /></div>
        </div>
      </motion.div>

      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }} style={{ flex: 1, display: "flex", justifyContent: "center", position: "relative", zIndex: 2 }}>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", width: image ? 460 : 400, height: image ? 460 : 400, borderRadius: "50%", border: `1px dashed ${GOLD}33` }} />
        
        <div style={{ width: image ? 380 : 240, height: image ? 380 : 240, borderRadius: image ? 32 : 60, background: SURFACE, border: `2px solid ${GOLD}44`, boxShadow: SHADOW_LG, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
           
           {image ? (
              <div style={{ width: "100%", height: "100%", borderRadius: "inherit", overflow: "hidden" }}>
                  <img src={image} alt="SOCS Illustration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
           ) : (
              <Zap size={100} color={GOLD} />
           )}

           <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} style={{ position: "absolute", top: image ? -20 : -20, right: image ? -20 : -20, background: SURFACE, padding: "0.75rem", borderRadius: 16, border: `1px solid ${GOLD}66`, boxShadow: SHADOW_SM, zIndex: 10 }}>
              <Activity size={32} color={GOLD} />
           </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── SOCS ARCHITECTURE LAYOUT (TIERED MODEL) ────────────────── */
export function LayoutSOCSArchitecture({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const ICONS = [Smartphone, Database, Server]; 
  const COLORS = [PRIMARY, GOLD, TEXT_MAIN];
  
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "3rem", textAlign: "center" }}>
         <p style={{ fontSize: "0.85rem", fontWeight: 900, color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em", marginBottom: "2rem" }}>{title}</h2>
      </div>
      
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center", justifyContent: "center" }}>
         {items.slice(0, 3).map((it: any, i: number) => {
            let label = ""; let rest = "";
            if (typeof it === 'string') {
                const parsed = parseBoldLabel(it);
                label = parsed.label || `Lapisan ${i+1}`;
                rest = parsed.rest || it;
            }
            const Icon = ICONS[i % ICONS.length];
            const activeColor = COLORS[i % COLORS.length];

            return (
               <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2, duration: 0.5 }} 
                   style={{ 
                       width: "950px", maxWidth: "100%", padding: "2rem 3rem", borderRadius: 24, 
                       background: SURFACE, border: `1px solid ${BORDER_REFINED}`, 
                       borderLeft: `8px solid ${activeColor}`, boxShadow: SHADOW_LG, 
                       display: "flex", gap: "2.5rem", alignItems: "center", position: "relative", overflow: "hidden" 
                   }}>
                  
                  <div style={{ position: "absolute", right: -30, top: "50%", transform: "translateY(-50%)", opacity: 0.04 }}>
                      <Icon size={250} color={activeColor} />
                  </div>

                  <div style={{ width: 80, height: 80, borderRadius: 24, background: `${activeColor}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                     <Icon size={40} color={activeColor} />
                  </div>
                  
                  <div style={{ zIndex: 1, textAlign: "left" }}>
                     <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>{label}</h3>
                     <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, lineHeight: 1.6 }}>{rest}</p>
                  </div>
               </motion.div>
            )
         })}
      </div>
    </div>
  );
}

/* ── SOCS TOPOLOGY LAYOUT (HUB DESIGN) ─────────────────────── */
export function LayoutSOCSTopology({ title, subtitle, body }: LayoutProps) {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 950, color: TEXT_MAIN }}>{title}</h2>
        <p style={{ color: TEXT_MUTED, marginTop: "1rem" }}>{subtitle}</p>
      </div>
      <div style={{ position: "relative", width: 400, height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
         <motion.div animate={{ rotate: 360, scale: [1, 1.05, 1] }} transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }} style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", border: `2px dashed ${PRIMARY}44` }} />
         <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", width: "130%", height: "130%", borderRadius: "50%", border: `1px solid ${PRIMARY}11` }} />
         
         <div style={{ width: 180, height: 180, background: SURFACE, borderRadius: 50, border: `4px solid ${PRIMARY}`, boxShadow: "0 0 50px rgba(4, 120, 87, 0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
            <Network size={60} color={PRIMARY} />
            <div style={{ fontSize: "0.7rem", fontWeight: 900, color: PRIMARY, marginTop: "0.75rem", letterSpacing: "0.1em" }}>CORE SOCS</div>
         </div>

         {/* Decentralized Nodes */}
         {[0, 90, 180, 270].map((angle, i) => (
           <motion.div key={i} animate={{ y: [0, -10, 0] }} transition={{ delay: i * 0.5, duration: 3, repeat: Infinity }} style={{ position: "absolute", transform: `rotate(${angle}deg) translateY(-180px) rotate(-${angle}deg)`, width: 60, height: 60, borderRadius: 16, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: SHADOW_SM, zIndex: 1 }}>
              <Database size={24} color={GOLD} />
           </motion.div>
         ))}
      </div>
    </div>
  );
}

/* ── SOCS FLOWCHART LAYOUT (PROCESS PATH) ───────────────────── */
export function LayoutSOCSFlowchart({ title, subtitle, body }: LayoutProps) {
    const steps = parseListItems(body);
    const ICONS = [Database, Workflow, Server, Activity, CheckCircle];
    
    // Bureaucratic tone execution colors
    const prim = "#1e3a8a"; // Authoritative Navy
    const sec = "#b45309"; // Institutional Gold
    
    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: "3rem", textAlign: "center" }}>
                <p style={{ fontSize: "0.85rem", fontWeight: 900, color: sec, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
                <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
            </div>
            
            <div style={{ flex: 1, position: "relative", display: "flex", gap: "1.5rem", alignItems: "stretch", justifyContent: "center", padding: "0 2rem" }}>
                <div style={{ position: "absolute", top: "35px", left: "12%", right: "12%", height: "2px", background: `linear-gradient(90deg, ${prim}20, ${sec}20)`, borderRadius: 2, zIndex: 0 }} />

                {steps.map((item: any, i: number) => {
                    let label = ""; let rest = "";
                    if (typeof item === 'string') {
                        const parsed = parseBoldLabel(item);
                        label = parsed.label;
                        rest = parsed.rest;
                    }

                    const Icon = ICONS[i % ICONS.length];

                    return (
                        <motion.div key={i} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.15, duration: 0.6, type: "spring", stiffness: 80 }} style={{ flex: 1, maxWidth: "310px", position: "relative", zIndex: 1, display: "flex", flexDirection: "column" }}>
                            
                            <div style={{ width: 70, height: 70, borderRadius: "16px", background: SURFACE, border: `1px solid ${prim}30`, boxShadow: `0 10px 25px -5px ${prim}15`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem", position: "relative" }}>
                                <Icon size={26} color={prim} />
                                <div style={{ position: "absolute", top: -8, right: -8, width: 24, height: 24, borderRadius: "50%", background: sec, color: "#fff", fontSize: "0.75rem", fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", border: `2px solid ${SURFACE}`, boxShadow: `0 2px 5px ${sec}40` }}>
                                    {i + 1}
                                </div>
                            </div>

                            <div style={{ flex: 1, background: SURFACE, border: `1px solid ${BORDER_REFINED}`, borderTop: `4px solid ${prim}`, borderRadius: 24, padding: "1.75rem", boxShadow: SHADOW_SM, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                                <div style={{ position: "absolute", top: -5, right: -5, fontSize: "6rem", fontWeight: 1000, color: `${prim}05`, lineHeight: 1, zIndex: 0, pointerEvents: "none" }}>{i + 1}</div>
                                
                                <div style={{ position: "relative", zIndex: 1 }}>
                                    <h3 style={{ fontSize: "1.05rem", fontWeight: 900, color: TEXT_MAIN, lineHeight: 1.4, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>{label}</h3>
                                    <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.65, fontWeight: 500 }}>{rest}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

/* ── SOCS DASHBOARD LAYOUT (BENTO METRICS) ─────────────────── */
export function LayoutSOCSDashboard({ title, subtitle, body }: LayoutProps) {
  const statCards = [
    { num: "19", label: "Belum Diteruskan", icon: Clock, color: "#f59e0b", bg: "#fef3c7" },
    { num: "493", label: "Dikembalikan", icon: CornerUpLeft, color: "#f59e0b", bg: "#fef3c7" },
    { num: "1.590", label: "Disposisi", icon: ArrowRightLeft, color: "#8b5cf6", bg: "#ede9fe" },
    { num: "17.836", label: "Verifikasi", icon: ClipboardCheck, color: "#0ea5e9", bg: "#e0f2fe" },
    { num: "4.868", label: "Progress", icon: Activity, color: "#f97316", bg: "#ffedd5" },
    { num: "117.655", label: "Selesai", icon: CheckCircle2, color: "#22c55e", bg: "#dcfce7" },
    { num: "11.417", label: "Tidak Layak", icon: MinusCircle, color: "#64748b", bg: "#f1f5f9" },
    { num: "7.261", label: "Bukan Wewenang", icon: AlertOctagon, color: "#ef4444", bg: "#fee2e2" },
    { num: "3.385", label: "Spam", icon: Trash2, color: "#ec4899", bg: "#fce7f3" },
    { num: "1.273", label: "Rating Aduan", icon: Star, color: "#eab308", bg: "#fef08a" },
  ];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "1rem" }}>
         <p style={{ fontSize: "0.8rem", fontWeight: 900, color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.25rem" }}>{subtitle}</p>
         <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
      </div>
      
      {/* Dasbhoard App Container */}
      <div style={{ flex: 1, display: "flex", borderRadius: 20, overflow: "hidden", background: "#f8fafc", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_LG, fontFamily: "Inter, sans-serif" }}>
          
          {/* SIDEBAR */}
          <div style={{ width: "220px", background: PRIMARY, color: "#FFF", display: "flex", flexDirection: "column", flexShrink: 0 }}>
              <div style={{ padding: "1.25rem", borderBottom: `1px solid rgba(255,255,255,0.1)`, display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <img src="/Logo_Sukabumi.png" alt="Pemkot Logo" style={{ height: "42px", objectFit: "contain" }} />
                  <div style={{ fontWeight: 800, fontSize: "1.1rem", lineHeight: 1.1 }}>SOCS<br/><span style={{ color: GOLD, fontSize: "0.75rem" }}>KOTA SUKABUMI</span></div>
              </div>
              <div style={{ padding: "1.25rem 1rem", display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1, overflowY: "auto" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", background: "rgba(255,255,255,0.15)", borderRadius: 8, color: "#FFF", fontWeight: 600, fontSize: "0.8rem" }}>
                      <Home size={16} color={GOLD} /> Beranda
                  </div>
                  {[
                      { text: "Aduan", icon: MessageCircle },
                      { text: "Aduan Darurat", icon: AlertTriangle },
                      { text: "Instansi Terpadu", icon: Building },
                      { text: "Statistik", icon: BarChart2 },
                      { text: "Data Master", icon: Database },
                  ].map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", color: "rgba(255,255,255,0.7)", fontWeight: 500, fontSize: "0.8rem", cursor: "pointer" }}>
                          <item.icon size={16} /> {item.text}
                      </div>
                  ))}
              </div>
          </div>

          {/* MAIN CONTENT */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#f1f5f9" }}>
              
              {/* TOP HEADER */}
              <div style={{ height: "60px", background: "#FFF", borderBottom: `1px solid ${BORDER_REFINED}`, display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "space-between", padding: "0 1.5rem", flexShrink: 0 }}>
                  <div style={{ background: "#ef4444", color: "#FFF", padding: "6px 12px", borderRadius: 6, fontSize: "0.8rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px", boxShadow: "0 2px 4px rgba(239, 68, 68, 0.2)", cursor: "pointer" }}>
                      <Plus size={16} /> Tambah Aduan Darurat
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                      <Bell size={18} color={TEXT_MUTED} />
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <div style={{ textAlign: "right" }}>
                              <div style={{ fontSize: "0.8rem", fontWeight: 800, color: PRIMARY }}>Pimpinan Daerah</div>
                              <div style={{ fontSize: "0.7rem", color: TEXT_MUTED }}>Pemkot Sukabumi</div>
                          </div>
                          <div style={{ width: 32, height: 32, borderRadius: "50%", background: PRIMARY, color: "#FFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 900 }}>
                              PD
                          </div>
                      </div>
                  </div>
              </div>

              {/* DASHBOARD AREA */}
              <div style={{ flex: 1, padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1.25rem", overflowY: "auto" }}>
                  
                  {/* STAT CARDS GRID */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem" }}>
                      {statCards.map((c, i) => (
                          <div key={i} style={{ background: "#FFF", borderRadius: 12, padding: "1rem", border: `1px solid ${BORDER_REFINED}`, display: "flex", alignItems: "center", gap: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                              <div style={{ width: 38, height: 38, borderRadius: 10, background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                  <c.icon size={18} color={c.color} />
                              </div>
                              <div>
                                  <div style={{ fontSize: "1.1rem", fontWeight: 850, color: c.color, lineHeight: 1.1 }}>{c.num}</div>
                                  <div style={{ fontSize: "0.65rem", fontWeight: 650, color: TEXT_MUTED, marginTop: "2px" }}>{c.label}</div>
                              </div>
                          </div>
                      ))}
                  </div>

                  {/* SPLIT CHARTS ROW */}
                  <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1.2fr", gap: "1rem", flex: 1, minHeight: 0 }}>
                      
                      {/* LINE CHART */}
                      <div style={{ background: "#FFF", borderRadius: 12, border: `1px solid ${BORDER_REFINED}`, display: "flex", flexDirection: "column", overflow: "hidden", minHeight: "220px", boxShadow: "0 4px 10px rgba(0,0,0,0.02)" }}>
                          <div style={{ padding: "0.75rem 1.25rem", borderBottom: `1px solid ${BORDER_REFINED}`, display: "flex", alignItems: "center", gap: "8px", background: PRIMARY, color: "#FFF" }}>
                              <BarChart2 size={16} color="#FFF" />
                              <div style={{ fontSize: "0.8rem", fontWeight: 700 }}>Statistik Aduan Terpadu (1 Bulan Terakhir)</div>
                          </div>
                          <div style={{ flex: 1, padding: "1.5rem", position: "relative" }}>
                              {/* Y-Axis Grid Lines */}
                              <div style={{ position: "absolute", inset: "1rem 1.5rem 1.5rem 3.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between", pointerEvents: "none" }}>
                                  {[100, 80, 60, 40, 20, 0].map(val => (
                                      <div key={val} style={{ borderBottom: `1px solid #f1f5f9`, width: "100%", position: "relative" }}>
                                          <span style={{ position: "absolute", left: "-25px", top: "-6px", fontSize: "0.6rem", color: "#94a3b8", fontWeight: 600 }}>{val}</span>
                                      </div>
                                  ))}
                              </div>
                              {/* SVG Line Chart */}
                              <div style={{ position: "absolute", inset: "1rem 1.5rem 1.5rem 3.5rem" }}>
                                  <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none">
                                      <defs>
                                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                                              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                                          </linearGradient>
                                      </defs>
                                      <path 
                                          d="M 0,60 C 20,65 35,140 60,150 C 90,160 105,75 130,65 C 160,50 170,140 190,145 C 220,150 240,165 260,160 C 280,150 290,135 320,140 C 350,145 375,50 400,30 C 420,15 440,115 460,100 C 480,85 510,75 540,80 C 570,85 585,130 610,120 C 640,105 650,60 680,80 C 700,95 725,145 750,130 C 780,110 800,140 820,130 C 850,120 860,50 890,60 C 920,70 940,150 960,130 C 980,115 990,110 1000,160" 
                                          fill="none" stroke="#2563eb" strokeWidth="2.5" vectorEffect="non-scaling-stroke" 
                                      />
                                      <path 
                                          d="M 0,60 C 20,65 35,140 60,150 C 90,160 105,75 130,65 C 160,50 170,140 190,145 C 220,150 240,165 260,160 C 280,150 290,135 320,140 C 350,145 375,50 400,30 C 420,15 440,115 460,100 C 480,85 510,75 540,80 C 570,85 585,130 610,120 C 640,105 650,60 680,80 C 700,95 725,145 750,130 C 780,110 800,140 820,130 C 850,120 860,50 890,60 C 920,70 940,150 960,130 C 980,115 990,110 1000,160 L 1000,200 L 0,200 Z" 
                                          fill="url(#chartGrad)" 
                                      />
                                      {[
                                          {x:0, y:60}, {x:60, y:150}, {x:130, y:65}, {x:190, y:145},
                                          {x:260, y:160}, {x:320, y:140}, {x:400, y:30}, {x:460, y:100},
                                          {x:540, y:80}, {x:610, y:120}, {x:680, y:80}, {x:750, y:130},
                                          {x:820, y:130}, {x:890, y:60}, {x:960, y:130}, {x:1000, y:160}
                                      ].map((p, i) => (
                                          <circle key={i} cx={p.x} cy={p.y} r="4" fill="#FFF" stroke="#2563eb" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                                      ))}
                                  </svg>
                              </div>
                          </div>
                      </div>

                      {/* SIDE PANEL: PIE & TOP TOPICS */}
                      <div style={{ background: "#FFF", borderRadius: 12, border: `1px solid ${BORDER_REFINED}`, display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.02)" }}>
                          <div style={{ padding: "0.6rem 1rem", borderBottom: `1px solid ${BORDER_REFINED}`, display: "flex", alignItems: "center", gap: "8px", background: PRIMARY, color: "#FFF" }}>
                              <PieChart size={14} color="#FFF" />
                              <div style={{ fontSize: "0.75rem", fontWeight: 700 }}>Distribusi Kanal & Topik</div>
                          </div>
                          
                          {/* PIE CHART SECTION */}
                          <div style={{ padding: "0.8rem 1rem", display: "flex", alignItems: "center", gap: "0.8rem", flexShrink: 0 }}>
                              <div style={{ width: "70px", height: "70px", flexShrink: 0 }}>
                                  {/* Adding transform rotate -90 to start at top */}
                                  <svg width="100%" height="100%" viewBox="0 0 42 42" style={{ transform: "rotate(-90deg)" }}>
                                     <circle cx="21" cy="21" r="15.91549430" fill="none" stroke="#2563eb" strokeWidth="6" strokeDasharray="45 55" strokeDashoffset="0" />
                                     <circle cx="21" cy="21" r="15.91549430" fill="none" stroke="#10b981" strokeWidth="6" strokeDasharray="30 70" strokeDashoffset="-45" />
                                     <circle cx="21" cy="21" r="15.91549430" fill="none" stroke="#f59e0b" strokeWidth="6" strokeDasharray="25 75" strokeDashoffset="-75" />
                                     <text x="21" y="21" fill="#1e293b" fontSize="7" fontWeight="900" textAnchor="middle" dy="2.5" style={{ transform: "rotate(90deg)", transformOrigin: "21px 21px" }}>4k+</text>
                                  </svg>
                              </div>
                              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                                  {[
                                    { l: "SP4N-LAPOR", v: "45%", c: "#2563eb" },
                                    { l: "Media Sosial", v: "30%", c: "#10b981" },
                                    { l: "Pemda Direct", v: "25%", c: "#f59e0b" }
                                  ].map(lg => (
                                      <div key={lg.l} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.65rem", fontWeight: 700 }}>
                                          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                              <div style={{ width: 8, height: 8, borderRadius: 2, background: lg.c }} />
                                              <span style={{ color: TEXT_MUTED }}>{lg.l}</span>
                                          </div>
                                          <span>{lg.v}</span>
                                      </div>
                                  ))}
                              </div>
                          </div>

                          {/* TOP TOPIK SECTION */}
                          <div style={{ padding: "0.8rem 1rem", borderTop: `1px dashed ${BORDER_REFINED}`, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", background: "#f8fafc" }}>
                              <div style={{ fontSize: "0.65rem", fontWeight: 800, marginBottom: "8px", color: TEXT_MAIN }}>Top Topik Isu (1 Bulan)</div>
                              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                 {[
                                   { l: "Infrastruktur & Jalan", v: 85, c: "#2563eb" },
                                   { l: "Bansos Rakyat", v: 65, c: "#10b981" },
                                   { l: "Layanan Kesehatan", v: 45, c: "#f59e0b" },
                                 ].map(t => (
                                     <div key={t.l}>
                                         <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.6rem", fontWeight: 700, marginBottom: "4px" }}>
                                             <span>{t.l}</span><span>{t.v}%</span>
                                         </div>
                                         <div style={{ width: "100%", height: "4px", background: "#e2e8f0", borderRadius: 2, overflow: "hidden" }}>
                                             <div style={{ width: `${t.v}%`, height: "100%", background: t.c, borderRadius: 2 }} />
                                         </div>
                                     </div>
                                 ))}
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
/* ── SOCS CHANNELS LAYOUT (GLASS CARDS) ───────────────────── */
export function LayoutSOCSChannels({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const CHANNELS = [
    { icon: MessageCircle, color: "#25D366", tag: "WHATSAPP" },
    { icon: Share2, color: PRIMARY, tag: "SOCIAL MEDIA" },
    { icon: Globe, color: "#1E293B", tag: "WEB PORTAL" },
    { icon: Phone, color: GOLD, tag: "VOICE/SMS" },
    { icon: Smartphone, color: "#4338CA", tag: "OFFLINE" }
  ];
  return (
    <div style={{ height: "100%" }}>
      <div style={{ marginBottom: "3rem" }}>
         <p style={{ fontSize: "0.8rem", fontWeight: 900, color: GOLD, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.5rem" }}>KANAL AKSESIBILITAS</p>
         <h2 style={{ fontSize: "3rem", fontWeight: 1000, marginBottom: "0.5rem", color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
         <p style={{ fontSize: "1.1rem", color: TEXT_MUTED }}>{subtitle}</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
        {items.map((item: any, i: number) => {
          const { label, rest } = parseBoldLabel(item);
          const config = CHANNELS[i % CHANNELS.length];
          const Icon = config.icon;
          return (
            <motion.div key={i} whileHover={{ y: -8, borderColor: config.color }} style={{ background: SURFACE, borderRadius: 24, padding: "2rem", border: `1px solid ${BORDER_REFINED}`, boxShadow: SHADOW_SM, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: config.color + "08" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: config.color + "11", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={24} color={config.color} />
                </div>
                <div style={{ fontSize: "0.65rem", fontWeight: 1000, color: config.color, background: config.color + "11", padding: "4px 10px", borderRadius: 8, letterSpacing: "0.05em" }}>{config.tag}</div>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 850, color: TEXT_MAIN, marginBottom: "0.75rem" }}>{label}</h3>
              <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6 }}>{rest}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ── SOCS PARADIGM SHIFT LAYOUT (CUSTOM FOR SLIDE 2) ────────── */
export function LayoutSOCSParadigm({ title, subtitle, body }: LayoutProps) {
    const items = parseListItems(body);
    const parsed1 = items[0] ? parseBoldLabel(items[0]) : {label: "", rest: ""};
    const parsed2 = items[1] ? parseBoldLabel(items[1]) : {label: "", rest: ""};
    const parsed3 = items[2] ? parseBoldLabel(items[2]) : {label: "", rest: ""};

    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: "2.5rem", textAlign: "left" }}>
                <p style={{ fontSize: "0.85rem", fontWeight: 900, color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
                <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
            </div>
            
            <div style={{ flex: 1, display: "flex", gap: "2rem" }}>
                {/* LEFT SIDE: THE CHALLENGES */}
                <div style={{ flex: 1.1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} style={{ flex: 1, background: SURFACE, borderRadius: 24, padding: "2.5rem", border: `1px solid ${BORDER_REFINED}`, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ position: "absolute", top: 0, left: 0, width: "6px", height: "100%", background: "#f59e0b" }} />
                        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1.25rem" }}>
                            <div style={{ padding: "12px", background: "#fef3c7", borderRadius: 16 }}><MessageCircle size={28} color="#d97706" /></div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 850, color: TEXT_MAIN }}>{parsed1.label}</h3>
                        </div>
                        <div style={{ fontSize: "1rem", color: TEXT_MUTED, lineHeight: 1.6 }}><InlineText text={parsed1.rest} /></div>
                    </motion.div>

                    <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} style={{ flex: 1, background: SURFACE, borderRadius: 24, padding: "2.5rem", border: `1px solid ${BORDER_REFINED}`, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ position: "absolute", top: 0, left: 0, width: "6px", height: "100%", background: "#e11d48" }} />
                        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1.25rem" }}>
                            <div style={{ padding: "12px", background: "#ffe4e6", borderRadius: 16 }}><Zap size={28} color="#be123c" /></div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 850, color: TEXT_MAIN }}>{parsed2.label}</h3>
                        </div>
                        <div style={{ fontSize: "1rem", color: TEXT_MUTED, lineHeight: 1.6 }}><InlineText text={parsed2.rest} /></div>
                    </motion.div>
                </div>

                {/* MIDDLE CONNECTOR */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "80px" }}>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring", stiffness: 200 }} style={{ width: 64, height: 64, borderRadius: "50%", background: `${PRIMARY}15`, display: "flex", alignItems: "center", justifyContent: "center", border: `2px dashed ${PRIMARY}44` }}>
                        <ArrowRight size={32} color={PRIMARY} />
                    </motion.div>
                </div>

                {/* RIGHT SIDE: THE SOLUTION */}
                <div style={{ flex: 1.5, display: "flex", flexDirection: "column" }}>
                    <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }} style={{ flex: 1, background: `linear-gradient(135deg, ${PRIMARY}, #065f46)`, borderRadius: 32, padding: "4rem", position: "relative", overflow: "hidden", boxShadow: SHADOW_LG, color: "#FFF", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "400px", height: "400px", background: `radial-gradient(circle, #fff 0%, transparent 60%)`, opacity: 0.08, pointerEvents: "none" }} />
                        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2.5rem", position: "relative", zIndex: 1 }}>
                            <div style={{ padding: "18px", background: "rgba(255,255,255,0.2)", borderRadius: 20, backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.4)" }}>
                                <ShieldCheck size={48} color="#FFF" />
                            </div>
                            <h3 style={{ fontSize: "2.2rem", fontWeight: 950, lineHeight: 1.2 }}>{parsed3.label}</h3>
                        </div>
                        <div style={{ fontSize: "1.15rem", opacity: 0.9, lineHeight: 1.8, fontWeight: 400, position: "relative", zIndex: 1 }}><InlineText text={parsed3.rest} /></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

/* ── SOCS SLA TIMELINE LAYOUT (EXECUTIVE STAGGER) ───────────── */
export function LayoutSOCS_SLA({ title, subtitle, body }: LayoutProps) {
    const items = parseListItems(body);
    const prim = "#1e3a8a"; // Navy
    const sec = "#b45309"; // Gold
    
    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: "2.5rem", textAlign: "left", paddingLeft: "1.5rem", borderLeft: `6px solid ${sec}` }}>
                <p style={{ fontSize: "0.85rem", fontWeight: 900, color: sec, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 1000, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{title}</h2>
            </div>
            
            <div style={{ flex: 1, position: "relative", paddingLeft: "4rem", display: "flex", flexDirection: "column", gap: "1.25rem", justifyContent: "center", maxWidth: "1200px" }}>
                {/* Thick Connective Institutional Line */}
                <div style={{ position: "absolute", left: "20px", top: "20px", bottom: "20px", width: "4px", background: `linear-gradient(180deg, ${prim}, ${sec}, #0f766e)`, borderRadius: "2px", opacity: 0.8 }} />

                {items.map((item: any, i: number) => {
                    let label = ""; let rest = "";
                    if (typeof item === 'string') {
                        const parsed = parseBoldLabel(item);
                        label = parsed.label;
                        rest = parsed.rest;
                    }

                    const activeColor = i % 2 === 0 ? prim : sec;

                    return (
                        <motion.div key={i} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.15, duration: 0.5 }} 
                            style={{ position: "relative", background: SURFACE, padding: "1.5rem 2.5rem", borderRadius: "16px", border: `1px solid ${activeColor}30`, borderLeft: `6px solid ${activeColor}`, boxShadow: SHADOW_SM, display: "flex", alignItems: "center", gap: "2rem", overflow: "visible" }}>
                            
                            {/* Decorative Watermark Number (placed beneath content) */}
                            <div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", fontSize: "7rem", fontWeight: 1000, color: `${activeColor}06`, lineHeight: 1, zIndex: 0, pointerEvents: "none" }}>{i + 1}</div>

                            {/* Number Badge */}
                            <div style={{ position: "absolute", left: "-2rem", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px", borderRadius: "10px", background: SURFACE, border: `2px solid ${activeColor}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 10px ${activeColor}40`, zIndex: 2 }}>
                                <span style={{ fontSize: "1.1rem", fontWeight: 950, color: activeColor }}>0{i+1}</span>
                            </div>

                            <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
                                <h3 style={{ fontSize: "1.2rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>{label}</h3>
                                <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, fontWeight: 500, margin: 0 }}>{rest}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

/* ── SOCS HIERARCHY LAYOUT (CUSTOM VERTICAL FLOW) ───────────── */
export function LayoutSOCSHierarchy({ title, subtitle, features }: LayoutProps) {
    const nodes = features || [];
    const prim = "#1e3a8a"; // Navy
    const sec = "#b45309"; // Gold
    const teal = "#0f766e"; // Teal

    return (
        <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "visible" }}>
            {/* Header - Compacted Margin */}
            <div style={{ textAlign: "center", marginBottom: "1.5rem", zIndex: 1, position: "relative" }}>
                <p style={{ fontSize: "0.8rem", fontWeight: 900, color: sec, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.25rem" }}>{subtitle}</p>
                <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "-0.02em", marginBottom: "0" }}>{title}</h2>
            </div>

            {/* Diagram Container - Mathematical Grid 
                - rowGap: 25px (determines vertical line length)
                - columnGap: 40px (determines horizontal line length)
                - Center column is 380px wide to restrict height of text block
            */}
            <div style={{ flex: 1, width: "100%", maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 380px 1fr", gridTemplateRows: "auto auto auto", columnGap: "40px", rowGap: "25px", alignItems: "center", position: "relative", paddingBottom: "1rem" }}>
                
                {/* --- ROW 1: PIMPINAN DAERAH --- */}
                <div /> {/* Left Empty */}
                <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", zIndex: 2 }}>
                    
                    <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
                        {/* Avatar Core - Scaled Down */}
                        <div style={{ width: 60, height: 60, background: "#FFF", border: `2px solid ${prim}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: SHADOW_SM, position: "relative", zIndex: 2 }}>
                            <Landmark size={28} color={prim} />
                        </div>
                        {/* Title Badge - Minimalist Formal */}
                        <div style={{ background: prim, color: "#FFF", padding: "0.5rem 1.5rem", borderRadius: "99px", fontWeight: 800, letterSpacing: "0.05em", fontSize: "0.95rem", boxShadow: SHADOW_SM, position: "relative", zIndex: 2 }}>
                            PIMPINAN DAERAH
                        </div>
                    </motion.div>

                    {/* Vertical Connector 1 (Spans rowGap) */}
                    <div style={{ position: "absolute", bottom: "-25px", left: "50%", transform: "translateX(-50%)", width: "3px", height: "25px", overflow: "hidden", zIndex: 1, borderRadius: "2px" }}>
                        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.2 }} style={{ width: "100%", height: "100%", background: `linear-gradient(180deg, ${prim}, ${teal})`, position: "absolute", transformOrigin: "top" }} />
                    </div>

                </div>
                <div /> {/* Right Empty */}

                {/* --- ROW 2: DISKOMINFO & SP4N LAPOR --- */}
                <div /> {/* Left Empty */}
                
                <div style={{ position: "relative", zIndex: 3, width: "100%" }}>
                    
                    {/* Diskominfo Card - Formal Style */}
                    <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }} style={{ width: "100%", background: "#FFF", border: `1px solid ${BORDER_REFINED}`, borderTop: `4px solid ${teal}`, borderRadius: "16px", padding: "1.25rem", boxShadow: SHADOW_SM, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 2 }}>
                        <div style={{ width: 44, height: 44, borderRadius: "12px", background: `${teal}10`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${teal}30`, marginBottom: "0.75rem" }}>
                            <RadioTower size={22} color={teal} />
                        </div>
                        <h3 style={{ fontSize: "1.05rem", fontWeight: 850, color: TEXT_MAIN, marginBottom: "0.4rem", lineHeight: 1.3 }}>{nodes[0]?.title || "Dinas Komunikasi dan Informatika"}</h3>
                        <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.5, fontWeight: 500, margin: 0 }}>{nodes[0]?.desc}</p>
                    </motion.div>

                    {/* Horizontal Connector to SP4N (Spans columnGap) */}
                    <div style={{ position: "absolute", right: "-40px", top: "50%", transform: "translateY(-50%)", width: "40px", height: "3px", overflow: "hidden", zIndex: 1, borderRadius: "2px" }}>
                        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4 }} style={{ width: "100%", height: "100%", background: `linear-gradient(90deg, ${teal}, ${sec})`, position: "absolute", transformOrigin: "left" }} />
                        <motion.div animate={{ backgroundPosition: ["0px 0px", "10px 0px"] }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(90deg, #FFF 50%, transparent 50%)`, backgroundSize: "8px 3px", opacity: 0.5 }} />
                    </div>

                    {/* Vertical Connector 2 (Spans rowGap) */}
                    <div style={{ position: "absolute", bottom: "-25px", left: "50%", transform: "translateX(-50%)", width: "3px", height: "25px", overflow: "hidden", zIndex: 1, borderRadius: "2px" }}>
                        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.6 }} style={{ width: "100%", height: "100%", background: `linear-gradient(180deg, ${teal}, #334155)`, position: "absolute", transformOrigin: "top" }} />
                    </div>

                </div>

                <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
                    {/* SP4N Lapor Card - Formal Style */}
                    <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} style={{ width: "100%", maxWidth: "340px", background: "#FDFDFD", border: `1px solid ${sec}30`, borderTop: `4px solid ${sec}`, borderRadius: "16px", padding: "1.25rem", boxShadow: SHADOW_SM, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative" }}>
                        
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.75rem", position: "relative", zIndex: 1 }}>
                            <img src="/images/Span_lapor.png" alt="Logo SP4N-LAPOR" style={{ height: "40px", objectFit: "contain", filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.05))" }} />
                        </div>
                        <h3 style={{ fontSize: "1rem", fontWeight: 850, color: TEXT_MAIN, margin: 0 }}>Sistem SP4N-LAPOR!</h3>
                        <p style={{ fontSize: "0.8rem", color: TEXT_MUTED, lineHeight: 1.5, fontWeight: 500, marginTop: "0.4rem" }}>Basis Rekam Pengaduan Ekosistem Pusat Secara Nasional.</p>
                    </motion.div>
                </div>

                {/* --- ROW 3: OPD --- */}
                <div /> {/* Left Empty */}
                
                <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
                    {/* OPD Card - Formal Style */}
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} style={{ width: "100%", background: "#F8FAFC", border: `1px solid #E2E8F0`, borderBottom: `4px solid #334155`, borderRadius: "16px", padding: "1.25rem", boxShadow: SHADOW_SM, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                        
                        <div style={{ width: 44, height: 44, borderRadius: "12px", background: "#FFF", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid #CBD5E1`, marginBottom: "0.75rem", boxShadow: "0 2px 5px rgba(0,0,0,0.02)" }}>
                            <Users size={22} color="#334155" />
                        </div>
                        <h3 style={{ fontSize: "1.05rem", fontWeight: 850, color: TEXT_MAIN, marginBottom: "0.4rem", lineHeight: 1.3 }}>{nodes[1]?.title || "Organisasi Perangkat Daerah"}</h3>
                        <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.5, fontWeight: 500, margin: 0 }}>{nodes[1]?.desc}</p>
                    </motion.div>
                </div>
                
                <div /> {/* Right Empty */}

            </div>
        </div>
    );
}
