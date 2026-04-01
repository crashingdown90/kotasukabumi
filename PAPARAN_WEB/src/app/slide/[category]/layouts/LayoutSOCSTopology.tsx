"use client";
import { motion } from "framer-motion";
import { GOLD, TEXT_MAIN, TEXT_MUTED } from "../components/Constants";

interface Props {
  title: string;
  subtitle: string;
  body: string;
}

// Topology - Network zone visualization
const ZONES = [
  {
    label: "INTERNET / PUBLIC ZONE",
    color: "#EF4444",
    bg: "rgba(239,68,68,0.05)",
    border: "rgba(239,68,68,0.25)",
    nodes: [
      { name: "Warga via WA", icon: "📱" },
      { name: "Warga via IG/X", icon: "🌐" },
      { name: "Warga via SMS", icon: "✉️" },
    ],
  },
  {
    label: "DMZ (DEMILITARIZED ZONE)",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.05)",
    border: "rgba(245,158,11,0.25)",
    nodes: [
      { name: "Nginx Reverse Proxy", icon: "🛡️" },
      { name: "WAF (ModSecurity)", icon: "🔒" },
      { name: "SSL Terminator", icon: "🔑" },
    ],
  },
  {
    label: "APPLICATION ZONE (INTRANET)",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.05)",
    border: "rgba(59,130,246,0.25)",
    nodes: [
      { name: "App Server (Node.js)", icon: "⚙️" },
      { name: "NLP Engine (AI)", icon: "🤖" },
      { name: "Message Queue", icon: "📬" },
      { name: "Notification Svc", icon: "🔔" },
    ],
  },
  {
    label: "DATA ZONE (HIGH SECURITY)",
    color: "#10B981",
    bg: "rgba(16,185,129,0.05)",
    border: "rgba(16,185,129,0.25)",
    nodes: [
      { name: "PostgreSQL DB", icon: "🗄️" },
      { name: "MongoDB Logs", icon: "📊" },
      { name: "Redis Cache", icon: "⚡" },
      { name: "Encrypted Storage", icon: "🔐" },
    ],
  },
];

const PDD_SPECS = [
  { label: "Hosting", value: "On-Premise PDD Diskominfo" },
  { label: "Enkripsi DB", value: "AES-256 at Rest" },
  { label: "Koneksi Transit", value: "TLS 1.3 (HTTPS)" },
  { label: "Audit Log", value: "Immutable (BSSN Compliant)" },
  { label: "Redundansi", value: "Hot-Standby Server" },
  { label: "Backup", value: "Daily Snapshot (3-2-1 Rule)" },
];

export default function LayoutSOCSTopology({ title, subtitle, body }: Props) {
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

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="grid-responsive">
        {/* Left: Zone Diagram */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {ZONES.map((zone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: zone.bg,
                border: `1px solid ${zone.border}`,
                borderRadius: 14,
                padding: "1rem 1.25rem",
                position: "relative",
              }}
            >
              <div style={{ fontSize: "0.6rem", fontWeight: 900, color: zone.color, letterSpacing: "0.15em", marginBottom: "0.6rem", textTransform: "uppercase" }}>
                {zone.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {zone.nodes.map((n, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex", alignItems: "center", gap: "0.4rem",
                      background: `${zone.color}15`, border: `1px solid ${zone.color}30`,
                      borderRadius: 8, padding: "0.35rem 0.75rem",
                      fontSize: "0.78rem", fontWeight: 700, color: zone.color,
                    }}
                  >
                    <span style={{ fontSize: "1rem" }}>{n.icon}</span>
                    {n.name}
                  </div>
                ))}
              </div>
              {/* Connector Arrow to next zone */}
              {i < ZONES.length - 1 && (
                <div style={{ textAlign: "center", fontSize: "0.85rem", color: "rgba(255,255,255,0.2)", marginTop: "0.5rem" }}>▼ VLAN Firewall ▼</div>
              )}
            </motion.div>
          ))}

          {/* SP4N Integration Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: 14,
              padding: "0.75rem 1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981", flexShrink: 0 }}>
              <motion.div
                animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#10B981" }}
              />
            </div>
            <div>
              <div style={{ fontSize: "0.65rem", fontWeight: 900, color: "#10B981", letterSpacing: "0.12em" }}>OUTBOUND SYNC</div>
              <div style={{ fontSize: "0.78rem", color: TEXT_MUTED, fontWeight: 600 }}>
                REST API → SP4N-LAPOR! Pusat (Kemen PANRB) via VPN/HTTPS · JWT Auth
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: PDD Specs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div style={{ fontSize: "0.65rem", fontWeight: 900, color: GOLD, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            🏢 Spesifikasi PDD Diskominfo
          </div>
          {PDD_SPECS.map((spec, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "0.75rem" }}>
              <div style={{ fontSize: "0.68rem", fontWeight: 700, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>{spec.label}</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 800, color: TEXT_MAIN }}>{spec.value}</div>
            </div>
          ))}

          {/* Security Badge */}
          <div
            style={{
              marginTop: "auto",
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: 12,
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>🛡️</div>
            <div style={{ fontSize: "0.75rem", fontWeight: 900, color: "#10B981" }}>KEDAULATAN DATA TERJAMIN</div>
            <div style={{ fontSize: "0.7rem", color: TEXT_MUTED, marginTop: "0.2rem" }}>
              Data tidak meninggalkan server Pemkot Sukabumi
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
