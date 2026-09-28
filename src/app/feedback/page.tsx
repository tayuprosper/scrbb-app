import type { Metadata } from "next";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FeedbackForm from "@/components/FeedbackForm";
import "@/styles/feedback.css";

export const metadata: Metadata = {
  title: "Send feedback",
  description: "Tell the Scrbb team what you think: ideas, problems and courses you'd like to see.",
  alternates: { canonical: "/feedback" },
};

// scrbb-app.site/feedback
export default function FeedbackPage() {
  return (
    <div className="sb-page">
      <Nav />
      <main className="sb-fb">
        <div className="sb-wrap sb-fb__inner">
          <Link className="sb-fb__back" href="/">
            <IoArrowBack aria-hidden="true" />
            Back to home
          </Link>
          <FeedbackForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
