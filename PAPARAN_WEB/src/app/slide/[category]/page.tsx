"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Home, Layout as LayoutIcon, Maximize2, Minimize2 } from "lucide-react";
import Link from "next/link";

// Import consolidated layout groups
import * as Core from "./layouts/LayoutCore";
import * as Analytics from "./layouts/LayoutAnalytics";
import * as Communication from "./layouts/LayoutCommunication";
import * as Defense from "./layouts/LayoutDefense";
import * as Strategic from "./layouts/LayoutStrategic";
import * as Architecture from "./layouts/LayoutArchitecture";
import * as SOCS from "./layouts/LayoutSOCS";
import * as SSO from "./layouts/LayoutSSO";

import masterData from "../../master-data.json";

// Mapping of layout string IDs to their corresponding component across groups
const LAYOUT_MAP: Record<string, any> = {
  // SSO Group
  sso_hero: SSO.LayoutSSOHero,
  sso_cards: SSO.LayoutSSOCards,
  sso_vision: SSO.LayoutSSOVision,
  sso_challenge: SSO.LayoutSSOChallenge,
  sso_legal: SSO.LayoutSSOLegal,
  sso_podium: SSO.LayoutSSOPodium,
  sso_dashboard: SSO.LayoutSSODashboard,
  sso_conclusion: SSO.LayoutSSOConclusion,

  // Core Group
  hero: Core.LayoutHero,
  closing: Core.LayoutClosing,
  cards: Core.LayoutCards,
  resources: Core.LayoutResources,
  section: Core.LayoutSection,
  split: Core.LayoutSplit,
  investment: Core.LayoutInvestment,

  // Analytics Group
  chart: Analytics.LayoutChart,
  bento_proportional: Analytics.LayoutBentoProportional,
  trend_chart: Analytics.LayoutTrendChart,
  map: Analytics.LayoutMap,
  matrix: Analytics.LayoutMatrix,
  big_data: Analytics.LayoutBigData,
  timeline: Analytics.LayoutTimeline,
  kpi_grid: Analytics.LayoutKPIGrid,
  sna: Analytics.LayoutSNA,
  budget: Analytics.LayoutBudget,
  benchmarking: Analytics.LayoutBenchmarking,
  kpi_matrix: Analytics.LayoutKPIMatrix,
  service: Analytics.LayoutService,
  challenges: Analytics.LayoutChallenges,
  sentiment: Analytics.LayoutSentiment,

  // Communication Group
  social_hub: Communication.LayoutSocialHub,
  social_media: Communication.LayoutSocialMedia,
  kol: Communication.LayoutKOL,
  news_radar: Communication.LayoutNewsRadar,
  comm_flow: Communication.LayoutCommFlow,
  media_training: Communication.LayoutMediaTraining,
  stakeholder_network: Communication.LayoutStakeholderNetwork,
  distribution_plan: Communication.LayoutDistributionPlan,
  comm_architecture: Communication.LayoutCommArchitecture,

  // Defense Group
  reputation_shield: Defense.LayoutReputationShield,
  crisis_matrix: Defense.LayoutCrisisMatrix,
  crisis_sop: Defense.LayoutCrisisSOP,
  agent_integration: Defense.LayoutAgentIntegration,
  crisis_mitigation: Defense.LayoutCrisisMitigation,
  golden_time: Defense.LayoutGoldenTime,
  cyber_watch: Defense.LayoutCyberWatch,
  rapid_response: Defense.LayoutRapidResponse,
  orchestration: Defense.LayoutOrchestration,
  command_chain: Defense.LayoutCommandChain,

  // Strategic Group
  master_narrative: Strategic.LayoutMasterNarrative,
  roadmap: Strategic.LayoutRoadmap,
  feedback_loop: Strategic.LayoutFeedbackLoop,
  strategic_pipeline: Strategic.LayoutStrategicPipeline,
  micro_segmentation: Strategic.LayoutMicroSegmentation,
  opd_sync: Strategic.LayoutOPDSync,

  // Architecture Group
  hierarchy: Architecture.LayoutHierarchy,
  team: Architecture.LayoutTeam,
  org_chart: Architecture.LayoutOrgChart,
  institutional_mandate: Architecture.LayoutInstitutionalMandate,
  pillars: Architecture.LayoutPillars,
  one_gate: Architecture.LayoutOneGate,
  feature: Architecture.LayoutFeature,
  hero_strakom: Architecture.LayoutHeroStrakom,
  case_study: Architecture.LayoutCaseStudy,
  audience_grid: Architecture.LayoutAudienceGrid,

  // SOCS Group
  socs_hero: SOCS.LayoutSOCSHero,
  socs_architecture: SOCS.LayoutSOCSArchitecture,
  socs_topology: SOCS.LayoutSOCSTopology,
  socs_flowchart: SOCS.LayoutSOCSFlowchart,
  socs_dashboard: SOCS.LayoutSOCSDashboard,
  socs_channels: SOCS.LayoutSOCSChannels,
  socs_paradigm: SOCS.LayoutSOCSParadigm,
  socs_sla_timeline: SOCS.LayoutSOCS_SLA,
  socs_hierarchy: SOCS.LayoutSOCSHierarchy,
};

function SlideContent() {
  const params = useParams();
  const router = useRouter();
  const category = params.category as string;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides = (masterData as any)[category] || [];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "f") toggleFullscreen();
      if (e.key === "Escape") router.push("/");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlideIndex, slides.length]); // Added dependencies

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  if (slides.length === 0) {
    return (
      <div className="portal-container" style={{ alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "1rem" }}>Category Not Found</h1>
        <p style={{ color: "#64748B", marginBottom: "2rem" }}>The category &quot;{category}&quot; does not exist.</p>
        <Link href="/" className="portal-btn portal-btn-primary" style={{ padding: "1rem 2.5rem", borderRadius: "99px" }}>
          Go Back Home
        </Link>
      </div>
    );
  }

  const currentSlide = slides[currentSlideIndex];
  const LayoutComponent = LAYOUT_MAP[currentSlide.layout] || Core.LayoutHero;

  return (
    <div className="portal-container">
      
      {/* ── TOP NAVIGATION ────────────────────────────────────────── */}
      <header className="portal-header">
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link href="/" className="portal-btn" style={{ padding: "0.6rem" }}>
            <Home size={18} />
          </Link>
          <div style={{ width: "1px", height: "24px", background: "rgba(15, 23, 42, 0.1)" }} />
          <div>
            <div style={{ fontSize: "10px", fontWeight: 900, color: "#047857", letterSpacing: "0.4em", textTransform: "uppercase" }}>
              SUKABUMI DIGITAL PORTAL
            </div>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "#0F172A" }}>
              {category.replace(/_/g, " ").toUpperCase()}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div style={{ fontSize: "11px", fontWeight: 900, color: "#1E293B", letterSpacing: "0.15em", padding: "0.5rem 1.25rem", borderRadius: "99px", background: "#E2E8F0", border: "1px solid rgba(15, 23, 42, 0.05)" }}>
            SLIDE {currentSlideIndex + 1} OF {slides.length}
          </div>
          <button onClick={toggleFullscreen} className="portal-btn" style={{ padding: "0.6rem" }}>
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </header>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <main className="portal-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="slide-wrapper"
          >
            <Suspense fallback={<div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>Loading Layout...</div>}>
              <LayoutComponent {...currentSlide} />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── STEERING CONTROLS ─────────────────────────────────────── */}
      <div className="portal-controls">
        <button 
          onClick={prevSlide} 
          disabled={currentSlideIndex === 0}
          className="portal-btn"
        >
          <ChevronLeft size={24} />
        </button>

        <div style={{ display: "flex", gap: "8px", pointerEvents: "auto" }}>
          {slides.map((_: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`indicator-dot ${idx === currentSlideIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide} 
          disabled={currentSlideIndex === slides.length - 1}
          className="portal-btn portal-btn-primary"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* ── PROGRESS BAR ─────────────────────────────────────────── */}
      <div className="progress-track">
        <motion.div
           className="progress-fill"
           initial={{ width: 0 }}
           animate={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }}
           transition={{ duration: 0.3 }}
        />
      </div>

    </div>
  );
}

export default function SlidePage() {
  return (
    <Suspense fallback={<div>Loading Portal...</div>}>
      <SlideContent />
    </Suspense>
  );
}
