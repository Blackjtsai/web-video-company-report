import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";
import type { ChapterStepProps } from "../../registry/types";
import "../../styles/pic-common.css";
import "./Ecosystem.css";

const B = import.meta.env.BASE_URL;
const IMGS = [
  B + "images/Eason-Style AI 協作框架解析.png",
  B + "images/Eason-Style AI 協作架構總覽.png",
];

const LAYERS = [
  { num: "01", name: "約束層", items: ["CLAUDE.md", "規範", "禁止事項"], desc: "讓 AI 不要亂做", color: "var(--rose)" },
  { num: "02", name: "工具層", items: ["TAI-Builder Skill", "任務工具"], desc: "讓 AI 有明確能力邊界", color: "var(--amber)" },
  { num: "03", name: "記憶層", items: ["UC", "架構藍圖", "文件"], desc: "讓 AI 有穩定系統背景", color: "var(--cyan)" },
  { num: "04", name: "回饋層", items: ["OpenSpec", "QA", "Archive"], desc: "讓結果可驗證、可回寫", color: "var(--green)" },
];

export default function EcosystemChapter({ step }: ChapterStepProps) {
  const lb = useLightbox(IMGS);
  return (
    <div className="ec-scene vd-scene">
      <Lightbox images={IMGS} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />

      {step === 0 && (
        <div className="ec-intro">
          <div className="vd-label ec-anim">CH 06 · 生態設計</div>
          <h2 className="vd-h1 ec-anim" style={{ animationDelay: "100ms" }}>
            工具只是刀，<br /><span className="vd-em-purple">生態</span>決定效果
          </h2>
          <div className="ec-layer-preview ec-anim" style={{ animationDelay: "300ms" }}>
            {LAYERS.map((l) => (
              <div key={l.num} className="ec-layer-chip" style={{ borderColor: l.color, color: l.color }}>
                {l.num} {l.name}
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="vd-split">
          <div className="vd-split-text">
            <div className="vd-label ec-anim">四層架構</div>
            <div className="ec-layer-list ec-anim" style={{ animationDelay: "100ms" }}>
              {LAYERS.map((l, i) => (
                <div key={l.num} className="ec-lrow ec-anim" style={{ animationDelay: `${150 + i * 100}ms` }}>
                  <div className="ec-lrow-num" style={{ color: l.color }}>{l.num}</div>
                  <div className="ec-lrow-body">
                    <div className="ec-lrow-name" style={{ color: l.color }}>{l.name}</div>
                    <div className="ec-lrow-desc">{l.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="vd-split-img ec-anim" style={{ animationDelay: "200ms" }}>
            <ImgCard src={IMGS[1]} label="架構總覽" onClick={() => lb.open(1)} />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="vd-split">
          <div className="vd-split-text">
            <div className="vd-label ec-anim">框架解析</div>
            <h2 className="vd-h2 ec-anim" style={{ animationDelay: "100ms" }}>
              <span className="vd-em-purple">Eason-Style</span> 核心心態 + TAI-Builder 矩陣
            </h2>
            <p className="vd-body ec-anim" style={{ animationDelay: "250ms" }}>
              核心心態是 Harness 的骨架，TAI-Builder 矩陣把每個協作角色的行動方式具體化。
            </p>
          </div>
          <div className="vd-split-img ec-anim" style={{ animationDelay: "200ms" }}>
            <ImgCard src={IMGS[0]} label="框架解析" onClick={() => lb.open(0)} />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="ec-principle">
          <div className="vd-label ec-anim">核心原則</div>
          <p className="ec-p-text ec-anim" style={{ animationDelay: "150ms" }}>
            <span className="vd-em-amber">Harness</span> 是骨架，<br />
            <span className="vd-em-purple">Eason-Style</span> 是肌肉
          </p>
          <p className="ec-p-sub ec-anim" style={{ animationDelay: "400ms" }}>
            AI 在裡面是執行者和加速器。<span className="vd-em-cyan">最後的決策，還是人。</span>
          </p>
        </div>
      )}
    </div>
  );
}
