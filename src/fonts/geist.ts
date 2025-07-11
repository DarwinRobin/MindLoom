// src/fonts/geist.ts

import localFont from 'next/font/local';

export const geist = localFont({
  src: [
    {
      path: './Geist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Geist-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
  display: 'swap',
});
