import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";
import type { ChapterStepProps } from "../../registry/types";
import "../../styles/pic-common.css";
import "./Environment.css";

const B = import.meta.env.BASE_URL;
const IMGS = [
  B + "images/SDLC被重新定義.png",
  B + "images/AI 時代下的 SDLC 角色重構.png",
];

export default function EnvironmentChapter({ step }: ChapterStepProps) {
  const lb = useLightbox(IMGS);

  return (
    <div className="ev-scene vd-scene">
      <Lightbox images={IMGS} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />

      {step === 0 && (
        <div className="ev-hero">
          <div className="vd-badge">2026 · 06 · 12 &nbsp;·&nbsp; 台灣大哥大 客服系統處</div>
          <h1 className="vd-h1">面對 AI 協作<br /><span className="vd-em-purple">大環境</span></h1>
          <p className="ev-sub">一個課級主管的心態、工法與實戰成果<br />EasonTsai &nbsp;·&nbsp; 網站技術課</p>
        </div>
      )}

      {step === 1 && (
        <div className="ev-env">
          <div className="vd-label ev-anim">大環境在動</div>
          <h2 className="vd-h2 ev-anim" style={{ animationDelay: "100ms" }}>
            公司方向<span className="vd-em-cyan">已經很清楚</span>
          </h2>
          <div className="ev-cards">
            {[
              { icon: "🏢", label: "集團 AI 政策", desc: "從上到下的指令已到位" },
              { icon: "⚡", label: "ITG AI 小組",  desc: "跨部門推動進入軌道" },
              { icon: "💻", label: "AI Coding 分享", desc: "工具與工法已在推廣中" },
            ].map((t, i) => (
              <div key={t.label} className="ev-card vd-card" style={{ animationDelay: `${200 + i * 150}ms` }}>
                <div className="ev-icon">{t.icon}</div>
                <div className="ev-card-name">{t.label}</div>
                <div className="vd-body ev-card-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="ev-question">
          <div className="vd-label ev-anim">但是…</div>
          <p className="ev-q-lead ev-anim" style={{ animationDelay: "100ms" }}>
            一線主管每天回到課內，<br />面對的問題只有一個：
          </p>
          <p className="ev-q-big ev-anim" style={{ animationDelay: "350ms" }}>
            <span className="vd-em-amber">明天到底怎麼落地？</span>
          </p>
        </div>
      )}

      {step === 3 && (
        <div className="ev-sdlc">
          <div className="vd-label ev-anim">SDLC 被重構</div>
          <h2 className="vd-h2 ev-anim" style={{ animationDelay: "100ms" }}>
            每個角色的工作方式<span className="vd-em-purple">都在改變</span>
          </h2>
          <div className="vd-img-row" style={{ animationDelay: "300ms", animation: "vd-rise 500ms ease both" }}>
            <ImgCard src={IMGS[0]} label="SDLC 被重新定義" onClick={() => lb.open(0)} delay={200} />
            <ImgCard src={IMGS[1]} label="SDLC 角色重構" onClick={() => lb.open(1)} delay={380} />
          </div>
        </div>
      )}
    </div>
  );
}
