# Web Video Presentation — 簡報 SOP

使用 **web-video-presentation** 工法，產出網頁版簡報（可錄屏）：

| 版本 | 用途 |
|---|---|
| 網頁版 | 現場講解、投影、鍵盤 ↓↑ 逐步推進 |
| 錄屏版 | 輸出為 MP4，上傳 YouTube / 簡報存檔 |

---

## 工作流程

```
Phase 1   讀取內容（article.md → script.md + outline.md）
  ▼
[Checkpoint 1]  確認章節切分、節奏、素材
  ▼
Phase 2   脚手架 + 網頁版簡報
  2.1  scaffold 建立 src/
  2.2  複製素材 → public/images/
  2.3  實作各章節
  2.4  split 模式調整（split.css）
  2.5  SplitEnding 結尾面板
  ▼
[Checkpoint 2]  全章驗收（視覺 / 節奏 / split 衝突）
  ▼
Phase 3   音頻合成（可選）
  ▼
Phase 4   交付
  ▼
Phase 5   寫入系統藍圖（blueprint.md）
```

---

## Phase 1 — 讀取內容

### 1.1 輸入來源優先順序
1. `article.md`（使用者已備妥的文稿）
2. `script.md`（口播稿，直接是節拍分段格式）
3. 使用者當場口述 → Claude 協助整理

### 1.2 一次產出兩份文件
- `script.md`：平台化口播稿（決定每個 step 的節拍）
- `outline.md`：開發計畫（章節切分 + 每步畫面重點 + 素材清單）

> outline 只規劃節奏與資訊密度，**不規劃動畫**。動畫由章節開發時即時設計。

---

## Phase 2 — 脚手架 + 網頁版簡報

### 2.1 脚手架

```bash
# 先 cd 到專案父目錄（重要！避免中文路徑問題）
cd ./site/{專案名稱}
bash ~/.claude/skills/web-video-presentation/scripts/scaffold.sh src --theme=sunset-zine

# 刪掉範例章節
rm -rf src/src/chapters/01-example
# 並在 registry/chapters.ts 移除 EXAMPLE_CHAPTER
```

### 2.2 複製素材

```bash
cp ./doc/cover.jpg  src/public/images/cover.jpg
# 依此類推
```

### 2.3 章節規劃建議

| 章節 | 建議 Steps |
|---|---|
| 開場（hook / intro） | 2–4 |
| 主要內容各段 | 4–6 |
| 結尾 / 行動呼籲 | 2–4 |

### 2.4 split 模式（左圖右文）

`App.tsx` 設定各章節對應圖片：

```ts
const base = import.meta.env.BASE_URL;
const SPLIT_IMAGES: Record<string, string> = {
  chapter1: `${base}images/ch1.jpg`,
  chapter2: `${base}images/ch2.jpg`,
};
```

> 無圖章節不設定 → 顯示完整畫面

章節若有自帶背景圖，在右側 960px 面板會重複，需在 `split.css` 隱藏：

```css
.split-right .ch1-bg { display: none !important; }
```

### 2.5 SplitEnding 結尾面板

最後一步按 `↓` 彈出 SplitEnding，左半封面 + END，右半資源面板（連結 / QR Code 等）。

---

## Phase 3 — 音頻合成（可選）

```bash
pip install edge-tts
PRESENTATION_TTS=edge-tts npm run synthesize-audio
```

- 語音：`zh-TW-HsiaoChenNeural`（台灣中文女聲）
- 增量合成：只合成缺少的段落，不重複跑已有的

---

## Phase 4 — 交付

```bash
cd site/{專案名稱}/src && npm run dev
```

直接給出可點擊連結：

```
🖥️ 網頁版（投影/講解）：http://localhost:5173/
```

操作說明：
- 鍵盤 `↓` 下一步、`↑` 上一步
- 右上角切換口播 Auto 模式

---

## Phase 5 — 寫入系統藍圖

交付後在 `site/{專案名稱}/blueprint.md` 寫入（或更新）：

```markdown
# 系統藍圖 — {專案名稱}
> 最後更新：YYYY-MM-DD

## 章節登錄
| NN  | id       | CSS prefix | Steps | 簡述 |
|-----|----------|------------|-------|------|
| 01  | intro    | .in-       |  3    | 開場 |

總步數：XX 步

## 關鍵檔案
| 檔案（相對 src/）                | 關鍵內容                         |
|--------------------------------|----------------------------------|
| src/registry/chapters.ts       | CHAPTERS 陣列，章節順序唯一真相源  |
| src/App.tsx                    | SPLIT_IMAGES 對照                |
| src/hooks/useStepper.ts        | STORAGE_KEY = "vN"               |

## 主題色
```css
--surface: #xxxxxx;
--accent:  #xxxxxx;
--text:    #xxxxxx;
```

## 特殊 hack
（本專案特有的 workaround）

## TTS 狀態
- 已合成：XX / XX 段
- 合成指令：`PRESENTATION_TTS=edge-tts npm run synthesize-audio`
```

**下一個 session 起手方式**：先讀 `blueprint.md`，再按需讀指定檔案。

---

## Checkpoint 清單

### Checkpoint 1（Phase 1 結束）
- [ ] 章節切分合理？節拍節奏對？
- [ ] 有需要的素材（圖片 / 圖表）都清點完畢？
- [ ] script.md 段落數 = 預計的總 step 數？

### Checkpoint 2（全章驗收）
- [ ] 視覺氣質對？主題色符合簡報調性？
- [ ] 節奏對？某些步太快 / 太慢？
- [ ] split 模式左右無重複背景圖？

### 結尾驗收
- [ ] 最後一步 `↓` 彈出 SplitEnding？
- [ ] `npx tsc --noEmit` 零錯誤？

### Phase 3 音頻驗收（若有）
- [ ] 所有段落都有 mp3？
- [ ] 口播文字通順？

### Session 收尾 Checkpoint（每次 session 結束前必做）

依三分流規則檢查經驗是否已回寫到正確位置：

**① 專案 `site/{專案}/CLAUDE.md`**
- [ ] 新增 / 刪除章節 → 章節登錄表格是否已更新？
- [ ] Step 數有變 → 表格 Steps 欄、STORAGE_KEY 是否已更新？
- [ ] 新增圖片 → 圖片資源清單是否已補上？
- [ ] Port / Stage 模式有改 → 基本資訊是否已更新？

**② `_skill/company-report/SKILL.md`（本檔）**
- [ ] 這次踩到新坑 / 發現可複用技巧 → 是否已追加到「踩過的坑」？

**③ 根目錄 `CLAUDE.md`**
- [ ] 新增簡報專案 → 專案總覽表格是否已補上？
- [ ] 發現影響所有專案的框架規則 → 關鍵架構規則是否已更新？

---

## 踩過的坑（自動累積，每次有新發現就更新這裡）

### 1. Scaffold 預設 GitHub 圖示（必須移除）

`ProgressBar` 元件內建 `DEFAULT_GITHUB_URL`，hover 進度條時右下角會出現 GitHub 圖示連到範本作者 repo。

**脚手架完成後立刻在 `App.tsx` 加 `githubUrl={null}`**：

```tsx
<ProgressBar
  chapters={CHAPTERS}
  cursor={stepper.cursor}
  onJumpChapter={stepper.jumpToChapter}
  githubUrl={null}
/>
```

### 2. Scaffold 中文路徑問題

執行脚手架時，**不可以把含中文字的絕對路徑當 TARGET 傳入**，
會導致 `npm create vite@latest` 建出鏡像資料夾結構。

```bash
# ❌ 錯誤
bash scaffold.sh /Users/name/project/site/20261220公司簡報/src

# ✅ 正確：先 cd 到父目錄，再用相對路徑
cd /Users/name/project/site/20261220公司簡報
bash ~/.claude/skills/web-video-presentation/scripts/scaffold.sh src --theme=sunset-zine
```

若已跑出多餘的 `Users/` 資料夾，直接 `rm -rf Users/` 清除。

### 3. 新增章節流程

1. 建 `src/chapters/<NN>-<id>/narrations.ts` + `.tsx` + `.css`
2. 在 `src/registry/chapters.ts` 加 import + 陣列項目
3. `npx tsc --noEmit`
4. `npm run extract-narrations`
5. `PRESENTATION_TTS=edge-tts npm run synthesize-audio`（若需要音頻）
6. Bump `STORAGE_KEY`（`hooks/useStepper.ts`：v1 → v2）

### 4. 深色背景卡片文字可見性

黃底 / 暗底卡片上若有淺色文字，需明確覆蓋：

```css
.card--warn .text-light { color: #7a4a00; }
```


### 5. 視窗等比例縮放 CSS 架構（取代 1920px transform scale）

**問題**：scaffold 預設 Stage 是 1920×1080 + JS `transform: scale()`。
在 1440px 瀏覽器下縮放比 ~0.67，導致 42px 標題顯示為 28px、20px 內文顯示為 13px，
整個簡報看起來像是縮小版，完全無法使用於簡報場景。

**解法**：改用純 CSS aspect-ratio 控制，Stage 直接填滿視窗，無需縮放補償。

#### Stage.tsx（移除 transform scale）
```tsx
export function Stage({ onAdvance, children }: Props) {
  return (
    <div className="app-shell">
      <div className="stage-frame" onClick={(e) => {
        const t = e.target as HTMLElement;
        if (t.closest("button, a, input, [data-no-advance]")) return;
        onAdvance();
      }}>
        {children}
      </div>
    </div>
  );
}
```

#### base.css（CSS 直接控制 16:9）
```css
.app-shell {
  position: fixed; inset: 0;
  display: flex; align-items: center; justify-content: center;
  background: var(--shell);
}

/* 固定畫布等比例縮放：永遠維持 16:9，填滿視窗較短的那一邊 */
.stage-frame {
  position: relative;
  width: min(100vw, calc(100vh * 16 / 9));
  height: min(100vh, calc(100vw * 9 / 16));
  background: var(--surface);
  overflow: hidden;
  cursor: pointer;
  box-shadow: var(--shadow-stage);
}

/* stage padding 也要改為視窗真實 px */
--stage-pad-x: 64px;
--stage-pad-y: 48px;
```

#### 章節 CSS 字體規範（使用 clamp，真實視窗 px）
```css
/* 標題：clamp(最小, vw比例, 最大) */
.dX-day-title { font-size: clamp(32px, 3.6vw, 48px); font-weight: 900; }

/* 主要內文：22px 起跳，line-height 1.6 */
.content-text { font-size: clamp(17px, 1.7vw, 22px); line-height: 1.6; }

/* 卡片名稱 */
.card-name { font-size: clamp(20px, 2.2vw, 28px); font-weight: 700; }

/* Hero 大數字 */
.hero-num { font-size: clamp(52px, 6vw, 80px); font-weight: 900; }
```

#### split.css（960px → 50%）
```css
/* 舊 */
.split-left { flex: 0 0 960px; }
/* 新 */
.split-left { flex: 0 0 50%; }
```

#### SplitEnding.css（同上）
```css
.se-left { flex: 0 0 50%; }
```

#### 章節 layout 規範
```css
/* stage：flex column，讓 header + content 垂直排列 */
.dX-stage {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  padding: var(--stage-pad-y) var(--stage-pad-x);
  overflow: hidden;
}

/* header：固定在頂部，不伸縮 */
.dX-header { flex-shrink: 0; margin-bottom: 32px; }

/* 所有 content block：flex:1 填滿剩餘空間，不留空白 */
.dX-content { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 24px; }
```

> 裝飾性幾何圖形（雪花、光暈）必須 `position: absolute; z-index: 0;`，
> 文字 content 的 `z-index` 必須 > 裝飾層，確保不被推擠。

---

### 6. ImgCard 固定高度導致 letterbox 黑框（vivid-dark 版踩坑）

**問題**：給 `.ic-card` 設固定高度（如 `height: 260px`），圖片用 `object-fit: contain` 縮入框內，出現大量深色空白，框框比圖片大很多。
**解法**：不設固定高度，讓框跟著圖片自然大小走：

```css
.your-wrapper .ic-card  { width: auto; height: auto; flex-shrink: 1; }
.your-wrapper .ic-thumb { width: auto; height: auto; max-width: 100%; max-height: 58vh; object-fit: initial; }
```

全局 split 模式已在 `styles/pic-common.css` 的 `.vd-split-img` 統一處理。

### 7. 多個簡報 port 衝突

**問題**：同一個專案下有兩個 Vite dev server，`vite.config.ts` 都預設 port 5174 → 互相搶占，第二個啟動失敗或顯示錯誤版本的簡報。
**解法**：每個子專案在 `vite.config.ts` 指定不同 port：

```ts
export default defineConfig({ server: { port: 5180 } });
```

**規範**：新增子專案前先確認 port 沒有重複。

### 8. Stage 16:9 兩側留白 vs 全螢幕填滿

**問題**：`.stage-frame` 預設 `width: min(100vw, calc(100vh * 16/9))` 鎖 16:9，寬螢幕下左右有深色 letterbox。
**判斷依據**：
- **錄屏版**（需要輸出固定比例影片）→ 保留 16:9 鎖比例
- **純網頁主講版**（現場投影，不錄屏）→ 改成全螢幕

**解法（主講版）**，修改 `base.css`：
```css
.stage-frame { width: 100vw; height: 100vh; box-shadow: none; }
```

### 9. LineChart 圖例與 X 軸標籤重疊

**問題**：折線圖圖例放在底部（`y={h-14}`），X 軸標籤也在底部（`y={h-6}`），兩者疊在一起看不清。
**解法**：把圖例移到頂部，並增加 `padT`（頂部 padding）：

```tsx
// Charts.tsx — LineChart
const padT = 52;
// 圖例 y 改到頂部
<text y={8}>圖例文字</text>
```

### 10. 寬型表格圖不適合放進 vd-split

**問題**：橫式寬表格圖（如「AI協作成熟度」10 列表格）放進 `vd-split` 右欄空間不夠，顯得很小。
**解法**：改用全寬顯示，標題在上方，圖片自然撐開：

```css
.rs-maturity-img { max-width: 1100px; }
.rs-maturity-img .ic-card  { width: 100%; height: auto; }
.rs-maturity-img .ic-thumb { width: 100%; height: auto; max-height: 62vh; object-fit: initial; }
```

### 11. narrations.ts step 數 ≠ TSX step 數 → STORAGE_KEY 必須 bump

**問題**：新增/刪除一個 step 後忘記同步 `narrations.ts` 的陣列，或忘記 bump `STORAGE_KEY`，導致簡報跑版、進度跳格。
**規則**：`narrations.ts` 是唯一真相源。每次改 step 數：
1. 同步更新 `narrations.ts`（空字串數量 = step 數）
2. Bump `STORAGE_KEY`（`hooks/useStepper.ts`：`v1` → `v2` → ...）
3. 同步更新 `site/index.html` 對應連結的 `onclick` key 名稱

### 12. GitHub Pages 部署 Vite 多專案

**情境**：同一個 repo 下有多個 Vite 子專案，要一起部署到 GitHub Pages。
**解法**：

① 每個子專案的 `vite.config.ts` 加 `base`：
```ts
base: "/repo-name/project-folder-name/",
```

② GitHub Actions workflow 分別 build，再合併到 `deploy/` 資料夾：
```yaml
- run: |
    cp -r site/project-a/src/dist/. deploy/project-a/
    cp -r site/project-b/src/dist/. deploy/project-b/
    cp site/index.html deploy/index.html
- uses: actions/configure-pages@v4
  with:
    enablement: true   # 自動開啟 Pages，不需手動設定
- uses: actions/upload-pages-artifact@v3
  with:
    path: deploy
```

③ `site/index.html` 是首頁選單，commit 進 repo，workflow 直接 `cp` 過去。

### 13. index.html 點連結重置簡報進度

**問題**：Vite 簡報用 `localStorage` 記住進度，從首頁再點進去會繼續上次位置，而非從第一頁開始。
**解法**：在 `site/index.html` 的連結加 `onclick`：
```html
<a href="project-path/" onclick="localStorage.removeItem('STORAGE_KEY名稱')">
  前往簡報 →
</a>
```
**注意**：STORAGE_KEY bump 時，`index.html` 的 onclick 也要同步更新。

---