import type { CSSProperties } from "react";
import "./ImgCard.css";

interface Props {
  src: string;
  label?: string;
  onClick(): void;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export function ImgCard({ src, label, onClick, delay = 0, className, style }: Props) {
  return (
    <div
      className={["ic-card", className].filter(Boolean).join(" ")}
      style={{ animationDelay: `${delay}ms`, ...style }}
      onClick={onClick}
      data-no-advance
      title="點擊放大"
    >
      <img className="ic-thumb" src={src} alt={label ?? ""} draggable={false} />
      <div className="ic-overlay">
        <span className="ic-zoom">⊕</span>
        {label && <span className="ic-label">{label}</span>}
      </div>
    </div>
  );
}
