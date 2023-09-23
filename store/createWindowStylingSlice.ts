import { WindowHeaderOptions } from '@/lib/constants';
import { StateCreator } from 'zustand';

export type WindowStylingSlice = {
  showWindowHeader: boolean;
  topBar: {
    topBarName: WindowHeaderOptions;
    topBarType: string;
  };
  topBarPosition: string;
  showAccent: boolean;
  showFilename: boolean;
  shadow: {
    name: string;
    value: string;
  };

  setShowWindowHeader: (showWindowHeader: boolean) => void;
  setTopBar: (topBarName: WindowHeaderOptions, topBarType: string) => void;
  setTopBarPosition: (topBarPosition: string) => void;
  setShowAccent: () => void;
  setShowFileName: () => void;
  setShadow: (name: string, value: string) => void;
};

export const createWindowStylingSlice: StateCreator<WindowStylingSlice> = (
  set
) => ({
  showWindowHeader: false,
  topBar: {
    topBarType: '/macos-filled.svg',
    topBarName: WindowHeaderOptions.MACOSFILLED,
  },
  topBarPosition: 'start',
  showAccent: false,
  showFilename: false,
  shadow: {
    name: 'Medium',
    value: '0px 0px 60px rgba(0, 0, 0, 0.6)',
  },

  setShowWindowHeader(showWindowHeader: boolean) {
    if (showWindowHeader) {
      document.documentElement.style.setProperty(
        '--editor-padding-top',
        '70px'
      );
    } else {
      document.documentElement.style.setProperty(
        '--editor-padding-top',
        '30px'
      );
    }
    set(() => ({
      showWindowHeader,
    }));
  },

  setTopBar(topBarName, topBarType) {
    set(() => ({
      topBar: {
        topBarName,
        topBarType,
      },
    }));
  },

  setTopBarPosition(topBarPosition) {
    set(() => ({
      topBarPosition,
    }));
  },

  setShowAccent() {
    set((state) => ({
      showAccent: !state.showAccent,
    }));
  },

  setShowFileName() {
    set((state) => ({
      showFilename: !state.showFilename,
    }));
  },

  setShadow(shadowName, shadowValue) {
    set(() => ({
      shadow: {
        name: shadowName,
        value: shadowValue,
      },
    }));
  },
});
