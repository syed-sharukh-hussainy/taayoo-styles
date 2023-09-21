import HeroSection from './components/hero-section';
import EditorImage from './components/editor-image';
import FeaturesSections from './components/features-section';
import ThemesSection from './components/themes-section';
import Footer from '@/components/footer';

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
