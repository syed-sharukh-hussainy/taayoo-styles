'use client';

import CustomDropDown from '@/components/custom-dropdown';
import SettingsTitle from '@/components/settings-title';
import { Command, CommandItem } from '@/components/ui/command';
import { ScrollArea } from '@/components/ui/scroll-area';
import { THEMES_OPTIONS } from '@/lib/constants';

import { cn, getThemeBackground } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';
import { Check } from 'lucide-react';
import { useState } from 'react';

const ThemeSettings = () => {
  const [open, setOpen] = useState<boolean>(false);
  const setTheme = useBoundStore((state) => state.setTheme);
  const setSelectedThemeColor = useBoundStore(
    (state) => state.setSelectedThemeColor
  );
  const theme = useBoundStore((state) => state.theme);
  return (
    <div className="flex items-center justify-between group">
      <SettingsTitle label="Theme" />
      <CustomDropDown open={open} setOpen={setOpen} value={theme.themeName}>
        <ScrollArea className="h-80 p-2">
          <Command>
            {THEMES_OPTIONS.map((themeV, index) => (
              <CommandItem
                key={index}
                onSelect={() => {
                  const themeColor = getThemeBackground(themeV.themeName);
                  themeV.themeName;
                  setTheme(themeV.themeName, themeV.themeType);
                  setSelectedThemeColor(themeColor!);
                  setOpen(false);
                }}
                className="flex items-center justify-between"
              >
                <p className="capitalize">{themeV.themeName}</p>
                <Check
                  className={cn(
                    'h-4 w-4',
                    theme.themeName === themeV.themeName
                      ? 'opacity-100'
                      : 'opacity-0'
                  )}
                />
              </CommandItem>
            ))}
          </Command>
        </ScrollArea>
      </CustomDropDown>
    </div>
  );
};

export default ThemeSettings;
