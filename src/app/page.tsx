import Homepage from "@/pages/Homepage";
import Navbar from "@/components/Navbar";
import WorkSection from "@/pages/Work";
import Blog from "@/pages/Blog";
import Footer from "@/components/Footer";
import Services from "@/pages/Services";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Homepage />
      <Services />
      <WorkSection />
      <Blog />
      <Footer />
    </div>
  );
}
