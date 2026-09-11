import type { FormService } from "../types";

export function ServiceRow({ service }: { service: FormService }) {
  return (
    <div className="form-service-row">
      <span className="form-service-code">{service.code}</span>
      <strong>{service.name}</strong>
      <p>{service.description}</p>
      <span className="form-service-duration">{service.duration ?? "—"}</span>
    </div>
  );
}
