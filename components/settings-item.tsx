'use client';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type SettingsItemProps = {
  label: string;
  children: React.ReactNode;
};

const SettingsItem = ({ label, children }: SettingsItemProps) => {
  const [openItem, setOpenItem] = useState<boolean>(true);
  return (
    <section className="m-3 rounded-sm">
      <div
        onClick={() => setOpenItem(!openItem)}
        className={cn(
          'w-full flex justify-between items-center   cursor-pointer px-4 py-5 z-50 font-bold bg-muted/90 text-sm group hover:text-foreground rounded-lg border-b border-foreground/20 transition-colors duration-200 ease-in-out',
          openItem ? 'text-foreground rounded-b-none' : 'text-muted-foreground'
        )}
      >
        <p className="font-black text-base">{label}</p>
        <ChevronDown
          className={cn(
            'h-5 w-5 transition',
            openItem ? 'rotate-180' : 'rotate-0'
          )}
        />
      </div>
      <div
        className={cn(
          'overflow-hidden max-h-0 bg-muted/90 rounded-b-lg cubic-bezier-animation-1',
          openItem ? 'h-auto max-h-[9999px] block cubic-bezier-animation-2' : ''
        )}
      >
        <div className="p-4">{children}</div>
      </div>
    </section>
  );
};

export default SettingsItem;
