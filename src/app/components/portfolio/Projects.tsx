import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Project, usePortfolio } from '../../context/PortfolioContext';

function ProjectLinks({ project, compact = false }: { project: Project; compact?: boolean }) {
  const linkClass = compact
    ? 'flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors'
    : 'inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#F5C518]/30 text-[#F5C518] text-sm hover:bg-[#F5C518]/10 transition-all';

  return (
    <div className="flex items-center gap-3">
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={compact ? linkClass : `${linkClass} text-gray-300 border-white/15 hover:text-white hover:border-white/30`}>
          <Github size={compact ? 14 : 16} />
          Code
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={compact ? 'flex items-center gap-1.5 text-xs text-[#F5C518] hover:text-[#DEBA15] transition-colors' : linkClass}
        >
          <ExternalLink size={compact ? 14 : 16} />
          Live site
        </a>
      )}
    </div>
  );
}

function TechTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tech) => (
        <span
          key={tech}
          className="px-2.5 py-1 text-xs rounded-md bg-[#F5C518]/8 border border-[#F5C518]/20 text-[#F5C518]/80"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export function Projects() {
  const { projects } = usePortfolio();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const featured = projects.find((project) => project.featured) || projects[0];
  const rest = projects.filter((project) => project.id !== featured?.id);

  return (
    <section id="projects" className="py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[700px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(245,197,24,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#F5C518] mb-3 tracking-widest uppercase">Portfolio</p>
          <div className="w-12 h-0.5 bg-[#F5C518] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
            Featured projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Production work from public repositories, live deployments, and public-safe summaries of larger private products.
          </p>
        </motion.div>

        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-10 rounded-2xl overflow-hidden bg-white/[0.02] border border-[#F5C518]/25"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[260px] lg:min-h-[420px] overflow-hidden">
                <img src={featured.imageUrl} alt={featured.title} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent lg:bg-gradient-to-r" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-xs text-[#F5C518] tracking-widest uppercase mb-3">Flagship case study</p>
                <h3 className="text-white text-2xl md:text-3xl mb-4" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
                  {featured.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">{featured.description}</p>
                <div className="mb-6">
                  <TechTags tags={featured.techStack} />
                </div>
                <ProjectLinks project={featured} />
              </div>
            </div>
          </motion.article>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.07] hover:border-[#F5C518]/30 transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white" style={{ fontSize: '1rem', fontWeight: 600 }}>
                    {project.title}
                  </h3>
                  <ArrowUpRight size={16} className="text-gray-600 group-hover:text-[#F5C518] transition-colors shrink-0 ml-2" />
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="mb-5">
                  <TechTags tags={project.techStack} />
                </div>

                <div className="pt-3 border-t border-white/5">
                  <ProjectLinks project={project} compact />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
