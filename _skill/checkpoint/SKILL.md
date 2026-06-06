# Checkpoint Skill — Session 收尾回寫

**觸發方式**：使用者說「做 Checkpoint」或「/checkpoint」

---

## 目的

確保這次對話中產生的所有經驗，在 context 被截斷前完整回寫到對應文件。

---

## 執行步驟（依序完成，逐項打勾）

### Step 1 — 掃描本次對話做了什麼

回想（或讀取）這次 session 的主要操作：
- 新增 / 修改了哪些章節或 step？
- 解決了哪些 bug 或版面問題？
- 建立或調整了哪些架構規則？
- 做了哪些部署、設定、外部整合？

### Step 2 — 檢查四個回寫目標

**① `site/{專案}/CLAUDE.md`**（針對有動過的簡報專案）
- [ ] 新增 / 刪除章節 → 章節登錄表格已更新？
- [ ] Step 數有變 → Steps 欄、STORAGE_KEY 已更新？
- [ ] 新增圖片 → 圖片資源清單已補上？
- [ ] Port / Stage 模式有改 → 基本資訊已更新？

**② `_skill/company-report/SKILL.md`**
- [ ] 踩到新坑 → 已追加「### N. 問題標題」段落？
- [ ] 發現可複用技巧 → 已追加？
- [ ] 格式：先描述問題，再給解法 / 程式碼

**③ 根目錄 `CLAUDE.md`**
- [ ] 新增簡報專案 → 專案總覽表格已補上？
- [ ] 發現影響所有專案的框架規則 → 關鍵架構規則已更新？

**④ `site/index.html`**
- [ ] 新增簡報專案 → 表格加一行（序號、名稱、連結、建立日期）？
- [ ] 新增連結有加 `onclick="localStorage.removeItem('STORAGE_KEY')"`？
- [ ] STORAGE_KEY 有 bump → 同步更新 onclick key 名稱？

### Step 3 — 確認後回報

完成後輸出：

```
✅ Checkpoint 完成

① site/{專案}/CLAUDE.md   — [✓ 已更新 / ✗ 無需更新]
② SKILL.md                — [✓ 補寫 Lesson N / ✗ 無需更新]
③ 根目錄 CLAUDE.md        — [✓ 已更新 / ✗ 無需更新]
④ site/index.html         — [✓ 已更新 / ✗ 無需更新]
```

若有缺漏，**當場補寫**，不等使用者再問。

---

## 觸發時機建議

- 使用者說「做 Checkpoint」或對話快結束時
- 完成一個完整功能（新章節、部署、架構調整）後
- **不要等到 context 快滿才做** — 那樣會來不及
