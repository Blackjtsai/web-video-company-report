# Eason-Style × OpenSpec SOP 筆記
> 制定日期：2026-05-01

---

## 一、一次性前置準備（初始化，只做一次）

| 項目 | 說明 |
|------|------|
| `CLAUDE.md` | 共用規範：命名規則、禁止行為、防止幻覺原則 |
| `TAI-BUILDER/` | 存放所有 Skill（SA / Web / API / Backend） |
| 架構藍圖文件 | PPTX 系統架構 + Excel 基礎 UC & Table 設計（主檔，只在審核後更新） |
| UC 編號規則 | Portal 延伸 → `UC 3.x.x.x`；新專案 → `[PROJ].[LAYER]-[NO]` |

---

## 二、Skill 設計（TAI-BUILDER 內）

- **SA Skill**：依 PM 需求自動產出 UC 草稿 + Table 設計（新功能專屬文件）
- **Web Skill**：前台 Web 層規範與 UC 產出
- **API Skill**：API 路由格式、UC 3.3.x 規範
- **Backend Skill**：後台 CRUD 規範、UC 3.4.x 規範
- **共用規範**：放在根目錄 `CLAUDE.md`，所有 Skill 共同遵守

---

## 三、UC 文件管理原則

- 新功能產出的 UC 草稿 → **建立獨立新檔**（如 `UC_faq-system_20260501.xlsx`）
- 不覆蓋基礎主檔
- SA 審閱確認後 → 人工合併回主檔
- 每個 UC 文件需包含「關聯 UC」欄位（連結上下游三層）

---

## 四、OpenSpec 執行流程

### Step 1 — Propose
```
/opsx:propose "[UC名稱]"
附上：① UC 規格文件  ② 相關 Table 設計  ③ 上下游 UC 關聯
```

**產出文件**（存放於 `openspec/changes/<name>/`）：
| 文件 | 對應傳統文件 |
|------|------------|
| `proposal.md` | PRD（要做什麼、為什麼） |
| `design.md` | 架構設計（怎麼做） |
| `tasks.md` | 實作清單（拆解步驟） |

### Step 2 — 三方審核（人工）
| 角色 | 審閱文件 | 重點確認 |
|------|---------|---------|
| PM | proposal.md | 方向、驗收條件 |
| SA | proposal + design | 需求邊界完整 |
| SD | design + tasks | 架構可行、任務合理 |

> 全部通過才進 Apply，否則退回修改。

### Step 3 — Apply
```
/opsx:apply
```
- PG 依 tasks.md 逐項實作，完成打勾 `[x]`
- QA 依 proposal + tasks 驗收

### Step 4 — Archive
```
/opsx:archive
```
- 封存至 `openspec/changes/archive/<name>/`
- 完成本次迭代

---

## 五、角色對應速查

| 角色 | 主要階段 | 主要閱讀文件 |
|------|---------|------------|
| PM | Propose 前 + 審核 | proposal.md |
| SA | UC 制定 + 審核 | proposal.md、design.md |
| SD | 審核 | design.md、tasks.md |
| PG | Apply | design.md、tasks.md |
| QA | 審核 + Apply | proposal.md、tasks.md |

---

## 六、文件位置總覽

```
[專案根目錄]/
├── CLAUDE.md                          ← 共用規範（防幻覺、命名規則）
├── TAI-BUILDER/
│   ├── skills/
│   │   ├── sa-skill/
│   │   ├── web-skill/
│   │   ├── api-skill/
│   │   └── backend-skill/
│   └── 架構藍圖文件（PPTX + Excel 主檔）
├── openspec/
│   ├── changes/
│   │   ├── <feature-name>/
│   │   │   ├── proposal.md
│   │   │   ├── design.md
│   │   │   └── tasks.md
│   │   └── archive/
│   └── specs/
└── UC_[feature]_[date].xlsx           ← 新功能 UC 草稿（SA 審後合回主檔）
```

---

## 七、提交 Propose 的標準格式

```
/opsx:propose "[feature-name]"

專案背景：[系統名稱、技術棧、環境]
UC 延伸自：[既有 UC 編號，e.g. UC 3.3.x]
本次範圍：[明確的功能邊界]
不在此次範圍：[排除項目]
參考設計模式：[e.g. 參考 portal_article 的 CRUD 模式]
關聯 UC：[上游 UC] → [本 UC] → [下游 UC]
```
