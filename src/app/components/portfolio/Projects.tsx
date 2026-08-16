import { useRef } from 'react';
import { Link } from 'react-router';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { Github, ExternalLink, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Project, usePortfolio } from '../../context/PortfolioContext';

function ProjectLinks({ project, compact = false }: { project: Project; compact?: boolean }) {
  const linkClass = compact
    ? 'flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]'
    : 'inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#F5C518]/30 text-[#F5C518] text-sm hover:bg-[#F5C518]/10 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5C518]';

  return (
    <div className="flex items-center gap-3">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={compact ? linkClass : `${linkClass} text-gray-300 border-white/15 hover:text-white hover:border-white/30`}
        >
          <Github size={compact ? 14 : 16} aria-hidden="true" />
          Code
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={compact ? 'flex items-center gap-1.5 text-xs text-[#F5C518] hover:text-[#DEBA15] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]' : linkClass}
        >
          <ExternalLink size={compact ? 14 : 16} aria-hidden="true" />
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

function CaseField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-widest text-[#F5C518]/80 mb-1">{label}</p>
      <p className="text-sm text-gray-400 leading-relaxed">{value}</p>
    </div>
  );
}

export function Projects() {
  const { projects } = usePortfolio();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const featured = projects.find((project) => project.featured) || projects[0];
  const rest = projects.filter((project) => project.id !== featured?.id);

  return (
    <section id="projects" className="py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[700px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(245,197,24,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
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
            initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.1 }}
            className="mb-10 rounded-2xl overflow-hidden bg-white/[0.02] border border-[#F5C518]/25"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[260px] lg:min-h-[420px] overflow-hidden">
                <img
                  src={featured.imageUrl}
                  alt={`Screenshot of ${featured.title}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent lg:bg-gradient-to-r" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-xs text-[#F5C518] tracking-widest uppercase mb-3">Flagship case study</p>
                <h3 className="text-white text-2xl md:text-3xl mb-2" style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}>
                  {featured.title}
                </h3>
                <p className="text-xs text-gray-500 mb-4">{featured.role}</p>
                <p className="text-gray-400 leading-relaxed mb-6">{featured.description}</p>
                <div className="space-y-4 mb-6">
                  <CaseField label="Problem" value={featured.problem} />
                  <CaseField label="Contribution" value={featured.contribution} />
                  <CaseField label="Outcome" value={featured.outcome} />
                </div>
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
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.15 + i * 0.08 }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.07] hover:border-[#F5C518]/30 transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-white" style={{ fontSize: '1rem', fontWeight: 600 }}>
                    {project.title}
                  </h3>
                  <ArrowUpRight size={16} className="text-gray-600 group-hover:text-[#F5C518] transition-colors shrink-0 ml-2" aria-hidden="true" />
                </div>
                <p className="text-xs text-gray-500 mb-3">{project.role}</p>

                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  {project.outcome}
                </p>

                <div className="mb-5">
                  <TechTags tags={project.techStack} />
                </div>

                <div className="pt-3 border-t border-white/5">
                  <ProjectLinks project={project} compact />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.5 }}
          className="mt-12 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-sm text-gray-500">
            Explore public repositories, private products, organization work, and earlier projects.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-[#F5C518]/40 px-6 py-3 text-sm text-[#F5C518] transition-colors hover:bg-[#F5C518]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5C518]"
            style={{ fontWeight: 650 }}
          >
            See all projects
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
