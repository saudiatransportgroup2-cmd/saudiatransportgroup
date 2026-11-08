/** Text wordmark with a simple geometric mark. Swap for the real logo when supplied. */
export function Logo({ name, dark }: { name: string; dark?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <svg viewBox="0 0 40 40" className="size-10 shrink-0" aria-hidden>
        <rect width="40" height="40" rx="10" fill="#b8964e" />
        <path d="M9 26 L15 14 H25 L31 26 Z" fill="none" stroke="#0a1a33" strokeWidth="2.4" strokeLinejoin="round" />
        <circle cx="15" cy="28" r="2.6" fill="#0a1a33" />
        <circle cx="25" cy="28" r="2.6" fill="#0a1a33" />
      </svg>
      <span className={`min-w-0 truncate text-[15px] font-semibold leading-tight tracking-tight max-[380px]:text-[13px] ${dark ? "text-navy-900" : "text-white"}`}>
        {name}
      </span>
    </span>
  );
}
