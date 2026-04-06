import dynamic from "next/dynamic";
import { useState, useEffect, use, useMemo } from "react";
import Link from "next/link";
import { FileText, Search, X, ChevronRight, BarChart3, TrendingUp, Zap, Database, Building2, Heart, Target, AlertTriangle, Menu, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./slide.module.css";
import masterData from "../../master-data.json";

// Components & UI
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, SURFACE, BORDER_REFINED, SHADOW_LG } from "./components/Constants";
import { ProgressBar, FloatingNav, AmbientBackground } from "./components/SlideUI";
import { Slide, MasterData } from "./components/SlideTypes";

// Dynamic Layouts for optimization
const LayoutChart = dynamic(() => import("./layouts/LayoutChart"));
const LayoutMap = dynamic(() => import("./layouts/LayoutMap"));
const LayoutFlowchart = dynamic(() => import("./layouts/LayoutFlowchart"));
const LayoutPillars = dynamic(() => import("./layouts/LayoutPillars"));
const LayoutAudienceGrid = dynamic(() => import("./layouts/LayoutAudienceGrid"));
const LayoutFeature = dynamic(() => import("./layouts/LayoutFeature"));
const LayoutOrgChart = dynamic(() => import("./layouts/LayoutOrgChart"));
const LayoutBenchmarking = dynamic(() => import("./layouts/LayoutBenchmarking"));
const LayoutSection = dynamic(() => import("./layouts/LayoutSection"));
const LayoutOneGate = dynamic(() => import("./layouts/LayoutOneGate"));
const LayoutHierarchy = dynamic(() => import("./layouts/LayoutHierarchy"));
const LayoutTeam = dynamic(() => import("./layouts/LayoutTeam"));
const LayoutSNA = dynamic(() => import("./layouts/LayoutSNA"));
const LayoutTrendChart = dynamic(() => import("./layouts/LayoutTrendChart"));
const LayoutMatrix = dynamic(() => import("./layouts/LayoutMatrix"));
const LayoutImmersive = dynamic(() => import("./layouts/LayoutImmersive"));
const LayoutSplit = dynamic(() => import("./layouts/LayoutSplit"));
const LayoutReputationShield = dynamic(() => import("./layouts/LayoutReputationShield"));
const LayoutInstitutionalMandate = dynamic(() => import("./layouts/LayoutInstitutionalMandate"));
const LayoutAccountabilityDashboard = dynamic(() => import("./layouts/LayoutAccountabilityDashboard"));
const LayoutSentimentPremium = dynamic(() => import("./layouts/LayoutSentimentPremium"));
const LayoutNewsRadar = dynamic(() => import("./layouts/LayoutNewsRadar"));
const LayoutGoldenTime = dynamic(() => import("./layouts/LayoutGoldenTime"));
const LayoutCommandMatrix = dynamic(() => import("./layouts/LayoutCommandMatrix"));
const LayoutActionPlan = dynamic(() => import("./layouts/LayoutActionPlan"));
const LayoutCrisisMatrix = dynamic(() => import("./layouts/LayoutCrisisMatrix"));
const LayoutStakeholderNetwork = dynamic(() => import("./layouts/LayoutStakeholderNetwork"));
const LayoutSocialMedia = dynamic(() => import("./layouts/LayoutSocialMedia"));
const LayoutKOL = dynamic(() => import("./layouts/LayoutKOL"));
const LayoutCyberWatch = dynamic(() => import("./layouts/LayoutCyberWatch"));
const LayoutRapidResponse = dynamic(() => import("./layouts/LayoutRapidResponse"));
const LayoutCrisisSOP = dynamic(() => import("./layouts/LayoutCrisisSOP"));
const LayoutSocialHub = dynamic(() => import("./layouts/LayoutSocialHub"));
const LayoutCommFlow = dynamic(() => import("./layouts/LayoutCommFlow"));
const LayoutCrisisMitigation = dynamic(() => import("./layouts/LayoutCrisisMitigation"));
const LayoutMediaTraining = dynamic(() => import("./layouts/LayoutMediaTraining"));
const LayoutInvestment = dynamic(() => import("./layouts/LayoutInvestment"));
const LayoutKPIMatrix = dynamic(() => import("./layouts/LayoutKPIMatrix"));
const LayoutStrategicPipeline = dynamic(() => import("./layouts/LayoutStrategicPipeline"));
const LayoutSWOT = dynamic(() => import("./layouts/LayoutSWOT"));
const LayoutMasterNarrative = dynamic(() => import("./layouts/LayoutMasterNarrative"));
const LayoutMicroSegmentation = dynamic(() => import("./layouts/LayoutMicroSegmentation"));
const LayoutRoadmap = dynamic(() => import("./layouts/LayoutRoadmap"));
const LayoutFeedbackLoop = dynamic(() => import("./layouts/LayoutFeedbackLoop"));
const LayoutOPDSync = dynamic(() => import("./layouts/LayoutOPDSync"));
const LayoutCaseStudy = dynamic(() => import("./layouts/LayoutCaseStudy"));
const LayoutHeroStrakom = dynamic(() => import("./layouts/LayoutHeroStrakom"));
const LayoutSOCSHero = dynamic(() => import("./layouts/LayoutSOCSHero"));
const LayoutSOCSArchitecture = dynamic(() => import("./layouts/LayoutSOCSArchitecture"));
const LayoutSOCSTopology = dynamic(() => import("./layouts/LayoutSOCSTopology"));
const LayoutSOCSFlowchart = dynamic(() => import("./layouts/LayoutSOCSFlowchart"));
const LayoutSOCSDashboard = dynamic(() => import("./layouts/LayoutSOCSDashboard"));
const LayoutSOCSChannels = dynamic(() => import("./layouts/LayoutSOCSChannels"));

// Grouped Layouts (Basic, Advanced, Technical)
const LayoutHero = dynamic(() => import("./layouts/LayoutBasic").then(m => m.LayoutHero));
const LayoutClosing = dynamic(() => import("./layouts/LayoutBasic").then(m => m.LayoutClosing));
const LayoutCards = dynamic(() => import("./layouts/LayoutBasic").then(m => m.LayoutCards));
const LayoutResources = dynamic(() => import("./layouts/LayoutBasic").then(m => m.LayoutResources));

const LayoutTimeline = dynamic(() => import("./layouts/LayoutAdvanced").then(m => m.LayoutTimeline));
const LayoutKPIGrid = dynamic(() => import("./layouts/LayoutAdvanced").then(m => m.LayoutKPIGrid));
const LayoutSentiment = dynamic(() => import("./layouts/LayoutAdvanced").then(m => m.LayoutSentiment));

const LayoutService = dynamic(() => import("./layouts/LayoutTechnical").then(m => m.LayoutService));
const LayoutBigData = dynamic(() => import("./layouts/LayoutTechnical").then(m => m.LayoutBigData));
const LayoutChallenges = dynamic(() => import("./layouts/LayoutTechnical").then(m => m.LayoutChallenges));
const LayoutBudget = dynamic(() => import("./layouts/LayoutTechnical").then(m => m.LayoutBudget));

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

  const slides: Slide[] = (masterData as unknown as MasterData)[category] || [];
  const totalSlides = slides.length;

  function navigate(dir: "next" | "prev") {
    setDirection(dir);
    setAnimKey((k) => k + 1);
    setActiveStep(0); // Reset step animation
    if (dir === "next") setCurrentSlide((p) => Math.min(p + 1, totalSlides - 1));
    else setCurrentSlide((p) => Math.max(p - 1, 0));
  }

  function jumpToSlide(index: number) {
    setDirection(index > currentSlide ? "next" : "prev");
    setAnimKey((k) => k + 1);
    setActiveStep(0); // Reset step animation
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
        <AmbientBackground />
        <h1 style={{ color: TEXT_MAIN }}>Kategori tidak ditemukan</h1>
        <Link href="/" style={{ color: PRIMARY, fontWeight: 800 }}>← Kembali</Link>
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
    const props = { ...slide, logo, IconComp: FileText };

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
      case "socs_hero": return <LayoutSOCSHero {...props} />;
      case "socs_architecture": return <LayoutSOCSArchitecture {...props} />;
      case "socs_topology": return <LayoutSOCSTopology {...props} />;
      case "socs_flowchart": return <LayoutSOCSFlowchart {...props} />;
      case "socs_dashboard": return <LayoutSOCSDashboard {...props} />;
      case "socs_channels": return <LayoutSOCSChannels {...props} />;
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

  const filteredSlides = useMemo(() => {
    return slides.filter(s => 
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.body.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [slides, searchQuery]);

  return (
    <main style={{ position: "fixed", inset: 0, color: "var(--text-main)", overflow: "hidden", fontFamily: "var(--font-display)", background: "var(--bg-color)" }}>
      <AmbientBackground />
      <ProgressBar progress={progress} />

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={animKey}
          initial={{ opacity: 0, x: direction === "next" ? 60 : -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === "next" ? -60 : 60 }}
          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
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

      {/* ── EXPANDED SIDEBAR (LIGHT VERSION) ─────────────────── */}
      <AnimatePresence>
        {showSidebar && (
          <div style={{ position: "fixed", inset: 0, zIndex: 2000 }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ position: "absolute", inset: 0, background: "rgba(15,23,42,0.1)", backdropFilter: "blur(4px)" }} 
              onClick={() => setShowSidebar(false)} 
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={{ position: "relative", width: "420px", maxWidth: "90vw", height: "100%", background: SURFACE, borderLeft: `1px solid ${BORDER_REFINED}`, padding: "3rem 2rem", display: "flex", flexDirection: "column", gap: "2.5rem", boxShadow: "-20px 0 60px rgba(0,0,0,0.05)", marginLeft: "auto" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 900, color: PRIMARY, margin: 0, letterSpacing: "-0.01em" }}>Indeks Paparan</h3>
                  <p style={{ fontSize: "0.75rem", color: TEXT_MUTED, fontWeight: 700, margin: "0.25rem 0 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>Pemerintah Kota Sukabumi</p>
                </div>
                <button onClick={() => setShowSidebar(false)} style={{ background: "var(--slate-50)", border: `1px solid var(--slate-200)`, color: TEXT_MAIN, padding: "0.6rem", borderRadius: "12px", transition: "all 0.3s" }} className="card-hover"><X size={20} /></button>
              </div>
              
              <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "1.75rem" }} className="custom-scroll">
                {Object.entries(
                  slides.reduce((acc: Record<string, Slide[]>, s) => {
                    const sec = s.section || "UMUM";
                    if (!acc[sec]) acc[sec] = [];
                    acc[sec].push(s);
                    return acc;
                  }, {})
                ).map(([section, sectionSlides]) => (
                  <div key={section} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div style={{ fontSize: "0.65rem", fontWeight: 900, color: GOLD, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ flex: 1, height: "1px", background: "var(--slate-100)" }} />
                      {section}
                      <div style={{ flex: 1, height: "1px", background: "var(--slate-100)" }} />
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
                            gap: "1.25rem", 
                            alignItems: "center", 
                            padding: "0.85rem 1rem", 
                            borderRadius: 14, 
                            border: isActive ? `1.5px solid ${PRIMARY}` : "1px solid var(--slate-100)", 
                            background: isActive ? "var(--slate-50)" : "transparent", 
                            textAlign: "left", 
                            transition: "all 0.3s" 
                          }} 
                          className="card-hover"
                        >
                          <div style={{ 
                            width: 32, 
                            height: 32, 
                            borderRadius: 10, 
                            background: isActive ? PRIMARY : "var(--slate-50)", 
                            color: isActive ? "white" : TEXT_MUTED, 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center", 
                            fontSize: "0.8rem", 
                            fontWeight: 900, 
                            flexShrink: 0 
                          }}>
                            {idx + 1}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ 
                              fontSize: "0.9rem", 
                              fontWeight: isActive ? 850 : 600, 
                              color: isActive ? PRIMARY : TEXT_MAIN, 
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
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── QUICK JUMP SEARCH (LIGHT VERSION) ────────────────── */}
      <AnimatePresence>
        {showSearch && (
          <div style={{ position: "fixed", inset: 0, zIndex: 3000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               style={{ position: "absolute", inset: 0, background: "rgba(248,250,252,0.6)", backdropFilter: "blur(12px)" }} 
               onClick={() => setShowSearch(false)} 
            />
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               style={{ position: "relative", width: "100%", maxWidth: "650px", background: SURFACE, border: `1px solid ${BORDER_REFINED}`, borderRadius: 28, padding: "2rem", boxShadow: SHADOW_LG }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", borderBottom: `1px solid var(--slate-100)`, paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
                <Search size={24} color={PRIMARY} />
                <input autoFocus placeholder="Cari paparan..." style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: TEXT_MAIN, fontSize: "1.4rem", fontWeight: 700, width: "100%" }} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if(e.key === "Enter" && filteredSlides[0]) jumpToSlide(slides.indexOf(filteredSlides[0])); }} />
                <button onClick={() => setShowSearch(false)} style={{ color: TEXT_MUTED }}>Esc</button>
              </div>
              <div style={{ maxHeight: "400px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "0.75rem" }} className="custom-scroll">
                {filteredSlides.map((s, i) => (
                  <button key={i} onClick={() => jumpToSlide(slides.indexOf(s))} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem", borderRadius: 16, border: "1px solid var(--slate-50)", background: "var(--slate-50)", textAlign: "left", transition: "all 0.2s" }} className="card-hover">
                     <div style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT_MAIN }}>{s.title}</div>
                     <ChevronRight size={18} color={PRIMARY} />
                  </button>
                ))}
                {filteredSlides.length === 0 && <div style={{ padding: "3rem", textAlign: "center", color: TEXT_MUTED, fontSize: "1.1rem", fontWeight: 500 }}>Tidak ada hasil untuk &quot;{searchQuery}&quot;</div>}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: var(--slate-200); border-radius: 10px; }
        .grid-responsive { display: grid; gap: 1.5rem; }
        @media (max-width: 900px) {
           .grid-responsive { grid-template-columns: 1fr !important; }
           .feature-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
