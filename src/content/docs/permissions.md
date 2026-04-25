---
title: "Permissions"
titleZh: "系統權限"
description: "Microphone and Accessibility on macOS, microphone on Windows. What TypeLate asks for, why, and how to recover when something gets stuck."
descriptionZh: "macOS 需要麥克風與輔助使用權限，Windows 只需要麥克風。詳述 TypeLate 為何需要這些權限，以及卡住時怎麼救回來。"
order: 15
---

<div class="lang-en">

TypeLate runs entirely on your machine, so platform permissions are the gate to making it work. The good news: there are at most two switches to flip on macOS, and one on Windows.

</div>
<div class="lang-zh">

TypeLate 完全在你的電腦上執行，所以系統權限是讓它運作的關鍵。好消息：macOS 上最多兩個開關、Windows 上一個就夠了。

</div>

## What permissions are needed?

<div class="lang-en">

| Platform | Microphone | Accessibility | Notifications |
| --- | :---: | :---: | :---: |
| macOS | ✓ Required | ✓ Required | — |
| Windows | ✓ Required | — | — |

TypeLate does **not** request the macOS Notifications permission — feedback is delivered exclusively through the in-app HUD overlay, not OS-level alerts.

</div>
<div class="lang-zh">

| 平台 | 麥克風 | 輔助使用 | 通知 |
| --- | :---: | :---: | :---: |
| macOS | ✓ 必要 | ✓ 必要 | — |
| Windows | ✓ 必要 | — | — |

TypeLate **不會** 請求 macOS 通知權限 — 所有回饋都透過 App 內建的 HUD 浮層呈現，不送系統通知。

</div>

## Microphone

<div class="lang-en">

Why: to record what you say.

When asked: the first time you press the hotkey to record. macOS shows the standard system dialog. Windows shows it the first time you record (if Windows 10/11 microphone privacy is enabled).

If you accidentally clicked **Don't Allow**:

1. Open **System Settings → Privacy & Security → Microphone** (macOS) or **Settings → Privacy → Microphone** (Windows).
2. Toggle TypeLate on.
3. Back in TypeLate's **Settings → Permissions** page, click **Re-check** — the status updates within ~2 seconds (the panel auto-polls).

You can also click **Open Settings** on the permissions page; macOS deep-links you straight to the Microphone pane.

</div>
<div class="lang-zh">

用途：收音用。

何時詢問：你第一次按熱鍵開始錄音時，macOS 會跳出系統對話框。Windows 也是在第一次錄音時觸發（如果系統有開麥克風隱私設定）。

如果不小心按了 **不允許**：

1. 開啟 **系統設定 → 隱私權與安全性 → 麥克風**（macOS）或 **設定 → 隱私權 → 麥克風**（Windows）。
2. 把 TypeLate 打開。
3. 回到 TypeLate 的 **設定 → 系統權限** 頁面，點 **重新檢查** — 大約 2 秒後狀態會更新（畫面會自動輪詢）。

也可以直接點權限頁面上的 **開啟設定**，macOS 會把你帶到麥克風頁籤。

</div>

## Accessibility (macOS only)

<div class="lang-en">

Why: TypeLate needs **Accessibility** for two things — capturing the **global hotkey** anywhere on your system, and **pasting the transcribed text** at your cursor in any app. Without it, the hotkey will never fire and the result has nowhere to go.

When asked: during the onboarding wizard, and again from **Settings → Permissions** if you skipped it.

How to grant:

1. Click **Open Settings** on the permissions row — TypeLate deep-links to **Privacy & Security → Accessibility**.
2. Find TypeLate in the list and toggle it on. (You may need to authenticate with your password or Touch ID.)
3. Switch back to TypeLate. The hotkey listener auto-reinitialises within ~2 seconds.

</div>
<div class="lang-zh">

用途：TypeLate 需要 **輔助使用** 權限做兩件事 — 在系統任何地方捕捉 **全域熱鍵**，以及把轉錄結果 **貼到游標所在 App**。沒有這個權限，熱鍵不會反應、結果也沒地方去。

何時詢問：onboarding 引導流程中會請求，跳過的話可以從 **設定 → 系統權限** 再次觸發。

授予步驟：

1. 在權限列點 **開啟設定** — TypeLate 會直接帶你到 **隱私權與安全性 → 輔助使用**。
2. 在清單中找到 TypeLate 並打開（可能需要輸入密碼或用 Touch ID 驗證）。
3. 切回 TypeLate，熱鍵監聽會在約 2 秒內自動重新啟動。

</div>

> **The #1 cause of "hotkey doesn't work after update":** macOS caches Accessibility against the app's code signature. After a TypeLate update, the existing entry **looks** checked but actually doesn't grant access.
>
> **更新後熱鍵失效的頭號原因**：macOS 把輔助使用權限快取在 App 簽章上。TypeLate 更新後，舊的權限項目 **看起來** 還打勾，實際上已失效。

### Recovery flow after an upgrade

<div class="lang-en">

1. Open **System Settings → Privacy & Security → Accessibility**.
2. Find TypeLate, click the `−` (minus) button to **remove** the stale entry.
3. Quit and relaunch TypeLate.
4. When prompted, grant Accessibility again. (If not prompted, click **Open Settings** in the Permissions panel.)
5. Test your hotkey — it should fire immediately.

</div>
<div class="lang-zh">

1. 開啟 **系統設定 → 隱私權與安全性 → 輔助使用**。
2. 找到 TypeLate，點 `−`（減號）按鈕 **移除** 舊項目。
3. 退出並重新開啟 TypeLate。
4. 收到請求時重新授予。（沒收到請求的話，到權限頁面點 **開啟設定**。）
5. 測試熱鍵 — 應該立即生效。

</div>

## The Permissions panel

<div class="lang-en">

In **Settings → Permissions** you'll see one row per permission with three pieces of info:

- A **status pill** (Granted / Denied / Not Determined / Restricted / Unknown).
- An **action button** — either **Open Settings**, **Grant**, or **Configure** depending on state.
- A **Re-check** icon (refresh) — manually re-poll without leaving the panel.

The panel auto-polls every 2 seconds while open, so flipping the switch in System Settings shows up here without you having to click anything.

</div>
<div class="lang-zh">

到 **設定 → 系統權限** 你會看到每個權限一列，每列三個資訊：

- **狀態膠囊**（已授予 / 拒絕 / 尚未決定 / 受限 / 未知）。
- **動作按鈕** — 視狀態顯示 **開啟設定**、**授予** 或 **設定**。
- **重新檢查** 圖示（重新整理）— 不離開頁面也可以手動重新查詢。

頁面開著時會每 2 秒自動輪詢一次，在系統設定裡切換開關後不用回 App 點任何東西就會更新。

</div>

<div class="docs-mockup" data-pagefind-ignore>
<div class="permission-rows">
  <div class="permission-row">
    <span class="permission-row-icon" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
    </span>
    <div class="permission-row-info">
      <div class="permission-row-name"><span class="lang-en">Microphone</span><span class="lang-zh">麥克風</span></div>
      <div class="permission-row-desc"><span class="lang-en">Required to capture your voice.</span><span class="lang-zh">收音必要權限。</span></div>
    </div>
    <span class="permission-pill is-granted">● <span class="lang-en">Granted</span><span class="lang-zh">已授予</span></span>
  </div>
  <div class="permission-row">
    <span class="permission-row-icon" style="background: rgba(167, 139, 250, 0.15); color: #a78bfa">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><path d="M5 11h14"/><path d="M9 22l2-9 2 9"/></svg>
    </span>
    <div class="permission-row-info">
      <div class="permission-row-name"><span class="lang-en">Accessibility</span><span class="lang-zh">輔助使用</span></div>
      <div class="permission-row-desc"><span class="lang-en">For global hotkey + paste at cursor.</span><span class="lang-zh">全域熱鍵與游標貼字。</span></div>
    </div>
    <span class="permission-pill is-denied">● <span class="lang-en">Denied</span><span class="lang-zh">拒絕</span></span>
    <span class="permission-row-action"><span class="lang-en">Open Settings</span><span class="lang-zh">開啟設定</span></span>
  </div>
  <div class="permission-row">
    <span class="permission-row-icon" style="background: rgba(74, 222, 128, 0.15); color: #4ade80">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    </span>
    <div class="permission-row-info">
      <div class="permission-row-name"><span class="lang-en">Hotkey listener</span><span class="lang-zh">熱鍵監聽</span></div>
      <div class="permission-row-desc"><span class="lang-en">Listening on Fn (default)</span><span class="lang-zh">監聽 Fn（預設）</span></div>
    </div>
    <span class="permission-pill is-granted">● <span class="lang-en">Active</span><span class="lang-zh">運作中</span></span>
  </div>
</div>
<div class="docs-mockup-caption">
  <span class="lang-en">Settings → Permissions panel. The status pill auto-updates within ~2 seconds after you flip the switch in System Settings.</span>
  <span class="lang-zh">設定 → 系統權限 面板。在系統設定切換後，狀態膠囊約 2 秒內自動更新。</span>
</div>
</div>

## Windows specifics

<div class="lang-en">

On Windows, only microphone permission is enforced; Accessibility-style global key capture works without OS-level grants. If recording fails silently, check **Settings → Privacy → Microphone → Let apps access your microphone** is **On**, and that TypeLate is allowed in the per-app list.

</div>
<div class="lang-zh">

Windows 只強制要求麥克風權限，全域熱鍵不需要系統層級授權。如果錄音沒反應卻沒錯誤訊息，到 **設定 → 隱私權 → 麥克風 → 允許應用程式存取麥克風** 確認已開啟，並在下方列表中允許 TypeLate。

</div>

## Privacy reminder

<div class="lang-en">

These permissions only let TypeLate read what your microphone hears and paste text where your cursor is. Audio is sent **directly** from your device to your chosen API provider — never to TypeLate-owned servers. See [Privacy & Reliability](/docs/privacy-and-reliability) for the full data-flow walkthrough.

</div>
<div class="lang-zh">

這些權限只允許 TypeLate 讀取麥克風與貼上文字到游標位置。語音會 **直接** 從你的裝置傳到你選的 API 供應商 — 不會經過任何 TypeLate 伺服器。完整資料流請見 [隱私與可靠性](/docs/privacy-and-reliability)。

</div>
