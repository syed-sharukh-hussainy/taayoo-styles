'use client';

import { LIST_OF_THEMES } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const ThemesSection = () => {
  return (
    <section className="my-32 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold max-w-2xl  mx-auto mb-3">
        Customize Your Code Snippets
      </h2>
      <p className="text-muted-foreground">
        with 20+ Custom Themes and Much More...
      </p>
      <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <div className="mt-16">
          <Marquee pauseOnHover autoFill>
            {LIST_OF_THEMES.map((theme, index) => (
              <div key={index} className="mr-3">
                <Image
                  src={`/theme-images/${theme.name}-theme.png`}
                  alt={theme.name}
                  width={300}
                  height={200}
                  className="w-[300px] h-auto rounded-lg"
                />
              </div>
            ))}
          </Marquee>
        </div>
        <div className="mt-3">
          <Marquee pauseOnHover autoFill direction="right">
            {LIST_OF_THEMES.map((theme, index) => (
              <div key={index} className="mr-3">
                <Image
                  src={`/theme-images/${theme.name}-theme.png`}
                  alt={theme.name}
                  width={300}
                  height={200}
                  className="w-[300px] h-auto rounded-lg"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
