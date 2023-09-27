import Link from 'next/link';
import { ArrowUpCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="max-w-3xl mx-auto text-center mt-32 flex flex-col justify-center">
      <h1 className="text-3xl md:text-5xl font-black leading-tight">
        Elevate your code snippets with impressive visuals.
      </h1>
      <p className="mt-8 mx-5 text-muted-foreground text-base md:text-xl">
        Effortlessly create and beautify your code snippets with TaaYoo Styles,
        making them eye-catching code showcases.
      </p>
      <div className="flex justify-center mt-10 group">
        <Link
          href="/screenshot-editor"
          className="bg-primary w-fit py-3 px-6 flex items-center rounded-lg justify-center hover:bg-primary/90 transition-colors"
        >
          <p className="text-primary-foreground">Let&apos;s Get Started</p>
          <ArrowUpCircle className="h-5 w-5 rotate-45 ml-4 group-hover:rotate-90 transition text-primary-foreground" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
