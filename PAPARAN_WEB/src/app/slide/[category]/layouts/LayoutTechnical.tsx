import React from "react";
import { Slide, Metric, Feature } from "../components/SlideTypes";

import { Zap, ShieldAlert, Database, Smartphone, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK, PRIMARY_LIGHT } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";
import { getStaticRandom, RANDOM_POOL_XY, RANDOM_POOL_SIZE } from "../components/PurityUtils";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: {title: string, desc: string}[];
  metrics?: {label: string, value: string, unit?: string, trend?: string}[];
  highlights?: string[];
}

/* ── SERVICE LAYOUT ────────────────────────────────────────── */
export function LayoutService({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const serviceIcons = [Smartphone, Zap, CheckSquare, ShieldAlert];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
      <h2 style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", fontWeight: 900, color: TEXT_MAIN, marginBottom: "2.5rem", letterSpacing: "-0.02em" }}>{title}</h2>
      
      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", position: "relative" }}>
        {items.map((item, i) => {
          const { label, rest } = parseBoldLabel(item);
          const SIcon = serviceIcons[i % serviceIcons.length];
          return (
            <motion.div 
              key={i} 
              whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.04)" }}
              style={{ ...GLASS_DARK, borderRadius: 24, padding: "2rem", borderLeft: `6px solid ${PRIMARY}`, cursor: "default", zIndex: 2 }}
            >
              <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", marginBottom: "1.25rem" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <SIcon size={24} color={PRIMARY} />
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 900, color: TEXT_MAIN, margin: 0 }}>{label}</h3>
              </div>
              <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}><InlineText text={rest} /></p>
            </motion.div>
          );
        })}

        {/* Floating Hotspot Map (SVG) */}
        <div style={{ position: "absolute", right: "-10%", top: "0", width: "400px", height: "400px", opacity: 0.15, zIndex: 0, pointerEvents: "none" }}>
           <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%", fill: "none", stroke: GOLD, strokeWidth: 0.5 }}>
              <path d="M50,30 Q70,10 100,30 T150,30 T180,70 T150,120 T100,170 T50,120 T20,70 T50,30" strokeOpacity="0.5" />
              {[
                { x: 100, y: 70 }, { x: 60, y: 90 }, { x: 140, y: 100 }, { x: 90, y: 130 }
              ].map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="3" fill={PRIMARY}>
                  <animate attributeName="r" values="3;8;3" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
                </circle>
              ))}
           </svg>
        </div>
      </div>
    </motion.div>
  );
}

/* ── BIG DATA LAYOUT ────────────────────────────────────────── */
export function LayoutBigData({ title, subtitle, body, metrics, features, highlights }: LayoutProps) {
  const items = features || highlights || parseListItems(body);
  const keywords = ["#SukabumiMenyala", "Potensi PAD", "Infrastruktur", "PelayananPublik", "SmartCity", "IMAN", "AyepZaki", "BobbyMaulana", "Wisata", "EkonomiMandiri"];

  const keywordData = React.useMemo(() => {
    return keywords.map((kw, i) => ({
      text: kw,
      x1: getStaticRandom(i, RANDOM_POOL_XY) * 500,
      x2: getStaticRandom(i + 10, RANDOM_POOL_XY) * 500,
      y1: getStaticRandom(i + 20, RANDOM_POOL_XY) * 400,
      y2: getStaticRandom(i + 30, RANDOM_POOL_XY) * 400,
      fontSize: 1 + getStaticRandom(i, RANDOM_POOL_SIZE) * 2
    }));
  }, [keywords]);

  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "-0.02em", margin: 0 }}>{title}</h2>
      </div>
      
      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: "2.5rem", flex: 1, minHeight: 0 }}>
        <div style={{ ...GLASS_DARK, borderRadius: 32, padding: "3rem", display: "flex", flexDirection: "column", gap: "2rem", position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
           {/* Dynamic Keyword Cloud Simulation */}
           <div style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none" }}>
              {keywordData.map((kw, i) => (
                <motion.div 
                  key={i}
                  animate={{ 
                    x: [kw.x1, kw.x2], 
                    y: [kw.y1, kw.y2],
                    opacity: [0.2, 0.8, 0.2] 
                  }}
                  transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                  style={{ position: "absolute", whiteSpace: "nowrap", fontSize: `${kw.fontSize}rem`, fontWeight: 900, color: GOLD }}
                >
                  {kw.text}
                </motion.div>
              ))}
           </div>

           <div style={{ position: "absolute", top: -40, right: -40, opacity: 0.03 }}>
             <Database size={300} color={GOLD} />
           </div>
           
           <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 10px #10B981" }} />
                <div style={{ fontSize: "0.85rem", fontWeight: 900, color: "#10B981", letterSpacing: "0.1em" }}>REAL-TIME DATA STREAM</div>
              </div>
              <div style={{ fontSize: "2.5rem", fontWeight: 950, color: TEXT_MAIN, marginBottom: "1.5rem", letterSpacing: "-0.03em", lineHeight: 1 }}>Strategic Insights Engine</div>
              <p style={{ fontSize: "1.25rem", color: TEXT_MUTED, lineHeight: 1.8, marginBottom: 0, maxWidth: "600px" }}>{body ? body.replace(/<ul>.*?<\/ul>/, "").trim() : "Menganalisis anomali percakapan dan aliran data statistik secara instan untuk pengambilan keputusan pimpinan yang presisi."}</p>
           </div>
           
           <div style={{ marginTop: "auto", display: "flex", gap: "3rem", flexWrap: "wrap" }}>
              {metrics ? metrics.map((m, i) => (
                <React.Fragment key={i}>
                  <div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + (i * 0.1) }} style={{ fontSize: "2.8rem", fontWeight: 950, color: i % 2 === 0 ? "white" : "#10B981", letterSpacing: "-0.02em" }}>
                      {m.value}
                      {m.unit && <span style={{ fontSize: "1.2rem", color: TEXT_MUTED, marginLeft: "0.2rem" }}>{m.unit}</span>}
                    </motion.div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.2rem" }}>
                      <div style={{ fontSize: "0.75rem", color: GOLD, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase" }}>{m.label}</div>
                      {m.trend && <div style={{ fontSize: "0.6rem", background: "rgba(16,185,129,0.2)", color: "#10B981", padding: "2px 6px", borderRadius: 4, fontWeight: 800 }}>{m.trend}</div>}
                    </div>
                  </div>
                  {i < metrics.length - 1 && <div style={{ width: "2px", background: "rgba(255,255,255,0.1)" }} />}
                </React.Fragment>
              )) : (
                <>
                  <div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ fontSize: "2.8rem", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.02em" }}>2.5k+</motion.div>
                    <div style={{ fontSize: "0.75rem", color: GOLD, fontWeight: 900, letterSpacing: "0.1em" }}>SAMPEL DATA/HARI</div>
                  </div>
                  <div style={{ width: "2px", background: "rgba(255,255,255,0.1)" }} />
                  <div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} style={{ fontSize: "2.8rem", fontWeight: 950, color: "#10B981", letterSpacing: "-0.02em" }}>94%</motion.div>
                    <div style={{ fontSize: "0.75rem", color: GOLD, fontWeight: 900, letterSpacing: "0.1em" }}>AKURASI AI MODEL</div>
                  </div>
                </>
              )}
           </div>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", overflowY: "auto" }} className="custom-scroll">
          {items && items.length > 0 ? items.map((item: any, i: number) => {
            let label = "";
            let rest = "";
            if (typeof item === 'string') {
              const parsed = parseBoldLabel(item);
              label = parsed.label;
              rest = parsed.rest;
            } else if (item.title) {
              label = item.title;
              rest = item.desc;
            } else {
              label = `Insight ${i+1}`;
              rest = item;
            }

            return (
              <motion.div 
                key={i} 
                whileHover={{ x: 10, backgroundColor: "rgba(212,175,55,0.12)" }}
                style={{ ...GLASS_DARK, borderRadius: 24, padding: "1.5rem", borderRight: `5px solid ${GOLD}`, cursor: "default" }}
              >
                <div style={{ fontSize: "1.1rem", fontWeight: 900, color: GOLD, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
                <p style={{ fontSize: "0.95rem", color: TEXT_MAIN, fontWeight: 500, margin: 0, lineHeight: 1.5 }}><InlineText text={rest} /></p>
              </motion.div>
            );
          }) : null}
        </div>
      </div>

      {/* ── LIVE ALERT FEED (NEW v2.0) ────────────────────────── */}
      <div style={{ ...GLASS_DARK, borderRadius: 20, padding: "0.75rem 1.5rem", display: "flex", alignItems: "center", gap: "1.5rem", border: `1px solid ${PRIMARY}33`, overflow: "hidden" }}>
         <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", whiteSpace: "nowrap", flexShrink: 0 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: PRIMARY }}>
               <motion.div animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: "100%", height: "100%", borderRadius: "50%", background: PRIMARY }} />
            </div>
            <span style={{ fontSize: "0.7rem", fontWeight: 900, color: PRIMARY, letterSpacing: "0.15em" }}>LIVE ALERTS</span>
         </div>
         <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
            <motion.div 
              animate={{ x: [1000, -1500] }} 
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              style={{ display: "flex", gap: "3rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", fontWeight: 600, whiteSpace: "nowrap" }}
            >
               <span>[ALERT] Lonjakan isu Jalan Rusak di Baros (+15%)</span>
               <span>[INFO] Trend positif program Sukabumi Creative Hub meningkat</span>
               <span>[CRITICAL] Hoaks terdeteksi terkait distribusi bansos - Segera klarifikasi</span>
               <span>[SYSTEM] Radar AI mencatat 450 percakapan baru dalam 10 menit terakhir</span>
            </motion.div>
         </div>
      </div>
    </motion.div>
  );
}

/* ── CHALLENGES LAYOUT ───────────────────────────────────────── */
export function LayoutChallenges({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
      <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
      <h2 style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", fontWeight: 900, color: TEXT_MAIN, marginBottom: "2.5rem", letterSpacing: "-0.02em" }}>{title}</h2>
      
      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
        {items.map((item, i) => {
          const { label, rest } = parseBoldLabel(item);
          return (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.02 }}
              style={{ background: "rgba(142,21,64,0.08)", border: "1px solid rgba(142,21,64,0.2)", borderRadius: 28, padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem", backdropFilter: "blur(20px)", position: "relative", overflow: "hidden" }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: PRIMARY }} />
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${PRIMARY}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ShieldAlert size={28} color={PRIMARY} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.6rem" }}>{label}</h3>
                <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.7, margin: 0 }}><InlineText text={rest} /></p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── BUDGET LAYOUT ──────────────────────────────────────────── */
export function LayoutBudget({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
      <h2 style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", fontWeight: 900, color: TEXT_MAIN, marginBottom: "3.5rem", letterSpacing: "-0.02em" }}>{title}</h2>
      
      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
        {items.map((item, i) => {
          const { label, rest } = parseBoldLabel(item);
          return (
            <motion.div 
              key={i} 
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              style={{ ...GLASS_DARK, borderRadius: 32, padding: "2.5rem", display: "flex", gap: "2rem", alignItems: "center", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div style={{ width: 72, height: 72, borderRadius: 20, background: "linear-gradient(135deg, #1A2340, #080C18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(255,255,255,0.12)" }}>
                <Database size={34} color={GOLD} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "0.85rem", fontWeight: 900, color: GOLD, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>{label}</h3>
                <p style={{ fontSize: "1.2rem", color: TEXT_MAIN, fontWeight: 800, margin: 0 }}><InlineText text={rest} /></p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
