import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./ThreePhenomena.css";

export default function ThreePhenomenaChapter({ step }: ChapterStepProps) {
  /* ── Step 0: Intro ── */
  if (step === 0) {
    return (
      <div className="tp-scene scene-pad">
        <div className="tp-intro">
          <div className="tp-eyebrow">CH 03 · 觀察</div>
          <h2 className="tp-title">
            <MaskReveal show duration={700}>有三個現象</MaskReveal>
            <br />
            <MaskReveal show delay={400} duration={700}>
              <span className="tp-title-mute">印象最深</span>
            </MaskReveal>
          </h2>
          <div className="tp-circles">
            {["工具一直換", "瓶頸在工作方式", "能力差距被放大"].map((label, i) => (
              <div key={label} className="tp-circle" style={{ animationDelay: `${600 + i * 150}ms` }}>
                <span className="tp-circle-num">0{i + 1}</span>
                <span className="tp-circle-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 1: Tool churn ── */
  if (step === 1) {
    const tools = ["Claude Code", "Cursor", "ChatGPT", "Gemini", "···"];
    return (
      <div className="tp-scene scene-pad">
        <div className="tp-phenomenon">
          <div className="tp-ph-header">
            <span className="tp-ph-num">01</span>
            <h3 className="tp-ph-title">工具一直換</h3>
          </div>
          <div className="tp-tool-chain">
            {tools.map((t, i) => (
              <div key={t} className="tp-tool-chip" style={{ animationDelay: `${200 + i * 130}ms` }}>
                {t}
              </div>
            ))}
          </div>
          <div className="tp-conclusion-card">
            <div className="tp-conclusion-bar" />
            <div className="tp-conclusion-text">
              <MaskReveal show delay={900} duration={600}>
                追工具不是核心——
              </MaskReveal>
              <br />
              <MaskReveal show delay={1200} duration={600}>
                工具會換，<span className="tp-em">工作方式可以沉澱</span>
              </MaskReveal>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 2: Bottleneck in work style ── */
  if (step === 2) {
    const items = ["需求沒整理好", "文件沒有結構", "PM SA SD 說法不同", "AI 不知道聽誰的", "結果各自為政"];
    return (
      <div className="tp-scene scene-pad">
        <div className="tp-phenomenon">
          <div className="tp-ph-header">
            <span className="tp-ph-num">02</span>
            <h3 className="tp-ph-title">瓶頸在工作方式</h3>
          </div>
          <div className="tp-items">
            {items.map((item, i) => (
              <div key={item} className="tp-item-row" style={{ animationDelay: `${200 + i * 120}ms` }}>
                <div className="tp-item-dot" />
                <span className="tp-item-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 3: Amplify chaos ── */
  if (step === 3) {
    return (
      <div className="tp-scene scene-pad">
        <div className="tp-amplify">
          <div className="tp-amp-eyebrow">現象二 · 延伸</div>
          <p className="tp-amp-text">
            <MaskReveal show duration={750}>
              工作方式沒有整理好，
            </MaskReveal>
            <br />
            <MaskReveal show delay={500} duration={750}>
              AI 只會
              <span className="tp-amp-em">放大混亂</span>
            </MaskReveal>
          </p>
        </div>
      </div>
    );
  }

  /* ── Step 4: Ability gap ── */
  if (step === 4) {
    return (
      <div className="tp-scene scene-pad">
        <div className="tp-phenomenon">
          <div className="tp-ph-header">
            <span className="tp-ph-num">03</span>
            <h3 className="tp-ph-title">能力差距被放大</h3>
          </div>
          <div className="tp-gap-split">
            <div className="tp-gap-card tp-gap-strong">
              <div className="tp-gap-label">原本就強</div>
              <div className="tp-gap-result">→ 用 AI 之後<span className="tp-em">更強</span></div>
              <div className="tp-gap-dims">
                {["問題拆解", "架構判斷", "驗證能力"].map((d) => (
                  <div key={d} className="tp-gap-dim">{d}</div>
                ))}
              </div>
            </div>
            <div className="tp-gap-vs">VS</div>
            <div className="tp-gap-card tp-gap-chaos">
              <div className="tp-gap-label">本來就混亂</div>
              <div className="tp-gap-result">→ 用 AI 之後<span className="tp-em-warn">更混亂</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 5: Conclusion ── */
  return (
    <div className="tp-scene scene-pad">
      <div className="tp-conclusion-wrap">
        <p className="tp-concl-text">
          <MaskReveal show duration={750}>AI 很強，</MaskReveal>
          <MaskReveal show delay={400} duration={750}>但不是自動成功。</MaskReveal>
        </p>
        <p className="tp-concl-sub">
          <MaskReveal show delay={900} duration={700}>
            它需要被放進一個
            <span className="tp-em">可控的工作環境</span>
          </MaskReveal>
        </p>
      </div>
    </div>
  );
}
