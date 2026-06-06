import "../../styles/tb-common.css";
import "./DocTsunami.css";
import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";

interface Props { step: number }

const DOCS = [
  { name: "OpenSpec",  desc: "AI 可讀規格書，定義任務邊界" },
  { name: "UC Document", desc: "Use Case 脈絡來源，提供上下文" },
  { name: "Archive",   desc: "知識回寫紀錄，讓結果沉澱" },
  { name: "CLAUDE.md", desc: "專案行為約束規範，第一個程式碼" },
];

const PIPELINE = ["Spec", "Context", "實作", "Verify", "Archive"];

export default function DocTsunami({ step }: Props) {
  const base = import.meta.env.BASE_URL;
  const imgs = [`${base}images/doc-tsunami.png`];
  const lb = useLightbox(imgs);

  return (
    <div className="tb-scene">
      <div className="tb-ch-header tb-anim" key={`h${step}`}>
        <div className="tb-ch-num">CH 09 · 文件海嘯</div>
        <h2 className="tb-h2">文件海嘯是 AI 協作的基礎建設</h2>
      </div>

      <div className="tb-content">
        {step === 0 && (
          <div className="tb-split tb-anim" key="s0">
            <div className="tb-split-text">
              <p className="dt-quote-big">你不寫文件，<br />AI 就靠猜。</p>
              <div className="tb-body dt-quote-sub">文件 = AI 的記憶與規範</div>
            </div>
            <div className="tb-split-img">
              <ImgCard src={imgs[0]} label="文件海嘯" onClick={() => lb.open(0)} />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="dt-grid tb-anim" key="s1">
            {DOCS.map(d => (
              <div key={d.name} className="tb-card dt-doc-card">
                <div className="dt-doc-name">{d.name}</div>
                <div className="tb-body dt-doc-desc">{d.desc}</div>
              </div>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="dt-pipeline tb-anim" key="s2">
            <div className="dt-pipeline-flow">
              {PIPELINE.map((p, i) => (
                <div key={p} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <div className={`dt-pipe-node${p === "Archive" ? " highlighted" : ""}`} style={{ flex: 1 }}>{p}</div>
                  {i < PIPELINE.length - 1 && <div className="dt-pipe-arrow">→</div>}
                </div>
              ))}
            </div>
            <div className="tb-body dt-pipeline-cta">
              這不是負擔，是<strong className="tb-em">基礎建設</strong>。<br />
              每一步都有文件，每一步都可驗證。
            </div>
          </div>
        )}
      </div>

      <Lightbox images={imgs} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
    </div>
  );
}
