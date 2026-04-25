---
title: "AI Enhancement"
titleZh: "AI 強化"
description: "Pick how aggressively AI rewrites your speech. From error-fix-only to full restructuring, with context-aware tone shifting on top."
descriptionZh: "決定 AI 改寫你語音的程度，從只修錯到完整重構，再加上情境感知的語氣切換。"
order: 40
---

<div class="lang-en">

Whisper transcribes what you said. The LLM enhancement layer turns that raw transcription into the text you actually want to send. TypeLate gives you control over how much rewriting happens.

</div>
<div class="lang-zh">

Whisper 負責把你說的話轉成文字。LLM 強化層則把這段「逐字稿」變成你真正想送出的內容。TypeLate 讓你決定改寫的程度。

</div>

## Enhancement modes

<div class="lang-en">

Set the mode in **Settings → AI → Prompts & Enhancement → Mode**.

</div>
<div class="lang-zh">

在 **設定 → AI → Prompts 與強化 → 模式** 切換。

</div>

### Clean (default)

<div class="lang-en">

- Removes filler words (`um`, `uh`, `like`, `you know`).
- Fixes obvious grammar errors and punctuation.
- **Preserves your tone** — does not rewrite for formality.
- Use when you trust your phrasing and just want noise gone.

**Raw**: *"so um I was thinking like maybe we should uh probably move the meeting to like Thursday or something because um you know the client isn't going to be available on Monday"*

**Clean output**: *"I was thinking maybe we should move the meeting to Thursday, since the client isn't going to be available on Monday."*

</div>
<div class="lang-zh">

- 去除贅詞（`嗯`、`呃`、`就是`、`你知道`）。
- 修正明顯文法與標點。
- **保留原本語氣** — 不會改寫成正式或不正式。
- 你對自己用詞有信心、只想清掉雜訊時用。

**原始**：*「就是呃我在想就是那個我們是不是呃應該把會議改到禮拜四之類的因為呃你知道客戶禮拜一沒辦法來」*

**Clean 輸出**：*「我在想我們是不是應該把會議改到禮拜四，因為客戶禮拜一沒辦法來。」*

</div>

### Format

<div class="lang-en">

- Restructures the content into paragraphs, lists, or headings when appropriate.
- May change wording for clarity.
- Best when you're brain-dumping a checklist or multi-step thought.

**Raw**: *"okay so for the product launch we need to do three things first we need to finalize the pricing page second we need to prepare the press release and third we need to set up the analytics tracking for conversion events"*

**Format output**:

> Product launch checklist:
> 1. Finalize the pricing page
> 2. Prepare the press release
> 3. Set up analytics tracking for conversion events

</div>
<div class="lang-zh">

- 視內容適度重組成段落、列表、標題。
- 可能會為了清晰調整用詞。
- 適合一口氣講出待辦清單或多步驟思路時用。

**原始**：*「好那為了產品上線我們要做三件事第一要敲定 pricing page 第二要準備新聞稿第三要設定轉換事件的分析追蹤」*

**Format 輸出**：

> 產品上線待辦：
> 1. 敲定 pricing page
> 2. 準備新聞稿
> 3. 設定轉換事件的分析追蹤

</div>

### Custom

<div class="lang-en">

- Write your own system prompt.
- Use for niche styles: code review tone, marketing copy, emoji-heavy chat, etc.
- The custom prompt overrides Clean / Format completely.

**Example custom prompt**: *"Rewrite the input as a polite, concise reply suitable for a professional email. Keep the meaning intact and add a brief sign-off if appropriate."*

</div>
<div class="lang-zh">

- 自己寫 system prompt。
- 適合特殊風格：code review 語氣、行銷文案、表情符號滿天飛的聊天等。
- Custom prompt 會完全覆蓋 Clean / Format。

**範例 Custom prompt**：*「請把輸入內容改寫成有禮貌、簡潔、適合商務 email 的回覆。保留原意，必要時加上簡短結尾語。」*

</div>

### None

<div class="lang-en">

- Skip enhancement entirely. The raw Whisper transcription is pasted directly.
- Useful when you want every word verbatim — note-taking, accessibility transcription, etc.
- Saves an LLM API call (no LLM provider key needed).

</div>
<div class="lang-zh">

- 完全跳過強化，直接貼上 Whisper 原始逐字稿。
- 適合需要逐字保留的場景 — 會議記錄、無障礙轉錄等。
- 節省一次 LLM API 呼叫（不需要 LLM 供應商金鑰）。

</div>

## Enhancement threshold

<div class="lang-en">

Set in **Settings → AI → Prompts & Enhancement → Minimum length**.

If the transcription is shorter than this character count, TypeLate skips the enhancement step. Useful for short replies (`yes`, `ok`, `tomorrow at 3`) where rewriting adds nothing.

Default: 0 (always enhance). A common setting is 12–20 characters.

</div>
<div class="lang-zh">

在 **設定 → AI → Prompts 與強化 → 最少字元數** 設定。

當轉錄文字短於這個字數時，TypeLate 會跳過強化步驟。適合短回覆（`yes`、`ok`、`下午三點`）這種改寫沒意義的場景。

預設 0（永遠強化），常用設定是 12–20 字元。

</div>

## Context-Aware mode

<div class="lang-en">

Toggle in **Settings → AI → Context-Aware Mode**. When on, TypeLate detects the active app and **adjusts tone** automatically:

| Active app | Adjusted tone |
| --- | --- |
| Mail, Outlook, Apple Mail | Formal / professional |
| Slack, Discord, Teams, LINE | Casual / concise |
| VS Code, Xcode, Terminal, Cursor | Technical, precise |
| Obsidian, Notion, Bear, Apple Notes | Natural writing flow |
| Anything else | Falls back to your enhancement mode |

It also reads a small window of text around your cursor (when permission allows) so the new text fits the existing paragraph instead of looking grafted-on.

</div>
<div class="lang-zh">

在 **設定 → AI → 情境感知模式** 切換。開啟後，TypeLate 會偵測當前 App 並 **自動調整語氣**：

| 當前 App | 調整方向 |
| --- | --- |
| Mail、Outlook、Apple Mail | 正式 / 專業 |
| Slack、Discord、Teams、LINE | 輕鬆 / 簡潔 |
| VS Code、Xcode、Terminal、Cursor | 技術精確 |
| Obsidian、Notion、Bear、Apple Notes | 自然書寫 |
| 其他 | 回到你的預設強化模式 |

當權限允許時，它也會讀取游標附近的一小段文字，讓新文字接得上既有段落、不會像硬塞進去的。

</div>

## Model selection

<div class="lang-en">

In **Settings → AI → Model Selection**, you can choose which Whisper model and which LLM model TypeLate uses. The default for each provider is the recommended cost/quality balance — only override if you have a reason. The dashboard shows per-model cost so you can make informed switches.

</div>
<div class="lang-zh">

在 **設定 → AI → 模型選擇**，可以指定使用的 Whisper 模型與 LLM 模型。每家供應商的預設值都是「成本/品質」的最佳平衡，沒特殊需求不用改。Dashboard 會顯示各模型的成本，方便你做出明智選擇。

</div>
