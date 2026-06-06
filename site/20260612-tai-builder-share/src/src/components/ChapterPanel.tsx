import type { ChapterDef } from "../registry/types";
import type { Cursor } from "../hooks/useStepper";
import "./ChapterPanel.css";

interface Props {
  chapters: ChapterDef[];
  cursor: Cursor;
  onJumpChapter(idx: number): void;
}

export function ChapterPanel({ chapters, cursor, onJumpChapter }: Props) {
  return (
    <nav className="cp-panel" data-no-advance>
      <div className="cp-header">CHAPTERS</div>
      {chapters.map((ch, i) => {
        const isActive = i === cursor.chapter;
        const total = ch.narrations.length;
        return (
          <button
            key={ch.id}
            className={`cp-item${isActive ? " cp-item--active" : ""}`}
            onClick={() => onJumpChapter(i)}
            data-no-advance
          >
            {/* 縮圖方塊 */}
            <div className="cp-thumb">
              <span className="cp-thumb-num">{String(i + 1).padStart(2, "0")}</span>
            </div>

            {/* 文字區 */}
            <div className="cp-body">
              <div className="cp-title">{ch.title}</div>
              <div className="cp-meta">
                {isActive
                  ? `${cursor.step + 1} / ${total}`
                  : `${total} steps`}
              </div>
              {isActive && (
                <div className="cp-dots">
                  {Array.from({ length: total }, (_, s) => (
                    <span
                      key={s}
                      className={`cp-dot${s <= cursor.step ? " cp-dot--on" : ""}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </button>
        );
      })}
    </nav>
  );
}
