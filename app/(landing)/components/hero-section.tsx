import { Button } from '@/components/ui/button';
import { ArrowUpCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="max-w-3xl mx-auto text-center mt-32">
      <h1 className="text-3xl md:text-5xl font-black leading-tight">
        Elevate your code snippets with impressive visuals.
      </h1>
      <p className="mt-8 mx-5 text-muted-foreground text-base md:text-xl">
        Effortlessly create and beautify your code snippets with TaaYoo Styles,
        making them eye-catching code showcases.
      </p>
      <Link href="/screenshot-editor">
        <Button size="lg" className="mt-10 group">
          <p>Let&apos;s Get Started</p>
          <ArrowUpCircle className="h-5 w-5 rotate-45 ml-4 group-hover:rotate-90 transition" />
        </Button>
      </Link>
    </section>
  );
};

export default HeroSection;
