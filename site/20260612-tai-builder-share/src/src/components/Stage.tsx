import type { ReactNode } from "react";

interface Props {
  onAdvance(): void;
  children: ReactNode;
  sidebar?: ReactNode;
}

export function Stage({ onAdvance, children, sidebar }: Props) {
  return (
    <div className="app-shell">
      {sidebar}
      <div
        className="stage-frame"
        onClick={(e) => {
          const t = e.target as HTMLElement;
          if (t.closest("button, a, input, [data-no-advance]")) return;
          onAdvance();
        }}
      >
        {children}
      </div>
    </div>
  );
}
