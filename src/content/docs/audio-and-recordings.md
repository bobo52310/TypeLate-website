---
title: "Audio & Recordings"
titleZh: "音訊與錄音"
description: "Pick a microphone, set sound feedback, and decide how long recordings are kept. Plus how to search history, replay audio, and re-transcribe with newer settings."
descriptionZh: "選麥克風、設音效、決定錄音保留多久。加上如何搜尋歷史、重播音訊、用新設定重新轉錄。"
order: 60
---

## Audio input device

<div class="lang-en">

Settings live in **Settings → Audio → Microphone**. The dropdown lists every input device the OS reports plus a **System Default** option (this is what TypeLate picks when nothing else is set).

- Choosing a specific device by name pins recordings to it.
- The **Refresh** button re-enumerates devices — useful after plugging in a USB mic or pairing Bluetooth headphones.
- If the chosen device is unplugged before you record, TypeLate falls back to the system default silently.
- If it's unplugged **mid-recording**, the recording stops with an error.

</div>
<div class="lang-zh">

設定在 **設定 → 音訊 → 麥克風**。下拉選單會列出系統回報的所有輸入裝置，加上一個 **System Default**（TypeLate 沒指定時就用這個）。

- 選具體名稱會把錄音綁在那個裝置。
- **Refresh** 按鈕會重新列舉裝置 — 接上 USB 麥克風或 Bluetooth 耳機後按一下。
- 若選定的裝置在你開始錄之前被拔掉，TypeLate 會默默切回 System Default。
- 若 **錄音當中** 被拔掉，錄音會中斷並顯示錯誤。

</div>

> **macOS gotcha**: TypeLate prefers `System Default` whenever it can — a known cpal Arc-cycle quirk on macOS leaks a tiny amount of memory per recording when a non-default device is selected. You won't notice it in normal use, but it's why the default option is the recommended choice.
>
> **macOS 小提醒**：TypeLate 預設優先使用 `System Default` — macOS 上 cpal 的已知 Arc cycle bug 會在指定非預設裝置時，每次錄音洩漏一點點記憶體。日常使用不會感受到，但這就是為什麼預設選項是建議選項。

## Mute system audio during recording

<div class="lang-en">

In **Settings → Application → Mute on Recording** (default **on**).

When enabled, TypeLate mutes the system output while you record and restores it afterwards. This stops your speakers' output (music, video calls, notifications) from leaking into the mic and making transcription worse.

Implementation notes worth knowing:

- This is **system-wide muting** — every app's output is silenced during recording, not just the active one.
- If your system was already muted before recording, it stays muted afterwards (TypeLate doesn't unmute what it didn't mute).
- If muting fails (rare), recording continues without warning — you might just hear yourself echoed.

</div>
<div class="lang-zh">

設定在 **設定 → 應用程式 → 錄音時靜音系統聲音**（預設 **開**）。

開啟後，TypeLate 會在你錄音時把系統輸出靜音，結束後再還原。這樣可以避免喇叭的聲音（音樂、視訊會議、通知）跑進麥克風影響轉錄品質。

實作上有幾點：

- 這是 **系統層級靜音** — 錄音期間所有 App 的輸出都會被靜音，不是只有當前 App。
- 如果你錄音前系統就已經靜音，結束後它會保持靜音狀態（TypeLate 不會打開它沒關過的東西）。
- 萬一靜音失敗（很少發生），錄音會繼續但不會跳警告 — 你可能會聽到自己的聲音迴音。

</div>

## Sound feedback

<div class="docs-mockup" data-pagefind-ignore>
<div class="sound-theme-grid">
  <div class="sound-theme-card">
    <span class="sound-theme-card-name">Default</span>
    <span class="sound-theme-card-mood"><span class="lang-en">Crisp & confident</span><span class="lang-zh">清脆有力</span></span>
    <div class="sound-theme-wave">
      <span style="height: 6px"></span><span style="height: 18px"></span><span style="height: 22px"></span><span style="height: 14px"></span><span style="height: 24px"></span><span style="height: 10px"></span><span style="height: 8px"></span><span style="height: 16px"></span><span style="height: 12px"></span>
    </div>
    <span class="sound-theme-card-list">Funk · Bottle · Ping · Glass</span>
  </div>
  <div class="sound-theme-card">
    <span class="sound-theme-card-name">Gentle</span>
    <span class="sound-theme-card-mood"><span class="lang-en">Soft & subtle</span><span class="lang-zh">輕柔低調</span></span>
    <div class="sound-theme-wave">
      <span style="height: 4px"></span><span style="height: 8px"></span><span style="height: 10px"></span><span style="height: 12px"></span><span style="height: 8px"></span><span style="height: 6px"></span><span style="height: 10px"></span><span style="height: 8px"></span><span style="height: 4px"></span>
    </div>
    <span class="sound-theme-card-list">Tink · Pop · Basso · Purr</span>
  </div>
  <div class="sound-theme-card">
    <span class="sound-theme-card-name">Minimal</span>
    <span class="sound-theme-card-mood"><span class="lang-en">Just a tap</span><span class="lang-zh">極簡點觸</span></span>
    <div class="sound-theme-wave">
      <span style="height: 4px"></span><span style="height: 6px"></span><span style="height: 4px"></span><span style="height: 8px"></span><span style="height: 4px"></span><span style="height: 6px"></span><span style="height: 4px"></span><span style="height: 6px"></span><span style="height: 4px"></span>
    </div>
    <span class="sound-theme-card-list">Pop · Pop · Basso · Pop</span>
  </div>
  <div class="sound-theme-card">
    <span class="sound-theme-card-name">Retro</span>
    <span class="sound-theme-card-mood"><span class="lang-en">Old-school computer</span><span class="lang-zh">復古電腦</span></span>
    <div class="sound-theme-wave">
      <span style="height: 22px"></span><span style="height: 14px"></span><span style="height: 24px"></span><span style="height: 8px"></span><span style="height: 18px"></span><span style="height: 22px"></span><span style="height: 10px"></span><span style="height: 16px"></span><span style="height: 22px"></span>
    </div>
    <span class="sound-theme-card-list">Morse · Submarine · Sosumi · Hero</span>
  </div>
  <div class="sound-theme-card">
    <span class="sound-theme-card-name">Custom</span>
    <span class="sound-theme-card-mood"><span class="lang-en">Bring your own</span><span class="lang-zh">自帶音檔</span></span>
    <div class="sound-theme-wave">
      <span style="height: 10px; opacity: 0.4"></span><span style="height: 18px; opacity: 0.4"></span><span style="height: 6px; opacity: 0.4"></span><span style="height: 14px; opacity: 0.4"></span><span style="height: 22px; opacity: 0.4"></span><span style="height: 12px; opacity: 0.4"></span><span style="height: 8px; opacity: 0.4"></span><span style="height: 16px; opacity: 0.4"></span><span style="height: 10px; opacity: 0.4"></span>
    </div>
    <span class="sound-theme-card-list"><span class="lang-en">.wav · .mp3 · .aiff · .m4a</span><span class="lang-zh">.wav · .mp3 · .aiff · .m4a</span></span>
  </div>
</div>
<div class="docs-mockup-caption">
  <span class="lang-en">Five built-in sound themes. Each maps four slots — start, stop, error, learned — to system sounds. Custom lets you wire any audio file per slot.</span>
  <span class="lang-zh">5 種內建音效主題，每個對應 4 個插槽 — 開始、停止、錯誤、學到新詞。Custom 讓你為每個插槽指定自己的音檔。</span>
</div>
</div>

<div class="lang-en">

In **Settings → Audio → Sound Theme** you can pick one of five presets. Each maps four "slots" — start of recording, stop of recording, error, and word-learned — to a sound:

| Theme | Start | Stop | Error | Learned |
| --- | --- | --- | --- | --- |
| Default | Funk | Bottle | Ping | Glass |
| Gentle | Tink | Pop | Basso | Purr |
| Minimal | Pop | Pop | Basso | Pop |
| Retro | Morse | Submarine | Sosumi | Hero |
| Custom | (your file) | (your file) | (your file) | (your file) |

On macOS the built-in sounds map to `/System/Library/Sounds/{name}.aiff`. On Windows, start/stop are bundled WAV files played via `PlaySound`.

### Custom sounds

Pick **Custom** and you can wire up any combination of `.wav`, `.mp3`, `.aiff`, or `.m4a` files. Each slot is independent — you can replace just **Start** and leave the rest default.

The **Preview** button next to each slot plays the currently-assigned sound at TypeLate's effective volume.

</div>
<div class="lang-zh">

到 **設定 → 音訊 → 音效主題** 可以從 5 個預設挑一個。每個主題會把四個「插槽」 — 開始錄音、停止錄音、錯誤、學到新詞 — 對應到不同音效：

| 主題 | 開始 | 停止 | 錯誤 | 學到新詞 |
| --- | --- | --- | --- | --- |
| Default | Funk | Bottle | Ping | Glass |
| Gentle | Tink | Pop | Basso | Purr |
| Minimal | Pop | Pop | Basso | Pop |
| Retro | Morse | Submarine | Sosumi | Hero |
| Custom | （你的檔） | （你的檔） | （你的檔） | （你的檔） |

macOS 上內建音效對應到 `/System/Library/Sounds/{name}.aiff`，Windows 上 start/stop 是內附的 WAV 檔，透過 `PlaySound` 播放。

### 自訂音效

選 **Custom** 後，可以混搭使用任意 `.wav`、`.mp3`、`.aiff`、`.m4a`。四個插槽各自獨立 — 例如只換 **Start**，其他保留預設都可以。

每個插槽旁的 **Preview** 按鈕會用 TypeLate 目前音量播放當前指定的音效。

</div>

## Recording retention

<div class="lang-en">

The audio file behind every transcription is normally kept on disk — handy if you want to play it back or re-transcribe it. The retention policy in **Settings → Recording Storage → Audio Retention** decides how long.

| Option | Behaviour |
| --- | --- |
| **Keep Forever** | Never auto-delete. |
| **30 Days** *(default)* | Files older than 30 days are removed on next launch. |
| **14 Days** | Same as above, 14 days. |
| **7 Days** | Same as above, 7 days. |
| **Don't Keep** | Audio file deleted immediately after transcription. |

Two things to know:

- Cleanup uses the file's **modification time**, not the transcription record's creation time. Don't manually `touch` files inside the recordings folder.
- Switching to **Don't Keep** does *not* delete the SQLite history record — you'll still see the entry in History, just without playback or re-transcribe.

</div>
<div class="lang-zh">

每段轉錄的音訊檔預設都會存在硬碟，方便你播放或重新轉錄。**設定 → 錄音儲存 → 錄音保留** 決定保留多久。

| 選項 | 行為 |
| --- | --- |
| **永久保留** | 不會自動刪除。 |
| **30 天** *（預設）* | 30 天前的檔案在下次啟動時清掉。 |
| **14 天** | 同上，14 天。 |
| **7 天** | 同上，7 天。 |
| **不保留** | 轉錄完馬上刪除音訊檔。 |

兩個重點：

- 清理依據檔案的 **修改時間**，不是轉錄紀錄的建立時間。不要手動 `touch` recordings 資料夾裡的檔案。
- 切到 **不保留** **不會** 刪 SQLite 的歷史紀錄 — 你仍會在歷史中看到那一筆，只是沒辦法播放或重新轉錄。

</div>

### Storage location

<div class="lang-en">

| Platform | Path |
| --- | --- |
| macOS | `~/Library/Application Support/com.bobo.typelate/AppData/recordings/` |
| Windows | `%AppData%\com.bobo.typelate\AppData\recordings\` |

Use **Open Folder** in **Settings → Recording Storage** to jump straight there. The same panel shows total disk usage and file count.

</div>
<div class="lang-zh">

| 平台 | 路徑 |
| --- | --- |
| macOS | `~/Library/Application Support/com.bobo.typelate/AppData/recordings/` |
| Windows | `%AppData%\com.bobo.typelate\AppData\recordings\` |

到 **設定 → 錄音儲存** 點 **開啟資料夾** 可以直接跳到。同一頁也會顯示總共佔多少空間、共幾個檔案。

</div>

## History

<div class="lang-en">

The **History** view in the dashboard shows all transcriptions, newest first, grouped as **Today**, **Yesterday**, or **MMM D** by date.

Each row shows:

- A truncated transcript preview (first 60 characters).
- A small AI-enhanced indicator dot if the LLM step was applied.
- A **Failed** badge if the transcription errored out.
- The time (HH:MM), recording duration (`2s`, `1m 34s`…), and character count.

The list paginates with infinite scroll — 20 items per page.

### Search

The search box at the top filters by raw transcription **and** the enhanced result. It's a literal substring match (case-sensitive, no special operators). SQL wildcards in the search input are escaped, not interpreted.

### Export

The **Export** button copies a JSON array of every transcription to your clipboard, including: id, timestamp, ISO date, raw text, processed text, character count, recording duration, model IDs, and the `wasEnhanced` flag.

</div>
<div class="lang-zh">

儀表板裡的 **歷史紀錄** 會列出所有轉錄，最新的在最上面，依日期分為 **今天**、**昨天**、或 **MMM D** 群組。

每一列顯示：

- 截斷後的轉錄預覽（前 60 個字）。
- 跑過 LLM 強化的話有 AI 指示小圓點。
- 失敗的話有 **Failed** 標籤。
- 時間（HH:MM）、錄音長度（`2s`、`1m 34s`…）、字元數。

清單採無限滾動分頁，每頁 20 筆。

### 搜尋

頂部搜尋框會同時比對 **原始逐字稿** 與 **強化後文字**。是字面子字串比對（**區分大小寫**、不支援特殊運算子）。SQL 萬用字元會被轉義，不會被解讀。

### 匯出

點 **匯出** 按鈕會把所有轉錄以 JSON 陣列複製到剪貼簿，內容包括：id、時間戳、ISO 日期、原始文字、處理後文字、字元數、錄音長度、模型 ID、`wasEnhanced` 標記。

</div>

## Playback

<div class="lang-en">

Click the play button on any history row to hear the original audio inline. The button morphs into a stop icon during playback; click again to pause. Audio plays through the standard system output.

There are no keyboard shortcuts and no scrubbing UI — playback is meant for spot-checking, not editing.

If the file's gone (retention deleted it, or you cleared the recordings folder), you'll see *Recording file not available* under the row for 3 seconds.

</div>
<div class="lang-zh">

點任一歷史列上的播放按鈕，就能聽原始錄音。播放中按鈕變成停止圖示；再點一次暫停。聲音會走系統預設輸出。

沒有快捷鍵、沒有時間軸 — 播放是為了確認內容，不是編輯。

如果檔案不見了（保留策略刪了、或你手動清過資料夾），列下方會顯示 *Recording file not available* 約 3 秒。

</div>

## Re-transcribe

<div class="lang-en">

Open a history row and click **Re-transcribe** (only available if the audio file still exists and the original transcription succeeded). TypeLate runs the audio again using your **current global settings**:

- Selected Whisper model
- Selected LLM model
- Prompt mode and custom prompt
- Enhancement threshold setting
- Transcription language
- Top 50 dictionary terms by weight

You can't override these per-record — re-transcribing is "what would TypeLate produce today, with the same audio?".

The button is a **two-click confirm** (3-second window) to prevent accidents. After it succeeds, the row's text and metadata are overwritten — there's no version history.

</div>
<div class="lang-zh">

展開任一歷史列、點 **重新轉錄**（只有在音訊檔還在、且原本轉錄成功時才會出現）。TypeLate 會用你 **當前的全域設定** 重跑：

- 選定的 Whisper 模型
- 選定的 LLM 模型
- Prompt 模式與自訂 prompt
- 強化字元門檻
- 轉錄語言
- 字典中權重最高的前 50 個詞

這些不能逐筆覆寫 — 重新轉錄是回答「同一段音訊，今天的 TypeLate 會產出什麼？」的問題。

按鈕是 **兩次確認**（3 秒窗口）防止誤觸。成功後該列文字與後設資料會被覆蓋 — 沒有版本歷史。

</div>

## Bulk delete

<div class="lang-en">

In **Settings → Recording Storage → Delete All Recordings** there's a button that wipes every audio file in the recordings folder after a confirm dialog. **History records are preserved** — you'll still see what was said, you just can't play or re-transcribe any of them.

To delete a specific row's audio + history together, use the per-row delete in History (also two-click confirm). That removes the SQLite record, the audio file, and the related entries in the cost-tracking table.

</div>
<div class="lang-zh">

到 **設定 → 錄音儲存 → 刪除所有錄音**，按鈕會在確認對話框後清空 recordings 資料夾的所有音訊檔。**歷史紀錄會保留** — 你還是看得到內容，只是沒辦法播放或重新轉錄。

如果想連音訊加歷史一起刪掉某一筆，到歷史紀錄用該列上的刪除（一樣兩次確認）。會把 SQLite 紀錄、音訊檔、和相關的成本追蹤紀錄一起刪掉。

</div>
