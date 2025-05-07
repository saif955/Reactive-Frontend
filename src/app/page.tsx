import Homepage from "@/pages/Homepage";
import Navbar from "@/components/Navbar";
import WorkSection from "@/pages/Work";
import Blog from "@/pages/Blog";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Homepage />
      <WorkSection />
      <Blog />
    </div>
  );
}
