---
title: "Notch HUD Overlay"
titleZh: "Notch 浮層 HUD"
description: "The black floating overlay that shows recording state, transcription progress, and post-paste actions. A field guide to every state you'll see."
descriptionZh: "顯示錄音狀態、轉錄進度與貼上後動作的黑色浮層。逐一介紹每個你可能看到的狀態。"
order: 25
---

<div class="lang-en">

The HUD is a small, always-on-top, notch-style overlay near the top of your screen. It's TypeLate's only visual feedback channel — there are no system notifications. Knowing what each state means lets you trust the workflow without staring at it.

</div>
<div class="lang-zh">

HUD 是螢幕頂部一個小型、置頂、notch 風格的浮層。它是 TypeLate 唯一的視覺回饋管道 — 不會送系統通知。認得每個狀態的意思後，你就不需要盯著它，也能信任流程已完成。

</div>

## Where does it appear?

<div class="lang-en">

- Top-centre of the active monitor (the one with the menu bar / cursor).
- Default size **350 × 42 px**, expanding to **350 × 72 px** for richer states (error, learned).
- It collapses to **200 × 32 px** in transitional moments.
- Position auto-updates every 250 ms — drag your cursor to a different monitor and the HUD follows.

</div>
<div class="lang-zh">

- 浮在當前螢幕的上方中央（即有選單列／游標的那一個）。
- 預設尺寸 **350 × 42 像素**，需要顯示更多資訊時擴成 **350 × 72 像素**（錯誤、學習）。
- 過渡片刻會縮小成 **200 × 32 像素**。
- 位置每 250 毫秒重算一次 — 把游標拖到別的螢幕，HUD 會跟過去。

</div>

> **Customisation:** position, size, and theme are all hard-coded in v1 — there's no drag-to-move, no resize, no light theme yet.
>
> **客製化**：v1 的位置、尺寸、配色都是寫死的 — 不能拖曳、不能調大小、目前也沒有亮色主題。

## States

### Recording

<div class="lang-en">

You'll see this from the moment your hotkey fires until you release / press again to stop.

- 6 white **waveform bars** animate in real time with what the mic hears.
- The icon of your **active app** appears inline so you know where the result will be pasted.
- A small timer in the top-right shows how long you've been recording.
- If TypeLate detects no speech for the first ~3 seconds, the timer is replaced with a hint reading **"Recording…"** at small size — that means *the mic is listening but it doesn't hear anything*. Check it's not muted.

</div>
<div class="lang-zh">

從你按下熱鍵到放開（或再按一次）為止會顯示這個狀態。

- 6 條白色 **波形** 即時跟著麥克風跳動。
- 旁邊會顯示 **目前使用中 App 的圖示**，讓你確認結果會貼到哪。
- 右上角有計時器顯示已錄了多久。
- 如果開頭約 3 秒都沒偵測到語音，計時器會換成小字 **「錄音中…」**（"Recording…"）提示 — 意思是麥克風有開但聽不到聲音，先確認是不是被靜音了。

</div>

### Transcribing

<div class="lang-en">

After you stop recording, the waveform morphs into circles for a 300 ms transition, then becomes **6 pulsing white dots**. This means TypeLate is sending audio to your transcription provider and (optionally) calling the LLM for enhancement. Typically lasts <3 seconds with Groq.

</div>
<div class="lang-zh">

停止錄音後，波形會花 300 毫秒變成圓圈，再轉成 **6 個白色脈動圓點**。代表 TypeLate 正在把語音送往轉錄供應商，並（視設定）呼叫 LLM 強化。用 Groq 通常 3 秒內完成。

</div>

### Success

<div class="lang-en">

A green **✓ checkmark** appears, with a 2-line preview of the result (the same text that just got pasted). Default duration **3 seconds**, configurable from 1 – 5 in **Settings → Application**.

If your enhancement mode is `None` (raw transcription only), the HUD collapses after the success display — there's nothing further to do. If enhancement happened, the HUD transitions into the **action bar** state instead (see below).

</div>
<div class="lang-zh">

會出現綠色 **✓ 打勾**，下方顯示結果 2 行的預覽（就是剛剛貼上的內容）。預設停留 **3 秒**，可以在 **設定 → 應用程式** 設成 1–5 秒。

如果強化模式是 `None`（純逐字稿），成功畫面結束後 HUD 直接收起 — 沒有後續動作。如果有跑強化，會進入 **action bar** 狀態（見下方）。

</div>

### Action bar

<div class="lang-en">

Appears only after an *enhanced* transcription. Two buttons:

- **Copy Original** — copies the raw Whisper transcription to clipboard, in case you preferred your own phrasing.
- **Re-enhance with AI** — runs the LLM step again with a different prompt mode. A submenu lets you pick between Clean / Format / Custom without going to settings.

The action bar stays open until you click outside or press <kbd>Esc</kbd>.

</div>
<div class="lang-zh">

只有在 **跑過強化** 的轉錄後才出現。兩個按鈕：

- **Copy Original** — 把 Whisper 原始逐字稿複製到剪貼簿，適合你比較喜歡自己原本講法的場景。
- **Re-enhance with AI** — 再用不同 prompt 模式跑一次 LLM。子選單可以直接切 Clean / Format / Custom，不用去設定頁。

點擊浮層外面或按 <kbd>Esc</kbd> 即收起。

</div>

### Error

<div class="lang-en">

A red/orange icon and a one-line error message. Common error reasons:

- **No speech detected** — the hallucination filter rejected the result (silent recording or training-data artefacts). See [Privacy & Reliability](/docs/privacy-and-reliability#hallucination-filter).
- **Paste failed** — Accessibility permission missing, or the active app blocked text injection. See [Permissions](/docs/permissions).
- **Service temporarily unavailable** — the circuit breaker is open after repeated provider failures. See [Privacy & Reliability](/docs/privacy-and-reliability#circuit-breaker).

A retry button (↻) is available where it makes sense. Press <kbd>Esc</kbd> to dismiss.

</div>
<div class="lang-zh">

紅色或橘色圖示加一行錯誤說明。常見錯誤原因：

- **No speech detected**（沒偵測到語音）— 幻覺過濾器擋下來了（純靜音或訓練資料雜訊）。詳見 [隱私與可靠性](/docs/privacy-and-reliability#hallucination-filter)。
- **Paste failed**（貼上失敗）— 缺少輔助使用權限，或目前 App 拒絕程式化貼字。見 [系統權限](/docs/permissions)。
- **Service temporarily unavailable**（服務暫不可用）— 連續失敗導致斷路器跳開。見 [隱私與可靠性](/docs/privacy-and-reliability#circuit-breaker)。

合理的情境下會出現重試按鈕（↻）。按 <kbd>Esc</kbd> 可關閉。

</div>

### Cancelled

<div class="lang-en">

A grey **×** icon with the label *Cancelled*. You'll see this if you press the hotkey to start a recording but stop before TypeLate has captured any usable audio (e.g. a stray double-tap). It collapses on its own in about 400 ms.

</div>
<div class="lang-zh">

灰色 **×** 加 *Cancelled* 標籤。當你按下熱鍵開始錄音、卻在 TypeLate 還沒收到可用音訊前就結束（例如不小心連按兩次），會顯示這個狀態。約 400 毫秒後自己收起。

</div>

### Learned

<div class="lang-en">

A blue book icon with text like *Nice! New word learned: "TypeLate"*. This appears when the smart dictionary's auto-learning detected a correction pattern and added a term. Stays for 2 seconds, then collapses. See [Vocabulary & Sync](/docs/vocabulary-and-sync) for details.

</div>
<div class="lang-zh">

藍色書本圖示，文字如 *Nice! New word learned: "TypeLate"*。當智慧字典的自動學習偵測到修正模式並把新詞加入時會出現。停留 2 秒後收起。詳見 [字典與同步](/docs/vocabulary-and-sync)。

</div>

### Correction prompt

<div class="lang-en">

Also blue book icon, with text *Correction detected — Copy the correct term (⌘C) to add*. Triggered when the active app's text changes shortly after a paste, and TypeLate has identified the diff as a likely mistranscription you fixed by hand. To add the corrected term to your dictionary, **select it in the active app and run your normal copy** (<kbd>⌘C</kbd> / <kbd>Ctrl+C</kbd>) — TypeLate watches the clipboard, it isn't intercepting your keystroke. Auto-dismisses after **15 seconds**.

</div>
<div class="lang-zh">

同樣是藍色書本，文字寫 *Correction detected — Copy the correct term (⌘C) to add*。當貼上不久後活動 App 的文字變化、且 TypeLate 判斷你手動修了某個轉錄錯字時觸發。要把修正詞加進字典，**在當前 App 選取那段文字並用平常的方式複製**（<kbd>⌘C</kbd> / <kbd>Ctrl+C</kbd>）— TypeLate 是在監看剪貼簿內容變化，**不是** 攔截你的按鍵。**15 秒** 後自動消失。

</div>

## Quick state reference

<div class="lang-en">

| Visual | State | Means |
| --- | --- | --- |
| Waveform + app icon + timer | Recording | Listening to mic |
| Pulsing dots | Transcribing | Calling provider APIs |
| Green ✓ + text | Success | Pasted, ready |
| ✓ → buttons | Action bar | Post-enhancement options |
| Red icon | Error | Read the message |
| Grey × | Cancelled | Hotkey released too soon |
| Blue book | Learned / Correction | Dictionary update |

</div>
<div class="lang-zh">

| 視覺 | 狀態 | 意義 |
| --- | --- | --- |
| 波形 + App 圖示 + 計時器 | Recording 錄音中 | 正在監聽麥克風 |
| 脈動圓點 | Transcribing 轉錄中 | 正在呼叫供應商 API |
| 綠色 ✓ + 文字 | Success 成功 | 已貼上、完成 |
| ✓ → 按鈕 | Action bar | 強化後可用的後續動作 |
| 紅色圖示 | Error 錯誤 | 看訊息處理 |
| 灰色 × | Cancelled 取消 | 熱鍵放開太早 |
| 藍色書本 | Learned / Correction 學到 / 修正 | 字典更新 |

</div>
