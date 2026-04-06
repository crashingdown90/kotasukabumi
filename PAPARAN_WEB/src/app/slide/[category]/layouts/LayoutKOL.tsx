import React from "react";

import { Users, PenTool, Award, Search, Sparkles, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface KOLItem {
  title: string;
  desc: string;
  metric?: string;
  sub?: string;
}

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: KOLItem[];
  highlights?: string[];
}

export default function LayoutKOL({ title, subtitle, body, features, highlights }: LayoutProps) {
  const items = features || highlights || parseListItems(body);
  const Icons = [Search, PenTool, Award, Users, Sparkles, TrendingUp];
  const Colors = [PRIMARY, "#10B981", GOLD, "#8B5CF6", "#F59E0B", "#3B82F6"];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardFade: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 70, damping: 15 } }
  };

  return (
    <motion.div initial="hidden" animate="show" variants={container} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
         <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.8 }}
           style={{ display: "inline-block", background: `rgba(255,183,3,0.1)`, padding: "6px 16px", borderRadius: 20, border: `1px solid ${GOLD}44`, marginBottom: "1rem" }}
         >
           <span style={{ fontSize: "0.75rem", fontWeight: 900, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase" }}>{subtitle}</span>
         </motion.div>
         <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em", margin: "0 0 1rem 0" }}>{title}</h2>
         {body && !body.trim().startsWith("<ul") && (
            <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, lineHeight: 1.6, maxWidth: "700px", margin: "0 auto" }}>{body.replace(/<ul>.*?<\/ul>/, "").trim()}</p>
         )}
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`, 
        gap: "2rem", 
        flex: 1,
        alignItems: "stretch"
      }}>
        {items.map((item, i: number) => {
          let label = ""; let rest = ""; let metric = ""; let sub = "";
          
          if (typeof item === 'string') { 
             const parsed = parseBoldLabel(item); 
             label = parsed.label; rest = parsed.rest;
             const valMatch = rest.match(/(\d+)/);
             if (valMatch) metric = valMatch[0];
          } else { 
             label = item.title; rest = item.desc; 
             metric = item.metric || ""; sub = item.sub || "";
          }

          const CIcon = Icons[i % Icons.length];
          const cColor = Colors[i % Colors.length];

          return (
            <motion.div 
              key={i} 
              variants={cardFade} 
              whileHover={{ 
                y: -15, 
                boxShadow: `0 25px 50px ${cColor}33`,
                borderColor: `${cColor}88` 
              }}
              style={{ 
                ...GLASS_DARK, 
                borderRadius: 28, 
                padding: "2rem", 
                border: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
              }}
              className="card-hover"
            >
              {/* Header Gradient Spline */}
               <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "140px", background: `linear-gradient(180deg, ${cColor}22 0%, transparent 100%)`, opacity: 0.6, zIndex: 0 }} />

               <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                    <div style={{ width: 60, height: 60, borderRadius: "50%", background: `linear-gradient(135deg, ${cColor}33, ${cColor}11)`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${cColor}55`, boxShadow: `0 0 20px ${cColor}44` }}>
                       <CIcon size={28} color={cColor} />
                    </div>
                    {metric && (
                       <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: "1.4rem", fontWeight: 950, color: TEXT_MAIN, lineHeight: 1 }}>{metric}</div>
                          {sub && <div style={{ fontSize: "0.75rem", color: cColor, fontWeight: 800, textTransform: "uppercase", marginTop: 4 }}>{sub}</div>}
                       </div>
                    )}
                 </div>

                 <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.75rem", letterSpacing: "0.01em" }}>{label}</h3>
                 <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, flex: 1, margin: 0 }}>
                    <InlineText text={rest} />
                 </p>
                 
                 <div style={{ marginTop: "1.5rem", width: "100%", height: "1px", background: "rgba(255,255,255,0.08)" }} />
                 <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1.25rem" }}>
                    <CheckCircle2 size={16} color={cColor} />
                    <span style={{ fontSize: "0.8rem", color: TEXT_MUTED, fontWeight: 700 }}>STRATEGI DIVALIDASI</span>
                 </div>
               </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
