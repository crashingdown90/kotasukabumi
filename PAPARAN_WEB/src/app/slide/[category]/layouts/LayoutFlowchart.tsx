import React from "react";
import { Plus, Minus } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { parseBoldLabel, InlineText, parseListItems } from "../components/Shared";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  activeStep: number;
  setActiveStep: (i: number) => void;
  IconComp: React.ElementType;
}

export default function LayoutFlowchart({ title, subtitle, body, activeStep, setActiveStep, IconComp }: LayoutProps) {
  const items = parseListItems(body);

  return (
    <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", animation: "animate-up 0.8s ease-out" }}>
      <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.7rem" }}>{subtitle}</p>
      <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 900, color: TEXT_MAIN, marginBottom: "2rem", letterSpacing: "-0.02em" }}>{title}</h2>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", position: "relative", flex: 1 }}>
        {items.map((item, i) => {
          const { label, rest } = parseBoldLabel(item);
          const isActive = activeStep === i;
          
          return (
            <div 
              key={i} 
              data-item={String(i)} 
              onClick={() => setActiveStep(i)}
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "1.5rem", 
                width: "100%", 
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: activeStep === null || isActive ? 1 : 0.6,
                transform: isActive ? "scale(1.01)" : "scale(1)",
                zIndex: isActive ? 10 : 1
              }}
            >
              <div style={{ 
                width: "100%",
                ...(isActive ? {} : GLASS_DARK),
                background: isActive ? `linear-gradient(135deg, ${PRIMARY}, #8E1540)` : GLASS_DARK.background, 
                border: isActive ? "none" : GLASS_DARK.border,
                borderRadius: 20, 
                padding: isActive ? "1.5rem" : "1.2rem", 
                position: "relative",
                boxShadow: isActive ? `0 20px 50px ${PRIMARY}44` : "none",
                flex: 1,
                backdropFilter: "blur(20px)",
              }}>
                <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
                  <div style={{ 
                    width: 44, height: 44, borderRadius: 12, 
                    background: isActive ? "rgba(255,255,255,0.2)" : `${PRIMARY}15`, 
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                  }}>
                    <IconComp size={22} color={isActive ? "white" : PRIMARY} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: isActive ? "white" : GOLD }}>{label}</h4>
                      {isActive ? <Minus size={18} color="white" /> : <Plus size={18} color={GOLD} />}
                    </div>
                    
                    <div style={{ 
                      maxHeight: isActive ? "200px" : "0", 
                      overflow: "hidden", 
                      transition: "all 0.4s ease-in-out",
                      marginTop: isActive ? "1rem" : "0",
                      opacity: isActive ? 1 : 0
                    }}>
                      <p style={{ margin: 0, fontSize: "0.95rem", color: isActive ? "rgba(255,255,255,0.85)" : TEXT_MUTED, lineHeight: 1.6 }}>
                        <InlineText text={rest} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div style={{ 
          position: "absolute", left: "22px", top: "40px", bottom: "40px", 
          width: "2px", background: `linear-gradient(to bottom, transparent, ${PRIMARY}33, ${GOLD}33, transparent)`,
          zIndex: 0
        }} className="hide-mobile" />
      </div>
    </div>
  );
}
