export function LedgerMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path d="M7 12h10M12 7v10" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}
