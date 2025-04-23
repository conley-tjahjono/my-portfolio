'use client';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[theme(colors.bg-default)] border-b border-[theme(colors.bg-muted)]">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-10 py-4 lg:py-10">
        <h1 className="font-bold text-lg lg:text-3xl">Conley T.</h1>
        <div className="flex gap-8 text-sm font-normal lg:text-base">
          <a href="#projects" className="hover:text-[theme(colors.color-secondary)] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[theme(colors.color-secondary)] transition-colors">Skills</a>
          <a href="#contact" className="hover:text-[theme(colors.color-secondary)] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;