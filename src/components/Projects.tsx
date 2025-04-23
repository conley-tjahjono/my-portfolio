'use client';

const Tag = ({ label }: { label: string }) => (
  <span className="bg-[theme(colors.surface-2)] text-xs px-3 py-1 rounded-full font-medium text-[theme(colors.text-secondary)]">
    {label}
  </span>
);

const Projects = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-sm font-bold tracking-widest text-[theme(colors.text-secondary)] mb-8 uppercase">
        Student Job Portal
      </h2>

      <div className="mb-12 border-t border-[theme(colors.surface-2)] pt-6">
        <h3 className="text-lg font-bold">Goal Tracking</h3>
        <div className="mt-2 flex gap-3">
          <Tag label="Figma" />
          <Tag label="React" />
          <Tag label="Tailwind CSS" />
        </div>
        <div className="mt-4 flex flex-col md:flex-row gap-6">
          <p className="text-sm leading-relaxed text-[theme(colors.text-secondary)] max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
          <div className="rounded-xl bg-[theme(colors.surface-3)] w-full h-48 flex items-center justify-center text-[theme(colors.text-muted)] text-sm">
            Demo Preview
          </div>
        </div>
      </div>

      <div className="border-t border-[theme(colors.surface-2)] pt-6">
        <h3 className="text-lg font-bold">Dress My Style</h3>
        <div className="mt-2 flex gap-3">
          <Tag label="Figma" />
          <Tag label="React" />
          <Tag label="Tailwind CSS" />
        </div>
      </div>

      <div className="border-t border-[theme(colors.surface-2)] pt-6 mt-6">
        <h3 className="text-lg font-bold">Letterbox Revamp</h3>
        <div className="mt-2 flex gap-3">
          <Tag label="Figma" />
          <Tag label="React" />
          <Tag label="Tailwind CSS" />
        </div>
      </div>
    </section>
  );
};

export default Projects;