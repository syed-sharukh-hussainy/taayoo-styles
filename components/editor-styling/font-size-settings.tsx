import CustomDropDown from '@/components/custom-dropdown';
import SettingsTitle from '@/components/settings-title';
import { Command, CommandItem } from '@/components/ui/command';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FONT_SIZE_OPTIONS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';
import { Check } from 'lucide-react';
import { useState } from 'react';

const FontSizeSettings = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('Medium');

  const setFontSize = useBoundStore((state) => state.setFontSize);
  return (
    <div className="flex items-center justify-between group">
      <SettingsTitle label="Font Size" />
      <CustomDropDown open={open} setOpen={setOpen} value={value}>
        <ScrollArea className="h-auto p-2">
          <Command>
            {FONT_SIZE_OPTIONS.map((fontSize, index) => (
              <CommandItem
                key={index}
                onSelect={() => {
                  setValue(fontSize.fontSizeName);
                  setFontSize(fontSize.fontSizeValue);
                  setOpen(false);
                }}
                className="flex items-center justify-between"
              >
                <p className="capitalize">{fontSize.fontSizeName}</p>
                <Check
                  className={cn(
                    'h-4 w-4',
                    value === fontSize.fontSizeName
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

export default FontSizeSettings;
