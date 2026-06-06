# Web Video 簡報專案

## 👋 Hi — 開場問候

當使用者說「**Hi**」時，回覆以下內容：

```
Hi！我是你的 Web Video 簡報助理 🎬

這個專案使用 web-video-presentation 工法，把文章 / 口播稿做成：
• 網頁版 — 現場講解 / 投影，鍵盤 ↓↑ 逐步推進
• 錄屏版 — 16:9 橫式，每步獨占整屏，有電影感

目前已完成的簡報：
• 20260612-ai-collab-report      — 暖色 Keynote 版，11 章，含口播稿 + TTS，port 5174
• 20260612-ai-collab-report-pic  — Vivid Dark 圖像版，11 章，無音頻，全螢幕，port 5180

要開始新簡報，把文章 / 口播稿放進專案資料夾，跟我說「幫我做成簡報」就可以了！
```

## ✅ Checkpoint — 觸發方式

當使用者說「**做 Checkpoint**」或「**/checkpoint**」時，
自動執行 `_skill/checkpoint/SKILL.md` 的步驟，**不需要使用者再逐項提示**。

---

## 🎬 簡報助理 — 觸發方式

當使用者說「**幫我做簡報**」或提到要做網頁影片簡報時，
自動呼叫 `/company-report` 技能（`_skill/company-report/SKILL.md`），並**先問使用者以下三件事**：

1. **簡報專案名稱**（格式建議：`YYYYMMDD主題`，例如 `20260901Q3產品發表`）
2. **素材位置**（文章 / 口播稿 / 圖片目前放在哪裡？預設 `./doc_source/`）
3. **主題風格**（偏暖色 / 冷色 / 科技感 / 清爽？或直接指定 `.visual-style/` 裡的 profile 名稱，例如 `eason-black-orange`；或說「你幫我選」）

收到三個答案後，建立結構再進入 Phase 1：

```bash
mkdir -p ./site/{專案名稱}/doc
# 將素材搬入
[ -f ./article.md ] && mv ./article.md ./site/{專案名稱}/
[ -f ./script.md ]  && mv ./script.md  ./site/{專案名稱}/
[ -f ./outline.md ] && mv ./outline.md ./site/{專案名稱}/
```

之後所有作業在 `./site/{專案名稱}/` 下進行。

建立結構後，**立刻在 `./site/{專案名稱}/CLAUDE.md` 建立該簡報的說明檔**，記錄：
- 基本資訊（主題、主講、日期、受眾、主題色、Port、Stage 模式）
- 章節登錄表格（NN / id / CSS prefix / Steps / 簡述）
- 主題色 tokens
- 常用指令（dev server、tsc 檢查）
- 開發規則（從根 CLAUDE.md 繼承 + 本專案特有規則）

格式參考：`site/20260612-ai-collab-report-pic/CLAUDE.md`

## ⚡ Claude Code 開場自動檢查（每次新 session 必做）

每次新裝置或新 session 開啟這個專案時，**主動執行以下檢查**，
若有任何項目未就緒，立刻告知使用者需要安裝什麼：

```bash
# 1. Node.js
node --version

# 2. 各簡報專案依賴
for project in site/*/src; do
  if [ -d "$project" ]; then
    name=$(dirname "$project" | xargs basename)
    if [ -d "$project/node_modules" ]; then
      echo "✓ ${name}：node_modules 已安裝"
    else
      echo "✗ ${name}：需要 cd $project && npm install"
    fi
  fi
done

# 3. edge-tts（音頻合成，選用）
python3 -c "import edge_tts; print('✓ edge-tts')" 2>/dev/null || echo "⚠ edge-tts 未安裝（需要時：pip install edge-tts）"

# 4. 各簡報 Phase 1 文件
for project in site/*/; do
  name=$(basename "$project")
  missing=""
  [ -f "${project}article.md" ] || [ -f "${project}script.md" ] || missing="article.md 或 script.md"
  if [ -z "$missing" ]; then
    echo "✓ ${name}：內容稿已備妥"
  else
    echo "✗ ${name}：缺少 ${missing}（Phase 1 尚未完成）"
  fi
done
```

## 專案總覽

每個簡報放在 `site/<簡報名稱>/`，各有自己的 `CLAUDE.md` 記錄章節、指令、主題色。

| 簡報 | 狀態 | 章節 / Steps |
|---|---|---|
| 20260612-ai-collab-report | ✅ 完成 | 11 章，暖色 Keynote，口播稿 + TTS，port 5174 |
| 20260612-ai-collab-report-pic | ✅ 完成 | 11 章，Vivid Dark 圖像版，無音頻，全螢幕，port 5180 |
| 20260612-ai-collab-report-light | ✅ 完成 | 11 章，Corporate Light 企業淺色版，無音頻，全螢幕，port 5181 |

## 藍圖（BLUEPRINT.md）規則

**藍圖是給 Claude 讀的快速索引**，讓每次 session 不需重新掃描整個目錄。

### 統一檔名
所有藍圖檔統一命名為 `BLUEPRINT.md`（取代舊的 `INDEX.md`）。

### 自動觸發原則
Claude 進入任何目錄時，依以下規則判斷是否需要建立或更新藍圖：

| 目錄類型 | 藍圖檔案 | 觸發條件 |
|---|---|---|
| `site/{專案}/` | 該專案的 `CLAUDE.md`（兼作藍圖） | 新增章節、異動 step 時自動更新 |
| `doc_source/` 或素材目錄 | `BLUEPRINT.md` | 新增檔案 / 子目錄時自動更新 |
| 根目錄 | 本 `CLAUDE.md`（兼作藍圖） | 新增專案或框架規則時自動更新 |

### 自動建立時機
若進入一個有實質內容（多個檔案或子目錄）但**沒有** `BLUEPRINT.md` 的目錄，**立刻建立**，格式：
```markdown
# BLUEPRINT — {目錄名稱}
> 最後更新：YYYY-MM-DD

## 目錄結構
（子目錄清單 + 一行說明）

## 檔案索引
| 檔案 | 類型 | 內容摘要 |
|---|---|---|
```

### 更新時機
新增 / 刪除 / 重命名任何檔案後，**同步更新對應的 BLUEPRINT.md 或 CLAUDE.md**。

---

## 目錄結構

```
project-root/
├── CLAUDE.md               ← 你在這裡（通用規則 + 根藍圖）
├── .visual-style/          ← 視覺風格 profile（每份簡報可指定一個套用）
│   ├── eason-black-orange.md
│   ├── eason-tai-builder.md
│   ├── corporate-light.md
│   └── tech-minimal-dark.md
├── _skill/
│   ├── company-report/
│   │   └── SKILL.md        ← 工作流程 + 踩過的坑（/company-report 技能）
│   └── checkpoint/
│       └── SKILL.md        ← Session 收尾回寫流程（/checkpoint 技能）
├── doc_source/
│   └── BLUEPRINT.md        ← 素材目錄藍圖（給 Claude 快速索引用）
└── site/
    └── <簡報名稱>/
        ├── CLAUDE.md       # 該簡報的章節、指令、主題色
        ├── doc/            # 原始素材（文章 / 圖片）
        ├── article.md / script.md / outline.md
        └── src/            # Vite + React + TS 專案
```

## 🎨 視覺風格 Profile（`.visual-style/`）

開始新簡報時，讀取對應 profile 後嚴格遵守其排版規範：

| Profile | 風格 | 適用場景 |
|---|---|---|
| `eason-black-orange` | 黑底橘字，Klimt 風，零漸層零圓角 | 技術演講、AI/工程主題 |
| `eason-tai-builder` | TAI-Builder 流程圖 + AI 治理版面 | 工作流程說明、AI 協作方法論 |
| `corporate-light` | 白底深藍，企業 SaaS 風 | 主管報告、財務簡報 |
| `tech-minimal-dark` | 深藍賽博朋克，IDE 風 | DevOps、資料管道、基礎設施 |

使用方式：確認風格後，**立刻讀取 `.visual-style/<profile>.md`**，之後所有 CSS token、版面、圓角設定全依該檔規範。

---

## 關鍵架構規則

- `narrations.ts` 的長度 = step 數 = 音頻段數（**唯一真相源**，三者必須一致）
- 每章有獨立 CSS prefix（`.ch01-` / `.ch02-` ...），禁止跨章污染
- 新增章節後要 bump `STORAGE_KEY`（在 `hooks/useStepper.ts`）
- 所有顏色、字體走 CSS token（`var(--accent)` 等），禁止寫死 hex / font name
- `ProgressBar` 必須傳 `githubUrl={null}` — 否則底部會出現連到範本作者的 GitHub 圖示
- Stage 尺寸有兩種模式（base.css 的 `.stage-frame`）：
  - **錄屏版**（16:9 鎖比例）：`width: min(100vw, calc(100vh * 16 / 9)); height: min(100vh, calc(100vw * 9 / 16));`
  - **純網頁主講版**（填滿視窗，無側欄留白）：`width: 100vw; height: 100vh;`
  - 不用 JS transform scale，純 CSS 控制
- 字體全用 `clamp()`，不寫死 px

## 新增章節流程

1. 建 `src/chapters/<NN>-<id>/narrations.ts` + `<Chapter>.tsx` + `<Chapter>.css`
2. 在 `src/registry/chapters.ts` 加 import + CHAPTERS 項目
3. `npx tsc --noEmit` 確認零錯誤
4. `npm run extract-narrations` 更新 audio-segments.json
5. `PRESENTATION_TTS=edge-tts npm run synthesize-audio` 合成新段音頻（有需要時）
6. Bump `STORAGE_KEY`（v1 → v2）

## TTS 音頻合成

```bash
pip install edge-tts
PRESENTATION_TTS=edge-tts npm run synthesize-audio
```

- 聲音：`zh-TW-HsiaoChenNeural`（台灣中文女聲）
- Provider 檔：`src/scripts/tts-providers/edge-tts.sh`

## 經驗累積規則（重要）

每次完成章節或解決問題後，依**影響範圍**決定寫到哪裡：

| 類型 | 寫到哪 | 例子 |
|---|---|---|
| 這個專案的結構異動 | `site/{專案}/CLAUDE.md` | 新增章節、調整 step 數、換圖片、改 port |
| 可跨專案複用的技巧或踩坑 | `_skill/company-report/SKILL.md` | ImgCard 自然尺寸、vd-split、LineChart 圖例位置 |
| 影響所有專案的框架規則 | 根目錄 `CLAUDE.md`（本檔） | Stage 兩種模式、新的架構原則 |

### 寫到專案 CLAUDE.md 的格式
直接更新對應的表格欄位（章節登錄、圖片清單等），不需要額外格式。

### 寫到 SKILL.md 的格式
```
### N. 問題標題
**問題**：描述現象
**解法**：程式碼或步驟
```

這樣下一個 session 開啟任何簡報專案，都能自動繼承所有經驗。

## Session 收尾 Checkpoint（每次對話結束前必做）

**① 專案 `site/{專案}/CLAUDE.md`**
- [ ] 新增 / 刪除章節 → 章節登錄表格已更新？
- [ ] Step 數有變 → Steps 欄、STORAGE_KEY 已更新？
- [ ] 新增圖片 → 圖片資源清單已補上？
- [ ] Port / Stage 模式有改 → 基本資訊已更新？

**② `_skill/company-report/SKILL.md`**
- [ ] 踩到新坑 / 發現可複用技巧 → 已追加到「踩過的坑」？

**③ 根目錄 `CLAUDE.md`（本檔）**
- [ ] 新增簡報專案 → 專案總覽表格已補上？
- [ ] 發現影響所有專案的框架規則 → 關鍵架構規則已更新？

**④ `site/index.html`（push 前必做）**
- [ ] 新增簡報專案 → 在表格加一行（序號、名稱、連結、建立日期）？
- [ ] 新增簡報的連結要加 `onclick="localStorage.removeItem('該專案的STORAGE_KEY')"` — 確保從首頁進入時從第一頁開始
- [ ] STORAGE_KEY 有 bump → 同步更新 index.html 對應連結的 onclick key 名稱
