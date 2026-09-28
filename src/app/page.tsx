import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LessonPath from "@/components/LessonPath";
import LessonAnatomy from "@/components/LessonAnatomy";
import BuiltForHere from "@/components/BuiltForHere";
import Courses from "@/components/Courses";
import Plans from "@/components/Plans";
import Faq from "@/components/Faq";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

// scrbb-app.site/
export default function HomePage() {
  return (
    <div className="sb-page">
      <Nav />
      <main>
        <Hero />
        <LessonPath />
        <LessonAnatomy />
        <BuiltForHere />
        <Courses />
        <Plans />
        <Faq />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
