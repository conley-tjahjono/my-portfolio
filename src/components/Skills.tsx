'use client';

import { motion } from "framer-motion";

const SkillBadge = ({ label, index }: { label: string; index: number }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: [ -10, 10 ] }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeInOut' }}
    className="bg-[theme(colors.surface-2)] px-4 py-1 rounded-full text-sm text-[theme(colors.text-secondary)] transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-1 hover:shadow-[0_4px_14px_rgba(255,255,255,0.1)]"
  >
    {label}
  </motion.span>
);

const Skills = () => {
  const fluentSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "Java", "Python", "SQL"];
  const techStack = ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Material UI", "Figma", "Angular", "Git", "Bootstrap", "Storybooks", "REST APIs", "Mongo DB", "MySQL"];

  return (
    <motion.section className="max-w-5xl mx-auto px-6 py-24 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <h3 className="text-xl font-semibold mb-6">Fluent In</h3>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {fluentSkills.map((skill, index) => (
          <SkillBadge key={`fluent-${skill}`} label={skill} index={index} />
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-6">Technologies I use</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {techStack.map((tech, index) => (
          <SkillBadge key={`tech-${tech}`} label={tech} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;