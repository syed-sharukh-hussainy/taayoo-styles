import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Paintbrush } from 'lucide-react';
import Image from 'next/image';
import { ScrollArea } from './ui/scroll-area';
import { getThemeByName } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';
import { THEMES_OPTIONS } from '@/lib/constants';

const ThemesSheet = () => {
  const setEditorTheme = useBoundStore((state) => state.setTheme);
  const setFrameBackground = useBoundStore(
    (state) => state.setFrameBackgroundColor
  );
  const setSelectedThemeColor = useBoundStore(
    (state) => state.setSelectedThemeColor
  );
  const setGradientDirection = useBoundStore(
    (state) => state.setGradientDirection
  );
  const handleSelectedTheme = (themeName: string) => {
    const themeData = getThemeByName(themeName);
    setFrameBackground(themeData?.editorBackground!);
    setGradientDirection(themeData?.gradientDirection!);
    setEditorTheme(
      themeData?.editorTheme.themeName!,
      themeData?.editorTheme.themeType!
    );
    setSelectedThemeColor(themeData?.selectedThemeColor!);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="font-bold flex gap-3 items-center bg-primary text-primary-foreground px-3 py-1.5 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer">
          <Paintbrush className="w-4 h-4" /> Themes
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="">
        <ScrollArea className="w-full h-full rounded-lg px-10 mt-10">
          {THEMES_OPTIONS.map((theme) => (
            <SheetClose asChild key={theme.themeName}>
              <div
                className="border w-full cursor-pointer transition rounded-xl group mb-5"
                onClick={() => handleSelectedTheme(theme.themeName)}
              >
                <Image
                  src={`/theme-images/${theme.themeName}-theme.png`}
                  width={300}
                  height={300}
                  loading="eager"
                  alt="aura-theme"
                  priority={true}
                  className="w-full object-contain rounded-t-xl brightness-75 group-hover:brightness-105 transition"
                />
                <div className="w-full h-10 font-black text-center text-lg  flex items-center justify-center">
                  {theme.themeName}
                </div>
              </div>
            </SheetClose>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default ThemesSheet;
