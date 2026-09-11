type WorkOrderProps = {
  label: string;
  value: string;
  tone?: "green" | "amber";
};

export function WorkOrder({ label, value, tone = "green" }: WorkOrderProps) {
  return (
    <div className={`tw-work-order tw-work-order--${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
