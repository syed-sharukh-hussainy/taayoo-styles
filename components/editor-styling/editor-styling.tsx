'use client';
import dynamic from 'next/dynamic';

const SettingsItem = dynamic(() => import('@/components/settings-item'), {
  ssr: false,
});
const LineNumber = dynamic(() => import('./line-number'), {
  ssr: false,
});
const ProgrammingLang = dynamic(() => import('./programming-lang'), {
  ssr: false,
});
const ThemeSettings = dynamic(() => import('./theme-settings'), {
  ssr: false,
});
const FontFamilySettings = dynamic(() => import('./font-family-settings'), {
  ssr: false,
});
const FontSizeSettings = dynamic(() => import('./font-size-settings'), {
  ssr: false,
});
const FontWeight = dynamic(() => import('./font-weight'), {
  ssr: false,
});

const EditorStyling = () => {
  return (
    <SettingsItem label="Editor Styling">
      <div className="flex flex-col gap-5">
        <LineNumber />
        <ProgrammingLang />
        <ThemeSettings />
        <FontFamilySettings />
        <FontSizeSettings />
        <FontWeight />
      </div>
    </SettingsItem>
  );
};

export default EditorStyling;
