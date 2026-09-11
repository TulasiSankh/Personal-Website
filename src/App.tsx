import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Snapshot from '@/components/Snapshot';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fafbfc] text-navy-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Snapshot />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
