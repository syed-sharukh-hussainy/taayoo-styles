'use client';

import { Command, CommandItem } from '@/components/ui/command';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FONT_FAMILY_OPTIONS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';
import { Check } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const CustomDropDown = dynamic(() => import('@/components/custom-dropdown'), {
  ssr: false,
});
const SettingsTitle = dynamic(() => import('@/components/settings-title'), {
  ssr: false,
});

const FontFamilySettings = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('JetBrains Mono');

  const setFontFamily = useBoundStore((state) => state.setFontFamily);

  return (
    <div className="flex items-center justify-between group">
      <SettingsTitle label="Font Family" />
      <CustomDropDown open={open} setOpen={setOpen} value={value}>
        <ScrollArea className="h-auto p-2">
          <Command>
            {FONT_FAMILY_OPTIONS.map((font, index) => (
              <CommandItem
                key={index}
                onSelect={(currentValue: string) => {
                  setValue(font.fontName);
                  setFontFamily(font.fontName);
                  setOpen(false);
                }}
                className="flex items-center justify-between"
              >
                <p className="capitalize text-clip">{font.fontName}</p>
                <Check
                  className={cn(
                    'h-4 w-4',
                    value === font.fontName ? 'opacity-100' : 'opacity-0'
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

export default FontFamilySettings;
