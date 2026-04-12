export const PRIMARY = "#047857"; // Emerald Green
export const GOLD = "#D4AF37";    // State Gold
export const GOLD_DARK = "#A07820";
export const PRIMARY_LIGHT = "rgba(4, 120, 87, 0.05)";

/* Executive Light Palette */
export const TEXT_MAIN = "#0F172A";  /* Deep Slate/Navy for authority */
export const TEXT_MUTED = "#475569";
export const TEXT_SUBTLE = "#94A3B8";

export const SURFACE = "#FFFFFF";
export const BORDER_LIGHT = "rgba(15, 23, 42, 0.05)";
export const BORDER_REFINED = "rgba(15, 23, 42, 0.08)";

/* Formal Shadow */
export const SHADOW_SM = "0 2px 8px rgba(0,0,0,0.02)";
export const SHADOW_LG = "0 10px 40px rgba(0,0,0,0.04)";

export const GLASS_LIGHT = {
  background: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: `1px solid ${BORDER_REFINED}`,
  boxShadow: SHADOW_SM
};

/* Compatibility Aliases */
export const GLASS_DARK = GLASS_LIGHT;
export const DARK_BORDER = BORDER_REFINED;
export const DARK_CARD = {
  background: SURFACE,
  border: `1px solid ${BORDER_REFINED}`,
  boxShadow: SHADOW_SM
};
