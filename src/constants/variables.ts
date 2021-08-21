export const ORANGE = "#F2D43D";
export const ORANGE_DARK = "#A68524";
export const GRAY_LIGHT = "#F2F2F2";
export const GRAY = "#8C8C8C";
export const BLACK = "#404040";
export const BLACK_LIGHT = "#666";

export const TRANSITION = "0.2s ease-out";

export const fontSize = (size: 72 | 48 | 32 | 24 | 16 | 12) => {
  switch (size) {
    case 72:
      return "72px";
    case 48:
      return "48px";
    case 32:
      return "32px";
    case 24:
      return "24px";
    case 16:
      return "16px";
    case 12:
      return "12px";
  }
};
