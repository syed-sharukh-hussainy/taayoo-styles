import { Command, CommandItem } from '@/components/ui/command';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PRO_LANGUAGE_OPTIONS } from '@/lib/constants';

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

const ProgrammingLang = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('JSX');

  const setLanguage = useBoundStore((state) => state.setLanguage);
  return (
    <div className="flex items-center justify-between group">
      <SettingsTitle label="Language" />
      <CustomDropDown open={open} setOpen={setOpen} value={value}>
        <ScrollArea className="h-80 p-2">
          <Command>
            {PRO_LANGUAGE_OPTIONS.map((language, index) => (
              <CommandItem
                key={index}
                onSelect={() => {
                  setValue(language.languageName);
                  setLanguage(language.languageName);
                  setOpen(false);
                }}
                className="flex items-center justify-between"
              >
                <p className="capitalize">{language.languageName}</p>
                <Check
                  className={cn(
                    'h-4 w-4',
                    value === language.languageName
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

export default ProgrammingLang;
