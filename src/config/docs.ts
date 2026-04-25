export interface DocsSection {
  id: string;
  label: { en: string; zh: string };
  items: { slug: string; label: { en: string; zh: string } }[];
}

export const DOCS_SECTIONS: DocsSection[] = [
  {
    id: "start",
    label: { en: "Getting Started", zh: "開始使用" },
    items: [
      {
        slug: "getting-started",
        label: { en: "Install & First Transcription", zh: "安裝與首次轉錄" },
      },
    ],
  },
  {
    id: "core",
    label: { en: "Core Workflow", zh: "核心流程" },
    items: [
      {
        slug: "hotkeys-and-triggers",
        label: { en: "Hotkeys & Trigger Modes", zh: "熱鍵與觸發模式" },
      },
    ],
  },
  {
    id: "providers",
    label: { en: "Providers & BYOK", zh: "供應商與自帶金鑰" },
    items: [
      {
        slug: "providers-and-byok",
        label: { en: "Provider Setup", zh: "供應商設定" },
      },
    ],
  },
  {
    id: "ai",
    label: { en: "AI Enhancement", zh: "AI 強化" },
    items: [
      {
        slug: "ai-enhancement",
        label: { en: "Prompt Modes & Context-Aware", zh: "Prompt 模式與情境感知" },
      },
    ],
  },
  {
    id: "data",
    label: { en: "Vocabulary & Sync", zh: "字典與同步" },
    items: [
      {
        slug: "vocabulary-and-sync",
        label: { en: "Smart Dictionary & Sync", zh: "智慧字典與同步" },
      },
    ],
  },
];

export const DOCS_FLAT: { slug: string; label: { en: string; zh: string } }[] =
  DOCS_SECTIONS.flatMap((s) => s.items);

export function getDocLabel(
  slug: string,
): { en: string; zh: string } | undefined {
  return DOCS_FLAT.find((d) => d.slug === slug)?.label;
}

export function getPrevNext(slug: string): {
  prev?: { slug: string; label: { en: string; zh: string } };
  next?: { slug: string; label: { en: string; zh: string } };
} {
  const idx = DOCS_FLAT.findIndex((d) => d.slug === slug);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? DOCS_FLAT[idx - 1] : undefined,
    next: idx < DOCS_FLAT.length - 1 ? DOCS_FLAT[idx + 1] : undefined,
  };
}
