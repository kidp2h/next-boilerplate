import type { StateCreator } from 'zustand';

export type CounterSlice = {
  count: number;
  increase: () => void;
};
export const createCounterSlice: StateCreator<CounterSlice, [], []> = set => ({
  count: 0,
  increase: () => set(state => ({ count: state.count + 1 })),
});
