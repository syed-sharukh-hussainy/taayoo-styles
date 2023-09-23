import { create } from 'zustand';

type State = {
  fileName: string;
  fileFormat: string;
  scale: number;
  quality: number;
  isLoading: boolean;
};

type Actions = {
  setFileName: (fileName: string) => void;
  setFileFormat: (fileFormat: string) => void;
  setImageScale: (scale: number) => void;
  setImageQuality: (quality: number) => void;
  setIsLoading: (isLoading: boolean) => void;
  reset: () => void;
};

const initialState: State = {
  fileName: 'code-snapshot',
  fileFormat: 'PNG',
  scale: 1,
  quality: 100,
  isLoading: false,
};

export const useExportToImage = create<State & Actions>((set) => ({
  ...initialState,

  setFileName: (fileName: string) => set({ fileName }),
  setFileFormat: (fileFormat: string) => set({ fileFormat }),
  setImageScale: (scale: number) => set({ scale }),
  setImageQuality: (quality: number) => set({ quality }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),

  reset: () => set(initialState),
}));
