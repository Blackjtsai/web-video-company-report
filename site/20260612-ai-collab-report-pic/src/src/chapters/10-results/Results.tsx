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

const BAR_ROWS = [
  { label: "需求分析", traditional: 120, ai: 20, multiplier: "6x" },
  { label: "架構設計", traditional: 180, ai: 30, multiplier: "6x" },
  { label: "OpenSpec 撰寫", traditional: 90, ai: 10, multiplier: "9x" },
  { label: "程式碼實作", traditional: 240, ai: 60, multiplier: "4x" },
  { label: "Code Review", traditional: 60, ai: 12, multiplier: "5x" },
  { label: "測試撰寫", traditional: 120, ai: 20, multiplier: "6x" },
  { label: "文件產出", traditional: 90, ai: 10, multiplier: "9x" },
  { label: "Bug 追蹤", traditional: 60, ai: 15, multiplier: "4x" },
  { label: "版本整合", traditional: 60, ai: 15, multiplier: "4x" },
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
        <div className="rs-bars">
          <h2 className="vd-h2 rs-anim">
            9 種任務：<span className="vd-em-amber">傳統</span> vs <span className="vd-em-green">AI 協作</span> 工時對比（分鐘）
          </h2>
          <div className="rs-chart-wrap rs-anim" style={{ animationDelay: "250ms" }}>
            <HorizontalBarChart rows={BAR_ROWS} maxVal={240} />
          </div>
          <div className="rs-source rs-anim" style={{ animationDelay: "400ms" }}>
            📊 2026/05 PG 實測 · Cursor／ChatGPT／Claude Code · 單次任務平均耗時估算
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
