---
title: "Getting Started"
titleZh: "開始使用"
description: "Install TypeLate and run your first transcription in under 5 minutes."
descriptionZh: "在 5 分鐘內完成安裝並跑出第一段轉錄。"
order: 10
---

## 1. Download

<div class="lang-en">

Pick the build that matches your machine from the [Releases page](https://github.com/bobo52310/TypeLate/releases/latest):

| Platform | File |
| --- | --- |
| macOS (Apple Silicon, M1+) | `TypeLate-mac-arm64.dmg` |
| macOS (Intel) | `TypeLate-mac-x64.dmg` |
| Windows (x64) | `TypeLate-windows-x64.exe` |

Or use the in-page download buttons at [/setup](/setup) — they auto-detect your platform.

</div>
<div class="lang-zh">

請依你的電腦規格，從 [Releases 頁面](https://github.com/bobo52310/TypeLate/releases/latest) 下載對應版本：

| 平台 | 檔案 |
| --- | --- |
| macOS（Apple Silicon、M1 之後） | `TypeLate-mac-arm64.dmg` |
| macOS（Intel） | `TypeLate-mac-x64.dmg` |
| Windows（x64） | `TypeLate-windows-x64.exe` |

也可以到 [/setup](/setup) 用網頁的下載按鈕，它會自動偵測你的平台。

</div>

## 2. Install

### macOS — bypass Gatekeeper on first launch

<div class="lang-en">

TypeLate is currently distributed without an Apple Developer signature, so macOS Gatekeeper will block the first launch. To open it:

1. Drag **TypeLate.app** into the **Applications** folder.
2. Double-click — macOS will show *"TypeLate cannot be opened because the developer cannot be verified"*.
3. Open **System Settings → Privacy & Security**, scroll to the bottom, and click **Open Anyway** next to the TypeLate warning.
4. Confirm **Open** in the next dialog.

</div>
<div class="lang-zh">

目前 TypeLate 尚未取得 Apple 開發者簽章，macOS Gatekeeper 會擋下第一次啟動。請依下列步驟開啟：

1. 將 **TypeLate.app** 拖入 **應用程式** 資料夾。
2. 雙擊 — macOS 會跳出 *「無法打開 TypeLate，因為無法確認開發者」* 的警告。
3. 開啟 **系統設定 → 隱私權與安全性**，捲到最下方，點 TypeLate 旁的 **強制打開**。
4. 在下一個對話框點 **打開** 確認。

</div>

> **Upgrading from a previous version?** Open **Privacy & Security → Accessibility**, remove the old TypeLate entry with the `—` button, then re-add the new one after first launch. macOS caches Accessibility against the code signature; stale entries look checked but don't grant access.
>
> **從舊版升級？** 開啟 **隱私權與安全性 → 輔助使用**，按 `—` 移除舊的 TypeLate 項目，安裝新版後重新加入。macOS 會以程式簽章為快取依據，舊項目看起來打勾但實際無效。

### Windows

<div class="lang-en">

Run `TypeLate-windows-x64.exe`. SmartScreen may warn about an unrecognized publisher — click **More info** then **Run anyway**.

</div>
<div class="lang-zh">

執行 `TypeLate-windows-x64.exe`。SmartScreen 可能提示「未識別的發行者」 — 點 **其他資訊** 接著 **仍要執行**。

</div>

## 3. Onboarding wizard

<div class="docs-mockup" data-pagefind-ignore>
<div class="wizard-steps">
  <div class="wizard-step">
    <div class="wizard-step-num">1</div>
    <div class="wizard-step-name"><span class="lang-en">Welcome</span><span class="lang-zh">歡迎</span></div>
    <div class="wizard-step-desc"><span class="lang-en">Local-only data promise.</span><span class="lang-zh">資料留在本機的承諾。</span></div>
  </div>
  <div class="wizard-step">
    <div class="wizard-step-num">2</div>
    <div class="wizard-step-name"><span class="lang-en">Provider</span><span class="lang-zh">供應商</span></div>
    <div class="wizard-step-desc"><span class="lang-en">Pick Groq, OpenAI, etc.</span><span class="lang-zh">選 Groq、OpenAI 等。</span></div>
  </div>
  <div class="wizard-step">
    <div class="wizard-step-num">3</div>
    <div class="wizard-step-name">API Key</div>
    <div class="wizard-step-desc"><span class="lang-en">Paste; prefix is validated.</span><span class="lang-zh">貼上；前綴會驗證。</span></div>
  </div>
  <div class="wizard-step">
    <div class="wizard-step-num">4</div>
    <div class="wizard-step-name"><span class="lang-en">Hotkey</span><span class="lang-zh">熱鍵</span></div>
    <div class="wizard-step-desc"><span class="lang-en">Pick or record a key.</span><span class="lang-zh">選或錄一個鍵。</span></div>
  </div>
  <div class="wizard-step">
    <div class="wizard-step-num">5</div>
    <div class="wizard-step-name"><span class="lang-en">Mic test</span><span class="lang-zh">麥克風測試</span></div>
    <div class="wizard-step-desc"><span class="lang-en">Live waveform check.</span><span class="lang-zh">即時波形確認。</span></div>
  </div>
</div>
<div class="docs-mockup-caption">
  <span class="lang-en">5-step onboarding wizard on first launch — typically takes under a minute.</span>
  <span class="lang-zh">第一次開啟跑完整段引導通常不到一分鐘。</span>
</div>
</div>

<div class="lang-en">

On first launch TypeLate runs a five-step onboarding wizard:

1. **Welcome** — Read the local-only data promise.
2. **Provider** — Pick a transcription provider. **Groq** is the default and offers a generous free tier (28,800 seconds / day). See [Providers & BYOK](/docs/providers-and-byok) for the full list.
3. **API key** — Paste your key. The wizard validates the prefix (e.g. Groq keys start with `gsk_`).
4. **Hotkey** — Pick your trigger key. `Fn` is the default on macOS. See [Hotkeys & Trigger Modes](/docs/hotkeys-and-triggers).
5. **Microphone test** — TypeLate records a short sample and shows a live waveform so you know your mic works.

</div>
<div class="lang-zh">

第一次開啟時，TypeLate 會跑一個 5 步引導：

1. **歡迎** — 確認資料留在本機的承諾。
2. **供應商** — 選一個語音轉錄服務。預設 **Groq**，每日免費 28,800 秒。完整清單見 [供應商與自帶金鑰](/docs/providers-and-byok)。
3. **API Key** — 貼上金鑰。引導會驗證 Key 的前綴（例如 Groq 是 `gsk_`）。
4. **熱鍵** — 選觸發錄音的按鍵。macOS 預設 `Fn`。詳見 [熱鍵與觸發模式](/docs/hotkeys-and-triggers)。
5. **麥克風測試** — 錄一小段並即時顯示波形，確認麥克風可用。

</div>

## 4. Grant permissions

<div class="lang-en">

TypeLate needs three macOS permissions to function. The onboarding screen links you straight into System Settings.

| Permission | Why |
| --- | --- |
| **Microphone** | To capture your voice. |
| **Accessibility** | To detect the global hotkey and paste text into the active app. |
| **Notifications** | To show transcription completion when the HUD is hidden. |

On Windows, only the microphone permission is required and Windows will prompt you on first recording.

</div>
<div class="lang-zh">

TypeLate 在 macOS 需要三項授權，引導頁會直接連到系統設定。

| 權限 | 用途 |
| --- | --- |
| **麥克風** | 收音用。 |
| **輔助使用** | 偵測全域熱鍵、把文字貼到當前 App。 |
| **通知** | 在 HUD 隱藏時顯示轉錄完成。 |

Windows 只需要麥克風權限，第一次錄音時系統會直接詢問。

</div>

## 5. Your first transcription

<div class="lang-en">

1. Click into any text field — an email, a Slack message, a code editor.
2. Press your hotkey (default `Fn`).
3. The notch-style HUD appears at the top of your screen with a live waveform.
4. Speak naturally. Don't worry about filler words — AI cleans them up.
5. Press the hotkey again to stop (toggle mode), or release it (hold mode).
6. In ~3 seconds, polished text appears at your cursor.

That's it. Try a few sentences in different apps to feel the context-aware tone shift.

</div>
<div class="lang-zh">

1. 把游標點進任何輸入欄位 — Email、Slack 訊息、程式碼編輯器都可以。
2. 按下熱鍵（預設 `Fn`）。
3. 螢幕上方會出現 notch 風格 HUD，顯示即時波形。
4. 自然說話。贅詞、嗯啊不用避開 — AI 會幫你清掉。
5. 再按一次熱鍵停止（Toggle 模式），或放開熱鍵（Hold 模式）。
6. 約 3 秒後，潤稿後的文字會出現在游標位置。

就這樣。在不同的 App 試幾次，體會情境感知如何自動調整語氣。

</div>

## What's next

<div class="lang-en">

- Tweak your trigger feel in [Hotkeys & Trigger Modes](/docs/hotkeys-and-triggers).
- If Groq's free tier isn't enough, configure another provider in [Providers & BYOK](/docs/providers-and-byok).
- Pick the right enhancement style in [AI Enhancement](/docs/ai-enhancement).

</div>
<div class="lang-zh">

- 到 [熱鍵與觸發模式](/docs/hotkeys-and-triggers) 調整觸發手感。
- 如果 Groq 免費額度不夠，到 [供應商與自帶金鑰](/docs/providers-and-byok) 換用其他服務。
- 到 [AI 強化](/docs/ai-enhancement) 挑選最適合你的潤稿風格。

</div>
