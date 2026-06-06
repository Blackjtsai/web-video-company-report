import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./FourThings.css";

const THINGS = [
  {
    num: "01",
    title: "自己研究",
    tags: ["工具限制", "適用情境", "AI 協作可能性"],
    note: "不是只看影片，是真的去弄懂它",
  },
  {
    num: "02",
    title: "自己實作",
    tags: ["產品", "流程", "工具包"],
    note: "把東西真的跑出來，不是做投影片講理論",
  },
  {
    num: "03",
    title: "自己踩坑",
    tags: ["AI 有效在哪", "跑偏在哪", "哪裡要人確認"],
    note: "只有實作之後，才看得到真正的邊界",
  },
  {
    num: "04",
    title: "整理成包",
    tags: ["規範", "Skill", "流程", "文件模板"],
    note: "帶團隊時，有東西可以交",
  },
];

export default function FourThingsChapter({ step }: ChapterStepProps) {
  /* ── Step 0: Chapter intro — 4 boxes implied ── */
  if (step === 0) {
    return (
      <div className="ft-scene scene-pad">
        <div className="ft-intro">
          <div className="ft-eyebrow">CH 02 · 這半年做了什麼</div>
          <h2 className="ft-title">
            <MaskReveal show duration={700}>
              我先做了
            </MaskReveal>
            <MaskReveal show delay={300} duration={700}>
              <span className="ft-title-em">四件事</span>
            </MaskReveal>
          </h2>
          <div className="ft-boxes">
            {THINGS.map((t, i) => (
              <div key={t.num} className="ft-box ft-box-dim" style={{ animationDelay: `${i * 120 + 500}ms` }}>
                <span className="ft-box-num">{t.num}</span>
                <span className="ft-box-name">{t.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Steps 1–4: each thing expands ── */
  if (step >= 1 && step <= 4) {
    const active = THINGS[step - 1]!;
    const rest = THINGS.filter((_, i) => i !== step - 1);
    return (
      <div className="ft-scene scene-pad">
        <div className="ft-expand">
          <div className="ft-sidebar">
            {rest.map((t) => (
              <div key={t.num} className="ft-side-item">
                <span className="ft-side-num">{t.num}</span>
                <span className="ft-side-name">{t.title}</span>
              </div>
            ))}
          </div>
          <div className="ft-card">
            <div className="ft-card-num">
              <MaskReveal show duration={500}>{active.num}</MaskReveal>
            </div>
            <div className="ft-card-title">
              <MaskReveal show delay={150} duration={600}>{active.title}</MaskReveal>
            </div>
            <div className="ft-tags">
              {active.tags.map((tag, i) => (
                <div
                  key={tag}
                  className="ft-tag"
                  style={{ animationDelay: `${300 + i * 120}ms` }}
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="ft-card-note">
              <MaskReveal show delay={active.tags.length * 120 + 400} duration={600}>
                {active.note}
              </MaskReveal>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Step 5: Quote ── */
  return (
    <div className="ft-scene scene-pad">
      <div className="ft-quote-wrap">
        <div className="ft-quote-eyebrow">核心想法</div>
        <p className="ft-quote-text">
          <MaskReveal show duration={800}>先做出成果，</MaskReveal>
          <MaskReveal show delay={500} duration={800}>
            <span className="ft-quote-em">再談推廣。</span>
          </MaskReveal>
        </p>
      </div>
    </div>
  );
}
