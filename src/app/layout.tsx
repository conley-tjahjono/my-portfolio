import './globals.css';

export const metadata = {
  title: 'Conley Tjahjono | Frontend Portfolio',
  description: 'Frontend Developer with a UX Mindset',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-[theme(colors.bg-default)] text-[theme(colors.color-primary)]">
        {children}
      </body>
    </html>
  );
}
