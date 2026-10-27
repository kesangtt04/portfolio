import type { Metadata } from 'next';
import { Providers } from '@/components/providers';
import { ScrollProgress } from '@/components/effects/ScrollProgress';
import { BackgroundEffects } from '@/components/effects/BackgroundEffects';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nguyễn Kế Sang | AI/ML Developer',
  description:
    'Full-stack AI/ML Developer with 6+ months experience in Computer Vision, NLP, and production ML systems. Showcasing expertise in deep learning and intelligent solutions.',
  keywords:
    'AI, ML, Machine Learning, Deep Learning, Computer Vision, NLP, Python, PyTorch',
  authors: [{ name: 'Nguyễn Kế Sang', url: 'https://github.com/kesangtt04' }],
  openGraph: {
    title: 'Nguyễn Kế Sang | AI/ML Developer',
    description:
      'Full-stack AI/ML Developer with 6+ months experience. Transforming data into intelligent solutions.',
    type: 'website',
    url: 'https://nguyenkesang.dev',
    siteName: 'Nguyễn Kế Sang Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nguyễn Kế Sang | AI/ML Developer',
    description: 'Full-stack AI/ML Developer portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="overflow-x-hidden">
        <BackgroundEffects />
        <ScrollProgress />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
