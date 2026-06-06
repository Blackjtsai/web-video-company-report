import "../../styles/tb-common.css";
import "./Ecosystem.css";
import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";

interface Props { step: number }

const LAYERS = [
  { num: "04", name: "回饋層", tech: "OpenSpec / QA / Archive", desc: "讓結果可驗證、可回寫" },
  { num: "03", name: "記憶層", tech: "UC / 架構藍圖 / 文件",   desc: "讓 AI 有穩定系統背景" },
  { num: "02", name: "工具層", tech: "TAI-Builder Skill",       desc: "讓 AI 有明確能力邊界" },
  { num: "01", name: "約束層", tech: "CLAUDE.md",               desc: "規範與禁止事項，讓 AI 不亂做" },
];

export default function Ecosystem({ step }: Props) {
  const base = import.meta.env.BASE_URL;
  const imgs = [`${base}images/ecosystem-overview.png`];
  const lb = useLightbox(imgs);

  const getVisible = (idx: number) => {
    if (step === 1) return idx >= 2;
    if (step >= 2) return true;
    return false;
  };

  return (
    <div className="tb-scene">
      <div className="tb-ch-header tb-anim" key={`h${step}`}>
        <div className="tb-ch-num">CH 06 · 生態設計</div>
        <h2 className="tb-h2">工具只是刀，生態決定效果</h2>
      </div>

      <div className="ec-content">
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
          {step > 0 && (
            <div className="ec-layers tb-anim" key={`l${step}`}>
              {LAYERS.map((l, i) => (
                <div
                  key={l.num}
                  className={`ec-layer${getVisible(i) ? " visible" : " ec-layer--dim"}`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="ec-layer-num">{l.num}</div>
                  <div className="ec-layer-body">
                    <div className="ec-layer-name">{l.name}</div>
                    <div className="ec-layer-tech tb-label">{l.tech}</div>
                    <div className="ec-layer-desc tb-body">{l.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {step === 3 && (
            <p className="ec-conclusion tb-anim">
              <strong>Harness</strong> 是骨架，<strong>Eason-Style</strong> 是肌肉。AI 是執行者，最後的決策還是人。
            </p>
          )}
        </div>

        {step === 3 && (
          <div className="ec-img tb-anim" key="img">
            <ImgCard src={imgs[0]} label="Eason-Style 架構總覽" onClick={() => lb.open(0)} />
          </div>
        )}
      </div>

      <Lightbox images={imgs} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
    </div>
  );
}
