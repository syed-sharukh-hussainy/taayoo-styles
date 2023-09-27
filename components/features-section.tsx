import dynamic from 'next/dynamic';

const DesktopFeatures = dynamic(() => import('./desktop-features'));
const MobileFeatures = dynamic(() => import('./mobile-features'));

const FeaturesSections = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-0">
      <h2 className="text-2xl md:text-3xl font-bold mb-16 max-w-2xl text-center mx-auto">
        Capture and Share Your Code in Style with Beautiful Screenshot Creator
      </h2>
      <DesktopFeatures />
      <MobileFeatures />
    </section>
  );
};

export default FeaturesSections;
