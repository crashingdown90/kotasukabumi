"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Cpu, Database, Bell, Globe, Smartphone, Zap } from "lucide-react";

const SUB_MENU_ITEMS = [
  {
    id: "strategi",
    title: "Strategi Transformasi",
    desc: "Akselerasi Digitalisasi Pemerintahan & Pelayanan Publik",
    Icon: Globe,
    gradient: "linear-gradient(135deg, #0D4F3C 0%, #1A8B6A 100%)",
    glow: "rgba(26,139,106,0.5)",
    slug: "digitalisasi_spbe",
    tag: "STRATEGI",
  },
  {
    id: "superapp",
    title: "Super App Sukabumi",
    desc: "Single Portal Layanan Terpadu dalam Satu Genggaman",
    Icon: Smartphone,
    gradient: "linear-gradient(135deg, #1A3A6B 0%, #2E5FA8 100%)",
    glow: "rgba(46,95,168,0.5)",
    slug: "digitalisasi_superapp",
    tag: "MOBILE",
  },
  {
    id: "integrasi",
    title: "Integrasi Data (Inter)",
    desc: "Interoperabilitas Data Lintas Sektoral & OPD",
    Icon: Database,
    gradient: "linear-gradient(135deg, #8E1540 0%, #C41E5B 100%)",
    glow: "rgba(142,21,64,0.5)",
    slug: "digitalisasi_integrasi",
    tag: "DATA",
  },
  {
    id: "aduan",
    title: "Layanan Aduan Publik",
    desc: "Manajemen Aspirasi & Keluhan Warga Real-Time",
    Icon: Bell,
    gradient: "linear-gradient(135deg, #A07820 0%, #D4AF37 100%)",
    glow: "rgba(212,175,55,0.5)",
    slug: "digitalisasi_aduan",
    tag: "LAYANAN",
  },
  {
    id: "smartcity",
    title: "Smart City Sukabumi",
    desc: "Implementasi Teknologi Kota Cerdas Berkelanjutan",
    Icon: Zap,
    gradient: "linear-gradient(135deg, #3D1A6B 0%, #7B2FBE 100%)",
    glow: "rgba(123,47,190,0.5)",
    slug: "digitalisasi_smartcity",
    tag: "CITY",
  },
  {
    id: "chatbot",
    title: "Chatbot & AI Helper",
    desc: "Asisten Virtual Berbasis AI untuk Informasi Publik",
    Icon: Cpu,
    gradient: "linear-gradient(135deg, #060A14 0%, #2E3D60 100%)",
    glow: "rgba(255,255,255,0.2)",
    slug: "digitalisasi_chatbot",
    tag: "AI TECH",
  },
];

export default function DigitalisasiMenu() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-color)", color: "var(--text-main)", fontFamily: "var(--font-display)", position: "relative", overflowX: "hidden" }}>
      
      {/* ── BACKGROUND ───────────────────────────────────── */}
      <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0 }}>
        <div style={{ position:"absolute", top:"-25%", left:"-10%", width:"80vw", height:"80vw", borderRadius:"50%", background:"radial-gradient(circle, rgba(26,139,106,0.03) 0%, transparent 65%)" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px)", backgroundSize:"28px 28px" }} />
      </div>

      {/* ── NAV ──────────────────────────────────────────── */}
      <nav style={{ position:"sticky", top:0, zIndex:100, padding:"0 5%", height:68, display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(248,250,252,0.8)", backdropFilter:"blur(24px)", borderBottom:"1px solid rgba(15,23,42,0.05)" }}>
        <Link href="/" style={{ display:"flex", alignItems:"center", gap:"0.75rem", textDecoration:"none" }}>
          <div style={{ width:34, height:34, borderRadius:"50%", background:"rgba(255,255,255,0.8)", display:"flex", alignItems:"center", justifyContent:"center", border:"1px solid rgba(15,23,42,0.08)" }}>
            <ArrowLeft size={16} color="var(--text-main)" />
          </div>
          <span style={{ fontSize:"0.85rem", fontWeight:700, color:"var(--text-muted)" }}>Kembali ke Beranda</span>
        </Link>
        <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
          <Image src="/Logo_Sukabumi.png" alt="Logo" width={24} height={24} />
          <span style={{ fontWeight:800, fontSize:"0.9rem", color:"var(--text-main)", letterSpacing:"-0.01em" }}>Digitalisasi SPBE</span>
        </div>
      </nav>

      {/* ── CONTENT ─────────────────────────────────────── */}
      <section style={{ position:"relative", zIndex:1, padding:"4rem 5% 6rem", maxWidth:1200, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <p style={{ fontSize:"0.7rem", fontWeight:900, letterSpacing:"0.2em", textTransform:"uppercase", color:"#1A8B6A", marginBottom:"0.75rem" }}>
            ✦ KLUSTER DIGITALISASI ✦
          </p>
          <h1 style={{ fontSize:"clamp(2rem,5vw,3rem)", fontWeight:900, color:"var(--text-main)", letterSpacing:"-0.03em", marginBottom:"1rem" }}>
            Pilih Sub-Materi Paparan
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Silahkan pilih bidang digitalisasi untuk melihat paparan strategi dan pencapaian teknis Kota Sukabumi.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))", gap:"1.25rem" }}>
          {SUB_MENU_ITEMS.map((item, index) => {
            const isHov = hovered === item.id;
            return (
              <Link
                key={item.id}
                href={`/slide/${item.slug}`}
                style={{ 
                  position:"relative", 
                  display:"flex", 
                  flexDirection:"column",
                  padding:"2rem", 
                  borderRadius:24, 
                  background: isHov ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.5)", 
                  border: `1px solid ${isHov ? "rgba(26,139,106,0.2)" : "rgba(15,23,42,0.06)"}`, 
                  transition:"all 0.4s cubic-bezier(0.34,1.2,0.64,1)", 
                  textDecoration:"none",
                  transform: isHov ? "translateY(-8px)" : "none",
                  boxShadow: isHov ? `0 30px 60px rgba(0,0,0,0.06), 0 0 0 1px ${item.glow}22` : "none"
                }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Glow Accent */}
                <div style={{ position:"absolute", top:0, right:0, width:100, height:100, background:`radial-gradient(circle at top right, ${item.glow}, transparent 70%)`, opacity: isHov ? 0.6 : 0.2, transition:"opacity 0.3s" }} />

                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"1.5rem" }}>
                  <div style={{ width:54, height:54, borderRadius:16, background:item.gradient, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 8px 24px ${item.glow}44` }}>
                    <item.Icon size={24} color="white" />
                  </div>
                  <span style={{ fontSize:"0.65rem", fontWeight:800, padding:"0.3rem 0.7rem", borderRadius:6, background:"rgba(15,23,42,0.03)", border:"1px solid rgba(15,23,42,0.08)", color:"var(--text-subtle)", textTransform:"uppercase", letterSpacing:"0.1em" }}>
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontSize:"1.25rem", fontWeight:800, marginBottom:"0.6rem", color:"var(--text-main)" }}>{item.title}</h3>
                <p style={{ fontSize:"0.9rem", color:"var(--text-muted)", lineHeight:1.6, marginBottom:"2rem", flexGrow:1 }}>
                  {item.desc}
                </p>

                <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", color: isHov ? "var(--primary)" : "var(--text-subtle)", transition:"color 0.3s" }}>
                  <span style={{ fontSize:"0.85rem", fontWeight:700 }}>Buka Paparan</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer style={{ textAlign:"center", padding:"3rem 5%", borderTop:"1px solid rgba(15,23,42,0.05)", opacity:0.4 }}>
        <p style={{ fontSize:"0.75rem", color:"var(--text-muted)" }}>© 2026 Pemerintah Kota Sukabumi · Strategic Communication Command Center</p>
      </footer>

      <style jsx global>{`
        @keyframes orb-drift {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(2%, 2%); }
        }
      `}</style>
    </main>
  );
}
