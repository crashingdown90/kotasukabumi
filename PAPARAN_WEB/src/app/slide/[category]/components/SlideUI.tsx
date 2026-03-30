import React from "react";
import Link from "next/link";
import { Home, Search, Menu, ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import { GOLD, PRIMARY, TEXT_MUTED } from "./Constants";

/* ── AMBIENT BACKGROUND ─────────────────────────────────── */
export function AmbientBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", background: "#080C11" }}>
      {/* Mesh Gradient Base */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.4, background: `radial-gradient(circle at 20% 30%, ${PRIMARY}33 0%, transparent 50%), radial-gradient(circle at 80% 70%, #4F46E522 0%, transparent 50%)` }} />
      
      {/* Moving Glass Orbs */}
      <div style={{ position: "absolute", width: "60vw", height: "60vw", top: "-10%", left: "-10%", borderRadius: "50%", background: `radial-gradient(circle, ${PRIMARY}15 0%, transparent 70%)`, filter: "blur(60px)", animation: "orb-drift 25s ease-in-out infinite alternate" }} />
      <div style={{ position: "absolute", width: "50vw", height: "50vw", bottom: "-10%", right: "-10%", borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}10 0%, transparent 70%)`, filter: "blur(60px)", animation: "orb-drift 30s ease-in-out infinite alternate-reverse" }} />
      
      {/* Noise Texture Overlay */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <style>{`
        @keyframes orb-drift {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(5%, 10%) scale(1.1); }
          100% { transform: translate(-5%, 5%) scale(0.9); }
        }
      `}</style>
    </div>
  );
}

/* ── PROGRESS BAR ───────────────────────────────────────── */
export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "4px", background: "rgba(255,255,255,0.05)", zIndex: 1000 }}>
      <div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg, ${PRIMARY}, ${GOLD})`, transition: "width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)", boxShadow: `0 0 10px ${PRIMARY}66` }} />
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
    <div style={{ position: "fixed", bottom: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 1000, display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem", background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(20px)", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.12)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
      <Link href="/" style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 14, color: "white", transition: "all 0.2s" }} className="card-hover">
        <Home size={20} />
      </Link>
      
      <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)", margin: "0 0.5rem" }} />
      
      <button onClick={onPrev} disabled={current === 0} style={{ width: 44, height: 44, background: "transparent", border: "none", color: current === 0 ? "rgba(255,255,255,0.2)" : "white", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }} className="card-hover">
        <ChevronLeft size={24} />
      </button>
      
      <div style={{ padding: "0 1rem", fontSize: "0.85rem", fontWeight: 800, color: GOLD, letterSpacing: "0.1em", minWidth: "80px", textAlign: "center" }}>
        {String(current + 1).padStart(2, '0')} <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 0.25rem" }}>/</span> {String(total).padStart(2, '0')}
      </div>
      
      <button onClick={onNext} disabled={current === total - 1} style={{ width: 44, height: 44, background: "transparent", border: "none", color: current === total - 1 ? "rgba(255,255,255,0.2)" : "white", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }} className="card-hover">
        <ChevronRight size={24} />
      </button>
      
      <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)", margin: "0 0.5rem" }} />
      
      <button onClick={onSearch} style={{ width: 44, height: 44, background: "transparent", border: "none", color: "white", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }} className="card-hover">
        <Search size={20} />
      </button>
      
      <button onClick={onSidebar} style={{ width: 44, height: 44, background: "transparent", border: "none", color: "white", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }} className="card-hover">
        <Menu size={20} />
      </button>
      
      <button onClick={onFullscreen} style={{ width: 44, height: 44, background: "transparent", border: "none", color: "white", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }} className="card-hover">
        {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
      </button>
    </div>
  );
}
