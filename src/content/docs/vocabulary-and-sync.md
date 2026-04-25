---
title: "Vocabulary & Sync"
titleZh: "字典與同步"
description: "Teach TypeLate proper nouns, jargon, and brand names. Sync the dictionary across devices via Google Drive."
descriptionZh: "教 TypeLate 認識專有名詞、技術術語與品牌名。透過 Google Drive 跨裝置同步字典。"
order: 50
---

<div class="lang-en">

Generic Whisper models will mis-hear proper nouns — your name, product names, technical jargon. TypeLate's Smart Dictionary feeds those terms into the transcription pipeline so they come out right every time. The dictionary syncs across macOS, Android, and iOS via Google Drive.

</div>
<div class="lang-zh">

通用 Whisper 模型聽不懂專有名詞 — 你的名字、產品名、技術術語。TypeLate 的智慧字典會把這些詞餵進轉錄流程，每次都正確辨識。字典透過 Google Drive 在 macOS、Android、iOS 之間同步。

</div>

## Add terms manually

<div class="lang-en">

Open the **Dashboard → Dictionary** tab.

1. Type a term in the input box (e.g. `Anthropic`, `tauri`, `Bobo Chen`).
2. Press <kbd>Enter</kbd> or click **Add**.
3. The term appears in the list with `Manual` filter tag.

For brand names with non-obvious pronunciation, you can include a phonetic hint by adding it on a new line in the term editor. (See the in-app helper text for the current syntax.)

</div>
<div class="lang-zh">

開啟 **Dashboard → 字典** 分頁。

1. 在輸入框打字（例如 `Anthropic`、`tauri`、`Bobo Chen`）。
2. 按 <kbd>Enter</kbd> 或點 **新增**。
3. 該詞會出現在清單中，標籤為 `手動新增`。

如果是發音不直觀的品牌名，可以在編輯框新增一行寫上拼讀提示（最新語法請看 App 內的說明文字）。

</div>

## Bulk import from CSV

<div class="lang-en">

Click **Import** at the top of the dictionary list.

CSV format:

```
term,weight
TypeLate,3
Groq,3
GraphQL,2
kubernetes,1
```

- `term` — the word or phrase to recognize.
- `weight` — optional, integer 1–5. Higher weight makes the term more likely to win against similar-sounding alternatives. Default is 1.

Weights matter when terms compete (e.g. `Groq` vs `Grok`). Increase the weight when TypeLate keeps mis-hearing toward the wrong one.

</div>
<div class="lang-zh">

在字典列表上方點 **匯入**。

CSV 格式：

```
term,weight
TypeLate,3
Groq,3
GraphQL,2
kubernetes,1
```

- `term` — 要辨識的詞。
- `weight` — 選填，整數 1–5，數字越大越優先。預設為 1。

當有發音相近的詞競爭時（例如 `Groq` vs `Grok`），權重就有意義。如果 TypeLate 一直認錯，把對的那個權重調高即可。

</div>

## Auto-learning

<div class="lang-en">

When you paste a transcription and edit the result within a few seconds, TypeLate watches for replacement patterns. If the same correction happens repeatedly (e.g. you change `repo` → `Repo` three times), the corrected term gets added to the dictionary automatically with the `AI-learned` tag.

You can review and remove auto-learned terms in the **AI-learned** filter view of the dictionary.

</div>
<div class="lang-zh">

貼上轉錄後，如果你在幾秒內修改結果，TypeLate 會觀察「替換模式」。當同樣的修正重複出現幾次（例如你連續三次把 `repo` 改成 `Repo`），改過的詞就會自動加入字典，標籤為 `AI 學習`。

可以在字典的 **AI 學習** 過濾視圖中查看與刪除自動學到的詞。

</div>

## Google Drive sync

<div class="lang-en">

The dictionary lives in Google Drive's `appDataFolder` — a private app-scoped folder that **only TypeLate** can read and write. It does not appear in your normal Drive UI.

### Connect

1. Open **Dashboard → Dictionary → Cloud Sync**.
2. Click **Connect Google Drive**. A browser window opens for OAuth consent.
3. Grant access. You'll be redirected back to TypeLate when done.

### Sync direction

Sync is bidirectional and runs automatically:

- When TypeLate starts and detects a connection.
- After you add, edit, or remove a term (debounced).
- Manually via the **Sync now** button next to the connection status.

The last sync timestamp is shown beside the button so you always know what's fresh.

### Across devices

Install TypeLate (or [TypeLate-android](https://github.com/bobo52310/TypeLate-android) / TypeLate-iOS) on another device, sign in with the same Google account, and dictionary entries appear within seconds.

</div>
<div class="lang-zh">

字典存在 Google Drive 的 `appDataFolder` — 一個 **只有 TypeLate** 能讀寫的私有 app 資料夾，不會出現在你的 Drive 介面裡。

### 連接

1. 開啟 **Dashboard → 字典 → 雲端同步**。
2. 點 **連接 Google Drive**，瀏覽器會開啟 OAuth 同意頁。
3. 授權後會自動跳回 TypeLate。

### 同步方向

雙向同步，自動觸發時機：

- TypeLate 啟動且偵測到已連接時。
- 新增、編輯、刪除詞之後（有防抖）。
- 連接狀態旁的 **立即同步** 按鈕手動觸發。

按鈕旁會顯示「最後同步時間」，隨時知道資料新不新。

### 跨裝置

在其他裝置安裝 TypeLate（或 [TypeLate-android](https://github.com/bobo52310/TypeLate-android) / TypeLate-iOS），用同一個 Google 帳號登入，字典詞會在數秒內出現。

</div>

## Text Analyzer

<div class="lang-en">

In **Dashboard → Dictionary → Text Analyzer**, paste a document (a PRD, a glossary, internal docs) and TypeLate will extract candidate terms — proper nouns, jargon, repeated multi-word phrases. Review the suggestions and add the ones you want with one click.

This is the fastest way to onboard a new project's vocabulary.

</div>
<div class="lang-zh">

在 **Dashboard → 字典 → 文字分析器** 貼上一份文件（PRD、術語表、內部文件等），TypeLate 會自動抽出候選詞 — 專有名詞、技術術語、重複出現的多詞片語。審核完一鍵加入字典即可。

這是最快把一個新專案的常用詞彙灌進 TypeLate 的方法。

</div>

## What does the dictionary actually do?

<div class="lang-en">

Internally, dictionary terms are passed to Whisper as a **biasing prompt** during transcription. Whisper then prefers spellings and word boundaries that match those terms. They're also surfaced to the LLM enhancement step so it doesn't "correct" your jargon back to common English.

Local-only when not connected, encrypted in transit, app-scoped on Drive — your terms never leave your control.

</div>
<div class="lang-zh">

技術上，字典詞會在語音轉錄時當作 **偏好提示** 傳給 Whisper，讓它優先選用這些詞的拼字與斷字。LLM 強化階段也會收到字典，避免把你的術語「改正」成常見英文。

未連接同步時純本機儲存，傳輸期間加密，雲端同步檔案存在 app 私有空間 — 你的詞彙完全在你掌控中。

</div>
