import { create } from 'zustand';
import {
  FrameStylingSlice,
  createFrameStylingSlice,
} from './createFrameStylingSlice';

export const useBoundStore = create<FrameStylingSlice>()((...a) => ({
  ...createFrameStylingSlice(...a),
}));
