'use client';
import SettingsItem from '@/components/settings-item';
import WindowHeader from './window-header';
import ShowAccent from './show-accent';
import ShowFilename from './show-filename';
import ShadowSettings from './shadow-settings';

const WindowStyling = () => {
  return (
    <SettingsItem label="Window Styling">
      <div className="flex flex-col gap-5">
        <WindowHeader />
        <ShowAccent />
        <ShowFilename />
        <ShadowSettings />
      </div>
    </SettingsItem>
  );
};

export default WindowStyling;
