import "../../styles/tb-common.css";
import "./FourThings.css";

interface Props { step: number }

const STEPS_DATA = [
  { num: "01", title: "自己研究", sub: "工具限制、適用情境、AI 協作的可能性" },
  { num: "02", title: "自己實作", sub: "流程、工具包，真的跑出來" },
  { num: "03", title: "自己踩坑", sub: "人機卡點，哪裡有效哪裡跑偏" },
  { num: "04", title: "整理成包", sub: "規範、Skill、流程、文件模板" },
];

export default function FourThings({ step }: Props) {
  const visibleCount = step === 0 ? 0 : step === 1 ? 2 : 4;

  return (
    <div className="tb-scene">
      <div className="tb-ch-header tb-anim" key={`h${step}`}>
        <div className="tb-ch-num">CH 03 · 實戰前行</div>
        <h2 className="tb-h2">這半年，我先做了四件事</h2>
      </div>

      <div className="tb-content">
        {step > 0 && (
          <div className="ft-timeline" key={`tl${step}`}>
            {STEPS_DATA.map((s, i) => (
              <div
                key={s.num}
                className={`ft-step${i < visibleCount ? " visible" : ""}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="tb-card ft-step-inner">
                  <div className="ft-step-num">{s.num}</div>
                  <div className="ft-step-title">{s.title}</div>
                  <div className="ft-step-sub">{s.sub}</div>
                </div>
                {i < 3 && i < visibleCount - 1 && (
                  <div className="ft-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="ft-conclusion tb-em">先做出成果，再談推廣。</div>
        )}
      </div>
    </div>
  );
}
