---
title: "Privacy & Reliability"
titleZh: "隱私與可靠性"
description: "Where your data actually goes. How TypeLate filters Whisper hallucinations, recovers from provider failures, and what Sentry sees."
descriptionZh: "你的資料到底流向哪裡。TypeLate 如何過濾 Whisper 幻覺、處理供應商失敗、Sentry 又看得到什麼。"
order: 90
---

<div class="lang-en">

This is the trust-but-verify page. Everything here is implemented in code you can read at [github.com/bobo52310/TypeLate](https://github.com/bobo52310/TypeLate).

</div>
<div class="lang-zh">

這頁是信任但需驗證（trust-but-verify）。下面講的每一件事都實作在 [github.com/bobo52310/TypeLate](https://github.com/bobo52310/TypeLate) 的開源程式碼中，你可以親自驗證。

</div>

## Where your data goes

<div class="lang-en">

```
┌──────────────┐          ┌─────────────────┐
│  Microphone  │ ───────► │  TypeLate App   │
└──────────────┘  audio   │  (your machine) │
                          └────────┬────────┘
                                   │ HTTPS, your API key
                                   ▼
                          ┌─────────────────┐
                          │  Provider API   │  Groq · OpenAI · Gemini
                          │  (chosen by     │  · OpenRouter · NVIDIA
                          │   you)          │
                          └─────────────────┘
```

That's it. There is **no TypeLate server** in this picture.

- **API keys** are written to Tauri's local secure store. They never leave your device.
- **Audio** is uploaded directly to the provider you configured, over HTTPS, with your API key. TypeLate doesn't proxy, log, or replay it.
- **Text** is sent to the LLM provider for enhancement (when enhancement mode isn't `None`). Same direct-HTTPS pattern.

External calls TypeLate makes that *aren't* about transcription:

| What | When | Why | Opt-out |
| --- | --- | --- | --- |
| GitHub Releases | When you click **Check for Update** in About | Pull update metadata via Tauri updater | Don't click the button |
| Google OAuth + Drive | Only after you connect Drive sync | Vocabulary sync to your `appDataFolder` | Don't connect, or disconnect |
| Sentry (if enabled) | When an exception happens in production builds | Crash diagnostics — see below | Build from source without `VITE_SENTRY_DSN` |

There are no usage analytics, no fingerprinting, no phone-home heartbeats. The list above is exhaustive.

</div>
<div class="lang-zh">

```
┌──────────┐         ┌─────────────────┐
│  麥克風   │ ──────► │  TypeLate App   │
└──────────┘  音訊    │  （你的電腦）     │
                     └────────┬────────┘
                              │ HTTPS、你的 API Key
                              ▼
                     ┌─────────────────┐
                     │  供應商 API      │  Groq · OpenAI · Gemini
                     │  （你自己選的）   │  · OpenRouter · NVIDIA
                     └─────────────────┘
```

就這樣。**沒有 TypeLate 伺服器** 出現在這張圖裡。

- **API Keys** 寫入 Tauri 的本機安全儲存，不離開你的裝置。
- **音訊** 透過 HTTPS、用你的 API Key 直送你選的供應商。TypeLate 不做代理、不記錄、不回放。
- **文字** 在強化模式不是 `None` 時送到 LLM 供應商強化。同樣 HTTPS 直連。

TypeLate 會發出但 **跟轉錄無關** 的對外請求：

| 什麼 | 何時 | 為何 | 如何停用 |
| --- | --- | --- | --- |
| GitHub Releases | 你在「關於」裡點 **檢查更新** 時 | 透過 Tauri updater 抓更新檔資訊 | 別按那個按鈕 |
| Google OAuth + Drive | 你連接 Drive 同步後 | 把字典同步到你的 `appDataFolder` | 別連接，或斷開連線 |
| Sentry（若啟用） | 正式版發生例外時 | Crash 診斷 — 詳見下面 | 自行從原始碼建置、不設 `VITE_SENTRY_DSN` |

沒有使用分析、沒有指紋追蹤、沒有 phone-home 心跳。上表已窮舉所有對外請求。

</div>

## Sentry error reporting

<div class="lang-en">

If `VITE_SENTRY_DSN` is set at build time (it is, for the official Releases), TypeLate uses Sentry to report **crashes and uncaught exceptions only**. The configuration:

- `sendDefaultPii: false` — Sentry's PII stripping is enabled. Email addresses, IPs and similar fingerprints are scrubbed before send.
- Performance tracing default sample rate: **0** (disabled). Override at build time with `VITE_SENTRY_TRACES_SAMPLE_RATE`.
- Errors carry context tags — which window the error occurred in (`dashboard` or `hud`), which step of the pipeline (transcription / enhancement / DB / etc.).
- Errors do **not** carry your transcript text, raw audio, API keys, or recording filenames.

There's currently no in-app toggle to disable Sentry. If that's a deal-breaker for you, build from source with the DSN env var unset — Sentry initialisation no-ops when the DSN is missing.

</div>
<div class="lang-zh">

build 時若設定 `VITE_SENTRY_DSN`（官方發行版有設），TypeLate 會用 Sentry 回報 **崩潰與未捕捉例外** — 只此而已。設定如下：

- `sendDefaultPii: false` — Sentry 的 PII 過濾已開。Email、IP 等識別資訊會在送出前被洗掉。
- 效能追蹤預設取樣率 **0**（關閉）。build 時可用 `VITE_SENTRY_TRACES_SAMPLE_RATE` 覆寫。
- 錯誤夾帶情境標籤 — 例外發生在哪個視窗（`dashboard` 或 `hud`）、Pipeline 的哪一步（轉錄 / 強化 / DB / 等等）。
- 錯誤 **不會** 夾帶你的轉錄文字、原始音訊、API Key、錄音檔名。

App 內目前沒有開關可以關 Sentry。如果這對你是 deal-breaker，請自行從原始碼 build 且不設 DSN 環境變數 — DSN 缺失時 Sentry 初始化會 no-op。

</div>

## Hallucination filter

<div class="lang-en">

Whisper occasionally produces text where there was no speech. TypeLate has a three-layer filter to catch the most common false positives before they get pasted.

### Layer 1 — Speed anomaly

If Whisper returns a long string from a recording shorter than its theoretical processing time, it's a hallucination, not transcription.

- Trigger: `audioDuration < 1000ms` AND `result.length > 10 chars`.

### Layer 2 — No-speech detection

Three sub-checks combine audio-energy stats with Whisper's own `no_speech_prob` (NSP):

| Sub-check | Trigger |
| --- | --- |
| 2a | Peak audio energy < `0.02` (true silence) |
| 2b | Peak `0.02 – 0.03` AND RMS < `0.015` AND NSP > `0.7` (low signal, model agrees) |
| 2c | NSP > `0.9` regardless of peak (model is *very* confident) |

### Layer 3 — Known hallucination patterns

A blocklist of ~46 phrases that Whisper often hallucinates from training-data residue (subtitle watermarks, "thanks for watching", "subscribe to my channel", various Chinese subtitle artefacts). Matched as exact (whitespace-stripped) or as substring.

### What you see

When the filter rejects, the HUD shows a clean **No speech detected** error. Nothing gets pasted, nothing gets saved as a successful transcription, and you're not charged for empty results — well, you *are* charged for the API call to Whisper, but the LLM enhancement step is skipped, saving a second call.

The full filter implementation: [`src/lib/hallucinationDetector.ts`](https://github.com/bobo52310/TypeLate/blob/main/src/lib/hallucinationDetector.ts).

</div>
<div class="lang-zh">

Whisper 偶爾會在沒講話時硬編出文字。TypeLate 有 3 層過濾，攔下最常見的誤判。

### 第 1 層 — 速度異常

如果 Whisper 從一段比理論處理時間還短的錄音回傳一長串文字，那是幻覺，不是轉錄。

- 觸發：`音訊長度 < 1000ms` 且 `結果字元 > 10`。

### 第 2 層 — 無語音偵測

3 個子檢查混合音訊能量統計與 Whisper 自己回傳的 `no_speech_prob`（NSP）：

| 子檢查 | 觸發 |
| --- | --- |
| 2a | 峰值能量 < `0.02`（純靜音） |
| 2b | 峰值 `0.02 – 0.03` 且 RMS < `0.015` 且 NSP > `0.7`（弱訊號 + 模型同意是靜音） |
| 2c | NSP > `0.9`（模型 *非常* 確定沒語音），不管峰值多少 |

### 第 3 層 — 已知幻覺片語

一份大約 46 條的黑名單，列出 Whisper 常從訓練資料殘餘吐出的句子（字幕浮水印、「thanks for watching」、「請訂閱頻道」、各種中文字幕雜訊）。比對方式為去空白後完全相符，或子字串符合。

### 你會看到什麼

過濾觸發時，HUD 顯示乾淨的 **No speech detected** 錯誤。不會貼字、不會存成成功轉錄；空結果不會白白花你錢 — 嗯，實際上 Whisper API 那次呼叫 *仍會* 算錢，但 LLM 強化會被跳過，省下第二個 API 呼叫。

完整實作：[`src/lib/hallucinationDetector.ts`](https://github.com/bobo52310/TypeLate/blob/main/src/lib/hallucinationDetector.ts)。

</div>

## Retry and circuit breaker

<div class="lang-en">

API calls are wrapped in two layers of fault tolerance.

### Exponential backoff

Each call retries up to **2 times** (3 total attempts) on:

- Network errors (failed fetch, timeout)
- 429 (rate limit) and 5xx server errors

It does **not** retry on:

- 400, 401, 403, 404 (your input or auth is the problem; retrying won't help)
- AbortSignal (you cancelled)

Delay formula: `baseDelay × 2^attempt + random jitter`, with `baseDelay = 500ms`. So the wait sequence is roughly 500–1000ms, then 1000–1500ms.

Source: [`src/lib/retryWithBackoff.ts`](https://github.com/bobo52310/TypeLate/blob/main/src/lib/retryWithBackoff.ts).

### Circuit breaker

There's one circuit breaker per provider. If it sees **3 consecutive failures within a 5-minute window**, it trips **OPEN** for **60 seconds**, refusing further calls during that cool-down.

After 60 seconds it goes **HALF-OPEN** — the next call is allowed through. Success closes the circuit; another failure re-opens it for another 60 seconds.

Why this matters: when a provider is having a bad day, you'd otherwise be stuck waiting for retries to time out on every recording. The circuit breaker fails fast and lets you switch providers without staring at a spinner.

User-facing message when the breaker is open: **"Service temporarily unavailable, retrying in X seconds."**

Source: [`src/lib/circuitBreaker.ts`](https://github.com/bobo52310/TypeLate/blob/main/src/lib/circuitBreaker.ts).

</div>
<div class="lang-zh">

API 呼叫包了兩層容錯。

### Exponential backoff（指數退避）

每次呼叫最多重試 **2 次**（共 3 次嘗試），條件：

- 網路錯誤（fetch 失敗、超時）
- 429（速率限制）與 5xx 伺服器錯誤

**不會** 重試的情況：

- 400、401、403、404（是你的輸入或認證有問題，重試也沒用）
- AbortSignal（你取消了）

延遲公式：`baseDelay × 2^attempt + random jitter`，`baseDelay = 500ms`。所以等待時間大約是 500–1000ms、再 1000–1500ms。

原始碼：[`src/lib/retryWithBackoff.ts`](https://github.com/bobo52310/TypeLate/blob/main/src/lib/retryWithBackoff.ts)。

### 斷路器（Circuit breaker）

每個供應商一個斷路器。如果在 **5 分鐘窗口內看到 3 次連續失敗**，會跳到 **OPEN** 狀態 **60 秒**，期間拒絕後續呼叫。

60 秒後切到 **HALF-OPEN** — 下一次呼叫被允許通過。成功就關閉電路；失敗就再開 60 秒。

為什麼重要：供應商當機時，沒有斷路器的話你每次錄音都要等 retry 跑完才知道。斷路器讓 fail 變快，你可以馬上切換供應商，不用呆呆等轉圈圈。

斷路器跳開時使用者看到：**「Service temporarily unavailable, retrying in X seconds.」**

原始碼：[`src/lib/circuitBreaker.ts`](https://github.com/bobo52310/TypeLate/blob/main/src/lib/circuitBreaker.ts)。

</div>

## Offline behaviour

<div class="lang-en">

Before each transcription request, TypeLate reads `navigator.onLine`. If it's `false`, the call is short-circuited and you see a **Network error** message instantly — no waiting on a hung fetch.

This is a coarse signal (the browser only knows about absence of any network interface, not whether your specific provider is reachable), but it catches the common "I'm on the train and disconnected" case cleanly.

There's no "queue and retry when online" flow yet — recordings made while offline simply fail. Audio is preserved if your retention policy allows, so they show up in the [recovery banner](/docs/dashboard-and-analytics#failed-transcription-recovery) once you're back online.

</div>
<div class="lang-zh">

每次發送轉錄請求前，TypeLate 讀 `navigator.onLine`。如果是 `false`，直接短路該次呼叫，立刻顯示 **Network error** — 不用呆等卡住的 fetch。

這是粗略訊號（瀏覽器只知道是不是完全沒網路介面，不知道你的特定供應商通不通），但能乾淨地接住「我在火車上斷線」這種常見情境。

目前還沒有「離線排隊、上線再重試」的流程 — 離線時做的錄音就是失敗。如果你的保留策略允許，音訊檔會被保留下來，重新上線後出現在 [救援橫幅](/docs/dashboard-and-analytics#failed-transcription-recovery) 中。

</div>
