export const THEMES = {
  NETFLIX: {
    background: "#141414",
    foreground: "#ffffff",

    card: "#1f1f1f",
    cardForeground: "#ffffff",

    popover: "#1f1f1f",
    popoverForeground: "#ffffff",

    primary: "#e50914",
    primaryRgb: "229, 9, 20",
    primaryForeground: "#ffffff",

    secondary: "#2b2b2b",
    secondaryForeground: "#ffffff",

    muted: "#333333",
    mutedForeground: "#b3b3b3",

    accent: "#564d4d",
    accentForeground: "#ffffff",

    destructive: "#c11119",

    border: "#333333",
    input: "#333333",
    ring: "#e50914",
    radius: "0.5rem",

    chart: [
      "#e50914",
      "#b20710",
      "#ff5353",
      "#f40612",
      "#564d4d",
    ],
  },

  SPOTIFY: {
    background: "#121212",
    foreground: "#ffffff",

    card: "#181818",
    cardForeground: "#ffffff",

    popover: "#282828",
    popoverForeground: "#ffffff",

    primary: "#1db954",
    primaryRgb: "29, 185, 84",
    primaryForeground: "#000000",

    secondary: "#292929",
    secondaryForeground: "#ffffff",

    muted: "#3e3e3e",
    mutedForeground: "#b3b3b3",

    accent: "#1ed760",
    accentForeground: "#000000",

    destructive: "#e22134",

    border: "#282828",
    input: "#282828",
    ring: "#1db954",
    radius: "2rem",

    chart: [
      "#1db954",
      "#1ed760",
      "#19e68c",
      "#ffffff",
      "#b3b3b3",
    ],
  },

  AMAZON: {
    background: "#232f3e",
    foreground: "#ffffff",

    card: "#131921",
    cardForeground: "#ffffff",

    popover: "#131921",
    popoverForeground: "#ffffff",

    primary: "#ff9900",
    primaryRgb: "255, 153, 0",
    primaryForeground: "#000000",

    secondary: "#37475a",
    secondaryForeground: "#ffffff",

    muted: "#485769",
    mutedForeground: "#cccccc",

    accent: "#00a8e1",
    accentForeground: "#ffffff",

    destructive: "#dd0000",

    border: "#37475a",
    input: "#ffffff",
    ring: "#ff9900",
    radius: "0.3rem",

    chart: [
      "#ff9900",
      "#00a8e1",
      "#ffb84d",
      "#ffffff",
      "#cccccc",
    ],
  },

  GOOGLE: {
    background: "#ffffff",
    foreground: "#202124",

    card: "#f8f9fa",
    cardForeground: "#202124",

    popover: "#ffffff",
    popoverForeground: "#202124",

    primary: "#1a73e8",
    primaryRgb: "26, 115, 232",
    primaryForeground: "#ffffff",

    secondary: "#f1f3f4",
    secondaryForeground: "#202124",

    muted: "#e8eaed",
    mutedForeground: "#5f6368",

    accent: "#34a853",
    accentForeground: "#ffffff",

    destructive: "#ea4335",

    border: "#dadce0",
    input: "#ffffff",
    ring: "#1a73e8",
    radius: "0.5rem",

    chart: [
      "#1a73e8",
      "#ea4335",
      "#fbbc04",
      "#34a853",
      "#202124",
    ],
  },

  GITHUB: {
    background: "#0d1117",
    foreground: "#e6edf3",

    card: "#161b22",
    cardForeground: "#e6edf3",

    popover: "#161b22",
    popoverForeground: "#e6edf3",

    primary: "#ffffff",
    primaryRgb: "255, 255, 255",
    primaryForeground: "#000000",

    secondary: "#21262d",
    secondaryForeground: "#c9d1d9",

    muted: "#30363d",
    mutedForeground: "#8b949e",

    accent: "#58a6ff",
    accentForeground: "#ffffff",

    destructive: "#f85149",

    border: "#30363d",
    input: "#0d1117",
    ring: "#ffffff",
    radius: "0.375rem",

    chart: [
      "#ffffff",
      "#8b949e",
      "#58a6ff",
      "#238636",
      "#a371f7",
    ],
  },
} as const;

export const THEME_NAME_LIST = [
  "NETFLIX",
  "SPOTIFY",
  "AMAZON",
  "GOOGLE",
  "GITHUB",
] as const;

export type ThemeKey = keyof typeof THEMES;
export type Theme = (typeof THEMES)[ThemeKey];