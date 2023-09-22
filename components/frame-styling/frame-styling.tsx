import SettingsItem from '@/components/settings-item';
import React from 'react';
import FrameWidth from './frame-width';

const FrameStyling = () => {
  return (
    <SettingsItem label="Frame Styling">
      <div className="flex flex-col gap-8">
        <FrameWidth />
        {/* <PaddingSettings /> */}
        {/* <BackgroundColorSettings /> */}
      </div>
    </SettingsItem>
  );
};

export default FrameStyling;
