'use client';

import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';
import dynamic from 'next/dynamic';

const SettingsTitle = dynamic(() => import('@/components/settings-title'), {
  ssr: false,
});

const paddingSettings = [
  {
    index: 0,
    paddingValue: 16,
  },
  {
    index: 1,
    paddingValue: 32,
  },
  {
    index: 2,
    paddingValue: 64,
  },
  {
    index: 3,
    paddingValue: 128,
  },
];

const FramePadding = () => {
  const framePadding = useBoundStore((state) => state.framePadding);
  const setFramePadding = useBoundStore((state) => state.setFramePadding);

  const handleSelectedPadding = (padding: number, activeNumber: number) => {
    setFramePadding(activeNumber, padding);
  };
  return (
    <div className="flex items-center justify-between group">
      <SettingsTitle label="Padding" />
      <div className="border-foreground/10 flex justify-center border rounded-lg p-1">
        {paddingSettings.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelectedPadding(item.paddingValue, index)}
            className={cn(
              'p-2 w-10 text-center cursor-pointer text-xs transition rounded-md',
              framePadding.activePadding === index
                ? 'bg-muted-foreground/10 font-semibold'
                : 'text-muted-foreground'
            )}
          >
            {item.paddingValue}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FramePadding;
