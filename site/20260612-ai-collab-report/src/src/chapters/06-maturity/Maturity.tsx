import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./Maturity.css";

const METRICS = [
  { label: "AI 工具使用", pct: 85 },
  { label: "流程系統化", pct: 75 },
  { label: "角色分工", pct: 70 },
  { label: "AI 治理化", pct: 65 },
  { label: "知識顯性化", pct: 60 },
];

const GOVERNANCE = [
  {
    num: "01",
    title: "Halt & Approve",
    desc: "關鍵節點先停下來，人確認後再繼續。避免 AI 一路做錯還不自知。",
  },
  {
    num: "02",
    title: "Verify & QA Check",
    desc: "不只相信最後的輸出。要有測試、審查、文件對照、任務驗收，才算完成。",
  },
  {
    num: "03",
    title: "PR & Blueprint Rule",
    desc: "命名、分支、文件回寫、禁止事項，全部顯性化。不靠人記，靠規則守。",
  },
];

export default function MaturityChapter({ step }: ChapterStepProps) {
  /* ── Step 0: Title ── */
  if (step === 0) {
    return (
      <div className="mt-scene scene-pad">
        <div className="mt-intro">
          <div className="mt-eyebrow">CH 06 · 自評</div>
          <h2 className="mt-title">
            <MaskReveal show duration={700}>目前成熟度</MaskReveal>
            <br />
            <MaskReveal show delay={400} duration={700}>
              <span className="mt-title-mute">從工具使用走向流程工程</span>
            </MaskReveal>
          </h2>
          <p className="mt-intro-note">
            <MaskReveal show delay={900} duration={600}>
              這不是正式 KPI，只是說明我們走到哪裡
            </MaskReveal>
          </p>
        </div>
      </div>
    );
  }

  /* ── Step 1: Metrics bars ── */
  if (step === 1) {
    return (
      <div className="mt-scene scene-pad">
        <div className="mt-metrics-wrap">
          <div className="mt-metrics-title">五構面成熟度</div>
          <div className="mt-bars">
            {METRICS.map((m, i) => (
              <div key={m.label} className="mt-bar-row" style={{ animationDelay: `${i * 120}ms` }}>
                <div className="mt-bar-label">{m.label}</div>
                <div className="mt-bar-track">
                  <div
                    className="mt-bar-fill"
                    style={{ width: `${m.pct}%`, animationDelay: `${100 + i * 120}ms` }}
                  />
                </div>
                <div className="mt-bar-pct">{m.pct}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 2: Insight ── */
  if (step === 2) {
    return (
      <div className="mt-scene scene-pad">
        <div className="mt-insight">
          <div className="mt-insight-eyebrow">代表什麼？</div>
          <p className="mt-insight-text">
            <MaskReveal show duration={750}>不只是在單點用 AI，</MaskReveal>
            <br />
            <MaskReveal show delay={500} duration={750}>
              而是開始把 AI 放進
              <span className="mt-em">可管理的工作流</span>
            </MaskReveal>
          </p>
        </div>
      </div>
    );
  }

  /* ── Steps 3–5: Governance ── */
  if (step >= 3 && step <= 5) {
    const gov = GOVERNANCE[step - 3]!;
    return (
      <div className="mt-scene scene-pad">
        <div className="mt-gov-wrap">
          <div className="mt-gov-header">
            <span className="mt-gov-label">治理機制</span>
            <span className="mt-gov-counter">{step - 2} / 3</span>
          </div>
          <div className="mt-gov-card">
            <div className="mt-gov-num">
              <MaskReveal show duration={500}>{gov.num}</MaskReveal>
            </div>
            <div className="mt-gov-title">
              <MaskReveal show delay={150} duration={600}>{gov.title}</MaskReveal>
            </div>
            <p className="mt-gov-desc">
              <MaskReveal show delay={400} duration={650}>{gov.desc}</MaskReveal>
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 6: Quote ── */
  return (
    <div className="mt-scene scene-pad">
      <div className="mt-quote-wrap">
        <div className="mt-quote-eyebrow">核心主張</div>
        <p className="mt-quote-text">
          <MaskReveal show duration={800}>
            <span className="mt-em">可控性，</span>
          </MaskReveal>
          <br />
          <MaskReveal show delay={500} duration={800}>
            比單次速度更重要。
          </MaskReveal>
        </p>
      </div>
    </div>
  );
}
