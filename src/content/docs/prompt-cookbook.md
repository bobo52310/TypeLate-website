---
title: "Prompt Cookbook"
titleZh: "Prompt 食譜"
description: "Copy-paste custom prompts for the most common scenarios — professional email, code review, social posts, technical docs, translation, and more."
descriptionZh: "可複製貼上的自訂 prompt 模板，涵蓋專業 email、code review、社群貼文、技術文件、翻譯等常見情境。"
order: 120
---

<div class="lang-en">

These are templates for **Custom** enhancement mode (Settings → AI → Prompts & Enhancement → Mode → Custom). Paste one in, tweak the language and tone clauses to match your style, save. Each prompt is short on purpose — long prompts make Whisper-style results worse, not better.

Use the **Re-enhance with AI → Custom** button on the HUD action bar to swap prompts on the fly without going to Settings.

</div>
<div class="lang-zh">

以下都是 **Custom** 強化模式的模板（設定 → AI → Prompts 與強化 → 模式 → Custom）。複製進去、把語言和語氣調整成你的風格、存檔。每段 prompt 都刻意寫短 — Custom prompt 越長，Whisper 風格的結果反而越糟。

可以用 HUD action bar 的 **Re-enhance with AI → Custom** 按鈕快速切 prompt，不用回設定頁。

</div>

## Professional email reply

<div class="lang-en">

```
Rewrite the input as a polite, concise reply suitable for a
professional email. Keep the original meaning, fix grammar
and filler words, and adopt a courteous tone. Do not add
information that wasn't in the input. Output only the
rewritten text — no preamble, no quotes.
```

When to use: client correspondence, vendor follow-ups, manager updates.

</div>
<div class="lang-zh">

```
請將輸入改寫為適合商務 email 的有禮、簡潔回覆。保留原意，
修正文法與贅詞，採用客氣語氣。不要加入輸入中沒有的資訊。
只輸出改寫後的文字 — 不要前言、不要引號。
```

適用：客戶往來、廠商追蹤、向主管回報。

</div>

## Friendly Slack message

<div class="lang-en">

```
Rewrite the input as a friendly, casual Slack message.
Remove filler words, keep contractions, and feel free to
include emoji where natural. Keep it short. Output only the
rewritten text.
```

</div>
<div class="lang-zh">

```
請將輸入改寫為輕鬆、友善的 Slack 訊息。去除贅詞，保留口語縮寫，
適當的位置可加 emoji。保持簡短。只輸出改寫後的文字。
```

</div>

## Concise code comment

<div class="lang-en">

```
Rewrite the input as a one- or two-sentence code comment.
Use present tense, third person, and start with a verb
("Validates X", "Returns Y"). Strip "this function does..."
or "the purpose of this is...". Output only the comment.
```

When to use: JSDoc, Rust doc comments, Python docstrings.

</div>
<div class="lang-zh">

```
請將輸入改寫為 1 至 2 句的程式碼註解。使用現在式、第三人稱、
動詞開頭（「Validates X」、「Returns Y」）。去掉「這個函式做⋯」、
「此功能的目的是⋯」這類開頭。只輸出註解內容。
```

適用：JSDoc、Rust doc comments、Python docstring。

</div>

## Git commit message

<div class="lang-en">

```
Rewrite the input as a Conventional Commit message.
Format: <type>(<scope>): <subject>
- type: one of feat, fix, refactor, docs, test, chore, perf
- scope: optional, in parentheses
- subject: imperative mood, lowercase, no period, under 70 chars
Output only the commit message line.
```

When to use: dictating commits without leaving the terminal.

</div>
<div class="lang-zh">

```
請將輸入改寫為 Conventional Commit 格式：
<type>(<scope>): <subject>
- type 從 feat / fix / refactor / docs / test / chore / perf 中選一個
- scope 選填，放括號內
- subject 用祈使句、全小寫、不加句號、70 字以內
只輸出該 commit 訊息單行。
```

適用：在終端機中口述 commit 訊息。

</div>

## Pull request description

<div class="lang-en">

```
Rewrite the input as a pull request description with two
sections in markdown:

## Summary
1–3 bullet points on what the PR changes and why.

## Test plan
A bulleted checklist of what was/should be tested.

Use neutral, present-tense language. Do not invent details
not in the input.
```

</div>
<div class="lang-zh">

```
請將輸入改寫為 markdown 格式的 PR description，分兩段：

## Summary
1–3 條列說明這個 PR 改了什麼、為什麼。

## Test plan
條列待測試或已測試項目。

使用中立、現在式的語氣。不要捏造輸入中沒有的細節。
```

</div>

## Social media post (technical)

<div class="lang-en">

```
Rewrite the input as a single technical Twitter/X post under
280 characters. Lead with the most surprising fact. Use a
neutral, slightly punchy tone. No hashtags. No "I'm excited
to..." or "thrilled to...". Output only the post.
```

</div>
<div class="lang-zh">

```
請將輸入改寫為單則技術風格的 Twitter / X 貼文，280 字元以內。
最有趣的事實放在開頭。語氣中立、略帶力道。不要 hashtag。
不要「I'm excited to⋯」或「thrilled to⋯」這種開場。
只輸出貼文。
```

</div>

## Technical documentation

<div class="lang-en">

```
Rewrite the input as documentation prose. Use present tense,
third person, and noun-first sentences ("The function returns..."
not "It will return..."). Break long thoughts into shorter
sentences. Do not add headings or lists unless the input
clearly demands them.
```

When to use: README sections, design doc paragraphs, API docs.

</div>
<div class="lang-zh">

```
請將輸入改寫為技術文件。使用現在式、第三人稱、名詞開頭的句構
（「The function returns⋯」而不是「It will return⋯」）。長句拆成
短句。輸入沒有明確的層次時，不要自行加標題或清單。
```

適用：README 段落、設計文件、API 文件。

</div>

## Meeting summary

<div class="lang-en">

```
Rewrite the input as meeting notes in markdown:

**Decisions**
- ...

**Action items**
- [Owner if mentioned] Action ...

**Open questions**
- ...

If a section has no items, omit it. Do not invent owners or dates.
```

</div>
<div class="lang-zh">

```
請將輸入改寫為 markdown 格式的會議紀錄：

**決議事項**
- ...

**待辦項目**
- [若有提到 owner] 動作⋯

**待釐清問題**
- ...

某段沒內容就省略。不要自行編造 owner 或日期。
```

</div>

## Customer support reply

<div class="lang-en">

```
Rewrite the input as a customer support reply. Be empathetic
in the first sentence, give a clear answer in the second,
and offer a next step in the third. Avoid corporate jargon.
Use the customer's name only if it's in the input.
```

</div>
<div class="lang-zh">

```
請將輸入改寫為客服回覆。第一句表達同理，第二句給明確答案，
第三句提供下一步動作。避免官腔。輸入中有客戶名字才稱呼，沒有
就不要自己編。
```

</div>

## Translate to English (preserve nuance)

<div class="lang-en">

```
Translate the input into natural, idiomatic English. Preserve
register (formal/casual stays formal/casual). If the input is
already in English, fix grammar but do not change phrasing.
Output only the translation.
```

</div>
<div class="lang-zh">

```
請將輸入翻譯為自然、道地的英文。保留語體（正式維持正式、輕鬆維持輕鬆）。
若輸入已是英文，只修文法、不改用詞。只輸出翻譯結果。
```

</div>

## Translate to Traditional Chinese (Taiwan)

<div class="lang-en">

```
Translate the input into Traditional Chinese for a Taiwan
audience. Use Taiwan-style vocabulary (e.g. 軟體 not 软件,
網路 not 网络) and natural Mandarin word order. Preserve
register. Output only the translation.
```

</div>
<div class="lang-zh">

```
請將輸入翻譯為繁體中文，目標讀者為台灣受眾。使用台灣慣用詞彙
（例如「軟體」而非「软件」、「網路」而非「网络」）、自然的
中文語序。保留語體。只輸出翻譯結果。
```

</div>

## Make it shorter

<div class="lang-en">

```
Rewrite the input in half the words while keeping every
piece of information. Cut adjectives, hedges, and politeness
phrases that don't add meaning. Output only the rewritten text.
```

When to use: tightening up a long answer for a thread reply or DM.

</div>
<div class="lang-zh">

```
請將輸入用一半的字數重寫，但保留每一條資訊。砍掉沒帶意思的形容詞、
模糊語、客套句。只輸出改寫後的文字。
```

適用：要把長答覆壓進討論串或私訊時。

</div>

## Make it kinder

<div class="lang-en">

```
Rewrite the input to be warmer and more empathetic without
changing the meaning. Soften direct criticism, acknowledge
the recipient's effort, and frame requests as collaborative.
Output only the rewritten text.
```

When to use: feedback on someone's work, declining a request, replying to a frustrated message.

</div>
<div class="lang-zh">

```
請將輸入改得更溫暖、更有同理心，但不改變原意。把直接的批評
變得柔和、肯定對方的付出、把請求轉為協作語氣。
只輸出改寫後的文字。
```

適用：對別人成果的 feedback、婉拒、回覆煩躁的訊息。

</div>

## See also

- [AI Enhancement](/docs/ai-enhancement) — how Custom mode interacts with Context-Aware
- [Use Cases](/docs/use-cases) — when to combine which prompt with which app
- [Vocabulary & Sync](/docs/vocabulary-and-sync) — for project-specific terminology that should never be auto-corrected
