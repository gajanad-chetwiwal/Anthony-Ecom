export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden py-2">
      <div className="animate-marquee flex w-max items-center gap-3">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap rounded-full border border-line bg-card px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-volt/70" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
