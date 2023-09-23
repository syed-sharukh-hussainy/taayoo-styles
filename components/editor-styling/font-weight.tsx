import CustomDropDown from '@/components/custom-dropdown';
import SettingsTitle from '@/components/settings-title';
import { Command, CommandItem } from '@/components/ui/command';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FONT_WEIGHT_OPTIONS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';
import { Check } from 'lucide-react';
import { useState } from 'react';

const FontWeight = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<number>(600);

  const setFontWeight = useBoundStore((state) => state.setFontWeight);

  const getFontValue = FONT_WEIGHT_OPTIONS.find(
    (weight) => weight.fontWeightValue === value
  )?.fontWeightName;

  return (
    <div className="flex items-center justify-between group">
      <SettingsTitle label="Font Weight" />
      <CustomDropDown open={open} setOpen={setOpen} value={getFontValue!}>
        <ScrollArea className="h-auto p-2">
          <Command>
            {FONT_WEIGHT_OPTIONS.map((fontWeight, index) => (
              <CommandItem
                key={index}
                onSelect={() => {
                  setValue(fontWeight.fontWeightValue);
                  setFontWeight(fontWeight.fontWeightValue);
                  setOpen(false);
                }}
                className="flex items-center justify-between"
              >
                <p className="capitalize">{fontWeight.fontWeightName}</p>
                <Check
                  className={cn(
                    'h-4 w-4',
                    value === fontWeight.fontWeightValue
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

export default FontWeight;
