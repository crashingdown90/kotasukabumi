"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Shield, Lock, TrendingUp } from "lucide-react";

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

/* ── Particles ───────────────────────────────────────────── */
function FloatingParticles({ color }: { color: string }) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", borderRadius: "inherit" }}>
      {[...Array(6)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: 3 + (i % 3),
          height: 3 + (i % 3),
          borderRadius: "50%",
          background: color,
          opacity: 0.3,
          left: `${15 + i * 14}%`,
          top: `${20 + ((i * 17) % 60)}%`,
          animation: `particle-float ${3 + i * 0.5}s ease-in-out ${i * 0.4}s infinite`,
        }} />
      ))}
    </div>
  );
}

/* ── Animated counter ────────────────────────────────────── */
function AnimatedNumber({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const num = parseInt(target.replace(/\D+/, ""));
    if (isNaN(num)) { setDisplay(target); return; }
    let start = 0;
    const step = Math.ceil(num / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setDisplay(target); clearInterval(timer); }
      else setDisplay(target.replace(/\d+/, String(start)));
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
    gradient: "linear-gradient(135deg, #8E1540 0%, #C41E5B 100%)",
    glow: "rgba(142,21,64,0.5)",
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
    title: "Digitalisasi SPBE",
    desc: "Transformasi Layanan Terpadu Digital",
    Icon: IconDigitalisasi,
    gradient: "linear-gradient(135deg, #0D4F3C 0%, #1A8B6A 100%)",
    glow: "rgba(26,139,106,0.5)",
    particle: "rgba(46,204,113,0.8)",
    slug: "digitalisasi_spbe",
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
    gradient: "linear-gradient(135deg, #1E1B4B 0%, #8E1540 100%)",
    glow: "rgba(142,21,64,0.5)",
    particle: "rgba(196,30,91,0.8)",
    slug: "strakom",
    label: "06",
    tag: "STRATEGI",
  },
];

const STATS = [
  { value: "140+", label: "Slide Paparan" },
  { value: "6",    label: "Bidang Strategis" },
  { value: "2025", label: "Tahun Mulai" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "#060A14", color: "white", fontFamily: "'Plus Jakarta Sans','Inter',sans-serif", position: "relative", overflowX: "hidden" }}>

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
        {/* Orbs */}
        <div style={{ position:"absolute", top:"-25%", left:"-10%", width:"80vw", height:"80vw", borderRadius:"50%", background:"radial-gradient(circle, rgba(142,21,64,0.16) 0%, transparent 65%)", animation:"orb-drift 12s ease-in-out infinite" }} />
        <div style={{ position:"absolute", bottom:"-20%", right:"-5%", width:"65vw", height:"65vw", borderRadius:"50%", background:"radial-gradient(circle, rgba(212,175,55,0.09) 0%, transparent 65%)", animation:"orb-drift 16s ease-in-out 3s infinite reverse" }} />
        <div style={{ position:"absolute", top:"40%", left:"55%", width:"45vw", height:"45vw", borderRadius:"50%", background:"radial-gradient(circle, rgba(74,30,107,0.1) 0%, transparent 70%)", animation:"orb-drift 10s ease-in-out 1.5s infinite" }} />
        {/* Dot grid */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize:"28px 28px" }} />
        {/* Horizontal scan line */}
        <div style={{ position:"absolute", left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(212,175,55,0.08), transparent)", animation:"scan-line 8s linear infinite" }} />
      </div>

      {/* ── NAV ──────────────────────────────────────────── */}
      <nav style={{ position:"sticky", top:0, zIndex:100, padding:"0 5%", height:68, display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(6,10,20,0.8)", backdropFilter:"blur(24px)", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
          {/* Animated logo ring */}
          <div style={{ position:"relative", width:40, height:40, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ position:"absolute", inset:-3, borderRadius:"50%", background:"linear-gradient(135deg,#8E1540,#D4AF37,#8E1540)", backgroundSize:"200%", animation:"spin-slow 6s linear infinite", opacity:0.6 }} />
            <div style={{ position:"absolute", inset:1, borderRadius:"50%", background:"#06091A" }} />
            <Image src="/Logo_Sukabumi.png" alt="Logo" width={26} height={26} style={{ objectFit:"contain", position:"relative", zIndex:1 }} />
          </div>
          <div>
            <p style={{ fontWeight:800, fontSize:"0.95rem", color:"white", lineHeight:1.1, letterSpacing:"-0.01em" }}>Kota Sukabumi</p>
            <p style={{ fontSize:"0.62rem", color:"rgba(212,175,55,0.75)", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>Portal Strategis</p>
          </div>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
          {/* Live indicator */}
          <div style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}>
            <div style={{ position:"relative", width:8, height:8 }}>
              <div style={{ position:"absolute", inset:0, borderRadius:"50%", background:"#22C55E" }} />
              <div style={{ position:"absolute", inset:-2, borderRadius:"50%", border:"1.5px solid #22C55E", animation:"pulse-ring 2s ease-out infinite" }} />
            </div>
            <span style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.35)", fontWeight:600 }}>Live</span>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", padding:"0.35rem 0.9rem", borderRadius:99, background:"rgba(142,21,64,0.12)", border:"1px solid rgba(142,21,64,0.25)" }}>
            <Lock size={11} color="#D4AF37" />
            <span style={{ fontSize:"0.68rem", fontWeight:800, color:"rgba(255,255,255,0.5)", letterSpacing:"0.1em", textTransform:"uppercase" }}>Akses Terbatas</span>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ position:"relative", zIndex:1, padding:"5.5rem 5% 4rem", display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:"3.5rem", alignItems:"center" }}>

        {/* Left */}
        <div style={{ display:"flex", flexDirection:"column", gap:"1.75rem", animation: mounted ? "slide-up-in 0.7s cubic-bezier(0.34,1.2,0.64,1) both" : "none" }}>
          {/* Badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", padding:"0.4rem 1rem 0.4rem 0.45rem", borderRadius:99, background:"rgba(212,175,55,0.08)", border:"1px solid rgba(212,175,55,0.2)", width:"fit-content" }}>
            <div style={{ width:22, height:22, borderRadius:"50%", background:"rgba(212,175,55,0.15)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <TrendingUp size={11} color="#D4AF37" />
            </div>
            <span style={{ fontSize:"0.7rem", fontWeight:800, color:"#D4AF37", letterSpacing:"0.12em", textTransform:"uppercase" }}>Layanan Informasi Publik Digital</span>
          </div>

          {/* Headline */}
          <div style={{ display:"flex", flexDirection:"column", gap:"0.2rem" }}>
            <h1 style={{ fontSize:"clamp(2.2rem,4vw,3.6rem)", fontWeight:900, lineHeight:1.06, letterSpacing:"-0.03em", color:"white" }}>
              Portal Paparan
            </h1>
            <h1 style={{ fontSize:"clamp(2.2rem,4vw,3.6rem)", fontWeight:900, lineHeight:1.06, letterSpacing:"-0.03em", background:"linear-gradient(135deg,#C41E5B,#8E1540 30%,#D4AF37 70%,#F0D060)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Strategis
            </h1>
            <h1 style={{ fontSize:"clamp(2.2rem,4vw,3.6rem)", fontWeight:900, lineHeight:1.06, letterSpacing:"-0.03em", color:"rgba(255,255,255,0.35)", WebkitTextFillColor:"rgba(255,255,255,0.35)" }}>
              Sukabumi 2025–2029
            </h1>
          </div>

          <p style={{ fontSize:"1rem", color:"rgba(255,255,255,0.45)", lineHeight:1.8, maxWidth:500 }}>
            Pusat data terintegrasi RPJMD, program unggulan, strategi fiskal, transformasi digital, dan komunikasi publik Kota Sukabumi.
          </p>

          {/* CTAs */}
          <div style={{ display:"flex", gap:"0.85rem", flexWrap:"wrap" }}>
            <Link href="#menu" style={{ position:"relative", overflow:"hidden", display:"inline-flex", alignItems:"center", gap:"0.7rem", padding:"0.85rem 1.65rem", borderRadius:14, background:"linear-gradient(135deg,#8E1540,#C41E5B)", color:"white", fontWeight:700, fontSize:"0.92rem", boxShadow:"0 8px 32px rgba(142,21,64,0.45)", transition:"all 0.3s", textDecoration:"none" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform="translateY(-2px)"; el.style.boxShadow="0 16px 48px rgba(142,21,64,0.55)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform=""; el.style.boxShadow="0 8px 32px rgba(142,21,64,0.45)"; }}
            >
              {/* Shimmer sweep */}
              <div style={{ position:"absolute", top:0, bottom:0, width:"40%", background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)", animation:"shimmer-sweep 2.5s ease infinite" }} />
              Mulai Eksplorasi
              <ArrowRight size={17} />
            </Link>
            <div style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem", padding:"0.85rem 1.4rem", borderRadius:14, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.09)", color:"rgba(255,255,255,0.55)", fontSize:"0.88rem", fontWeight:600 }}>
              <Shield size={15} color="#D4AF37" />
              Data Resmi & Tervalidasi
            </div>
          </div>

          {/* Stats with counter animation */}
          <div style={{ display:"flex", gap:"2.5rem", paddingTop:"1.25rem", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ animation: mounted ? `slide-up-in 0.5s cubic-bezier(0.34,1.2,0.64,1) ${0.2 + i * 0.1}s both` : "none" }}>
                <p style={{ fontSize:"clamp(1.4rem,2.5vw,1.9rem)", fontWeight:900, color:"white", letterSpacing:"-0.03em", lineHeight:1 }}>
                  {mounted ? <AnimatedNumber target={s.value} /> : "0"}
                </p>
                <p style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.35)", fontWeight:500, marginTop:"0.2rem" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div style={{ position:"relative", animation: mounted ? "slide-up-in 0.8s cubic-bezier(0.34,1.2,0.64,1) 0.15s both" : "none" }}>
          {/* Animated glow ring */}
          <div style={{ position:"absolute", inset:-24, borderRadius:"50%", background:"radial-gradient(circle,rgba(142,21,64,0.22) 0%,transparent 65%)", animation:"glow-breathe 4s ease-in-out infinite" }} />
          {/* Outer dashed orbit */}
          <div style={{ position:"absolute", inset:-16, borderRadius:"50%", border:"1px dashed rgba(212,175,55,0.12)", animation:"spin-slow 20s linear infinite" }} />

          <div style={{ position:"relative", zIndex:1, borderRadius:28, overflow:"hidden", background:"linear-gradient(135deg,rgba(142,21,64,0.08),rgba(13,18,37,0.4))", border:"1px solid rgba(255,255,255,0.07)", boxShadow:"0 32px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07)" }}>
            <Image src="/Foto Walikota_Wakil.png" alt="Kepala Daerah" width={700} height={520} priority style={{ width:"100%", height:"auto", display:"block", filter:"contrast(1.04) saturate(0.95)" }} />
            <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"45%", background:"linear-gradient(transparent,rgba(6,10,20,0.85))" }} />
            <div style={{ position:"absolute", bottom:"1.25rem", left:"1.25rem", right:"1.25rem", display:"flex", gap:"0.65rem" }}>
              {["H. Ayep Zaki, S.E — Wali Kota","H. Bobby Maulana — Wakil Wali Kota"].map((n, i) => (
                <div key={i} style={{ flex:1, padding:"0.5rem 0.8rem", borderRadius:10, background:"rgba(6,10,20,0.75)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,0.09)" }}>
                  <p style={{ fontSize:"0.7rem", fontWeight:700, color:"white", lineHeight:1.35 }}>{n}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <div style={{ position:"absolute", top:"-1.25rem", right:"-1.25rem", background:"rgba(13,18,37,0.9)", backdropFilter:"blur(16px)", border:"1px solid rgba(212,175,55,0.25)", borderRadius:16, padding:"0.7rem 1rem", display:"flex", alignItems:"center", gap:"0.6rem", boxShadow:"0 8px 32px rgba(0,0,0,0.5)", zIndex:20 }}>
            <div style={{ width:32, height:32, borderRadius:9, background:"linear-gradient(135deg,#A07820,#D4AF37)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <TrendingUp size={15} color="#06091A" />
            </div>
            <div>
              <p style={{ fontSize:"0.65rem", color:"rgba(255,255,255,0.4)", fontWeight:600 }}>RPJMD</p>
              <p style={{ fontSize:"0.8rem", color:"#D4AF37", fontWeight:800 }}>Aktif 2025</p>
            </div>
          </div>

          {/* Corner accent dots */}
          {[[-8,"-8"], ["-8","calc(100% - 8px)"]].map(([t, b], i) => (
            <div key={i} style={{ position:"absolute", top:i === 0 ? -8 : undefined, bottom: i === 1 ? -8 : undefined, left:-8, width:16, height:16, borderRadius:"50%", background:"rgba(212,175,55,0.4)", boxShadow:"0 0 12px rgba(212,175,55,0.4)" }} />
          ))}
        </div>
      </section>

      {/* ── DIVIDER ──────────────────────────────────────── */}
      <div style={{ position:"relative", zIndex:1, margin:"0 5%", height:1, background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />

      {/* ── MENU SECTION ─────────────────────────────────── */}
      <section id="menu" style={{ position:"relative", zIndex:1, padding:"4.5rem 5% 5.5rem" }}>
        <div style={{ textAlign:"center", marginBottom:"3rem" }}>
          <p style={{ fontSize:"0.68rem", fontWeight:900, letterSpacing:"0.2em", textTransform:"uppercase", color:"#D4AF37", marginBottom:"0.65rem" }}>
            ✦ NAVIGASI KONTEN ✦
          </p>
          <h2 style={{ fontSize:"clamp(1.7rem,3vw,2.5rem)", fontWeight:900, color:"white", letterSpacing:"-0.02em", marginBottom:"0.65rem" }}>
            Menu Paparan Strategis
          </h2>
          <p style={{ fontSize:"0.95rem", color:"rgba(255,255,255,0.35)", maxWidth:480, margin:"0 auto", lineHeight:1.75 }}>
            Pilih kategori untuk mengakses paparan interaktif lengkap.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(340px,1fr))", gap:"1rem", maxWidth:1160, margin:"0 auto" }}>
          {MENU_ITEMS.map((item, index) => {
            const isHov = hovered === item.id;
            return (
              <Link
                key={item.id}
                href={`/slide/${item.slug}`}
                style={{ position:"relative", overflow:"hidden", display:"flex", alignItems:"center", gap:"1.25rem", padding:"1.4rem 1.5rem", borderRadius:20, background: isHov ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.025)", border: `1px solid ${isHov ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`, transition:"all 0.35s cubic-bezier(0.34,1.2,0.64,1)", textDecoration:"none", animation: mounted ? `slide-up-in 0.5s cubic-bezier(0.34,1.2,0.64,1) ${index * 0.07 + 0.1}s both` : "none", transform: isHov ? "translateY(-5px)" : "none", boxShadow: isHov ? `0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px ${item.glow}` : "none" }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Shimmer on hover */}
                {isHov && <div style={{ position:"absolute", top:0, bottom:0, width:"35%", background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)", animation:"shimmer-sweep 1.2s ease forwards" }} />}

                {/* Particles on hover */}
                {isHov && <FloatingParticles color={item.particle} />}

                {/* Animated glow bottom border on hover */}
                <div style={{ position:"absolute", bottom:0, left:0, right:0, height:2, background:item.gradient, opacity: isHov ? 0.9 : 0.3, transition:"opacity 0.3s", boxShadow: isHov ? `0 0 16px ${item.glow}` : "none" }} />

                {/* Number */}
                <div style={{ position:"absolute", top:"1rem", right:"1.2rem", fontSize:"0.62rem", fontWeight:900, color:"rgba(255,255,255,0.12)", letterSpacing:"0.06em" }}>
                  {item.label}
                </div>

                {/* Icon box with glow ring */}
                <div style={{ position:"relative", flexShrink:0 }}>
                  {/* Pulse ring */}
                  {isHov && (
                    <div style={{ position:"absolute", inset:-6, borderRadius:20, border:`1.5px solid ${item.glow}`, animation:"pulse-ring 1s ease-out infinite" }} />
                  )}
                  <div style={{ width:58, height:58, borderRadius:17, background:item.gradient, display:"flex", alignItems:"center", justifyContent:"center", boxShadow: isHov ? `0 8px 32px ${item.glow}, 0 0 0 1px rgba(255,255,255,0.1)` : `0 6px 20px ${item.glow}55`, transition:"all 0.3s", transform: isHov ? "scale(1.08)" : "scale(1)" }}>
                    <item.Icon size={26} />
                  </div>
                </div>

                {/* Text */}
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.3rem" }}>
                    <h3 style={{ fontWeight:800, fontSize:"0.97rem", color:"white", lineHeight:1.25, letterSpacing:"-0.01em" }}>{item.title}</h3>
                    <span style={{ fontSize:"0.58rem", fontWeight:800, padding:"0.2rem 0.5rem", borderRadius:4, background:`${item.glow}30`, color: isHov ? "white" : "rgba(255,255,255,0.4)", letterSpacing:"0.1em", textTransform:"uppercase", border:`1px solid ${item.glow}50`, transition:"all 0.3s", flexShrink:0 }}>
                      {item.tag}
                    </span>
                  </div>
                  <p style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.38)", lineHeight:1.55 }}>{item.desc}</p>
                </div>

                {/* Arrow */}
                <div style={{ width:34, height:34, borderRadius:"50%", background: isHov ? item.gradient : "rgba(255,255,255,0.05)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"all 0.3s", transform: isHov ? "translateX(3px)" : "none", boxShadow: isHov ? `0 4px 16px ${item.glow}` : "none" }}>
                  <ArrowRight size={15} color={isHov ? "white" : "rgba(255,255,255,0.3)"} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer style={{ position:"relative", zIndex:1, padding:"1.75rem 5%", borderTop:"1px solid rgba(255,255,255,0.05)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"0.75rem" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
          <div style={{ position:"relative", width:8, height:8 }}>
            <div style={{ position:"absolute", inset:0, borderRadius:"50%", background:"#22C55E" }} />
            <div style={{ position:"absolute", inset:-2, borderRadius:"50%", border:"1.5px solid #22C55E", animation:"pulse-ring 2.5s ease-out infinite" }} />
          </div>
          <span style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.25)", fontWeight:500 }}>Sistem aktif & beroperasi</span>
        </div>
        <p style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.18)" }}>
          © 2026 Pemerintah Kota Sukabumi · Tim Transformasi Digital
        </p>
        <div style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}>
          <div style={{ width:6, height:6, borderRadius:"50%", background:"rgba(142,21,64,0.8)" }} />
          <span style={{ fontSize:"0.68rem", color:"rgba(255,255,255,0.2)", fontWeight:700, letterSpacing:"0.08em" }}>RAHASIA</span>
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
