import React from "react";
import Image from "next/image";
import { Globe, FileText, ShieldCheck, Zap, Star, Target, Layers, CheckCircle2, FileDown, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK, PRIMARY_LIGHT, DARK_CARD, DARK_BORDER, DIGITAL_GLOW, PRIMARY_GLOW } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";
import { HUDBracket, ScanningLine } from "../components/HUDComponents";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  image?: string;
  logo?: string;
  IconComp: any;
  features?: { title: string, desc: string }[];
  metrics?: { label: string, value: string, unit?: string, trend?: string }[];
  highlights?: string[];
}

/* ── ANIMATED HUD LOGO ──────────────────────────────────── */
const AnimatedLogo = ({ src, size = 80 }: { src: string; size?: number }) => {
  return (
    <div style={{ position: "relative", width: size * 1.6, height: size * 1.6, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
      {/* Outer Rotating Dash Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `1.5px dashed ${PRIMARY}44` }}
      />
      {/* Inner Glowing Orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", inset: 8, borderRadius: "50%", border: `2px solid ${PRIMARY}11`, borderTopColor: PRIMARY, borderBottomColor: PRIMARY, filter: `drop-shadow(0 0 8px ${PRIMARY})` }}
      />
      {/* Pulse Core Glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", inset: 15, borderRadius: "50%", background: `radial-gradient(circle, ${PRIMARY} 0%, transparent 70%)`, filter: "blur(15px)", zIndex: 0 }}
      />
      
      {/* Main Logo Hex/Circular Frame */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        style={{ 
          position: "relative", 
          width: size, 
          height: size, 
          borderRadius: "50%", 
          overflow: "hidden", 
          border: `3px solid ${PRIMARY}`, 
          boxShadow: `0 0 30px ${PRIMARY}55, inset 0 0 20px ${PRIMARY}44`, 
          background: "rgba(0,0,0,0.6)", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          zIndex: 2,
          backdropFilter: "blur(4px)"
        }}
      >
        <Image 
          src={src} 
          alt="Dashboard Logo" 
          width={size * 0.8} 
          height={size * 0.8} 
          priority 
          style={{ objectFit: "contain", filter: "drop-shadow(0 0 5px rgba(255,255,255,0.2))" }} 
        />
        
        {/* Scanning Beam */}
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          style={{ 
            position: "absolute", 
            left: 0, 
            right: 0, 
            height: "2px", 
            background: `linear-gradient(90deg, transparent, ${PRIMARY}, #fff, ${PRIMARY}, transparent)`, 
            opacity: 0.6, 
            boxShadow: `0 0 15px ${PRIMARY}`, 
            zIndex: 3 
          }}
        />
      </motion.div>
    </div>
  );
};

/* ── HERO LAYOUT ────────────────────────────────────────── */
export function LayoutHero({ title, subtitle, body, logo }: LayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ textAlign: "center", padding: "4rem 2rem", position: "relative" }}
    >
      <AnimatedLogo src={logo || "/Logo_Sukabumi.png"} size={85} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", background: "rgba(0,0,0,0.5)", border: `1px solid ${PRIMARY}55`, padding: "0.8rem 2rem", borderRadius: 12, marginBottom: "2.5rem", backdropFilter: "blur(10px)", boxShadow: `0 0 20px ${PRIMARY}22`, borderTop: `4px solid ${PRIMARY}` }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: PRIMARY }}>
            <motion.div animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: "100%", height: "100%", borderRadius: "50%", background: PRIMARY }} />
          </div>
          <span style={{ fontSize: "0.9rem", fontWeight: 950, letterSpacing: "0.3em", color: "white", textTransform: "uppercase" }}>{subtitle}</span>
        </motion.div>
      </div>

      <h1 style={{
        fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)",
        fontWeight: 1000,
        color: "white",
        lineHeight: 1,
        marginBottom: "2.5rem",
        letterSpacing: "-0.05em",
        textShadow: "0 15px 40px rgba(0,0,0,1)",
        position: "relative"
      }}>
        {title}
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{ maxWidth: "850px", margin: "0 auto", fontSize: "1.25rem", color: TEXT_MUTED, lineHeight: 1.7, fontWeight: 500 }}
      >
        <InlineText text={body} />
      </motion.div>
    </motion.div>
  );
}

/* ── CLOSING LAYOUT ─────────────────────────────────────── */
export function LayoutClosing({ title, subtitle, body, logo }: LayoutProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: isMobile ? "1rem" : "2rem", position: "relative" }}
    >
      {/* Background Glow */}
      <div style={{ position: "absolute", width: isMobile ? "100%" : "1000px", height: "600px", background: `radial-gradient(circle, ${PRIMARY}15 0%, transparent 70%)`, filter: "blur(60px)", zIndex: 0 }} />

      <motion.div
        whileHover={{ boxShadow: `0 30px 100px ${PRIMARY}33` }}
        style={{
          ...GLASS_DARK,
          padding: isMobile ? "4rem 1.5rem 3rem" : "5.5rem 4.5rem",
          borderRadius: isMobile ? 32 : 48,
          border: `1px solid ${PRIMARY}33`,
          position: "relative",
          maxWidth: "950px",
          width: "100%",
          borderTop: `12px solid ${PRIMARY}`,
          zIndex: 5
        }}
      >
        <div style={{ position: "absolute", top: isMobile ? 10 : 30, right: isMobile ? 10 : 40, zIndex: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 950, color: "white", letterSpacing: "0.2em", opacity: 0.5 }}>PEMERINTAH KOTA</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 1000, color: GOLD, letterSpacing: "0.1em" }}>SUKABUMI</div>
            </div>
            <AnimatedLogo src={logo || "/Logo_Sukabumi.png"} size={isMobile ? 40 : 60} />
          </div>
        </div>
        <p style={{ fontSize: isMobile ? "0.8rem" : "0.95rem", fontWeight: 950, letterSpacing: "0.3em", color: PRIMARY, textTransform: "uppercase", marginBottom: "1.75rem", textAlign: isMobile ? "center" : "left" }}>{subtitle}</p>
        <h2 style={{
          fontSize: isMobile ? "2.2rem" : "clamp(2.8rem, 6.5vw, 4.8rem)",
          fontWeight: 1000,
          color: "white",
          marginBottom: "2.5rem",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          textShadow: "0 10px 30px rgba(0,0,0,0.5)",
          textAlign: isMobile ? "center" : "left"
        }}>{title}</h2>

        <div style={{
          fontSize: isMobile ? "1rem" : "1.35rem",
          color: TEXT_MAIN,
          maxWidth: "780px",
          margin: isMobile ? "0" : "0 auto 0 0",
          lineHeight: 1.7,
          fontWeight: 500,
          marginBottom: isMobile ? "3rem" : "3.5rem",
          textAlign: isMobile ? "center" : "left"
        }}>
          <InlineText text={body} />
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: "3rem" }} />

        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "flex-start",
          gap: isMobile ? "1.5rem" : "5rem",
          alignItems: isMobile ? "center" : "center"
        }}>
          <div style={{ textAlign: isMobile ? "center" : "right" }}>
            <div style={{ fontSize: "0.75rem", color: TEXT_MUTED, fontWeight: 900, letterSpacing: "0.15em", marginBottom: "0.5rem" }}>ESTABLISHED IN</div>
            <div style={{ fontSize: "1.25rem", color: GOLD, fontWeight: 1000, letterSpacing: "0.05em" }}>KOTA SUKABUMI</div>
          </div>

          {!isMobile && <div style={{ width: 1, height: 50, background: "rgba(255,183,3,0.15)" }} />}

          <div style={{ textAlign: isMobile ? "center" : "left" }}>
            <div style={{ fontSize: "0.75rem", color: TEXT_MUTED, fontWeight: 900, letterSpacing: "0.15em", marginBottom: "0.5rem" }}>APPROVED BY AUTHORITY</div>
            <div style={{ fontSize: "1.15rem", color: "white", fontWeight: 1000 }}>Pemerintah Kota Sukabumi</div>
          </div>
        </div>

        {/* Commitment Badge */}
        {!isMobile && (
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ position: "absolute", bottom: -20, right: 40, background: GOLD, padding: "0.75rem 1.5rem", borderRadius: 14, color: "black", fontWeight: 1000, fontSize: "0.75rem", letterSpacing: "0.2em", boxShadow: `0 15px 35px ${GOLD}44`, border: "1px solid rgba(255,255,255,0.3)" }}
          >
            DIGITAL READY 2026
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── RESOURCES LAYOUT ───────────────────────────────────── */
export function LayoutResources({ title, subtitle, body }: LayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}
    >
      <p style={{ fontSize: "0.85rem", fontWeight: 900, letterSpacing: "0.25em", color: GOLD, textTransform: "uppercase", marginBottom: "1.25rem" }}>{subtitle}</p>
      <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 950, color: "white", marginBottom: "4rem", letterSpacing: "-0.03em" }}>{title}</h2>

      <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", justifyContent: "center" }}>
        {/* PDF Link */}
        <motion.a
          whileHover={{ scale: 1.05, y: -5 }}
          href="/docs/perda-rpjmd-2025.pdf" target="_blank" rel="noopener noreferrer"
          style={{ ...GLASS_DARK, padding: "3rem 2.5rem", borderRadius: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", width: "300px", textDecoration: "none", border: `1px solid ${GOLD}33`, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
        >
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: `${GOLD}15`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${GOLD}22` }}>
            <FileDown size={36} color={GOLD} />
          </div>
          <div>
            <div style={{ fontWeight: 900, fontSize: "1.25rem", color: "white", marginBottom: "0.5rem", letterSpacing: "0.02em" }}>PDF RESMI (HD)</div>
            <div style={{ fontSize: "0.85rem", color: TEXT_MUTED, fontWeight: 500 }}>Download Salinan Perda Asli</div>
          </div>
        </motion.a>

        {/* Markdown Link */}
        <motion.a
          whileHover={{ scale: 1.05, y: -5 }}
          href="/docs/perda-rpjmd-2025.md" target="_blank" rel="noopener noreferrer"
          style={{ ...GLASS_DARK, padding: "3rem 2.5rem", borderRadius: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", width: "300px", textDecoration: "none", border: `1px solid ${PRIMARY}33`, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
        >
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: `${PRIMARY}15`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${PRIMARY}22` }}>
            <Eye size={36} color={PRIMARY} />
          </div>
          <div>
            <div style={{ fontWeight: 900, fontSize: "1.25rem", color: "white", marginBottom: "0.5rem", letterSpacing: "0.02em" }}>FULL MARKDOWN</div>
            <div style={{ fontSize: "0.85rem", color: TEXT_MUTED, fontWeight: 500 }}>Lihat Versi Text (Digital)</div>
          </div>
        </motion.a>
      </div>

      <div style={{ marginTop: "4rem", color: TEXT_MUTED, fontSize: "1rem", maxWidth: "500px", lineHeight: 1.7, fontWeight: 500 }}>
        {body}
      </div>
    </motion.div>
  );
}

/* ── CARDS LAYOUT ───────────────────────────────────────── */
export function LayoutCards({ title, subtitle, body, features, highlights }: LayoutProps) {
  // Fallback to old parse if features/highlights don't exist
  const items = features || highlights || parseListItems(body);
  const icons = [Globe, FileText, ShieldCheck, Zap, Star, Target, Layers, CheckCircle2];

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
      <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "white", marginBottom: "2.5rem", letterSpacing: "-0.02em" }}>{title}</h2>

      {body && (!features && !highlights) && !body.trim().startsWith("<ul") && (
        <div style={{ fontSize: "1.1rem", color: TEXT_MUTED, marginBottom: "2rem", lineHeight: 1.6, maxWidth: "800px" }}>
          {body.replace(/<ul>.*?<\/ul>/, "").trim()}
        </div>
      )}

      {body && (features || highlights) && (
        <div style={{ fontSize: "1.1rem", color: TEXT_MUTED, marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: "800px" }}>
          <InlineText text={body.replace(/<ul>.*?<\/ul>/, "").trim()} />
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "1.5rem" }} className="grid-responsive">
        {items.map((item: any, i: number) => {
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
            label = `Poin ${i + 1}`;
            rest = item;
          }

          const CardIcon = icons[i % icons.length];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.06)", borderColor: `${GOLD}55` }}
              style={{ ...GLASS_DARK, borderRadius: 24, padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem", border: "1px solid rgba(255,255,255,0.05)", cursor: "default", position: "relative", overflow: "hidden" }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${GOLD}44, transparent)` }} />
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <CardIcon size={22} color={PRIMARY} />
                </div>
                {label && <span style={{ fontWeight: 800, fontSize: "1.1rem", color: GOLD, letterSpacing: "0.02em" }}>{label}</span>}
              </div>
              {rest && <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.7, margin: 0, fontWeight: 500 }}><InlineText text={rest} /></p>}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
