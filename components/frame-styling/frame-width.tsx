'use client';

import { useBoundStore } from '@/store/useBoundStore';
import dynamic from 'next/dynamic';

const CustomSlider = dynamic(() => import('@/components/custom-slider'), {
  ssr: false,
});
const SettingsTitle = dynamic(() => import('@/components/settings-title'), {
  ssr: false,
});

const FrameWidth = () => {
  const frameWidth = useBoundStore((state) => state.frameWidth);
  const setFrameWidth = useBoundStore((state) => state.setFrameWidth);

  const handleSliderValue = (value: string) => {
    setFrameWidth(parseInt(value));
  };
  return (
    <section className="group">
      <div className="flex items-center justify-between mb-3">
        <SettingsTitle label="Width" />
        <span className="bg-muted-foreground/10 rounded-lg text-xs px-3 py-1 text-muted-foreground font-bold">
          {frameWidth}px
        </span>
      </div>
      <CustomSlider
        minValue={600}
        maxValue={1200}
        defaultValue={frameWidth}
        handleSliderValue={handleSliderValue}
      />
    </section>
  );
};

export default FrameWidth;
