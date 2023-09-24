import { StateCreator } from 'zustand';

export type FrameStylingSlice = {
  frameWidth: number;
  framePadding: {
    activePadding: number;
    paddingValue: number;
  };
  showFrameBackground: boolean;
  frameBackgroundColor: string[];
  gradientDirection: string;

  setFrameWidth: (frameWidth: number) => void;
  setFramePadding: (activePadding: number, paddingValue: number) => void;
  setShowFrameBackground: () => void;
  setFrameBackgroundColor: (frameBackgroundColor: string[]) => void;
  setGradientDirection: (gradientDirection: string) => void;
};

export const createFrameStylingSlice: StateCreator<FrameStylingSlice> = (
  set
) => ({
  frameWidth: 700,
  framePadding: {
    activePadding: 2,
    paddingValue: 64,
  },
  showFrameBackground: true,
  frameBackgroundColor: ['#6D7BF7', '#A5CAF5'],
  gradientDirection: '90deg',

  setFrameWidth: (frameWidth: number) => {
    set(() => ({
      frameWidth,
    }));
  },

  setFramePadding(activePadding: number, paddingValue: number) {
    set(() => ({
      framePadding: {
        activePadding,
        paddingValue,
      },
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
