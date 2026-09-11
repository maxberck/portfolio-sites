import Link from "next/link";

import { formStudioSite } from "../src/data/site";

export function FormFooter() {
  return (
    <footer className="form-footer">
      <div>
        <strong>FORM STUDIO</strong>
        <span>{formStudioSite.business.descriptor}</span>
      </div>
      <div className="form-footer-links">
        <Link href="/sites/coiffure-03/services">SERVICES</Link>
        <Link href="/sites/coiffure-03/work">WORK</Link>
        <Link href="/sites/coiffure-03/contact">CONTACT</Link>
      </div>
      <p>{formStudioSite.demoDisclosure}</p>
    </footer>
  );
}
