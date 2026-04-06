"use client";

import { useState, useEffect, useRef } from "react";

const CORRECT_PIN = process.env.NEXT_PUBLIC_APP_PIN || "0266";
const SESSION_KEY = "sukabumi_portal_unlocked";

export default function PinGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [pin, setPin] = useState(["", "", "", ""]);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Check session on mount
  useEffect(() => {
    try {
      const isUnlocked = sessionStorage.getItem(SESSION_KEY) === "true";
      if (isUnlocked) {
        // Defer to avoid cascading renders on mount
        setTimeout(() => setUnlocked(true), 0);
      }
    } catch (err) {
      console.error("Session check failed", err);
    }
  }, []);

  // Lockout countdown
  useEffect(() => {
    if (locked && lockTimer > 0) {
      timerRef.current = setTimeout(() => {
        setLockTimer((t) => t - 1);
      }, 1000);
    } else if (locked && lockTimer === 0) {
      // Defer state updates to the next tick to satisfy linter
      setTimeout(() => {
        setLocked(false);
        setAttempts(0);
        setStatus("idle");
      }, 0);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [locked, lockTimer]);

  // Focus first input on mount
  useEffect(() => {
    if (!unlocked && !locked) {
      setTimeout(() => inputRefs[0].current?.focus(), 300);
    }
  }, [unlocked, locked]);

  function handleInput(index: number, value: string) {
    if (locked) return;
    // Only allow digits
    const digit = value.replace(/\D/g, "").slice(-1);
    const newPin = [...pin];
    newPin[index] = digit;
    setPin(newPin);
    setStatus("idle");

    if (digit && index < 3) {
      inputRefs[index + 1].current?.focus();
    }

    // Auto-check when last digit entered
    if (digit && index === 3) {
      const fullPin = [...newPin].join("");
      checkPin(fullPin, newPin);
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace") {
      if (pin[index] === "" && index > 0) {
        const newPin = [...pin];
        newPin[index - 1] = "";
        setPin(newPin);
        inputRefs[index - 1].current?.focus();
      } else {
        const newPin = [...pin];
        newPin[index] = "";
        setPin(newPin);
      }
    }
  }

  function handlePaste(e: React.ClipboardEvent) {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
    if (text.length === 4) {
      const newPin = text.split("");
      setPin(newPin);
      inputRefs[3].current?.focus();
      checkPin(text, newPin);
    }
  }

  function checkPin(fullPin: string, pinArray: string[]) {
    if (fullPin === CORRECT_PIN) {
      setStatus("success");
      setTimeout(() => {
        try { sessionStorage.setItem(SESSION_KEY, "true"); } catch {}
        setUnlocked(true);
      }, 700);
    } else {
      setStatus("error");
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      // Shake and clear after delay
      setTimeout(() => {
        setPin(["", "", "", ""]);
        inputRefs[0].current?.focus();
        if (newAttempts >= 3) {
          setLocked(true);
          setLockTimer(30);
        } else {
          setStatus("idle");
        }
      }, 800);
    }
  }

  function handleSubmit() {
    const fullPin = pin.join("");
    if (fullPin.length === 4) checkPin(fullPin, pin);
  }

  if (unlocked) return <>{children}</>;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "linear-gradient(135deg, #0F172A 0%, #1E1B3A 50%, #2D1040 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter', -apple-system, sans-serif",
      padding: "1.5rem",
    }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(rgba(142, 21, 64, 0.15) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(142, 21, 64, 0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Card */}
      <div style={{
        position: "relative",
        zIndex: 2,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "28px",
        padding: "3rem 3.5rem",
        backdropFilter: "blur(20px)",
        maxWidth: "420px",
        width: "100%",
        textAlign: "center",
        boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
      }}>
        {/* Seal / Logo */}
        <div style={{
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1.8rem",
          filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.5))",
        }}>
          <img 
            src="/Logo_Sukabumi.png" 
            alt="Logo Kota Sukabumi" 
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "contain",
              animation: "logoFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1)"
            }} 
          />
        </div>

        <p style={{
          fontSize: "0.7rem",
          fontWeight: 800,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#D4AF37",
          marginBottom: "0.5rem",
        }}>
          AKSES TERBATAS
        </p>

        <h1 style={{
          fontSize: "1.5rem",
          fontWeight: 800,
          color: "white",
          marginBottom: "0.4rem",
          letterSpacing: "-0.02em",
        }}>
          Portal Paparan Strategis
        </h1>

        <p style={{
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.45)",
          marginBottom: "2.5rem",
          lineHeight: 1.5,
        }}>
          Pemerintah Kota Sukabumi<br />
          Silakan masukkan PIN keamanan Anda untuk melanjutkan
        </p>

        {/* PIN Inputs */}
        <div
          onPaste={handlePaste}
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            marginBottom: "1.75rem",
          }}
        >
          {pin.map((digit, i) => (
            <input
              key={i}
              ref={inputRefs[i]}
              type="password"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              disabled={locked}
              onChange={(e) => handleInput(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              style={{
                width: "64px",
                height: "72px",
                borderRadius: "16px",
                border: `2px solid ${
                  status === "error" ? "rgba(239, 68, 68, 0.7)" :
                  status === "success" ? "rgba(34, 197, 94, 0.7)" :
                  digit ? "rgba(212, 175, 55, 0.6)" : "rgba(255,255,255,0.12)"
                }`,
                background: `${
                  status === "error" ? "rgba(239, 68, 68, 0.1)" :
                  status === "success" ? "rgba(34, 197, 94, 0.1)" :
                  "rgba(255,255,255,0.06)"
                }`,
                color: "white",
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 800,
                outline: "none",
                transition: "all 0.2s ease",
                cursor: locked ? "not-allowed" : "text",
                animation: status === "error" ? "pinShake 0.5s ease" : "none",
              }}
            />
          ))}
        </div>

        {/* Status message */}
        <div style={{
          height: "1.5rem",
          marginBottom: "1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.4rem",
        }}>
          {status === "error" && !locked && (
            <p style={{ color: "#EF4444", fontSize: "0.85rem", fontWeight: 600 }}>
              ❌ PIN Salah{attempts < 3 ? ` — ${3 - attempts} percobaan tersisa` : ""}
            </p>
          )}
          {status === "success" && (
            <p style={{ color: "#22C55E", fontSize: "0.85rem", fontWeight: 600 }}>
              ✅ Akses Diberikan...
            </p>
          )}
          {locked && (
            <p style={{ color: "#F59E0B", fontSize: "0.85rem", fontWeight: 600 }}>
              🔒 Keamanan Terkunci. Tunggu {lockTimer}s
            </p>
          )}
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={pin.join("").length < 4 || locked}
          style={{
            width: "100%",
            padding: "0.9rem",
            borderRadius: "14px",
            border: "none",
            background: pin.join("").length === 4 && !locked
              ? "linear-gradient(135deg, #8E1540, #701032)"
              : "rgba(255,255,255,0.06)",
            color: pin.join("").length === 4 && !locked ? "white" : "rgba(255,255,255,0.25)",
            fontSize: "0.95rem",
            fontWeight: 700,
            cursor: pin.join("").length === 4 && !locked ? "pointer" : "not-allowed",
            transition: "all 0.2s ease",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          VERIFIKASI AKSES →
        </button>

        {/* Attempts indicator */}
        {attempts > 0 && !locked && (
          <div style={{
            display: "flex",
            gap: "0.4rem",
            justifyContent: "center",
            marginTop: "1.25rem",
          }}>
            {[1,2,3].map((n) => (
              <div key={n} style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: n <= attempts ? "#EF4444" : "rgba(255,255,255,0.15)",
                transition: "background 0.3s ease",
              }} />
            ))}
          </div>
        )}
        {/* Security Warning */}
        <div style={{
          marginTop: "1.5rem",
          paddingTop: "1.25rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          textAlign: "center"
        }}>
          <p style={{
            fontSize: "0.65rem",
            color: "#FF4D8D",
            fontWeight: 800,
            letterSpacing: "0.1em",
            marginBottom: "0.4rem",
            textTransform: "uppercase"
          }}>
            HANYA UNTUK ANDA (FOR YOUR EYES ONLY)
          </p>
          <p style={{
            fontSize: "0.72rem",
            color: "rgba(255,255,255,0.35)",
            lineHeight: 1.6,
            maxWidth: "300px",
            margin: "0 auto"
          }}>
            Akses tidak sah, penggandaan, atau penyebarluasan konten ini sangat dilarang. Protokol keamanan aktif.
          </p>
        </div>
      </div>

      {/* Footer */}
      <p style={{
        position: "relative",
        zIndex: 2,
        marginTop: "2rem",
        fontSize: "0.75rem",
        color: "rgba(255,255,255,0.2)",
        textAlign: "center",
        letterSpacing: "0.05em",
      }}>
        © 2026 Pemerintah Kota Sukabumi · KONTEN RAHASIA
      </p>

      <style>{`
        @keyframes pinShake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }
        @keyframes logoFadeIn {
          from { opacity: 0; transform: scale(0.8) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
