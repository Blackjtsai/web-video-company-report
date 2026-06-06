import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./Coldopen.css";

export default function ColDopenChapter({ step }: ChapterStepProps) {
  /* ── Step 0: Opening hero ── */
  if (step === 0) {
    return (
      <div className="co-scene scene-pad">
        <div className="co-hero">
          <div className="co-date-badge">2026 · 06 · 12 &nbsp;·&nbsp; 處會 20 分鐘分享</div>
          <div className="co-accent-bar" />
          <h1 className="co-main-title">
            <MaskReveal show duration={850}>
              AI 協作推動
            </MaskReveal>
            <br />
            <MaskReveal show delay={280} duration={850}>
              實戰觀察
            </MaskReveal>
          </h1>
          <p className="co-sub-title">
            <MaskReveal show delay={680} duration={700}>
              一個課級主管，這半年怎麼做
            </MaskReveal>
          </p>
          <div className="co-speaker">
            <MaskReveal show delay={1050} duration={600}>
              EasonTsai &nbsp;·&nbsp; 台灣大哥大 網站技術課
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 1: Course context & attitude ── */
  if (step === 1) {
    const phases = ["研究", "實作", "踩坑", "整理"];
    return (
      <div className="co-scene scene-pad">
        <div className="co-context">
          <div className="co-org-path">
            台灣大哥大 &nbsp;›&nbsp; 客服系統處 &nbsp;›&nbsp;
            <span className="co-org-leaf">&nbsp;網站技術課</span>
          </div>

          <div className="co-journey">
            <div className="co-journey-label">2026 H1 · 半年推動歷程</div>
            <div className="co-journey-track">
              <div className="co-journey-fill" />
            </div>
            <div className="co-journey-phases">
              {phases.map((p) => (
                <div key={p} className="co-phase-dot">
                  <div className="co-dot-pip" />
                  <span className="co-phase-label">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="co-attitude">
            <span className="co-att-item">低姿態</span>
            <span className="co-att-sep">·</span>
            <span className="co-att-item">實戰觀察</span>
            <span className="co-att-sep">·</span>
            <span className="co-att-item">主管視角</span>
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 2: Big picture vs frontline ── */
  if (step === 2) {
    return (
      <div className="co-scene scene-pad">
        <div className="co-split">
          <div className="co-split-card co-split-left">
            <div className="co-card-label">大部隊</div>
            {["集團 AI 政策", "ITG AI 小組", "AI Coding 分享"].map((item) => (
              <div key={item} className="co-item-row">
                <div className="co-item-bar" />
                <span className="co-item-text">{item}</span>
              </div>
            ))}
          </div>

          <div className="co-bridge">
            <div className="co-bridge-text">如何落地</div>
            <div className="co-bridge-arrows">
              <div className="co-bridge-line" />
              <div className="co-bridge-arrow">↓</div>
            </div>
          </div>

          <div className="co-split-card co-split-right">
            <div className="co-card-label co-card-label-accent">一線戰場</div>
            {["試點", "流程", "治理"].map((item) => (
              <div key={item} className="co-item-row">
                <div className="co-item-bar co-item-bar-accent" />
                <span className="co-item-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 3: The question ── */
  return (
    <div className="co-scene scene-pad">
      <div className="co-q-wrap">
        <div className="co-q-eyebrow">一線主管每天面對的問題</div>
        <p className="co-question-text">
          <MaskReveal show duration={800}>
            明天到底怎麼
          </MaskReveal>
          <MaskReveal show delay={480} duration={800}>
            <span className="co-q-em">落地</span>
          </MaskReveal>
          <MaskReveal show delay={860} duration={600}>
            ？
          </MaskReveal>
        </p>
        <div className="co-q-reply">
          <MaskReveal show delay={1300} duration={600}>
            <div className="co-q-reply-bar" />
          </MaskReveal>
          <MaskReveal show delay={1400} duration={600}>
            <span className="co-q-reply-text">今天分享我們的作法</span>
          </MaskReveal>
        </div>
      </div>
    </div>
  );
}
