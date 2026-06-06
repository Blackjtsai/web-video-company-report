import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./AiEcosystem.css";

const LAYERS = [
  {
    num: "01",
    name: "約束層",
    items: ["CLAUDE.md", "規範", "禁止事項"],
    desc: "讓 AI 不要亂做",
  },
  {
    num: "02",
    name: "工具層",
    items: ["TAI-Builder Skill", "任務工具"],
    desc: "讓 AI 有明確的能力邊界",
  },
  {
    num: "03",
    name: "記憶層",
    items: ["UC", "架構藍圖", "文件"],
    desc: "讓 AI 有穩定的系統背景",
  },
  {
    num: "04",
    name: "回饋層",
    items: ["OpenSpec", "QA", "Archive"],
    desc: "讓結果可驗證、可回寫",
  },
];

const FLOW_STEPS = ["PM 提需求", "SA 呼叫 Skill", "UC + 規格草案", "三方審核", "實作", "QA 驗收", "Archive 回寫"];

export default function AiEcosystemChapter({ step }: ChapterStepProps) {
  /* ── Step 0: Intro ── */
  if (step === 0) {
    return (
      <div className="ae-scene scene-pad">
        <div className="ae-intro">
          <div className="ae-eyebrow">CH 05 · 生態設計</div>
          <h2 className="ae-intro-title">
            <MaskReveal show duration={700}>工具只是刀，</MaskReveal>
            <br />
            <MaskReveal show delay={400} duration={700}>
              <span className="ae-em">生態</span>決定效果
            </MaskReveal>
          </h2>
          <p className="ae-intro-sub">
            <MaskReveal show delay={900} duration={600}>
              AI 周圍的四層生態，決定了它能不能穩定產出
            </MaskReveal>
          </p>
        </div>
      </div>
    );
  }

  /* ── Steps 1–4: each layer ── */
  if (step >= 1 && step <= 4) {
    const layer = LAYERS[step - 1]!;
    const prev = LAYERS.slice(0, step - 1);
    return (
      <div className="ae-scene scene-pad">
        <div className="ae-layers-wrap">
          <div className="ae-prev-layers">
            {prev.map((l) => (
              <div key={l.num} className="ae-prev-chip">
                <span className="ae-prev-num">{l.num}</span>
                <span className="ae-prev-name">{l.name}</span>
              </div>
            ))}
          </div>
          <div className="ae-layer-card">
            <div className="ae-layer-num">
              <MaskReveal show duration={500}>{layer.num} / 04</MaskReveal>
            </div>
            <div className="ae-layer-name">
              <MaskReveal show delay={150} duration={600}>{layer.name}</MaskReveal>
            </div>
            <div className="ae-layer-desc">
              <MaskReveal show delay={350} duration={600}>{layer.desc}</MaskReveal>
            </div>
            <div className="ae-layer-items">
              {layer.items.map((item, i) => (
                <div key={item} className="ae-layer-item" style={{ animationDelay: `${450 + i * 120}ms` }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 5: Flow ── */
  if (step === 5) {
    return (
      <div className="ae-scene scene-pad">
        <div className="ae-flow-wrap">
          <div className="ae-flow-eyebrow">協作閉環</div>
          <div className="ae-flow">
            {FLOW_STEPS.map((s, i) => (
              <div key={s} className="ae-flow-item" style={{ animationDelay: `${i * 130}ms` }}>
                <div className="ae-flow-bubble">{s}</div>
                {i < FLOW_STEPS.length - 1 && <div className="ae-flow-arr">→</div>}
              </div>
            ))}
          </div>
          <p className="ae-flow-note">
            <MaskReveal show delay={1100} duration={600}>
              每一步都有依據，每一步都留脈絡
            </MaskReveal>
          </p>
        </div>
      </div>
    );
  }

  /* ── Step 6: Conclusion ── */
  return (
    <div className="ae-scene scene-pad">
      <div className="ae-concl-wrap">
        <div className="ae-concl-eyebrow">核心原則</div>
        <p className="ae-concl-text">
          <MaskReveal show duration={750}>AI 在裡面是</MaskReveal>
          <br />
          <MaskReveal show delay={400} duration={750}>
            <span className="ae-em">執行者和加速器</span>
          </MaskReveal>
        </p>
        <p className="ae-concl-sub">
          <MaskReveal show delay={900} duration={650}>
            最後的決策，還是人。
          </MaskReveal>
        </p>
      </div>
    </div>
  );
}
