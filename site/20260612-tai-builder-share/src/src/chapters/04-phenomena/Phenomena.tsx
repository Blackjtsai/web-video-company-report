import "../../styles/tb-common.css";
import "./Phenomena.css";

interface Props { step: number }

const CARDS = [
  { icon: "🔄", title: "工具一直換", desc: "今天 Claude Code、明天 Cursor。追工具不是核心，工作方式才是。" },
  { icon: "🚧", title: "瓶頸在工作方式", desc: "需求沒整理好、文件沒結構，AI 只會放大混亂。" },
  { icon: "📈", title: "能力差距被放大", desc: "強者愈強。AI 需要被放進可控的工作環境，否則只讓問題更大。" },
];

export default function Phenomena({ step }: Props) {
  const visible = step === 0 ? 0 : step === 1 ? 2 : 3;

  return (
    <div className="tb-scene">
      <div className="tb-ch-header tb-anim" key={`h${step}`}>
        <div className="tb-ch-num">CH 04 · 痛點現象</div>
        <h2 className="tb-h2">有三個現象印象最深</h2>
      </div>

      <div className="tb-content">
        <div className="ph-cards" key={`c${step}`}>
          {CARDS.slice(0, visible).map(c => (
            <div key={c.title} className="tb-card ph-card">
              <span className="ph-card-icon">{c.icon}</span>
              <div className="ph-card-body">
                <div className="ph-card-title">{c.title}</div>
                <div className="tb-body ph-card-desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {step === 2 && (
          <div className="ph-bridge tb-anim">
            怎麼建一個可控的 AI 工作環境？
          </div>
        )}
      </div>
    </div>
  );
}
