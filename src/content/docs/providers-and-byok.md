---
title: "Providers & BYOK"
titleZh: "供應商與自帶金鑰"
description: "Connect Groq, OpenAI, Gemini, OpenRouter, or NVIDIA NIM with your own API key. Your key never leaves your machine."
descriptionZh: "用自己的 API Key 連接 Groq、OpenAI、Gemini、OpenRouter、NVIDIA NIM。Key 不會離開你的電腦。"
order: 30
---

<div class="lang-en">

TypeLate is **bring-your-own-key (BYOK)**. There is no TypeLate cloud — your audio and text go straight from your machine to the provider you choose, using your own API key. Keys are stored locally with the OS keychain pattern.

</div>
<div class="lang-zh">

TypeLate 採 **自帶金鑰（BYOK）** 設計。沒有 TypeLate 雲端 — 語音與文字直接從你的電腦送到你指定的供應商，用你自己的金鑰。金鑰以作業系統 keychain 模式儲存在本機。

</div>

## Supported providers

<div class="lang-en">

| Provider | Transcription | LLM Enhancement | Free tier | Key prefix |
| --- | :---: | :---: | --- | --- |
| **Groq** | ✓ | ✓ | 28,800 sec/day | `gsk_` |
| **OpenAI** | ✓ | ✓ | Paid only | `sk-` |
| **Gemini** | — | ✓ | Generous free tier | `AIza` |
| **OpenRouter** | — | ✓ | Some free models | `sk-or-` |
| **NVIDIA NIM** | — | ✓ | Free credits | `nvapi-` |

Only Groq and OpenAI offer Whisper transcription endpoints. The other three are LLM-only — you can mix-and-match (e.g., transcribe with Groq, enhance with Gemini).

</div>
<div class="lang-zh">

| 供應商 | 語音轉錄 | LLM 潤稿 | 免費額度 | 金鑰前綴 |
| --- | :---: | :---: | --- | --- |
| **Groq** | ✓ | ✓ | 每日 28,800 秒 | `gsk_` |
| **OpenAI** | ✓ | ✓ | 僅付費 | `sk-` |
| **Gemini** | — | ✓ | 充足的免費額度 | `AIza` |
| **OpenRouter** | — | ✓ | 部分模型免費 | `sk-or-` |
| **NVIDIA NIM** | — | ✓ | 免費點數 | `nvapi-` |

只有 Groq 和 OpenAI 提供 Whisper 語音轉錄端點，其餘三家僅提供 LLM。供應商可以混搭（例如：用 Groq 轉錄、用 Gemini 潤稿）。

</div>

## Get an API key

### Groq (recommended for beginners)

<div class="lang-en">

1. Open [console.groq.com/keys](https://console.groq.com/keys) and sign in (Google / GitHub OAuth supported).
2. Click **Create API Key**, give it a name (e.g. `typelate`), and copy the key — it starts with `gsk_`.
3. Groq doesn't show the key again after you close the dialog. Paste it into TypeLate immediately.

Why Groq: fastest inference (the `<3 seconds` end-to-end claim relies on this) and a generous 28,800 sec/day free tier — about 8 hours of speech per day.

</div>
<div class="lang-zh">

1. 開啟 [console.groq.com/keys](https://console.groq.com/keys) 並登入（支援 Google / GitHub OAuth）。
2. 點 **Create API Key**，命名（例如 `typelate`），複製金鑰 — 開頭是 `gsk_`。
3. 關掉視窗後 Groq 不會再次顯示金鑰，請馬上貼到 TypeLate 內。

選 Groq 的理由：目前最快的推理速度（「3 秒內完成」靠它），加上每日 28,800 秒（約 8 小時語音）的免費額度。

</div>

### OpenAI

<div class="lang-en">

1. Open [platform.openai.com/api-keys](https://platform.openai.com/api-keys) and sign in.
2. Click **Create new secret key**, scope it to `Audio` and `Chat` if asked, and copy the key.
3. OpenAI requires a paid balance — top up at least $5 in [Billing](https://platform.openai.com/account/billing) before using.

</div>
<div class="lang-zh">

1. 開啟 [platform.openai.com/api-keys](https://platform.openai.com/api-keys) 並登入。
2. 點 **Create new secret key**，若被問到範圍請勾選 `Audio` 與 `Chat`，複製金鑰。
3. OpenAI 需付費餘額才能使用，請先在 [Billing](https://platform.openai.com/account/billing) 至少儲值 $5。

</div>

### Gemini

<div class="lang-en">

1. Open [aistudio.google.com/apikey](https://aistudio.google.com/apikey) and sign in with a Google account.
2. Click **Create API key** and pick a project (or create a new one).
3. Copy the key — it starts with `AIza`.

Gemini's free tier is currently the most generous of the LLM-only providers; an excellent pairing with Groq for transcription.

</div>
<div class="lang-zh">

1. 開啟 [aistudio.google.com/apikey](https://aistudio.google.com/apikey) 並用 Google 帳號登入。
2. 點 **Create API key**，選一個 GCP 專案（或新建一個）。
3. 複製金鑰 — 開頭是 `AIza`。

Gemini 是目前 LLM-only 供應商中免費額度最大方的，搭配 Groq 轉錄是極佳組合。

</div>

### OpenRouter

<div class="lang-en">

OpenRouter proxies dozens of LLMs (Claude, Llama, DeepSeek…) behind one API. Useful for trying experimental models without managing multiple accounts.

1. Open [openrouter.ai/keys](https://openrouter.ai/keys) and sign in.
2. Click **Create Key**, copy the value — it starts with `sk-or-v1-`.
3. Pre-load some credit, or use models marked `:free` (rate-limited).

</div>
<div class="lang-zh">

OpenRouter 是 LLM 代理服務，一個 API 就能用 Claude、Llama、DeepSeek 等數十個模型，適合不想開多個帳號又想嘗鮮的人。

1. 開啟 [openrouter.ai/keys](https://openrouter.ai/keys) 並登入。
2. 點 **Create Key**，複製金鑰 — 開頭是 `sk-or-v1-`。
3. 先儲值，或使用標記 `:free` 的模型（有速率限制）。

</div>

### NVIDIA NIM

<div class="lang-en">

1. Open [build.nvidia.com/settings/api-keys](https://build.nvidia.com/settings/api-keys) and sign in.
2. Generate a new key. Copy the value — it starts with `nvapi-`.

NVIDIA grants free credits to new accounts; useful for testing models hosted on their inference cloud.

</div>
<div class="lang-zh">

1. 開啟 [build.nvidia.com/settings/api-keys](https://build.nvidia.com/settings/api-keys) 並登入。
2. 產生新金鑰，複製 — 開頭是 `nvapi-`。

NVIDIA 提供新帳號免費點數，適合測試他們推理雲端上的模型。

</div>

## Configure in TypeLate

<div class="lang-en">

1. Open **Settings → AI → Provider Selection**.
2. Pick a transcription provider (Groq or OpenAI) and an LLM provider (any of the five). They can be different.
3. Switch to **API Keys** in the same section. Paste each key into its slot. The icon next to the field turns green when the prefix validates.
4. Click **Test connection** to confirm the key works.

</div>
<div class="lang-zh">

1. 開啟 **設定 → AI → 供應商選擇**。
2. 選一個語音轉錄供應商（Groq 或 OpenAI）和一個 LLM 供應商（5 家任選），兩者可以不同。
3. 在同一區切到 **API 金鑰**，把對應金鑰貼到對應欄位。前綴驗證通過時會顯示綠色圖示。
4. 點 **測試連線** 確認金鑰可用。

</div>

## Privacy reminder

<div class="lang-en">

- Your API key is stored in TypeLate's local settings file, not transmitted to any server.
- Audio and text are sent **directly** from your machine to the provider's API endpoint over HTTPS.
- TypeLate has no telemetry servers — there's nothing to opt out of.
- You can verify all of this in the open-source code at [github.com/bobo52310/TypeLate](https://github.com/bobo52310/TypeLate).

</div>
<div class="lang-zh">

- API Key 存在 TypeLate 本機設定檔，不會傳到任何伺服器。
- 語音與文字透過 HTTPS **直接** 從你的電腦送到供應商 API 端點。
- TypeLate 完全沒有遙測伺服器 — 沒有需要關閉的選項。
- 以上一切都可以在開源程式碼中親自驗證：[github.com/bobo52310/TypeLate](https://github.com/bobo52310/TypeLate)。

</div>
