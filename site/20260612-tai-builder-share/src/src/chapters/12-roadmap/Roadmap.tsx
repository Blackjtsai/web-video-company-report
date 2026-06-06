import "../../styles/tb-common.css";
import "./Roadmap.css";

interface Props { step: number }

const TL = [
  {
    date: "2026 年 7 月",
    title: "個人 1B1 深度溝通",
    desc: "針對全團隊 16 位成員展開一對一深度對談，盤點 Copilot 真實使用狀況，摸清底細、掃除盲點。",
  },
  {
    date: "2026 年下半年",
    title: "跨小組經驗平移",
    desc: "推進 CBG 小組的環境調整與心態溝通，將 TAI-Builder 工具與規範全面平移。",
  },
  {
    date: "2026 年底",
    title: "績效考核與校準",
    desc: "將「是否跟隨大部隊功法走」納入年底績效溝通重要指標，確保轉型全員到位。",
  },
];

export default function Roadmap({ step }: Props) {
  if (step === 3) {
    return (
      <div className="tb-scene-center rm-cta tb-anim" key="cta">
        <div className="rm-cta-main">大部隊，走同套功法。</div>
        <div className="tb-body rm-cta-sub">
          AI 不會取代你，<br />善用 AI 的人會取代你。
        </div>
        <div className="tb-label rm-cta-thanks">謝謝大家</div>
      </div>
    );
  }

  const visibleCount = step === 0 ? 0 : step === 1 ? 1 : 3;

  return (
    <div className="tb-scene">
      <div className="tb-ch-header tb-anim" key={`h${step}`}>
        <div className="tb-ch-num">CH 12 · 下一步</div>
        <h2 className="tb-h2">大部隊的轉型時間軸</h2>
      </div>

      <div className="tb-content">
        <div className="rm-timeline" key={`tl${step}`}>
          {TL.map((item, i) => (
            <div
              key={item.date}
              className={`rm-tl-item${i < visibleCount ? " visible" : ""}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="rm-tl-left">
                <div className="rm-tl-date">{item.date}</div>
                <div className="rm-tl-dot" />
                {i < TL.length - 1 && <div className="rm-tl-line" />}
              </div>
              <div className="rm-tl-body">
                <div className="rm-tl-body-title">{item.title}</div>
                <div className="tb-body rm-tl-body-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
