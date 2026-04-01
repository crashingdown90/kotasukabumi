"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GOLD, TEXT_MAIN, TEXT_MUTED } from "../components/Constants";

interface Props {
  title: string;
  subtitle: string;
  body: string;
  features?: { title: string; desc: string; icon?: string }[];
}

// Arsitektur SOCS: Layer-based visualization
const ARCH_LAYERS = [
  {
    label: "LAYER 4 – KANAL PUBLIK",
    color: "#3B82F6",
    items: ["WhatsApp Business API", "Instagram DM/Mention", "X / Twitter", "Web E-Form", "Call Center 112", "SMS Gateway", "Mobi Desk OPD"],
    desc: "Warga berinteraksi via kanal pilihan mereka",
  },
  {
    label: "LAYER 3 – API GATEWAY & INGESTION",
    color: "#8B5CF6",
    items: ["Nginx Reverse Proxy", "WAF (Web App Firewall)", "API Rate Limiter", "Message Queue (RabbitMQ)", "Webhook Listener"],
    desc: "Semua request masuk difilter, di-queue, dan diauthentikasi",
  },
  {
    label: "LAYER 2 – APPLICATION CORE (MICROSERVICES)",
    color: GOLD,
    items: ["Ticket Engine", "NLP Classifier (AI)", "OPD Dispatcher", "SP4N-LAPOR! Sync", "Notification Service", "Dashboard API"],
    desc: "Logika bisnis utama — klasifikasi, routing, dan sinkronisasi",
  },
  {
    label: "LAYER 1 – DATA & STORAGE (ZONA AMAN)",
    color: "#10B981",
    items: ["PostgreSQL (Structured)", "MongoDB (Logs/Unstructured)", "Redis (Cache/Sessions)", "S3-compat Storage (Media)", "AES-256 Encryption Engine"],
    desc: "Seluruh data disimpan di PDD Diskominfo — tidak ada data ke cloud asing",
  },
];

export default function LayoutSOCSArchitecture({ title, subtitle, body, features }: Props) {
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

      {/* Architecture Stack Visualization */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {ARCH_LAYERS.map((layer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            style={{
              background: `${layer.color}08`,
              border: `1px solid ${layer.color}33`,
              borderRadius: 18,
              padding: "1.25rem 1.5rem",
              borderLeft: `5px solid ${layer.color}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <div style={{ fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.15em", color: layer.color, textTransform: "uppercase" }}>
                {layer.label}
              </div>
              <div style={{ fontSize: "0.75rem", color: TEXT_MUTED, fontStyle: "italic" }}>{layer.desc}</div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {layer.items.map((item, j) => (
                <span
                  key={j}
                  style={{
                    fontSize: "0.78rem", fontWeight: 700, color: layer.color,
                    background: `${layer.color}15`, border: `1px solid ${layer.color}30`,
                    borderRadius: 8, padding: "0.3rem 0.75rem",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Arrow - Integration Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem",
          background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.3)",
          borderRadius: 14, padding: "0.75rem 1.5rem"
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 12px #10B981" }} />
        <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#10B981", letterSpacing: "0.1em" }}>
          OUTBOUND SYNC → SP4N-LAPOR! API NATIONAL (Kemen PANRB) via HTTPS / JWT Bearer Token
        </span>
        <ArrowRight size={18} color="#10B981" />
      </motion.div>
    </motion.div>
  );
}
