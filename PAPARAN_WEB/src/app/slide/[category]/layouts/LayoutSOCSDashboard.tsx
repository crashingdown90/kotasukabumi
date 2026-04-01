"use client";
import { motion } from "framer-motion";
import { GOLD, TEXT_MAIN, TEXT_MUTED } from "../components/Constants";

interface Props {
  title: string;
  subtitle: string;
  body: string;
}

const DASHBOARD_MODULES = [
  {
    name: "Geospatial Heatmap",
    icon: "🗺️",
    color: "#EF4444",
    desc: "Peta sebaran aduan per-kelurahan. Titik merah = hotspot masalah.",
    visual: "heatmap",
  },
  {
    name: "Sentiment Tracker",
    icon: "💬",
    color: "#8B5CF6",
    desc: "Analisis AI sentimen warga (Positif/Netral/Kritis) dari teks aduan.",
    visual: "gauge",
  },
  {
    name: "OPD Leaderboard",
    icon: "🏆",
    color: GOLD,
    desc: "Ranking kecepatan respon dinas berdasarkan SLA pemenuhan.",
    visual: "bar",
  },
  {
    name: "SLA Monitor",
    icon: "⏱️",
    color: "#10B981",
    desc: "Lampu indikator hijau/kuning/merah per tiket. Alert tiket overdue.",
    visual: "traffic",
  },
  {
    name: "Predictive Analytics",
    icon: "🔮",
    color: "#3B82F6",
    desc: "Trend aduan berulang. Input otomatis untuk perencanaan Bappeda.",
    visual: "trend",
  },
  {
    name: "SP4N Sync Status",
    icon: "🔄",
    color: "#EC4899",
    desc: "Status sinkronisasi real-time ke platform nasional LAPOR!",
    visual: "sync",
  },
];

const OPD_MOCK = [
  { name: "Dinas PU", resolved: 94, color: "#10B981" },
  { name: "Dishub", resolved: 87, color: "#3B82F6" },
  { name: "DLHK", resolved: 79, color: GOLD },
  { name: "Satpol PP", resolved: 72, color: "#F59E0B" },
  { name: "Dinkes", resolved: 68, color: "#EF4444" },
];

export default function LayoutSOCSDashboard({ title, subtitle, body }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
    >
      <div>
        <p style={{ fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.6rem" }}>
          {subtitle}
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 950, color: TEXT_MAIN, letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
          {title}
        </h2>
        <p style={{ fontSize: "0.95rem", color: TEXT_MUTED, lineHeight: 1.7, maxWidth: 700 }}>{body}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.6fr", gap: "1.5rem" }} className="grid-responsive">

        {/* Left: Module Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {DASHBOARD_MODULES.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: `0 12px 30px ${mod.color}22` }}
              style={{
                background: `${mod.color}08`,
                border: `1px solid ${mod.color}30`,
                borderRadius: 16,
                padding: "1.25rem",
                cursor: "default",
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{mod.icon}</div>
              <div style={{ fontSize: "0.8rem", fontWeight: 900, color: mod.color, marginBottom: "0.3rem" }}>{mod.name}</div>
              <p style={{ fontSize: "0.75rem", color: TEXT_MUTED, lineHeight: 1.5, margin: 0 }}>{mod.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Right: OPD Leaderboard Mock */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            padding: "1.5rem",
          }}
        >
          <div style={{ fontSize: "0.65rem", fontWeight: 900, color: GOLD, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            🏆 OPD Leaderboard (Mock)
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {OPD_MOCK.map((opd, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: TEXT_MAIN }}>
                    {i + 1}. {opd.name}
                  </span>
                  <span style={{ fontSize: "0.85rem", fontWeight: 900, color: opd.color }}>{opd.resolved}%</span>
                </div>
                <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${opd.resolved}%` }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                    style={{ height: "100%", background: opd.color, borderRadius: 4 }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* KPI Stats */}
          <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { label: "Total Aduan Bulan Ini", value: "1,247", color: TEXT_MAIN },
              { label: "Terselesaikan", value: "1,089", color: "#10B981" },
              { label: "Dalam Proses", value: "112", color: GOLD },
              { label: "Overdue", value: "46", color: "#EF4444" },
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.72rem", color: TEXT_MUTED }}>{stat.label}</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 900, color: stat.color }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
