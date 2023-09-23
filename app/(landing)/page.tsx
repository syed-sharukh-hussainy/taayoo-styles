import HeroSection from './components/hero-section';
import EditorImage from './components/editor-image';
import FeaturesSections from './components/features-section';
import Footer from '@/components/footer';
import { Suspense } from 'react';

import dynamic from 'next/dynamic';
import ThemesSection from './components/themes-section';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <EditorImage />
        <FeaturesSections />
        <ThemesSection />
      </main>
      <Footer />
    </>
  );
}
