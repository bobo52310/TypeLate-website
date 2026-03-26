**繁體中文** | [English](README.md)

<div align="center">

  # TypeLate Website

  **[TypeLate](https://github.com/bobo52310/TypeLate) 的產品官網與行銷頁面**

  一款開源語音轉文字桌面應用程式 — 按住快捷鍵、說話、放開，3 秒內語音變成精修文字。

  [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

</div>

## 概述

使用 Astro 建構的靜態行銷網站，展示 TypeLate 的功能、使用情境與下載連結。單頁式設計，搭配捲動動畫、中英雙語內容，以及深色金色品牌主題。

### 頁面區塊

導覽列 → 主視覺 → 使用方式 → 影片展示 → 前後對比 → 功能特色 → 使用情境 → 相容應用程式 → 技術亮點 → 競品比較 → 下載行動呼籲 → 常見問題 → 開發者介紹 → 頁尾

## 技術架構

| 層級 | 技術 |
| --- | --- |
| 框架 | [Astro 6](https://astro.build/)（靜態網站，無 SSR） |
| 樣式 | [Tailwind CSS 4](https://tailwindcss.com/) 透過 `@tailwindcss/vite` |
| 語言 | [TypeScript](https://www.typescriptlang.org/)（strict 模式） |
| Sitemap | [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) |
| Node | >= 22.12.0 |

## 開發

### 環境設定

```bash
git clone https://github.com/bobo52310/TypeLate-website.git
cd TypeLate-website
npm install
npm run dev
```

### 指令

| 指令 | 說明 |
| --- | --- |
| `npm run dev` | 啟動開發伺服器於 `localhost:4321` |
| `npm run build` | 正式環境建置至 `./dist/` |
| `npm run preview` | 本地預覽正式建置結果 |

## 專案結構

```
src/
├── components/       # Astro 元件（純 .astro，無 React/Vue）
├── i18n/             # 集中管理的 i18n 字串
├── layouts/          # 基礎 Layout，含捲動動畫
├── pages/            # 單一路由（index.astro）
└── styles/           # 全域 CSS，含品牌色自訂屬性
public/
├── assets/           # 靜態資源（圖片、圖示）
├── favicon.svg
└── robots.txt
```

## 相關專案

- [TypeLate](https://github.com/bobo52310/TypeLate) — macOS / Windows 桌面應用程式（Tauri v2 + React 19 + Rust）
- [TypeLate-android](https://github.com/bobo52310/TypeLate-android) — Android 應用程式（Kotlin + Jetpack Compose）

## 授權條款

[MIT](LICENSE)
