import React from "react";
import { Users, ShieldCheck, Building2, Radio, Zap, ChevronDown, Activity, CheckCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

export default function LayoutCommFlow({ title, subtitle, body }: LayoutProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  return (
    <motion.div initial="hidden" animate="show" variants={container} style={{ height: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: isMobile ? "1.5rem" : "2rem" }}>
        <p style={{ fontSize: "0.8rem", fontWeight: 900, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.6rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 950, color: "white", letterSpacing: "-0.03em", margin: 0 }}>{title}</h2>
        <div style={{ marginTop: "1rem", color: TEXT_MUTED, fontSize: "1rem", maxWidth: "800px", margin: "1rem auto 0" }}>{body}</div>
      </div>

      {/* FLOWCHART AREA */}
      <div style={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: isMobile ? "flex-start" : "center",
        position: "relative",
        padding: isMobile ? "0 0 50px 0" : "0",
        overflowY: isMobile ? "auto" : "visible",
        overflowX: "hidden"
      }}>

        {/* TIER 1: PIMPINAN */}
        <NodeComponent 
          tier="Tier 1" 
          title="Mandat Strategis" 
          subtitle="Walikota & Wakil Walikota" 
          Icon={Users} 
          color={GOLD} 
          details={["Penentu Arah Kebijakan", "Persetujuan Narasi Tunggal", "Evaluasi Dampak Publik"]}
        />

        {/* ARROW 1: Command Flow */}
        <FlowArrow direction="down" color={GOLD} isMobile={isMobile} />

        {/* TIER 2: SMC (ORCHESTRATOR) */}
        <NodeComponent 
          tier="Tier 2" 
          title="Orkestrator Utama" 
          subtitle="TIM KHUSUS SMC" 
          Icon={ShieldCheck} 
          color={PRIMARY} 
          isMain={true}
          details={["Sentinel Analisis Isu", "Produksi Konten Kreatif", "Manajemen Krisis 24/7"]}
        />

        {/* BRANCHING ARROW TO TIER 3 */}
        {!isMobile ? (
          <div style={{ position: "relative", width: "1000px", height: "100px" }}>
             <DesktopBranchLines />
          </div>
        ) : (
          <FlowArrow direction="down" color={PRIMARY} isMobile={true} />
        )}

        {/* TIER 3: IMPLEMENTERS */}
        <div style={{ 
          display: "flex", 
          flexDirection: isMobile ? "column" : "row", 
          justifyContent: isMobile ? "flex-start" : "center", 
          width: "100%",
          gap: isMobile ? "2rem" : "4rem",
          alignItems: "center"
        }}>
           
           <NodeComponent 
              tier="Tier 3" 
              title="Koordinasi Operasional" 
              subtitle="Diskominfo & OPD" 
              Icon={Building2} 
              color="#3B82F6" 
              details={["Sinkronisasi Data Lapangan", "Respon Teknis Aduan", "Diseminasi Kanal Dinas"]}
           />

           {isMobile && <FlowArrow direction="down" color={PRIMARY} isMobile={true} />}

           <NodeComponent 
              tier="Tier 3" 
              title="Sirkuit Amplifikasi" 
              subtitle="Media & KOL Network" 
              Icon={Radio} 
              color="#10B981" 
              details={["Publikasi Masif (One Gate)", "Monitoring Berita Lokal", "Engagement Tokoh Publik"]}
           />

        </div>

      </div>

      {/* FLOATING HUD ELEMENT */}
      {!isMobile && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 2 }}
          style={{ position: "absolute", bottom: 30, right: 30, background: "rgba(0,0,0,0.6)", padding: "1.25rem", borderRadius: 20, border: `1px solid ${GOLD}33`, backdropFilter: "blur(10px)", display: "flex", alignItems: "center", gap: "12px" }}
        >
           <Activity size={24} color={GOLD} className="pulsate" />
           <div>
              <div style={{ fontSize: "0.6rem", color: TEXT_MUTED, fontWeight: 800, letterSpacing: "0.1em" }}>COMMUNICATION STATUS</div>
              <div style={{ fontSize: "0.9rem", color: "white", fontWeight: 900 }}>TERHUBUNG & AKTIF</div>
           </div>
        </motion.div>
      )}

      <style jsx>{`
        .pulsate { animation: pulsate 2s infinite ease-in-out; }
        @keyframes pulsate { 0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; } }
      `}</style>
    </motion.div>
  );
}

function NodeComponent({ tier, title, subtitle, Icon, color, details, isMain = false }: any) {
  return (
    <motion.div
      variants={{
        hidden: { scale: 0.8, opacity: 0, y: 20 },
        show: { scale: 1, opacity: 1, y: 0, transition: { type: "spring", damping: 15 } }
      }}
      whileHover={{ y: -5, boxShadow: `0 20px 60px ${color}33` }}
      style={{
        ...GLASS_DARK,
        width: isMain ? 340 : 280,
        padding: isMain ? "2rem" : "1.5rem",
        borderRadius: 28,
        border: `1px solid ${color}44`,
        boxShadow: isMain ? `0 0 50px ${color}22` : "none",
        textAlign: "left",
        position: "relative",
        zIndex: 5
      }}
    >
       <div style={{ position: "absolute", top: 15, right: 15, fontSize: "0.65rem", fontWeight: 900, color: color, opacity: 0.6, letterSpacing: "0.1em" }}>{tier}</div>
       
       <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
         <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${color}44` }}>
            <Icon size={22} color={color} />
         </div>
         <div>
            <div style={{ fontSize: "0.65rem", fontWeight: 900, color: color, textTransform: "uppercase", letterSpacing: "0.1em" }}>{title}</div>
            <div style={{ fontSize: isMain ? "1.1rem" : "1rem", fontWeight: 950, color: "white" }}>{subtitle}</div>
         </div>
       </div>

       <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {details.map((item: string, idx: number) => (
            <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
               <CheckCircle size={14} color={color} style={{ marginTop: "2px", flexShrink: 0 }} />
               <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", fontWeight: 500, lineHeight: 1.3 }}>{item}</span>
            </div>
          ))}
       </div>
       
       {isMain && (
         <motion.div 
           animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.02, 1] }}
           transition={{ duration: 3, repeat: Infinity }}
           style={{ position: "absolute", inset: -2, borderRadius: 28, border: `3px solid ${color}33`, zIndex: -1 }}
         />
       )}
    </motion.div>
  );
}

function FlowArrow({ direction, color, isMobile }: any) {
  return (
    <div style={{ height: isMobile ? 40 : 60, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
       <motion.div 
         initial={{ height: 0 }} 
         animate={{ height: isMobile ? 40 : 60 }} 
         transition={{ duration: 0.8 }}
         style={{ width: 2, background: `linear-gradient(to bottom, ${color}44, ${color})`, position: "relative" }}
       >
          <ChevronDown size={20} color={color} style={{ position: "absolute", bottom: -8, left: -9 }} />
          
          {/* Animated Packet */}
          <motion.div 
            animate={{ y: [0, isMobile ? 30 : 50], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", width: 6, height: 6, borderRadius: "50%", background: color, left: -2, boxShadow: `0 0 10px ${color}` }}
          />
       </motion.div>
    </div>
  );
}

function DesktopBranchLines() {
  return (
    <svg width="1000" height="100" viewBox="0 0 1000 100" fill="none" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 0 }}>
      {/* Central Connector */}
      <path d="M500 0 L500 40" stroke="white" strokeWidth="2" strokeOpacity="0.2" />
      
      {/* Horizontal Branch */}
      <path d="M220 40 L780 40" stroke="white" strokeWidth="2" strokeOpacity="0.2" />
      
      {/* Down Connectors */}
      <path d="M220 40 L220 70" stroke="white" strokeWidth="2" strokeOpacity="0.2" />
      <path d="M780 40 L780 70" stroke="white" strokeWidth="2" strokeOpacity="0.2" />
      
      {/* Animated Flow Packets Left */}
      <motion.circle 
        r="4" 
        fill={PRIMARY} 
        initial={{ opacity: 0 }}
        animate={{ 
          cx: [500, 500, 220, 220], 
          cy: [0, 40, 40, 70], 
          opacity: [0, 1, 1, 0] 
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: `drop-shadow(0 0 5px ${PRIMARY})` }}
      />

      {/* Animated Flow Packets Right */}
      <motion.circle 
        r="4" 
        fill="#10B981" 
        initial={{ opacity: 0 }}
        animate={{ 
          cx: [500, 500, 780, 780], 
          cy: [0, 40, 40, 70], 
          opacity: [0, 1, 1, 0] 
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        style={{ filter: `drop-shadow(0 0 5px #10B981)` }}
      />

      {/* Arrow Heads */}
      <path d="M214 65 L220 72 L226 65" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      <path d="M774 65 L780 72 L786 65" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
    </svg>
  );
}
