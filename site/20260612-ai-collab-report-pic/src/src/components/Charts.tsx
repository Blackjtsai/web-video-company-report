/* ─── Pure SVG chart components — no external deps ─── */

/* ════════════════════════════════════
   HorizontalBarChart
   ════════════════════════════════════ */
interface BarRow {
  label: string;
  traditional: number;
  ai: number;
  multiplier: string;
}

interface HBarProps {
  rows: BarRow[];
  maxVal: number;
}

export function HorizontalBarChart({ rows, maxVal }: HBarProps) {
  const rowH = 52;
  const labelW = 220;
  const barAreaW = 560;
  const totalW = labelW + barAreaW + 80;
  const totalH = rows.length * rowH + 40;

  return (
    <svg viewBox={`0 0 ${totalW} ${totalH}`} style={{ width: "100%", height: "auto" }}>
      {/* header */}
      <text x={labelW} y={16} fontSize={11} fill="#94A3B8" fontFamily="monospace">傳統工時</text>
      <text x={labelW + barAreaW * 0.45} y={16} fontSize={11} fill="#94A3B8" fontFamily="monospace">AI 協作</text>

      {rows.map((row, i) => {
        const y = 28 + i * rowH;
        const tradW = (row.traditional / maxVal) * barAreaW * 0.85;
        const aiW = (row.ai / maxVal) * barAreaW * 0.85;
        return (
          <g key={i}>
            {/* label */}
            <text x={labelW - 12} y={y + 16} fontSize={12} fill="#CBD5E1"
              fontFamily="Noto Sans SC, sans-serif" textAnchor="end">{row.label}</text>
            {/* traditional bar */}
            <rect x={labelW} y={y + 2} width={tradW} height={16} rx={4}
              fill="rgba(99,102,241,0.4)" />
            <text x={labelW + tradW + 6} y={y + 14} fontSize={11} fill="#6366F1" fontFamily="monospace">
              {row.traditional}m
            </text>
            {/* ai bar */}
            <rect x={labelW} y={y + 24} width={aiW} height={12} rx={4}
              fill="rgba(16,185,129,0.7)" />
            <text x={labelW + aiW + 6} y={y + 34} fontSize={11} fill="#10B981" fontFamily="monospace">
              {row.ai}m
            </text>
            {/* multiplier badge */}
            <text x={totalW - 8} y={y + 20} fontSize={13} fill="#F59E0B"
              fontFamily="monospace" textAnchor="end" fontWeight="700">
              {row.multiplier}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ════════════════════════════════════
   DonutChart (pie)
   ════════════════════════════════════ */
interface DonutProps {
  pct: number;         // 0–100
  label: string;
  sublabel: string;
  color: string;
  bg: string;
}

export function DonutChart({ pct, label, sublabel, color, bg }: DonutProps) {
  const r = 80;
  const stroke = 18;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  const gap = circ - dash;
  const cx = 110;
  const cy = 110;

  return (
    <svg viewBox="0 0 220 220" style={{ width: 220, height: 220, flexShrink: 0 }}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={bg} strokeWidth={stroke} />
      <circle
        cx={cx} cy={cy} r={r} fill="none"
        stroke={color} strokeWidth={stroke}
        strokeDasharray={`${dash} ${gap}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition: "stroke-dasharray 1s ease" }}
      />
      <text x={cx} y={cy - 10} textAnchor="middle" fontSize={32} fontWeight="900"
        fill={color} fontFamily="monospace">{pct}%</text>
      <text x={cx} y={cy + 16} textAnchor="middle" fontSize={13} fill="#F1F5F9"
        fontFamily="Noto Sans SC, sans-serif">{label}</text>
      <text x={cx} y={cy + 34} textAnchor="middle" fontSize={11} fill="#94A3B8"
        fontFamily="Noto Sans SC, sans-serif">{sublabel}</text>
    </svg>
  );
}

/* ════════════════════════════════════
   LineChart (maturity trend)
   ════════════════════════════════════ */
interface LineSeries {
  label: string;
  color: string;
  values: number[];   // 0–100, one per X point
}

interface LineProps {
  series: LineSeries[];
  xLabels: string[];
}

export function LineChart({ series, xLabels }: LineProps) {
  const w = 700;
  const h = 300;
  const padL = 44;
  const padR = 24;
  const padT = 52; // room for legend at top
  const padB = 36;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const xStep = innerW / (xLabels.length - 1);

  const px = (i: number) => padL + i * xStep;
  const py = (v: number) => padT + innerH - (v / 100) * innerH;

  const yTicks = [0, 25, 50, 75, 100];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: "auto" }}>
      {/* legend — top row */}
      {series.map((s, i) => (
        <g key={s.label} transform={`translate(${padL + i * 148}, 8)`}>
          <circle cx={7} cy={7} r={5} fill={s.color} />
          <text x={16} y={12} fontSize={13} fill="#CBD5E1"
            fontFamily="Noto Sans SC, sans-serif" fontWeight="600">{s.label}</text>
        </g>
      ))}

      {/* grid lines */}
      {yTicks.map((t) => (
        <g key={t}>
          <line x1={padL} y1={py(t)} x2={w - padR} y2={py(t)}
            stroke="rgba(255,255,255,0.07)" strokeWidth={1} />
          <text x={padL - 8} y={py(t) + 4} fontSize={11} fill="#64748B"
            fontFamily="monospace" textAnchor="end">{t}</text>
        </g>
      ))}

      {/* x labels */}
      {xLabels.map((l, i) => (
        <text key={i} x={px(i)} y={h - 4} fontSize={12} fill="#94A3B8"
          fontFamily="Noto Sans SC, sans-serif" textAnchor="middle">{l}</text>
      ))}

      {/* series lines + dots */}
      {series.map((s) => {
        const pts = s.values.map((v, i) => `${px(i)},${py(v)}`).join(" ");
        return (
          <g key={s.label}>
            <polyline points={pts} fill="none" stroke={s.color} strokeWidth={3}
              strokeLinejoin="round" strokeLinecap="round"
              style={{ filter: `drop-shadow(0 0 5px ${s.color})` }} />
            {s.values.map((v, i) => (
              <circle key={i} cx={px(i)} cy={py(v)} r={5} fill={s.color}
                stroke="#0D1326" strokeWidth={2} />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

/* ════════════════════════════════════
   MaturityBar — horizontal % bars
   ════════════════════════════════════ */
interface MBarRow { label: string; pct: number; color: string; }
interface MBarProps { rows: MBarRow[]; }

export function MaturityBars({ rows }: MBarProps) {
  return (
    <div className="mb-wrap">
      {rows.map((r) => (
        <div key={r.label} className="mb-row">
          <div className="mb-label">{r.label}</div>
          <div className="mb-track">
            <div className="mb-fill" style={{ width: `${r.pct}%`, background: r.color }} />
          </div>
          <div className="mb-pct" style={{ color: r.color }}>{r.pct}%</div>
        </div>
      ))}
    </div>
  );
}
