import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./Landing.css";

const ROADMAP = [
  { phase: "Now", title: "主管先試", desc: "先用自己的專案確認方向可行" },
  { phase: "六月", title: "精英小組", desc: "流程、規範、Skill、模板整理成工具包" },
  { phase: "七月", title: "試點專案", desc: "行銷網 / Mark 專案跑完整試點" },
  { phase: "H2", title: "橫向複製", desc: "成效確認後擴散到 CPG 和其他系統" },
];

const TOOLKIT = ["CLAUDE.md", "Skills", "UC + 架構藍圖", "OpenSpec", "QA + Archive"];

export default function LandingChapter({ step }: ChapterStepProps) {
  /* ── Step 0: Intro ── */
  if (step === 0) {
    return (
      <div className="ld-scene scene-pad">
        <div className="ld-intro">
          <div className="ld-eyebrow">CH 07 · 落地策略</div>
          <h2 className="ld-intro-title">
            <MaskReveal show duration={700}>不是全員上課，</MaskReveal>
            <br />
            <MaskReveal show delay={400} duration={700}>
              是<span className="ld-em">精英先跑通</span>，再橫向複製
            </MaskReveal>
          </h2>
        </div>
      </div>
    );
  }

  /* ── Step 1: Roadmap ── */
  if (step === 1) {
    return (
      <div className="ld-scene scene-pad">
        <div className="ld-roadmap-wrap">
          <div className="ld-roadmap-title">推進時間軸</div>
          <div className="ld-roadmap">
            {ROADMAP.map((r, i) => (
              <div key={r.phase} className="ld-rm-item" style={{ animationDelay: `${i * 180}ms` }}>
                <div className="ld-rm-phase">{r.phase}</div>
                <div className="ld-rm-connector">
                  <div className="ld-rm-dot" />
                  {i < ROADMAP.length - 1 && <div className="ld-rm-line" />}
                </div>
                <div className="ld-rm-content">
                  <div className="ld-rm-title">{r.title}</div>
                  <div className="ld-rm-desc">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 2: First win ── */
  if (step === 2) {
    return (
      <div className="ld-scene scene-pad">
        <div className="ld-win-wrap">
          <div className="ld-win-eyebrow">原則</div>
          <p className="ld-win-text">
            <MaskReveal show duration={750}>先讓</MaskReveal>
            <MaskReveal show delay={300} duration={750}>
              <span className="ld-em">一個成功案例</span>
            </MaskReveal>
            <MaskReveal show delay={600} duration={750}>跑出來。</MaskReveal>
          </p>
          <p className="ld-win-sub">
            <MaskReveal show delay={1000} duration={600}>
              我們不是培訓中心，也不能影響日常專案
            </MaskReveal>
          </p>
        </div>
      </div>
    );
  }

  /* ── Step 3: Toolkit ── */
  if (step === 3) {
    return (
      <div className="ld-scene scene-pad">
        <div className="ld-toolkit-wrap">
          <div className="ld-toolkit-header">
            <div className="ld-toolkit-eyebrow">每個系統都需要</div>
            <h3 className="ld-toolkit-title">自己的 AI 工具包</h3>
          </div>
          <div className="ld-toolkit-items">
            {TOOLKIT.map((item, i) => (
              <div key={item} className="ld-toolkit-item" style={{ animationDelay: `${200 + i * 130}ms` }}>
                <div className="ld-toolkit-num">0{i + 1}</div>
                <div className="ld-toolkit-name">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 4: Conclusion ── */
  return (
    <div className="ld-scene scene-pad">
      <div className="ld-concl-wrap">
        <p className="ld-concl-text">
          <MaskReveal show duration={750}>AI 協作，</MaskReveal>
          <br />
          <MaskReveal show delay={400} duration={750}>不是某個人的事，</MaskReveal>
          <br />
          <MaskReveal show delay={800} duration={750}>
            而是整個系統可以
            <span className="ld-em">承接的能力</span>
          </MaskReveal>
        </p>
      </div>
    </div>
  );
}
