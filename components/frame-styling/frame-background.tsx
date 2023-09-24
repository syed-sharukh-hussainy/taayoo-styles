'use client';

import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';

import FrameBackgroundPopover from './frame-background-popover';
import CustomSwitch from '@/components/custom-switch';
import SettingsTitle from '@/components/settings-title';

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
