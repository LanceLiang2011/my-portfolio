'use client';
import { Header } from '@/components/Header';
import { useState } from 'react';

export const HTML = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <html lang='en' className={darkMode ? 'dark' : ''}>
      <body>
        <main className='bg-white dark:bg-gray-900 px-10 md:px-15 lg:px-20 xl:px-32'>
          <section className='min-h-screen'>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
};
