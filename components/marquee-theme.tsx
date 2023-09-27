import Image from 'next/image';
import Marquee from 'react-fast-marquee';

type MarqueeThemeProps = {
  name: string;
  type: string;
  color: string;
};

const MarqueeTheme = ({
  themes,
  direction,
}: {
  themes: MarqueeThemeProps[];
  direction: 'left' | 'right' | 'up' | 'down' | undefined;
}) => {
  return (
    <Marquee pauseOnHover direction={direction}>
      {themes.map((theme, index) => (
        <div key={index} className="mr-3">
          <Image
            src={`/theme-images/${theme.name}-theme.png`}
            alt={theme.name}
            width={200}
            height={100}
            loading="lazy"
            className="w-auto h-auto rounded-lg"
          />
        </div>
      ))}
    </Marquee>
  );
};

export default MarqueeTheme;
