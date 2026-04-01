import React from "react";
import { Camera, MonitorPlay, MessageCircle, Users, Smartphone, Component } from "lucide-react";
import { motion } from "framer-motion";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseListItems, parseBoldLabel, InlineText } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: {title: string, desc: string}[];
  highlights?: string[];
}

export default function LayoutSocialMedia({ title, subtitle, body, features, highlights }: LayoutProps) {
  const items = features || highlights || parseListItems(body);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemFade = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  // Map brand colors and icons based on keywords
  const getBrandDetails = (label: string) => {
    const text = label.toLowerCase();
    if (text.includes("instagram")) return { color: "#E1306C", Icon: Camera, shadow: "rgba(225,48,108,0.4)" };
    if (text.includes("tiktok")) return { color: "#00f2fe", Icon: Smartphone, shadow: "rgba(0,242,254,0.4)" };
    if (text.includes("facebook")) return { color: "#1877F2", Icon: Users, shadow: "rgba(24,119,242,0.4)" };
    if (text.includes("youtube")) return { color: "#FF0000", Icon: MonitorPlay, shadow: "rgba(255,0,0,0.4)" };
    if (text.includes("twitter") || text.includes("x:")) return { color: "#1DA1F2", Icon: MessageCircle, shadow: "rgba(29,161,242,0.4)" };
    return { color: GOLD, Icon: Component, shadow: "rgba(255,183,3,0.4)" };
  };

  return (
    <motion.div initial="hidden" animate="show" variants={container} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.6rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: TEXT_MAIN, letterSpacing: "-0.02em", margin: 0 }}>{title}</h2>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
        gap: "2rem", 
        alignItems: "stretch", 
        justifyContent: "center",
        flex: 1
      }}>
        {items.map((item: any, i: number) => {
          let label = ""; let rest = "";
          if (typeof item === 'string') { const parsed = parseBoldLabel(item); label = parsed.label; rest = parsed.rest; } 
          else { label = item.title; rest = item.desc; }

          const { color, Icon, shadow } = getBrandDetails(label);

          return (
            <motion.div 
              key={i} 
              variants={itemFade as any} 
              whileHover={{ 
                y: -10, 
                backgroundColor: "rgba(255,255,255,0.06)", 
                boxShadow: `0 15px 35px ${shadow}` 
              }} 
              style={{ 
                ...GLASS_DARK, 
                borderRadius: 24, 
                padding: "2.5rem", 
                borderTop: `4px solid ${color}`,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease"
              }}
            >
              {/* Giant background watermark */}
              <div style={{ position: "absolute", bottom: -20, right: -20, opacity: 0.03, transform: "rotate(-15deg)" }}>
                <Icon size={180} />
              </div>

              <div style={{ 
                width: 64, height: 64, borderRadius: 20, 
                background: `linear-gradient(135deg, ${color}22, rgba(0,0,0,0.5))`, 
                display: "flex", alignItems: "center", justifyContent: "center", 
                marginBottom: "1.5rem", border: `1px solid ${color}44`,
                boxShadow: `0 8px 20px ${shadow}`
              }}>
                <Icon size={32} color={color} />
              </div>
              
              <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color, marginBottom: "1rem", letterSpacing: "0.02em" }}>
                {label.replace(":", "")}
              </h3>
              
              <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>
                <InlineText text={rest} />
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
