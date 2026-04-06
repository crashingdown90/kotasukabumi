import React from "react";

import { Zap, Info, MessageSquare, Lightbulb, Target, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: {title: string, desc: string}[];
  highlights?: string[];
}

export default function LayoutPillars({ title, subtitle, body, features, highlights }: LayoutProps) {
  const items = features || highlights || parseListItems(body);
  const pillarIcons = [Zap, Info, MessageSquare, Lightbulb, Target, Star];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  
  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <motion.div initial="hidden" animate="show" variants={container}>
      <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
      <h2 style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", fontWeight: 900, color: TEXT_MAIN, marginBottom: "2rem", letterSpacing: "-0.02em" }}>{title}</h2>
      
      {body && (!features && !highlights) && !body.trim().startsWith("<ul") && (
        <div style={{ fontSize: "1.2rem", color: TEXT_MUTED, marginBottom: "3rem", lineHeight: 1.6, maxWidth: "800px" }}>
          {body.replace(/<ul>.*?<\/ul>/, "").trim()}
        </div>
      )}

      {body && (features || highlights) && (
        <div style={{ fontSize: "1.2rem", color: TEXT_MUTED, marginBottom: "3rem", lineHeight: 1.6, maxWidth: "800px" }}>
          <InlineText text={body.replace(/<ul>.*?<\/ul>/, "").trim()} />
        </div>
      )}
      
      <div className="flex-responsive" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
        {items.map((item, i: number) => {
          let label = "";
          let rest = "";
          
          if (typeof item === 'string') {
            const parsed = parseBoldLabel(item);
            label = parsed.label;
            rest = parsed.rest;
          } else if ((item as any).title) {
            label = (item as any).title;
            rest = (item as any).desc;
          } else {
            label = `Pilar ${i+1}`;
            rest = item as unknown as string;
          }

          const PIcon = pillarIcons[i % pillarIcons.length];
          return (
            <motion.div 
              key={i} 
              variants={itemVariant}
              whileHover={{ 
                scale: 1.04, 
                y: -5, 
                borderColor: `${GOLD}55`, 
                backgroundColor: "rgba(255,255,255,0.08)",
                boxShadow: `0 20px 60px ${PRIMARY}22`
              }}
              style={{ 
                ...GLASS_DARK,
                flex: "1 1 240px", 
                maxWidth: "320px", 
                borderRadius: 32, 
                padding: "2.5rem 1.75rem", 
                textAlign: "center", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                gap: "1.5rem",
                border: "1px solid rgba(255,255,255,0.05)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            >
              {/* Background Glow */}
              <div style={{ position: "absolute", top: "-50%", left: "-50%", width: "200%", height: "200%", background: `radial-gradient(circle at center, ${PRIMARY}11 0%, transparent 60%)`, zIndex: 0, opacity: 0.5 }} />
              
              <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: "3px", background: `linear-gradient(90deg, transparent, ${PRIMARY}, transparent)`, zIndex: 1 }} />
              
              <div style={{ width: 80, height: 80, borderRadius: "24px", background: `linear-gradient(135deg, ${PRIMARY}, #C41E5B)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 15px 35px ${PRIMARY}44`, border: `2px solid ${GOLD}22`, zIndex: 1, transform: "rotate(-5deg)" }}>
                <PIcon size={36} color="white" />
              </div>
              <div style={{ zIndex: 1 }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 900, color: TEXT_MAIN, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>{label}</h3>
                <div style={{ width: 40, height: 3, background: GOLD, margin: "0 auto 1.25rem", borderRadius: 2 }} />
                <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.7, margin: 0 }}><InlineText text={rest} /></p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
