import "../../styles/tb-common.css";
import "./Hero.css";

interface Props { step: number }

export default function Hero({ step }: Props) {
  return (
    <div className="tb-scene-center">
      {step === 0 && (
        <div className="hr-hero tb-anim" key="s0">
          <span className="tb-label">TAI-Builder · 分享</span>
          <h1 className="tb-h1">面對 AI 協作<br />大環境</h1>
          <p className="tb-body hr-subtitle">一個課級主管的心態、工法與實戰成果</p>
          <p className="hr-meta">EasonTsai · 台灣大哥大 客服系統處 網站技術課 · 2026-06-12</p>
        </div>
      )}

      {step === 1 && (
        <div className="hr-quote-wrap tb-anim" key="s1">
          <p className="hr-quote-main">
            「AI 不會取代你，<br />善用 AI 的人會取代你。」
          </p>
          <p className="tb-body hr-center">
            一線主管每天回到課內，面對的問題只有一個：<br />
            <strong className="tb-em">明天到底怎麼落地？</strong>
          </p>
        </div>
      )}

      {step === 2 && (
        <div className="hr-env-wrap tb-anim" key="s2">
          <span className="tb-label hr-accent-label">大環境：架構已到位</span>
          <div className="hr-env-cards">
            {[
              { icon: "🏢", title: "集團 AI 政策", desc: "從上到下的指令已到位。" },
              { icon: "⚡", title: "ITG AI 小組",  desc: "跨部門推動進入軌道。"  },
              { icon: "💻", title: "AI Coding 分享", desc: "工具與工法已在推廣中。" },
            ].map(c => (
              <div key={c.title} className="tb-card hr-env-card">
                <span className="hr-env-icon">{c.icon}</span>
                <div className="tb-h3 hr-env-title">{c.title}</div>
                <div className="tb-body hr-card-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
