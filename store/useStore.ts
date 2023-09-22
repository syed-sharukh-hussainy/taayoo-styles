import { StateCreator, create } from 'zustand';

type FrameStylingSlice = {
  editorWidth: number;
  editorPadding: number;
  showEditorBackground: boolean;
  editorBackgroundColor: string[];
  gradientDirection: string;

  setEditorWidth: (editorWidth: number) => void;
  setEditorPadding: (editorPadding: number) => void;
  setShowEditorBackground: () => void;
  setEditorBackgroundColor: (editorBackgroundColor: string[]) => void;
  setGradientDirection: (gradientDirection: string) => void;
};

const useFrameStylingSlice: StateCreator<FrameStylingSlice> = (set) => ({
  editorWidth: 600,
  editorPadding: 64,
  showEditorBackground: true,
  editorBackgroundColor: ['#ffff3f', '#16AB44'],
  gradientDirection: 'to right',

  setEditorWidth: (editorWidth: number) => {
    set(() => ({
      editorWidth,
    }));
  },

  setEditorPadding(editorPadding: number) {
    set(() => ({
      editorPadding,
    }));
  },

  setShowEditorBackground() {
    set((state) => ({
      showEditorBackground: !state.showEditorBackground,
    }));
  },

  setEditorBackgroundColor(editorBackgroundColor: string[]) {
    set(() => ({
      editorBackgroundColor,
    }));
  },

  setGradientDirection(gradientDirection) {
    set(() => ({
      gradientDirection,
    }));
  },
});

export const useBoundStore = create<FrameStylingSlice>()((...a) => ({
  ...useFrameStylingSlice(...a),
}));
