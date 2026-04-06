import React from "react";
import Link from "next/link";
import { Home, Search, Menu, ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import { GOLD, PRIMARY, TEXT_MUTED } from "./Constants";

/* ── AMBIENT BACKGROUND ─────────────────────────────────── */
export function AmbientBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", background: "var(--bg-color)" }}>
      {/* Subtle Gradient Spot */}
      <div style={{ position:"absolute", top:"-10%", right:"-5%", width:"50vw", height:"50vw", borderRadius:"50%", background:"radial-gradient(circle, rgba(142,21,64,0.03) 0%, transparent 70%)" }} />
      {/* Dot grid — Cleaner */}
      <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
    </div>
  );
}

/* ── PROGRESS BAR ───────────────────────────────────────── */
export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "4px", background: "var(--slate-100)", zIndex: 1000 }}>
      <div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg, var(--primary), var(--gold))`, transition: "width 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)" }} />
    </div>
  );
}

/* ── FLOATING NAVIGATION DOCK ───────────────────────────── */
interface NavProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onSidebar: () => void;
  onSearch: () => void;
  isFullscreen: boolean;
  onFullscreen: () => void;
}

export function FloatingNav({ current, total, onPrev, onNext, onSidebar, onSearch, isFullscreen, onFullscreen }: NavProps) {
  return (
    <div style={{ position: "fixed", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 1000, display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.4rem", background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(16px)", borderRadius: "18px", border: "1px solid var(--border-refined)", boxShadow: "var(--shadow-lg)" }}>
      <Link href="/" style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 12, color: "var(--text-main)", transition: "all 0.3s" }} className="card-hover">
        <Home size={20} />
      </Link>
      
      <div style={{ width: "1px", height: "20px", background: "var(--border-light)", margin: "0 0.4rem" }} />
      
      <button onClick={onPrev} disabled={current === 0} style={{ width: 44, height: 44, background: "transparent", border: "none", color: current === 0 ? "var(--slate-300)" : "var(--text-main)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }} className="card-hover">
        <ChevronLeft size={24} />
      </button>
      
      <div style={{ padding: "0 1.25rem", fontSize: "0.9rem", fontWeight: 850, color: "var(--primary)", letterSpacing: "-0.01em", minWidth: "90px", textAlign: "center" }}>
        {String(current + 1).padStart(2, '0')} <span style={{ color: "var(--slate-300)", margin: "0 0.15rem", fontWeight: 500 }}>/</span> {String(total).padStart(2, '0')}
      </div>
      
      <button onClick={onNext} disabled={current === total - 1} style={{ width: 44, height: 44, background: "transparent", border: "none", color: current === total - 1 ? "var(--slate-300)" : "var(--text-main)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }} className="card-hover">
        <ChevronRight size={24} />
      </button>
      
      <div style={{ width: "1px", height: "20px", background: "var(--border-light)", margin: "0 0.4rem" }} />
      
      <button onClick={onSearch} style={{ width: 44, height: 44, background: "transparent", border: "none", color: "var(--text-main)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }} className="card-hover">
        <Search size={20} />
      </button>
      
      <button onClick={onSidebar} style={{ width: 44, height: 44, background: "transparent", border: "none", color: "var(--text-main)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }} className="card-hover">
        <Menu size={20} />
      </button>
      
      <button onClick={onFullscreen} style={{ width: 44, height: 44, background: "transparent", border: "none", color: "var(--text-main)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }} className="card-hover">
        {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
      </button>
    </div>
  );
}
