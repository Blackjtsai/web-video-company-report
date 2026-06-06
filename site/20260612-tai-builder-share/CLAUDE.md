# 20260612-tai-builder-share — 簡報 CLAUDE.md

## 基本資訊

| 項目 | 內容 |
|---|---|
| 主題 | TAI-Builder 分享：一個課級主管的心態、工法與實戰成果 |
| 主講 | EasonTsai（網站技術課） |
| 日期 | 2026-06-12 |
| 版本定位 | 純網頁主講版，無音頻，全螢幕填滿，現場主講用 |
| 受眾 | 網站設計師 / 開發者 |
| 主題色 | 黑底橘字（#000000 + #FF6600），依來源文件規範 |
| Port | 5182 |
| Stage 模式 | 全螢幕（`100vw / 100vh`），非 16:9 鎖比例 |
| 視覺風格 | 極簡扁平化暗黑風格，依 doc/article.md 規範 |

## 章節登錄

| NN | id | CSS prefix | Steps | 簡述 |
|----|----|------------|-------|------|
| 01 | hero | .hr- | 3 | Hero：大環境 + 核心金句 + 三欄環境現況 |
| 02 | mindset | .ms- | 3 | 心態：內功 vs 外功對比卡 |
| 03 | four-things | .ft- | 4 | 四件事：1 研究 2 實作 3 踩坑 4 成包 |
| 04 | phenomena | .ph- | 3 | 三個現象：工具換 / 工作方式 / 能力差距 |
| 05 | harness | .hn- | 4 | Harness 演進：Prompt→Context→Harness |
| 06 | ecosystem | .ec- | 4 | 四層架構：約束→工具→記憶→回饋 |
| 07 | taibuilder | .tb- | 4 | TAI-Builder 閉環：Think/Act/Inspect |
| 08 | methodology | .mt- | 4 | 四大心法 + PMSA 角色重構 |
| 09 | doctsunami | .dt- | 3 | 文件海嘯：四種文件 + 五步閉環 |
| 10 | results | .rs- | 4 | 1BG 數據：大數字 + Bar Chart + 折線 |
| 11 | governance | .gv- | 3 | 16人治理：轉折故事 + 四大挑戰 |
| 12 | roadmap | .rm- | 4 | 時間軸：1B1 / 平移 / 績效 + 結語 CTA |

**總 steps：43 步　STORAGE_KEY：`"tai-builder-v1"`**

## 主題色 tokens

```css
--shell:      #000000;
--surface:    #000000;
--surface-2:  #121212;
--accent:     #FF6600;
--text:       #FFFFFF;
--text-2:     #CCCCCC;
--text-mute:  #8E8E93;
--rule:       #333333;
```

## 常用指令

```bash
# 開發伺服器（port 5182）
cd site/20260612-tai-builder-share/src && npm run dev

# TypeScript 檢查
npx tsc --noEmit
```

## 圖片資源

圖檔放在 `src/public/images/`（從 doc_source/ 複製）：

| 檔名 | 用於 |
|---|---|
| `inner-outer.png` | Ch02 step 2（內外功對比） |
| `harness-engineering.png` | Ch05 step 2（Harness 解構） |
| `tai-builder-flow-simple.png` | Ch05 step 4 / Ch07 step 1 |
| `ecosystem-overview.png` | Ch06 step 4（四層架構總覽） |
| `tai-builder-flow.png` | Ch07 step 3（閉環流程） |
| `traditional-vs-taibuilder.png` | Ch07 step 4（對比表格） |
| `pmsa-roles.png` | Ch08 step 4（PMSA 角色重構） |
| `doc-tsunami.png` | Ch09 step 1（文件海嘯） |
| `ai-maturity.png` | Ch10 step 4（成熟度折線） |

## 架構規則

### 視覺風格
- 主背景：`#000000`（純黑）
- 卡片背景：`#121212`（深灰）
- 主文字：`#FFFFFF`（純白）
- 次要文字：`#8E8E93`
- **核心強調色：`#FF6600`**（標題、數字、箭頭）
- 排版原則：高清晰度，拒絕複雜漸層

### Stage 全螢幕
`base.css` 的 `.stage-frame` 使用 `width: 100vw; height: 100vh;`（非 16:9 鎖比例）。

### 無音頻
`narrations.ts` 全部填空字串 `""`，只作為 step 數的唯一真相源。

### CSS prefix 隔離
每章有獨立 prefix，禁止跨章污染。

### bump STORAGE_KEY
新增或刪除任何 step 後，必須 bump `STORAGE_KEY`（`src/hooks/useStepper.ts`），目前為 `"tai-builder-v1"`。
