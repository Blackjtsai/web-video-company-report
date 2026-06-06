import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";
import type { ChapterStepProps } from "../../registry/types";
import "../../styles/pic-common.css";
import "./Harness.css";

const B = import.meta.env.BASE_URL;
const IMGS = [
  B + "images/13-Eason-Style 與 Harness Engineering 解構.png",
  B + "images/14-Eason-Style AI協作工法解構圖.png",
  B + "images/TAI-Builder 協作流程簡易版.png",
];

const STAGES = [
  { label: "Prompt", sub: "怎麼問？", color: "var(--text-mute)", active: false },
  { label: "Context", sub: "給什麼背景？", color: "var(--text-mute)", active: false },
  { label: "Harness", sub: "設計工作環境", color: "var(--accent)", active: true },
];

export default function HarnessChapter({ step }: ChapterStepProps) {
  const lb = useLightbox(IMGS);
  return (
    <div className="hn-scene vd-scene">
      <Lightbox images={IMGS} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />

      {step === 0 && (
        <div className="hn-intro">
          <div className="vd-label hn-anim">CH 05 · 思路演進</div>
          <h2 className="vd-h1 hn-anim" style={{ animationDelay: "100ms" }}>
            從 <span className="vd-em-cyan">Prompt</span> 到 <span className="vd-em-purple">Harness</span>
          </h2>
          <div className="hn-axis hn-anim" style={{ animationDelay: "250ms" }}>
            {STAGES.map((s, i) => (
              <div key={s.label} className="hn-axis-item">
                <div className="hn-node vd-card" style={{ borderColor: s.active ? s.color : "var(--rule)", opacity: s.active ? 1 : 0.5 }}>
                  <div className="hn-node-label" style={{ color: s.color }}>{s.label}</div>
                  <div className="hn-node-sub">{s.sub}</div>
                </div>
                {i < 2 && <div className="hn-arr" style={{ color: s.active ? "var(--accent)" : "var(--text-faint)" }}>→</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="hn-detail">
          <div className="vd-label hn-anim">Harness 解構</div>
          <h2 className="vd-h2 hn-anim" style={{ animationDelay: "100ms" }}>
            <span className="vd-em-purple">骨架</span>（Harness）+<span className="vd-em-cyan"> 肌肉</span>（Eason-Style）
          </h2>
          <div className="vd-img-row">
            <ImgCard src={IMGS[0]} label="Harness Engineering 解構" onClick={() => lb.open(0)} delay={250} />
            <ImgCard src={IMGS[1]} label="Eason-Style 工法解構" onClick={() => lb.open(1)} delay={400} />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="vd-split">
          <div className="vd-split-text">
            <div className="vd-label hn-anim">協作流程</div>
            <h2 className="vd-h2 hn-anim" style={{ animationDelay: "100ms" }}>
              從 <span className="vd-em-green">設計</span> 到 <span className="vd-em-green">實作</span>，每步有依據
            </h2>
            <p className="vd-body hn-anim" style={{ animationDelay: "250ms" }}>
              TAI-Builder 流程簡易版：需求 → Spec → 任務拆解 → AI 執行 → Verify → Archive。
            </p>
          </div>
          <div className="vd-split-img hn-anim" style={{ animationDelay: "200ms" }}>
            <ImgCard src={IMGS[2]} label="TAI-Builder 協作流程簡易版" onClick={() => lb.open(2)} />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="hn-quote">
          <div className="vd-label hn-anim">結論</div>
          <p className="hn-q-text hn-anim" style={{ animationDelay: "150ms" }}>
            不是更好的 <span className="vd-em-cyan">Prompt</span>，<br />
            而是一套<span className="vd-em-purple">開發協作框架</span>
          </p>
          <div className="hn-def vd-card hn-anim" style={{ animationDelay: "450ms" }}>
            <div className="hn-def-label">Harness 定義</div>
            <div className="hn-def-text">清楚 · 可控 · 可驗證 的 AI 工作環境</div>
          </div>
        </div>
      )}
    </div>
  );
}
