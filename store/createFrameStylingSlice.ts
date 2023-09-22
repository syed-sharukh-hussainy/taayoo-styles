import { StateCreator } from 'zustand';

export type FrameStylingSlice = {
  frameWidth: number;
  framePadding: number;
  showFrameBackground: boolean;
  frameBackgroundColor: string[];
  gradientDirection: string;

  setFrameWidth: (frameWidth: number) => void;
  setFramePadding: (framePadding: number) => void;
  setShowFrameBackground: () => void;
  setFrameBackgroundColor: (frameBackgroundColor: string[]) => void;
  setGradientDirection: (gradientDirection: string) => void;
};

export const createFrameStylingSlice: StateCreator<FrameStylingSlice> = (
  set
) => ({
  frameWidth: 600,
  framePadding: 64,
  showFrameBackground: true,
  frameBackgroundColor: ['#ffff3f', '#16AB44'],
  gradientDirection: 'to right',

  setFrameWidth: (frameWidth: number) => {
    set(() => ({
      frameWidth,
    }));
  },

  setFramePadding(framePadding: number) {
    set(() => ({
      framePadding,
    }));
  },

  setShowFrameBackground() {
    set((state) => ({
      showFrameBackground: !state.showFrameBackground,
    }));
  },

  setFrameBackgroundColor(frameBackgroundColor: string[]) {
    set(() => ({
      frameBackgroundColor,
    }));
  },

  setGradientDirection(gradientDirection) {
    set(() => ({
      gradientDirection,
    }));
  },
});
