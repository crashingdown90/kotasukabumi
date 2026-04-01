import React from "react";
import { Users, Smartphone, Building2, Globe, Heart, Mic } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
}

export default function LayoutAudienceGrid({ title, subtitle, body }: LayoutProps) {
  const items = parseListItems(body);
  const audienceIcons = [Users, Smartphone, Building2, Globe, Heart, Mic];

  return (
    <div style={{ animation: "animate-up 0.8s ease-out" }}>
      <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>{subtitle}</p>
      <h2 style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", fontWeight: 900, color: TEXT_MAIN, marginBottom: "2.5rem", letterSpacing: "-0.02em" }}>{title}</h2>
      
      <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {items.map((item, i) => {
          const { label, rest } = parseBoldLabel(item);
          const AIcon = audienceIcons[i % audienceIcons.length];
          return (
            <div 
              key={i} 
              data-item={String(i)} 
              className="card-hover" 
              style={{ 
                ...GLASS_DARK,
                borderRadius: 24, 
                padding: "1.75rem", 
                position: "relative", 
                overflow: "hidden", 
              }}
            >
              <div style={{ position: "absolute", top: -10, right: -10, width: "80px", height: "80px", background: `${PRIMARY}10`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <AIcon size={40} color={`${PRIMARY}20`} />
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, ${PRIMARY}, #8E1540)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <AIcon size={22} color="white" />
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: TEXT_MAIN, margin: 0 }}>{label}</h3>
                </div>
                <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, marginBottom: "1.25rem" }}><InlineText text={rest} /></p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 800, padding: "0.25rem 0.65rem", borderRadius: 99, background: `${GOLD}20`, color: GOLD, border: `1px solid ${GOLD}40`, textTransform: "uppercase" }}>Strategic Priority</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
