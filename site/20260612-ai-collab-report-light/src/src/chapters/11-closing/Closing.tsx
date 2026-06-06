import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";
import type { ChapterStepProps } from "../../registry/types";
import "../../styles/pic-common.css";
import "./Closing.css";

const B = import.meta.env.BASE_URL;
const IMGS = [
  B + "images/現在在哪-下一步.png",
  B + "images/AI 協作設計全景圖.png",
];

const NEXTS = [
  { label: "全團隊 Onboarding", sub: "讓每個人都能使用 Harness", color: "var(--accent)" },
  { label: "OpenSpec 標準化", sub: "統一格式，進入 Archive", color: "var(--cyan)" },
  { label: "TAI-Builder 2.0", sub: "加入 QA 自動化閉環", color: "var(--green)" },
  { label: "成熟度里程碑", sub: "Q3 達到 Level 3 生產部署", color: "var(--amber)" },
];

export default function ClosingChapter({ step }: ChapterStepProps) {
  const lb = useLightbox(IMGS);
  return (
    <div className="cl-scene vd-scene">
      <Lightbox images={IMGS} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />

      {step === 0 && (
        <div className="vd-split">
          <div className="vd-split-text">
            <div className="vd-label cl-anim">CH 11 · 下一步</div>
            <h2 className="vd-h2 cl-anim" style={{ animationDelay: "100ms" }}>
              我們現在<span className="vd-em-cyan">在哪？</span><br />
              下一步<span className="vd-em-green">往哪走？</span>
            </h2>
            <p className="vd-body cl-anim" style={{ animationDelay: "250ms" }}>
              半年的積累讓我們從 0 到 Level 2。接下來的目標是把這套工法推廣到整個團隊。
            </p>
          </div>
          <div className="vd-split-img cl-anim" style={{ animationDelay: "200ms" }}>
            <ImgCard src={IMGS[0]} label="現在在哪-下一步" onClick={() => lb.open(0)} />
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="cl-nexts">
          <div className="vd-label cl-anim">路線圖</div>
          <div className="cl-next-grid">
            {NEXTS.map((n, i) => (
              <div key={n.label} className="cl-next-card vd-card cl-anim" style={{ animationDelay: `${150 + i * 100}ms`, borderColor: n.color + "55" }}>
                <div className="cl-next-num" style={{ color: n.color }}>{String(i + 1).padStart(2, "0")}</div>
                <div className="cl-next-label" style={{ color: n.color }}>{n.label}</div>
                <div className="cl-next-sub">{n.sub}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="vd-split">
          <div className="vd-split-text">
            <div className="vd-label cl-anim">全景圖</div>
            <h2 className="vd-h2 cl-anim" style={{ animationDelay: "100ms" }}>
              <span className="vd-em-purple">AI 協作</span><br />設計全景
            </h2>
            <p className="vd-body cl-anim" style={{ animationDelay: "250ms" }}>
              從大環境到落地，<br />這是完整藍圖。
            </p>
          </div>
          <div className="vd-split-img cl-anim" style={{ animationDelay: "200ms" }}>
            <ImgCard src={IMGS[1]} label="AI 協作設計全景圖" onClick={() => lb.open(1)} />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="cl-final">
          <div className="vd-label cl-anim">結語</div>
          <p className="cl-final-text cl-anim" style={{ animationDelay: "150ms" }}>
            AI 不會取代你，<br />
            <span className="vd-em-purple">善用 AI 的人</span>會取代你。
          </p>
          <p className="cl-final-sub cl-anim" style={{ animationDelay: "450ms" }}>
            謝謝大家。Q&A 時間
          </p>
          <div className="cl-name cl-anim" style={{ animationDelay: "650ms" }}>
            <span className="vd-em-cyan">EasonTsai</span>
            <span className="cl-dept"> · 台灣大哥大 客服系統處 網站技術課</span>
          </div>
        </div>
      )}
    </div>
  );
}
