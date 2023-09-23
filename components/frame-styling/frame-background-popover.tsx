import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn, getGradientColor } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { ArrowUpIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useBoundStore } from '@/store/useBoundStore';
import { ChangeEvent } from 'react';
import {
  GRADIENT_COLORS,
  GRADIENT_COLORS_DIRECTION,
  SOLID_COLORS,
} from '@/lib/constants';

const FrameBackgroundPopover = () => {
  const selectedBackgroundColor = useBoundStore(
    (state) => state.frameBackgroundColor
  );
  const gradientDirection = useBoundStore((state) => state.gradientDirection);
  const setFrameBackgroundColor = useBoundStore(
    (state) => state.setFrameBackgroundColor
  );

  const handleInputBgColor = (e: string) => {
    if (e.includes(',')) {
      let bgColors = e.split(',');
      setFrameBackgroundColor([...bgColors]);
    } else {
      setFrameBackgroundColor([e]);
    }
  };

  const frameBackground =
    selectedBackgroundColor.length === 1
      ? selectedBackgroundColor[0]
      : `linear-gradient(${gradientDirection}, ${getGradientColor(
          selectedBackgroundColor
        )})`;

  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <div className="border border-foreground/10 w-full h-8 rounded-lg p-1 mt-4">
          <div
            className="w-full h-full rounded-sm"
            style={{
              background: frameBackground,
            }}
          ></div>
        </div>
      </PopoverTrigger>
      <PopoverContent side="right" className="w-96">
        <Tabs defaultValue="gradient">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="gradient">Gradient</TabsTrigger>
            <TabsTrigger value="solid">Solid</TabsTrigger>
          </TabsList>
          <div className="my-5">
            <Input
              type="text"
              className="w-full"
              value={selectedBackgroundColor}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputBgColor(e.target.value)
              }
            />
          </div>
          <GradientTabContent />
          <SolidTabContent />
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};

export default FrameBackgroundPopover;

const GradientTabContent = () => {
  const selectedBackgroundColor = useBoundStore(
    (state) => state.frameBackgroundColor
  );
  const setFrameBackgroundColor = useBoundStore(
    (state) => state.setFrameBackgroundColor
  );
  const gradientDirection = useBoundStore((state) => state.gradientDirection);
  const setGradientDirection = useBoundStore(
    (state) => state.setGradientDirection
  );

  const handleSelectedBgColor = (bgColor: string[]) => {
    setFrameBackgroundColor(bgColor);
  };

  return (
    <TabsContent value="gradient">
      <div className="flex w-full flex-wrap gap-1">
        {GRADIENT_COLORS.map((palette, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-7 h-7 rounded-full cursor-pointer shadow-md"
            onClick={() => handleSelectedBgColor([...palette.gradientPalette])}
            style={{
              background: `linear-gradient(to right, ${getGradientColor([
                ...palette.gradientPalette,
              ])})`,
            }}
          >
            {getGradientColor(selectedBackgroundColor) ===
              getGradientColor([...palette.gradientPalette]) && (
              <div className="w-2 h-2 bg-background rounded-full"></div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-10">
        <p className="my-3 text-sm font-medium">Gradient Direction</p>
        <div className="w-full flex justify-between flex-wrap gap-2">
          <TooltipProvider>
            {GRADIENT_COLORS_DIRECTION.map((direction, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div
                    onClick={() =>
                      setGradientDirection(direction.directionStyle)
                    }
                    className={cn(
                      'w-8 h-8 flex justify-center cursor-pointer items-center border rounded-md hover:bg-muted',
                      gradientDirection === direction.directionStyle
                        ? 'bg-muted'
                        : ''
                    )}
                  >
                    <ArrowUpIcon
                      className="w-3 h-3"
                      style={{
                        rotate: direction.directionStyle,
                      }}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>{direction.directionName}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </TabsContent>
  );
};

const SolidTabContent = () => {
  const selectedBackgroundColor = useBoundStore(
    (state) => state.frameBackgroundColor
  );
  const setFrameBackgroundColor = useBoundStore(
    (state) => state.setFrameBackgroundColor
  );

  const handleSelectedBgColor = (bgColor: string[]) => {
    setFrameBackgroundColor(bgColor);
  };
  return (
    <TabsContent value="solid">
      <div className="">
        <div className="flex flex-wrap w-full justify-between gap-1">
          {SOLID_COLORS.map((color, index) => (
            <div
              key={index}
              className="h-7 w-7 cursor-pointer rounded-full flex justify-center items-center"
              onClick={() => {
                handleSelectedBgColor([`#${color}`]);
              }}
              style={{
                backgroundColor: `#${color}`,
              }}
            >
              {getGradientColor(selectedBackgroundColor) === `#${color}` && (
                <div className="w-3 h-3 bg-background rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </TabsContent>
  );
};
