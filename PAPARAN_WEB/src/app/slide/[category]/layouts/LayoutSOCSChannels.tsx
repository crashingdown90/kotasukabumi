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
  Users
} from "lucide-react";
import { 
  GOLD, 
  TEXT_MAIN, 
  TEXT_MUTED, 
  GLASS_DARK, 
  PRIMARY, 
  PRIMARY_LIGHT 
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
    color: "#25D366",
    tag: "PRIMARY",
    glow: "rgba(37, 211, 102, 0.2)"
  },
  {
    icon: Share2,
    color: "#E1306C",
    tag: "ENGAGEMENT",
    glow: "rgba(225, 48, 108, 0.2)"
  },
  {
    icon: Globe,
    color: "#3B82F6",
    tag: "FORMAL",
    glow: "rgba(59, 130, 246, 0.2)"
  },
  {
    icon: Phone,
    color: "#F59E0B",
    tag: "24/7 VOICE",
    glow: "rgba(245, 158, 11, 0.2)"
  },
  {
    icon: Users,
    color: GOLD,
    tag: "OFFLINE",
    glow: "rgba(212, 175, 55, 0.2)"
  }
];

export default function LayoutSOCSChannels({ title, subtitle, body }: Props) {
  const items = parseListItems(body);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
    >
      <div>
        <p style={{ 
          fontSize: "0.7rem", 
          fontWeight: 900, 
          letterSpacing: "0.22em", 
          color: GOLD, 
          textTransform: "uppercase", 
          marginBottom: "0.75rem" 
        }}>
          {subtitle}
        </p>
        <h2 style={{ 
          fontSize: "clamp(2rem, 4vw, 3rem)", 
          fontWeight: 950, 
          color: TEXT_MAIN, 
          letterSpacing: "-0.03em", 
          marginBottom: "0.5rem" 
        }}>
          {title}
        </h2>
        <div style={{ width: "60px", height: "4px", background: PRIMARY, borderRadius: "2px" }} />
      </div>

      <div className="grid-responsive" style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
        gap: "1.5rem" 
      }}>
        {items.map((item, i) => {
          const { label, rest } = parseBoldLabel(item);
          const config = CHANNEL_CONFIG[i % CHANNEL_CONFIG.length];
          const Icon = config.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ 
                y: -10, 
                backgroundColor: "rgba(255,255,255,0.05)",
                boxShadow: `0 20px 40px ${config.glow}`
              }}
              style={{
                ...GLASS_DARK,
                borderRadius: 24,
                padding: "2rem",
                borderTop: `1px solid ${config.color}44`,
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                position: "relative",
                overflow: "hidden",
                cursor: "default"
              }}
            >
              {/* Background Glow */}
              <div style={{
                position: "absolute",
                top: "-20%",
                right: "-10%",
                width: "120px",
                height: "120px",
                background: config.glow,
                filter: "blur(40px)",
                borderRadius: "50%",
                zIndex: 0
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative", zIndex: 1 }}>
                <div style={{ 
                  width: 56, 
                  height: 56, 
                  borderRadius: 16, 
                  background: `${config.color}22`, 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  border: `1px solid ${config.color}33`
                }}>
                  <Icon size={28} color={config.color} />
                </div>
                <div style={{ 
                  fontSize: "0.6rem", 
                  fontWeight: 900, 
                  color: config.color, 
                  background: `${config.color}15`, 
                  padding: "4px 10px", 
                  borderRadius: 20,
                  letterSpacing: "0.1em",
                  border: `1px solid ${config.color}33`
                }}>
                  {config.tag}
                </div>
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{ 
                  fontSize: "1.25rem", 
                  fontWeight: 950, 
                  color: TEXT_MAIN, 
                  lineHeight: 1.2,
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.01em"
                }}>
                  <InlineText text={label.replace(/:\s*$/, "")} />
                </h3>
                <p style={{ 
                  fontSize: "0.9rem", 
                  color: TEXT_MUTED, 
                  lineHeight: 1.6,
                  fontWeight: 500
                }}>
                  <InlineText text={rest} />
                </p>
              </div>

              {/* Detail Indicator */}
              <div style={{ 
                marginTop: "auto", 
                display: "flex", 
                alignItems: "center", 
                gap: "0.5rem",
                paddingTop: "1rem",
                borderTop: "1px solid rgba(255,255,255,0.05)"
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: config.color }} />
                <span style={{ fontSize: "0.65rem", fontWeight: 800, color: TEXT_MUTED, letterSpacing: "0.05em" }}>READY TO DEPLOY</span>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Visual Hub Decoration */}
      <div style={{ 
        position: "fixed", 
        bottom: "-5%", 
        right: "-5%", 
        width: "400px", 
        height: "400px", 
        opacity: 0.05, 
        pointerEvents: "none", 
        zIndex: -1 
      }}>
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%", fill: "none", stroke: GOLD, strokeWidth: 0.2 }}>
          <circle cx="50" cy="50" r="40" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="30" strokeDasharray="1 3" />
          <path d="M10,50 L90,50 M50,10 L50,90" strokeDasharray="4 8" />
        </svg>
      </div>
    </motion.div>
  );
}
