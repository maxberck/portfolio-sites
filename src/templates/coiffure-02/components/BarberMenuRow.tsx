import type { DistrictService } from "../types";

export function BarberMenuRow({ service }: { service: DistrictService }) {
  return (
    <article className="barber-menu-row">
      <span className="barber-menu-code">{service.code}</span>
      <div>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </div>
      <strong>{service.price}</strong>
    </article>
  );
}
