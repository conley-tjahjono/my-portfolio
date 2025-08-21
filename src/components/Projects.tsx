"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Figma, GitHub } from 'react-feather';

const projects = [
  {
    title: 'Dress My Style',
    description: 'An AI-powered closet management and style recommendation app built with Next.js, Supabase, and OpenAI.',
    tags: ['Figma', 'React', 'Next.js', 'Tailwind CSS', 'Typescript', 'Supabase'],
    url: 'https://github.com/conley-tjahjono/dress-my-style',
    figmaUrl: 'https://www.figma.com/design/DOCHsYQxIOR7nOqdBMr1ea/DressMyStyle?node-id=1-2&p=f',
    demoUrl: 'https://youtu.be/slWpUfO-fSo',
    productionUrl: 'https://dress-my-style.vercel.app/'
  },
  {
    title: 'Goal Tracking',
    description: 'A web application for teachers of deaf students to track their student\'s Individualized Education Program goals',
    tags: ['HTML', 'CSS', 'NodeJS', 'Javascript', 'MongoDB'],
    url: 'https://github.com/purdue-epics-isd/TRACK',
    productionUrl: ''
  },
  // {
  //   title: 'Student Job Portal',
  //   description: 'A web appplication for students to fill out relative coursework and work experience to match respective jobs and internships',
  //   tags: ['HTML', 'CSS', 'MySQL', 'PHP'],
  //   url: '',
  //   productionUrl: ''
  // },
  // {
  //   title: 'Letterbox Revamp',
  //   description: 'Redesigned the user experience and modernized the UI for a film review platform, focusing on accessibility, responsive design, and improved visual hierarchy.',
  //   tags: ['Figma'],
  //   url: '',
  //   productionUrl: ''
  // },
];

// Helper function to convert YouTube URL to embeddable format
const getEmbedUrl = (url: string): string | undefined => {
  if (!url) return undefined;
  
  // Handle youtu.be links
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  // Handle youtube.com/watch links
  if (url.includes('youtube.com/watch')) {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : undefined;
  }
  
  // If it's already an embed URL, return as is
  if (url.includes('youtube.com/embed/')) {
    return url;
  }
  
  return undefined;
};

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleProject = (index: number) => {
    setOpenIndex(index);
  };

  return (
    <section className="max-w-xl md:max-w-6xl mx-auto px-7 md:px-10 md:py-24">
      {projects.map((project, index) => (
        <div
          key={project.title}
          className="border-b border-[theme(colors.surface-2)] py-4 cursor-pointer"
          onClick={() => toggleProject(index)}
        >
          <div className={`flex flex-wrap items-center justify-between gap-2 transition-colors ${openIndex === index ? 'text-[theme(colors.primary)]' : 'text-[theme(colors.text-muted)] opacity-70 hover:text-[theme(colors.text-secondary)] hover:opacity-100'}`}>
            <h3 className="text-lg font-bold text-left">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[theme(colors.surface-2)] px-4 py-1 rounded-full text-sm text-[theme(colors.text-secondary)]"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-4 grid md:grid-cols-2 gap-4"
              >
                <div className="flex flex-col justify-between">
                  <p className="text-sm text-left text-[theme(colors.text-secondary)]">
                    {project.description}
                  </p>

                  <div className='flex space-x-2'>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[theme(colors.surface-strong)] text-[theme(colors.text-secondary)] hover:text-[theme(colors.text-primary)] hover:bg-[theme(colors.surface-hover)] transition-colors duration-200"
                      >
                      <GitHub size={18} />
                    </a>
                    {project.figmaUrl && (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[theme(colors.surface-strong)] text-[theme(colors.text-secondary)] hover:text-[theme(colors.text-primary)] hover:bg-[theme(colors.surface-hover)] transition-colors duration-200"
                        >
                        <Figma size={18} />
                      </a>
                    )}
                    {project.productionUrl && (
                      <a
                        href={project.productionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[theme(colors.surface-strong)] text-[theme(colors.text-secondary)] hover:text-[theme(colors.text-primary)] hover:bg-[theme(colors.surface-hover)] transition-colors duration-200"
                        >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  
                </div>
                <div className="rounded-xl h-64 w-full overflow-hidden">
                  {project.demoUrl && getEmbedUrl(project.demoUrl) ? (
                    <iframe
                      src={getEmbedUrl(project.demoUrl)}
                      title={`${project.title} Demo`}
                      className="w-full h-full rounded-xl"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="bg-[theme(colors.surface-2)] text-[theme(colors.text-secondary)] flex items-center justify-center rounded-xl h-full w-full">
                      <span className="font-semibold">Demo WIP</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
};

export default Projects;
