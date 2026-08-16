import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, BrainCircuit, Code2, LayoutTemplate, Workflow } from 'lucide-react';

const services = [
  {
    icon: BrainCircuit,
    title: 'AI application engineering',
    description:
      'AI features and product workflows that connect model APIs to useful interfaces, business data, and human review.',
    deliverables: ['LLM-powered features', 'AI workflow automation', 'API integration and evaluation'],
  },
  {
    icon: Code2,
    title: 'Full-stack product development',
    description:
      'Production web applications built across the interface, API, database, authentication, and deployment layers.',
    deliverables: ['React and Next.js applications', 'Node.js and NestJS APIs', 'PostgreSQL and Supabase backends'],
  },
  {
    icon: LayoutTemplate,
    title: 'MVP and interface delivery',
    description:
      'Focused delivery for founders and teams that need a responsive, accessible product experience from idea or Figma file.',
    deliverables: ['MVP implementation', 'Figma-to-code interfaces', 'Responsive product dashboards'],
  },
  {
    icon: Workflow,
    title: 'Integrations and modernization',
    description:
      'Improvements to existing products through API integrations, payment flows, architecture cleanup, and deployment work.',
    deliverables: ['Third-party API integrations', 'Stripe and payment flows', 'Refactoring and deployment'],
  },
];

export function FreelanceServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div
        className="absolute top-1/2 right-0 w-[650px] h-[650px] -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#F5C518] mb-3 tracking-widest uppercase">Freelance Services</p>
          <div className="w-12 h-0.5 bg-[#F5C518] mx-auto mb-6" />
          <h2
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: 'var(--font-geist)', fontWeight: 700 }}
          >
            Software and AI products
            <span className="block text-[#F5C518] mt-1">from idea to production</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I work with founders and teams on AI-enabled products, full-stack web applications,
            MVPs, and integrations. Engagements are scoped around concrete deliverables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12 + index * 0.08 }}
              className="p-6 md:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-[#F5C518]/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F5C518]/10 border border-[#F5C518]/20 flex items-center justify-center mb-5">
                <service.icon size={20} className="text-[#F5C518]" aria-hidden="true" />
              </div>
              <h3 className="text-white text-lg mb-2" style={{ fontWeight: 650 }}>
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-1 h-1 rounded-full bg-[#F5C518] shrink-0" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F5C518] text-black hover:bg-[#DEBA15] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5C518]"
            style={{ fontWeight: 700 }}
          >
            Discuss a freelance project
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
