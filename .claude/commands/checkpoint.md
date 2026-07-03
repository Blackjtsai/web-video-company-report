執行 Session 收尾 Checkpoint 流程：

1. 掃描本次對話做了什麼（新增/修改章節、解決的 bug、架構調整、部署設定）
2. 依序檢查並補寫四個回寫目標：
   - `site/{專案}/CLAUDE.md`（章節登錄表格、Steps、STORAGE_KEY、圖片清單、Port/Stage 模式）
   - `_skill/company-report/SKILL.md`（新坑 / 可複用技巧，格式：先描述問題再給解法）
   - 根目錄 `CLAUDE.md`（專案總覽表格、關鍵架構規則）
   - `site/index.html`（新專案連結、`onclick` 清除 STORAGE_KEY、STORAGE_KEY 同步）
3. 有缺漏當場補寫，不等使用者再問
4. 完成後輸出四項回報結果：

```
✅ Checkpoint 完成

① site/{專案}/CLAUDE.md   — [✓ 已更新 / ✗ 無需更新]
② SKILL.md                — [✓ 補寫 Lesson N / ✗ 無需更新]
③ 根目錄 CLAUDE.md        — [✓ 已更新 / ✗ 無需更新]
④ site/index.html         — [✓ 已更新 / ✗ 無需更新]
```
