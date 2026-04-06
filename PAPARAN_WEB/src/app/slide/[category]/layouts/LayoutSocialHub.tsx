import React from "react";

import { Camera, MonitorPlay, MessageCircle, Users, Smartphone, Globe, ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { InlineText, parseListItems } from "../components/Shared";

interface Item {
  title: string;
  desc: string;
}

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: Item[];
  highlights?: string[];
}

export default function LayoutSocialHub({ title, subtitle, body, features, highlights }: LayoutProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const items: Item[] = features || (highlights ? (highlights as string[]).map(h => ({ title: h, desc: h })) : (typeof body === 'string' && body.includes('<li>') ? parseListItems(body).map(li => ({ title: li, desc: li })) : []));
  
  // Mapping brand colors & icons
  const getBrand = (name: string) => {
    const text = name.toLowerCase();
    if (text.includes("instagram")) return { color: "#E1306C", Icon: Camera };
    if (text.includes("tiktok")) return { color: "#00f2fe", Icon: Smartphone };
    if (text.includes("facebook")) return { color: "#1877F2", Icon: Users };
    if (text.includes("youtube")) return { color: "#FF0000", Icon: MonitorPlay };
    if (text.includes("twitter") || text.includes("x:")) return { color: "#1DA1F2", Icon: MessageCircle };
    return { color: GOLD, Icon: Globe };
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const centerNode: Variants = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { type: "spring", damping: 15 } }
  };

  return (
    <motion.div 
      initial="hidden" animate="show" variants={container} 
      style={{ 
        height: isMobile ? "auto" : "100%", 
        minHeight: "100%",
        display: "flex", 
        flexDirection: "column", 
        position: "relative", 
        overflowY: isMobile ? "auto" : "hidden",
        paddingBottom: isMobile ? "120px" : "2rem" 
      }}
    >
      
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "2rem", zIndex: 10 }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.02em", margin: 0 }}>{title}</h2>
      </div>

      {/* HUB VISUALIZATION CONTAINER */}
      <div style={{ 
        flex: 1, 
        position: "relative", 
        display: "flex", 
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center", 
        justifyContent: "center", 
        isolation: "isolate",
        minHeight: isMobile ? "auto" : "600px",
        gap: isMobile ? "2rem" : "0"
      }}>
        
        {/* DATA STREAM LINES (SVG) - Hidden on Mobile */}
        {!isMobile && (
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}>
             <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor={PRIMARY} stopOpacity="0.2" />
                   <stop offset="50%" stopColor={PRIMARY} stopOpacity="0.6" />
                   <stop offset="100%" stopColor={PRIMARY} stopOpacity="0.2" />
                </linearGradient>
             </defs>
             
             {/* Static background grid lines for structure */}
             <circle cx="50%" cy="50%" r="40%" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="10 5" />
             <circle cx="50%" cy="50%" r="20%" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="5 5" />
          </svg>
        )}

        {/* CENTRAL HUB CORE */}
        <motion.div 
          variants={centerNode}
          style={{ 
            zIndex: 10,
            width: isMobile ? 140 : 180, 
            height: isMobile ? 140 : 180, 
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(239,68,68,0.2) 0%, rgba(0,0,0,0.8) 100%)",
            border: `2px solid ${PRIMARY}`,
            boxShadow: `0 0 60px ${PRIMARY}44, inset 0 0 30px ${PRIMARY}44`,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            textAlign: "center", padding: "20px",
            position: isMobile ? "static" : "relative"
          }}
        >
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", inset: -10, border: "2px dashed rgba(255,255,255,0.05)", borderRadius: "50%" }} />
           <ShieldCheck size={isMobile ? 32 : 40} color={PRIMARY} />
           <div style={{ fontSize: isMobile ? "0.55rem" : "0.65rem", fontWeight: 950, color: TEXT_MUTED, marginTop: "10px", letterSpacing: "0.1em" }}>CENTRAL CORE</div>
           <div style={{ fontSize: isMobile ? "0.8rem" : "0.95rem", fontWeight: 900, color: TEXT_MAIN }}>SMC HUB</div>
        </motion.div>

        {/* Symmetrical Grid Implementation - Conditional for Mobile */}
        <div style={{ 
          position: isMobile ? "static" : "absolute", 
          inset: 0, 
          display: "flex", 
          flexDirection: "column", 
          gap: isMobile ? "1rem" : "2rem",
          justifyContent: isMobile ? "flex-start" : "space-between", 
          padding: isMobile ? "0" : "40px",
          width: "100%"
        }}>
           {/* Row: 3 Items (Desktop) or 1-by-1 (Mobile) */}
           <div style={{ 
             display: "flex", 
             flexDirection: isMobile ? "column" : "row",
             justifyContent: isMobile ? "flex-start" : "space-around", 
             alignItems: "center",
             gap: isMobile ? "1rem" : "0",
             width: "100%" 
           }}>
              {items.slice(0, isMobile ? 5 : 3).map((item, i) => (
                <PlatformCard key={i} item={item} color={getBrand(item.title).color} Icon={getBrand(item.title).Icon} i={i} isMobile={isMobile} />
              ))}
           </div>
           
           {/* Bottom Row: 2 Items - Hidden on Mobile (merged into top list) */}
           {!isMobile && (
             <div style={{ display: "flex", justifyContent: "center", gap: "15%", width: "100%" }}>
                {items.slice(3, 5).map((item: any, i: number) => (
                  <PlatformCard key={i+3} item={item} color={getBrand(item.title).color} Icon={getBrand(item.title).Icon} i={i+3} isMobile={isMobile} />
                ))}
             </div>
           )}
        </div>
      </div>
      
      {/* FOOTER INFO */}
      {body && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          style={{ textAlign: "center", padding: "20px", background: "rgba(255,255,255,0.02)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", marginTop: "2rem" }}
        >
           <InlineText text={body} />
        </motion.div>
      )}
    </motion.div>
  );
}

interface PlatformCardProps {
  item: Item;
  color: string;
  Icon: React.ElementType;
  i: number;
  isMobile: boolean;
}

function PlatformCard({ item, color, Icon, i, isMobile }: PlatformCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: isMobile ? 20 : (i < 3 ? -30 : 30) }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
      whileHover={!isMobile ? { y: i < 3 ? -5 : 5, scale: 1.02, boxShadow: `0 0 30px ${color}33` } : {}}
      style={{
        ...GLASS_DARK,
        width: isMobile ? "100%" : 280,
        maxWidth: isMobile ? "500px" : "none",
        padding: isMobile ? "1.2rem" : "1.5rem",
        borderRadius: 24,
        border: `1px solid rgba(255,255,255,0.08)`,
        borderTop: `4px solid ${color}`,
        position: "relative",
        zIndex: 20
      }}
    >
       <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: isMobile ? "0.5rem" : "1rem" }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${color}33` }}>
             <Icon size={20} color={color} />
          </div>
          <h4 style={{ fontSize: isMobile ? "1rem" : "1.1rem", fontWeight: 900, color: TEXT_MAIN, margin: 0 }}>{item.title}</h4>
       </div>
       <p style={{ fontSize: isMobile ? "0.8rem" : "0.85rem", color: TEXT_MUTED, lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
       
       {/* Small pulse indicator */}
       <div style={{ position: "absolute", top: 15, right: 15 }}>
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 8, height: 8, borderRadius: "50%", background: color }}
          />
       </div>
    </motion.div>
  );
}
