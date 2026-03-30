import React from "react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK, PRIMARY_LIGHT } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  image?: string;
  IconComp: any;
}

export default function LayoutFeature({ title, subtitle, body, image, IconComp }: LayoutProps) {
  const isList = body.startsWith("<ul>");
  const items = isList ? parseListItems(body) : [];

  return (
    <div className="feature-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", animation: "animate-up 0.8s ease-out" }}>
      <div style={{ position: "relative" }}>
        <div style={{ position:"absolute", inset:-20, borderRadius:32, background:`radial-gradient(circle, ${PRIMARY}15 0%, transparent 70%)`, animation: "orb-pulse 6s ease-in-out infinite" }} />
        <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}>
          {image ? (
            <img src={image} alt={title} style={{ width: "100%", height: "auto", display: "block", filter: "brightness(1.1) contrast(1.1)" }} />
          ) : (
            <div style={{ width: "100%", height: "300px", ...GLASS_DARK, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconComp size={64} color="rgba(255,255,255,0.2)" />
            </div>
          )}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "rgba(255,255,255,0.2)", animation: "scan-line 4s linear infinite" }} />
        </div>
      </div>
      <div>
        <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: TEXT_MAIN, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>{title}</h2>
        <div style={{ fontSize: "1.05rem", color: TEXT_MUTED, lineHeight: 1.8 }}>
          <InlineText text={body.replace(/<ul>.*?<\/ul>/, "").trim()} />
        </div>
        {isList && (
          <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {items.map((item, i) => {
              const { label, rest } = parseBoldLabel(item);
              return (
                <div key={i} className="card-hover" style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", background: "rgba(255,255,255,0.02)", padding: "0.75rem 1rem", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ marginTop: "0.4rem", width: 18, height: 18, borderRadius: "50%", background: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: PRIMARY }} />
                  </div>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: TEXT_MAIN }}>
                    {label && <strong style={{ color: GOLD }}>{label}: </strong>}
                    <InlineText text={rest} />
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
