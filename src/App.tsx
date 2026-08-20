import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { CustomCursor } from './components/layout/CustomCursor';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { FeaturedSpotlight } from './components/work/FeaturedSpotlight';
import { ProjectGallery } from './components/work/ProjectGallery';
import { ProjectModal } from './components/work/ProjectModal';
import { Skills } from './components/skills/Skills';
import { Process } from './components/process/Process';
import { Stats } from './components/stats/Stats';
import { Services } from './components/services/Services';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';
import type { Project } from './data/projects';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const activeSection = useScrollSpy(
    ['work', 'about', 'services', 'skills', 'process', 'contact'],
    200
  );

  return (
    <div className="relative min-h-screen bg-background text-text-primary selection:bg-lime selection:text-black">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Floating Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Personal Introduction / Editorial About */}
        <About />

        {/* 3. Featured Flagship Spotlight (VoiceForge, Orion AI, AI Cyber HQ) */}
        <FeaturedSpotlight onSelectProject={setSelectedProject} />

        {/* 4. Complete Selected Work (All 15 Projects + Category Filtering) */}
        <ProjectGallery onSelectProject={setSelectedProject} />

        {/* 5. Skills & Tools Arsenal */}
        <Skills />

        {/* 6. 4-Step Process Timeline */}
        <Process />

        {/* 7. Grounded Project Statistics */}
        <Stats />

        {/* 8. Capabilities & Services */}
        <Services />

        {/* 9. Dramatic Contact Inquiry Terminal */}
        <Contact />
      </main>

      {/* 10. Minimal Editorial Footer */}
      <Footer />

      {/* Interactive Project Preview Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
