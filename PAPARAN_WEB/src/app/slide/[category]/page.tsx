"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import {
  Globe, FileText, ShieldAlert, Users, BarChart3, Share2, Star, Bell, Zap,
  GraduationCap, Cpu, ArrowLeft, ArrowRight, Maximize, Minimize, Menu, X,
  Crown, Lightbulb, Building2, CheckCircle2, Database, ShieldCheck,
  Smartphone, Monitor, Book, Heart, Mic, Coffee, Play, MessageSquare,
  Search, ChevronRight, Camera, Clock, Calendar as CalendarIcon, Quote,
  TrendingUp, Target, Filter, Layers, Radio, AlertTriangle, Award,
  ChevronDown, ChevronUp, Eye, ThumbsUp, ThumbsDown, Minus,
} from "lucide-react";
import styles from "./slide.module.css";
import masterData from "../../master-data.json";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  body: string;
  layout: string;
  icon?: string;
}

const iconMap: Record<string, any> = {
  Globe, FileText, ShieldAlert, Users, BarChart3, Share2, Star, Bell, Zap,
  GraduationCap, Cpu, MessageSquare, Search, Crown, Lightbulb, Building2,
  ShieldCheck, Database, Smartphone, Monitor, Book, Heart, Mic, Coffee, Play,
  CheckCircle2, ChevronRight, Camera, Clock, Quote, TrendingUp, Target,
  Filter, Layers, Radio, AlertTriangle, Award, Eye, ThumbsUp, ThumbsDown,
};

const PRIMARY = "#C41E5B";
const GOLD = "#D4AF37";
const PRIMARY_LIGHT = "rgba(196,30,91,0.18)";
const DARK_CARD = "rgba(255,255,255,0.04)";
const DARK_BORDER = "rgba(255,255,255,0.08)";
const TEXT_MAIN = "rgba(255,255,255,0.92)";
const TEXT_MUTED = "rgba(255,255,255,0.5)";
const TEXT_SUBTLE = "rgba(255,255,255,0.3)";

export default function SlidePage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const slides: Slide[] = (masterData as any)[category] || [];
  const totalSlides = slides.length;

  function navigate(dir: "next" | "prev") {
    setDirection(dir);
    setAnimKey((k) => k + 1);
    if (dir === "next") setCurrentSlide((p) => Math.min(p + 1, totalSlides - 1));
    else setCurrentSlide((p) => Math.max(p - 1, 0));
  }

  function jumpToSlide(index: number) {
    setDirection(index > currentSlide ? "next" : "prev");
    setAnimKey((k) => k + 1);
    setCurrentSlide(index);
    setShowSidebar(false);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.key === "ArrowRight" || e.key === " ") && currentSlide < totalSlides - 1) {
        e.preventDefault(); navigate("next");
      } else if (e.key === "ArrowLeft" && currentSlide > 0) {
        e.preventDefault(); navigate("prev");
      } else if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault(); setShowSearch(true);
      } else if (e.key === "Escape") {
        setShowSidebar(false);
        setShowSearch(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    const onFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  if (slides.length === 0) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", gap: "1rem" }}>
        <h1>Kategori tidak ditemukan</h1>
        <Link href="/" style={{ color: PRIMARY, fontWeight: 600 }}>← Kembali</Link>
      </div>
    );
  }

  const slide = slides[currentSlide];
  const progress = ((currentSlide + 1) / totalSlides) * 100;
  const IconComp = iconMap[slide.icon || "FileText"] || FileText;

  // ── Parse list items from <ul>…</ul> HTML ──
  function parseListItems(html: string): string[] {
    return html
      .replace(/^<ul>|<\/ul>$/g, "")
      .split("</li>")
      .map((s) => s.replace(/^<li>/, "").trim())
      .filter(Boolean);
  }

  function parseBoldLabel(text: string): { label: string; rest: string } {
    const m = text.match(/^<b>(.*?)<\/b>([\s\S]*)/);
    if (m) return { label: m[1].replace(/<.*?>/g, ""), rest: m[2].trim().replace(/^:\s*/, "") };
    const m2 = text.match(/^\*\*(.*?)\*\*([\s\S]*)/);
    if (m2) return { label: m2[1], rest: m2[2].trim().replace(/^:\s*/, "") };
    return { label: "", rest: text };
  }

  function InlineText({ text }: { text: string }) {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return (
      <span>
        {parts.map((p, i) => {
          if (p.startsWith("**") && p.endsWith("**")) return <strong key={i}>{p.slice(2, -2)}</strong>;
          if (p.startsWith("*") && p.endsWith("*")) return <em key={i}>{p.slice(1, -1)}</em>;
          return p;
        })}
      </span>
    );
  }

  // ── VISUAL RENDERERS per layout ──────────────────────────────────
  function renderSlideBody(slide: Slide) {
    const { layout, body, title, subtitle } = slide;
    const isList = body.startsWith("<ul>");
    const items = isList ? parseListItems(body) : [];

    // ── CHART — interactive data visualization ───────────────────────
    if (layout === "chart") {
      const colors = [PRIMARY, GOLD, "#10B981", "#3B82F6", "#8B5CF6", "#F59E0B"];
      const data = items.map((item, i) => {
        const { label, rest } = parseBoldLabel(item);
        const valMatch = rest.match(/(\d+)/);
        const value = valMatch ? parseInt(valMatch[0]) : 0;
        return { label: label || `Item ${i+1}`, value, color: colors[i % colors.length], suffix: rest.replace(valMatch ? valMatch[0] : "", "").trim() };
      });
      const maxValue = Math.max(...data.map(d => d.value), 10);

      return (
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: "0.4rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: TEXT_MAIN, marginBottom: "2rem", letterSpacing: "-0.01em" }}>{title}</h2>
          
          <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 24, padding: "2.5rem", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "2.5rem", height: "100%", minHeight: "260px", paddingBottom: "2rem" }}>
              {data.map((d, i) => (
                <div key={i} data-item={String(i)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                  <div style={{ position: "relative", width: "100%", height: "200px", display: "flex", alignItems: "flex-end" }}>
                    <div 
                      style={{ 
                        width: "100%", 
                        height: "0%", // Start at 0 for animation
                        animation: `chartGrow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.15 + 0.5}s forwards`,
                        background: `linear-gradient(180deg, ${d.color}, ${d.color}cc)`, 
                        borderRadius: "10px 10px 4px 4px",
                        position: "relative",
                        boxShadow: `0 4px 20px ${d.color}33`,
                        border: "1px solid rgba(255,255,255,0.1)"
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.2)"; e.currentTarget.style.transform = "scaleY(1.02)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; e.currentTarget.style.transform = "scaleY(1)"; }}
                    >
                      <div style={{ position: "absolute", top: -35, left: "50%", transform: "translateX(-50%)", fontSize: "1.1rem", fontWeight: 900, color: "white", whiteSpace: "nowrap", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                        {d.value}{d.suffix}
                      </div>
                    </div>
                  </div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: TEXT_MUTED, textAlign: "center", textTransform: "uppercase", letterSpacing: "0.05em", maxWidth: "80px" }}>{d.label}</div>
                </div>
              ))}
            </div>
            {/* Legend / Info */}
            <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: "0.85rem", color: TEXT_SUBTLE, textAlign: "center", fontStyle: "italic" }}>
              {body.replace(/<ul>.*?<\/ul>/, "").trim() || "Data diolah per Maret 2026. Target fiskal 2029 diproyeksikan tumbuh 12% YoY."}
            </div>
          </div>
          <style>{`
            @keyframes chartGrow {
              from { height: 0%; }
              to { height: var(--h); }
            }
          `}</style>
          {data.map((d, i) => (
             <style key={i}>{`[data-item="${i}"] > div > div { --h: ${(d.value / maxValue) * 100}%; }`}</style>
          ))}
        </div>
      );
    }

    // ── MAP — district geographic view ───────────────────────────────
    if (layout === "map") {
      const markers = items.map((item, i) => {
        const { label, rest } = parseBoldLabel(item);
        // Randomish positions for Sukabumi districts (simplified)
        const coords = [
          { x: 35, y: 35 }, { x: 55, y: 30 }, { x: 75, y: 40 },
          { x: 25, y: 65 }, { x: 45, y: 70 }, { x: 65, y: 80 }, { x: 80, y: 60 }
        ];
        return { label, rest, ...coords[i % coords.length], color: i % 2 === 0 ? PRIMARY : GOLD };
      });

      return (
        <div style={{ height: "100%" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: "0.4rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 800, color: TEXT_MAIN, marginBottom: "1rem", letterSpacing: "-0.01em" }}>{title}</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "2rem", alignItems: "start" }}>
            {/* Map Viz */}
            <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: 24, border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden", position: "relative", height: "400px", boxShadow: "inset 0 0 40px rgba(0,0,0,0.4)" }}>
              {/* Decorative grid */}
              <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize:"20px 20px" }} />
              
              <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%", filter: "drop-shadow(0 0 20px rgba(196,30,91,0.1))" }}>
                {/* Simplified Sukabumi Outline */}
                <path d="M20,40 C15,20 40,10 60,15 C85,20 95,45 85,75 C75,95 40,95 25,85 C10,75 15,55 20,40 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                
                {markers.map((m, i) => (
                  <g key={i} style={{ cursor: "pointer", transition: "all 0.3s ease" }}>
                    <circle cx={m.x} cy={m.y} r="2.5" fill={m.color} style={{ animation: `pulse 2s ease ${i * 0.4}s infinite` }} />
                    <circle cx={m.x} cy={m.y} r="6" fill="transparent" stroke={m.color} strokeWidth="0.3" opacity="0.3" />
                  </g>
                ))}
              </svg>

              {/* District Tooltip (Simulation) */}
              <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", background: "rgba(15,23,42,0.9)", border: `1px solid ${GOLD}`, padding: "0.75rem 1rem", borderRadius: "12px", backdropFilter: "blur(12px)", animation: "float-up 3s ease-in-out infinite" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: GOLD }} />
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: GOLD, letterSpacing: "0.05em" }}>LIVE INSIGHT</span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "white", fontWeight: 600 }}>Cikundul Hot Springs</div>
                <div style={{ fontSize: "0.7rem", color: TEXT_MUTED }}>Region: Lembursitu</div>
              </div>
            </div>

            {/* List side */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {markers.map((m, i) => (
                <div key={i} data-item={String(i)} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "0.85rem 1rem", borderLeft: `4px solid ${m.color}` }}>
                  <div style={{ fontWeight: 800, fontSize: "0.85rem", color: "white", marginBottom: "0.2rem" }}>{m.label}</div>
                  <div style={{ fontSize: "0.75rem", color: TEXT_MUTED, lineHeight: 1.5 }}>{m.rest}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    if (layout === "hero") {
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem 0", gap: "1.5rem" }}>
          <div style={{ position:"relative" }}>
            {/* Glow ring behind icon */}
            <div style={{ position:"absolute", inset:-12, borderRadius:"50%", background:"radial-gradient(circle,rgba(196,30,91,0.3) 0%,transparent 70%)", animation:"orb-pulse 3s ease-in-out infinite" }} />
            <div style={{ width:96, height:96, borderRadius:"50%", background:`linear-gradient(135deg, ${PRIMARY}, #8E1540)`, display:"flex", alignItems:"center", justifyContent:"center", animation:"icon-glow 3s ease-in-out infinite", position:"relative" }}>
              <IconComp size={44} color="white" />
            </div>
          </div>
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>
              {subtitle}
            </p>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: TEXT_MAIN, lineHeight: 1.15, marginBottom: "1.25rem", letterSpacing: "-0.02em", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              {title}
            </h1>
            <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
              {body}
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <div style={{ height: 3, width: 40, borderRadius: 2, background: PRIMARY }} />
            <div style={{ height: 3, width: 16, borderRadius: 2, background: GOLD }} />
            <div style={{ height: 3, width: 8, borderRadius: 2, background: "rgba(255,255,255,0.1)" }} />
          </div>
        </div>
      );
    }

    // ── CARDS — visual icon cards ─────────────────────────────────────
    if (layout === "cards" || layout === "kol" || layout === "spokesperson") {
      const icons = [Globe, FileText, ShieldCheck, Zap, Star, Target, Layers, CheckCircle2];
      return (
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: TEXT_MAIN, marginBottom: "1.5rem", letterSpacing: "-0.02em", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1rem" }}>
            {items.map((item, i) => {
              const { label, rest } = parseBoldLabel(item);
              const CardIcon = icons[i % icons.length];
              return (
                <div key={i} data-item={String(i)} style={{ background: DARK_CARD, border: `1px solid ${DARK_BORDER}`, borderRadius: 16, padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(142,21,64,0.12)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <CardIcon size={18} color={PRIMARY} />
                    </div>
                    {label && <span style={{ fontWeight: 700, fontSize: "0.9rem", color: GOLD }}>{label}</span>}
                  </div>
                  {rest && <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.65, margin: 0 }}><InlineText text={rest} /></p>}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // ── ORGCHART — decision flow ──────────────────────────────────────
    if (layout === "orgchart") {
      return (
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: "0.4rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 800, color: TEXT_MAIN, marginBottom: "1.5rem", letterSpacing: "-0.01em", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{title}</h2>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
            {/* Top node */}
            <div style={{ background: `linear-gradient(135deg,${PRIMARY},#8E1540)`, color: "white", borderRadius: 16, padding: "0.9rem 2rem", fontWeight: 800, fontSize: "0.95rem", boxShadow: `0 8px 32px rgba(142,21,64,0.45)`, textAlign: "center", border: "1px solid rgba(255,255,255,0.15)" }}>
              🏛️ Wali Kota Sukabumi
            </div>
            {/* Arrow down */}
            <div style={{ width: 2, height: 28, background: `linear-gradient(${PRIMARY},${GOLD})` }} />
            {/* Middle row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "1rem", alignItems: "center", width: "100%" }}>
              {items.slice(0, 1).map((item, i) => {
                const { label, rest } = parseBoldLabel(item);
                return (
                  <div key={i} data-item={String(i)} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${PRIMARY}`, borderRadius: 14, padding: "0.85rem 1rem", textAlign: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}>
                    <p style={{ fontWeight: 800, fontSize: "0.85rem", color: PRIMARY, margin: "0 0 0.25rem", letterSpacing: "0.02em" }}>{label || "Pimpinan"}</p>
                    {rest && <p style={{ fontSize: "0.78rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.5 }}><InlineText text={rest} /></p>}
                  </div>
                );
              })}
              {/* Center arrow down */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ width: 2, height: 32, background: GOLD, opacity: 0.6 }} />
                <ChevronRight size={16} color={GOLD} style={{ transform: "rotate(90deg)" }} />
              </div>
              {items.slice(1, 2).map((item, i) => {
                const { label, rest } = parseBoldLabel(item);
                return (
                  <div key={i} data-item={String(i+1)} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${GOLD}`, borderRadius: 14, padding: "0.85rem 1rem", textAlign: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}>
                    <p style={{ fontWeight: 800, fontSize: "0.85rem", color: GOLD, margin: "0 0 0.25rem", letterSpacing: "0.02em" }}>{label || "Instansi"}</p>
                    {rest && <p style={{ fontSize: "0.78rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.5 }}><InlineText text={rest} /></p>}
                  </div>
                );
              })}
            </div>
            {/* Bottom node */}
            {items[2] && (
              <>
                <div style={{ width: 2, height: 24, background: "rgba(255,255,255,0.1)" }} />
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "0.85rem 1.5rem", width: "75%", textAlign: "center", backdropFilter: "blur(8px)" }}>
                  {(() => { const { label, rest } = parseBoldLabel(items[2]); return (
                    <>
                      <p style={{ fontWeight: 800, fontSize: "0.85rem", color: TEXT_MAIN, margin: "0 0 0.2rem" }}>{label || "Unit Pelaksana"}</p>
                      {rest && <p style={{ fontSize: "0.78rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.5 }}><InlineText text={rest} /></p>}
                    </>
                  ); })()}
                </div>
              </>
            )}
          </div>
        </div>
      );
    }

    // ── FORMULA — percentage donut bars ───────────────────────────────
    if (layout === "formula") {
      const pcts = [60, 30, 10];
      const colors = [PRIMARY, GOLD, "#9CA3AF"];
      const icons2 = [TrendingUp, Share2, Heart];
      return (
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: "0.4rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: TEXT_MAIN, marginBottom: "1.5rem", letterSpacing: "-0.01em", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }}>
            {items.map((item, i) => {
              const { label, rest } = parseBoldLabel(item);
              const Ic2 = icons2[i % 3];
              return (
                <div key={i} data-item={String(i)} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 24, padding: "1.5rem 1rem", textAlign: "center", border: i === 0 ? `1.5px solid ${PRIMARY}` : i === 1 ? `1.5px solid ${GOLD}` : `1.5px solid rgba(255,255,255,0.1)`, boxShadow: "0 8px 32px rgba(0,0,0,0.25)", backdropFilter: "blur(8px)" }}>
                  {/* Big pct ring */}
                  <div style={{ position: "relative", width: 80, height: 80, margin: "0 auto 1.25rem" }}>
                    <svg viewBox="0 0 80 80" style={{ transform: "rotate(-90deg)", width: "100%", height: "100%" }}>
                      <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                      <circle cx="40" cy="40" r="34" fill="none" stroke={colors[i % 3]} strokeWidth="8"
                        strokeDasharray={`${2 * Math.PI * 34 * pcts[i] / 100} ${2 * Math.PI * 34 * (1 - pcts[i] / 100)}`}
                        strokeLinecap="round" style={{ transition: "stroke-dasharray 1.5s ease" }} />
                    </svg>
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                      <span style={{ fontWeight: 900, fontSize: "1.3rem", color: colors[i % 3], lineHeight: 1 }}>{pcts[i]}%</span>
                    </div>
                  </div>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: i === 0 ? `${PRIMARY}22` : i === 1 ? `${GOLD}22` : "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <Ic2 size={16} color={colors[i % 3]} />
                  </div>
                  <p style={{ fontWeight: 800, fontSize: "0.9rem", color: colors[i % 3], margin: "0 0 0.4rem", letterSpacing: "0.012em" }}>{label}</p>
                  <p style={{ fontSize: "0.8rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.6 }}><InlineText text={rest} /></p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // ── SENTIMENT — gauge bars ────────────────────────────────────────
    if (layout === "sentiment") {
      const sentColors = ["#10B981", "#D4AF37", "#EF4444"];
      const sentIcons = [ThumbsUp, Minus, ThumbsDown];
      const sentPcts = [80, 15, 5];
      return (
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: "0.4rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: TEXT_MAIN, marginBottom: "1.5rem", letterSpacing: "-0.01em", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{title}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {items.map((item, i) => {
              const { label, rest } = parseBoldLabel(item);
              const SIcon = sentIcons[i % 3];
              return (
                <div key={i} data-item={String(i)} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 18, padding: "1.25rem 1.75rem", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.85rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: `${sentColors[i % 3]}15`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${sentColors[i % 3]}40` }}>
                        <SIcon size={20} color={sentColors[i % 3]} />
                      </div>
                      <span style={{ fontWeight: 800, fontSize: "1rem", color: TEXT_MAIN, letterSpacing: "0.01em" }}>{label}</span>
                    </div>
                    <span style={{ fontWeight: 900, fontSize: "1.2rem", color: sentColors[i % 3], fontFamily: "monospace" }}>{sentPcts[i]}%</span>
                  </div>
                  {/* Progress bar */}
                  <div style={{ height: 10, borderRadius: 6, background: "rgba(255,255,255,0.05)", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ height: "100%", width: `${sentPcts[i]}%`, borderRadius: 6, background: `linear-gradient(90deg, ${sentColors[i % 3]}, ${sentColors[i % 3]}BB)`, transition: "width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)", boxShadow: `0 0 12px ${sentColors[i % 3]}50` }} />
                  </div>
                  {rest && <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, margin: "0.75rem 0 0", lineHeight: 1.65 }}><InlineText text={rest} /></p>}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // ── TIMELINE — step flow ──────────────────────────────────────────
    if (layout === "timeline") {
      return (
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: "0.4rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: TEXT_MAIN, marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>{title}</h2>
          <div style={{ position: "relative", paddingLeft: "3rem" }}>
            {/* Vertical line with gradient glow */}
            <div style={{ position: "absolute", left: "1.1rem", top: 8, bottom: 8, width: 2, background: `linear-gradient(${PRIMARY},${GOLD})`, borderRadius: 1, boxShadow: `0 0 10px ${PRIMARY}44` }} />
            {items.map((item, i) => {
              const { label, rest } = parseBoldLabel(item);
              return (
                <div key={i} data-item={String(i)} style={{ position: "relative", marginBottom: i < items.length - 1 ? "1.5rem" : 0, display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  {/* Circle node */}
                  <div style={{ position: "absolute", left: "-2.35rem", top: 0, width: 40, height: 40, borderRadius: "50%", background: i === 0 ? PRIMARY : i === items.length - 1 ? GOLD : "#1A1A2E", border: `3px solid ${i === 0 ? PRIMARY : GOLD}`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, boxShadow: `0 0 15px ${i === 0 ? PRIMARY : GOLD}33`, flexShrink: 0 }}>
                    <span style={{ fontWeight: 900, fontSize: "0.85rem", color: "white" }}>{i + 1}</span>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 18, padding: "1.25rem 1.5rem", border: `1px solid ${i === 0 ? `${PRIMARY}40` : "rgba(255,255,255,0.08)"}`, flex: 1, boxShadow: "0 8px 32px rgba(0,0,0,0.15)", backdropFilter: "blur(4px)" }}>
                    {label && <p style={{ fontWeight: 800, fontSize: "1rem", color: i === 0 ? PRIMARY : GOLD, margin: "0 0 0.35rem", letterSpacing: "0.01em" }}>{label}</p>}
                    {rest && <p style={{ fontSize: "0.9rem", color: TEXT_MAIN, margin: 0, lineHeight: 1.7, opacity: 0.85 }}><InlineText text={rest} /></p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // ── BIGDATA — metric cards with icons ─────────────────────────────
    if (layout === "bigdata") {
      const metricIcons = [Database, BarChart3, TrendingUp, Target, Filter];
      return (
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: "0.4rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: TEXT_MAIN, marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>{title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1.25rem" }}>
            {items.map((item, i) => {
              const { label, rest } = parseBoldLabel(item);
              const MI = metricIcons[i % metricIcons.length];
              const isDark = i % 2 === 0;
              return (
                <div key={i} data-item={String(i)} style={{ background: isDark ? `linear-gradient(145deg, ${PRIMARY}, #8E1540)` : "rgba(255,255,255,0.03)", borderRadius: 24, padding: "1.75rem", color: "white", border: isDark ? "none" : `1px solid rgba(255,255,255,0.1)`, boxShadow: isDark ? `0 12px 32px rgba(142,21,64,0.3)` : "0 8px 24px rgba(0,0,0,0.15)", display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100%" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: isDark ? "rgba(255,255,255,0.15)" : `${PRIMARY}18`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <MI size={30} color={isDark ? "white" : PRIMARY} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 900, fontSize: "1.1rem", margin: "0 0 0.6rem", color: isDark ? "white" : GOLD, letterSpacing: "-0.01em" }}>{label}</p>
                    <p style={{ fontSize: "0.85rem", margin: 0, lineHeight: 1.65, color: isDark ? "rgba(255,255,255,0.8)" : TEXT_MUTED }}><InlineText text={rest} /></p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // ── KPI_GRID — big number cards ───────────────────────────────────
    if (layout === "kpi_grid") {
      const kpiIcons = [Clock, TrendingUp, Target];
      return (
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: "0.4rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: TEXT_MAIN, marginBottom: "1.5rem" }}>{title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.25rem", marginBottom: "1.25rem" }}>
            {items.map((item, i) => {
              const { label, rest } = parseBoldLabel(item);
              const KI = kpiIcons[i % 3];
              // Try to extract big number if present
              const numMatch = rest.match(/(\d+%|\d+ Miliar|\d+,\d+%|≥ \d+%|⭐)/);
              const bigNum = numMatch ? numMatch[0] : "";
              const restText = bigNum ? rest.replace(bigNum, "").trim() : rest;

              return (
                <div key={i} data-item={String(i)} style={{ background: i === 0 ? `linear-gradient(145deg,${PRIMARY},#8E1540)` : i === 1 ? `linear-gradient(145deg,#312E81, #1E1B4B)` : `linear-gradient(145deg,${GOLD},#927210)`, borderRadius: 24, padding: "1.75rem", textAlign: "center", color: "white", boxShadow: "0 12px 32px rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <KI size={32} color="rgba(255,255,255,0.8)" style={{ marginBottom: "0.75rem" }} />
                  {bigNum && <div style={{ fontSize: "2.5rem", fontWeight: 900, lineHeight: 1, marginBottom: "0.5rem", letterSpacing: "-0.03em", textShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>{bigNum}</div>}
                  <p style={{ fontWeight: 800, fontSize: "1rem", color: "white", margin: "0 0 0.5rem", letterSpacing: "0.01em" }}>{label}</p>
                  <p style={{ fontSize: "0.85rem", opacity: 0.8, margin: 0, lineHeight: 1.6 }}><InlineText text={restText} /></p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // ── SERVICE — horizontal service rows ────────────────────────────
    if (layout === "service") {
      const svcIcons = [Smartphone, Monitor, Globe, Zap, MessageSquare, CheckCircle2];
      return (
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: "0.4rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: TEXT_MAIN, marginBottom: "1.5rem" }}>{title}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {items.map((item, i) => {
              const { label, rest } = parseBoldLabel(item);
              const SI = svcIcons[i % svcIcons.length];
              return (
                <div key={i} data-item={String(i)} style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", background: "rgba(255,255,255,0.03)", borderRadius: 16, padding: "1.1rem 1.5rem", border: `1px solid rgba(255,255,255,0.08)`, transition: "transform 0.2s, background 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateX(8px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; (e.currentTarget as HTMLElement).style.transform = ""; }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: i % 2 === 0 ? `${PRIMARY}22` : `${GOLD}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${i % 2 === 0 ? PRIMARY : GOLD}44` }}>
                    <SI size={22} color={i % 2 === 0 ? "#FF4D8D" : GOLD} />
                  </div>
                  <div style={{ flex: 1 }}>
                    {label && <p style={{ fontWeight: 800, fontSize: "1rem", color: i % 2 === 0 ? "white" : GOLD, margin: "0 0 0.3rem", letterSpacing: "0.01em" }}>{label}</p>}
                    {rest && <p style={{ fontSize: "0.88rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.65 }}><InlineText text={rest} /></p>}
                  </div>
                  <div style={{ height: 48, display: "flex", alignItems: "center" }}>
                    <ChevronRight size={18} color={TEXT_SUBTLE} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // ── BUDGET — cost breakdown bars ─────────────────────────────────
    if (layout === "budget") {
      const budgetIcons = [Monitor, Layers, Users, Database];
      return (
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: "0.4rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: TEXT_MAIN, marginBottom: "1.5rem" }}>{title}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {items.map((item, i) => {
              const { label, rest } = parseBoldLabel(item);
              const BI = budgetIcons[i % budgetIcons.length];
              const widths = [85, 65, 50, 40];
              return (
                <div key={i} data-item={String(i)} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 18, padding: "1.25rem 1.75rem", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "0.75rem" }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: `${PRIMARY}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <BI size={18} color={PRIMARY} />
                    </div>
                    <p style={{ fontWeight: 800, fontSize: "1rem", color: TEXT_MAIN, margin: 0 }}>{label}</p>
                  </div>
                  <div style={{ height: 10, borderRadius: 5, background: "rgba(255,255,255,0.05)", overflow: "hidden", marginBottom: "0.75rem", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ height: "100%", width: `${widths[i % 4]}%`, borderRadius: 5, background: `linear-gradient(90deg,${PRIMARY},${GOLD})`, boxShadow: `0 0 10px ${PRIMARY}44` }} />
                  </div>
                  {rest && <p style={{ fontSize: "0.88rem", color: TEXT_MUTED, margin: 0, lineHeight: 1.65 }}><InlineText text={rest} /></p>}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // ── CHALLENGES — orange warning cards ────────────────────────────
    if (layout === "challenges") {
      const chalIcons = [AlertTriangle, Radio, Layers, ShieldAlert];
      return (
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: "0.4rem" }}>{subtitle}</p>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: TEXT_MAIN, marginBottom: "1.5rem" }}>{title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.25rem" }}>
            {items.map((item, i) => {
              const { label, rest } = parseBoldLabel(item);
              const CI = chalIcons[i % chalIcons.length];
              const isWarning = label.includes("🔴") || label.includes("Penting") || label.includes("Prioritas");
              return (
                <div key={i} data-item={String(i)} style={{ background: isWarning ? "rgba(196,30,91,0.06)" : "rgba(212,175,55,0.06)", borderRadius: 20, padding: "1.5rem", border: `1px solid ${isWarning ? PRIMARY : GOLD}44`, display: "flex", flexDirection: "column", gap: "0.75rem", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: isWarning ? `${PRIMARY}22` : `${GOLD}22`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${isWarning ? PRIMARY : GOLD}33` }}>
                      <CI size={22} color={isWarning ? PRIMARY : GOLD} />
                    </div>
                    {label && <span style={{ fontWeight: 900, fontSize: "1rem", color: isWarning ? "white" : GOLD, margin: 0, letterSpacing: "0.01em" }}>{label}</span>}
                  </div>
                  {rest && <p style={{ fontSize: "0.88rem", color: TEXT_MAIN, opacity: 0.8, margin: 0, lineHeight: 1.65 }}><InlineText text={rest} /></p>}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // ── CLOSING ───────────────────────────────────────────────────────
    if (layout === "closing") {
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem 0", gap: "1.5rem" }}>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[...Array(3)].map((_, i) => (
              <Star key={i} size={32} fill={GOLD} color={GOLD} style={{ animation: `pulse 1.5s ease ${i * 0.3}s infinite`, filter: `drop-shadow(0 0 10px ${GOLD}55)` }} />
            ))}
          </div>
          <div data-item="0">
            <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.25em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "white", lineHeight: 1.15, marginBottom: "1.5rem", letterSpacing: "-0.02em", textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>{title}</h1>
            <p style={{ fontSize: "1.1rem", color: TEXT_MUTED, maxWidth: 640, margin: "0 auto", lineHeight: 1.8 }}>{body}</p>
          </div>
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }} data-item="1">
            <div style={{ height: 4, width: 80, borderRadius: 2, background: PRIMARY, boxShadow: `0 0 10px ${PRIMARY}66` }} />
            <div style={{ height: 4, width: 30, borderRadius: 2, background: GOLD, boxShadow: `0 0 10px ${GOLD}66` }} />
            <div style={{ height: 4, width: 12, borderRadius: 2, background: "rgba(255,255,255,0.1)" }} />
          </div>
          <div data-item="2" style={{ marginTop: "1rem", padding: "0.85rem 2.5rem", borderRadius: 50, border: `1px solid ${PRIMARY}55`, background: "rgba(196,30,91,0.1)", boxShadow: `0 8px 32px ${PRIMARY}15` }}>
            <p style={{ fontWeight: 800, color: "white", fontSize: "0.95rem", margin: 0, letterSpacing: "0.05em" }}>SUKABUMI IMAN · 2025–2029</p>
          </div>
        </div>
      );
    }

    // ── DEFAULT fallback — clean list ─────────────────────────────────
    return (
      <div>
        <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: "0.4rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: TEXT_MAIN, marginBottom: "1.5rem" }}>{title}</h2>
        {isList ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {items.map((item, i) => {
              const { label, rest } = parseBoldLabel(item);
              return (
                <div key={i} data-item={String(i)} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "rgba(255,255,255,0.02)", padding: "1rem", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${PRIMARY}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${PRIMARY}44` }}>
                    <span style={{ fontWeight: 900, fontSize: "0.8rem", color: "white" }}>{i + 1}</span>
                  </div>
                  <div>
                    {label && <span style={{ fontWeight: 800, color: GOLD, fontSize: "0.95rem" }}>{label}: </span>}
                    <span style={{ color: TEXT_MAIN, opacity: 0.85, lineHeight: 1.7, fontSize: "0.95rem" }}><InlineText text={rest} /></span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p style={{ color: TEXT_MAIN, opacity: 0.8, lineHeight: 1.8, fontSize: "1.05rem", background: "rgba(255,255,255,0.03)", padding: "1.5rem", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)" }}><InlineText text={body} /></p>
        )}
      </div>
    );
  }

  const animationStyle: React.CSSProperties = {
    animation: `${direction === "next" ? "slideInRight" : "slideInLeft"} 0.4s cubic-bezier(0.34,1.2,0.64,1) both`,
  };

  return (
    <main className={styles.container} style={isFullscreen ? { position: "fixed", inset: 0, zIndex: 9999, background: "var(--bg-color)" } : {}}>
      {/* Progress bar */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>

      {/* Sidebar overlay */}
      {showSidebar && <div className={styles.sidebarOverlay} onClick={() => setShowSidebar(false)} />}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${showSidebar ? styles.sidebarOpen : ""}`}>
        <div className={styles.sidebarHeader}>
          <span>DAFTAR SLIDE</span>
          <button onClick={() => setShowSidebar(false)} className={styles.sidebarClose}><X size={20} /></button>
        </div>
        <div style={{ padding: "0 1rem 1rem" }}>
          <div style={{ position: "relative", marginBottom: "1rem" }}>
            <Search size={14} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: TEXT_MUTED }} />
            <input 
              type="text" 
              placeholder="Cari slide..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: "100%", padding: "0.6rem 0.6rem 0.6rem 2.2rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "white", fontSize: "0.85rem", outline: "none" }}
            />
          </div>
        </div>

        <div className={styles.sidebarList}>
          {slides.map((s: Slide, i: number) => {
            const isMatch = !searchQuery || s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
            if (!isMatch) return null;
            return (
              <button key={s.id} onClick={() => jumpToSlide(i)} className={`${styles.sidebarItem} ${currentSlide === i ? styles.sidebarItemActive : ""}`}>
                <span className={styles.sidebarNum}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.sidebarTitle}>{s.title}</span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Header */}
      <header className={styles.formalHeader}>
        <div className={styles.headerLeft}>
          <button onClick={() => setShowSidebar(true)} className={styles.menuBtn} title="Daftar Slide (Menu)"><Menu size={20} /></button>
          <button onClick={() => setShowSearch(true)} className={styles.menuBtn} style={{ marginLeft: "-0.5rem" }} title="Pencarian Cepat (Cmd+K)"><Search size={18} /></button>
          <div className={styles.logoPlaceholder}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: PRIMARY, fontWeight: 700, fontSize: "0.9rem" }}>
              <ArrowLeft size={16} />Beranda
            </Link>
          </div>
          <div className={styles.headerText}>
            <span className={styles.orgName}>Kota Sukabumi</span>
            <span className={styles.docTitle}>{category.replace(/_/g, " ").toUpperCase()}</span>
          </div>
        </div>
        <div className={styles.headerRight}>
          <span className={styles.slideNumberBadge}>{currentSlide + 1} / {totalSlides}</span>
          <button onClick={toggleFullscreen} className={styles.fullscreenBtn}>
            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>
        </div>
      </header>

      {/* Slide area */}
      <div style={{ position: "relative", zIndex: 1, padding: "5rem 1.5rem 5rem", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Ambient orb behind card */}
        <div style={{ position:"fixed", bottom:"-20%", right:"-10%", width:"50vw", height:"50vw", borderRadius:"50%", background:"radial-gradient(circle,rgba(212,175,55,0.07) 0%,transparent 70%)", pointerEvents:"none", animation:"orb-pulse 8s ease-in-out 2s infinite" }} />
        <div
          key={animKey}
          style={{
            ...animationStyle,
            background: "rgba(13,18,37,0.85)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: 24,
            padding: "clamp(1.75rem,4vw,2.75rem)",
            width: "100%",
            maxWidth: "920px",
            boxShadow: "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.07)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top accent bar with glow */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${PRIMARY},${GOLD})`, boxShadow: `0 0 20px rgba(212,175,55,0.4)` }} />
          {/* Scan line effect */}
          <div style={{ position:"absolute", left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,rgba(196,30,91,0.15),transparent)", animation:"scan-line 5s linear infinite", zIndex:2 }} />
          {/* Shimmer sweep on card entry */}
          <div key={`shimmer-${animKey}`} style={{ position:"absolute", top:0, bottom:0, width:"30%", background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.03),transparent)", animation:"shimmer-sweep 0.8s ease forwards", zIndex:2, pointerEvents:"none" }} />

          {renderSlideBody(slide)}

          {/* Page watermark */}
          <div style={{ position: "absolute", bottom: "1rem", right: "1.5rem", fontSize: "6rem", fontWeight: 900, color: "rgba(255,255,255,0.03)", lineHeight: 1, userSelect: "none", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            {String(currentSlide + 1).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className={styles.nav}>
        <button onClick={() => navigate("prev")} disabled={currentSlide === 0} className={`${styles.btn} ${currentSlide > 0 ? styles.primaryBtn : ""}`} style={currentSlide === 0 ? { opacity: 0.4, cursor: "not-allowed" } : {}}>
          <ArrowLeft size={18} />Prev
        </button>

        <div style={{ display: "flex", gap: "0.35rem", alignItems: "center" }}>
          {slides.slice(0, Math.min(totalSlides, 20)).map((_: any, i: number) => (
            <div key={i} onClick={() => jumpToSlide(i)} style={{ width: currentSlide === i ? 24 : 8, height: 8, borderRadius: 4, background: currentSlide === i ? PRIMARY : "#D1D5DB", cursor: "pointer", transition: "all 0.3s ease" }} />
          ))}
          {totalSlides > 20 && <span style={{ fontSize: "0.75rem", color: "#9CA3AF", marginLeft: "0.25rem" }}>+{totalSlides - 20}</span>}
        </div>

        <button onClick={() => navigate("next")} disabled={currentSlide === totalSlides - 1} className={`${styles.btn} ${currentSlide < totalSlides - 1 ? styles.primaryBtn : ""}`} style={currentSlide === totalSlides - 1 ? { opacity: 0.4, cursor: "not-allowed" } : {}}>
          Next<ArrowRight size={18} />
        </button>
      </div>

      {/* Footer */}
      <footer className={styles.formalFooter}>
        <span>© 2026 Pemerintah Kota Sukabumi</span>
        <span>Portal Paparan Strategis</span>
        <span>Slide {currentSlide + 1} dari {totalSlides}</span>
      </footer>

      {/* Search Overlay (Command Menu) */}
      {showSearch && (
        <div 
          onClick={() => setShowSearch(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)", zIndex: 10000, display: "flex", alignItems: "start", justifyContent: "center", padding: "10vh 1rem" }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{ width: "100%", maxWidth: "600px", background: "#0F172A", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", boxShadow: "0 50px 100px rgba(0,0,0,0.8)", overflow: "hidden", animation: "modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div style={{ display: "flex", alignItems: "center", padding: "1.25rem", borderBottom: "1px solid rgba(255,255,255,0.06)", gap: "0.75rem" }}>
              <Search size={22} color={GOLD} />
              <input 
                autoFocus
                type="text" 
                placeholder="Type to search slides..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ flex: 1, background: "none", border: "none", color: "white", fontSize: "1.1rem", outline: "none" }}
              />
              <div style={{ background: "rgba(255,255,255,0.08)", padding: "4px 8px", borderRadius: "6px", fontSize: "0.75rem", color: TEXT_MUTED }}>ESC</div>
            </div>
            
            <div style={{ maxHeight: "60vh", overflowY: "auto", padding: "0.5rem" }}>
              {slides.map((s: Slide, i: number) => {
                const isMatch = !searchQuery || s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
                if (!isMatch) return null;
                return (
                  <div 
                    key={s.id}
                    onClick={() => { jumpToSlide(i); setShowSearch(false); }}
                    style={{ 
                      padding: "1rem 1.25rem", 
                      borderRadius: "12px", 
                      cursor: "pointer", 
                      background: currentSlide === i ? "rgba(196,30,91,0.15)" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      transition: "background 0.2s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = currentSlide === i ? "rgba(196,30,91,0.15)" : "transparent"}
                  >
                    <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", color: GOLD, fontWeight: 700 }}>
                      {i + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: "white", fontWeight: 600, fontSize: "0.95rem" }}>{s.title}</div>
                      <div style={{ color: TEXT_MUTED, fontSize: "0.75rem" }}>{s.subtitle}</div>
                    </div>
                    <ChevronRight size={16} color={TEXT_SUBTLE} />
                  </div>
                );
              })}
              {slides.filter((s: Slide) => s.title.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                <div style={{ padding: "3rem", textAlign: "center", color: TEXT_MUTED }}>
                  No results found for "{searchQuery}"
                </div>
              )}
            </div>
            
            <div style={{ padding: "1rem", background: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(255,255,255,0.04)", fontSize: "0.75rem", color: TEXT_SUBTLE, display: "flex", gap: "1.5rem" }}>
              <span><span style={{ color: TEXT_MUTED }}>↑↓</span> Navigate</span>
              <span><span style={{ color: TEXT_MUTED }}>Enter</span> Select</span>
              <span><span style={{ color: TEXT_MUTED }}>ESC</span> Close</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes stagger-in {
          from { opacity:0; transform: translateY(20px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.7; transform:scale(1.1); }
        }
        @keyframes icon-glow {
          0%,100% { box-shadow: 0 0 20px rgba(196,30,91,0.4), 0 8px 32px rgba(142,21,64,0.3); }
          50%      { box-shadow: 0 0 40px rgba(196,30,91,0.7), 0 12px 48px rgba(142,21,64,0.5); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orb-pulse {
          0%,100% { transform: scale(1); opacity:0.5; }
          50%      { transform: scale(1.1); opacity:0.7; }
        }
        @keyframes shimmer-sweep {
          0%   { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(400%) skewX(-12deg); }
        }
        @keyframes scan-line {
          0%   { top: -2px; }
          100% { top: 102%; }
        }
        @keyframes progress-fill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes float-up {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        [data-item] { animation: stagger-in 0.4s cubic-bezier(0.34,1.2,0.64,1) both; }
        [data-item="0"] { animation-delay: 0.05s; }
        [data-item="1"] { animation-delay: 0.12s; }
        [data-item="2"] { animation-delay: 0.19s; }
        [data-item="3"] { animation-delay: 0.26s; }
        [data-item="4"] { animation-delay: 0.33s; }
        [data-item="5"] { animation-delay: 0.40s; }
        [data-item="6"] { animation-delay: 0.47s; }
      `}</style>
    </main>
  );
}

