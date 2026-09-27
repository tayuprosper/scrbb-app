// The tilted "S" tile from the app's welcome screen, plus the wordmark
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`sb-logo${light ? " sb-logo--light" : ""}`} aria-label="Scrbb home">
      <span className="sb-logo__tile" aria-hidden="true">
        S
      </span>
      <span className="sb-logo__word">Scrbb</span>
    </a>
  );
}
