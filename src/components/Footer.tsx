import Link from "next/link";
import { CONTACT } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="sb-footer">
      <div className="sb-wrap sb-footer__inner">
        <div>
          <Logo />
          <p>Practical skills for life and work in Cameroon.</p>
        </div>
        <nav className="sb-footer__links" aria-label="Footer">
          <a href="/#how">How it works</a>
          <a href="/courses">Courses</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#faq">FAQ</a>
          <Link href="/feedback">Send feedback</Link>
          {CONTACT.email && <a href={`mailto:${CONTACT.email}`}>Email us</a>}
          {CONTACT.whatsapp && (
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          )}
        </nav>
      </div>
      <div className="sb-wrap sb-footer__base">© {new Date().getFullYear()} Scrbb</div>
    </footer>
  );
}
