import Link from "next/link";

import { districtCutSite } from "../src/data/site";

export function DistrictFooter() {
  return (
    <footer className="district-footer">
      <div>
        <strong>DISTRICT CUT</strong>
        <span>{districtCutSite.contact.address}</span>
      </div>
      <div className="district-footer-links">
        <a href={districtCutSite.contact.phoneHref}>{districtCutSite.contact.phone}</a>
        <a href={districtCutSite.contact.emailHref}>{districtCutSite.contact.email}</a>
        <Link href="/sites/coiffure-02/services">SERVICES</Link>
      </div>
      <small>{districtCutSite.demoDisclosure}</small>
    </footer>
  );
}
