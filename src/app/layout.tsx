import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Conley Tjahjono | Frontend Portfolio",
  description: "Frontend Developer with a UX Mindset",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-[theme(colors.bg-default)] text-[theme(colors.primary)]">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}