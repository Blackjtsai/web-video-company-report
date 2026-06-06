# 20260612-ai-collab-report — 簡報 CLAUDE.md

## 基本資訊

| 項目 | 內容 |
|---|---|
| 主題 | AI 協作推動實戰觀察 |
| 主講 | EasonTsai（網站技術課） |
| 日期 | 2026-06-12 |
| 時長 | ~20 分鐘 |
| 受眾 | 處長、部長、課長 |
| 主題色 | warm-keynote（奶油白底 + 青色） |

## 章節登錄

| NN | id | CSS prefix | Steps | 簡述 |
|----|----|------------|-------|------|
| 01 | coldopen | .co- | 4 | 開場定位：分享角度、組織脈絡、大局 vs 一線、核心提問 |
| 02 | four-things | .ft- | — | 四件正在發生的事 |
| 03 | three-phenomena | .tp- | — | 三個現象 |
| 04 | prompt-to-harness | .ph- | — | 從 prompt 到 harness |
| 05 | ai-ecosystem | .ae- | — | AI 生態因應 |
| 06 | maturity | .mt- | — | 成熟度與評估 |
| 07 | landing | .ld- | — | 落地策略 |
| 08 | closing | .cl- | — | 結尾呼籲 |

## 主題色 tokens（warm-keynote）

```css
--shell:   #f5efe1;
--surface: #fdfbf7;
--text:    #43302B;
--accent:  #14b8a6;
```

## 常用指令

```bash
# 開發伺服器
cd site/20260612-ai-collab-report/src && npm run dev

# TypeScript 檢查
npx tsc --noEmit

# 音頻合成（需要時）
PRESENTATION_TTS=edge-tts npm run synthesize-audio
```

## 開發規則（從根 CLAUDE.md 繼承）

- 每個 CSS prefix 獨立（`.co-`、`.ft-` ...），禁止跨章污染
- 字體全用 `clamp()`，不寫死 px
- 顏色用 CSS token（`var(--accent)` 等），不寫死 hex
- Stage 用純 CSS aspect-ratio，不用 JS transform scale
- `ProgressBar` 必須傳 `githubUrl={null}`
- 新增章節後 bump `STORAGE_KEY`（`hooks/useStepper.ts`）
