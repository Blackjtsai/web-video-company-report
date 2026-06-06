import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";
import type { ChapterStepProps } from "../../registry/types";
import "../../styles/pic-common.css";
import "./Phenomena.css";

const B = import.meta.env.BASE_URL;
const IMGS = [
  B + "images/AI最大風險與隱藏之冰山.png",
  B + "images/AI風險：看不見的問題.png",
  B + "images/AI風險與開發速度的陷阱.png",
];

const PHENOMENA = [
  {
    num: "01", color: "var(--amber)", title: "工具一直換",
    items: ["今天 Claude Code", "明天 Cursor", "後天又是另一套"],
    key: "追工具不是核心——工具會換，工作方式可以沉澱",
  },
  {
    num: "02", color: "var(--rose)", title: "瓶頸在工作方式",
    items: ["需求沒整理好", "文件沒有結構", "PM SA SD 說法不同", "AI 不知道聽誰的"],
    key: "工作方式沒整理好，AI 只會放大混亂",
  },
  {
    num: "03", color: "var(--cyan)", title: "能力差距被放大",
    items: ["強的用 AI 後更強", "本來混亂的更混亂", "問題拆解 / 架構判斷 / 驗證"],
    key: "AI 需要被放進可控的工作環境",
  },
];

export default function PhenomenaChapter({ step }: ChapterStepProps) {
  const lb = useLightbox(IMGS);
  return (
    <div className="ph-scene vd-scene">
      <Lightbox images={IMGS} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />

      {step === 0 && (
        <div className="ph-intro">
          <div className="vd-label ph-anim">CH 04 · 觀察</div>
          <h2 className="vd-h1 ph-anim" style={{ animationDelay: "100ms" }}>
            有三個現象<br /><span className="vd-em-amber">印象最深</span>
          </h2>
          <div className="ph-circles">
            {PHENOMENA.map((p, i) => (
              <div key={p.num} className="ph-circle vd-card ph-anim" style={{ animationDelay: `${250 + i * 150}ms`, borderColor: p.color }}>
                <span className="ph-circle-num" style={{ color: p.color }}>{p.num}</span>
                <span className="ph-circle-title" style={{ color: p.color }}>{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {step >= 1 && step <= 3 && (() => {
        const p = PHENOMENA[step - 1]!;
        const imgIdx = step - 1;
        return (
          <div className="ph-expand">
            <div className="ph-left">
              <div className="ph-num ph-anim" style={{ color: p.color }}>{p.num} / 03</div>
              <div className="ph-title ph-anim" style={{ animationDelay: "100ms", color: p.color }}>{p.title}</div>
              <div className="ph-items">
                {p.items.map((item, i) => (
                  <div key={item} className="ph-item ph-anim" style={{ animationDelay: `${200 + i * 110}ms` }}>
                    <div className="ph-dot" style={{ background: p.color }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="ph-key ph-anim" style={{ animationDelay: `${200 + p.items.length * 110 + 100}ms`, borderColor: p.color }}>
                {p.key}
              </div>
            </div>
            <div className="ph-right">
              <ImgCard src={IMGS[imgIdx]} label={p.title} onClick={() => lb.open(imgIdx)} delay={300} />
            </div>
          </div>
        );
      })()}
    </div>
  );
}
