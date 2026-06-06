import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./Closing.css";

const SKILLS = [
  {
    num: "01",
    title: "問題拆解",
    desc: "能不能把模糊的需求，拆成 AI 可以執行、人可以驗證的任務",
  },
  {
    num: "02",
    title: "驗證判斷",
    desc: "能不能看出 AI 哪裡不對，用規格、測試、文件確認品質",
  },
  {
    num: "03",
    title: "協作心態",
    desc: "願不願意分享、沉澱工具包、建立共同語言，讓整個團隊一起變快",
  },
];

export default function ClosingChapter({ step }: ChapterStepProps) {
  /* ── Step 0: Future vision ── */
  if (step === 0) {
    return (
      <div className="cl-scene scene-pad">
        <div className="cl-vision">
          <div className="cl-eyebrow">CH 08 · 往後看</div>
          <h2 className="cl-vision-title">
            <MaskReveal show duration={700}>AI 協作能力，</MaskReveal>
            <br />
            <MaskReveal show delay={400} duration={700}>
              正在成為工作的
              <span className="cl-em">基本維度</span>
            </MaskReveal>
          </h2>
        </div>
      </div>
    );
  }

  /* ── Steps 1–3: each skill ── */
  if (step >= 1 && step <= 3) {
    const skill = SKILLS[step - 1]!;
    return (
      <div className="cl-scene scene-pad">
        <div className="cl-skill-wrap">
          <div className="cl-skill-header">
            <span className="cl-skill-label">關鍵能力</span>
            <span className="cl-skill-counter">{step} / 3</span>
          </div>
          <div className="cl-skill-card">
            <div className="cl-skill-num">
              <MaskReveal show duration={500}>{skill.num}</MaskReveal>
            </div>
            <div className="cl-skill-title">
              <MaskReveal show delay={150} duration={650}>{skill.title}</MaskReveal>
            </div>
            <p className="cl-skill-desc">
              <MaskReveal show delay={400} duration={650}>{skill.desc}</MaskReveal>
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 4: Not layoff, but growth ── */
  if (step === 4) {
    return (
      <div className="cl-scene scene-pad">
        <div className="cl-growth-wrap">
          <p className="cl-growth-text">
            <MaskReveal show duration={750}>提升效率，</MaskReveal>
            <br />
            <MaskReveal show delay={400} duration={750}>不是為了裁員。</MaskReveal>
          </p>
          <p className="cl-growth-sub">
            <MaskReveal show delay={900} duration={650}>
              而是讓日常任務之外，還有能力
              <span className="cl-em">挑戰更有價值的事</span>
            </MaskReveal>
          </p>
        </div>
      </div>
    );
  }

  /* ── Step 5: Thank you ── */
  return (
    <div className="cl-scene scene-pad">
      <div className="cl-thanks-wrap">
        <p className="cl-thanks-text">
          <MaskReveal show duration={800}>
            AI 不會取代專業，
          </MaskReveal>
          <br />
          <MaskReveal show delay={500} duration={800}>
            但它正在<span className="cl-em">重構</span>專業工作的方式。
          </MaskReveal>
        </p>
        <div className="cl-thanks-footer">
          <MaskReveal show delay={1100} duration={700}>
            <div className="cl-thanks-note">今天分享的，我們還在摸索中。也歡迎各位交流不同的作法。</div>
          </MaskReveal>
          <MaskReveal show delay={1500} duration={600}>
            <div className="cl-thanks-sig">EasonTsai &nbsp;·&nbsp; 台灣大哥大 網站技術課 &nbsp;·&nbsp; 2026.06.12</div>
          </MaskReveal>
        </div>
        <div className="cl-thanks-big">
          <MaskReveal show delay={1800} duration={900}>
            謝謝
          </MaskReveal>
        </div>
      </div>
    </div>
  );
}
