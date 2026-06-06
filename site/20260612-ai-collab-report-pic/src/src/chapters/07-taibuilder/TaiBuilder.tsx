import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";
import type { ChapterStepProps } from "../../registry/types";
import "../../styles/pic-common.css";
import "./TaiBuilder.css";

const B = import.meta.env.BASE_URL;
const IMGS = [
  B + "images/TAI-Builder 協作流程圖.png",
  B + "images/TAI-Builder AI SDLC 完整循環圖01.png",
  B + "images/AI 協作模式比較：傳統 vs. TAI-Builder.png",
  B + "images/2026 T-Builder Core 系統架構圖.png",
];

const LOOP_STEPS = [
  { label: "Think", sub: "思考與設計", color: "var(--accent)" },
  { label: "Act", sub: "執行與實作", color: "var(--cyan)" },
  { label: "Inspect", sub: "檢查與驗證", color: "var(--green)" },
];

export default function TaiBuilderChapter({ step }: ChapterStepProps) {
  const lb = useLightbox(IMGS);
  return (
    <div className="tb-scene vd-scene">
      <Lightbox images={IMGS} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />

      {step === 0 && (
        <div className="tb-intro">
          <div className="vd-label tb-anim">CH 07 · 協作閉環</div>
          <h2 className="vd-h1 tb-anim" style={{ animationDelay: "100ms" }}>
            <span className="vd-em-purple">TAI-Builder</span> 協作閉環
          </h2>
          <div className="tb-loop tb-anim" style={{ animationDelay: "300ms" }}>
            {LOOP_STEPS.map((s, i) => (
              <div key={s.label} className="tb-loop-item">
                <div className="tb-loop-node vd-card" style={{ borderColor: s.color }}>
                  <div className="tb-loop-label" style={{ color: s.color }}>{s.label}</div>
                  <div className="tb-loop-sub">{s.sub}</div>
                </div>
                {i < LOOP_STEPS.length - 1 && <div className="tb-loop-arr" style={{ color: s.color }}>↓</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="vd-split">
          <div className="vd-split-text">
            <div className="vd-label tb-anim">協作流程</div>
            <h2 className="vd-h2 tb-anim" style={{ animationDelay: "100ms" }}>
              從 <span className="vd-em-cyan">需求</span> 到 <span className="vd-em-green">交付</span>，每步都可追溯
            </h2>
            <p className="vd-body tb-anim" style={{ animationDelay: "250ms" }}>
              TAI-Builder 定義了從 UC 文件到 OpenSpec、從 AI 實作到 Archive 回寫的完整流程，讓每個步驟都有依據、可驗證。
            </p>
          </div>
          <div className="vd-split-img tb-anim" style={{ animationDelay: "200ms" }}>
            <ImgCard src={IMGS[0]} label="TAI-Builder 協作流程圖" onClick={() => lb.open(0)} />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="vd-split">
          <div className="vd-split-text">
            <div className="vd-label tb-anim">SDLC 完整循環</div>
            <h2 className="vd-h2 tb-anim" style={{ animationDelay: "100ms" }}>
              <span className="vd-em-purple">AI</span> 介入每一個開發節點
            </h2>
            <p className="vd-body tb-anim" style={{ animationDelay: "250ms" }}>
              從 Spec → 實作 → 測試 → 部署，AI 不只是寫 code 的工具，而是每個 SDLC 節點的協作夥伴。
            </p>
          </div>
          <div className="vd-split-img tb-anim" style={{ animationDelay: "200ms" }}>
            <ImgCard src={IMGS[1]} label="TAI-Builder AI SDLC 完整循環" onClick={() => lb.open(1)} />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="vd-split">
          <div className="vd-split-text">
            <div className="vd-label tb-anim">模式比較</div>
            <h2 className="vd-h2 tb-anim" style={{ animationDelay: "100ms" }}>
              <span className="vd-em-rose">傳統模式</span> vs. <span className="vd-em-green">TAI-Builder</span>
            </h2>
            <p className="vd-body tb-anim" style={{ animationDelay: "250ms" }}>
              傳統模式：人→指令→AI→輸出。TAI-Builder：結構文件→Harness→AI 閉環→可驗證交付。品質差距一目瞭然。
            </p>
          </div>
          <div className="vd-split-img tb-anim" style={{ animationDelay: "200ms" }}>
            <ImgCard src={IMGS[2]} label="協作模式比較" onClick={() => lb.open(2)} />
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="vd-split">
          <div className="vd-split-text">
            <div className="vd-label tb-anim">系統架構</div>
            <h2 className="vd-h2 tb-anim" style={{ animationDelay: "100ms" }}>
              2026 <span className="vd-em-purple">TAI-Builder Core</span> 系統架構圖
            </h2>
            <p className="vd-body tb-anim" style={{ animationDelay: "250ms" }}>
              從 Harness 骨架到 Eason-Style 肌肉，整個 Core 系統的完整架構鳥瞰。這是我們正在建的東西。
            </p>
          </div>
          <div className="vd-split-img tb-anim" style={{ animationDelay: "200ms" }}>
            <ImgCard src={IMGS[3]} label="2026 TAI-Builder Core 系統架構圖" onClick={() => lb.open(3)} />
          </div>
        </div>
      )}
    </div>
  );
}
