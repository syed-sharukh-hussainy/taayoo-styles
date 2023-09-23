import SettingsItem from '@/components/settings-item';
import FrameWidth from './frame-width';
import FramePadding from './frame-padding';
import FrameBackground from './frame-background';

const FrameStyling = () => {
  return (
    <SettingsItem label="Frame Styling">
      <div className="flex flex-col gap-6">
        <FrameWidth />
        <FramePadding />
        <FrameBackground />
      </div>
    </SettingsItem>
  );
};

export default FrameStyling;
