import "../../styles/tb-common.css";
import "./Mindset.css";
import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";

interface Props { step: number }

const INNER = ["問題拆解能力", "架構判斷", "驗證判斷", "協作心態", "SOP 設計"];
const OUTER = ["Claude Code", "Cursor", "ChatGPT", "Gemini", "MCP / Skills"];

export default function Mindset({ step }: Props) {
  const base = import.meta.env.BASE_URL;
  const imgs = [`${base}images/inner-outer.png`];
  const lb = useLightbox(imgs);

  return (
    <div className="tb-scene">
      <div className="tb-ch-header tb-anim" key={`h${step}`}>
        <div className="tb-ch-num">CH 02 · 心態定位</div>
        <h2 className="tb-h2">工具只是外功，心法才是內功</h2>
      </div>

      <div className="tb-content">
        {step === 0 && (
          <div className="ms-intro tb-anim" key="s0">
            <p className="ms-core-title">先做出成果，<br />再談推廣。</p>
            <p className="tb-body">
              工具會換，但工作方式可以沉澱。<br />
              內功是你真正的資產——外功只是當下手邊的刀。
            </p>
          </div>
        )}

        {step === 1 && (
          <div className="tb-split tb-anim" key="s1">
            <div className="tb-split-img" style={{ justifyContent: "flex-start" }}>
              <ImgCard src={imgs[0]} label="內功 vs 外功" onClick={() => lb.open(0)} />
            </div>
            <div className="ms-compare">
              <div className="ms-col ms-col--inner">
                <div className="ms-col-header">
                  <span className="ms-col-label">🧠 內功 — 思考與沉澱</span>
                </div>
                <div className="ms-items">
                  {INNER.map(t => <div key={t} className="ms-item">{t}</div>)}
                </div>
              </div>
              <div className="ms-col ms-col--outer">
                <div className="ms-col-header">
                  <span className="ms-col-label">🔧 外功 — 隨時可換的工具</span>
                </div>
                <div className="ms-items">
                  {OUTER.map(t => <div key={t} className="ms-item">{t}</div>)}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="ms-golden tb-anim" key="s2">
            <p className="ms-core-title">先做出成果，再談推廣。</p>
            <p className="tb-body ms-center">
              工具會換，但工作方式沉澱下來，才是真正的資產。
            </p>
          </div>
        )}
      </div>

      <Lightbox images={imgs} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
    </div>
  );
}
