import "../../styles/tb-common.css";
import "./Methodology.css";
import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";

interface Props { step: number }

const CARDS = [
  { icon: "🧩", title: "結構先於執行", desc: "先定義 UC、OpenSpec，再讓 AI 動手。不要先跑再說。" },
  { icon: "🔁", title: "閉環可驗證",   desc: "每一步都有 Archive 回寫，不靠記憶，不靠印象。" },
  { icon: "🎯", title: "人決策 AI 執行", desc: "工程師是架構師，AI 是執行者。這個角色不能倒過來。" },
  { icon: "📋", title: "文件即程式",   desc: "CLAUDE.md 是第一個程式碼。沒有文件，就沒有 AI 的工作基礎。" },
];

export default function Methodology({ step }: Props) {
  const base = import.meta.env.BASE_URL;
  const imgs = [`${base}images/pmsa-roles.png`];
  const lb = useLightbox(imgs);

  const visible = (i: number) => {
    if (step === 0) return i < 2;
    if (step === 1) return i >= 2;
    if (step === 2) return true;
    return false;
  };

  return (
    <div className="tb-scene">
      <div className="tb-ch-header tb-anim" key={`h${step}`}>
        <div className="tb-ch-num">CH 08 · 工法心法</div>
        <h2 className="tb-h2">工法 × 心法 的威力</h2>
      </div>

      <div className="tb-content">
        {step < 3 && (
          <div className="mt-grid tb-anim" key={`g${step}`}>
            {CARDS.map((c, i) => (
              <div key={c.title} className={`tb-card mt-card${visible(i) ? " visible" : ""}`}>
                <span className="mt-card-icon">{c.icon}</span>
                <div className="mt-card-title">{c.title}</div>
                <div className="tb-body mt-card-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="tb-split tb-anim" key="s3">
            <div className="tb-split-text">
              <div className="mt-pmsa-title">AI 時代下的角色重構</div>
              <div className="mt-pmsa-list">
                {[
                  "PM：需求定義更精確，優先級判斷更關鍵",
                  "SA：架構決策責任更重，Harness 設計是核心",
                  "工程師：升格為架構師，AI 是執行手",
                  "各角色：責任邊界是「升級」，不是「取代」",
                ].map(t => (
                  <div key={t} className="tb-body mt-pmsa-point">▸ {t}</div>
                ))}
              </div>
            </div>
            <div className="tb-split-img">
              <ImgCard src={imgs[0]} label="PMSA 角色重構" onClick={() => lb.open(0)} />
            </div>
          </div>
        )}
      </div>

      <Lightbox images={imgs} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
    </div>
  );
}
