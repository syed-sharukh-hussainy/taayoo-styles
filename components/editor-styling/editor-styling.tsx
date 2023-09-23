'use client';
import SettingsItem from '@/components/settings-item';
import LineNumber from './line-number';
import ProgrammingLang from './programming-lang';
import ThemeSettings from './theme-settings';
import FontFamilySettings from './font-family-settings';
import FontSizeSettings from './font-size-settings';
import FontWeight from './font-weight';

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
