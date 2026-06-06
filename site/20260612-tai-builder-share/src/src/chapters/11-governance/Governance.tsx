import "../../styles/tb-common.css";
import "./Governance.css";

interface Props { step: number }

const CHALLENGES = [
  { icon: "🔒", title: "環境與系統架構", desc: "排除兩組現有底層環境的落差" },
  { icon: "⚙️", title: "部署方式調整",   desc: "調整 CI/CD 流程以適應 AI 協作生態" },
  { icon: "💡", title: "專業技能 Skillset", desc: "對接成員既有技術與 AI 工具所需技能" },
  { icon: "🧠", title: "心態轉變 Mindset", desc: "進行深度溝通，符合未來協作生態" },
];

export default function Governance({ step }: Props) {
  return (
    <div className="tb-scene">
      <div className="tb-ch-header tb-anim" key={`h${step}`}>
        <div className="tb-ch-num">CH 11 · 治理挑戰</div>
        <h2 className="tb-h2">從點到面：16 人團隊的治理挑戰</h2>
      </div>

      <div className="tb-content">
        {step === 0 && (
          <div className="gv-intro tb-anim" key="s0">
            <div className="tb-label">轉折點</div>
            <div className="gv-intro-title">
              EBG 小組拿到 <span className="tb-em">6.3x</span> 的驚人實績之後，<br />
              下一個挑戰是什麼？
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="gv-story tb-anim" key="s1">
            <p className="tb-body">
              在 EBG 小組（領頭羊）透過 TAI-Builder 架構拿到 <strong className="tb-em">6.3x</strong> 的驚人實績後，
              我們面對的下一個挑戰，是如何將這個成功經驗，
              複製到負責 Portal 系統任務的另一個核心——<strong className="tb-em">CBG 小組</strong>。
            </p>
            <p className="tb-body">
              而這，並不是把同一套工具直接複製貼上那麼簡單。
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="gv-challenges tb-anim" key="s2">
            {CHALLENGES.map((c, i) => (
              <div key={c.title} className="tb-card gv-challenge" style={{ animationDelay: `${i * 80}ms` }}>
                <span className="gv-challenge-icon">{c.icon}</span>
                <div className="gv-challenge-title">{c.title}</div>
                <div className="tb-body gv-challenge-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
