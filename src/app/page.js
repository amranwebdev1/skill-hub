import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import Hero from "./_components/Hero";
import BatchCard from "./_components/BatchCard";
import Outcomes from "./_components/Outcomes";
import Syllabus from "./_components/Syllabus";
import Instructor from "./_components/Instructor";
import Admission from "./_components/Admission";
import Reviews from "./_components/Reviews";
import Faq from "./_components/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BatchCard />
        <Outcomes />
        <Syllabus />
        <Instructor />
        <Admission />
        <Reviews />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
