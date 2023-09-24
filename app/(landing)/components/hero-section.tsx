import { Button } from '@/components/ui/button';
import { ArrowUpCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="max-w-3xl mx-auto text-center mt-32">
      <h1 className="text-3xl md:text-5xl font-black leading-tight">
        Transform Your Code Snippets into Stunning Visuals.
      </h1>
      <p className="mt-5 mx-5 text-muted-foreground">
        With TaaYoo Styles, you can effortlessly create and beautify your code
        snippets, turning them into eye-catching code showcases
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
