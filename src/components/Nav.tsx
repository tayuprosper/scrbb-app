import { IoLogoAndroid } from "react-icons/io5";
import { DOWNLOAD } from "@/lib/site";
import Logo from "./Logo";

const LINKS = [
  { href: "/#how", label: "How it works" },
  { href: "/courses", label: "Courses" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sb-nav">
      <div className="sb-wrap sb-nav__inner">
        <Logo />
        <nav className="sb-nav__links" aria-label="Main">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="sb-nav__cta" href={DOWNLOAD.apkUrl} download>
          <IoLogoAndroid aria-hidden="true" />
          Download
        </a>
      </div>
    </header>
  );
}
