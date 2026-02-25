import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <span className="flex items-center justify-center size-8 rounded-full bg-[var(--brand)] text-white text-sm font-bold">
        W
      </span>
      <span className="text-lg font-pixel tracking-tight uppercase group-hover:opacity-80">www</span>
    </Link>
  );
}
