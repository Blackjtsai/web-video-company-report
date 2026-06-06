import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";
import type { ChapterStepProps } from "../../registry/types";
import "../../styles/pic-common.css";
import "./Methodology.css";

const B = import.meta.env.BASE_URL;
const IMGS = [
  B + "images/12-AI 協作流程優缺點圖解.png",
  B + "images/AI 時代下的 PMSA 角色重構.png",
];

const PRINCIPLES = [
  { icon: "🧩", title: "結構先於執行", desc: "先定義 UC、OpenSpec，再讓 AI 動手" },
  { icon: "🔁", title: "閉環可驗證", desc: "每一步都有 Archive 回寫，不靠記憶" },
  { icon: "🎯", title: "人決策 AI 執行", desc: "工程師是架構師，AI 是執行者" },
  { icon: "📋", title: "文件即程式", desc: "CLAUDE.md 是第一個程式碼" },
];

export default function MethodologyChapter({ step }: ChapterStepProps) {
  const lb = useLightbox(IMGS);
  return (
    <div className="mt-scene vd-scene">
      <Lightbox images={IMGS} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />

      {step === 0 && (
        <div className="mt-intro">
          <div className="vd-label mt-anim">CH 08 · 工法心法</div>
          <h2 className="vd-h1 mt-anim" style={{ animationDelay: "100ms" }}>
            <span className="vd-em-purple">工法</span> × <span className="vd-em-cyan">心法</span>
          </h2>
          <p className="vd-body mt-anim" style={{ animationDelay: "250ms", maxWidth: 640 }}>
            工法是 SOP，心法是心態。<br />
            沒有心法的工法只是複製貼上。
          </p>
        </div>
      )}

      {step === 1 && (
        <div className="mt-principles">
          <div className="vd-label mt-anim">四大心法</div>
          <div className="mt-grid">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className="mt-card vd-card mt-anim" style={{ animationDelay: `${150 + i * 100}ms` }}>
                <div className="mt-icon">{p.icon}</div>
                <div className="mt-title">{p.title}</div>
                <div className="mt-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="vd-split">
          <div className="vd-split-text">
            <div className="vd-label mt-anim">工法解析</div>
            <h2 className="vd-h2 mt-anim" style={{ animationDelay: "100ms" }}>
              AI 協作流程的<br /><span className="vd-em-amber">優缺點</span>完整梳理
            </h2>
            <p className="vd-body mt-anim" style={{ animationDelay: "250ms" }}>
              知道優點才能放大，知道缺點才能預防。這張圖是我們半年踩坑後的整理。
            </p>
          </div>
          <div className="vd-split-img mt-anim" style={{ animationDelay: "200ms" }}>
            <ImgCard src={IMGS[0]} label="協作流程優缺點圖解" onClick={() => lb.open(0)} />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="vd-split">
          <div className="vd-split-text">
            <div className="vd-label mt-anim">角色重構</div>
            <h2 className="vd-h2 mt-anim" style={{ animationDelay: "100ms" }}>
              AI 時代下的 <span className="vd-em-cyan">PMSA</span> 角色重構
            </h2>
            <p className="vd-body mt-anim" style={{ animationDelay: "250ms" }}>
              PM / SA / Dev 各角色在 AI 時代的責任邊界重新定義。不是取代，是升級。
            </p>
          </div>
          <div className="vd-split-img mt-anim" style={{ animationDelay: "200ms" }}>
            <ImgCard src={IMGS[1]} label="PMSA 角色重構" onClick={() => lb.open(1)} />
          </div>
        </div>
      )}
    </div>
  );
}
