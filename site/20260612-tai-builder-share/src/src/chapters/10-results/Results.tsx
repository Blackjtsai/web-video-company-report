import "../../styles/tb-common.css";
import "./Results.css";
import { ImgCard } from "../../components/ImgCard";
import { Lightbox } from "../../components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";

interface Props { step: number }

const BIG_NUMS = [
  { num: "421.5h", label: "累積節省工時" },
  { num: "6.3x",   label: "平均加速倍數" },
  { num: "84.3%",  label: "工時節省率" },
  { num: "973%",   label: "時間效益 ROI" },
];

const BARS = [
  { label: "系統公告列表", newW: 12, mult: "8.5x" },
  { label: "告警通知",     newW: 20, mult: "5x" },
  { label: "資費查詢",     newW: 20, mult: "5x" },
  { label: "整體平均",     newW: 16, mult: "6.3x" },
];

export default function Results({ step }: Props) {
  const base = import.meta.env.BASE_URL;
  const imgs = [`${base}images/ai-maturity.png`];
  const lb = useLightbox(imgs);

  return (
    <div className="tb-scene">
      <div className="tb-ch-header tb-anim" key={`h${step}`}>
        <div className="tb-ch-num">CH 10 · 實測成果</div>
        <h2 className="tb-h2">數字說話：EBG 實戰成果</h2>
      </div>

      <div className="tb-content">
        {step === 0 && (
          <div className="rs-intro tb-anim" key="s0">
            <div className="tb-label rs-intro-label">EBG 小組 · 真實開發數據</div>
            <div className="rs-intro-title">數字說話。</div>
          </div>
        )}

        {step === 1 && (
          <div className="rs-nums tb-anim" key="s1">
            {BIG_NUMS.map(n => (
              <div key={n.num} className="tb-card rs-num-card">
                <div className="rs-big-num">{n.num}</div>
                <div className="tb-label rs-num-label">{n.label}</div>
              </div>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="rs-barchart tb-anim" key="s2">
            <div className="tb-label rs-chart-title">工時實測比較（灰：傳統 / 橘：AI 協作）</div>
            {BARS.map(b => (
              <div key={b.label} className="rs-bar-row">
                <div className="rs-bar-label">{b.label}</div>
                <div className="rs-bar-wrap">
                  <div className="rs-bar rs-bar--old" />
                  <div className="rs-bar rs-bar--new" style={{ width: `${b.newW}%` }} />
                </div>
                <div className="rs-bar-mult">{b.mult}</div>
              </div>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="tb-split tb-anim" key="s3">
            <div className="tb-split-text">
              <div className="rs-maturity-title">AI 協作成熟度爬升曲線</div>
              <div className="tb-body">
                2025 Q3 → 2026/05<br /><br />
                Prompt 能力、Harness 設計、系統思維——三條曲線持續爬升。
              </div>
            </div>
            <div className="tb-split-img">
              <ImgCard src={imgs[0]} label="AI 協作成熟度" onClick={() => lb.open(0)} />
            </div>
          </div>
        )}
      </div>

      <Lightbox images={imgs} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
    </div>
  );
}
