import { createStore } from 'zustand';

type CountState = {
    count: number
    increase: () => void
}

export const CounterStore = createStore<CountState>(set => ({
    count: 0,
    increase: () => set((state) => {
        console.log({ state })
        return ({ ...state, count: state.count + 1 });
    }),
}));