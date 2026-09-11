type ColorSwatchProps = {
  label: string;
  value: string;
};

export function ColorSwatch({ label, value }: ColorSwatchProps) {
  return (
    <span className="chrom-swatch">
      <i aria-hidden="true" style={{ background: value }} />
      <span>{label}</span>
    </span>
  );
}
