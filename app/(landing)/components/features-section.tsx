import { cn } from '@/lib/utils';
import {
  Download,
  LucideIcon,
  Palette,
  PlaySquare,
  Share2,
  TerminalSquare,
} from 'lucide-react';

type FeaturesProps = {
  icon: LucideIcon;
  label: string;
  description: string;
  className?: string;
};

const FEATURES_DATA: FeaturesProps[] = [
  {
    icon: TerminalSquare,
    label: 'Syntax Highlighting',
    description:
      'Enhance your code snippets by customizing syntax themes, adding colors, and choosing window themes to make them visually appealing.',
  },
  {
    icon: PlaySquare,
    label: 'Real-time Preview',
    description:
      'Get an instant preview of your styled code snippet as you make changes, ensuring you achieve the perfect look.',
  },
  {
    icon: Download,
    label: 'Export to Multiple Formats',
    description:
      'Download your code snippets in multiple image formats to use them in presentations, documentation, or simply to showcase your work.',
  },
  {
    icon: Palette,
    label: 'Wide Variety of Themes',
    description:
      'Choose from a library of over 20+ custom themes to style your code exactly the way you want. Customize fonts and colors for a unique look.',
    className: 'col-span-2',
  },
  {
    icon: Share2,
    label: 'Seamless Sharing',
    description:
      'Share your styled code snippets with other users, fostering a sense of community and enabling teamwork.',
  },
];

const FeaturesSections = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-0">
      <h2 className="text-2xl md:text-3xl font-bold mb-16 max-w-2xl text-center mx-auto">
        Capture and Share Your Code in Style with Beautiful Screenshot Creator
      </h2>
      <div className="hidden md:grid grid-cols-3 gap-4">
        {FEATURES_DATA.map((feature, index) => (
          <div
            key={index}
            className={cn(
              'p-8 rounded-xl shadow-md bg-muted',
              feature.className
            )}
          >
            <feature.icon className="h-8 w-8" />
            <h6 className="text-lg font-bold my-5">{feature.label}</h6>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="grid md:hidden grid-cols-1 gap-4">
        {FEATURES_DATA.map((feature, index) => (
          <div key={index} className={cn('p-8 rounded-xl shadow-md bg-muted')}>
            <feature.icon className="h-8 w-8" />
            <h6 className="text-base font-bold my-4">{feature.label}</h6>
            <p className="text-muted-foreground text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSections;
