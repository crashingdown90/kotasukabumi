"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK } from "../components/Constants";
import { ShieldCheck, Zap, Globe, Target } from "lucide-react";

interface LayoutProps {
  title: string;
  subtitle: string;
  body: string;
  logo?: string;
}

const FloatingIcon = ({ Icon, top, left, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0.1, 0.3, 0.1], scale: 1, y: [0, -20, 0] }}
    transition={{ duration: 5, repeat: Infinity, delay }}
    style={{ position: "absolute", top, left, zIndex: 1 }}
  >
    <Icon size={120} color={PRIMARY} style={{ filter: "blur(20px)" }} />
  </motion.div>
);

export default function LayoutHeroStrakom({ title, subtitle, body, logo }: LayoutProps) {
  // Split title for staggered animation
  const titleWords = title.split(" ");

  return (
    <div style={{ 
      height: "100%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      textAlign: "center", 
      position: "relative",
      overflow: "hidden"
    }}>
      
      {/* BACKGROUND ELEMENTS */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
         <div style={{ position: "absolute", width: "1000px", height: "1000px", background: `radial-gradient(circle, ${PRIMARY}11 0%, transparent 70%)`, top: "-20%", left: "-20%", filter: "blur(100px)" }} />
         <div style={{ position: "absolute", width: "800px", height: "800px", background: `radial-gradient(circle, ${GOLD}08 0%, transparent 70%)`, bottom: "-10%", right: "-10%", filter: "blur(80px)" }} />
         
         <FloatingIcon Icon={ShieldCheck} top="10%" left="15%" delay={0} />
         <FloatingIcon Icon={Globe} top="60%" left="80%" delay={2} />
         <FloatingIcon Icon={Target} top="20%" left="75%" delay={1} />
         <FloatingIcon Icon={Zap} top="70%" left="10%" delay={3} />
      </div>

      {/* CONTENT WRAPPER */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ zIndex: 10, position: "relative", maxWidth: "1000px" }}
      >
        
        {/* LOGO SECTION */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          style={{ marginBottom: "3rem", display: "flex", justifyContent: "center", position: "relative" }}
        >
          <div style={{ position: "relative" }}>
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               style={{ position: "absolute", inset: -30, border: `2px dashed ${GOLD}22`, borderRadius: "50%" }}
             />
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               style={{ position: "absolute", inset: -15, border: `1px solid ${PRIMARY}33`, borderRadius: "50%", borderTopColor: GOLD, borderBottomColor: GOLD }}
             />
             <div style={{ 
               width: 120, height: 120, borderRadius: "50%", 
               background: "rgba(0,0,0,0.8)", border: `3px solid ${GOLD}`, 
               display: "flex", alignItems: "center", justifyContent: "center",
               boxShadow: `0 0 50px ${GOLD}33`, backdropFilter: "blur(10px)",
               padding: "15px"
             }}>
                <Image src={logo || "/Logo_Sukabumi.png"} alt="Sukabumi" width={80} height={80} style={{ objectFit: "contain" }} />
             </div>
          </div>
        </motion.div>

        {/* SUBTITLE BADGE */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ 
            display: "inline-flex", alignItems: "center", gap: "1rem", 
            padding: "0.5rem 1.5rem", background: "rgba(255,255,255,0.05)", 
            border: `1px solid ${GOLD}44`, borderRadius: "30px", marginBottom: "2rem",
            backdropFilter: "blur(5px)"
          }}
        >
           <div style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD }}>
             <motion.div animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: "100%", height: "100%", borderRadius: "50%", background: GOLD }} />
           </div>
           <span style={{ fontSize: "0.8rem", fontWeight: 950, letterSpacing: "0.4em", color: TEXT_MAIN, textTransform: "uppercase" }}>{subtitle}</span>
        </motion.div>

        {/* MAIN TITLE WITH ADVANCED ANIMATION */}
        <h1 style={{ 
          fontSize: "clamp(3rem, 8vw, 6.5rem)", 
          fontWeight: 1000, 
          color: TEXT_MAIN, 
          lineHeight: 0.9, 
          marginBottom: "2.5rem",
          letterSpacing: "-0.05em",
          perspective: "1000px"
        }}>
           {titleWords.map((word, i) => (
             <motion.span
               key={i}
               initial={{ opacity: 0, rotateX: -90, y: 50 }}
               animate={{ opacity: 1, rotateX: 0, y: 0 }}
               transition={{ 
                 delay: 0.7 + (i * 0.1), 
                 duration: 0.8, 
                 type: "spring", 
                 stiffness: 100 
               }}
               style={{ 
                 display: "inline-block", 
                 marginRight: "0.25em",
                 color: i === titleWords.length - 1 ? GOLD : "white",
                 textShadow: i === titleWords.length - 1 ? `0 0 30px ${GOLD}44` : "0 20px 40px rgba(0,0,0,0.5)"
               }}
             >
               {word}
             </motion.span>
           ))}
        </h1>

        {/* BODY TEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{ 
            maxWidth: "800px", margin: "0 auto", 
            fontSize: "1.4rem", color: TEXT_MUTED, 
            lineHeight: 1.6, fontWeight: 500,
            letterSpacing: "0.01em"
          }}
        >
          {body}
        </motion.div>

        {/* SCROLL INDICATOR / HUD DECOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
          style={{ marginTop: "4rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
        >
           <div style={{ width: 1, height: 60, background: `linear-gradient(to bottom, ${GOLD}, transparent)` }} />
           <span style={{ fontSize: "0.6rem", fontWeight: 950, letterSpacing: "0.5em", color: GOLD }}>SYSTEM READY</span>
        </motion.div>

      </motion.div>

      {/* SCANNING LINES */}
      <motion.div 
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${GOLD}33, transparent)`, zIndex: 5, pointerEvents: "none" }}
      />

    </div>
  );
}
