import { LuckyImage } from "./LuckyImage";
import type { LuckyFlashSheet } from "../types";

type FlashSheetProps = {
  sheet: LuckyFlashSheet;
  variant?: "portrait" | "landscape" | "spread";
};

export function FlashSheet({ sheet, variant = "portrait" }: FlashSheetProps) {
  return (
    <article className={`lucky-flash-sheet lucky-flash-sheet--${variant}`} id={sheet.id}>
      <div className="lucky-flash-sheet__stamp" aria-hidden="true">XIII</div>
      <div className="lucky-flash-sheet__heading">
        <span>Sheet {sheet.number}</span>
        <h2>{sheet.title}</h2>
      </div>
      <div className="lucky-flash-sheet__media">
        <LuckyImage asset={sheet.image} sizes={variant === "landscape" ? "(max-width: 760px) 100vw, 70vw" : "(max-width: 760px) 100vw, 42vw"} />
        {sheet.detailImage ? (
          <LuckyImage asset={sheet.detailImage} className="lucky-flash-sheet__detail" sizes="(max-width: 760px) 42vw, 22vw" />
        ) : null}
      </div>
      <div className="lucky-flash-sheet__footer">
        <p className="lucky-flash-sheet__note">{sheet.note}</p>
        <div className="lucky-flash-sheet__meta">
          <span>{sheet.artist}</span>
          <span>{sheet.availability}</span>
        </div>
      </div>
    </article>
  );
}
