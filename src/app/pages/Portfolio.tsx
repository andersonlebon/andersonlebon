import { Navbar } from '../components/portfolio/Navbar';
import { Hero } from '../components/portfolio/Hero';
import { About } from '../components/portfolio/About';
import { TechStack } from '../components/portfolio/TechStack';
import { Experience } from '../components/portfolio/Experience';
import { Projects } from '../components/portfolio/Projects';
import { GitHubActivity } from '../components/portfolio/GitHubActivity';
import { Contact } from '../components/portfolio/Contact';
import { Footer } from '../components/portfolio/Footer';
import { AIExpertiseBanner } from '../components/portfolio/AIExpertiseBanner';
import { SEO } from '../components/SEO';

export function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <SEO />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <AIExpertiseBanner />
      <Experience />
      <TechStack />
      <GitHubActivity />
      <Contact />
      <Footer />
    </div>
  );
}