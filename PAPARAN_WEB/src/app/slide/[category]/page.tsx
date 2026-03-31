"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { FileText, Search, X, ChevronRight, BarChart3, TrendingUp, Zap, Database, Building2, Heart, Target, AlertTriangle, Menu, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./slide.module.css";
import masterData from "../../master-data.json";

// Components & UI
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED } from "./components/Constants";
import { ProgressBar, FloatingNav } from "./components/SlideUI";
import VideoBackground from "./components/VideoBackground";

// Layouts
import LayoutChart from "./layouts/LayoutChart";
import LayoutMap from "./layouts/LayoutMap";
import LayoutFlowchart from "./layouts/LayoutFlowchart";
import LayoutPillars from "./layouts/LayoutPillars";
import LayoutAudienceGrid from "./layouts/LayoutAudienceGrid";
import { LayoutHero, LayoutClosing, LayoutCards, LayoutResources } from "./layouts/LayoutBasic";
import LayoutFeature from "./layouts/LayoutFeature";
import LayoutOrgChart from "./layouts/LayoutOrgChart";
import { LayoutTimeline, LayoutKPIGrid, LayoutSentiment } from "./layouts/LayoutAdvanced";
import { LayoutService, LayoutBigData, LayoutChallenges, LayoutBudget } from "./layouts/LayoutTechnical";
import LayoutBenchmarking from "./layouts/LayoutBenchmarking";
import LayoutSection from "./layouts/LayoutSection";
import LayoutOneGate from "./layouts/LayoutOneGate";
import LayoutHierarchy from "./layouts/LayoutHierarchy";
import LayoutTeam from "./layouts/LayoutTeam";
import LayoutSNA from "./layouts/LayoutSNA";
import LayoutTrendChart from "./layouts/LayoutTrendChart";
import LayoutMatrix from "./layouts/LayoutMatrix";
import LayoutImmersive from "./layouts/LayoutImmersive";
import LayoutSplit from "./layouts/LayoutSplit";
import LayoutReputationShield from "./layouts/LayoutReputationShield";
import LayoutInstitutionalMandate from "./layouts/LayoutInstitutionalMandate";
import LayoutAccountabilityDashboard from "./layouts/LayoutAccountabilityDashboard";
import LayoutSentimentPremium from "./layouts/LayoutSentimentPremium";
import LayoutNewsRadar from "./layouts/LayoutNewsRadar";
import LayoutGoldenTime from "./layouts/LayoutGoldenTime";
import LayoutCommandMatrix from "./layouts/LayoutCommandMatrix";
import LayoutActionPlan from "./layouts/LayoutActionPlan";
import LayoutCrisisMatrix from "./layouts/LayoutCrisisMatrix";
import LayoutStakeholderNetwork from "./layouts/LayoutStakeholderNetwork";
import LayoutSocialMedia from "./layouts/LayoutSocialMedia";
import LayoutKOL from "./layouts/LayoutKOL";
import LayoutCyberWatch from "./layouts/LayoutCyberWatch";
import LayoutRapidResponse from "./layouts/LayoutRapidResponse";
import LayoutCrisisSOP from "./layouts/LayoutCrisisSOP";
import LayoutSocialHub from "./layouts/LayoutSocialHub";
import LayoutCommFlow from "./layouts/LayoutCommFlow";
import LayoutCrisisMitigation from "./layouts/LayoutCrisisMitigation";
import LayoutMediaTraining from "./layouts/LayoutMediaTraining";
import LayoutInvestment from "./layouts/LayoutInvestment";
import LayoutKPIMatrix from "./layouts/LayoutKPIMatrix";
import LayoutStrategicPipeline from "./layouts/LayoutStrategicPipeline";
import LayoutSWOT from "./layouts/LayoutSWOT";
import LayoutMasterNarrative from "./layouts/LayoutMasterNarrative";
import LayoutMicroSegmentation from "./layouts/LayoutMicroSegmentation";
import LayoutRoadmap from "./layouts/LayoutRoadmap";
import LayoutFeedbackLoop from "./layouts/LayoutFeedbackLoop";
import LayoutOPDSync from "./layouts/LayoutOPDSync";
import LayoutCaseStudy from "./layouts/LayoutCaseStudy";
import LayoutHeroStrakom from "./layouts/LayoutHeroStrakom";

interface Slide {
  id: number;
  section?: string;
  title: string;
  subtitle: string;
  body: string;
  layout: string;
  icon?: string;
  image?: string;
  features?: any[];
  metrics?: {label: string, value: string, unit?: string, trend?: string}[];
  highlights?: string[];
}


const iconMap: Record<string, any> = {
  FileText, Search
};

export default function SlidePage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const slides: Slide[] = (masterData as any)[category] || [];
  const totalSlides = slides.length;

  useEffect(() => {
    setActiveStep(0);
  }, [currentSlide]);

  function navigate(dir: "next" | "prev") {
    setDirection(dir);
    setAnimKey((k) => k + 1);
    if (dir === "next") setCurrentSlide((p) => Math.min(p + 1, totalSlides - 1));
    else setCurrentSlide((p) => Math.max(p - 1, 0));
  }

  function jumpToSlide(index: number) {
    setDirection(index > currentSlide ? "next" : "prev");
    setAnimKey((k) => k + 1);
    setCurrentSlide(index);
    setShowSidebar(false);
    setShowSearch(false);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.key === "ArrowRight" || e.key === " ") && currentSlide < totalSlides - 1) {
        e.preventDefault(); navigate("next");
      } else if (e.key === "ArrowLeft" && currentSlide > 0) {
        e.preventDefault(); navigate("prev");
      } else if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault(); setShowSearch(true);
      } else if (e.key === "Escape") {
        setShowSidebar(false);
        setShowSearch(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    const onFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  if (slides.length === 0) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", gap: "1rem" }}>
        <VideoBackground />
        <h1 style={{ color: "white" }}>Kategori tidak ditemukan</h1>
        <Link href="/" style={{ color: PRIMARY, fontWeight: 600 }}>← Kembali</Link>
      </div>
    );
  }

  const slide = slides[currentSlide];
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  function renderSlideBody(slide: Slide) {
    const { layout } = slide;
    const logo = (category === "media_center" || category === "strakom") 
      ? "/smc_official_logo.png" 
      : "/Logo_Sukabumi.png";
    const props = { ...slide, logo, IconComp: FileText }; // Simplified for now

    switch (layout) {
      case "hero": return <LayoutHero {...props} />;
      case "closing": return <LayoutClosing {...props} />;
      case "chart": return <LayoutChart {...props} />;
      case "benchmarking": return <LayoutBenchmarking {...props} />;
      case "map": return <LayoutMap {...props} />;
      case "flowchart": return <LayoutFlowchart {...props} activeStep={activeStep} setActiveStep={setActiveStep} IconComp={FileText} />;
      case "pillars": return <LayoutPillars {...props} />;
      case "audience_grid": return <LayoutAudienceGrid {...props} />;
      case "feature": return <LayoutFeature {...props} />;
      case "orgchart": return <LayoutOrgChart {...props} />;
      case "timeline": return <LayoutTimeline {...props} />;
      case "kpi_grid": return <LayoutKPIGrid {...props} />;
      case "sentiment": return <LayoutSentiment {...props} />;
      case "service": return <LayoutService {...props} />;
      case "bigdata": return <LayoutBigData {...props} />;
      case "swot": return <LayoutSWOT {...props} />;
      case "master_narrative": return <LayoutMasterNarrative {...props} />;
      case "micro_segmentation": return <LayoutMicroSegmentation {...props} />;
      case "roadmap": return <LayoutRoadmap {...props} />;
      case "feedback_loop": return <LayoutFeedbackLoop {...props} />;
      case "opd_sync": return <LayoutOPDSync {...props} />;
      case "case_study": return <LayoutCaseStudy {...props} />;
      case "hero_strakom": return <LayoutHeroStrakom {...props} />;
      case "challenges": return <LayoutChallenges {...props} />;
      case "budget": return <LayoutBudget {...props} />;
      case "resources": return <LayoutResources {...props} />;
      case "section": return <LayoutSection {...props} />;
      case "one_gate": return <LayoutOneGate {...props} />;
      case "hierarchy": return <LayoutHierarchy {...props} />;
      case "team": return <LayoutTeam {...props} />;
      case "sna": return <LayoutSNA {...props} />;
      case "trend_chart": return <LayoutTrendChart {...props} />;
      case "matrix": return <LayoutMatrix {...props} />;
      case "immersive": return <LayoutImmersive {...props} />;
      case "split": return <LayoutSplit {...props} />;
      case "reputation_shield": return <LayoutReputationShield {...props} />;
      case "institutional_mandate": return <LayoutInstitutionalMandate {...props} />;
      case "accountability_dashboard": return <LayoutAccountabilityDashboard {...props} />;
      case "sentiment_premium": return <LayoutSentimentPremium {...props} />;
      case "news_radar": return <LayoutNewsRadar {...props} />;
      case "golden_time": return <LayoutGoldenTime {...props} />;
      case "command_matrix": return <LayoutCommandMatrix {...props} />;
      case "action_plan": return <LayoutActionPlan {...props} />;
      case "crisis_matrix": return <LayoutCrisisMatrix {...props} />;
      case "stakeholder_network": return <LayoutStakeholderNetwork {...props} />;
      case "social_media": return <LayoutSocialMedia {...props} />;
      case "kol": return <LayoutKOL {...props} />;
      case "cyber_watch": return <LayoutCyberWatch {...props} />;
      case "rapid_response": return <LayoutRapidResponse {...props} />;
      case "crisis_sop": return <LayoutCrisisSOP {...props} />;
      case "social_hub": return <LayoutSocialHub {...props} />;
      case "comm_flow": return <LayoutCommFlow {...props} />;
      case "crisis_mitigation": return <LayoutCrisisMitigation {...props} />;
      case "media_training": return <LayoutMediaTraining {...props} />;
      case "investment": return <LayoutInvestment {...props} />;
      case "kpi_matrix": return <LayoutKPIMatrix {...props} />;
      case "strategic_pipeline": return <LayoutStrategicPipeline {...props} />;
      case "cards":
      case "spokesperson":
        return <LayoutCards {...props} />;
      default:
        return <LayoutFeature {...props} />;
    }
  }

  const filteredSlides = slides.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main style={{ position: "fixed", inset: 0, color: TEXT_MAIN, overflow: "hidden", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <VideoBackground />
      <ProgressBar progress={progress} />

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={animKey}
          initial={{ opacity: 0, x: direction === "next" ? 80 : -80, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: direction === "next" ? -80 : 80, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: "100%", width: "100%", padding: "clamp(2rem, 5vh, 4rem) clamp(1rem, 6vw, 8vw) 8rem", overflowY: "auto", overflowX: "hidden" }}
        >
          {renderSlideBody(slide)}
        </motion.div>
      </AnimatePresence>

      <FloatingNav 
        current={currentSlide} 
        total={totalSlides} 
        onPrev={() => navigate("prev")} 
        onNext={() => navigate("next")} 
        onSidebar={() => setShowSidebar(true)} 
        onSearch={() => setShowSearch(true)}
        isFullscreen={isFullscreen}
        onFullscreen={toggleFullscreen}
      />

      {/* ── EXPANDED SIDEBAR ───────────────────────────────────── */}
      {showSidebar && (
        <div style={{ position: "fixed", inset: 0, zIndex: 2000, display: "flex" }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)" }} onClick={() => setShowSidebar(false)} />
          <div style={{ position: "relative", width: "400px", maxWidth: "90vw", height: "100%", background: "rgba(8, 12, 24, 0.98)", borderLeft: "1px solid rgba(255,255,255,0.08)", padding: "2.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "2rem", boxShadow: "-20px 0 60px rgba(0,0,0,0.8)", marginLeft: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: GOLD, margin: 0, textTransform: "uppercase", letterSpacing: "0.1em" }}>Dashboard Index</h3>
              <button onClick={() => setShowSidebar(false)} style={{ background: "rgba(255,255,255,0.05)", border: "none", color: "white", padding: "0.6rem", borderRadius: "50%" }} className="card-hover"><X size={20} /></button>
            </div>
            
            <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "1.5rem", paddingRight: "0.5rem" }} className="custom-scroll">
              {Object.entries(
                slides.reduce((acc: Record<string, Slide[]>, s) => {
                  const sec = s.section || "UMUM";
                  if (!acc[sec]) acc[sec] = [];
                  acc[sec].push(s);
                  return acc;
                }, {})
              ).map(([section, sectionSlides]) => (
                <div key={section} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 900, color: GOLD, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.25rem", paddingLeft: "0.5rem", borderLeft: `2px solid ${GOLD}` }}>
                    {section}
                  </div>
                  {sectionSlides.map((s) => {
                    const idx = slides.indexOf(s);
                    const isActive = idx === currentSlide;
                    return (
                      <button 
                        key={idx} 
                        onClick={() => jumpToSlide(idx)} 
                        style={{ 
                          display: "flex", 
                          gap: "1rem", 
                          alignItems: "center", 
                          padding: "0.85rem 1rem", 
                          borderRadius: 16, 
                          border: isActive ? `1.5px solid ${GOLD}` : "1px solid rgba(255,255,255,0.04)", 
                          background: isActive ? "rgba(212,175,55,0.08)" : "rgba(255,255,255,0.02)", 
                          textAlign: "left", 
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" 
                        }} 
                        className="card-hover"
                      >
                        <div style={{ 
                          width: 28, 
                          height: 28, 
                          borderRadius: 8, 
                          background: isActive ? GOLD : "rgba(255,255,255,0.04)", 
                          color: isActive ? "black" : TEXT_MUTED, 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          fontSize: "0.7rem", 
                          fontWeight: 900, 
                          flexShrink: 0 
                        }}>
                          {idx + 1}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ 
                            fontSize: "0.85rem", 
                            fontWeight: isActive ? 800 : 600, 
                            color: isActive ? "white" : TEXT_MAIN, 
                            overflow: "hidden", 
                            textOverflow: "ellipsis", 
                            whiteSpace: "nowrap" 
                          }}>
                            {s.title}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── QUICK JUMP SEARCH ──────────────────────────────────── */}
      {showSearch && (
        <div style={{ position: "fixed", inset: 0, zIndex: 3000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(16px)" }} onClick={() => setShowSearch(false)} />
          <div style={{ position: "relative", width: "100%", maxWidth: "650px", background: "rgba(13, 18, 37, 0.98)", border: `1px solid rgba(212,175,55,0.3)`, borderRadius: 28, padding: "1.75rem", boxShadow: `0 40px 100px rgba(0,0,0,0.8)` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", borderBottom: `1px solid rgba(255,255,255,0.1)`, paddingBottom: "1.25rem", marginBottom: "1.25rem" }}>
              <Search size={26} color={GOLD} />
              <input autoFocus placeholder="Search slides... (ESC to close)" style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "white", fontSize: "1.3rem", fontWeight: 600, width: "100%" }} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if(e.key === "Enter" && filteredSlides[0]) jumpToSlide(slides.indexOf(filteredSlides[0])); }} />
            </div>
            <div style={{ maxHeight: "450px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "0.6rem" }} className="custom-scroll">
              {filteredSlides.map((s, i) => (
                <button key={i} onClick={() => jumpToSlide(slides.indexOf(s))} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem", borderRadius: 16, border: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.02)", textAlign: "left", transition: "all 0.2s" }} className="card-hover">
                   <div style={{ fontSize: "1.05rem", fontWeight: 750, color: "white" }}>{s.title}</div>
                   <ChevronRight size={20} color={GOLD} />
                </button>
              ))}
              {filteredSlides.length === 0 && <div style={{ padding: "3rem", textAlign: "center", color: TEXT_MUTED, fontSize: "1.1rem" }}>No results found for "{searchQuery}"</div>}
            </div>
          </div>
        </div>
      )}

      <style>{`
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 10px; }
        .grid-responsive { display: grid; gap: 1.5rem; }
        @media (max-width: 900px) {
           .grid-responsive { grid-template-columns: 1fr !important; }
           .feature-grid { grid-template-columns: 1fr !important; }
           .flex-responsive { flex-direction: column !important; }
        }
        @media (max-width: 600px) {
           main { padding-bottom: 9rem; }
           h1 { font-size: 1.8rem !important; }
           h2 { font-size: 1.5rem !important; }
        }
      `}</style>
    </main>
  );
}
