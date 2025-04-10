'use client';

import Link from 'next/link';

const links = [
  {
    label: 'GITHUB',
    href: 'https://github.com/conley-tjahjono',
  },
  {
    label: 'LINKEDIN',
    href: 'https://linkedin.com/in/conley-tjahjono',
  },
  {
    label: 'INSTAGRAM',
    href: 'https://www.instagram.com/_conley__/',
  },
];

const resume = {
  label: 'RESUME',
  href: '/ConleyTjahjono_Frontend_Resume.pdf',
  className: 'text-red-500 font-semibold',
};

export default function SocialSidebar() {
  const handleResumeClick = () => {
    const fileUrl = resume.href;

    // Open in new tab
    window.open(fileUrl, '_blank');

    // Trigger download
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'ConleyTjahjono_Frontend_Resume.pdf';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 pt-4">
        {links.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-lg font-bold"
          >
            {label}
          </Link>
        ))}

        {/* Resume: special download + open */}
        <a
          onClick={handleResumeClick}
          className={`hover:underline text-lg font-bold cursor-pointer ${resume.className}`}
        >
          {resume.label}
        </a>
      </div>

      <h1 className="text-lg font-bold">social.</h1>
    </div>
  );
}
