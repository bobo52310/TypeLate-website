// Centralized site configuration — single source of truth for URLs, downloads, and metadata.

export const GITHUB_OWNER = "bobo52310";
export const GITHUB_REPO = "TypeLate";
export const GITHUB_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;

// Developer's personal website.
export const DEVELOPER_URL = "https://bobochen.dev";

export const DOWNLOAD_URLS = {
  macArm64: "/setup?platform=mac-arm64",
  macIntel: "/setup?platform=mac-intel",
  android: "/setup?platform=android",
  windows: "/setup?platform=windows",
  iosWishlist: `${GITHUB_URL}/issues/new?title=${encodeURIComponent("Platform Request: iOS")}&body=${encodeURIComponent("I'd love to use TypeLate on iOS! \u{1F5F3}\uFE0F\n\nMy use case:\n")}`,
} as const;

export const SITE = {
  name: "TypeLate",
  url: "https://typelate.app",
  title: "TypeLate — Too late to type, just speak | Open-Source Voice-to-Text",
  description:
    "Free, open-source voice-to-text app for macOS, Windows & Android. Press a hotkey, speak naturally, release — AI polishes your speech into clean text in under 3 seconds. BYOK, zero telemetry, MIT licensed.",
  author: "Bobo Chen",
  authorUrl: "https://github.com/bobo52310",
  license: "MIT",
} as const;
