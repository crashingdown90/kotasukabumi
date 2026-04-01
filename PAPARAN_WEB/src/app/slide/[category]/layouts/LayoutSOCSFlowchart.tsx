"use client";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { GOLD, TEXT_MAIN, TEXT_MUTED } from "../components/Constants";

interface Props {
  title: string;
  subtitle: string;
  body: string;
}

const FLOW_STEPS = [
  {
    step: "01",
    label: "INGRESS",
    time: "0–30 Menit",
    color: "#3B82F6",
    icon: "📱",
    desc: "Warga kirim laporan via WA/Medsos/Web. Chatbot klasifikasi & terbitkan Nomor Tiket otomatis.",
    tags: ["Auto-Ticket", "Chatbot AI", "Konfirmasi WA"],
  },
  {
    step: "02",
    label: "VERIFIKASI",
    time: "30–60 Menit",
    color: "#8B5CF6",
    icon: "✅",
    desc: "Admin Diskominfo verifikasi validitas aduan. Filter spam & duplikasi. Tambahkan geo-tag bila perlu.",
    tags: ["Anti-Spam", "Geo-Tagging", "Validasi NIK"],
  },
  {
    step: "03",
    label: "DISPATCH",
    time: "SLA: 1×24 Jam",
    color: GOLD,
    icon: "🎯",
    desc: "Sistem routing otomatis ke OPD teknis terkait (PU, Dishub, DLHK, dll). OPD wajib konfirmasi terima.",
    tags: ["Auto-Routing", "OPD Assignment", "SLA Alert"],
  },
  {
    step: "04",
    label: "RESOLUSI",
    time: "SLA: 3–5 Hari",
    color: "#10B981",
    icon: "🔧",
    desc: "OPD teknis menangani lapangan. Update progres di dashboard. Dokumen bukti fisik diunggah ke sistem.",
    tags: ["Progress Update", "Foto Bukti", "Timeline"],
  },
  {
    step: "05",
    label: "FEEDBACK",
    time: "Pasca Selesai",
    color: "#F43F5E",
    icon: "⭐",
    desc: "Warga menerima notifikasi penyelesaian & diminta memberikan rating. Data masuk ke OPD Leaderboard.",
    tags: ["Rating Kepuasan", "Notif WA/SMS", "Leaderboard"],
  },
  {
    step: "06",
    label: "SYNC NASIONAL",
    time: "Real-Time",
    color: "#EC4899",
    icon: "🔄",
    desc: "Setiap status perubahan tiket dikirim otomatis ke SP4N-LAPOR! pusat via REST API (Push) & status update diterima via Webhook (Pull).",
    tags: ["REST API", "JWT Auth", "Webhook"],
  },
];

export default function LayoutSOCSFlowchart({ title, subtitle, body }: Props) {
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

      {/* Flowchart Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }} className="grid-responsive">
        {FLOW_STEPS.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, boxShadow: `0 20px 40px ${step.color}22` }}
            style={{
              background: `${step.color}08`,
              border: `1px solid ${step.color}33`,
              borderRadius: 18,
              padding: "1.5rem",
              position: "relative",
              cursor: "default",
            }}
          >
            {/* Step Number */}
            <div style={{
              position: "absolute", top: -14, left: 20,
              width: 32, height: 32, borderRadius: "50%",
              background: step.color, display: "flex",
              alignItems: "center", justifyContent: "center",
              fontSize: "0.7rem", fontWeight: 900, color: "white",
              boxShadow: `0 4px 12px ${step.color}55`,
            }}>
              {step.step}
            </div>

            {/* Icon */}
            <div style={{ fontSize: "2rem", marginBottom: "0.75rem", marginTop: "0.5rem" }}>{step.icon}</div>

            {/* Label + Time */}
            <div style={{ marginBottom: "0.75rem" }}>
              <div style={{ fontSize: "0.65rem", fontWeight: 900, color: step.color, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {step.label}
              </div>
              <div style={{ fontSize: "0.75rem", color: TEXT_MUTED, fontWeight: 700, marginTop: "0.15rem" }}>⏱ {step.time}</div>
            </div>

            {/* Description */}
            <p style={{ fontSize: "0.82rem", color: TEXT_MUTED, lineHeight: 1.6, marginBottom: "1rem" }}>{step.desc}</p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
              {step.tags.map((tag, j) => (
                <span key={j} style={{
                  fontSize: "0.65rem", fontWeight: 800, color: step.color,
                  background: `${step.color}15`, border: `1px solid ${step.color}30`,
                  borderRadius: 6, padding: "0.2rem 0.5rem",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* SLA Summary Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{
          display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 14, padding: "1rem 1.5rem",
        }}
      >
        <div style={{ fontSize: "0.65rem", fontWeight: 900, color: GOLD, letterSpacing: "0.2em", textTransform: "uppercase", flexShrink: 0 }}>
          ⚡ SLA TARGETS
        </div>
        {[
          { label: "Respon Awal", value: "< 60 Mnt", color: "#3B82F6" },
          { label: "Penugasan OPD", value: "1×24 Jam", color: GOLD },
          { label: "Resolusi Teknis", value: "3–5 Hari", color: "#10B981" },
          { label: "Rating Kepuasan", value: "> 80%", color: "#F43F5E" },
        ].map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
            <span style={{ fontSize: "0.75rem", color: TEXT_MUTED }}>{s.label}:</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 900, color: s.color }}>{s.value}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
