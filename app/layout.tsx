import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beshoy Nashaat — Data Science & Data Engineering',
  description:
    'Portfolio of Beshoy Nashaat: Data Science, Data Engineering, Machine Learning and Analytics.',
  metadataBase: new URL('https://beshoy-data-portfolio.vercel.app'),
  openGraph: {
    title: 'Beshoy Nashaat — Data Science & Data Engineering',
    description:
      'Portfolio of Beshoy Nashaat: Data Science, Data Engineering, Machine Learning and Analytics.',
    url: 'https://beshoy-data-portfolio.vercel.app',
    siteName: 'Beshoy Nashaat',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
