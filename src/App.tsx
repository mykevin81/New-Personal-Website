import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-terracotta selection:text-paper font-sans overflow-x-hidden">
      {/* Subtle grain overlay for texture */}
      <div
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
      

      <main>
        <Hero />
        <About />
        <Experience />
      </main>

      <Footer />
    </div>);

}