"use client";
import { motion } from "framer-motion";
import { Bell, MessageCircle, Globe, Phone, Shield, Zap } from "lucide-react";
import { GOLD, TEXT_MAIN, TEXT_MUTED } from "../components/Constants";

interface Props {
  title: string;
  subtitle: string;
  body: string;
  logo?: string;
}

const CHANNEL_ICONS = [
  { Icon: MessageCircle, label: "WhatsApp", color: "#25D366", delay: 0 },
  { Icon: Globe,          label: "Web Portal", color: "#3B82F6", delay: 0.1 },
  { Icon: Bell,           label: "Instagram",  color: "#E1306C", delay: 0.2 },
  { Icon: Phone,          label: "Call Center", color: "#F59E0B",delay: 0.3 },
  { Icon: Shield,         label: "SP4N-LAPOR!", color: "#10B981",delay: 0.4 },
  { Icon: Zap,            label: "SMS Gateway", color: "#8B5CF6",delay: 0.5 },
];

const STATS = [
  { value: "< 60", unit: "Menit", label: "Respon Awal Wajib" },
  { value: "5",   unit: "Kanal",  label: "Omnichannel Integrated" },
  { value: "24/7", unit:"Aktif", label: "Layanan Tanpa Henti" },
  { value: "100%", unit:"Sync",  label: "SP4N-LAPOR! Nasional" },
];

export default function LayoutSOCSHero({ title, subtitle, body, logo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3rem" }}
    >
      {/* Top Badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {logo && <img src={logo} alt="Logo" style={{ width: 40, height: 40, objectFit: "contain" }} />}
        <div>
          <div style={{ fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.25em", color: GOLD, textTransform: "uppercase" }}>
            ✦ DISKOMINFO APTIKA · SUKABUMI OMNICHANNEL COMPLAINT SYSTEM ✦
          </div>
        </div>
      </div>

      {/* Main Title */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "0.75rem" }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontSize: "1.2rem", color: GOLD, fontWeight: 700, marginBottom: "0.5rem" }}
        >
          {subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontSize: "1rem", color: TEXT_MUTED, lineHeight: 1.7, maxWidth: 720 }}
        >
          {body}
        </motion.p>
      </div>

      {/* Channel Icons */}
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {CHANNEL_ICONS.map(({ Icon, label, color, delay }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + delay }}
            whileHover={{ y: -6, scale: 1.1 }}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
              background: "rgba(255,255,255,0.06)", border: `1px solid ${color}44`,
              borderRadius: 16, padding: "1rem 1.25rem", backdropFilter: "blur(12px)",
              cursor: "default"
            }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={22} color={color} />
            </div>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: TEXT_MUTED, letterSpacing: "0.05em" }}>{label}</span>
          </motion.div>
        ))}
      </div>

      {/* Stats Row */}
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.3rem" }}>
              <span style={{ fontSize: "2.2rem", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em" }}>{s.value}</span>
              <span style={{ fontSize: "0.9rem", color: GOLD, fontWeight: 800 }}>{s.unit}</span>
            </div>
            <div style={{ fontSize: "0.7rem", color: TEXT_MUTED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
