import ScrollyCanvas from "@/components/ui/ScrollyCanvas";
import Overlay from "@/components/ui/Overlay";
import Projects from "@/components/ui/Projects";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      {/* Scroll Container */}
      <div className="relative h-[700vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas />
          <Overlay />
        </div>
      </div>

      {/* Content below scroll */}
      <Projects />

      {/* Footer */}
      <Footer />
    </main>
  );
}
