interface TickerStripProps {
  text: string;
}

export function TickerStrip({ text }: TickerStripProps) {
  return (
    <div className="d88-ticker" aria-label={text}>
      <div className="d88-ticker__track" aria-hidden="true">
        <span>{text}</span><span>{text}</span><span>{text}</span><span>{text}</span>
      </div>
    </div>
  );
}
