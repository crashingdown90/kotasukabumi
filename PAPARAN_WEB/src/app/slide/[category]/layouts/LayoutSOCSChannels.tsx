"use client";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Globe, 
  Phone, 
  Smartphone, 
  Share2, 
  Zap,
  MapPin,
  CheckCircle,
  Users,
  LayoutGrid
} from "lucide-react";
import { 
  GOLD, 
  TEXT_MAIN, 
  TEXT_MUTED, 
  SURFACE, 
  PRIMARY, 
  BORDER_REFINED,
  SHADOW_LG
} from "../components/Constants";
import { parseListItems, parseBoldLabel, InlineText } from "../components/Shared";

interface Props {
  title: string;
  subtitle: string;
  body: string;
}

const CHANNEL_CONFIG = [
  {
    icon: MessageCircle,
    color: "#8E1540", // Batik Maroon
    tag: "WHATSAPP",
    bg: "#FFF5F7"
  },
  {
    icon: Share2,
    color: "#D4AF37", // State Gold
    tag: "SOCIAL MEDIA",
    bg: "#FFFBEB"
  },
  {
    icon: Globe,
    color: "#1E293B", // Navy/Slate
    tag: "WEB PORTAL",
    bg: "#F8FAFC"
  },
  {
    icon: Phone,
    color: "#0D9488", // Teal/Formal
    tag: "VOICE/SMS",
    bg: "#F0FDFA"
  },
  {
    icon: LayoutGrid,
    color: "#4338CA", // Indigo/Strategic
    tag: "OFFLINE",
    bg: "#EEF2FF"
  }
];

export default function LayoutSOCSChannels({ title, subtitle, body }: Props) {
  const items = parseListItems(body);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
          <div style={{ width: "32px", height: "1px", background: GOLD }} />
          <p style={{ 
            fontSize: "0.75rem", 
            fontWeight: 800, 
            letterSpacing: "0.15em", 
            color: GOLD, 
            textTransform: "uppercase"
          }}>
            {subtitle}
          </p>
        </div>
        <h2 style={{ 
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)", 
          fontWeight: 900, 
          color: TEXT_MAIN, 
          letterSpacing: "-0.03em", 
          marginBottom: "1rem",
          lineHeight: 1.1
        }}>
          {title}
        </h2>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", 
        gap: "1.5rem" 
      }}>
        {items.map((item, i) => {
          const { label, rest } = parseBoldLabel(item);
          const config = CHANNEL_CONFIG[i % CHANNEL_CONFIG.length];
          const Icon = config.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: SURFACE,
                borderRadius: 20,
                padding: "2.5rem",
                border: `1px solid ${BORDER_REFINED}`,
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                position: "relative",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              className="card-hover-refined"
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ 
                  width: 52, 
                  height: 52, 
                  borderRadius: 14, 
                  background: config.bg, 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  border: `1px solid ${config.color}20`
                }}>
                  <Icon size={26} color={config.color} />
                </div>
                <div style={{ 
                  fontSize: "0.65rem", 
                  fontWeight: 900, 
                  color: config.color, 
                  background: `${config.color}10`, 
                  padding: "6px 12px", 
                  borderRadius: 8,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border: `1px solid ${config.color}15`
                }}>
                  {config.tag}
                </div>
              </div>

              <div>
                <h3 style={{ 
                  fontSize: "1.3rem", 
                  fontWeight: 850, 
                  color: TEXT_MAIN, 
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3
                }}>
                  <InlineText text={label.replace(/:\s*$/, "")} />
                </h3>
                <p style={{ 
                  fontSize: "0.95rem", 
                  color: TEXT_MUTED, 
                  lineHeight: 1.7,
                  fontWeight: 500,
                  opacity: 0.85
                }}>
                  <InlineText text={rest} />
                </p>
              </div>

              <div style={{ 
                marginTop: "auto", 
                display: "flex", 
                alignItems: "center", 
                gap: "0.6rem",
                paddingTop: "1.25rem",
                borderTop: `1px solid var(--slate-100)`
              }}>
                <div style={{ width: 10, height: 10, borderRadius: "2px", background: i === 4 ? "#94A3B8" : "#10B981", transform: "rotate(45deg)" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 800, color: TEXT_MUTED, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Status: {i === 4 ? "Off-Site Ready" : "Live Operation"}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style jsx>{`
        .card-hover-refined:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
          border-color: ${PRIMARY}30;
        }
      `}</style>
    </motion.div>
  );
}
