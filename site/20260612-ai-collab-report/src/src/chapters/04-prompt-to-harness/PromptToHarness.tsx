import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./PromptToHarness.css";

const STAGES = [
  { id: "prompt", label: "Prompt", sub: "怎麼問？" },
  { id: "context", label: "Context", sub: "給什麼背景？" },
  { id: "harness", label: "Harness", sub: "設計工作環境" },
] as const;

const CHAOS_ITEMS = [
  "命名不符規範",
  "需求中途跑偏",
  "PM / SA / SD 各說各的",
  "AI 不知道聽誰的",
  "做完沒有文件可追溯",
  "錯了不知從哪開始查",
];

export default function PromptToHarnessChapter({ step }: ChapterStepProps) {
  /* ── Step 0: 3-stage axis ── */
  if (step === 0) {
    return (
      <div className="ph-scene scene-pad">
        <div className="ph-axis-wrap">
          <div className="ph-eyebrow">CH 04 · 思路演進</div>
          <div className="ph-axis">
            {STAGES.map((s, i) => (
              <div key={s.id} className="ph-axis-item" style={{ animationDelay: `${i * 200}ms` }}>
                <div className="ph-axis-node ph-axis-node-dim">
                  <span className="ph-axis-label">{s.label}</span>
                  <span className="ph-axis-sub">{s.sub}</span>
                </div>
                {i < 2 && <div className="ph-axis-arrow">→</div>}
              </div>
            ))}
          </div>
          <p className="ph-axis-caption">
            <MaskReveal show delay={700} duration={600}>
              從怎麼問，到設計 AI 能穩定產出的環境
            </MaskReveal>
          </p>
        </div>
      </div>
    );
  }

  /* ── Steps 1–3: each stage highlighted ── */
  if (step >= 1 && step <= 3) {
    const active = STAGES[step - 1]!;
    const CONTENT: Record<string, { body: string; tags: string[] }> = {
      prompt: {
        body: "問得更精準、格式更清楚、讓 AI 理解意圖",
        tags: ["role prompt", "few-shot", "chain of thought"],
      },
      context: {
        body: "讓 AI 理解系統背景、規格文件、歷史脈絡",
        tags: ["系統規格", "UC 文件", "架構描述"],
      },
      harness: {
        body: "設計 AI 穩定作業的環境——規範、工具、驗證、回寫",
        tags: ["CLAUDE.md", "Skills", "OpenSpec", "QA"],
      },
    };
    const content = CONTENT[active.id]!;
    return (
      <div className="ph-scene scene-pad">
        <div className="ph-stage-focus">
          <div className="ph-axis ph-axis-sm">
            {STAGES.map((s, i) => (
              <div key={s.id} className="ph-axis-item">
                <div className={`ph-axis-node ${s.id === active.id ? "ph-axis-node-active" : "ph-axis-node-dim"}`}>
                  <span className="ph-axis-label">{s.label}</span>
                </div>
                {i < 2 && <div className="ph-axis-arrow">→</div>}
              </div>
            ))}
          </div>
          <div className="ph-focus-card">
            <div className="ph-focus-num">0{step}</div>
            <div className="ph-focus-title">
              <MaskReveal show duration={600}>{active.label}</MaskReveal>
            </div>
            <div className="ph-focus-sub">
              <MaskReveal show delay={200} duration={600}>{active.sub}</MaskReveal>
            </div>
            <p className="ph-focus-body">
              <MaskReveal show delay={400} duration={600}>{content.body}</MaskReveal>
            </p>
            <div className="ph-focus-tags">
              {content.tags.map((t, i) => (
                <div key={t} className="ph-focus-tag" style={{ animationDelay: `${550 + i * 100}ms` }}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 4: Chaos scenario ── */
  if (step === 4) {
    return (
      <div className="ph-scene scene-pad">
        <div className="ph-chaos-wrap">
          <div className="ph-chaos-header">
            <div className="ph-chaos-badge">沒有框架時</div>
            <h3 className="ph-chaos-title">常常是這樣…</h3>
          </div>
          <div className="ph-chaos-list">
            {CHAOS_ITEMS.map((item, i) => (
              <div key={item} className="ph-chaos-item" style={{ animationDelay: `${200 + i * 110}ms` }}>
                <div className="ph-chaos-dot" />
                <span className="ph-chaos-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 5: Conclusion ── */
  return (
    <div className="ph-scene scene-pad">
      <div className="ph-concl-wrap">
        <div className="ph-concl-eyebrow">結論</div>
        <p className="ph-concl-text">
          <MaskReveal show duration={750}>問題不是 AI 不夠強，</MaskReveal>
          <br />
          <MaskReveal show delay={500} duration={750}>
            而是沒有把 AI 放進
          </MaskReveal>
          <br />
          <MaskReveal show delay={900} duration={750}>
            <span className="ph-em">清楚、可控、可驗證</span>的環境
          </MaskReveal>
        </p>
      </div>
    </div>
  );
}
