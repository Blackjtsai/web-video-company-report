import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";
import { HorizontalBarChart, DonutChart, LineChart } from "../../components/Charts";
import type { ChapterStepProps } from "../../registry/types";
import "../../styles/pic-common.css";
import "./Results.css";

const B = import.meta.env.BASE_URL;
const IMGS = [
  B + "images/AI協作成熟度.png",
];
const IMG_FIRST30 = B + "images/Yourfirst30withClaudeCode.png";

const BAR_ROWS = [
  { label: "系統公告列表 (WEB)", traditional: 60, ai: 7,  multiplier: "8.5x", dev: "Ken" },
  { label: "告警通知 (API)",     traditional: 30, ai: 6,  multiplier: "5x",   dev: "Ken" },
  { label: "Job_16 (Job)",       traditional: 60, ai: 7,  multiplier: "8.5x", dev: "Ken" },
  { label: "I_026 元件 (WEB)",   traditional: 60, ai: 8,  multiplier: "7.5x", dev: "Allen" },
  { label: "系統檢查 (API)",     traditional: 60, ai: 10, multiplier: "6x",   dev: "Allen" },
  { label: "系統檢測主檔 (BE)",  traditional: 90, ai: 15, multiplier: "6x",   dev: "Allen" },
  { label: "Job_12 (Job)",       traditional: 90, ai: 18, multiplier: "5x",   dev: "Allen" },
  { label: "資費查詢 (WEB)",     traditional: 60, ai: 12, multiplier: "5x",   dev: "Michael" },
  { label: "資費 API (API)",     traditional: 40, ai: 8,  multiplier: "5x",   dev: "Michael" },
];

const METRICS = [
  { value: "421.5h", label: "節省工時", sub: "近半年累積", color: "var(--accent)" },
  { value: "973%", label: "時間效益", sub: "vs 傳統工法", color: "var(--cyan)" },
  { value: "6.3x", label: "平均加速倍數", sub: "跨 9 個任務類型", color: "var(--green)" },
  { value: "84.3%", label: "工時節省率", sub: "AI 協作 vs 傳統", color: "var(--amber)" },
];

const LINE_SERIES = [
  { label: "Prompt 能力", color: "#8B5CF6", values: [10, 30, 50, 65, 75] },
  { label: "Harness 設計", color: "#06B6D4", values: [5, 15, 35, 55, 72] },
  { label: "系統思維", color: "#10B981", values: [5, 10, 20, 40, 68] },
];
const X_LABELS = ["2025 Q3", "2025 Q4", "2026 Q1", "2026 Q2", "2026/05"];

const INPUTS = [
  { icon: "🏗️", label: "TAI-Builder 架構圖", desc: "整個協作框架的骨幹設計" },
  { icon: "📋", label: "SA 文件", desc: "系統分析與需求規格記錄" },
  { icon: "⚙️", label: "預計要做的 SKILL", desc: "技能路線圖與能力規劃" },
  { icon: "💬", label: "對談紀錄", desc: "與 AI 協作的完整對話脈絡" },
  { icon: "🧠", label: "心法與工法", desc: "PMSA 四原則與 TAI-Builder 閉環" },
];

export default function ResultsChapter({ step }: ChapterStepProps) {
  const lb = useLightbox(IMGS);
  return (
    <div className="rs-scene vd-scene">
      <Lightbox images={IMGS} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />

      {step === 0 && (
        <div className="rs-intro">
          <div className="vd-label rs-anim">CH 10 · 團隊成果</div>
          <h2 className="vd-h1 rs-anim" style={{ animationDelay: "100ms" }}>
            數字<span className="vd-em-green">說話</span>
          </h2>
          <div className="rs-metric-grid rs-anim" style={{ animationDelay: "300ms" }}>
            {METRICS.map((m) => (
              <div key={m.label} className="rs-metric vd-card" style={{ borderColor: m.color + "55" }}>
                <div className="rs-m-value" style={{ color: m.color }}>{m.value}</div>
                <div className="rs-m-label">{m.label}</div>
                <div className="rs-m-sub">{m.sub}</div>
              </div>
            ))}
          </div>
          <div className="rs-source rs-anim" style={{ animationDelay: "500ms" }}>
            📊 數據來源：2026 年 5 月初，PG 使用 AI 工具（Cursor／ChatGPT／Claude Code）之開發效益實測分析
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="rs-bars-wrap">
          <div className="rs-bars">
            <div className="rs-bars-left rs-anim">
              <div className="vd-label">工時實測分析</div>
              <h2 className="vd-h2" style={{ marginTop: "12px" }}>
                9 種任務<br /><span className="vd-em-amber">傳統</span> vs <span className="vd-em-green">AI 協作</span>
              </h2>
              <div className="rs-bars-highlights">
                <div className="rs-bars-stat">
                  <div className="rs-bars-stat-val" style={{ color: "var(--green)" }}>8.5x</div>
                  <div className="rs-bars-stat-label">最高加速（WEB / Job 類）</div>
                </div>
                <div className="rs-bars-stat">
                  <div className="rs-bars-stat-val" style={{ color: "var(--amber)" }}>6.3x</div>
                  <div className="rs-bars-stat-label">9 筆加權平均</div>
                </div>
                <div className="rs-bars-stat">
                  <div className="rs-bars-stat-val" style={{ color: "var(--accent)" }}>5x</div>
                  <div className="rs-bars-stat-label">最低（API / Job 類）</div>
                </div>
              </div>
            </div>
            <div className="rs-bars-right rs-anim" style={{ animationDelay: "200ms" }}>
              <HorizontalBarChart rows={BAR_ROWS} maxVal={100} />
            </div>
          </div>
          <div className="rs-source rs-anim" style={{ animationDelay: "400ms" }}>
            📊 2026/05 Ken / Allen / Michael 真實開發工時實測 · 來源：AI協作分析資料.xlsx
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="rs-donut">
          <h2 className="vd-h2 rs-anim">
            整體工時節省 <span className="vd-em-amber">84.3%</span>，ROI <span className="vd-em-cyan">973%</span>
          </h2>
          <div className="rs-donut-row rs-anim" style={{ animationDelay: "250ms" }}>
            <DonutChart pct={84} label="工時節省" sublabel="84.3% 工時由 AI 執行" color="#F59E0B" bg="rgba(245,158,11,0.15)" />
            <DonutChart pct={97} label="時間效益" sublabel="973% ROI" color="#06B6D4" bg="rgba(6,182,212,0.15)" />
            <DonutChart pct={78} label="品質提升" sublabel="Review 覆蓋率" color="#10B981" bg="rgba(16,185,129,0.15)" />
          </div>
          <div className="rs-source rs-anim" style={{ animationDelay: "400ms" }}>
            📊 2026/05 PG 實測 · Cursor／ChatGPT／Claude Code · 開發效益分析
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="rs-maturity">
          <h2 className="vd-h2 rs-anim">
            成熟度趨勢：從 <span className="vd-em-rose">0</span> 到 <span className="vd-em-green">生產級</span> AI 協作
          </h2>
          <div className="rs-chart-wrap rs-anim" style={{ animationDelay: "150ms" }}>
            <LineChart series={LINE_SERIES} xLabels={X_LABELS} />
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="rs-origin">
          <div className="vd-label rs-anim">成熟度評估的起點</div>
          <h2 className="vd-h2 rs-anim" style={{ animationDelay: "80ms" }}>
            這份成熟度，<span className="vd-em-purple">怎麼來的？</span>
          </h2>
          <div className="rs-origin-body rs-anim" style={{ animationDelay: "180ms" }}>
            <div className="rs-origin-inputs">
              <div className="rs-origin-catalyst">
                <div className="rs-origin-tag">同仁分享</div>
                <img src={IMG_FIRST30} alt="Your First 30 with Claude Code" className="rs-first30-img" />
              </div>
              <div className="rs-origin-plus">＋</div>
              <div className="rs-origin-list">
                {INPUTS.map((item) => (
                  <div key={item.label} className="rs-origin-item">
                    <span className="rs-origin-icon">{item.icon}</span>
                    <div>
                      <div className="rs-origin-item-label">{item.label}</div>
                      <div className="rs-origin-item-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rs-origin-arrow">→</div>
            <div className="rs-origin-output">
              <div className="rs-origin-output-label">AI 協作分析</div>
              <div className="rs-origin-output-result">AI 協作系統<br />演進階段總覽</div>
            </div>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="rs-maturity-img">
          <div className="vd-label rs-anim">協作成熟度圖</div>
          <h2 className="vd-h2 rs-anim" style={{ animationDelay: "80ms" }}>
            AI 協作系統<span className="vd-em-purple">演進階段</span>總覽
          </h2>
          <div className="rs-anim" style={{ animationDelay: "180ms" }}>
            <ImgCard src={IMGS[0]} label="AI 協作成熟度" onClick={() => lb.open(0)} />
          </div>
        </div>
      )}
    </div>
  );
}
