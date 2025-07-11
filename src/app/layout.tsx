import './globals.css';
import { Inter } from 'next/font/google';
import SessionProviderWrapper from './SessionProviderWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MindLoom',
  description: 'Mental health and psychology learning platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SessionProviderWrapper>
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}