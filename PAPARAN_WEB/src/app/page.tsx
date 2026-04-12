"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Shield, Lock, TrendingUp, Presentation, CheckSquare, Calendar } from "lucide-react";
import masterData from "./master-data.json";

/* ── Calculate Dynamic Stats ───────────────────────────── */
const categories = Object.keys(masterData);
const totalSlides = categories.reduce((acc, cat) => acc + (masterData as any)[cat].length, 0);

/* ── Custom SVG Icons per kategori ──────────────────────── */
function IconReferensi({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="4" y="3" width="14" height="18" rx="2" stroke="white" strokeWidth="1.8" fill="none"/>
      <path d="M7 8h8M7 11h8M7 14h5" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="20" cy="19" r="5" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.6"/>
      <path d="M18.5 19l1 1 2-2" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconPrioritas({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <path d="M14 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L14 17.3 8.4 20.2l1.1-6.2L5 9.6l6.2-.9L14 3z" 
        stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255,255,255,0.15)"/>
      <circle cx="14" cy="12" r="2.5" fill="white" opacity="0.9"/>
    </svg>
  );
}

function IconPAD({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <path d="M4 22L10 14l5 4 5-8 4 2" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 6v6h6" stroke="white" strokeWidth="1.7" strokeLinecap="round" opacity="0.6"/>
      <circle cx="10" cy="14" r="2" fill="white" opacity="0.8"/>
      <circle cx="15" cy="18" r="2" fill="white" opacity="0.8"/>
      <circle cx="20" cy="10" r="2" fill="white" opacity="0.8"/>
    </svg>
  );
}

function IconDigitalisasi({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="8" y="8" width="12" height="12" rx="3" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.1)"/>
      <circle cx="14" cy="14" r="3" fill="white" opacity="0.9"/>
      <path d="M14 4v2M14 22v2M4 14h2M22 14h2" stroke="white" strokeWidth="1.7" strokeLinecap="round" opacity="0.6"/>
      <path d="M6.9 6.9l1.4 1.4M19.7 19.7l1.4 1.4M6.9 21.1l1.4-1.4M19.7 8.3l1.4-1.4" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

function IconMedia({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="3.5" fill="white" opacity="0.9"/>
      <path d="M9 14c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5" stroke="white" strokeWidth="1.7" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M5.5 14c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4"/>
      <path d="M2 14c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.2"/>
    </svg>
  );
}

function IconStrakom({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <path d="M18 7l-6 5H8v4h4l6 5V7z" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M22 10c1.5 2 1.5 6 0 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
      <path d="M25 7c2.5 4 2.5 10 0 14" stroke="white" strokeWidth="1.6" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

function IconBranding({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <path d="M14 2l4 8 8 2-6 6 2 8-8-4-8 4 2-8-6-6 8-2 4-8z" stroke="white" strokeWidth="1.8" fill="rgba(212,175,55,0.2)"/>
      <circle cx="14" cy="13" r="3" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
}

function IconInvestasi({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" stroke="white" strokeWidth="1.8" fill="rgba(34,197,94,0.1)"/>
      <path d="M14 8v12M10 12l4-4 4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 20h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconTechnopark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="6" y="6" width="16" height="16" rx="4" stroke="white" strokeWidth="1.8" fill="rgba(168,85,247,0.1)"/>
      <path d="M14 6L18 2M14 6L10 2M14 22V26M6 14L2 18M6 14L2 10M22 14L26 18M22 14L26 10" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="3" fill="white"/>
    </svg>
  );
}

/* ── Animated counter ────────────────────────────────────── */
function AnimatedNumber({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const num = parseInt(target.replace(/\D+/, ""));
    if (isNaN(num)) {
       setTimeout(() => setDisplay(target), 0);
       return;
    }
    
    let start = 0;
    const step = Math.ceil(num / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setDisplay(target);
        clearInterval(timer);
      } else {
        setDisplay(target.replace(/\d+/, String(start)));
      }
    }, 40);
    return () => clearInterval(timer);
  }, [target]);

  return <span ref={ref}>{display}</span>;
}

const MENU_ITEMS = [
  {
    id: "referensi",
    title: "Dokumen Referensi",
    desc: "Landasan Hukum & RPJMD 2025–2029",
    Icon: IconReferensi,
    gradient: "linear-gradient(135deg, #047857 0%, #059669 100%)",
    glow: "rgba(4,120,87,0.5)",
    particle: "rgba(196,30,91,0.8)",
    slug: "dokumen_referensi",
    label: "01",
    tag: "HUKUM",
  },
  {
    id: "prioritas",
    title: "Program Prioritas",
    desc: "Visi–Misi Sukabumi IMAN 2025–2029",
    Icon: IconPrioritas,
    gradient: "linear-gradient(135deg, #A07820 0%, #D4AF37 100%)",
    glow: "rgba(212,175,55,0.5)",
    particle: "rgba(212,175,55,0.8)",
    slug: "program_prioritas",
    label: "02",
    tag: "PROGRAM",
  },
  {
    id: "pad",
    title: "Akselerasi PAD",
    desc: "Strategi Kemandirian Fiskal & BUMD",
    Icon: IconPAD,
    gradient: "linear-gradient(135deg, #1A3A6B 0%, #2E5FA8 100%)",
    glow: "rgba(46,95,168,0.5)",
    particle: "rgba(74,145,220,0.8)",
    slug: "akselerasi_pad",
    label: "03",
    tag: "FISKAL",
  },
  {
    id: "digitalisasi",
    title: "Digitalisasi",
    desc: "Transformasi Layanan Terpadu Digital",
    Icon: IconDigitalisasi,
    gradient: "linear-gradient(135deg, #0D4F3C 0%, #1A8B6A 100%)",
    glow: "rgba(26,139,106,0.5)",
    particle: "rgba(46,204,113,0.8)",
    slug: "digitalisasi",
    label: "04",
    tag: "DIGITAL",
  },
  {
    id: "media",
    title: "Sukabumi Media Center",
    desc: "Strategi Komunikasi Publik Modern",
    Icon: IconMedia,
    gradient: "linear-gradient(135deg, #3D1A6B 0%, #7B2FBE 100%)",
    glow: "rgba(123,47,190,0.5)",
    particle: "rgba(168,85,247,0.8)",
    slug: "media_center",
    label: "05",
    tag: "MEDIA",
  },
  {
    id: "strakom",
    title: "Strategi Komunikasi (STRAKOM)",
    desc: "Protokol Respons Cepat & Amplifikasi Isu",
    Icon: IconStrakom,
    gradient: "linear-gradient(135deg, #1E1B4B 0%, #047857 100%)",
    glow: "rgba(4,120,87,0.5)",
    particle: "rgba(196,30,91,0.8)",
    slug: "strakom",
    label: "06",
    tag: "STRATEGI",
  },
  {
    id: "branding",
    title: "Political Branding",
    desc: "Persona & Sinergi Duo Dinamis Pemimpin",
    Icon: IconBranding,
    gradient: "linear-gradient(135deg, #D4AF37 0%, #047857 100%)",
    glow: "rgba(212,175,55,0.4)",
    particle: "rgba(212,175,55,0.8)",
    slug: "political_branding",
    label: "07",
    tag: "BRANDING",
  },
  {
    id: "investasi",
    title: "Investasi Daerah",
    desc: "Potensi Strategis & Optimalisasi Asset Daerah",
    Icon: IconInvestasi,
    gradient: "linear-gradient(135deg, #0D4F3C 0%, #22C55E 100%)",
    glow: "rgba(34,197,94,0.4)",
    particle: "rgba(34,197,94,0.8)",
    slug: "investasi_daerah",
    label: "08",
    tag: "INVESTASI",
  },
  {
    id: "technopark",
    title: "Sukabumi Technopark",
    desc: "Pusat Inovasi, Startup & Akademi Digital",
    Icon: IconTechnopark,
    gradient: "linear-gradient(135deg, #7B2FBE 0%, #3D1A6B 100%)",
    glow: "rgba(123,47,190,0.5)",
    particle: "rgba(168,85,247,0.8)",
    slug: "sukabumi_technopark",
    label: "09",
    tag: "INOVASI",
  },
];

const STATS = [
  { value: `${totalSlides}`, label: "Slide Paparan", icon: Presentation },
  { value: `${categories.length}`, label: "Bidang Strategis", icon: CheckSquare },
  { value: "2025", label: "Tahun Mulai", icon: Calendar },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-color)", color: "var(--text-main)", fontFamily: "var(--font-display)", position: "relative", overflowX: "hidden" }}>

      {/* ── GLOBAL KEYFRAMES ─────────────────────────────── */}
      <style>{`
        @keyframes orb-drift {
          0%,100% { transform: translate(0,0) scale(1); opacity:0.6; }
          33%      { transform: translate(3%,-2%) scale(1.07); opacity:0.8; }
          66%      { transform: translate(-2%,3%) scale(0.95); opacity:0.5; }
        }
        @keyframes particle-float {
          0%,100% { transform: translateY(0) scale(1); opacity:0.3; }
          50%      { transform: translateY(-14px) scale(1.3); opacity:0.7; }
        }
        @keyframes shimmer-sweep {
          0%   { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(300%) skewX(-15deg); }
        }
        @keyframes slide-up-in {
          from { opacity:0; transform:translateY(36px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes pulse-ring {
          0%   { transform:scale(1); opacity:0.6; }
          100% { transform:scale(1.7); opacity:0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes glow-breathe {
          0%,100% { opacity:0.4; }
          50%      { opacity:0.8; }
        }
        @keyframes scan-line {
          0%   { top: -2px; }
          100% { top: 101%; }
        }
      `}</style>

      {/* ── AMBIENT BACKGROUND ───────────────────────────── */}
      <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0 }}>
        {/* Subtle Gradient Spot */}
        <div style={{ position:"absolute", top:"-10%", right:"-5%", width:"50vw", height:"50vw", borderRadius:"50%", background:"radial-gradient(circle, rgba(4,120,87,0.03) 0%, transparent 70%)" }} />
        {/* Dot grid — Cleaner */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
      </div>

      {/* ── NAV ──────────────────────────────────────────── */}
      <nav style={{ position:"sticky", top:0, zIndex:100, padding:"0 6%", height:72, display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(255,255,255,0.9)", backdropFilter:"blur(16px)", borderBottom:"1px solid var(--border-refined)", boxShadow:"0 1px 3px rgba(0,0,0,0.02)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
          <div style={{ position:"relative", width:42, height:42, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ position:"absolute", inset:0, borderRadius:"10px", background:"var(--slate-50)", border:"1px solid var(--slate-200)" }} />
            <Image src="/Logo_Sukabumi.png" alt="Logo" width={28} height={28} style={{ objectFit:"contain", position:"relative", zIndex:1 }} />
          </div>
          <div>
            <p style={{ fontWeight:800, fontSize:"1.05rem", color:"var(--text-main)", lineHeight:1, letterSpacing:"-0.02em" }}>Kota Sukabumi</p>
            <p style={{ fontSize:"0.65rem", color:"var(--primary)", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", marginTop:"2px" }}>Portal Strategis Pemerintah</p>
          </div>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:"1.25rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", padding:"0.4rem 1rem", borderRadius:99, background:"var(--slate-50)", border:"1px solid var(--slate-200)" }}>
            <Lock size={12} color="var(--gold-dark)" />
            <span style={{ fontSize:"0.7rem", fontWeight:700, color:"var(--text-muted)", letterSpacing:"0.05em", textTransform:"uppercase" }}>Akses Terbatas</span>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ position:"relative", zIndex:1, padding:"5.5rem 5% 4rem", display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:"3.5rem", alignItems:"center" }}>

        {/* Left */}
        <div style={{ display:"flex", flexDirection:"column", gap:"1.75rem", animation: mounted ? "slide-up-in 0.7s cubic-bezier(0.34,1.2,0.64,1) both" : "none" }}>
          {/* Badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem", padding:"0.5rem 1.2rem", borderRadius:99, background:"var(--slate-50)", border:"1px solid var(--slate-200)", width:"fit-content" }}>
            <div style={{ width:10, height:10, borderRadius:"50%", background:"var(--gold)" }} />
            <span style={{ fontSize:"0.75rem", fontWeight:800, color:"var(--text-main)", letterSpacing:"0.1em", textTransform:"uppercase" }}>Layanan Informasi Publik Digital</span>
          </div>

          {/* Headline */}
          <div style={{ display:"flex", flexDirection:"column", gap:"0.5rem" }}>
            <h1 style={{ fontSize:"clamp(2.5rem,5vw,4.2rem)", fontWeight:900, lineHeight:1, letterSpacing:"-0.04em", color:"var(--text-main)" }}>
              Portal Paparan <br />
              <span style={{ color:"var(--primary)" }}>Strategis</span>
            </h1>
            <h2 style={{ fontSize:"clamp(1.2rem,2vw,1.6rem)", fontWeight:600, color:"var(--text-muted)", letterSpacing:"-0.01em" }}>
              Pemerintah Kota Sukabumi 2025–2029
            </h2>
          </div>

          <p style={{ fontSize:"1.05rem", color:"var(--text-muted)", lineHeight:1.7, maxWidth:540 }}>
            Pusat sinkronisasi data strategis, pencapaian RPJMD, dan transformasi tata kelola digital untuk mewujudkan Sukabumi yang unggul dan inovatif.
          </p>

          {/* CTAs */}
          <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", marginTop:"0.5rem" }}>
            <Link href="#menu" style={{ display:"inline-flex", alignItems:"center", gap:"0.8rem", padding:"1rem 2rem", borderRadius:14, background:"var(--primary)", color:"white", fontWeight:700, fontSize:"1rem", boxShadow:"var(--shadow-md)", transition:"all 0.3s", textDecoration:"none" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform="translateY(-2px)"; el.style.boxShadow="var(--shadow-lg)"; el.style.background="var(--primary-hover)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform=""; el.style.boxShadow="var(--shadow-md)"; el.style.background="var(--primary)"; }}
            >
              Mulai Eksplorasi
              <ArrowRight size={18} />
            </Link>
            <div style={{ display:"inline-flex", alignItems:"center", gap:"0.75rem", padding:"1rem 1.75rem", borderRadius:14, background:"white", border:"1px solid var(--border-refined)", color:"var(--text-main)", fontSize:"0.95rem", fontWeight:600, boxShadow:"var(--shadow-sm)" }}>
              <Shield size={18} color="var(--gold)" />
              Data Resmi Tervalidasi
            </div>
          </div>

          {/* Stats with counter animation */}
          <div className="rsp-stats-container" style={{ display:"flex", gap:"2.5rem", flexWrap:"wrap", paddingTop:"1.25rem", borderTop:"1px solid rgba(15,23,42,0.06)" }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ animation: mounted ? `slide-up-in 0.5s cubic-bezier(0.34,1.2,0.64,1) ${0.2 + i * 0.1}s both` : "none" }}>
                <p style={{ fontSize:"clamp(1.4rem,2.5vw,1.9rem)", fontWeight:900, color:"var(--text-main)", letterSpacing:"-0.03em", lineHeight:1 }}>
                  {mounted ? <AnimatedNumber target={s.value} /> : "0"}
                </p>
                <p style={{ fontSize:"0.75rem", color:"var(--text-subtle)", fontWeight:500, marginTop:"0.2rem" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div style={{ position:"relative", animation: mounted ? "slide-up-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s both" : "none" }}>
          {/* Subtle Outer Frame */}
          <div style={{ position:"absolute", inset:-12, borderRadius:32, border:"1px solid var(--slate-200)", opacity:0.5 }} />

          <div style={{ position:"relative", zIndex:1, borderRadius:24, overflow:"hidden", border:"1px solid var(--border-refined)", boxShadow:"var(--shadow-lg)" }}>
            <Image src="/Foto Walikota_Wakil.png" alt="Kepala Daerah" width={700} height={520} priority style={{ width:"100%", height:"auto", display:"block" }} />
            <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"30%", background:"linear-gradient(transparent, rgba(0,0,0,0.7))" }} />
            <div style={{ position:"absolute", bottom:"1.5rem", left:"1.5rem", right:"1.5rem", display:"flex", gap:"0.75rem" }}>
              {["H. Ayep Zaki, S.E — Wali Kota","Bobby Maulana — Wakil Wali Kota"].map((n, i) => (
                <div key={i} style={{ flex:1, padding:"0.6rem 1rem", borderRadius:12, background:"rgba(255,255,255,0.95)", border:"1px solid var(--slate-200)", textAlign:"center" }}>
                  <p style={{ fontSize:"0.75rem", fontWeight:800, color:"var(--text-main)" }}>{n}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating badge — Formal */}
          <div style={{ position:"absolute", top:"-1rem", right:"-1rem", background:"white", border:"1.5px solid var(--gold)", borderRadius:16, padding:"0.8rem 1.2rem", display:"flex", alignItems:"center", gap:"0.75rem", boxShadow:"var(--shadow-md)", zIndex:20 }}>
            <div style={{ width:36, height:36, borderRadius:10, background:"var(--gold-light)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <TrendingUp size={18} color="var(--gold-dark)" />
            </div>
            <div>
              <p style={{ fontSize:"0.6rem", color:"var(--text-subtle)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em" }}>RPJMD TA.</p>
              <p style={{ fontSize:"0.9rem", color:"var(--primary)", fontWeight:800 }}>2025–2029</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ──────────────────────────────────────── */}
      <div style={{ position:"relative", zIndex:1, margin:"0 5%", height:1, background:"linear-gradient(90deg,transparent,rgba(15,23,42,0.06),transparent)" }} />

      {/* ── MENU SECTION ─────────────────────────────────── */}
      <section id="menu" style={{ position:"relative", zIndex:1, padding:"4.5rem 5% 5.5rem" }}>
        <div style={{ textAlign:"center", marginBottom:"3rem" }}>
          <p style={{ fontSize:"0.68rem", fontWeight:900, letterSpacing:"0.2em", textTransform:"uppercase", color:"#D4AF37", marginBottom:"0.65rem" }}>
            ✦ NAVIGASI KONTEN ✦
          </p>
          <h2 style={{ fontSize:"clamp(1.7rem,3vw,2.5rem)", fontWeight:900, color:"var(--text-main)", letterSpacing:"-0.02em", marginBottom:"0.65rem" }}>
            Menu Paparan Strategis
          </h2>
          <p style={{ fontSize:"0.95rem", color:"var(--text-muted)", maxWidth:480, margin:"0 auto", lineHeight:1.75 }}>
            Pilih kategori untuk mengakses paparan interaktif lengkap.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:"1.25rem", maxWidth:1200, margin:"0 auto" }}>
          {MENU_ITEMS.map((item, index) => {
            const isHov = hovered === item.id;
            return (
              <Link
                key={item.id}
                href={item.slug === "digitalisasi" ? "/digitalisasi" : `/slide/${item.slug}`}
                style={{ 
                  position:"relative", 
                  display:"flex", 
                  flexDirection:"column",
                  gap:"1.5rem", 
                  padding:"1.75rem", 
                  borderRadius:20, 
                  background: isHov ? "white" : "rgba(255,255,255,0.6)", 
                  border: `1px solid ${isHov ? "var(--primary)" : "var(--border-refined)"}`, 
                  transition:"all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)", 
                  textDecoration:"none", 
                  animation: mounted ? `slide-up-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.05 + 0.3}s both` : "none", 
                  transform: isHov ? "translateY(-4px)" : "none", 
                  boxShadow: isHov ? "var(--shadow-lg)" : "var(--shadow-sm)" 
                }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Formal Icon Section */}
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                  <div style={{ 
                    width:54, 
                    height:54, 
                    borderRadius:14, 
                    background:item.gradient, 
                    display:"flex", 
                    alignItems:"center", 
                    justifyContent:"center", 
                    boxShadow: isHov ? `0 8px 20px ${item.glow}44` : "none",
                    transition:"transform 0.4s ease"
                  }}>
                    <item.Icon size={26} />
                  </div>
                  <div style={{ fontSize:"0.65rem", fontWeight:900, color:"var(--slate-300)", letterSpacing:"0.1em" }}>
                    {item.label}
                  </div>
                </div>

                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"0.5rem" }}>
                    <h3 style={{ fontWeight:800, fontSize:"1.05rem", color:"var(--text-main)", letterSpacing:"-0.01em" }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize:"0.88rem", color:"var(--text-muted)", lineHeight:1.6 }}>{item.desc}</p>
                </div>

                {/* Footer Link */}
                <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginTop:"0.5rem" }}>
                   <span style={{ fontSize:"0.7rem", fontWeight:800, color: isHov ? "var(--primary)" : "var(--text-subtle)", letterSpacing:"0.05em", textTransform:"uppercase", transition:"color 0.3s" }}>
                     Buka Detail Paparan
                   </span>
                   <ArrowRight size={14} color={isHov ? "var(--primary)" : "var(--text-subtle)"} style={{ transition:"transform 0.4s", transform: isHov ? "translateX(4px)" : "none" }} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer style={{ position:"relative", zIndex:1, padding:"1.75rem 5%", borderTop:"1px solid rgba(15,23,42,0.05)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"0.75rem" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
          <div style={{ position:"relative", width:8, height:8 }}>
            <div style={{ position:"absolute", inset:0, borderRadius:"50%", background:"#22C55E" }} />
            <div style={{ position:"absolute", inset:-2, borderRadius:"50%", border:"1.5px solid #22C55E", animation:"pulse-ring 2.5s ease-out infinite" }} />
          </div>
          <span style={{ fontSize:"0.75rem", color:"var(--text-subtle)", fontWeight:500 }}>Sistem aktif & beroperasi</span>
        </div>
        <p style={{ fontSize:"0.75rem", color:"var(--text-subtle)", opacity:0.6 }}>
          © 2026 Pemerintah Kota Sukabumi · Tim Transformasi Digital
        </p>
        <div style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}>
          <div style={{ width:6, height:6, borderRadius:"50%", background:"rgba(4,120,87,0.4)" }} />
          <span style={{ fontSize:"0.68rem", color:"var(--text-subtle)", fontWeight:700, letterSpacing:"0.08em", opacity:0.5 }}>RAHASIA</span>
        </div>
      </footer>

      {/* Media queries via style tag */}
      <style>{`
        @media (max-width: 1024px) {
          section:nth-of-type(1) { grid-template-columns: 1fr !important; min-height: auto !important; }
        }
        @media (max-width: 640px) {
          div[style*="repeat(auto-fit, minmax(340px"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
