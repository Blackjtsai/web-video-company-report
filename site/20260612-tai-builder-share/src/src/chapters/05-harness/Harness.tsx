import "../../styles/tb-common.css";
import "./Harness.css";
import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";

interface Props { step: number }

const NODES = [
  { label: "Prompt",  desc: "單一提示詞，即時問答" },
  { label: "Context", desc: "給 AI 完整背景與規範" },
  { label: "Harness", desc: "結構化工作協作框架" },
];

export default function Harness({ step }: Props) {
  const base = import.meta.env.BASE_URL;
  const imgs = [`${base}images/harness-engineering.png`];
  const lb = useLightbox(imgs);
  const activeCount = step === 2 ? 2 : step >= 3 ? 3 : 0;

  return (
    <div className="tb-scene">
      <div className="tb-ch-header tb-anim" key={`h${step}`}>
        <div className="tb-ch-num">CH 05 · 思維躍進</div>
        <h2 className="tb-h2">從 Prompt 到 Harness</h2>
      </div>

      <div className="tb-content">
        {step === 0 && (
          <div className="hn-def-box tb-card tb-anim" key="s0">
            <span className="tb-label hn-def-label">定義</span>
            <div className="hn-def-text">
              Harness = 清楚、可控、可驗證的 AI 工作環境
            </div>
            <div className="tb-body">
              不是更好的 Prompt，而是一套開發協作框架。
            </div>
          </div>
        )}

        {(step === 1 || step === 2 || step === 3) && (
          <div className="hn-evolution tb-anim" key={`evo${step}`}>
            {NODES.map((n, i) => (
              <div key={n.label} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div className={`hn-evo-node${i < activeCount ? " active" : ""}`} style={{ flex: 1 }}>
                  <span className="tb-label hn-evo-num">Stage {i + 1}</span>
                  <div className="hn-evo-label">{n.label}</div>
                  <div className="tb-body hn-evo-desc">{n.desc}</div>
                </div>
                {i < 2 && <div className="hn-evo-arrow">→</div>}
              </div>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="tb-split tb-anim" key="s3" style={{ marginTop: 24 }}>
            <div className="tb-split-text">
              <div className="hn-img-title">Harness Engineering 的精髓</div>
              <div className="hn-img-list">
                {[
                  "有邊界——AI 知道能做什麼、不能做什麼",
                  "有規範——CLAUDE.md 是第一個程式碼",
                  "有驗證——每一步都可確認、可回溯",
                ].map(t => (
                  <div key={t} className="tb-body hn-img-item">▸ {t}</div>
                ))}
              </div>
            </div>
            <div className="tb-split-img">
              <ImgCard src={imgs[0]} label="Harness Engineering" onClick={() => lb.open(0)} />
            </div>
          </div>
        )}
      </div>

      <Lightbox images={imgs} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
    </div>
  );
}
