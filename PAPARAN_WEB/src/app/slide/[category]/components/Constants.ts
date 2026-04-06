export const PRIMARY = "#8E1540"; // Batik Maroon
export const GOLD = "#D4AF37";    // State Gold
export const GOLD_DARK = "#A07820";
export const PRIMARY_LIGHT = "rgba(142,21,64,0.04)";

/* Executive Palette */
export const TEXT_MAIN = "#1A1A1A";
export const TEXT_MUTED = "#525252";
export const TEXT_SUBTLE = "#737373";

export const SURFACE = "#FFFFFF";
export const BORDER_LIGHT = "rgba(15, 23, 42, 0.08)";
export const BORDER_REFINED = "rgba(15, 23, 42, 0.12)";

/* Formal Shadow */
export const SHADOW_SM = "0 2px 8px rgba(0,0,0,0.04)";
export const SHADOW_LG = "0 15px 40px rgba(0,0,0,0.06)";

export const GLASS_LIGHT = {
  background: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: `1px solid ${BORDER_REFINED}`,
  boxShadow: SHADOW_SM
};

/* Compatibility Aliases for Clean Government Theme */
export const GLASS_DARK = GLASS_LIGHT;
export const DARK_BORDER = BORDER_REFINED;
export const DARK_CARD = {
  background: SURFACE,
  border: `1px solid ${BORDER_REFINED}`,
  boxShadow: SHADOW_SM
};
