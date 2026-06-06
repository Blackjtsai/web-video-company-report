import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";
import type { ChapterStepProps } from "../../registry/types";
import "../../styles/pic-common.css";
import "./Mindset.css";

const B = import.meta.env.BASE_URL;
const IMGS = [B + "images/內功外功.png", B + "images/AI 協作的內外功比較.png"];

export default function MindsetChapter({ step }: ChapterStepProps) {
  const lb = useLightbox(IMGS);
  return (
    <div className="ms-scene vd-scene">
      <Lightbox images={IMGS} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />

      {step === 0 && (
        <div className="ms-intro">
          <div className="vd-label ms-anim">CH 02 · 心態定位</div>
          <h2 className="vd-h1 ms-anim" style={{ animationDelay: "100ms" }}>
            <span className="vd-em-cyan">工具</span>只是外功<br />
            <span className="vd-em-purple">心法</span>才是內功
          </h2>
          <div className="ms-principles">
            {[
              { color: "var(--cyan)", text: "低姿態" },
              { color: "var(--green)", text: "實戰觀察" },
              { color: "var(--amber)", text: "主管視角" },
            ].map((p, i) => (
              <div key={p.text} className="ms-pill ms-anim" style={{ animationDelay: `${300 + i * 120}ms`, borderColor: p.color, color: p.color }}>
                {p.text}
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="ms-inner-outer">
          <div className="vd-label ms-anim">內功 vs 外功</div>
          <div className="ms-split">
            <div className="ms-box vd-card ms-anim" style={{ animationDelay: "150ms", borderColor: "var(--accent)" }}>
              <div className="ms-box-icon">🧠</div>
              <div className="ms-box-title" style={{ color: "var(--accent)" }}>內功</div>
              <div className="ms-box-items">
                {["問題拆解能力", "架構判斷", "驗證判斷", "協作心態", "SOP 設計"].map(t => (
                  <div key={t} className="ms-item">· {t}</div>
                ))}
              </div>
            </div>
            <div className="ms-vs">先內<br />後外</div>
            <div className="ms-box vd-card ms-anim" style={{ animationDelay: "300ms", borderColor: "var(--cyan)" }}>
              <div className="ms-box-icon">⚙️</div>
              <div className="ms-box-title" style={{ color: "var(--cyan)" }}>外功</div>
              <div className="ms-box-items">
                {["Claude Code", "Cursor", "ChatGPT", "Gemini", "MCP / Skills"].map(t => (
                  <div key={t} className="ms-item">· {t}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="vd-img-row" style={{ marginTop: 8 }}>
            <ImgCard src={IMGS[0]} label="內功外功" onClick={() => lb.open(0)} delay={400} />
            <ImgCard src={IMGS[1]} label="比較分析" onClick={() => lb.open(1)} delay={560} />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="ms-quote">
          <div className="vd-label ms-anim">核心原則</div>
          <p className="ms-q-text ms-anim" style={{ animationDelay: "150ms" }}>
            <span className="vd-em-green">先做出成果，</span><br />再談推廣。
          </p>
          <p className="ms-q-sub ms-anim" style={{ animationDelay: "450ms" }}>
            工具會換，但<span className="vd-em-cyan">工作方式可以沉澱</span>
          </p>
        </div>
      )}
    </div>
  );
}
