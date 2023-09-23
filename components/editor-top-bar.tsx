'use client';

import { WindowHeaderOptions } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';
import { useState } from 'react';

const EditorTopBar = () => {
  const [fileName, setFileName] = useState('App.js');

  const topBar = useBoundStore((state) => state.topBar);
  const topBarPosition = useBoundStore((state) => state.topBarPosition);
  const showAccent = useBoundStore((state) => state.showAccent);
  const themeType = useBoundStore((state) => state.theme.themeType);
  const showFilename = useBoundStore((state) => state.showFilename);
  const selectedThemeColor = useBoundStore((state) => state.selectedThemeColor);

  return (
    <div
      className={cn(
        'w-full flex absolute top-0 left-0 py-[18px] px-6 items-center z-10 rounded-t-md transition duration-200 ease-out',
        showAccent &&
          (themeType === 'light' ? 'bg-[#0000000d]' : 'bg-[#f5f5f50d]')
      )}
    >
      <div
        className="w-full flex items-center"
        style={{
          justifyContent:
            topBar.topBarName === WindowHeaderOptions.WINDOWS ||
            topBar.topBarName === WindowHeaderOptions.WINDOWSDARK
              ? 'flex-end'
              : `flex-${topBarPosition}`,
        }}
      >
        <img src={topBar.topBarType} className="" />
      </div>
      {showFilename && (
        <div
          className={cn(
            'text-sm absolute flex items-center justify-center py-0 px-[14px] h-10 bottom-0  transition duration-200 ease rounded-t-xl bg-red-300'
          )}
          style={{
            color:
              themeType === 'light'
                ? 'rgba(0,0,0,0.7)'
                : 'rgba(245, 245, 245, 0.8)',
            backgroundColor: selectedThemeColor,
            bottom: showAccent ? 0 : '5px',
            left:
              topBarPosition === 'end' ||
              topBar.topBarName === WindowHeaderOptions.WINDOWS ||
              topBar.topBarName === WindowHeaderOptions.WINDOWSDARK
                ? '40px'
                : '120px',
          }}
        >
          <div
            style={{
              background: selectedThemeColor,
            }}
            className="absolute bottom-0 -left-5 w-5 h-5"
          ></div>

          <div
            style={{
              backgroundColor: showAccent
                ? themeType === 'light'
                  ? 'rgba(0,0,0,.05)'
                  : 'rgba(255, 255, 255, 0.05)'
                : 'transparent',
            }}
            className="absolute bottom-0 -left-5 w-5 h-5 bg-[#ffffff0d] transition duration-200 ease rounded-br-xl"
          ></div>

          <div
            style={{
              backgroundColor: selectedThemeColor,
            }}
            className="absolute bottom-0 -right-5 w-5 h-5"
          ></div>

          <div
            style={{
              backgroundColor: showAccent
                ? themeType === 'light'
                  ? 'rgba(0,0,0,.05)'
                  : 'rgba(255, 255, 255, 0.05)'
                : 'transparent',
            }}
            className="absolute bottom-0 -right-5 w-5 h-5 bg-[#ffffff0d] transition duration-200 ease rounded-bl-xl"
          ></div>

          <input
            type="text"
            className="outline-none bottom-0 font-bold"
            style={{
              background: selectedThemeColor,
            }}
            onChange={(e) => setFileName(e.target.value)}
            value={fileName}
          />
        </div>
      )}
    </div>
  );
};

export default EditorTopBar;
