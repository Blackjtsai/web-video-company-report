import { useEffect } from "react";
import "./Lightbox.css";

interface Props {
  images: string[];       // all images in this chapter
  index: number;          // currently open index, -1 = closed
  onClose(): void;
  onPrev(): void;
  onNext(): void;
}

export function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  const open = index >= 0 && index < images.length;

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  return (
    <div className="lb-overlay" onClick={onClose} data-no-advance>
      <div className="lb-frame" onClick={(e) => e.stopPropagation()}>
        <button className="lb-close" onClick={onClose}>✕</button>
        {images.length > 1 && (
          <button className="lb-nav lb-nav-prev" onClick={onPrev}>‹</button>
        )}
        <img
          className="lb-img"
          src={images[index]}
          alt=""
          draggable={false}
        />
        {images.length > 1 && (
          <button className="lb-nav lb-nav-next" onClick={onNext}>›</button>
        )}
        {images.length > 1 && (
          <div className="lb-dots">
            {images.map((_, i) => (
              <span key={i} className={`lb-dot ${i === index ? "lb-dot-active" : ""}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
