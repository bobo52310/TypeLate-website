---
title: "Use Cases & Recipes"
titleZh: "實戰場景"
description: "Real workflows for email, chat, code, notes, multilingual conversations, and accessibility — what to set, what to say, and what comes out."
descriptionZh: "Email、聊天、程式碼、筆記、多語對話、無障礙等真實場景。要怎麼設定、怎麼講、輸出長什麼樣。"
order: 110
---

<div class="lang-en">

The settings pages tell you *what* every option does. This page tells you *how to combine them* for the most common workflows. Each recipe lists the relevant settings, a sample input, and the polished output.

</div>
<div class="lang-zh">

設定頁面講的是每個選項 *是什麼*。這頁講的是「組合起來怎麼最有效」。每個場景都列出相關設定、範例輸入、實際產出。

</div>

## Recipe 1 — Professional email reply

<div class="lang-en">

**Setting**: Enhancement mode = `Clean`, Context-Aware Mode = on, Active app = Mail / Outlook.

**You say** (rough draft):
> *"um so I wanted to let you know that uh the project timeline has been updated and we're now looking at um a delivery date of April 15th instead of the original March deadline because the vendor had some delays"*

**Polished result**:
> *"I wanted to inform you that the project timeline has been updated. We're now targeting a delivery date of April 15th, as the vendor experienced some delays with the original March deadline."*

Why this combination: Clean keeps your phrasing intact, Context-Aware notices you're in Mail and tightens the tone professionally. If you want it even more formal, switch the prompt mode to `Custom` and use the [Professional email](/docs/prompt-cookbook#professional-email-reply) template from the cookbook.

</div>
<div class="lang-zh">

**設定**：強化模式 = `Clean`、情境感知 = 開、目前 App = Mail / Outlook。

**你說**（草稿）：
> *「就是呃我想跟你說那個專案時程更新了，現在預計交付日期是 4 月 15 號，不是原本 3 月，因為廠商有點延誤」*

**潤稿結果**：
> *「想跟你說明，專案時程已更新。我們目前預計於 4 月 15 日交付，原訂 3 月期限是因廠商出現延誤而調整。」*

為什麼這組合好：Clean 保留你的用詞，情境感知偵測到你在 Mail，自動把語氣收緊到專業。想更正式的話，把 prompt 模式切到 `Custom` 並套用 [Cookbook 的 Professional email 模板](/docs/prompt-cookbook#professional-email-reply)。

</div>

## Recipe 2 — Slack / casual chat

<div class="lang-en">

**Setting**: Enhancement mode = `Clean`, Context-Aware Mode = on, Active app = Slack / Discord / Teams.

**You say**:
> *"hey can someone help me with the deploy I think the staging environment is down again"*

**Polished result**:
> *"Hey, can someone help me with the deploy? I think the staging environment is down again."*

Notice the AI didn't formalise this into "Dear team, I would like to inquire about…" — Context-Aware mode recognised the chat context and kept your natural register. This is the single biggest reason to leave Context-Aware Mode on: it knows the difference between a Slack message and a board memo.

</div>
<div class="lang-zh">

**設定**：強化模式 = `Clean`、情境感知 = 開、目前 App = Slack / Discord / Teams。

**你說**：
> *「hey 有沒有人可以幫我看一下 deploy 我覺得 staging 環境又掛了」*

**潤稿結果**：
> *「Hey，有人可以幫我看一下 deploy 嗎？我覺得 staging 環境又掛了。」*

請注意 AI 沒有把它改成「親愛的團隊，我想請教⋯⋯」這種正式語氣 — 情境感知認得這是聊天場景，保留你原本輕鬆的口吻。這就是為什麼建議把情境感知開著：它知道 Slack 訊息和董事會備忘的差別。

</div>

## Recipe 3 — Code comments / IDE

<div class="lang-en">

**Setting**: Enhancement mode = `Clean` or `None`, Context-Aware Mode = on, Active app = VS Code / Cursor / Xcode / Terminal.

**You say** (cursor on a JSDoc line):
> *"this function validates the input parameters and throws an error if the user ID is missing or if the email format is invalid"*

**Polished result**:
> *"Validates input parameters. Throws an error if user ID is missing or email format is invalid."*

Context-Aware in IDE mode produces concise, present-tense, technical phrasing — it strips "this function" because tooling already knows what symbol you're documenting.

For commit messages or PR descriptions, switch to `Format` so multi-step thoughts come out as bullet points.

</div>
<div class="lang-zh">

**設定**：強化模式 = `Clean` 或 `None`、情境感知 = 開、目前 App = VS Code / Cursor / Xcode / Terminal。

**你說**（游標在某段 JSDoc 上）：
> *「這個函式驗證輸入參數，如果 user ID 缺少或 email 格式不對就拋錯」*

**潤稿結果**：
> *「驗證輸入參數。User ID 缺少或 email 格式不對時拋錯。」*

IDE 模式下的情境感知會產生簡潔、現在式、技術風格的描述 — 它會把「這個函式」拿掉，因為工具本身已經知道你在註解哪個符號。

寫 commit message 或 PR description 時，切到 `Format` 讓多步驟描述變成條列。

</div>

## Recipe 4 — Meeting notes & todos

<div class="lang-en">

**Setting**: Enhancement mode = `Format`, Context-Aware Mode = on, Active app = Notion / Obsidian / Bear / Apple Notes.

**You say** (brain-dump after a meeting):
> *"okay so for the product launch we need to do three things first we need to finalize the pricing page second we need to prepare the press release and third we need to set up the analytics tracking for conversion events"*

**Polished result**:
```
Product launch checklist:
1. Finalize the pricing page
2. Prepare the press release
3. Set up analytics tracking for conversion events
```

`Format` mode is what you want for any time you say "first / second / third" or "we need to / I should / let's". It detects the structure and produces real markdown lists rather than running prose.

For long meeting recordings, use [Toggle mode](/docs/hotkeys-and-triggers#toggle) so you don't have to hold the hotkey for 20 minutes.

</div>
<div class="lang-zh">

**設定**：強化模式 = `Format`、情境感知 = 開、目前 App = Notion / Obsidian / Bear / Apple Notes。

**你說**（會議後一口氣講出待辦）：
> *「好那為了產品上線我們要做三件事第一要敲定 pricing page 第二要準備新聞稿第三要設定轉換事件的分析追蹤」*

**潤稿結果**：
```
產品上線待辦：
1. 敲定 pricing page
2. 準備新聞稿
3. 設定轉換事件的分析追蹤
```

只要你開頭講「第一⋯第二⋯第三⋯」或「我們要⋯應該⋯該⋯」，就改用 `Format` 模式。它會偵測結構並產出真的 markdown 清單，不是一長串散文。

長段會議錄音建議用 [Toggle 模式](/docs/hotkeys-and-triggers#toggle)，免得你要按住熱鍵 20 分鐘。

</div>

## Recipe 5 — Mid-conversation language switch

<div class="lang-en">

**Setting**: Transcription Language = `Auto Detect`, Enhancement mode = `Clean`.

**You say** (English/Chinese mix):
> *"I want to confirm tomorrow's meeting time，是早上十點還是下午兩點，because I might have another call in the afternoon"*

**Polished result**:
> *"I want to confirm tomorrow's meeting time — is it 10 AM or 2 PM? Because I might have another call in the afternoon."*

Whisper auto-detects the dominant language per recording. If you switch mid-sentence, the result is in whichever language has more weight. If you frequently mix and the auto-detect occasionally guesses wrong, pin the language in **Settings → Application → Transcription Language**.

</div>
<div class="lang-zh">

**設定**：轉錄語言 = `Auto Detect`、強化模式 = `Clean`。

**你說**（中英混講）：
> *「我想確認一下明天的會議時間 is it ten AM or two PM 因為下午我可能有另一個 call」*

**潤稿結果**：
> *「我想確認一下明天的會議時間 — 是早上 10 點還是下午 2 點？因為下午我可能有另一個 call。」*

Whisper 每次錄音會自動偵測主要語言。句中切語言的話，結果會以權重較高的語言輸出。若你常混講且偶爾偵測錯誤，到 **設定 → 應用程式 → 轉錄語言** 鎖定語言。

</div>

## Recipe 6 — Hands-free / accessibility

<div class="lang-en">

**Setting**: Trigger mode = `Toggle`, Hotkey = a key that's easy to reach without looking (e.g. <kbd>Right Alt</kbd> or <kbd>Fn</kbd>), Enhancement mode = whatever fits the active app, Context-Aware Mode = on.

This setup avoids holding the key for the duration of speech — useful if you have RSI or limited mobility. Tap once to start, take your time speaking, tap again when you're done.

The 5-minute auto-stop safety timeout means even if you forget to tap to end, you won't accidentally record a 4-hour conversation.

</div>
<div class="lang-zh">

**設定**：觸發模式 = `Toggle`、熱鍵 = 不用看就能按到的鍵（例如 <kbd>Right Alt</kbd> 或 <kbd>Fn</kbd>）、強化模式 = 視 App 而定、情境感知 = 開。

這個組合的好處是不用按住熱鍵講完整段話 — 對 RSI 或行動不便的使用者很友善。點一下開始，慢慢講，講完再點一下結束。

5 分鐘自動停止的防呆機制，讓你忘記點結束也不會意外錄到 4 小時對話。

</div>

## Recipe 7 — Documenting a new project

<div class="lang-en">

**Step 1**: Run a project-specific glossary through **Dictionary → Text Analyzer** (paste a PRD, README, or spec). The analyzer extracts proper nouns, acronyms, and repeated multi-word phrases.

**Step 2**: Approve the relevant ones — they're added to your dictionary with `AI-learned` tag.

**Step 3**: Set up a [Custom prompt](/docs/prompt-cookbook#technical-documentation) that matches your team's voice (e.g. "always write in third person, present tense, with a noun-first sentence structure").

**Step 4**: Dictate. Your terms are recognised correctly, and the prompt produces text that fits your team's style guide.

</div>
<div class="lang-zh">

**步驟 1**：把專案的 PRD、README、spec 之類的文件貼到 **字典 → 文字分析器**。分析器會抽出專有名詞、縮寫、重複出現的多詞片語。

**步驟 2**：通過你想要的詞彙 — 它們會被加進字典，標籤 `AI 學習`。

**步驟 3**：設定一組 [自訂 prompt](/docs/prompt-cookbook#technical-documentation) 匹配團隊語氣（例如「永遠用第三人稱、現在式、名詞開頭的句構」）。

**步驟 4**：開始口述。你的術語會被正確辨識，prompt 也會產出符合團隊風格指南的文字。

</div>

## Recipe 8 — One-off short replies (yes / ok / 3pm)

<div class="lang-en">

**Setting**: Enhancement threshold = `15` (or higher).

If your transcription is under 15 characters, TypeLate skips the LLM enhancement step entirely. This:

- Saves an LLM API call (faster + cheaper).
- Avoids weird AI rewrites of "ok" into "Acknowledged. I will proceed accordingly."
- Keeps the trigger snappy for quick acknowledgements.

The threshold is in **Settings → AI → Prompts & Enhancement → Minimum length**.

</div>
<div class="lang-zh">

**設定**：強化字數門檻 = `15`（或更高）。

當轉錄結果低於 15 字元時，TypeLate 完全跳過 LLM 強化步驟。好處：

- 省下一次 LLM API 呼叫（更快更省）。
- 避免 AI 把「OK」改寫成「茲此確認，將依此辦理」這種怪東西。
- 短回覆的觸發體驗更輕快。

門檻在 **設定 → AI → Prompts 與強化 → 最少字元數**。

</div>

## See also

<div class="lang-en">

- [AI Enhancement](/docs/ai-enhancement) — full reference for prompt modes
- [Prompt Cookbook](/docs/prompt-cookbook) — copy-pasteable custom prompts
- [Vocabulary & Sync](/docs/vocabulary-and-sync) — for project-specific terminology
- [Hotkeys & Trigger Modes](/docs/hotkeys-and-triggers) — picking the right trigger feel

</div>
<div class="lang-zh">

- [AI 強化](/docs/ai-enhancement) — Prompt 模式完整參考
- [Prompt 食譜](/docs/prompt-cookbook) — 可複製貼上的自訂 prompt
- [字典與同步](/docs/vocabulary-and-sync) — 處理專案專屬的術語
- [熱鍵與觸發模式](/docs/hotkeys-and-triggers) — 挑出最順手的觸發手感

</div>
