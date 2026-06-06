import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";
import type { ChapterStepProps } from "../../registry/types";
import "../../styles/pic-common.css";
import "./FourThings.css";

const B = import.meta.env.BASE_URL;
const IMGS = [B + "images/11-AI 協作方法論流程圖.png", B + "images/15-AI 開發系統的未來藍圖.png"];

const THINGS = [
  { num: "01", title: "自己研究", color: "var(--accent)", tags: ["工具限制", "適用情境", "AI 協作可能性"] },
  { num: "02", title: "自己實作", color: "var(--cyan)",   tags: ["產品", "流程", "工具包"] },
  { num: "03", title: "自己踩坑", color: "var(--amber)",  tags: ["AI 有效處", "跑偏處", "要人確認處"] },
  { num: "04", title: "整理成包", color: "var(--green)",  tags: ["規範", "Skill", "流程", "文件模板"] },
];

export default function FourThingsChapter({ step }: ChapterStepProps) {
  const lb = useLightbox(IMGS);
  return (
    <div className="ft-scene vd-scene">
      <Lightbox images={IMGS} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />

      {step === 0 && (
        <div className="ft-intro">
          <div className="vd-label ft-anim">CH 03 · 我如何做</div>
          <h2 className="vd-h1 ft-anim" style={{ animationDelay: "100ms" }}>
            這半年，我先做了<br /><span className="vd-em-purple">四件事</span>
          </h2>
          <div className="ft-grid">
            {THINGS.map((t, i) => (
              <div key={t.num} className="ft-tile vd-card ft-anim" style={{ animationDelay: `${250 + i * 120}ms`, borderColor: t.color }}>
                <span className="ft-tile-num" style={{ color: t.color }}>{t.num}</span>
                <span className="ft-tile-title" style={{ color: t.color }}>{t.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {step >= 1 && step <= 3 && (() => {
        const t = THINGS[step - 1]!;
        const rest = THINGS.filter((_, i) => i !== step - 1);
        return (
          <div className="ft-expand">
            <div className="ft-sidebar">
              {rest.map(r => (
                <div key={r.num} className="ft-side-chip" style={{ color: r.color, borderColor: r.color }}>
                  {r.num} {r.title}
                </div>
              ))}
            </div>
            <div className="ft-detail vd-card" style={{ borderColor: t.color, boxShadow: `0 0 32px ${t.color}30` }}>
              <div className="ft-det-num" style={{ color: t.color }}>{t.num} / 04</div>
              <div className="ft-det-title" style={{ color: t.color }}>{t.title}</div>
              <div className="ft-det-tags">
                {t.tags.map((tg, i) => (
                  <span key={tg} className="ft-tag ft-anim" style={{ animationDelay: `${300 + i * 100}ms`, background: t.color + "22", color: t.color }}>{tg}</span>
                ))}
              </div>
            </div>
          </div>
        );
      })()}

      {step === 3 && (
        <div className="ft-imgs">
          <ImgCard src={IMGS[0]} label="方法論流程圖" onClick={() => lb.open(0)} delay={500} />
          <ImgCard src={IMGS[1]} label="未來藍圖" onClick={() => lb.open(1)} delay={660} />
        </div>
      )}
    </div>
  );
}
