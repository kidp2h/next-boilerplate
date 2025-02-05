import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

import type { CounterSlice } from '@/lib/zustand/slices/counter-slice';
import { createCounterSlice } from '@/lib/zustand/slices/counter-slice';

export type GlobalStore = CounterSlice;

export const createGlobalStore = () => {
  return createStore<GlobalStore>()(
    devtools(
      persist(
        (set, get, replace) => ({
          ...createCounterSlice(set, get, replace),
        }),

        {
          name: 'global-store',
          storage: createJSONStorage(() => localStorage),
        },
      ),
    ),
  );
};
