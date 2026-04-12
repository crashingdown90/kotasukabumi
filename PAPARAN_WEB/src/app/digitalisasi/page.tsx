"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Cpu, Database, Bell, Globe, Smartphone, Zap, Briefcase } from "lucide-react";

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
    gradient: "linear-gradient(135deg, #047857 0%, #059669 100%)",
    glow: "rgba(4,120,87,0.5)",
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
  {
    id: "egovernment",
    title: "SSO (Single Sign On)",
    desc: "Akses Terintegrasi Seluruh Layanan Tata Kelola Internal",
    Icon: Briefcase,
    gradient: "linear-gradient(135deg, #1E293B 0%, #475569 100%)",
    glow: "rgba(71,85,105,0.5)",
    slug: "digitalisasi",
    tag: "SSO",
  },
];

export default function DigitalisasiMenu() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-color)", color: "var(--text-main)", fontFamily: "var(--font-display)", position: "relative", overflowX: "hidden" }}>
      
      {/* ── BACKGROUND ───────────────────────────────────── */}
      <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0 }}>
        {/* Subtle Gradient Spot */}
        <div style={{ position:"absolute", top:"-10%", right:"-5%", width:"50vw", height:"50vw", borderRadius:"50%", background:"radial-gradient(circle, rgba(4,120,87,0.03) 0%, transparent 70%)" }} />
        {/* Dot grid — Cleaner */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
      </div>

      {/* ── NAV ──────────────────────────────────────────── */}
      <nav style={{ position:"sticky", top:0, zIndex:100, padding:"0 6%", height:72, display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(255,255,255,0.9)", backdropFilter:"blur(16px)", borderBottom:"1px solid var(--border-refined)", boxShadow:"0 1px 3px rgba(0,0,0,0.02)" }}>
        <Link href="/" style={{ display:"flex", alignItems:"center", gap:"0.75rem", textDecoration:"none", padding:"0.4rem 1rem", borderRadius:99, background:"var(--slate-50)", border:"1px solid var(--slate-200)", transition:"all 0.3s" }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background="white"; el.style.boxShadow="var(--shadow-sm)"; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background="var(--slate-50)"; el.style.boxShadow="none"; }}
        >
          <ArrowLeft size={16} color="var(--primary)" />
          <span style={{ fontSize:"0.85rem", fontWeight:700, color:"var(--text-main)" }}>Beranda</span>
        </Link>
        <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
          <div style={{ position:"relative", width:36, height:36, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ position:"absolute", inset:0, borderRadius:"8px", background:"var(--slate-50)", border:"1px solid var(--slate-200)" }} />
            <Image src="/Logo_Sukabumi.png" alt="Logo" width={24} height={24} />
          </div>
          <span style={{ fontWeight:800, fontSize:"1rem", color:"var(--text-main)", letterSpacing:"-0.01em" }}>Digitalisasi</span>
        </div>
      </nav>

      {/* ── CONTENT ─────────────────────────────────────── */}
      <section style={{ position:"relative", zIndex:1, padding:"5rem 6% 6rem", maxWidth:1300, margin:"0 auto" }}>
        <div style={{ textAlign:"left", marginBottom:"4.5rem", maxWidth:800 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem", padding:"0.5rem 1.2rem", borderRadius:99, background:"var(--slate-50)", border:"1px solid var(--slate-200)", marginBottom:"1.5rem" }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"var(--primary)" }} />
            <span style={{ fontSize:"0.7rem", fontWeight:850, color:"var(--primary)", letterSpacing:"0.1em", textTransform:"uppercase" }}>
              Kluster Digitalisasi Unggulan
            </span>
          </div>
          <h1 style={{ fontSize:"clamp(2.5rem,5vw,3.5rem)", fontWeight:900, color:"var(--text-main)", letterSpacing:"-0.04em", lineHeight:1.1, marginBottom:"1.25rem" }}>
            Transformasi Digital & <br />
            <span style={{ color:"var(--slate-400)" }}>Layanan Terpadu Kota</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
            Akselerasi Sistem Pemerintahan Berbasis Elektronik (SPBE) untuk mewujudkan tata kelola yang transparan, akuntabel, dan efisien bagi seluruh masyarakat.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))", gap:"1.5rem" }}>
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
                  padding:"2.25rem", 
                  borderRadius:24, 
                  background: isHov ? "white" : "rgba(255,255,255,0.6)", 
                  border: `1px solid ${isHov ? "var(--primary)" : "var(--border-refined)"}`, 
                  transition:"all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)", 
                  textDecoration:"none",
                  animation: mounted ? `slide-up-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.05 + 0.3}s both` : "none",
                  transform: isHov ? "translateY(-5px)" : "none",
                  boxShadow: isHov ? "var(--shadow-lg)" : "var(--shadow-sm)"
                }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"1.75rem" }}>
                  <div style={{ 
                    width:58, 
                    height:58, 
                    borderRadius:16, 
                    background:item.gradient, 
                    display:"flex", 
                    alignItems:"center", 
                    justifyContent:"center", 
                    boxShadow: isHov ? `0 10px 25px ${item.glow}44` : "none",
                    transition:"transform 0.4s ease"
                  }}>
                    <item.Icon size={28} color="white" />
                  </div>
                  <span style={{ fontSize:"0.6rem", fontWeight:900, padding:"0.35rem 0.75rem", borderRadius:8, background:"var(--slate-50)", border:"1px solid var(--slate-200)", color:"var(--text-subtle)", textTransform:"uppercase", letterSpacing:"0.1em" }}>
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontSize:"1.35rem", fontWeight:850, marginBottom:"0.75rem", color:"var(--text-main)", letterSpacing:"-0.02em" }}>{item.title}</h3>
                <p style={{ fontSize:"0.95rem", color:"var(--text-muted)", lineHeight:1.6, marginBottom:"2.5rem", flexGrow:1 }}>
                  {item.desc}
                </p>

                <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginTop:"auto" }}>
                  <span style={{ fontSize:"0.8rem", fontWeight:800, color: isHov ? "var(--primary)" : "var(--text-subtle)", textTransform:"uppercase", letterSpacing:"0.05em", transition:"all 0.3s" }}>
                    Lihat Progres & Strategis
                  </span>
                  <ArrowRight size={16} color={isHov ? "var(--primary)" : "var(--text-subtle)"} style={{ transition:"transform 0.4s", transform: isHov ? "translateX(4px)" : "none" }} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer style={{ textAlign:"center", padding:"4rem 6%", borderTop:"1px solid var(--border-refined)", background:"white" }}>
        <p style={{ fontSize:"0.8rem", color:"var(--text-subtle)", fontWeight:500 }}>
          © 2026 Pemerintah Kota Sukabumi · Tim Transformasi Digital SPBE
        </p>
      </footer>

      <style jsx global>{`
        @keyframes slide-up-in {
          from { opacity:0; transform:translateY(30px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>
    </main>
  );
}
