import { ShopInfoBoard } from "../components/ShopInfoBoard";
import { luckySite } from "../data/site";

export function VisitPage() {
  return (
    <>
      <header className="lucky-page-intro lucky-page-intro--visit">
        <span>Practical / XIII</span>
        <h1>VISIT THE SHOP</h1>
        <p className="lucky-page-intro__lede">A storefront information board for a fictional Brussels tattoo shop: hours, address and contact details without a booking form or map embed.</p>
      </header>

      <ShopInfoBoard compact />

      <section className="lucky-visit-notes">
        <article>
          <span>Access</span>
          <h2>Before you come by</h2>
          <p>{luckySite.access}</p>
        </article>
        <article>
          <span>Reference material</span>
          <h2>Bring less, explain more.</h2>
          <p>A motif, rough scale and placement are enough to start a conversation. Existing flash in this demo is reference material, not live inventory.</p>
        </article>
        <article>
          <span>Demo disclosure</span>
          <h2>Not a live business.</h2>
          <p>{luckySite.contact.note}</p>
        </article>
      </section>
    </>
  );
}
