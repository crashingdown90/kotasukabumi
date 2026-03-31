import React from "react";
import { motion } from "framer-motion";
import { Rocket, Trophy, ChevronRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";

interface RoadmapEvent {
  year: string;
  title: string;
  desc: string;
  status?: "done" | "active" | "future";
  points?: string[];
}

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  features?: RoadmapEvent[];
}

const ProgressBar = ({ progress }: { progress: number }) => (
  <div style={{ position: "absolute", left: '2rem', right: '2rem', height: "6px", background: "rgba(255,255,255,0.05)", top: "50%", transform: "translateY(-50%)", borderRadius: 10, overflow: "hidden" }}>
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 2, ease: "easeInOut" }}
      style={{ height: "100%", background: `linear-gradient(90deg, ${PRIMARY}, ${GOLD})`, boxShadow: `0 0 20px ${GOLD}66` }}
    />
  </div>
);

export default function LayoutRoadmap({ title, subtitle, body, features }: LayoutProps) {
  const events = features || [];
  
  const activeIndex = events.findIndex(e => e.status === "active");
  const progress = activeIndex === -1 ? 100 : (activeIndex / (events.length - 1)) * 100;

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1rem", position: "relative", overflow: "hidden" }}>
      
      {/* HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
           <div style={{ padding: "4px 12px", background: GOLD, borderRadius: 6, color: "black", fontSize: "0.7rem", fontWeight: 1000, letterSpacing: "0.1em" }}>STRATEGIC TIMELINE</div>
           <p style={{ fontSize: "0.85rem", fontWeight: 950, letterSpacing: "0.25em", color: PRIMARY, textTransform: "uppercase", margin: 0 }}>{subtitle}</p>
        </div>
        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 1000, color: "white", margin: 0, letterSpacing: "-0.04em" }}>{title}</h2>
        <p style={{ fontSize: "1.05rem", color: TEXT_MUTED, maxWidth: "900px", marginTop: "1rem", lineHeight: 1.6, fontWeight: 500, borderLeft: `3px solid ${GOLD}44`, paddingLeft: "1.5rem" }}>{body}</p>
      </motion.div>

      {/* ROADMAP VISUAL */}
      <div style={{ flex: 1, display: "flex", position: "relative", width: "100%", minHeight: 0 }}>
        
        <ProgressBar progress={progress} />
        
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", zIndex: 1, height: "100%" }}>
          {events.map((event, i) => {
            const isDone = event.status === "done";
            const isActive = event.status === "active";
            const isTop = i % 2 === 0;

            const CardComponent = () => (
              <motion.div 
                initial={{ opacity: 0, y: isTop ? -20 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (i * 0.2) }}
                style={{ 
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  position: "relative"
                }}
              >
                 <div style={{ 
                   ...GLASS_DARK, 
                   width: "100%",
                   maxWidth: "360px",
                   padding: "1.5rem", 
                   borderRadius: 20, 
                   border: `1px solid ${isActive ? GOLD : isDone ? `${PRIMARY}44` : "rgba(255,255,255,0.05)"}`, 
                   boxShadow: isActive ? `0 15px 40px ${GOLD}22` : "0 10px 30px rgba(0,0,0,0.3)",
                   background: isActive ? "rgba(255,255,255,0.04)" : GLASS_DARK.background,
                   position: "relative"
                 }}>
                    <h3 style={{ margin: 0, color: "white", fontSize: "1.2rem", fontWeight: 1000, marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>{event.title}</h3>
                    <h4 style={{ margin: 0, color: isActive ? "white" : TEXT_MUTED, fontSize: "0.85rem", fontWeight: 700, marginBottom: "1rem", opacity: isActive ? 1 : 0.7, lineHeight: 1.4 }}>{event.desc}</h4>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                       {event.points?.map((pt, j) => (
                         <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.75rem", color: "white", fontWeight: 500, lineHeight: 1.4 }}>
                            <ChevronRight size={14} color={isActive ? GOLD : isDone ? PRIMARY : TEXT_MUTED} style={{ marginTop: 2, flexShrink: 0 }} /> 
                            <span style={{ opacity: 0.9 }}>{pt}</span>
                         </div>
                       ))}
                    </div>

                    {/* Connection Node */}
                    <div style={{ 
                      position: "absolute", 
                      [isTop ? "bottom" : "top"]: -40, 
                      left: "50%", transform: "translateX(-50%)", width: 2, height: 40, 
                      background: `linear-gradient(to ${isTop ? "bottom" : "top"}, ${isActive ? GOLD : isDone ? PRIMARY : "rgba(255,255,255,0.1)"}, transparent)` 
                    }} />
                 </div>
              </motion.div>
            );

            const LabelComponent = () => (
               <div style={{ 
                 display: "flex", flexDirection: "column", alignItems: "center",
                 paddingTop: isTop ? "20px" : "0", 
                 paddingBottom: !isTop ? "20px" : "0",
                 zIndex: 2
               }}>
                  <div style={{ color: "white", fontWeight: 1000, fontSize: "clamp(1.5rem, 2vw, 2.2rem)", letterSpacing: "0.05em", lineHeight: 1, textAlign: "center", textShadow: "0 4px 10px rgba(0,0,0,0.8)" }}>{event.year}</div>
                  <div style={{ 
                    marginTop: "0.75rem", padding: "4px 12px", borderRadius: 20, 
                    background: isDone ? `${PRIMARY}44` : isActive ? `${GOLD}44` : "rgba(0,0,0,0.4)",
                    border: `1px solid ${isDone ? PRIMARY : isActive ? GOLD : "rgba(255,255,255,0.1)"}`,
                    color: "white",
                    fontSize: "0.65rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", whiteSpace: "nowrap", backdropFilter: "blur(5px)"
                  }}>
                    {isDone ? "Target Achieved" : isActive ? "Active Phase" : "Future Horizon"}
                  </div>
               </div>
            );

            return (
              <div key={i} style={{ width: "32%", display: "flex", flexDirection: "column", position: "relative" }}>
                 
                 {/* TOP SLOT */}
                 <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", paddingBottom: "40px" }}>
                    {isTop ? <CardComponent /> : <LabelComponent />}
                 </div>

                 {/* CENTER NODE SLOT */}
                 <div style={{ height: "0px", position: "relative", display: "flex", justifyContent: "center" }}>
                    
                    {/* Floating Node elements exactly on the axis */}
                    <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10 }}>
                       
                       {/* NODE BUBBLE */}
                       <motion.div 
                        animate={isActive ? { scale: [1, 1.1, 1], boxShadow: [`0 0 20px ${GOLD}33`, `0 0 40px ${GOLD}88`, `0 0 20px ${GOLD}33`] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ 
                          width: 80, height: 80, borderRadius: "50%", 
                          background: isDone ? PRIMARY : isActive ? GOLD : "rgba(15, 23, 42, 0.8)",
                          border: `4px solid ${isActive ? "white" : isDone ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.1)"}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          backdropFilter: "blur(15px)",
                          boxShadow: isDone ? `0 0 30px ${PRIMARY}44` : "none"
                        }}>
                          {isDone ? <CheckCircle2 size={32} color="white" /> : 
                           isActive ? <Zap size={32} color={PRIMARY} /> : 
                           <Rocket size={30} color="white" style={{ opacity: 0.3 }} />}
                          
                          {/* TODAY INDICATOR */}
                          {isActive && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              style={{ 
                                position: "absolute", top: -30, background: "white", padding: "4px 10px", borderRadius: 4, 
                                color: "black", fontSize: "0.55rem", fontWeight: 1000, boxShadow: "0 10px 20px rgba(0,0,0,0.5)", whiteSpace: "nowrap" 
                              }}
                            >
                              TODAY
                            </motion.div>
                          )}
                       </motion.div>
                    </div>
                 </div>

                 {/* BOTTOM SLOT */}
                 <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", paddingTop: "40px" }}>
                    {!isTop ? <CardComponent /> : <LabelComponent />}
                 </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER LEGEND */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ display: "flex", justifyContent: "center", gap: "4rem", marginTop: "auto", paddingBottom: "1rem", zIndex: 10 }}
      >
         <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.7rem", fontWeight: 900, color: "white", opacity: 0.8 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: PRIMARY, boxShadow: `0 0 10px ${PRIMARY}` }} /> LEGACY ACHIEVED
         </div>
         <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.7rem", fontWeight: 900, color: "white", opacity: 0.8 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: GOLD, boxShadow: `0 0 20px ${GOLD}` }} /> ACTIVE STRATEGIC FOCUS
         </div>
         <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.7rem", fontWeight: 900, color: "white", opacity: 0.8 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }} /> FUTURE HORIZON
         </div>
      </motion.div>

    </div>
  );
}
