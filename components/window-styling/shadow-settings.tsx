'use client';

import { Command, CommandItem } from '@/components/ui/command';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SHADOW_OPTIONS } from '@/lib/constants';
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

const ShadowSettings = () => {
  const [open, setOpen] = useState<boolean>(false);
  const shadowName = useBoundStore((state) => state.shadow.name);
  const setShadow = useBoundStore((state) => state.setShadow);

  return (
    <div className="flex items-center justify-between group">
      <SettingsTitle label="Shadow" />
      <CustomDropDown open={open} setOpen={setOpen} value={shadowName}>
        <ScrollArea className="h-auto p-2">
          <Command>
            {SHADOW_OPTIONS.map((shadow, index) => (
              <CommandItem
                key={index}
                onSelect={() => {
                  setShadow(shadow.shadowName, shadow.shadowValue);
                  setOpen(false);
                }}
                className="flex items-center justify-between"
              >
                <p className="capitalize text-sm">{shadow.shadowName}</p>
                <Check
                  className={cn(
                    'h-4 w-4',
                    shadowName === shadow.shadowName
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

export default ShadowSettings;
