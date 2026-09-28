import Link from "next/link";

// The tilted "S" tile from the app's welcome screen, plus the wordmark
export default function Logo() {
  return (
    <Link href="/" className="sb-logo" aria-label="Scrbb home">
      <span className="sb-logo__tile" aria-hidden="true">
        S
      </span>
      <span className="sb-logo__word">Scrbb</span>
    </Link>
  );
}
