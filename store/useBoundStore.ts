import { create } from 'zustand';
import {
  FrameStylingSlice,
  createFrameStylingSlice,
} from './createFrameStylingSlice';
import {
  EditorStylingSlice,
  createEditorStylingSlice,
} from './createEditorStylingSlice';
import {
  WindowStylingSlice,
  createWindowStylingSlice,
} from './createWindowStylingSlice';

export const useBoundStore = create<
  FrameStylingSlice & EditorStylingSlice & WindowStylingSlice
>()((...a) => ({
  ...createFrameStylingSlice(...a),
  ...createEditorStylingSlice(...a),
  ...createWindowStylingSlice(...a),
}));
