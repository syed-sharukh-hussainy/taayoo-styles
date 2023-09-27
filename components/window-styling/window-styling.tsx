'use client';
import dynamic from 'next/dynamic';

const SettingsItem = dynamic(() => import('@/components/settings-item'), {
  ssr: false,
});

const WindowHeader = dynamic(() => import('./window-header'), {
  ssr: false,
});

const ShowAccent = dynamic(() => import('./show-accent'), {
  ssr: false,
});

const ShowFilename = dynamic(() => import('./show-filename'), {
  ssr: false,
});

const ShadowSettings = dynamic(() => import('./shadow-settings'), {
  ssr: false,
});

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
