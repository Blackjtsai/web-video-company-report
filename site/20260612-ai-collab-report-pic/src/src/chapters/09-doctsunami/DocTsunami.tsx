import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";
import type { ChapterStepProps } from "../../registry/types";
import "../../styles/pic-common.css";
import "./DocTsunami.css";

const B = import.meta.env.BASE_URL;
const IMGS = [
  B + "images/文件海嘯.png",
  B + "images/TAI-Builder協作模型概覽.png",
  B + "images/TAI-Builder協作模型流程圖.png",
];

const WAVE_ITEMS = [
  { label: "OpenSpec", desc: "每個功能的 AI 可讀規格書", color: "var(--accent)" },
  { label: "UC Document", desc: "Use Case 文件，Context 來源", color: "var(--cyan)" },
  { label: "Archive", desc: "執行紀錄，知識回寫", color: "var(--green)" },
  { label: "CLAUDE.md", desc: "專案規範，約束 AI 行為", color: "var(--amber)" },
];

export default function DocTsunamiChapter({ step }: ChapterStepProps) {
  const lb = useLightbox(IMGS);
  return (
    <div className="dt-scene vd-scene">
      <Lightbox images={IMGS} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />

      {step === 0 && (
        <div className="dt-intro">
          <div className="vd-label dt-anim">CH 09 · 文件海嘯</div>
          <h2 className="vd-h1 dt-anim" style={{ animationDelay: "100ms" }}>
            <span className="vd-em-rose">文件海嘯</span> 是<br />AI 協作的基礎建設
          </h2>
          <p className="vd-body dt-anim" style={{ animationDelay: "250ms", maxWidth: 600 }}>
            你不寫文件，AI 就靠猜。<br />
            <span className="vd-em-cyan">文件 = AI 的記憶與規範。</span>
          </p>
        </div>
      )}

      {step === 1 && (
        <div className="vd-split">
          <div className="vd-split-text">
            <div className="vd-label dt-anim">四種核心文件</div>
            <h2 className="vd-h2 dt-anim" style={{ animationDelay: "80ms" }}>
              文件不是負擔，<br /><span className="vd-em-cyan">是 AI 的燃料</span>
            </h2>
            <div className="dt-types dt-anim" style={{ animationDelay: "200ms" }}>
              {WAVE_ITEMS.map((w) => (
                <div key={w.label} className="dt-type-chip" style={{ borderColor: w.color, color: w.color }}>
                  <span className="dt-chip-label">{w.label}</span>
                  <span className="dt-chip-desc">{w.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="vd-split-img dt-anim" style={{ animationDelay: "200ms" }}>
            <ImgCard src={IMGS[0]} label="文件海嘯" onClick={() => lb.open(0)} />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="vd-split">
          <div className="vd-split-text">
            <div className="vd-label dt-anim">協作模型概覽</div>
            <h2 className="vd-h2 dt-anim" style={{ animationDelay: "100ms" }}>
              <span className="vd-em-purple">TAI-Builder</span> 協作模型全貌
            </h2>
            <p className="vd-body dt-anim" style={{ animationDelay: "250ms" }}>
              五大步驟環環相扣：Spec → Context → 實作 → Verify → Archive。每一步都有對應文件支撐。
            </p>
          </div>
          <div className="vd-split-img dt-anim" style={{ animationDelay: "200ms" }}>
            <ImgCard src={IMGS[1]} label="TAI-Builder 協作模型概覽" onClick={() => lb.open(1)} />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="vd-split">
          <div className="vd-split-text">
            <div className="vd-label dt-anim">協作模型流程</div>
            <h2 className="vd-h2 dt-anim" style={{ animationDelay: "100ms" }}>
              文件驅動 <span className="vd-em-purple">→</span> AI 執行 <span className="vd-em-purple">→</span> Archive 回寫
            </h2>
            <p className="vd-body dt-anim" style={{ animationDelay: "250ms" }}>
              這個閉環讓知識不會流失，讓 AI 每次都站在前人的肩膀上工作。
            </p>
          </div>
          <div className="vd-split-img dt-anim" style={{ animationDelay: "200ms" }}>
            <ImgCard src={IMGS[2]} label="TAI-Builder 協作模型流程圖" onClick={() => lb.open(2)} />
          </div>
        </div>
      )}
    </div>
  );
}
