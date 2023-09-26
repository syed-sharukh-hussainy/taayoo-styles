import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('./components/hero-section'), {
  ssr: false,
});
const EditorImage = dynamic(() => import('./components/editor-image'), {
  ssr: false,
});
const FeaturesSections = dynamic(
  () => import('./components/features-section'),
  { ssr: false }
);
const ThemesSection = dynamic(() => import('./components/themes-section'), {
  ssr: false,
});
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

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
