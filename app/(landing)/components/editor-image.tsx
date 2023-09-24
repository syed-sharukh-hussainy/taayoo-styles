'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const EditorImage = () => {
  const [themes, setThemes] = useState('');

  const { theme, systemTheme } = useTheme();
  useEffect(() => {
    const selectedTheme =
      theme === 'dark' || theme === 'light' ? theme : systemTheme;
    if (selectedTheme) {
      setThemes(selectedTheme);
    }
  }, [theme, systemTheme]);

  const color = themes === 'light' ? 'light' : 'dark';

  return (
    <section className="flex justify-center my-16 px-5 md:my-32 md:px-0">
      <div className="flex items-center justify-center bg-primary w-full max-w-7xl h-[250px] md:h-[700px] rounded-xl md:rounded-lg">
        <Image
          src={`/${color}-editor-bg.webp`}
          alt="screenshot-editor"
          width={1500}
          height={1500}
          loading="eager"
          priority={true}
          className="object-contain rounded-md md:rounded-xl shadow-xl w-[300px] md:w-[1100px] h-auto"
        />
      </div>
    </section>
  );
};

export default EditorImage;
