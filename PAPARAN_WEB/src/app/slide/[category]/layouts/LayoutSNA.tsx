import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Network, Search, Zap, CheckCircle } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";
import { getStaticRandom, RANDOM_POOL_XY, RANDOM_POOL_DUR } from "../components/PurityUtils";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

export default function LayoutSNA({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  
  // Pre-generate random nodes to avoid hydration mismatches
  const nodes = useMemo(() => {
    const list = [];
    for (let i = 0; i < 40; i++) {
       const x = 10 + getStaticRandom(i, RANDOM_POOL_XY) * 80; // 10% to 90%
       const y = 10 + getStaticRandom(i + 40, RANDOM_POOL_XY) * 80; // 10% to 90%
       // Initially, nodes closer to left (x < 50) are "infected" (Red), nodes closer to right are "neutral" (Gray)
       list.push({ 
         id: i, 
         x, 
         y, 
         isRed: x < 50,
         size: getStaticRandom(i, RANDOM_POOL_XY) > 0.8 ? 6 : 3,
         duration: 2 + getStaticRandom(i, RANDOM_POOL_DUR)
       });
    }
    return list;
  }, []);

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", animation: "animate-up 0.8s ease-out" }}>
      <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.7rem" }}>{subtitle}</p>
      <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 950, color: TEXT_MAIN, marginBottom: "2rem", letterSpacing: "-0.03em" }}>{title}</h2>

      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem", flex: 1, minHeight: 0 }}>
        
        {/* ── LEFT: SNA VISUALIZATION (THE NETWORK) ────────────────── */}
        <div style={{ ...GLASS_DARK, borderRadius: 32, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", border: "1px solid rgba(255,255,255,0.05)" }}>
          
          <div style={{ position: "absolute", top: 20, left: 20, zIndex: 10 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.6)", padding: "0.4rem 0.8rem", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.6rem", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "0.1em" }}>
              <Network size={14} color={GOLD} /> LIVE SNA SIMULATION
            </div>
          </div>
          
          {/* Legend */}
          <div style={{ position: "absolute", bottom: 20, left: 20, zIndex: 10, display: "flex", gap: "1rem", background: "rgba(255,255,255,0.7)", padding: "0.5rem 1rem", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)", backdropFilter: "blur(10px)" }}>
             <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.65rem", color: TEXT_MAIN, fontWeight: 800 }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: PRIMARY, boxShadow: `0 0 8px ${PRIMARY}` }}/> Hoaks / Negatif</div>
             <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.65rem", color: TEXT_MAIN, fontWeight: 800 }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", boxShadow: `0 0 8px #10B981` }}/> Strategic Counter-Narrative</div>
             <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.65rem", color: TEXT_MUTED, fontWeight: 800 }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.2)" }}/> Warga Net</div>
          </div>

          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
            {/* Background links (Organic spread) */}
            {nodes.map((node, i) => {
               if(i > 25) return null;
               const target = nodes[(i + 3) % nodes.length];
               return (
                 <motion.line 
                   key={`link-${i}`} x1={`${node.x}%`} y1={`${node.y}%`} x2={`${target.x}%`} y2={`${target.y}%`} 
                   stroke="rgba(255,255,255,0.05)" strokeWidth="1"
                 />
               )
            })}
            
            {/* The Spread of Hoax (Red Lines) */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.2] }} transition={{ duration: 4, times: [0, 0.2, 1], repeat: Infinity, repeatDelay: 2 }}>
               {nodes.slice(0, 10).map((node, i) => {
                 const target = nodes[i + 10];
                 return <line key={`hoax-${i}`} x1={`${node.x}%`} y1={`${node.y}%`} x2={`${target.x}%`} y2={`${target.y}%`} stroke={PRIMARY} strokeWidth="2" strokeOpacity="0.4" strokeDasharray="4 4" />
               })}
            </motion.g>

            {/* SMC Intervention (Green Lines cutting through) */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: [0, 0, 1, 0] }} transition={{ duration: 4, times: [0, 0.4, 0.6, 1], repeat: Infinity, repeatDelay: 2 }}>
               {nodes.slice(10, 20).map((node, i) => {
                 const target = nodes[i + 20];
                 const hubX = 80; const hubY = 30; // SMC Hub
                 return (
                   <React.Fragment key={`smc-${i}`}>
                     <line x1={`${hubX}%`} y1={`${hubY}%`} x2={`${node.x}%`} y2={`${node.y}%`} stroke="#10B981" strokeWidth="2" strokeOpacity="0.6" />
                     <circle cx={`${node.x}%`} cy={`${node.y}%`} r="6" fill="#10B981" />
                   </React.Fragment>
                 )
               })}
            </motion.g>

            {/* Nodes */}
            {nodes.map((node, i) => (
               <motion.circle 
                 key={`node-${i}`} cx={`${node.x}%`} cy={`${node.y}%`} r={node.size} 
                 fill={node.isRed ? PRIMARY : "rgba(255,255,255,0.2)"}
                 animate={{ scale: [1, 1.2, 1] }} transition={{ duration: node.duration, repeat: Infinity }}
               />
            ))}
            
            {/* Source of Hoax */}
            <circle cx="20%" cy="50%" r="15" fill={PRIMARY} fillOpacity="0.2" stroke={PRIMARY} strokeWidth="2" />
            <circle cx="20%" cy="50%" r="5" fill={PRIMARY} />

            {/* SMC Hub */}
            <circle cx="80%" cy="30%" r="20" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="2" />
            <circle cx="80%" cy="30%" r="8" fill="#10B981" />
            <text x="80%" y="30%" dy="-25" fill="#10B981" fontSize="12" fontWeight="bold" textAnchor="middle">COMMAND HUB</text>
          </svg>

        </div>

        {/* ── RIGHT: DESCRIPTIVE TEXT & PROTOCOL ────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", overflowY: "auto" }} className="custom-scroll">
           
           <div style={{ ...GLASS_DARK, borderRadius: 24, padding: "2rem", border: `1px solid ${PRIMARY}44`, background: `linear-gradient(135deg, rgba(20,20,30,0.8), rgba(142,21,64,0.1))` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <Zap size={24} color={PRIMARY} />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 900, color: TEXT_MAIN, margin: 0, letterSpacing: "-0.01em" }}>Viralitas Eksponensial</h3>
              </div>
              <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>
                Dalam Social Network Analysis (SNA), satu &quot;Super Spreader&quot; dapat menginfeksi ribuan *node* organik hanya dalam hitungan menit jika dibiarkan dalam ruang kosong (Information Void).
              </p>
           </div>

           {items.map((item, i) => {
             const { label, rest } = parseBoldLabel(item);
             return (
               <motion.div 
                 key={i} 
                 whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.03)" }}
                 style={{ ...GLASS_DARK, borderRadius: 20, padding: "1.5rem", borderLeft: `4px solid ${GOLD}` }}
               >
                 <div style={{ fontSize: "1.05rem", fontWeight: 900, color: GOLD, marginBottom: "0.5rem" }}>{label}</div>
                 <p style={{ fontSize: "0.95rem", color: TEXT_MAIN, fontWeight: 500, margin: 0, lineHeight: 1.5 }}><InlineText text={rest} /></p>
               </motion.div>
             );
           })}

        </div>
      </div>
    </div>
  );
}
