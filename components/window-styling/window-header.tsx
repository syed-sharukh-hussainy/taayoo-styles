import CustomSwitch from '@/components/custom-switch';
import SettingsTitle from '@/components/settings-title';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { TOPBAR_OPTIONS, WindowHeaderOptions } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';
import Image from 'next/image';

const WindowHeader = () => {
  const setShowWindowHeader = useBoundStore(
    (state) => state.setShowWindowHeader
  );
  const showWindowHeader = useBoundStore((state) => state.showWindowHeader);

  const setTopBar = useBoundStore((state) => state.setTopBar);
  const setTopBarPosition = useBoundStore((state) => state.setTopBarPosition);

  const topBarType = useBoundStore((state) => state.topBar.topBarType);

  return (
    <section className="group">
      <div className="flex items-center justify-between">
        <SettingsTitle label="Header" />
        <CustomSwitch
          defaultValue={false}
          onChangeChecked={(checked) => setShowWindowHeader(checked)}
        />
      </div>

      <div
        className={cn(
          'cubic-bezier-animation-a',
          showWindowHeader ? 'cubic-bezier-animation-b' : ''
        )}
      >
        <Popover>
          <PopoverTrigger asChild>
            <button className="w-full h-10 cursor-pointer border border-foreground/20 outline-none rounded-lg flex mt-5 items-center p-2">
              <div className="flex py-3">
                <Image
                  src={topBarType}
                  alt="window topbar"
                  width={60}
                  height={20}
                  loading="eager"
                  className="w-auto h-auto"
                />
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent side="right">
            <div className="rounded-lg flex flex-col gap-5">
              {TOPBAR_OPTIONS.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setTopBar(option.topBarName, option.topBarType);
                  }}
                  className={cn(
                    'h-10 rounded-lg border px-5 cursor-pointer flex items-center hover:scale-105 transition',
                    option.topBarName === WindowHeaderOptions.WINDOWS ||
                      option.topBarName === WindowHeaderOptions.WINDOWSDARK
                      ? 'justify-end'
                      : 'justify-start'
                  )}
                >
                  <Image
                    src={option.topBarType}
                    alt={option.topBarName}
                    width={60}
                    height={20}
                    loading="eager"
                    className="w-auto h-auto"
                  />
                </div>
              ))}
              <div className="w-full flex justify-between item-center text-center ">
                <button
                  onClick={() => setTopBarPosition('start')}
                  className="flex-1 p-1 border cursor-pointer transition duration-200 hover:bg-muted rounded-tl-lg rounded-bl-lg text-sm font-bold"
                >
                  Left
                </button>
                <button
                  onClick={() => setTopBarPosition('end')}
                  className="flex-1 p-1 border cursor-pointer transition duration-200 hover:bg-muted rounded-tr-lg rounded-br-lg text-sm font-bold"
                >
                  Right
                </button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </section>
  );
};

export default WindowHeader;
