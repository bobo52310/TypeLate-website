---
title: "Keyboard Shortcuts"
titleZh: "鍵盤快捷鍵"
description: "Every key TypeLate listens to — recording trigger, HUD controls, dashboard navigation, and what's not bound."
descriptionZh: "TypeLate 監聽的每一個按鍵 — 錄音觸發、HUD 操作、儀表板導覽，以及目前沒綁的鍵。"
order: 130
---

<div class="lang-en">

A single reference card. macOS modifier glyphs (⌘ ⌥ ⌃ ⇧) on macOS, plain words (Ctrl, Alt, Shift) on Windows.

</div>
<div class="lang-zh">

單一頁面參考。macOS 用修飾鍵符號（⌘ ⌥ ⌃ ⇧），Windows 用文字（Ctrl、Alt、Shift）。

</div>

## Recording

| Key | Action | Notes |
| --- | --- | --- |
| **Hotkey** (configurable) | Start / stop recording | Default <kbd>Fn</kbd> on macOS, <kbd>Right Alt</kbd> on Windows. Behaviour depends on [trigger mode](/docs/hotkeys-and-triggers#trigger-modes). |
| <kbd>Esc</kbd> | Abort recording / dismiss HUD | Cancels in-flight recording, transcription, or enhancement. No output produced. Also dismisses success or error states. |

## HUD action bar (after enhancement)

| Action | How |
| --- | --- |
| Copy original (raw Whisper text) | **Click** the button — no keyboard shortcut. |
| Re-enhance with another mode | **Click** the button → submenu — no keyboard shortcut. |

> The HUD's correction-prompt state shows *Copy the correct term (⌘C) to add*. That's a hint to do your normal copy in the active app — TypeLate watches the system clipboard for changes, it does **not** intercept the <kbd>⌘C</kbd> keystroke.
>
> HUD 的「修正提示」狀態會顯示 *Copy the correct term (⌘C) to add*。這是提醒你在當前 App 用平常方式複製 — TypeLate 是監聽剪貼簿內容變化，**不會** 攔截 <kbd>⌘C</kbd> 按鍵。

## Dashboard window

| Key | Action |
| --- | --- |
| <kbd>⌘1</kbd> / <kbd>Ctrl+1</kbd> | Jump to Dashboard tab |
| <kbd>⌘2</kbd> / <kbd>Ctrl+2</kbd> | Jump to History tab |
| <kbd>⌘3</kbd> / <kbd>Ctrl+3</kbd> | Jump to Dictionary tab |
| <kbd>⌘4</kbd> / <kbd>Ctrl+4</kbd> | Jump to AI Settings |
| <kbd>⌘5</kbd> / <kbd>Ctrl+5</kbd> | Jump to General Settings |
| <kbd>⌘,</kbd> / <kbd>Ctrl+,</kbd> | Jump to General Settings (alias) |
| <kbd>⌘B</kbd> / <kbd>Ctrl+B</kbd> | Toggle sidebar collapse / expand |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Cycle focus through sidebar items (when sidebar has focus) |
| <kbd>Esc</kbd> | Close the Accessibility Guide modal |

## Settings — hotkey recorder

<div class="lang-en">

When you click **Custom key** in Hotkey settings, TypeLate enters a 10-second recording mode that captures the next keydown:

| Key | Behaviour |
| --- | --- |
| <kbd>Esc</kbd> | **Reserved** — rejected with an error (Esc is the abort key). |
| Common conflict keys (e.g. <kbd>⌘+Q</kbd>) | Captured with a warning. |
| Any other single key | Captured as your custom hotkey. |

</div>
<div class="lang-zh">

在熱鍵設定點 **自訂按鍵** 後，TypeLate 進入 10 秒錄製模式，捕捉下一次 keydown：

| 按鍵 | 行為 |
| --- | --- |
| <kbd>Esc</kbd> | **保留鍵** — 會被擋下並提示錯誤（Esc 是中止鍵）。 |
| 常見衝突鍵（例如 <kbd>⌘+Q</kbd>） | 捕捉但顯示警告。 |
| 其他單一按鍵 | 捕捉為你的自訂熱鍵。 |

</div>

## Application window controls

These come from the OS, not TypeLate, but listed here for completeness:

| Key | Action |
| --- | --- |
| <kbd>⌘Q</kbd> | Quit TypeLate (macOS) |
| <kbd>⌘W</kbd> | Close window (macOS) |
| <kbd>Alt+F4</kbd> | Close window (Windows) |

## Not bound (yet)

<div class="lang-en">

The following common shortcuts are **not** wired up. If any of these would be useful, vote on or request them at [/wishlist](/wishlist).

- <kbd>⌘F</kbd> / <kbd>Ctrl+F</kbd> to focus the History search box.
- <kbd>/</kbd> to focus search globally.
- Arrow keys to navigate History list rows.
- Keyboard shortcuts for the post-enhancement action bar buttons.
- Keyboard shortcut to toggle Enhancement Mode quickly.
- Cancel-onlyrecording without paste (different from <kbd>Esc</kbd>).

</div>
<div class="lang-zh">

以下常見快捷鍵目前 **沒有** 綁定。覺得哪個有用的話，到 [/wishlist](/wishlist) 投票或提案。

- <kbd>⌘F</kbd> / <kbd>Ctrl+F</kbd> 將焦點移到歷史紀錄搜尋框。
- <kbd>/</kbd> 全域搜尋焦點。
- 方向鍵在歷史紀錄列表中導覽。
- 強化後的 action bar 按鈕快捷鍵。
- 快速切換強化模式的快捷鍵。
- 取消錄音但不貼上的快捷鍵（與 <kbd>Esc</kbd> 行為不同）。

</div>

## See also

- [Hotkeys & Trigger Modes](/docs/hotkeys-and-triggers) — picking the right recording trigger
- [Notch HUD Overlay](/docs/notch-hud) — what the HUD shows during each state
