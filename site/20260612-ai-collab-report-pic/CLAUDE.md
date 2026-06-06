# 20260612-ai-collab-report-pic — 簡報 CLAUDE.md

## 基本資訊

| 項目 | 內容 |
|---|---|
| 主題 | AI 協作推動實戰觀察（圖像版） |
| 主講 | EasonTsai（網站技術課） |
| 日期 | 2026-06-12 |
| 版本定位 | 純網頁主講版，無音頻，全螢幕填滿，現場主講用 |
| 受眾 | 處長、部長、課長 |
| 主題色 | vivid-dark（電光紫 / 青 / 綠 / 深夜底色） |
| Port | 5180 |
| Stage 模式 | 全螢幕（`100vw / 100vh`），非 16:9 鎖比例 |

## 章節登錄

| NN | id | CSS prefix | Steps | 簡述 |
|----|----|------------|-------|------|
| 01 | environment | .ev- | 4 | 大環境：AI 浪潮三層次、機會窗口 |
| 02 | mindset | .ms- | 3 | 心態：擁抱 vs 抗拒、轉型曲線 |
| 03 | four-things | .ft- | 4 | 四件事：Prompt / Context / Harness / Ecosystem |
| 04 | phenomena | .ph- | 4 | 現象觀察：AI 協作常見三現象 |
| 05 | harness | .hn- | 4 | 思路演進：從 Prompt 到 Harness Engineering |
| 06 | ecosystem | .ec- | 4 | 生態設計：四層架構 + 框架解析 |
| 07 | taibuilder | .tb- | 5 | TAI-Builder 閉環：Think / Act / Inspect |
| 08 | methodology | .mt- | 4 | 工法心法：PMSA + 四原則 |
| 09 | doctsunami | .dt- | 4 | 文件海嘯：Blueprint / Spec / Archive |
| 10 | results | .rs- | 5 | 團隊成果：指標 / 長條 / 圓餅 / 折線 / 成熟度圖 |
| 11 | closing | .cl- | 4 | 下一步：路線圖 + 全景圖 + 結語 |

**總 steps：45 步　STORAGE_KEY：`"pic-cursor-v2"`**

## 主題色 tokens（vivid-dark）

```css
--shell:    #050810;
--surface:  #0D1326;
--surface-2:#111827;
--accent:   #8B5CF6;   /* electric purple */
--cyan:     #06B6D4;
--green:    #10B981;
--amber:    #F59E0B;
--rose:     #F43F5E;
--text:     #F1F5F9;
--text-2:   #CBD5E1;
--text-mute:#64748B;
--text-faint:#334155;
```

## 常用指令

```bash
# 開發伺服器（port 5180）
cd site/20260612-ai-collab-report-pic/src && npm run dev

# TypeScript 檢查
npx tsc --noEmit
```

## 圖片資源

圖檔放在 `src/public/images/`。主要圖檔：

| 檔名 | 用於 |
|---|---|
| `TAI-Builder 協作流程簡易版.png` | CH05 step 2、CH07 step 1 |
| `2026 T-Builder Core 系統架構圖.png` | CH07 step 4 |
| `TAI-Builder AI SDLC 完整循環圖02.png` | CH07 step 3 |
| `AI協作成熟度.png` | CH10 step 4（寬型表格圖） |
| `AI 協作設計全景圖.png` | CH11 step 2 |

## 架構規則（pic 版專屬）

### Stage 全螢幕
`base.css` 的 `.stage-frame` 使用 `width: 100vw; height: 100vh;`（非 16:9 鎖比例），因為本版本只用於現場主講，不錄屏。

### ImgCard 自然尺寸（重要）
**不要設固定高度給 `.ic-card`。** 正確做法：

```css
/* 框框跟著圖片大小走 */
.ic-card  { width: auto; height: auto; flex-shrink: 1; }
.ic-thumb { width: auto; height: auto; max-width: 100%; max-height: 58vh; object-fit: initial; }
```

固定高度（如 `height: 260px`）會導致 `object-fit: contain` 把圖片縮小並出現 letterbox 黑框。

### vd-split 排版（左文右圖）
圖文共存步驟的標準排版，定義在 `styles/pic-common.css`：

```css
.vd-split       { display: flex; gap: 40px; align-items: center; max-width: 1100px; }
.vd-split-text  { flex: 0 0 260px; display: flex; flex-direction: column; gap: 18px; }
.vd-split-img   { flex: 1; min-width: 0; display: flex; justify-content: flex-end; align-items: center; }
```

### 無音頻
本版本無 narrations / TTS。`narrations.ts` 全部填空字串 `""`，只作為 step 數的唯一真相源。

### CSS prefix 隔離
每章有獨立 prefix（`.ev-` / `.ms-` / `.ft-` / `.ph-` / `.hn-` / `.ec-` / `.tb-` / `.mt-` / `.dt-` / `.rs-` / `.cl-`），禁止跨章污染。

### bump STORAGE_KEY
新增或刪除任何 step 後，必須 bump `STORAGE_KEY`（`src/hooks/useStepper.ts`），目前為 `"pic-cursor-v2"`。
