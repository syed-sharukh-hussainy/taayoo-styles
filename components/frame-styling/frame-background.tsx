'use client';

import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';
import dynamic from 'next/dynamic';

const FrameBackgroundPopover = dynamic(
  () => import('./frame-background-popover'),
  { ssr: false }
);
const CustomSwitch = dynamic(() => import('@/components/custom-switch'), {
  ssr: false,
});
const SettingsTitle = dynamic(() => import('@/components/settings-title'), {
  ssr: false,
});

const FrameBackground = () => {
  const showFrameBackground = useBoundStore(
    (state) => state.showFrameBackground
  );
  const setShowFrameBackgroundColors = useBoundStore(
    (state) => state.setShowFrameBackground
  );
  return (
    <div className="group">
      <div className="flex items-center justify-between">
        <SettingsTitle label="Background" />
        <CustomSwitch
          defaultValue={true}
          onChangeChecked={() => setShowFrameBackgroundColors()}
        />
      </div>
      <div
        role="button"
        aria-label="Background"
        className={cn(
          'cubic-bezier-animation-a',
          showFrameBackground ? 'cubic-bezier-animation-b' : ''
        )}
      >
        <FrameBackgroundPopover />
      </div>
    </div>
  );
};

export default FrameBackground;
