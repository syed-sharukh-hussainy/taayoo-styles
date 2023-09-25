'use client';

import { getGradientColor } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';

import CustomEditor from './custom-editor';

const ScreenShotEditorContainer = () => {
  const showFrameBackground = useBoundStore(
    (state) => state.showFrameBackground
  );
  const paddingValue = useBoundStore(
    (state) => state.framePadding
  ).paddingValue;
  const selectedBg = useBoundStore((state) => state.frameBackgroundColor);
  const gradientDirection = useBoundStore((state) => state.gradientDirection);

  const padding = showFrameBackground ? paddingValue : 0;
  const background = showFrameBackground
    ? selectedBg.length === 1
      ? selectedBg[0]
      : `linear-gradient(${gradientDirection}, ${getGradientColor(selectedBg)})`
    : 'transparent';

  return (
    <section
      className="border rounded-lg mt-[4.5rem] mr-6 mb-4 pl-0 pr-6 pt-6 pb-6 select-none overflow-y-auto flex items-center justify-center bg-muted/50"
      style={{
        minHeight: 'calc(100vh - 90px)',
      }}
    >
      <div className="relative" id="exportToImage">
        <div
          className="flex items-center transition rounded-sm"
          style={{
            padding,
            background,
          }}
        >
          <CustomEditor />
        </div>
      </div>
    </section>
  );
};

export default ScreenShotEditorContainer;
