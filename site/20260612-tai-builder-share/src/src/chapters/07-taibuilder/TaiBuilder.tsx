import "../../styles/tb-common.css";
import "./TaiBuilder.css";
import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";

interface Props { step: number }

export default function TaiBuilder({ step }: Props) {
  const base = import.meta.env.BASE_URL;
  const imgs = [
    `${base}images/tai-builder-flow-simple.png`,
    `${base}images/traditional-vs-taibuilder.png`,
  ];
  const lb = useLightbox(imgs);

  const isThinkActive   = step === 1;
  const isActActive     = step === 2;
  const isInspectActive = step === 2;

  return (
    <div className="tb-scene">
      <div className="tb-ch-header tb-anim" key={`h${step}`}>
        <div className="tb-ch-num">CH 07 · TAI-Builder 協作閉環</div>
        <h2 className="tb-h2">TAI-Builder 協作閉環</h2>
      </div>

      <div className="tbi-content">
        {/* Step 0 — loop diagram 全覽 + 簡易流程圖 */}
        {step === 0 && (
          <div className="tbi-split tb-anim" key="s0">
            <div className="tbi-loop">
              <div className="tbi-loop-circle">
                <div className="tbi-loop-center">Think<br />Act<br />Inspect</div>
                <LoopNode label="Think" emoji="🧠" pos="think" active={false} />
                <LoopNode label="Act"   emoji="⚙️" pos="act"   active={false} />
                <LoopNode label="Inspect" emoji="✅" pos="inspect" active={false} />
              </div>
            </div>
            <div className="tbi-flow-img">
              <ImgCard src={imgs[0]} label="TAI-Builder 協作流程簡易版" onClick={() => lb.open(0)} />
            </div>
          </div>
        )}

        {/* Step 1 — Think highlight */}
        {step === 1 && (
          <div className="tbi-split tb-anim" key="s1">
            <div className="tbi-loop">
              <div className="tbi-loop-circle">
                <div className="tbi-loop-center">Think<br />Act<br />Inspect</div>
                <LoopNode label="Think" emoji="🧠" pos="think" active={isThinkActive} />
                <LoopNode label="Act"   emoji="⚙️" pos="act"   active={false} />
                <LoopNode label="Inspect" emoji="✅" pos="inspect" active={false} />
              </div>
            </div>
            <div className="tbi-detail">
              <div className="tbi-detail-node tb-card-accent">
                <div className="tbi-detail-title">🧠 Think — 思考與設計</div>
                <div className="tb-body">
                  定義需求、設計架構、建立規格文件。<br />
                  這是人做的部分——AI 不能替代這一步。
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 — Act + Inspect */}
        {step === 2 && (
          <div className="tbi-split tb-anim" key="s2">
            <div className="tbi-loop">
              <div className="tbi-loop-circle">
                <div className="tbi-loop-center">Think<br />Act<br />Inspect</div>
                <LoopNode label="Think" emoji="🧠" pos="think" active={false} />
                <LoopNode label="Act"   emoji="⚙️" pos="act"   active={isActActive} />
                <LoopNode label="Inspect" emoji="✅" pos="inspect" active={isInspectActive} />
              </div>
            </div>
            <div className="tbi-detail">
              <div className="tbi-detail-node tb-card-accent">
                <div className="tbi-detail-title">⚙️ Act — 執行與實作</div>
                <div className="tb-body">AI 根據規格動手做。</div>
              </div>
              <div className="tbi-detail-node tb-card-accent">
                <div className="tbi-detail-title">✅ Inspect — 檢查與驗證</div>
                <div className="tb-body">人確認輸出符合預期，Archive 回寫，閉環完成。</div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3 — 對比圖 */}
        {step === 3 && (
          <div className="tbi-split tb-anim" key="s3">
            <div className="tbi-flow-img tbi-flow-img--left">
              <ImgCard src={imgs[1]} label="傳統 vs TAI-Builder" onClick={() => lb.open(1)} />
            </div>
            <div className="tbi-compare">
              {[
                { cls: "tbi-compare-cell--old", header: "傳統模式", chain: "人 → 指令 → AI → 輸出" },
                { cls: "tbi-compare-cell--new", header: "TAI-Builder", chain: <><span className="tb-em">結構文件</span> → <span className="tb-em">Harness</span> → AI 閉環 → <span className="tb-em">可驗證交付</span></> },
              ].map((c) => (
                <div key={c.header} className={`tbi-compare-cell ${c.cls}`}>
                  <div className="tb-label tbi-compare-header">{c.header}</div>
                  <div className="tb-body tbi-compare-chain">{c.chain}</div>
                </div>
              ))}
              <div className="tb-body" style={{ color: "var(--text-mute)", marginTop: 16 }}>
                差別在於：每一步都有依據，每一步都能回溯。
              </div>
            </div>
          </div>
        )}
      </div>

      <Lightbox images={imgs} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
    </div>
  );
}

function LoopNode({ label, emoji, pos, active }: { label: string; emoji: string; pos: string; active: boolean }) {
  return (
    <div className={`tbi-loop-node tbi-loop-node--${pos}${active ? " active" : ""}`}>
      <div className="tbi-loop-dot">{emoji}</div>
      <span className="tbi-loop-label">{label}</span>
    </div>
  );
}
