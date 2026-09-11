import { FlashSheet } from "../components/FlashSheet";
import { luckyFlashSheets } from "../data/site";

export function WorkPage() {
  return (
    <>
      <header className="lucky-page-intro lucky-page-intro--work">
        <span>Archive / XIII</span>
        <h1>FLASH BOOK</h1>
        <p className="lucky-page-intro__lede">Six fictional sheets presented like a working shop book: some broad, some narrow, some interrupted by process notes instead of a uniform gallery grid.</p>
      </header>

      <section className="lucky-work-book" aria-label="Lucky XIII flash sheets">
        {luckyFlashSheets.map((sheet, index) => (
          <FlashSheet
            key={sheet.id}
            sheet={sheet}
            variant={index % 3 === 0 ? "spread" : index % 2 === 0 ? "landscape" : "portrait"}
          />
        ))}
      </section>
    </>
  );
}
