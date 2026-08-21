const ITEMS = [
  "Projeto personalizado",
  "Cozinhas",
  "Dormitórios",
  "Salas",
  "Home office",
  "Ambientes comerciais",
  "Montagem especializada",
];

export function MaterialStrip() {
  const repeatedItems = [...ITEMS, ...ITEMS];

  return (
    <div className="relative hidden overflow-hidden border-b border-ink/10 bg-cream py-4 text-ink sm:block">
      <div className="flex w-max animate-marquee gap-10">
        {repeatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/60 sm:text-[10px]"
          >
            {item}
            <span className="h-1.5 w-1.5 rotate-45 bg-wood" />
          </span>
        ))}
      </div>
    </div>
  );
}
