import Link from "next/link";

export function PortfolioReturnLink() {
  return (
    <Link className="kuro-return-link" href="/">
      <span aria-hidden="true">←</span>
      Retour au portfolio
    </Link>
  );
}
