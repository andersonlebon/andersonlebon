import { useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  LockKeyhole,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { Navbar } from '../components/portfolio/Navbar';
import { Footer } from '../components/portfolio/Footer';
import { SEO } from '../components/SEO';
import {
  CatalogProject,
  ProjectSource,
  ProjectVisibility,
  projectCatalog,
  projectCategories,
} from '../data/projectCatalog';

const PAGE_SIZE = 9;
const visibilityOptions: Array<'All' | ProjectVisibility> = [
  'All',
  'Public',
  'Private',
  'Organization',
];
const sourceOptions: Array<'All' | ProjectSource> = [
  'All',
  'GitHub',
  'Vercel',
  'Organization',
  'Local',
];

function ProjectCard({ project, index }: { project: CatalogProject; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition-colors hover:border-[#F5C518]/35"
    >
      {project.imageUrl ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </div>
      ) : (
        <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-white/[0.06] bg-[#111]">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background:
                'radial-gradient(circle at 25% 30%, rgba(245,197,24,0.18), transparent 40%), radial-gradient(circle at 80% 80%, rgba(245,197,24,0.06), transparent 35%)',
            }}
          />
          <span
            className="relative text-4xl text-[#F5C518]/80"
            style={{ fontFamily: 'var(--font-geist)', fontWeight: 800 }}
            aria-hidden="true"
          >
            {project.title
              .split(/\s+/)
              .slice(0, 2)
              .map((word) => word[0])
              .join('')
              .toUpperCase()}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[#F5C518]/20 bg-[#F5C518]/8 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#F5C518]">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-gray-500">
            {project.visibility === 'Private' && <LockKeyhole size={10} aria-hidden="true" />}
            {project.visibility}
          </span>
        </div>

        <h2 className="mb-2 text-lg text-white" style={{ fontWeight: 650 }}>
          {project.title}
        </h2>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[10px] text-gray-500"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
          <span className="text-xs text-gray-600">
            {project.owner === 'Personal' ? project.source : project.owner}
          </span>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
              >
                <Github size={14} aria-hidden="true" />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#F5C518] transition-colors hover:text-[#DEBA15] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectArchive() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const category = searchParams.get('category') ?? 'All';
  const visibility = searchParams.get('visibility') ?? 'All';
  const source = searchParams.get('source') ?? 'All';
  const requestedPage = Number(searchParams.get('page') ?? '1');

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projectCatalog.filter((project) => {
      const searchableText = [
        project.title,
        project.description,
        project.category,
        project.owner,
        ...project.technologies,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return (
        (!normalizedQuery || searchableText.includes(normalizedQuery)) &&
        (category === 'All' || project.category === category) &&
        (visibility === 'All' || project.visibility === visibility) &&
        (source === 'All' || project.source === source)
      );
    });
  }, [category, query, source, visibility]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(1, requestedPage), totalPages)
    : 1;
  const visibleProjects = filteredProjects.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const setParam = (key: string, value: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (!value || value === 'All') {
      nextParams.delete(key);
    } else {
      nextParams.set(key, value);
    }
    if (key !== 'page') nextParams.delete('page');
    setSearchParams(nextParams);
  };

  const clearFilters = () => setSearchParams({});
  const hasFilters = query || category !== 'All' || visibility !== 'All' || source !== 'All';

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <SEO title="Project Archive | Anderson, Software Developer & AI Engineer" />
      <Navbar />

      <main>
        <section className="relative overflow-hidden pb-16 pt-32">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(245,197,24,0.08) 0%, transparent 58%)',
            }}
          />
          <div className="relative mx-auto max-w-6xl px-6 text-center">
            <Link
              to="/#projects"
              className="mb-7 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-[#F5C518] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              Back to featured work
            </Link>
            <p className="mb-3 text-sm uppercase tracking-widest text-[#F5C518]">Project Archive</p>
            <h1
              className="mb-5 text-5xl text-white md:text-7xl"
              style={{ fontFamily: 'var(--font-geist)', fontWeight: 800, lineHeight: 1.04 }}
            >
              Products, client work,
              <span className="block text-[#F5C518]">and learning projects</span>
            </h1>
            <p className="mx-auto max-w-2xl leading-relaxed text-gray-400">
              A searchable archive of public repositories, private products, organization
              contributions, and live deployments. Private source links remain hidden.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-gray-500">
              <span className="rounded-full border border-white/10 px-3 py-1.5">
                {projectCatalog.length} projects
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1.5">
                GitHub + Vercel + local + organizations
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1.5">
                Aspyn AI and Finox excluded
              </span>
            </div>
          </div>
        </section>

        <section className="border-y border-white/[0.06] bg-[#0A0A0A] py-8">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_auto_auto]">
              <label className="relative block">
                <span className="sr-only">Search projects</span>
                <Search
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setParam('q', event.target.value)}
                  placeholder="Search projects or technologies"
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-11 pr-4 text-sm text-white placeholder:text-gray-600 focus:border-[#F5C518]/50 focus:outline-none"
                />
              </label>

              <label className="relative">
                <span className="sr-only">Filter by category</span>
                <select
                  value={category}
                  onChange={(event) => setParam('category', event.target.value)}
                  className="h-11 min-w-48 appearance-none rounded-xl border border-white/10 bg-[#111] px-4 pr-9 text-sm text-gray-300 focus:border-[#F5C518]/50 focus:outline-none"
                >
                  {projectCategories.map((option) => (
                    <option key={option} value={option}>
                      {option === 'All' ? 'All categories' : option}
                    </option>
                  ))}
                </select>
                <SlidersHorizontal
                  size={14}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                  aria-hidden="true"
                />
              </label>

              <label>
                <span className="sr-only">Filter by visibility</span>
                <select
                  value={visibility}
                  onChange={(event) => setParam('visibility', event.target.value)}
                  className="h-11 min-w-36 rounded-xl border border-white/10 bg-[#111] px-4 text-sm text-gray-300 focus:border-[#F5C518]/50 focus:outline-none"
                >
                  {visibilityOptions.map((option) => (
                    <option key={option} value={option}>
                      {option === 'All' ? 'All visibility' : option}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span className="sr-only">Filter by source</span>
                <select
                  value={source}
                  onChange={(event) => setParam('source', event.target.value)}
                  className="h-11 min-w-36 rounded-xl border border-white/10 bg-[#111] px-4 text-sm text-gray-300 focus:border-[#F5C518]/50 focus:outline-none"
                >
                  {sourceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option === 'All' ? 'All sources' : option}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-5 flex min-h-7 items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                Showing {visibleProjects.length} of {filteredProjects.length} matching projects
              </p>
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 text-xs text-[#F5C518] hover:text-[#DEBA15] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5C518]"
                >
                  <X size={13} aria-hidden="true" />
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="bg-[#0F0F0F] py-16">
          <div className="mx-auto max-w-6xl px-6">
            {visibleProjects.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {visibleProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-20 text-center">
                <Search size={30} className="mx-auto mb-4 text-[#F5C518]/60" aria-hidden="true" />
                <h2 className="mb-2 text-xl text-white">No matching projects</h2>
                <p className="mb-5 text-sm text-gray-500">
                  Try another search term or remove one of the filters.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm text-[#F5C518] hover:text-[#DEBA15]"
                >
                  Show all projects
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <nav
                className="mt-12 flex flex-wrap items-center justify-center gap-2"
                aria-label="Project pages"
              >
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setParam('page', String(currentPage - 1))}
                  className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-white/10 px-3 text-sm text-gray-400 transition-colors hover:border-[#F5C518]/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ArrowLeft size={14} aria-hidden="true" />
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setParam('page', String(page))}
                    aria-current={page === currentPage ? 'page' : undefined}
                    aria-label={`Go to project page ${page}`}
                    className={`h-10 min-w-10 rounded-lg border px-3 text-sm transition-colors ${
                      page === currentPage
                        ? 'border-[#F5C518] bg-[#F5C518] text-black'
                        : 'border-white/10 text-gray-500 hover:border-[#F5C518]/30 hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => setParam('page', String(currentPage + 1))}
                  className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-white/10 px-3 text-sm text-gray-400 transition-colors hover:border-[#F5C518]/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                >
                  Next
                  <ArrowRight size={14} aria-hidden="true" />
                </button>
              </nav>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
