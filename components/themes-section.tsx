'use client';

import { LIST_OF_THEMES } from '@/lib/constants';
import dynamic from 'next/dynamic';

const MarqueeTheme = dynamic(() => import('./marquee-theme'), { ssr: false });

const ThemesSection = () => {
  const middleIndex = Math.ceil(LIST_OF_THEMES.length / 2);
  const firstHalf = LIST_OF_THEMES.slice(0, middleIndex);
  const secondHalf = LIST_OF_THEMES.slice(middleIndex);

  return (
    <section className="my-32 max-w-7xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold max-w-2xl mx-auto mb-3">
        Customize Your Code Snippets
      </h2>
      <p className="text-muted-foreground text-sm md:text-base">
        with 20+ Custom Themes and Much More...
      </p>
      <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <div className="mt-16">
          <MarqueeTheme themes={firstHalf} direction="left" />
        </div>
        <div className="mt-3">
          <MarqueeTheme themes={secondHalf} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
