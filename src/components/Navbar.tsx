'use client';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[theme(colors.bg-default)] border-b border-[theme(colors.bg-muted)]">
      <div className="max-w-xl md:max-w-6xl mx-auto flex justify-between items-center px-7 md:px-10 py-4 lg:py-10">
        <a href="#home" className="font-bold text-lg lg:text-3xl">Conley T.</a>
        <div className="flex gap-4 md:gap-8 text-sm font-normal lg:text-base">
          <a href="#projects" className="hover:text-[theme(colors.secondary)] transition-colors duration-300 ease-in-out">Projects</a>
          <a href="#skills" className="hover:text-[theme(colors.secondary)] transition-colors duration-300 ease-in-out">Skills</a>
          <a href="#contact" className="hover:text-[theme(colors.secondary)] transition-colors duration-300 ease-in-out">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;