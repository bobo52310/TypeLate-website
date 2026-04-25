---
title: "Troubleshooting"
titleZh: "疑難排解"
description: "The five most common ways TypeLate breaks, what's actually wrong, and how to fix each one in under a minute."
descriptionZh: "TypeLate 最常出問題的 5 個情境，真正的原因，以及 1 分鐘內可以處理掉的修復步驟。"
order: 100
---

<div class="lang-en">

If something feels broken, scan this page first. Each section follows the same shape: **symptom → likely cause → fix**.

</div>
<div class="lang-zh">

覺得有什麼壞掉時，先掃過這頁。每節都是同一格式：**症狀 → 可能原因 → 修法**。

</div>

## Hotkey doesn't fire after a macOS or TypeLate update

<div class="lang-en">

**Symptom**: TypeLate worked before the update. Now you press the hotkey and absolutely nothing happens — no HUD, no sound, no recording.

**Cause**: macOS caches the **Accessibility** permission against the app's code signature. After a TypeLate update, the existing entry in System Settings still **looks** checked but doesn't actually grant access. This is the #1 support issue and is documented in the README.

**Fix** (60 seconds):

1. **System Settings → Privacy & Security → Accessibility.**
2. Find TypeLate in the list, click the `−` (minus) button to remove it.
3. Quit TypeLate completely (⌘Q, not just close the window).
4. Relaunch. When prompted, grant Accessibility again.
5. Test the hotkey — it should fire immediately.

If you weren't prompted in step 4, open **Settings → Permissions** in TypeLate and click **Open Settings** beside the Accessibility row.

</div>
<div class="lang-zh">

**症狀**：更新前 TypeLate 還能用，更新後按熱鍵完全沒反應 — 沒 HUD、沒音效、沒錄音。

**原因**：macOS 把 **輔助使用** 權限快取在 App 簽章上。TypeLate 更新後，系統設定裡的舊項目 **看起來** 還打勾，實際上權限失效。這是支援問題榜首，README 也有記載。

**修法**（60 秒）：

1. **系統設定 → 隱私權與安全性 → 輔助使用。**
2. 找到 TypeLate，點 `−`（減號）移除它。
3. 完全退出 TypeLate（⌘Q，不是關視窗）。
4. 重新開啟。收到請求時重新授予輔助使用。
5. 測試熱鍵 — 應該立即生效。

第 4 步沒收到請求的話，到 TypeLate 的 **設定 → 系統權限**，點輔助使用列旁邊的 **開啟設定**。

</div>

## "No speech detected" / recording too short

<div class="lang-en">

**Symptom**: HUD goes through Recording → Transcribing → Error, message reads *No speech detected* or *Recording too short*.

**Likely causes**:

1. The wrong microphone is selected (system default changed to a Bluetooth headset that's now off, or HDMI input).
2. You unplugged the device after selecting it manually.
3. You actually didn't speak — the hallucination filter rejected silence (working as designed).
4. Microphone permission was revoked.

**Fix**:

1. Open **Settings → Audio → Microphone** and click **Refresh** to re-enumerate devices.
2. Pick **System Default** (or your actual mic by name).
3. Test in System Preferences/Settings → Sound → Input — the input level should bounce when you talk. If it doesn't move, the OS itself isn't seeing your mic.
4. If permission was revoked, see [Permissions](/docs/permissions#microphone).
5. Try again. If you genuinely spoke softly, speak up — the silence detection runs at peak energy < 0.02 and your voice may not have crossed the threshold.

</div>
<div class="lang-zh">

**症狀**：HUD 經歷 錄音 → 轉錄中 → 錯誤，訊息顯示 *No speech detected* 或 *Recording too short*。

**可能原因**：

1. 麥克風選錯（系統預設換成了已關掉的 Bluetooth 耳機、或 HDMI 輸入）。
2. 手動指定後又把裝置拔掉。
3. 你其實沒講話 — 幻覺過濾器擋下純靜音（這是設計意圖）。
4. 麥克風權限被撤銷。

**修法**：

1. 到 **設定 → 音訊 → 麥克風**，點 **Refresh** 重新列舉裝置。
2. 選 **System Default**（或你實際的麥克風名稱）。
3. 到 系統偏好設定/設定 → 聲音 → 輸入，講話時看輸入音量條會不會跳。不跳代表 OS 都收不到 — 是你的麥克風或裝置層問題。
4. 權限被撤的話，見 [系統權限](/docs/permissions#microphone)。
5. 再試一次。如果你確實有講但聲音很小，請大聲一點 — 靜音偵測閾值是峰值能量 < 0.02，太小聲會過不了。

</div>

## "Paste failed" / text doesn't appear at the cursor

<div class="lang-en">

**Symptom**: Recording and transcription succeed (you see the green ✓ briefly), but no text shows up where you were typing.

**Likely causes**:

1. **Accessibility permission missing or stale** — TypeLate can't inject text without it.
2. The active app is sandboxed in a way that blocks programmatic paste (some Mac App Store apps, secure-input fields like password prompts).
3. The cursor moved or focus shifted to a different window between recording and paste.

**Fix**:

1. First — try toggling **Settings → Application → Copy Result to Clipboard** on. If the result is now in your clipboard, the transcription worked and only the paste step is broken. Use ⌘V/Ctrl+V manually.
2. Verify Accessibility is granted: see [Permissions](/docs/permissions#accessibility-macos-only). After a recent update, run the [refresh procedure](/docs/permissions#recovery-flow-after-an-upgrade).
3. Test in Notes or any plain text editor. If paste works there but not in your target app, it's app-specific — file a wishlist note with the app name at [/wishlist](/wishlist).
4. Make sure you keep your cursor in the target field while recording. Switching windows mid-recording is fine, but the active app at *paste time* needs to accept text input.

</div>
<div class="lang-zh">

**症狀**：錄音轉錄成功（短暫看到綠色 ✓），但游標處沒出現文字。

**可能原因**：

1. **缺少或失效的輔助使用權限** — 沒有它 TypeLate 沒辦法注入文字。
2. 當前 App 沙箱限制（某些 Mac App Store App、密碼欄等安全輸入）擋了程式化貼字。
3. 錄音與貼字之間焦點跑掉、視窗切換。

**修法**：

1. 先試開 **設定 → 應用程式 → 結果複製到剪貼簿**。如果結果現在在剪貼簿裡，那轉錄是成功的、壞掉的只是貼字步驟。手動 ⌘V / Ctrl+V 即可。
2. 確認輔助使用已授予：見 [系統權限](/docs/permissions#accessibility-macos-only)。如果最近剛更新，跑一次 [更新後重置流程](/docs/permissions#recovery-flow-after-an-upgrade)。
3. 到 Notes 或任何純文字編輯器測試。在那邊能貼但目標 App 不能，是 App 特定行為 — 到 [/wishlist](/wishlist) 提一筆並附 App 名稱。
4. 錄音期間保持游標在目標欄位。錄音時切視窗沒關係，但 *貼字當下* 的當前 App 必須接受文字輸入。

</div>

## Hotkey not triggering on Windows

<div class="lang-en">

**Symptom**: Same as the macOS version — press the hotkey, nothing happens.

**Likely causes** (Windows doesn't have an Accessibility cache issue, so it's usually different from macOS):

1. **Hotkey conflict** — another app already binds the same key globally. The most common culprit is `Right Alt`, which game launchers, Logitech G Hub, and some IME tools claim.
2. The custom key you picked isn't supported by the underlying input listener.
3. TypeLate isn't running (check the system tray).

**Fix**:

1. Open **Settings → Hotkeys & Input → Hotkey** and pick a different preset (try `Left Control` or `Fn` if your keyboard has one).
2. Quit TypeLate, reopen it, and re-test.
3. If a specific custom key still won't fire, it's likely intercepted at OS level. Check Task Manager for known interceptors: Logitech / Razer suites, accessibility tools, gaming overlays.

</div>
<div class="lang-zh">

**症狀**：跟 macOS 一樣 — 按熱鍵、沒反應。

**可能原因**（Windows 沒有 Accessibility 快取問題，原因通常不一樣）：

1. **熱鍵衝突** — 別的 App 已經把同一個鍵綁成全域熱鍵。最常見元兇是 `Right Alt`，被遊戲啟動器、Logitech G Hub、輸入法工具搶。
2. 你選的自訂鍵不被 input listener 支援。
3. TypeLate 沒在跑（檢查系統匣）。

**修法**：

1. 到 **設定 → 熱鍵與輸入 → 熱鍵** 換一個預設（試 `Left Control`，或鍵盤有的話試 `Fn`）。
2. 退出再開 TypeLate 重試。
3. 某個特定自訂鍵還是沒反應，通常是被 OS 層攔走。到工作管理員看常見的攔截者：Logitech / Razer 套件、輔助工具、遊戲 overlay。

</div>

## Launch at Login doesn't fire on boot

<div class="lang-en">

**Symptom**: You enabled **Settings → Application → Launch at Login**, but TypeLate isn't running after a system reboot.

**Likely causes (macOS)**:

1. The LaunchAgent plist is missing or got corrupted.
2. **System Settings → General → Login Items** has TypeLate disabled — the toggle in TypeLate and the system-level toggle can disagree.
3. You moved or renamed `TypeLate.app` after enabling the toggle. The plist points to the old path.

**Likely causes (Windows)**:

1. The Run-key registry entry didn't get written — happens occasionally when the app is launched without write permissions.
2. Fast Startup mode is skipping the normal boot sequence.

**Fix (macOS)**:

1. **Settings → Application → Launch at Login** — toggle off, wait, toggle back on.
2. Verify the plist exists: `ls ~/Library/LaunchAgents/com.typelate.app.plist`.
3. Open **System Settings → General → Login Items** and confirm TypeLate is in the list and enabled.
4. If you moved TypeLate.app, run the toggle off/on cycle again to refresh the plist's path.

**Fix (Windows)**:

1. **Settings → Application → Launch at Login** — toggle off, then on.
2. Reboot and verify.
3. If still failing, manually verify the registry entry under `HKCU\Software\Microsoft\Windows\CurrentVersion\Run` — there should be a `TypeLate` value pointing at the executable.

</div>
<div class="lang-zh">

**症狀**：在 **設定 → 應用程式 → 開機自動啟動** 開了開關，但重開機後 TypeLate 沒在跑。

**可能原因（macOS）**：

1. LaunchAgent plist 不見了、或檔案壞了。
2. **系統設定 → 一般 → 登入項目** 把 TypeLate 關掉了 — TypeLate 內的開關跟系統層級的開關可能不同步。
3. 你開了開關後又移動或改名 `TypeLate.app`。plist 還指向舊路徑。

**可能原因（Windows）**：

1. Run-key 登錄機碼沒寫入 — 偶爾在沒寫入權限時啟動 App 會發生。
2. Fast Startup 模式跳過了正常開機流程。

**修法（macOS）**：

1. **設定 → 應用程式 → 開機自動啟動** — 關掉、等一下、再打開。
2. 確認 plist 存在：`ls ~/Library/LaunchAgents/com.typelate.app.plist`。
3. 開 **系統設定 → 一般 → 登入項目**，確認 TypeLate 在列表內且為啟用。
4. 移動過 TypeLate.app 的話，再跑一次「關 → 開」週期重新寫入 plist 的路徑。

**修法（Windows）**：

1. **設定 → 應用程式 → 開機自動啟動** — 關掉再打開。
2. 重新開機驗證。
3. 還是不行的話，手動到 `HKCU\Software\Microsoft\Windows\CurrentVersion\Run` 檢查；應該有一個 `TypeLate` 值指向執行檔。

</div>

## Still stuck?

<div class="lang-en">

- Search [GitHub Issues](https://github.com/bobo52310/TypeLate/issues) — someone may have hit this already.
- Open a new issue with the steps to reproduce, your OS version, and TypeLate version (Settings → About).
- For non-bug suggestions, the [Wishlist](/wishlist) is the right place.

</div>
<div class="lang-zh">

- 搜尋 [GitHub Issues](https://github.com/bobo52310/TypeLate/issues) — 別人可能踩過同一個。
- 開新 issue 時附上重現步驟、OS 版本、TypeLate 版本（設定 → 關於）。
- 不是 bug 而是想法的話，到 [Wishlist](/wishlist) 提案。

</div>
