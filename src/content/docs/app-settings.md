---
title: "App Settings"
titleZh: "應用程式設定"
description: "Interface language, transcription language, launch-at-login, clipboard behavior, and update checks. The behind-the-scenes plumbing options."
descriptionZh: "介面語言、轉錄語言、開機自動啟動、剪貼簿行為、更新檢查。控制應用程式整體行為的後台設定。"
order: 80
---

<div class="lang-en">

These are the small switches that define how TypeLate behaves between recordings — the language you read, the language you speak, whether it auto-starts, and where transcription results end up.

</div>
<div class="lang-zh">

這些是定義 TypeLate 在錄音之外行為的小開關 — 你讀的語言、你說的語言、是否開機自動啟動、轉錄結果放哪。

</div>

## Interface language

<div class="lang-en">

**Settings → Application → Interface Language.**

Five options:

- **English**
- **繁體中文** (Traditional Chinese)
- **简体中文** (Simplified Chinese)
- **日本語** (Japanese)
- **한국어** (Korean)

On first launch TypeLate auto-detects your system locale (`navigator.languages`, matching by specificity) and picks one of these. The preference is then persisted, so changing your OS language later won't override your choice in TypeLate.

This setting only affects TypeLate's own UI — it does **not** affect what language Whisper transcribes. That's the next setting.

</div>
<div class="lang-zh">

**設定 → 應用程式 → 介面語言。**

5 個選項：

- **English**
- **繁體中文**
- **简体中文**
- **日本語**
- **한국어**

第一次開啟時，TypeLate 會偵測系統語系（讀 `navigator.languages` 並依精確度比對）自動選一個。之後就會記住偏好，後來改 OS 語言也不會覆寫你在 TypeLate 內的選擇。

這個設定只影響 TypeLate 自己的介面 — **不會** 影響 Whisper 轉錄哪種語言。下個設定才是。

</div>

## Transcription language

<div class="lang-en">

**Settings → Application → Transcription Language.**

| Option | Behaviour |
| --- | --- |
| **Auto Detect** *(default)* | Whisper detects the spoken language each recording. Best for multilingual workflows. |
| **English** | Forces Whisper to transcribe as `en`. |
| **繁體中文 / 简体中文** | Forces Whisper to `zh` (no separate ID for traditional vs simplified at the model level). |
| **日本語** | Forces Whisper to `ja`. |
| **한국어** | Forces Whisper to `ko`. |

When to override **Auto Detect**: if you frequently mix languages and Whisper sometimes guesses wrong (rare, but possible with very short utterances), pinning the language stops the surprise.

This setting is independent from Interface Language — you can read TypeLate in English while transcribing Mandarin, or vice versa.

</div>
<div class="lang-zh">

**設定 → 應用程式 → 轉錄語言。**

| 選項 | 行為 |
| --- | --- |
| **自動偵測** *（預設）* | 每次錄音 Whisper 自己判斷語言。多語混用最方便。 |
| **English** | 強制 Whisper 用 `en`。 |
| **繁體中文 / 简体中文** | 強制 Whisper 用 `zh`（模型層級不分繁簡）。 |
| **日本語** | 強制 Whisper 用 `ja`。 |
| **한국어** | 強制 Whisper 用 `ko`。 |

什麼時候覆寫 **自動偵測**：經常混用語言、且 Whisper 偶爾猜錯時（很少發生，但極短句可能會），鎖定語言可以避免驚喜。

這個設定跟介面語言完全獨立 — 你可以介面用英文、轉錄用中文，反之亦然。

</div>

## Launch at login

<div class="lang-en">

**Settings → Application → Launch at Login** (toggle, default **off**).

Implementation:

- **macOS**: creates `~/Library/LaunchAgents/com.typelate.app.plist` via `tauri-plugin-autostart`. Toggling off removes the file.
- **Windows**: writes a Run-key entry under `HKCU\Software\Microsoft\Windows\CurrentVersion\Run`. Toggling off deletes the entry.

If you uninstall TypeLate and the toggle was on, **manually delete** `com.typelate.app.plist` (macOS) — the plist isn't auto-removed by the bundle uninstall. On Windows, the registry entry is removed when the app is uninstalled cleanly.

You'll also see TypeLate listed in **System Settings → General → Login Items** on macOS, where you can disable it from outside the app.

</div>
<div class="lang-zh">

**設定 → 應用程式 → 開機自動啟動**（開關，預設 **關**）。

實作：

- **macOS**：透過 `tauri-plugin-autostart` 建立 `~/Library/LaunchAgents/com.typelate.app.plist`。關掉開關就移除檔案。
- **Windows**：在 `HKCU\Software\Microsoft\Windows\CurrentVersion\Run` 寫入登錄機碼。關掉開關就刪掉。

如果你開著開關直接砍 App，記得在 macOS 上 **手動刪除** `com.typelate.app.plist` — 這個 plist 不會跟 App bundle 一起被解除安裝。Windows 用正常的解除安裝流程會自動清登錄機碼。

macOS 的 **系統設定 → 一般 → 登入項目** 也會看到 TypeLate，可以從那邊關。

</div>

## Copy result to clipboard

<div class="lang-en">

**Settings → Application → Copy Result to Clipboard** (toggle).

By default TypeLate **pastes** the transcription at your cursor position (using the Accessibility API on macOS / equivalent on Windows). With this toggle on, it *also* writes the result to the system clipboard — meaning <kbd>⌘V</kbd> / <kbd>Ctrl+V</kbd> will paste it again later.

Useful when:

- The active app blocks programmatic paste and you want a manual fallback.
- You want to forward the transcription to another window before it gets typed over.
- You're using TypeLate in a workflow that includes a clipboard manager.

This is **separate** from auto-paste — there's no toggle to disable auto-paste itself. If you want clipboard-only with no paste, file a wishlist request at [/wishlist](/wishlist).

</div>
<div class="lang-zh">

**設定 → 應用程式 → 結果複製到剪貼簿**（開關）。

TypeLate 預設會把轉錄文字 **貼上** 到游標位置（macOS 用輔助使用 API，Windows 用對應 API）。開啟這個開關後，它 **同時** 把結果寫到系統剪貼簿 — 也就是稍後按 <kbd>⌘V</kbd> / <kbd>Ctrl+V</kbd> 還能再貼一次。

適合場景：

- 當前 App 擋程式化貼字，需要手動備援。
- 想在文字被其他輸入覆蓋之前先送到別的視窗。
- 工作流程中有用到剪貼簿管理工具。

這個設定跟自動貼上 **獨立** — 目前沒辦法關閉自動貼上本身。需要「只放到剪貼簿、不要貼上」的功能，請到 [/wishlist](/wishlist) 提案。

</div>

## Result display duration

<div class="lang-en">

**Settings → Application → Result Display Duration.**

How long the green-checkmark success state stays visible on the HUD before transitioning to the action bar (or collapsing if there's nothing to act on).

| Value | Use it when |
| --- | --- |
| 1 sec | You barely look at the HUD; you trust the result is correct. |
| 1.5 sec | A bit more time to scan, still snappy. |
| 2 sec | A balanced default for most. |
| **3 sec** *(default)* | Comfortable read-and-react. |
| 5 sec | Long enough to copy the original or trigger Re-enhance. |

If your enhancement mode is `None`, the HUD just collapses after this duration — there's no action bar to follow up.

</div>
<div class="lang-zh">

**設定 → 應用程式 → 結果顯示時長。**

HUD 上「綠色打勾」成功狀態顯示多久之後才轉到 action bar（沒得做的話直接收起）。

| 數值 | 適合 |
| --- | --- |
| 1 秒 | 你幾乎不看 HUD、相信結果一定對。 |
| 1.5 秒 | 多一點時間掃過，還是夠快。 |
| 2 秒 | 多數人折衷。 |
| **3 秒** *（預設）* | 舒服地讀完再反應。 |
| 5 秒 | 夠長到讓你決定要 Copy Original 或 Re-enhance。 |

強化模式設成 `None` 的話，這段時間結束 HUD 直接收起 — 沒有 action bar 可後續操作。

</div>

## About

<div class="lang-en">

**Settings → About** shows:

- The current version (clicking the version 7 times reveals an easter egg with rotating slogans).
- A **Check for Update** button — manual only; TypeLate does not auto-check on boot. Updates are pulled from the GitHub Releases feed via Tauri's updater plugin.
- Links: GitHub source, GitHub issues, MIT licence.
- Author: Bobo Chen.

When an update is available, the button transitions through *checking → downloading → ready*, and a final **Install Now** action downloads and relaunches.

</div>
<div class="lang-zh">

**設定 → 關於** 顯示：

- 當前版本（連續點版本號 7 次有彩蛋，會跑馬燈式顯示一系列標語）。
- **檢查更新** 按鈕 — 純手動；TypeLate 不會開機自動檢查。透過 Tauri updater 插件從 GitHub Releases 抓更新。
- 連結：GitHub 原始碼、GitHub issues、MIT 授權。
- 作者：Bobo Chen。

有更新時，按鈕會經過 *checking → downloading → ready* 三個階段，最後出現 **立即安裝** 動作，會下載並重啟。

</div>
